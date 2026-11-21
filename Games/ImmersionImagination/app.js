const SCENES = {
  prologue: {
    place: "The valley below Aster Reach", time: "One hour before nightfall",
    text: [
      `For most of the afternoon, the observatory has been no more than a white speck above you—sometimes visible, sometimes swallowed by cloud. It stands on the last shoulder of the mountain, where the forest gives way to stone and the stone rises into the sky. No road reaches it now. The old cable railway ceased running twelve years ago, on the same winter morning Professor Elian Voss disappeared.`,
      `The people in the valley do not agree about what happened. Some say Voss became lost in a storm. Others insist that he left deliberately, taking years of observations with him. The oldest villagers simply glance towards the mountain and change the subject. Yet three nights ago, for the first time in twelve years, a narrow line of light appeared beneath the observatory dome.`,
      `That was when the parcel arrived.`,
      `It contained a hand-drawn map, a heavy brass key and a letter sealed with dark green wax. The paper smelled faintly of dust and woodsmoke. Only one sentence had been written inside, in a hurried hand that weakened towards the end:`,
      `“Do not decide what you have seen until you have gathered the evidence.”`,
      `Now the afternoon is failing. Rain moves across the valley in long grey curtains, and the path ahead is climbing into cloud. You close your fingers around the key and begin the ascent.`
    ],
    prompt: "Your expedition begins.",
    choices: [["Begin the climb to Aster Reach.", "ascent"]]
  },
  ascent: {
    place: "The mountain path", time: "Dusk",
    text: [
      `The path was built for horses, instruments and crates of glass. Time has narrowed it. Ferns crowd its lower edge, while roots have lifted the paving stones into uneven steps. Every few metres you pass an iron post whose lantern has long since rusted dark.`,
      `Above you, the observatory grows slowly out of the mist. First comes the dome, enormous and pale. Then the western tower. Then a long wall pierced by windows so black that they reflect nothing—not the sky, not the mountain, not even the occasional flash of distant lightning.`,
      `You stop beneath the final lantern post. A small metal plate is fixed to it, protected from the weather by a folding cover. Inside, Voss has drawn the eastern ridge and marked three positions above it with tiny circles. A fourth circle is unfinished. The mark is not labelled, and nothing in the letter explains it.`,
      `From somewhere beyond the wall comes a measured metallic sound. It is too slow to be footsteps and too regular to be the wind.`
    ],
    prompt: "The path divides below the observatory walls.",
    choices: [
      ["Follow the lantern posts to the main door.", "mainDoor"],
      ["Take the narrow service path towards the roof stairs.", "roof"]
    ]
  },
  approach: {
    place: "The mountain road", time: "Dusk",
    text: [`The road has narrowed to a pale thread between the mountain and the clouds. Far above, the observatory dome catches the last of the daylight.`, `In your pocket, Professor Voss’s brass key is colder than the rain. His sealed message contains only one instruction: “Do not decide what you have seen until you have gathered the evidence.”`],
    prompt: "The path divides below the observatory walls.",
    choices: [
      ["Follow the lantern posts to the main door.", "mainDoor"],
      ["Take the narrow service path towards the roof stairs.", "roof"]
    ]
  },
  mainDoor: {
    place: "Main entrance", time: "Nightfall", object: 1,
    text: [`The lantern posts end before a pair of oak doors banded with green-black copper. Rainwater has gathered in the carved letters above them: ASTER REACH ASTRONOMICAL STATION. Beneath the name, almost erased by weather, is a smaller line: FOR PATIENT OBSERVERS OF AN IMPATIENT UNIVERSE.`, `You push against the door. Nothing happens. You place your shoulder against the wood and push harder. Somewhere inside, metal scrapes against stone. The door moves perhaps a centimetre, and a breath of air escapes through the gap. It smells of dust, cold iron and something faintly electrical.`, `The brass key enters the lock smoothly. It is the only part of the entrance that does not seem neglected. When you turn it, several hidden catches withdraw in sequence, each one deeper inside the wall than the last.`, `<span class="sound">Click. A pause. Click. A pause. Click.</span>`, `The final click does not come from the lock. It answers from somewhere far inside the observatory.`],
    prompt: "Part of Aster Reach is still running.",
    choices: [["Use Voss’s key and enter the main chamber.", "chamber"], ["Leave the door and circle towards the roof.", "roof"]]
  },
  roof: {
    place: "Western roof", time: "Nightfall", observe: "The Moon is visible while a band of sunset still remains.",
    text: [`The service path becomes an iron stair bolted directly to the outer wall. It shudders beneath each step. Below, the valley has almost disappeared; only the river remains visible, carrying the last light like a thin piece of broken mirror.`, `When you pull yourself onto the western roof, the wind strikes with enough force to make you grip the railing. Slate tiles slope away on either side. Rainwater races through copper channels and spills from stone mouths carved into the shape of owls.`, `Above the valley, the sky is divided in two: amber at the horizon, deep blue overhead. The Moon hangs above the eastern ridge. It is bright, but the sky around it is not yet dark. For a moment you wonder whether you have ever actually looked for it before sunset.`, `Beside the railing stands an empty mounting bracket. Its joints allow it to turn both sideways and upwards, and although the rest of the roof is wet, the circular fitting at its centre is dry.`],
    prompt: "You can investigate the roof, or enter through a warped side door.",
    choices: [["Sketch the Moon’s position beside the ridge.", "roofSketch"], ["Try the side door.", "chamber"]]
  },
  roofSketch: {
    place: "Western roof", time: "Nightfall", flags: ["sketchedMoon"],
    text: [`You begin with the ridge because it does not move. The broken peak goes slightly left of centre; the lower, rounded hill slopes away to the right. Only when those landmarks are fixed do you add the Moon above them.`, `While you draw, the colour drains from the valley. The amber band at the horizon contracts to a narrow seam and the first stars appear overhead. The Moon seems unchanged until you compare it with the broken peak and realise that it has shifted almost imperceptibly.`, `On the empty mounting bracket, someone has scratched a curved line ending in three tiny circles. The scratches are shallow and uncertain, as though they were made outdoors with numb fingers. Beside the final circle is an arrow pointing into empty brass.`, `The mark might show a path. It might show a sequence. Or it might show what somebody expected to happen next.`],
    prompt: "The mark may be a path, a sequence, or something else entirely.",
    choices: [["Enter the observatory.", "chamber"], ["Follow the roofline towards the dome.", "domeExterior"]]
  },
  chamber: {
    place: "Main chamber", time: "Early night",
    text: [`The main chamber is larger than the building appeared from outside. Your lamplight reaches the tiled floor, the nearest cabinets and the lower curve of a vaulted ceiling. Everything above that remains in darkness.`, `Dust lies thickly over the tiles—except for one narrow arc where something heavy has moved. At the centre of the room, a brass model turns one reluctant notch at a time. Rings pass through rings. Small spheres travel around larger ones. The entire mechanism trembles, pauses, and advances again.`, `Tall windows occupy the eastern wall. Each has been shuttered from within, but a line of blue evening light has found a gap and lies across the machinery like a measuring rule. As the model moves, one pale sphere briefly crosses that line.`, `Two passages leave the chamber. A green door bears a tarnished plate engraved PROFESSOR E. VOSS. Across from it, a spiral stair climbs through the ceiling towards the telescope dome. The repeated click comes from neither direction. It rises from inside the model itself.`],
    prompt: "Both routes may explain the sound.",
    choices: [["Search Professor Voss’s study.", "study"], ["Climb towards the telescope dome.", "domeExterior"]]
  },
  study: {
    place: "Voss’s study", time: "Early night", object: 2, flags: ["foundChart"],
    text: [`Voss’s study looks abandoned in the middle of a thought. Books remain open with their spines turned upwards. A cup stands beside an ink-stained glove, the tea inside long vanished into a brown ring. Papers cover every flat surface, but the disorder is not careless: similar dates have been joined with green thread, and small cards divide observations made at sunset from those made before dawn.`, `A narrow bed occupies one corner. It has not been slept in. Above it hangs a charcoal portrait of the eastern ridge, drawn from the observatory roof. At first it seems to be a landscape. Then you notice the tiny circles marked above the ridge line, each accompanied by a date and time.`, `Pinned across the desk is a hand-drawn map of the eastern sky. The bottom of the page is filled by the dark, uneven outline of the ridge. Its highest peak stands a little left of centre, shaped like a broken tooth. A smaller rounded hill slopes down towards the right-hand edge. Voss has drawn a short vertical line through the highest peak and labelled it NORTH-EAST.`, `Four faint horizontal lines cross the sky above the ridge, equally spaced like the lines of a writing book. Along them, three small circles rise from left to right in a shallow curve. The first circle sits just above the broken peak. The second is higher and slightly to the right. The third rests above the rounded hill, almost touching the uppermost line. Each circle has a date beneath it and a tiny arrow pointing towards the next position.`, `A fourth arrow continues beyond the final circle. It ends at an empty dotted outline near the upper-right corner. Voss has pressed the pencil hard enough to dent the paper around it, then written one word beneath: TOMORROW.`, `You realise that the empty space was prepared before the observation could be made.`],
    record: "Record this observation. In your diary, recreate Voss’s map from the description before you continue.",
    prompt: "Voss expected something to appear in the empty position.",
    choices: [["Compare the chart with the brass model.", "model"], ["Take the chart to the dome.", "lensRoom"]]
  },
  model: {
    place: "Main chamber", time: "Early night", object: 4, flags: ["examinedModel"],
    text: [`Up close, the model is too complicated to understand all at once. Its brass has darkened wherever hands rarely touched it, while the edges of three rings still shine. Tiny numbers cover the rim. Some have been crossed out and replaced in Voss’s handwriting.`, `The mechanism resembles a clock, although it has no hands and marks no hours. The largest sphere does not sit at its centre. A smaller pale sphere circles another moving sphere, so that no single wheel produces the path you see.`, `You turn the outer ring to the first date on Voss’s chart. The pale sphere settles above a miniature broken peak. At the second date it moves higher and to the right. At the third, it rests above a rounded hill.`, `Beyond that date, the ring continues. The pale sphere advances into a position that Voss has not recorded.`, `A handwritten label has faded until only one word remains: APPARENT.`],
    prompt: "The machine can be moved beyond the final observation.",
    choices: [["Search for the model’s missing instruction plate.", "workshop"], ["Go to the telescope dome.", "lensRoom"]]
  },
  workshop: {
    place: "Lens workshop", time: "Night", object: 3, flags: ["foundLens"],
    text: [`The room below the dome is colder than the rest of the observatory. Its walls are lined with shallow drawers, each fitted with a brass handle and a handwritten label: CLEAR GLASS, SMOKED GLASS, BLUE, RED, DAMAGED, UNTESTED. Long tables run beneath the windows. Pale circles in the dust show where instruments once stood.`, `You open the drawers one by one. Some contain nothing but velvet impressions. Others hold lenses no larger than coins, wrapped in tissue and annotated with dates. Voss has recorded what each lens allowed him to see—and, more importantly, what it caused him to miss.`, `The final drawer resists. When it opens, something rolls softly against the wood. Inside lies a blue lens in a circular brass frame. A crack runs from its edge towards the centre, dividing anything seen through it into two slightly displaced images.`, `Its frame is the same size as the empty bracket on the roof. Beneath it, Voss has written: “For comparison, never for first sight.” The last two words have been underlined twice.`, `Across the room, a rack of larger lenses conceals a narrow recess in the wall. Something metallic is wedged inside, but removing it would mean setting the blue lens down and working in near darkness.`],
    prompt: "Two pieces of the room seem deliberately connected to the investigation.",
    choices: [["Carry it to the roof bracket.", "blueView"], ["Continue upward to the dome.", "lensRoom"]]
  },
  blueView: {
    place: "Western roof", time: "Night", flags: ["testedLens"],
    text: [`You carry the lens outside with both hands. The storm has passed beyond the valley, leaving the roof washed clean and shining. Water trembles along the railing. Above it, the sky has deepened from blue to black.`, `The brass frame settles into the mounting bracket as though it has been waiting there. Through the glass, the world changes. The last colour disappears from the horizon. The Moon becomes a hard white disc, while several faint stars vanish completely. The crack produces a pale second edge that moves whenever you move your head.`, `You lower the lens and look with your unaided eye. The missing stars return. The second lunar edge disappears. The Moon itself remains above the same place on the ridge.`, `Voss’s warning now feels less like an instruction for using the lens and more like a rule for observing anything: begin with the world, then introduce the instrument. Otherwise, you may mistake the instrument’s effects for the world’s.`],
    prompt: "The lens changed the view. What, if anything, did it change in the sky?",
    choices: [["Return to the lens workshop.", "workshop"], ["Take your observation to the dome.", "lensRoom"]]
  },
  domeExterior: {
    place: "Telescope dome", time: "Night",
    text: [`The spiral stair ends beneath the observatory dome. Up close, the curved ceiling is not smooth: hundreds of riveted metal plates overlap like the scales of some enormous sleeping creature. Wind presses against them from outside and travels around the chamber in a slow metallic whisper.`, `The dome door has no ordinary lock. Two brass rings surround its handle. The outer ring is engraved with the jagged outline of the eastern horizon. The inner ring carries eight small lunar shapes, from a narrow crescent to a complete circle and back again.`, `You turn the inner ring until the full Moon sits above the highest peak. The handle moves halfway, catches, and refuses to go farther. When you release it, hidden counterweights return both rings to their starting positions.`, `A person in a hurry might try every possible arrangement. Voss did not build this place for hurried people. A rectangular gap beside the mechanism suggests that an instruction plate—or perhaps part of the mechanism itself—is missing.`, `From beyond the locked door comes a faint sliding sound. Whatever is moving inside the dome is much larger than the model below.`],
    prompt: "The lock can be guessed at, or investigated.",
    choices: [["Search Voss’s study for records.", "study"], ["Inspect the machinery below the stair.", "workshop"]]
  },
  lensRoom: {
    place: "Dome antechamber", time: "Night",
    text: state => [`The antechamber is narrow enough for your shoulders to brush both walls. At first the plaster appears cracked. Then your lamplight reveals hundreds of pencil marks: dates, arrows, angles and small sketches of the eastern ridge, layered one over another through years of observation.`, `Not all of them agree. Some positions have been erased. Others are ringed or accompanied by question marks. In several places Voss has written TOO BRIGHT, CLOUD, LENS ERROR or CHECK AGAIN. The walls do not display a collection of answers. They preserve a long history of corrections.`, state.flags.has("foundChart") ? `You unfold the chart from Voss’s study. Its three circles fit one group of wall marks precisely. The dotted fourth position lies where tonight’s Moon appeared above the ridge—but its date is not tonight. It is tomorrow’s.` : `One curved sequence resembles the scratches on the roof bracket. Its final mark is not a circle but an arrow ending in clean, empty plaster. Whatever Voss expected to record there had not yet happened.`, `Near the dome controls, four screw holes form an empty rectangle. A single word has been written beside them: POSITION. Beneath it, in smaller letters: NOT APPEARANCE.`],
    prompt: "The wall records disagreements as carefully as successes.",
    choices: [["Look for the missing plate in the workshop.", "calibration"], ["Return to the roof and gather more evidence.", "roof"]]
  },
  calibration: {
    place: "Lens workshop", time: "Late night", object: 5, flags: ["foundPlate"],
    text: state => [`You return to the recess behind the lens rack and ease the trapped object free. It is a narrow brass plate, heavier than its size suggests. Two engraved rings reproduce the mechanism on the dome door, but here the lunar shapes have been crossed through with a single diagonal line.`, `Along the lower edge, Voss has engraved a sentence deeply enough to survive the tarnish: “Set by position, not by appearance.” Beside it is a tiny diagram showing a sightline from the roof, across the broken peak, to a point in the sky.`, state.visits.calibration > 1 ? `You have held the plate before, but this time another detail becomes visible. A small arrow beside the sightline does not point to the brightest part of the Moon. It points to the Moon’s centre. The crack in the blue lens would have made that centre difficult to judge.` : `One corner of the plate is bent. On its reverse, written in pencil rather than engraved, are the words: “If these positions agree, open the eastern shutter.”`, `A folded scrap of paper has been trapped behind the plate. Most of its sentence has been torn away. What remains reads: “…one viewpoint can never be enough. I will take the eastern road before dawn.”`],
    prompt: "The plate may open the dome. The torn note may explain why Voss left it.",
    choices: [["Return to the dome mechanism.", "unlock"], ["Check Voss’s chart first.", "study"]]
  },
  unlock: {
    place: "Telescope dome", time: "Late night",
    text: state => state.flags.has("foundPlate") && state.flags.has("foundChart")
      ? [`You fit the brass plate into the empty rectangle. Its bent corner prevents it from sitting flat, but the engraved sightline aligns with the broken peak on the outer ring.`, `Using Voss’s chart, you turn the ring until tomorrow’s empty position rests above that peak. The lunar shapes no longer look like answers. They are distractions—different appearances of the same object.`, `The handle settles beneath your hand. For a moment nothing happens. Then the counterweight behind the wall drops with a sound like a distant bell.`, `<span class="sound">The lock releases.</span>`, `Above you, machinery wakes in stages. Bolts withdraw. Chains tighten. The enormous shutters begin to separate, and a blade of moonlight descends through the widening gap.`]
      : [`Without the missing plate and Voss’s measurements, the lunar shapes seem to offer an answer. You align the brightest shape with the Moon’s brightest visible edge and pull the handle.`, `The mechanism strains. Somewhere behind the wall, a weight rises, hangs for a breath, then drops back into place. Both rings return to their starting positions.`, `As they move, a tiny engraved arrow catches the lamplight. It points towards a location above the horizon—not towards any particular lunar shape.`, `The door has not told you that you are wrong. It has shown you that something your explanation depends upon is missing.`],
    prompt: state => state.flags.has("foundPlate") && state.flags.has("foundChart") ? "The main telescope is waiting." : "Your first explanation does not fit the mechanism.",
    choices: state => state.flags.has("foundPlate") && state.flags.has("foundChart")
      ? [["Look through the telescope.", "reveal"]]
      : [["Reconsider the calibration plate.", "calibration"], ["Gather Voss’s observations.", "study"]]
  },
  reveal: {
    place: "The open dome", time: "Midnight", flags: ["openedDome"],
    text: state => [`The dome opens onto a sky so clear that the mountain seems to have fallen away beneath it. The main telescope occupies the centre of the chamber, longer than a railway carriage and balanced on a web of brass supports. Despite its size, it begins to turn almost silently.`, `It does not point towards the Moon. It moves past it, following the curve recorded on Voss’s chart, and stops at the empty position marked TOMORROW.`, `You look through the eyepiece. At first there is only darkness. Then your eye adjusts. The broken peak enters the bottom of the view, followed by a narrow saddle in the ridge and, beyond it, something the naked eye could not separate from the stone: a small building with a silver roof.`, `A second observatory.`, `On its roof, a mirror catches the moonlight. The flash is brief but deliberate. Three short reflections. A pause. Three more.`, state.flags.has("sketchedMoon") ? `Your sketch, Voss’s chart and the telescope now form a chain of observations made from different moments—and perhaps from different sides of the valley.` : `Voss’s chart gives you one record. The distant station may contain another. Between them lies the question he could not answer from Aster Reach alone.`, `Beside the eyepiece, protected under a glass cover, is Voss’s final complete entry: “One view can begin an explanation. It cannot finish one. If the eastern light answers, the work continued.”`],
    prompt: "The mirror flashes again. You must decide what to do before the Moon passes behind the dome.",
    choices: [["Use the dome mirror to answer the signal.", "endingSignal"], ["Complete Voss’s unfinished observation first.", "endingRecord"], ["Keep watching without answering yet.", "endingWait"]]
  }
};

