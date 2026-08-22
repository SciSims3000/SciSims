(function () {
  "use strict";

  const APP_KEY = "everybody-thinks-v1";
  const POOL_KEY = "everybody-thinks-question-pool-v1";
  let lastRemoved = null;
  let randomRestore = null;

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

  function updateControls() {
    const stage = document.querySelector(".stage");
    const anchor = stage && stage.querySelector(".think-wrap");
    if (!stage || !anchor) return;
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
    if (controls.parentElement !== stage || controls.nextElementSibling !== anchor) {
      stage.insertBefore(controls, anchor);
    }
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
  style.textContent = '#question-pool-controls{position:relative;z-index:5;display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin:4px 0 12px;padding:10px 12px;border:1px solid #d8e1ef;border-radius:12px;background:#f7f9fc;color:#172b4d}#question-pool-controls label{display:flex;align-items:center;gap:7px;padding:7px 10px;border:1px solid #b8c6da;border-radius:9px;background:#fff;font-weight:700;cursor:pointer;user-select:none}#question-pool-controls label:has(input:checked){border-color:#0b67d1;background:#e8f2ff;color:#064f9f}#question-pool-controls input{width:20px;height:20px;margin:0;accent-color:#0b67d1;cursor:pointer}#question-pool-controls strong{font-size:.78rem;letter-spacing:.06em}#question-pool-controls button{padding:7px 10px;border:1px solid #b8c6da;border-radius:9px;background:white;color:#172b4d;font-weight:700}';
  document.head.appendChild(style);
  window.addEventListener("storage", updateControls);
  window.setInterval(updateControls, 500);
  setTimeout(updateControls, 0);
})();
