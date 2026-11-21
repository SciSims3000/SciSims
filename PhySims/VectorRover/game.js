'use strict';

const gravity = 9.8;
const pushTime = 3;
const roverMass = 4;
const brakeForce = 8;
const dropHeight = 8;
const collisionPoint = 5;
const cargoMass = 2;
const brakeAcceleration = brakeForce / roverMass;
const combinedBrakeAcceleration = brakeForce / (roverMass + cargoMass);

const missions = [
  {
    name: 'Power check', topic: '01 / Net force', target: 9, tolerance: 0.8, extent: 20,
    label: 'Net force', unit: 'N', min: 2, max: 16, step: 0.5, initial: 5,
    goal: 'Reach the marked zone at the end of a 3 second push.',
    brief: 'The rover starts at rest. Adjust the forward force on a level, frictionless track.',
    facts: 'Mass 4 kg · Push 3 s',
    hint: 'Divide net force by mass to find acceleration (a = F ÷ m). From rest, distance = ½ × a × time². The test measures position as the push ends.',
    duration: () => pushTime,
    state: (force, time) => {
      const acceleration = force / roverMass;
      return { x: acceleration * time ** 2 / 2, y: 0, speed: acceleration * time };
    }
  },
  {
    name: 'Brake check', topic: '02 / Motion and braking', target: 12.25, tolerance: 1, extent: 25,
    label: 'Entry speed', unit: 'm/s', min: 2, max: 10, step: 0.25, initial: 5,
    goal: 'Bring the rover to rest inside the marked zone.',
    brief: 'The brakes engage as soon as the rover enters the track and apply a constant backward force until it stops.',
    facts: 'Mass 4 kg · Braking force 8 N',
    hint: 'Braking slows the rover by 2 m/s each second. Stopping time = entry speed ÷ 2. Average speed during braking is half the entry speed.',
    duration: speed => speed / brakeAcceleration,
    state: (speed, time) => brakingState(speed, brakeAcceleration, time)
  },
  {
    name: 'Gravity gap', topic: '03 / Gravity', target: 11.5, tolerance: 0.9, extent: 25,
    label: 'Launch speed', unit: 'm/s', min: 3, max: 14, step: 0.25, initial: 6,
    goal: 'Land the rover in the marked zone below the ledge.',
    brief: 'Launch horizontally from the ledge. Gravity accelerates the rover downwards. Air resistance is ignored.',
    facts: 'Drop 8 m · Earth gravity 9.8 m/s²',
    hint: 'The vertical drop sets the time in the air (about 1.28 s). Horizontal speed stays constant, so horizontal distance = launch speed × flight time.',
    duration: () => Math.sqrt(2 * dropHeight / gravity),
    state: (speed, time) => ({
      x: speed * time, y: Math.max(0, dropHeight - gravity * time ** 2 / 2),
      speed: Math.hypot(speed, gravity * time)
    })
  },
  {
    name: 'Cargo capture', topic: '04 / Momentum', target: 5 + 49 / 6, tolerance: 0.95, extent: 25,
    label: 'Approach speed', unit: 'm/s', min: 3, max: 10, step: 0.25, initial: 5,
    goal: 'Collect the stationary cargo and stop the combined load in the zone.',
    brief: 'The rover rolls freely until it picks up the cargo at 5 m. They stick together and the brakes engage immediately after impact.',
    facts: 'Rover 4 kg · Cargo 2 kg · Braking force 8 N',
    hint: 'Momentum = mass × velocity. During the brief impact the external impulse is negligible. The combined speed is 4 ÷ 6 of the approach speed. Then the brakes slow the combined load by 8 ÷ 6 m/s each second.',
    duration: speed => collisionPoint / speed + captureSpeed(speed) / combinedBrakeAcceleration,
    state: (speed, time) => {
      const collisionTime = collisionPoint / speed;
      if (time < collisionTime) return { x: speed * time, y: 0, speed };
      const state = brakingState(captureSpeed(speed), combinedBrakeAcceleration, time - collisionTime);
      return { ...state, x: collisionPoint + state.x, cargo: true };
    }
  }
];

