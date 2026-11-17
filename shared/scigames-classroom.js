/* SciGames fullscreen classroom controls | v1.0.0. Loaded only on selected games. */
(() => {
  'use strict';
  const path = window.location.pathname.toLowerCase();
  const el = id => document.getElementById(id);
  const makeButton = (label, cls, action) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'scigames-btn ' + cls;
    button.textContent = label;
    button.addEventListener('click', action);
    return button;
  };

  // SciWord already has an effective classroom layout. Extend its existing switch.
  if (/\/games\/sciword\/(?:index\.html)?$/i.test(path)) {
    const button = el('presentationBtn');
    if (!button) return;
    button.title = 'Show the classroom layout in browser fullscreen; press Esc to exit.';
    const normaliseButton = on => {
      button.setAttribute('aria-pressed', String(on));
      button.textContent = on ? 'Exit Fullscreen Classroom' : 'Fullscreen Classroom';
    };
    normaliseButton(document.body.classList.contains('presentation'));
    button.addEventListener('click', () => {
      const on = document.body.classList.contains('presentation');
      normaliseButton(on);
      if (on && !document.fullscreenElement && document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {
          button.title = 'Browser fullscreen unavailable; classroom focus layout is active.';
        });
      } else if (!on && document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    });
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement && document.body.classList.contains('presentation')) {
        document.body.classList.remove('presentation');
        normaliseButton(false);
      }
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !document.fullscreenElement && document.body.classList.contains('presentation')) {
        document.body.classList.remove('presentation');
        normaliseButton(false);
      }
    });
    return;
  }

  // Science Web: enlarge the actual interactive concept canvas, not a screenshot.
  if (/\/games\/scienceweb\/(?:index\.html)?$/i.test(path)) {
    const canvas = document.querySelector('.canvas-card');
    const tools = canvas && canvas.querySelector('.canvas-tools');
    if (!canvas || !tools) return;
    let nativeSession = false;
    const button = makeButton('⛶ Fullscreen web', 'scigames-web-toggle', () => {
      const opening = !document.body.classList.contains('scigames-web-active');
      document.body.classList.toggle('scigames-web-active', opening);
      button.textContent = opening ? 'Exit fullscreen' : '⛶ Fullscreen web';
      button.setAttribute('aria-pressed', String(opening));
      if (opening && canvas.requestFullscreen && !document.fullscreenElement) {
        canvas.requestFullscreen().catch(() => { /* Focus-mode fallback remains usable. */ });
      } else if (!opening && document.fullscreenElement === canvas && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    });
    button.setAttribute('aria-pressed', 'false');
    button.title = 'Show only the concept web. Use Escape or the button to exit.';
    tools.append(button);
    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement === canvas) nativeSession = true;
      else if (!document.fullscreenElement && nativeSession) {
        nativeSession = false;
        document.body.classList.remove('scigames-web-active');
        button.textContent = '⛶ Fullscreen web';
        button.setAttribute('aria-pressed', 'false');
      }
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && document.body.classList.contains('scigames-web-active') && !document.fullscreenElement) {
        document.body.classList.remove('scigames-web-active');
        button.textContent = '⛶ Fullscreen web';
        button.setAttribute('aria-pressed', 'false');
      }
    });
    return;
  }

  const buttonsByGame = {
    mysteryscienceword: [['newWordButton','New Word'],['toggleClueButton','Clue'],['hintButton','Hint'],['revealButton','Reveal']],
    sciencewordmatch: [['newRoundButton','New Round'],['hintButton','Show a Pair'],['revealButton','Reveal']],
    oddoneout: [['newPuzzleButton','New Puzzle'],['hintButton','Hint'],['revealButton','Reveal']],
    chainreactions: [['newChallengeButton','New Challenge'],['checkButton','Check'],['undoButton','Undo'],['hintButton','Hint'],['revealButton','Reveal']]
  };
  const matched = path.match(/\/games\/([^/]+)\/(?:index\.html)?$/i);
  const config = matched && buttonsByGame[matched[1].toLowerCase()];
  if (!config) return;
  const grid = document.querySelector('.page > main.main-grid');
  const controls = grid && grid.children[0];
  const board = grid && grid.children[1];
  if (!grid || !controls || !board) return;
  controls.classList.add('scigames-controls-panel');
  board.classList.add('scigames-board');
  controls.id = controls.id || 'scigamesTeacherControls';
  const toolbar = document.createElement('div');
  toolbar.className = 'scigames-classroom-bar';
  toolbar.setAttribute('role', 'group');
  toolbar.setAttribute('aria-label', 'Classroom presentation controls');
  const actionRow = document.createElement('div');
  actionRow.className = 'scigames-quickbar';
  const fullscreen = makeButton('⛶ Fullscreen', 'scigames-fullscreen-toggle', () => {
    if (document.body.classList.contains('scigames-classroom')) exit();
    else enter();
  });
  fullscreen.setAttribute('aria-pressed', 'false');
  const teacher = makeButton('Teacher controls', 'scigames-controls-toggle', () =>
    setDrawer(!document.body.classList.contains('scigames-drawer-open')));
  teacher.setAttribute('aria-controls', controls.id);
  teacher.setAttribute('aria-expanded', 'false');
  const note = document.createElement('span');
  note.className = 'scigames-hint';
  note.textContent = 'Projector-friendly mode';
  toolbar.append(fullscreen, teacher, actionRow, note);
  board.prepend(toolbar);
  const close = makeButton('Close controls ✕', 'scigames-drawer-close', () => setDrawer(false));
  controls.prepend(close);
  const scrim = document.createElement('button');
  scrim.type = 'button';
  scrim.className = 'scigames-scrim';
  scrim.setAttribute('aria-label','Close teacher controls');
  scrim.addEventListener('click', () => setDrawer(false));
  document.body.append(scrim);
  const quick = [];
  for (const [id, label] of config) {
    const source = el(id);
    if (!source) continue;
    const proxy = makeButton(label, '', () => { if (!source.disabled && !source.hidden) source.click(); });
    actionRow.append(proxy);
    quick.push({ source, proxy });
  }
  const refresh = () => {
    for (const {source,proxy} of quick) {
      proxy.disabled = source.disabled;
      proxy.hidden = source.hidden || source.style.display === 'none';
    }
  };
  refresh();
  const observer = new MutationObserver(refresh);
  observer.observe(controls, {subtree:true,attributes:true,childList:true,characterData:true});
  let nativeSession = false;
  function setDrawer(open) {
    const active = open && document.body.classList.contains('scigames-classroom');
    document.body.classList.toggle('scigames-drawer-open', active);
    teacher.setAttribute('aria-expanded', String(active));
    if (active) close.focus();
    else teacher.focus({preventScroll:true});
  }
  function setClassroom(on) {
    document.body.classList.toggle('scigames-classroom', on);
    if (!on) {
      document.body.classList.remove('scigames-drawer-open');
      teacher.setAttribute('aria-expanded','false');
    }
    fullscreen.textContent = on ? 'Exit fullscreen' : '⛶ Fullscreen';
    fullscreen.setAttribute('aria-pressed', String(on));
    refresh();
  }
  function enter() {
    setClassroom(true);
    if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {
        note.textContent = 'Using classroom focus view (native fullscreen unavailable).';
        note.style.display = 'inline';
      });
    }
  }
  function exit() {
    if (document.fullscreenElement === document.documentElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
    setClassroom(false);
  }
  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement === document.documentElement && document.body.classList.contains('scigames-classroom')) nativeSession = true;
    else if (!document.fullscreenElement && nativeSession) {
      nativeSession = false;
      setClassroom(false);
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (document.body.classList.contains('scigames-drawer-open')) {
      event.preventDefault();
      setDrawer(false);
    } else if (!document.fullscreenElement && document.body.classList.contains('scigames-classroom')) {
      setClassroom(false);
    }
  });
})();