const freshState = () => ({ scene: "prologue", objects: [], observations: [], inferences: [], flags: new Set(), visits: {} });
let state = loadState();
let readingOptions = loadReadingOptions();

const el = id => document.getElementById(id);

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("aster-reach-state"));
    if (!saved || saved.storyVersion !== 2 || !SCENES[saved.scene]) return freshState();
    return { ...freshState(), ...saved, flags: new Set(saved.flags || []) };
  } catch { return freshState(); }
}

function saveState() {
  localStorage.setItem("aster-reach-state", JSON.stringify({ ...state, storyVersion: 2, flags: [...state.flags] }));
}

function loadReadingOptions() {
  try {
    return { font: "sans", size: "standard", theme: "dark", ...JSON.parse(localStorage.getItem("aster-reach-reading-options")) };
  } catch {
    return { font: "sans", size: "standard", theme: "dark" };
  }
}

function applyReadingOptions() {
  document.documentElement.dataset.font = readingOptions.font;
  document.documentElement.dataset.size = readingOptions.size;
  document.documentElement.dataset.theme = readingOptions.theme;
  Object.entries(readingOptions).forEach(([name, value]) => {
    const input = document.querySelector(`input[name="${name}"][value="${value}"]`);
    if (input) input.checked = true;
  });
}