function captureSpeed(speed) {
  return roverMass * speed / (roverMass + cargoMass);
}

function brakingState(speed, acceleration, time) {
  return { x: speed * time - acceleration * time ** 2 / 2, y: 0, speed: Math.max(0, speed - acceleration * time) };
}

const byId = id => document.getElementById(id);
const setting = byId('setting');
const run = byId('run');
const retry = byId('retry');
const next = byId('next');
const feedback = byId('feedback');
const canvas = byId('track');
const context = canvas.getContext('2d');
const best = missions.map(() => 0);
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let missionIndex = 0;
let frame = 0;
let phase = 'ready';

const tabs = missions.map((mission, index) => {
  const button = document.createElement('button');
  button.textContent = mission.name;
  button.addEventListener('click', () => selectMission(index));
  byId('missions').append(button);
  return button;
});

function selectMission(index) {
  missionIndex = index;
  const mission = missions[index];
  tabs.forEach((tab, i) => tab.setAttribute('aria-pressed', String(i === index)));
  for (const key of ['topic', 'brief', 'facts', 'hint']) byId(key).textContent = mission[key];
  byId('mission').textContent = mission.name;
  const lower = (mission.target - mission.tolerance).toFixed(2);
  const upper = (mission.target + mission.tolerance).toFixed(2);
  byId('goal').textContent = `${mission.goal} Target zone ${lower}–${upper} m.`;
  byId('setting-label').textContent = mission.label;
  for (const key of ['min', 'max', 'step']) setting[key] = mission[key];
  setting.value = mission.initial;
  reset();
}

function reset() {
  cancelAnimationFrame(frame);
  phase = 'ready';
  run.disabled = false;
  setting.disabled = false;
  retry.disabled = true;
  next.hidden = true;
  feedback.textContent = 'Set a value, then predict whether the rover will finish short of, inside or beyond the zone.';
  updateSetting();
}

function updateSetting() {
  const mission = missions[missionIndex];
  byId('value').textContent = `${setting.value} ${mission.unit}`;
  setting.setAttribute('aria-valuetext', byId('value').textContent);
  render(mission.state(setting.valueAsNumber, 0), 0);
}

function render(state, time) {
  const mission = missions[missionIndex];
  const floor = 321;
  const scale = 778 / mission.extent;
  const xAt = metres => 62 + metres * scale;
  const roverX = xAt(state.x);
  const roverY = floor - state.y * scale;
  const zone = xAt(mission.target - mission.tolerance);
  const zoneWidth = 2 * mission.tolerance * scale;
  const sky = context.createLinearGradient(0, 0, 0, floor);
  sky.addColorStop(0, '#122539');
  sky.addColorStop(1, '#263f4c');
  context.fillStyle = sky;
  context.fillRect(0, 0, 900, 400);
  for (let x = 0; x < 900; x += 30) {
    for (let y = 10; y < floor; y += 30) {
      context.fillStyle = '#647a8e40';
      context.fillRect(x, y, 2, 2);
    }
  }
  context.fillStyle = '#111b25';
  context.fillRect(0, floor, 900, 400 - floor);
  context.fillStyle = '#557381';
  context.fillRect(0, floor, 900, 3);
  if (missionIndex === 2) {
    context.fillStyle = '#405b66';
    context.fillRect(0, floor - dropHeight * scale, xAt(0), dropHeight * scale);
  }
  context.fillStyle = '#a5f3ce25';
  context.fillRect(zone, 58, zoneWidth, floor - 58);
  context.strokeStyle = '#a5f3ce';
  context.strokeRect(zone, 58, zoneWidth, floor - 58);
  context.fillStyle = '#a5f3ce';
  context.font = 'bold 22px monospace';
  context.textAlign = 'center';
  context.fillText('TARGET', zone + zoneWidth / 2, 42);
  context.fillRect(xAt(mission.target) - 1, floor - 13, 2, 26);
  context.font = '19px monospace';
  for (let tick = 0; tick <= mission.extent; tick += 5) {
    context.fillStyle = '#8da9b7';
    context.fillRect(xAt(tick), floor + 5, 1, 10);
    context.fillText(`${tick} m`, xAt(tick), floor + 39);
  }
  if (missionIndex === 3 && !state.cargo) drawCargo(xAt(collisionPoint) + 25, floor - 21);
  context.fillStyle = '#ffd38b';
  context.fillRect(roverX - 22, roverY - 30, 44, 20);
  context.fillRect(roverX - 12, roverY - 43, 25, 14);
  context.fillStyle = '#286271';
  context.fillRect(roverX - 6, roverY - 40, 15, 10);
  if (state.cargo) drawCargo(roverX + 30, roverY - 21);
  for (const offset of [-13, 13]) {
    context.fillStyle = '#101820';
    context.beginPath();
    context.arc(roverX + offset, roverY - 9, 9, 0, 2 * Math.PI);
    context.fill();
    context.fillStyle = '#8da9b7';
    context.fillRect(roverX + offset - 3, roverY - 12, 6, 6);
  }
  byId('position').textContent = `${state.x.toFixed(2)} m`;
  byId('speed').textContent = `${state.speed.toFixed(2)} m/s`;
  byId('elapsed').textContent = `${time.toFixed(2)} s`;
}

