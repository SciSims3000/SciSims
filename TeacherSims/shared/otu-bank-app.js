(() => {
  'use strict';
  const mode = document.body.dataset.appMode;
  const isCookie = mode === 'fortune-cookie';
  const dataUrl = '../data/nsw-2023/stage-4/7-1-observing-the-universe.json';
  const $ = id => document.getElementById(id);
  let data, current, history = [], votes = {a:0,b:0}, lastId = '';

  const option = (value,label) => `<option value="${value}">${label}</option>`;
  const shell = () => {
    document.querySelector('.app').innerHTML = `
      <section class="hero"><div><h1>${isCookie?'Science Fortune Cookie':'Science Would You Rather?'}</h1><p>${isCookie?'Crack a cookie, reveal the science, then use the THINK question to extend the lesson.':'Choose, vote, reveal the science, then defend the reasoning.'}</p></div><div class="version">Version 2.0.0</div></section>
      <section class="workspace">
        <aside class="panel controls"><h2>${isCookie?'Cookie settings':'Question controls'}</h2>
          <div><label for="courseSelect">Course</label><select id="courseSelect" disabled></select></div>
          <div><label for="unitSelect">Unit</label><select id="unitSelect" disabled></select></div>
          <div><label for="sectionSelect">Content area</label><select id="sectionSelect"></select></div>
          <div><label for="statementSelect">Content statement</label><select id="statementSelect"></select></div>
          <button class="primary" id="newItemBtn">${isCookie?'Crack the cookie':'New question'}</button>
          ${isCookie?'':`<button class="secondary" id="resetVotesBtn">Reset votes</button>`}
          <div class="utility-row"><button class="utility" id="fullscreenBtn">⛶ Full screen</button></div>
          <p class="hint"><strong>Lesson use:</strong> Select a statement for targeted retrieval, or “All within section” for revision.</p>
        </aside>
        <section class="panel stage" id="learningStage" aria-live="polite"></section>
        ${isCookie?'<aside class="panel history-panel"><h2>Recent fortunes</h2><ul class="history" id="historyList"><li class="empty">No cookies cracked yet.</li></ul><button class="small-btn" id="clearBtn">Clear history</button></aside>':''}
      </section>
      <footer class="footer">NSW Science 7–10 (2023) • 7.1 Observing the Universe • SciSims classroom tool</footer>`;
  };

  function fillSelectors(){
    $('courseSelect').innerHTML=option(data.course.id,data.course.label);
    $('unitSelect').innerHTML=option(data.unit.id,data.unit.label);
    $('sectionSelect').innerHTML=option('overview','Overview')+data.sections.map(s=>option(s.id,s.label)).join('');
    updateStatements();
  }
  function updateStatements(){
    const sid=$('sectionSelect').value, select=$('statementSelect');
    if(sid==='overview') select.innerHTML=option('all','All Overview outcomes')+data.overview.banks.map(b=>option(b.id,`${b.outcome} — ${b.label}`)).join('');
    else {const section=data.sections.find(s=>s.id===sid);select.innerHTML=option('all','All within section')+section.contentStatements.map(s=>option(s.id,s.wording)).join('');}
  }
  function pool(){
    const sid=$('sectionSelect').value, stid=$('statementSelect').value, key=isCookie?'cookies':'wyr';
    if(sid==='overview'){const banks=stid==='all'?data.overview.banks:data.overview.banks.filter(b=>b.id===stid);return banks.flatMap(b=>b[key]);}
    const section=data.sections.find(s=>s.id===sid);const statements=stid==='all'?section.contentStatements:section.contentStatements.filter(s=>s.id===stid);return statements.flatMap(s=>s[key]);
  }
  function choose(){const items=pool();let item=items[Math.floor(Math.random()*items.length)];for(let i=0;i<12&&items.length>1&&item.id===lastId;i++)item=items[Math.floor(Math.random()*items.length)];lastId=item.id;return item;}
  const tags = item => `<div class="ped-tags"><span>${item.metadata.outcome}</span><span>Difficulty ${item.metadata.difficulty}</span><span>${item.metadata.type.replaceAll('-',' ')}</span></div>`;
  function reveal(button){button.hidden=true;button.nextElementSibling.hidden=false;}
  function renderCookie(item){
    $('learningStage').innerHTML=`<div class="topic">${item.metadata.overviewBank||$('sectionSelect').selectedOptions[0].textContent}</div><div class="cookie-display"><div class="cookie compact" id="interactiveCookie" role="button" tabindex="0" aria-label="Crack the cookie for another science statement"><div class="half left"></div><div class="half right"></div></div><div class="cookie-instruction">Click the cookie to crack another</div><article class="learning-card"><h2>${item.statement}</h2>${tags(item)}<button class="explain-btn">Explain</button><div class="explanation" hidden><h3>EXPLAIN</h3><p>${item.explanation}</p><div class="think"><strong>THINK</strong><p>${item.think}</p></div></div></article></div>`;
    $('learningStage').querySelector('.explain-btn').addEventListener('click',e=>reveal(e.currentTarget));
    const cookie=$('interactiveCookie');
    cookie.addEventListener('click',crackCookie);
    cookie.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();crackCookie();}});
    history.unshift(item);history=history.slice(0,8);renderHistory();
  }
  function renderHistory(){const list=$('historyList');list.innerHTML=history.length?history.map(x=>`<li><div class="type">${x.metadata.overviewBank||'7.1 content'}</div><div class="text"></div></li>`).join(''):'<li class="empty">No cookies cracked yet.</li>';list.querySelectorAll('.text').forEach((el,i)=>el.textContent=history[i].statement);}
  function renderWyr(item){
    current=item;votes={a:0,b:0};$('learningStage').innerHTML=`<div class="topic">${item.metadata.overviewBank||$('sectionSelect').selectedOptions[0].textContent}</div><h2 class="wyr-prompt">${item.prompt}</h2><div class="choices"><article class="choice a" data-side="a" tabindex="0"><div><div class="letter">OPTION A</div><div class="choice-text">${item.optionA}</div></div><div class="vote-row"><div><div class="vote-count" id="countA">0</div><div class="vote-label">votes</div></div><button class="vote-btn">Vote A</button></div></article><div class="or">OR</div><article class="choice b" data-side="b" tabindex="0"><div><div class="letter">OPTION B</div><div class="choice-text">${item.optionB}</div></div><div class="vote-row"><div><div class="vote-count" id="countB">0</div><div class="vote-label">votes</div></div><button class="vote-btn">Vote B</button></div></article></div><div class="resultbar" id="resultbar"></div>${tags(item)}<button class="explain-btn">Explain</button><div class="explanation" hidden><h3>EXPLAIN</h3><p>${item.explanation}</p><div class="think"><strong>THINK</strong><p>${item.think}</p></div></div>`;
    $('learningStage').querySelectorAll('[data-side]').forEach(el=>el.addEventListener('click',()=>vote(el.dataset.side)));
    $('learningStage').querySelector('.explain-btn').addEventListener('click',e=>reveal(e.currentTarget));
  }
  function vote(side){votes[side]++;$('countA').textContent=votes.a;$('countB').textContent=votes.b;const total=votes.a+votes.b;$('resultbar').style.setProperty('--aPct',`${total?votes.a/total*100:50}%`);document.querySelectorAll('.choice').forEach(x=>x.classList.toggle('selected',x.dataset.side===side));}
  function next(){current=choose();isCookie?renderCookie(current):renderWyr(current);}
  function crackCookie(){const cookie=$('interactiveCookie');if(!cookie)return;cookie.classList.remove('crack');void cookie.offsetWidth;cookie.classList.add('crack');setTimeout(next,520);}

  async function init(){
    shell();
    try {const response=await fetch(dataUrl);if(!response.ok)throw new Error(`${response.status} ${response.statusText}`);data=await response.json();}
    catch(error){$('learningStage').innerHTML=`<div class="load-error"><h2>Content could not be loaded</h2><p>${error.message}</p><p>Run this app through a web server rather than opening the HTML file directly.</p></div>`;return;}
    fillSelectors();$('sectionSelect').addEventListener('change',()=>{updateStatements();next();});$('statementSelect').addEventListener('change',next);$('newItemBtn').addEventListener('click',next);
    if(isCookie)$('clearBtn').addEventListener('click',()=>{history=[];renderHistory();});else $('resetVotesBtn').addEventListener('click',()=>{votes={a:0,b:0};$('countA').textContent=0;$('countB').textContent=0;$('resultbar').style.setProperty('--aPct','50%');});
    $('fullscreenBtn').addEventListener('click',async()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen());
    next();
  }
  init();
})();
