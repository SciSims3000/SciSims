(function () {
  "use strict";

  const APP_KEY = "everybody-thinks-v1";
  const POOL_KEY = "everybody-thinks-question-pool-v1";
  const AUTO_STUDENT_KEY = "everybody-thinks-auto-student";
  let lastRemoved = null;
  let randomRestore = null;
  let timerRemaining = null;

  const readApp = () => {
    try { return JSON.parse(localStorage.getItem(APP_KEY) || "{}") || {}; }
    catch { return {}; }
  };
  const questions = () => (Array.isArray(readApp().questions) ? readApp().questions : []);
  const readPool = () => {
    try {
      const value = JSON.parse(localStorage.getItem(POOL_KEY) || "{}");
      return { enabled: Boolean(value.enabled), used: new Set(Array.isArray(value.used) ? value.used : []) };
    } catch { return { enabled: false, used: new Set() }; }
  };
  const writePool = (pool) => localStorage.setItem(POOL_KEY, JSON.stringify({ enabled: pool.enabled, used: [...pool.used] }));
  const currentQuestion = () => {
    const card = document.querySelector(".question-card");
    const label = card && card.querySelector("small");
    const prompt = card && card.querySelector("p");
    return label && label.textContent.trim() === "QUESTION" && prompt ? prompt.textContent.trim() : "";
  };
  const buttonWithText = (text) => [...document.querySelectorAll("button")].find((button) => button.textContent.trim() === text);

  function normalisePool() {
    const pool = readPool();
    const available = new Set(questions());
    pool.used = new Set([...pool.used].filter((question) => available.has(question)));
    writePool(pool);
    return pool;
  }

  function configuredThinkTime() {
    const value = Number(readApp().thinkTime);
    return Number.isFinite(value) ? Math.max(1, Math.min(3600, value)) : 15;
  }

  function formatTime(totalSeconds) {
    const total = Math.max(0, Math.ceil(Number(totalSeconds) || 0));
    const minutes = Math.floor(total / 60);
    const seconds = total % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function autoStudentEnabled() {
    return localStorage.getItem(AUTO_STUDENT_KEY) !== "false";
  }

  function updateTimerControls(stage) {
    let timer = document.getElementById("classroom-timer-controls");
    if (!timer) {
      timer = document.createElement("section");
      timer.id = "classroom-timer-controls";
      timer.setAttribute("aria-label", "Think timer");
      timer.innerHTML = '<div class="timer-title"><span>THINK TIMER</span><strong aria-live="polite">00:15</strong></div><div class="timer-setting"><label>Minutes <input type="number" min="0" max="60" inputmode="numeric" aria-label="Think timer minutes"></label><label>Seconds <input type="number" min="0" max="59" inputmode="numeric" aria-label="Think timer seconds"></label></div>';
      const inputs = timer.querySelectorAll("input");
      const applyTime = () => {
        const minutes = Math.max(0, Math.min(60, Number(inputs[0].value) || 0));
        const seconds = Math.max(0, Math.min(59, Number(inputs[1].value) || 0));
        const total = Math.max(1, Math.min(3600, minutes * 60 + seconds));
        timerRemaining = total;
        window.dispatchEvent(new CustomEvent("everybody-thinks-think-time", { detail: total }));
        setTimeout(() => updateTimerControls(stage), 0);
      };
      inputs.forEach((input) => {
        input.addEventListener("input", applyTime);
        input.addEventListener("change", applyTime);
      });
    }
    const questionCard = stage.querySelector(".question-card");
    if (timer.parentElement !== stage || timer.nextElementSibling !== questionCard) {
      stage.insertBefore(timer, questionCard);
    }
    const configured = configuredThinkTime();
    const thinking = Boolean(questionCard && questionCard.classList.contains("thinking"));
    const waiting = Boolean(questionCard && questionCard.classList.contains("awaitingStudent"));
    const shown = thinking || waiting ? (timerRemaining ?? configured) : configured;
    timer.querySelector("strong").textContent = formatTime(shown);
    const inputs = timer.querySelectorAll("input");
    if (document.activeElement !== inputs[0]) inputs[0].value = String(Math.floor(configured / 60));
    if (document.activeElement !== inputs[1]) inputs[1].value = String(configured % 60);
    timer.classList.toggle("active", thinking);
    timer.classList.toggle("finished", waiting);
  }

  function updateStudentControls(stage) {
    const studentBoard = document.querySelector(".board.student");
    const plinko = studentBoard && studentBoard.querySelector(".plinko");
    if (!studentBoard || !plinko) return;
    let controls = document.getElementById("student-drop-controls");
    if (!controls) {
      controls = document.createElement("div");
      controls.id = "student-drop-controls";
      controls.innerHTML = '<label><input type="checkbox"> <span><b>Auto run student drop</b><small>Drop when the timer reaches zero</small></span></label>';
      controls.querySelector("input").addEventListener("change", (event) => {
        localStorage.setItem(AUTO_STUDENT_KEY, String(event.target.checked));
        updateStudentControls(stage);
      });
    }
    if (controls.parentElement !== studentBoard || controls.previousElementSibling !== plinko) plinko.after(controls);
    const automatic = autoStudentEnabled();
    controls.querySelector("input").checked = automatic;

    let manual = document.getElementById("manual-student-select");
    if (!manual) {
      manual = document.createElement("button");
      manual.id = "manual-student-select";
      manual.type = "button";
      manual.textContent = "SELECT STUDENT";
      manual.addEventListener("click", () => window.dispatchEvent(new CustomEvent("everybody-thinks-select-student")));
    }
    const start = stage.querySelector("button.start");
    if (start && manual.previousElementSibling !== start) start.after(manual);
    const waiting = Boolean(stage.querySelector(".question-card.awaitingStudent"));
    manual.hidden = automatic || !start;
    manual.disabled = !waiting;
    manual.title = waiting ? "Drop a weighted student ball" : "Available when the think timer reaches zero";
    stage.classList.toggle("manual-student-mode", !automatic);
  }

  function updateControls() {
    const stage = document.querySelector(".stage");
    const questionBoard = document.querySelector(".board.question");
    const questionPlinko = questionBoard && questionBoard.querySelector(".plinko");
    if (!stage || !questionBoard || !questionPlinko) return;
    let controls = document.getElementById("question-pool-controls");
    if (!controls) {
      controls = document.createElement("div");
      controls.id = "question-pool-controls";
      controls.innerHTML = '<label><input type="checkbox"> <span>Remove questions after use</span></label><strong aria-live="polite"></strong><button type="button">Reset questions</button>';
      controls.querySelector("input").addEventListener("change", (event) => {
        const pool = normalisePool();
        pool.enabled = event.target.checked;
        writePool(pool);
        updateControls();
      });
      controls.querySelector("button").addEventListener("click", () => {
        const pool = normalisePool();
        pool.used.clear();
        lastRemoved = null;
        writePool(pool);
        updateControls();
      });
    }
    if (controls.parentElement !== questionBoard || controls.previousElementSibling !== questionPlinko) questionPlinko.after(controls);
    const pool = normalisePool();
    const total = questions().length;
    const remaining = Math.max(0, total - pool.used.size);
    const checkbox = controls.querySelector("input");
    if (checkbox.checked !== pool.enabled) checkbox.checked = pool.enabled;
    const counterText = total ? (remaining ? `${remaining} / ${total} QUESTIONS REMAINING` : "ALL QUESTIONS USED") : "QUESTIONS LOADING…";
    const counter = controls.querySelector("strong");
    if (counter.textContent !== counterText) counter.textContent = counterText;
    const resetButton = controls.querySelector("button");
    const hideReset = !pool.enabled || pool.used.size === 0;
    if (resetButton.hidden !== hideReset) resetButton.hidden = hideReset;
    const next = buttonWithText("Next question");
    if (next) {
      const disableNext = pool.enabled && remaining === 0;
      const nextTitle = disableNext ? "Reset questions to begin again" : "";
      if (next.disabled !== disableNext) next.disabled = disableNext;
      if (next.title !== nextTitle) next.title = nextTitle;
    }
    updateTimerControls(stage);
    updateStudentControls(stage);
  }

  function chooseUnusedQuestion(pool, current) {
    const all = questions();
    const candidates = all.filter((question) => question !== current);
    const unused = candidates.filter((question) => !pool.used.has(question));
    if (!unused.length || !candidates.length) return;
    const chosen = unused[Math.floor(Math.random() * unused.length)];
    const index = candidates.indexOf(chosen);
    const original = Math.random;
    randomRestore = () => { Math.random = original; randomRestore = null; };
    Math.random = () => (index + 0.5) / candidates.length;
    setTimeout(() => randomRestore && randomRestore(), 0);
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    const text = button.textContent.trim();
    const pool = normalisePool();

    if (text === "Same question · another student") return;

    if (text === "Next question" && pool.enabled) {
      const current = currentQuestion();
      if (current) {
        pool.used.add(current);
        lastRemoved = current;
        writePool(pool);
      }
      if (pool.used.size >= questions().length) {
        event.preventDefault();
        event.stopPropagation();
        updateControls();
        return;
      }
      chooseUnusedQuestion(pool, current);
      setTimeout(updateControls, 0);
      return;
    }

    if (text.includes("START ROUND") && pool.enabled) chooseUnusedQuestion(pool, currentQuestion());

    if (text === "↶ Undo" && pool.enabled && lastRemoved) {
      pool.used.delete(lastRemoved);
      lastRemoved = null;
      writePool(pool);
      setTimeout(updateControls, 0);
    }

    if (text === "Reset session") {
      pool.used.clear();
      lastRemoved = null;
      writePool(pool);
      setTimeout(updateControls, 0);
    }
  }, true);

  const style = document.createElement("style");
  style.textContent = '.stage{display:grid!important;grid-template-columns:1fr 1fr;align-content:center;column-gap:10px}.stage-label,#classroom-timer-controls,.think-wrap,.question-card,.round-actions,.utilities{grid-column:1/-1}.stage-label{order:0;justify-self:center}#classroom-timer-controls{order:1;width:100%;margin:0 0 12px;padding:12px 15px;border:3px solid #17202d;border-radius:12px;background:#fff;box-shadow:4px 4px 0 #17202d}#classroom-timer-controls .timer-title{display:flex;align-items:center;justify-content:space-between;gap:12px}#classroom-timer-controls .timer-title span{letter-spacing:1.5px;font-size:10px;font-weight:950}#classroom-timer-controls .timer-title strong{font-variant-numeric:tabular-nums;color:#172b4d;font-size:34px;line-height:1}#classroom-timer-controls.active{background:#ecfdf3;border-color:#238a55}#classroom-timer-controls.finished{background:#fff4dc;border-color:#d97706}#classroom-timer-controls .timer-setting{display:flex;justify-content:flex-end;gap:8px;margin-top:8px}#classroom-timer-controls label{display:flex;align-items:center;gap:5px;color:#647483;font-size:9px;font-weight:900}#classroom-timer-controls input{width:58px;padding:5px;border:2px solid #b8c6da;border-radius:6px;background:#fff;text-align:center;font-weight:900}.think-wrap{order:2;width:100%!important;margin:0 0 16px!important}.think-bar{height:26px!important}.question-card{order:3}.stage>.start{order:4;grid-column:1/-1;width:100%;margin-top:18px}.stage.manual-student-mode>.start{grid-column:1}.stage #manual-student-select{order:4;grid-column:2;margin-top:18px;border:3px solid #17202d;border-radius:9px;background:#62d2df;box-shadow:5px 5px 0 #17202d;font-weight:950}.round-actions{order:4}.utilities{order:5}#question-pool-controls,#student-drop-controls{position:relative;z-index:5;margin:0 12px 10px;padding:9px 10px;border:1px solid #d8e1ef;border-radius:10px;background:#f7f9fc;color:#172b4d}#question-pool-controls{display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap}#question-pool-controls label,#student-drop-controls label{display:flex;align-items:center;justify-content:center;gap:7px;padding:6px 8px;border:1px solid #b8c6da;border-radius:8px;background:#fff;font-size:10px;font-weight:700;cursor:pointer;user-select:none}#question-pool-controls label:has(input:checked),#student-drop-controls label:has(input:checked){border-color:#0b67d1;background:#e8f2ff;color:#064f9f}#question-pool-controls input,#student-drop-controls input{flex:0 0 auto;width:18px;height:18px;margin:0;accent-color:#0b67d1;cursor:pointer}#question-pool-controls strong{font-size:.68rem;letter-spacing:.04em}#question-pool-controls button{padding:6px 8px;border:1px solid #b8c6da;border-radius:8px;background:white;color:#172b4d;font-size:10px;font-weight:700}#student-drop-controls label>span{display:flex;flex-direction:column;line-height:1.2}#student-drop-controls small{margin-top:2px;color:#647483;font-size:8px;font-weight:600}@media(max-width:980px){.stage{grid-area:1/1/auto/-1}}@media(max-width:680px){#classroom-timer-controls .timer-title strong{font-size:28px}}';
  document.head.appendChild(style);
  window.addEventListener("everybody-thinks-timer-tick", (event) => {
    timerRemaining = Number(event.detail) || 0;
    const stage = document.querySelector(".stage");
    if (stage) updateTimerControls(stage);
  });
  window.addEventListener("storage", updateControls);
  window.setInterval(updateControls, 500);
  setTimeout(updateControls, 0);
})();