function drawCargo(x, y) {
  context.fillStyle = '#76cdd4';
  context.fillRect(x - 10, y, 20, 21);
  context.strokeStyle = '#153442';
  context.strokeRect(x - 7, y + 3, 14, 15);
}

function start() {
  if (phase !== 'ready') return;
  phase = 'running';
  const mission = missions[missionIndex];
  const chosen = setting.valueAsNumber;
  const duration = mission.duration(chosen);
  run.disabled = true;
  setting.disabled = true;
  retry.disabled = false;
  retry.focus();
  feedback.textContent = 'Test running…';

  if (reducedMotion.matches) {
    finish(mission, mission.state(chosen, duration), duration);
    return;
  }
  const started = performance.now();
  function tick(now) {
    const time = Math.min(duration, Math.max(0, (now - started) / 1000));
    const state = mission.state(chosen, time);
    if (time >= duration) {
      finish(mission, state, time);
    } else {
      render(state, time);
      frame = requestAnimationFrame(tick);
    }
  }
  frame = requestAnimationFrame(tick);
}

function finish(mission, state, time) {
  phase = 'finished';
  render(state, time);
  const offset = state.x - mission.target;
  const error = Math.abs(offset);
  if (error <= mission.tolerance + 1e-9) {
    const points = Math.max(60, Math.round(100 - 40 * error / mission.tolerance));
    best[missionIndex] = Math.max(best[missionIndex], points);
    byId('score').textContent = `Score ${best.reduce((sum, score) => sum + score, 0)} / 400`;
    const complete = best.every(Boolean);
    feedback.textContent = `Target reached at ${state.x.toFixed(2)} m. You earned ${points} points.${complete ? ' All missions cleared!' : ''}`;
    next.hidden = missionIndex === missions.length - 1;
  } else {
    const gap = (error - mission.tolerance).toFixed(2);
    const direction = offset < 0 ? 'short of' : 'beyond';
    const adjustment = offset < 0 ? 'Increase' : 'Decrease';
    feedback.textContent = `Finished at ${state.x.toFixed(2)} m, ${gap} m ${direction} the target zone. ${adjustment} your ${mission.label.toLowerCase()} and retry.`;
  }
}

setting.addEventListener('input', updateSetting);
run.addEventListener('click', start);
retry.addEventListener('click', () => {
  reset();
  setting.focus();
});
next.addEventListener('click', () => {
  selectMission(missionIndex + 1);
  tabs[missionIndex].focus();
});
selectMission(0);
