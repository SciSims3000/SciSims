(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const bankBase = '../../question-banks';
  const shuffle = values => { const out=[...values]; for(let i=out.length-1;i;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]]} return out };
  const state = { catalogue:null, bank:null, collection:null, items:[], score:0, selectedTerm:null, selectedDefinition:null, solved:[], chain:[] };
  const modeNames = { match:'Word Match', mystery:'Mystery Word', odd:'Odd One Out', connections:'Science Connections', chain:'Chain Reaction' };
  const instructions = {
    match:'Match each scientific term with its definition.', mystery:'Use the clue and letter pattern to identify the hidden term.',
    odd:'Three terms share a category. Select the term that does not belong.', connections:'Find groups of four scientifically connected terms.',
    chain:'Build the concept chain in its curriculum sequence.'
  };

  function setMessage(text,type=''){const el=$('message');el.textContent=text;el.className=`message ${type}`}
  function setScore(change=0){state.score+=change;$('score').textContent=state.score}
  function allItems(collections){return window.SciSimsRevisionBanks.flatten(collections)}
  function currentCollections(){return $('collectionSelect').value==='all'?state.bank.collections:state.bank.collections.filter(c=>c.id===$('collectionSelect').value)}
  function makeButton(text,className,onClick){const button=document.createElement('button');button.textContent=text;button.className=className||'';button.addEventListener('click',onClick);return button}

  async function initialise(){
    try{
      state.catalogue=await window.SciSimsRevisionBanks.loadCatalogue(bankBase);
      const banks=state.catalogue.curricula.flatMap(c=>c.banks.map(b=>({...b,curriculum:c.label})));
      $('bankSelect').innerHTML=banks.map(b=>`<option value="${b.path}">${b.label}</option>`).join('');
      $('bankSelect').addEventListener('change',loadBank);$('collectionSelect').addEventListener('change',newGame);$('modeSelect').addEventListener('change',newGame);$('newGame').addEventListener('click',newGame);
      await loadBank();
    }catch(error){setMessage(`${error.message}. Serve SciSims through a web server so the JSON files can load.`,'bad')}
  }

  async function loadBank(){
    state.bank=await window.SciSimsRevisionBanks.loadBank(bankBase,$('bankSelect').value);
    $('collectionSelect').innerHTML=`<option value="all">Whole course review</option>${state.bank.collections.map(c=>`<option value="${c.id}">${c.year?`Year ${c.year} · `:''}${c.label}</option>`).join('')}`;
    const count=allItems(state.bank.collections).length;$('recordCount').textContent=count.toLocaleString('en-AU');
    newGame();
  }

  function newGame(){
    if(!state.bank)return;state.score=0;state.solved=[];state.chain=[];setScore();
    const collections=currentCollections();state.items=allItems(collections);state.collection=collections[0];
    $('courseLabel').textContent=`${state.bank.syllabus} · ${$('collectionSelect').selectedOptions[0].textContent}`;
    const mode=$('modeSelect').value;$('gameTitle').textContent=modeNames[mode];$('gameInstructions').textContent=instructions[mode];
    $('gameArea').className='game-area';$('gameArea').innerHTML='';$('gameActions').innerHTML='';setMessage(`${state.items.length} curriculum records available for this game.`);
    ({match:renderMatch,mystery:renderMystery,odd:renderOdd,connections:renderConnections,chain:renderChain})[mode]();
  }

  function renderMatch(){
    const items=shuffle(state.items).slice(0,Math.min(6,state.items.length));state.selectedTerm=state.selectedDefinition=null;
    const board=document.createElement('div');board.className='match-board';const terms=document.createElement('div'),defs=document.createElement('div');terms.className=defs.className='card-column';
    items.forEach(item=>{const card=document.createElement('button');card.className='term-card';card.textContent=item.term;card.dataset.id=item.id;card.onclick=()=>selectMatch(card,'term');terms.append(card)});
    shuffle(items).forEach(item=>{const card=document.createElement('button');card.className='definition-card';card.textContent=item.definition;card.dataset.id=item.id;card.onclick=()=>selectMatch(card,'definition');defs.append(card)});
    board.append(terms,defs);$('gameArea').append(board);setMessage('Choose one term and one definition.');
  }
  function selectMatch(card,type){if(card.classList.contains('matched'))return;document.querySelectorAll(`.${type==='term'?'term':'definition'}-card.selected`).forEach(x=>x.classList.remove('selected'));card.classList.add('selected');state[type==='term'?'selectedTerm':'selectedDefinition']=card;if(!state.selectedTerm||!state.selectedDefinition)return;if(state.selectedTerm.dataset.id===state.selectedDefinition.dataset.id){state.selectedTerm.classList.add('matched');state.selectedDefinition.classList.add('matched');state.selectedTerm.classList.remove('selected');state.selectedDefinition.classList.remove('selected');setScore(1);setMessage('Correct match.','good');state.selectedTerm=state.selectedDefinition=null;if(!document.querySelector('.term-card:not(.matched)'))setMessage('Bank complete — excellent revision.','good')}else{setScore(-1);setMessage('Not that pair. Review the wording and try again.','bad');state.selectedTerm.classList.remove('selected');state.selectedDefinition.classList.remove('selected');state.selectedTerm=state.selectedDefinition=null}}

  function renderMystery(){
    const item=shuffle(state.items)[0];const area=document.createElement('div');area.className='mystery';const pattern=item.term.split('').map(c=>/[a-z0-9]/i.test(c)?'_':c).join(' ');
    area.innerHTML=`<p class="mystery-clue">${item.clue}</p><div class="mystery-word">${pattern}</div><form><input aria-label="Your answer" placeholder="Type the scientific term"><button class="primary" type="submit">Check answer</button></form>`;
    area.querySelector('form').onsubmit=e=>{e.preventDefault();const answer=area.querySelector('input').value.trim().toLowerCase();if(answer===item.term.toLowerCase()){area.querySelector('.mystery-word').textContent=item.term;setScore(2);setMessage(item.definition,'good')}else{setScore(-1);setMessage('Not yet. Use the clue and count the letters.','bad')}};
    $('gameArea').append(area);$('gameActions').append(makeButton('Reveal answer','secondary',()=>{area.querySelector('.mystery-word').textContent=item.term;setMessage(item.definition)}),makeButton('Another word','',renderMysteryReset));
  }
  function renderMysteryReset(){$('gameArea').innerHTML='';$('gameActions').innerHTML='';renderMystery()}

  function renderOdd(){
    const groups=currentCollections().flatMap(c=>c.groups.filter(g=>g.items.length>=3).map(g=>({...g,collectionLabel:c.label})));if(groups.length<2){setMessage('This collection needs at least two populated categories for Odd One Out. Choose Whole course review.','bad');return}
    const [related,other]=shuffle(groups).slice(0,2);const relatedItems=shuffle(related.items).slice(0,3);const odd=shuffle(other.items)[0];const choices=shuffle([...relatedItems.map(x=>({...x,isOdd:false})),{...odd,isOdd:true}]);
    const grid=document.createElement('div');grid.className='choice-grid';choices.forEach(item=>{const card=document.createElement('button');card.className='choice-card';card.textContent=item.term;card.onclick=()=>{if(item.isOdd){card.classList.add('selected');setScore(2);setMessage(`Correct. The other terms belong to “${related.label}”; ${item.term} comes from “${other.label}”.`,'good')}else{setScore(-1);setMessage(`${item.term} belongs with the shared group. Look for the outsider.`,'bad')}};grid.append(card)});$('gameArea').append(grid);$('gameActions').append(makeButton('Another set','',()=>{$('gameArea').innerHTML='';$('gameActions').innerHTML='';renderOdd()}));
  }

  function renderConnections(){
    const groups=shuffle(currentCollections().flatMap(c=>c.groups.filter(g=>g.items.length>=4))).slice(0,4);if(groups.length<4){setMessage('Connections needs four categories with at least four terms. Choose Whole course review.','bad');return}
    const selectedGroups=groups.map(g=>({id:g.id,label:g.label,items:shuffle(g.items).slice(0,4)}));let cards=shuffle(selectedGroups.flatMap(g=>g.items.map(i=>({...i,connection:g.id,connectionLabel:g.label}))));
    const grid=document.createElement('div');grid.className='connections-grid';$('gameArea').append(grid);const draw=()=>{grid.innerHTML='';state.solved.forEach(g=>{const row=document.createElement('div');row.className='solved-group';row.innerHTML=`<strong>${g.label}</strong>${g.items.map(x=>x.term).join(' · ')}`;grid.append(row)});cards.forEach(item=>{const card=document.createElement('button');card.className='connection-card';card.textContent=item.term;card.dataset.id=item.id;card.onclick=()=>{card.classList.toggle('selected');const chosen=[...grid.querySelectorAll('.connection-card.selected')];if(chosen.length===4){const chosenItems=chosen.map(c=>cards.find(x=>x.id===c.dataset.id));if(new Set(chosenItems.map(x=>x.connection)).size===1){const id=chosenItems[0].connection;state.solved.push({label:chosenItems[0].connectionLabel,items:chosenItems});cards=cards.filter(x=>x.connection!==id);setScore(4);setMessage('Connection found.','good');draw();if(!cards.length)setMessage('All four connections solved.','good')}else{setScore(-1);setMessage('Those four do not form one curriculum group.','bad');chosen.forEach(c=>c.classList.remove('selected'))}}};grid.append(card)})};draw();
  }

  function renderChain(){
    const groups=currentCollections().flatMap(c=>c.groups.filter(g=>g.items.length>=4));if(!groups.length){setMessage('This selection needs a category with at least four terms for Chain Reaction.','bad');return}const group=shuffle(groups)[0],target=group.items.slice(0,Math.min(6,group.items.length)),pool=shuffle(target);
    const list=document.createElement('div');list.className='chain-list';const answer=document.createElement('div');answer.className='chain-answer';const draw=()=>{list.innerHTML='';pool.filter(i=>!state.chain.includes(i.id)).forEach(item=>{const card=document.createElement('button');card.className='chain-card';card.textContent=item.term;card.onclick=()=>{state.chain.push(item.id);draw()};list.append(card)});answer.innerHTML=state.chain.map(id=>`<span>${target.find(i=>i.id===id).term}</span>`).join('')};$('gameArea').append(list,answer);draw();$('gameActions').append(makeButton('Reset chain','secondary',()=>{state.chain=[];draw()}),makeButton('Check chain','',()=>{if(state.chain.length!==target.length){setMessage(`Add all ${target.length} concepts before checking.`,'bad');return}if(state.chain.every((id,i)=>id===target[i].id)){setScore(3);setMessage(`${group.label}: chain complete.`,'good')}else{setScore(-1);setMessage('Close, but the curriculum sequence is different. Reset and try again.','bad')}}));
  }

  initialise();
})();