function saveReadingOption(name, value) {
  readingOptions[name] = value;
  localStorage.setItem("aster-reach-reading-options", JSON.stringify(readingOptions));
  applyReadingOptions();
}

function valueOf(value) { return typeof value === "function" ? value(state) : value; }

function visit(id) {
  state.scene = id;
  state.visits[id] = (state.visits[id] || 0) + 1;
  const scene = SCENES[id];
  (scene.flags || []).forEach(flag => state.flags.add(flag));
  if (scene.object && !state.objects.includes(scene.object)) state.objects.push(scene.object);
  if (scene.observe && !state.observations.includes(scene.observe)) state.observations.push(scene.observe);
  saveState();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function render() {
  const scene = SCENES[state.scene];
  el("place").textContent = scene.place;
  el("time").textContent = scene.time;
  el("story").innerHTML = valueOf(scene.text).map(p => `<p>${p}</p>`).join("");
  const recordCue = el("record-cue");
  recordCue.hidden = !(scene.record || scene.object || scene.observe);
  recordCue.textContent = scene.record || (scene.object
    ? "Record this observation in your expedition diary."
    : scene.observe
      ? "Record exactly what you observed before deciding what it means."
      : "");
  el("prompt").textContent = valueOf(scene.prompt);
  const choices = valueOf(scene.choices);
  el("choices").replaceChildren(...choices.map(([label, target]) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => target.startsWith("ending") ? end(target) : visit(target));
    return button;
  }));
}

function end(type) {
  const endings = {
    endingSignal: ["The eastern light answers", `You turn the dome mirror towards the silver roof and send three flashes across the valley. For several seconds there is nothing. Then the distant mirror answers—not three times, but four. A new signal. A new question. Voss left Aster Reach by the eastern road, and someone continued his observations there. Whether that observer is Voss, or somebody who inherited his work, remains beyond what tonight’s evidence can establish.`],
    endingRecord: ["The unfinished entry", `You resist the distant signal long enough to return to the chart. Using the broken peak as your reference, you add tonight’s position beside Voss’s predicted one. They are close, but not identical. That small difference matters. Only after recording it do you answer the eastern light. The reply comes immediately, as though someone has been waiting for an observer careful enough to write before concluding.`],
    endingWait: ["One more observation", `You do not answer immediately. A signal proves that somebody—or some mechanism—is operating across the valley, but it does not tell you who. You watch. Minutes pass. The Moon moves towards the edge of the open dome, and the distant mirror flashes at measured intervals. By the time you finally respond, your diary contains enough detail for another observer to examine what happened rather than merely accept your conclusion.`]
  };
  const [title, copy] = endings[type];
  el("ending-title").textContent = title;
  el("ending-copy").innerHTML = `<p>${copy}</p><p>Your physical expedition diary is now the record of the route you took, the evidence you noticed and the ideas you changed along the way.</p>`;
  el("ending-dialog").showModal();
}

el("restart").addEventListener("click", () => { if (confirm("Begin the journey again from the valley?")) { state = freshState(); saveState(); render(); } });
el("ending-close").addEventListener("click", () => el("ending-dialog").close());
el("options-open").addEventListener("click", () => el("options-dialog").showModal());
el("options-close").addEventListener("click", () => el("options-dialog").close());
el("options-dialog").addEventListener("change", event => {
  if (event.target.matches('input[type="radio"]')) saveReadingOption(event.target.name, event.target.value);
});

if (!state.visits[state.scene]) state.visits[state.scene] = 1;
applyReadingOptions();
render();
