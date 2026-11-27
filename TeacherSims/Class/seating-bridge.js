// Inserted inside the original Seating Plan Maker closure by build-class.mjs.
const classHost=window.SciSimsClassHost, classCore=parent.SciSimsClassCore;
const shared=classHost.read(), stored=shared.modules.seating?.workspace;
if(stored){workspace=hydrateWorkspace(stored);activeTabId=workspace.activeTabId;}
workspace.students=shared.students.map(s=>({name:s.name,present:s.present}));
refs.namesInput.value=shared.students.map(s=>s.name).join('\n');
refs.classCodeInput.value=shared.className;refs.yearSelect.value=shared.year;
syncSharedStudentsToTabs();
const nameToId=new Map(shared.students.map(s=>[s.name,s.id]));
for(const tab of workspace.tabs){
 tab.planning.together=[];tab.planning.apart=[];
 tab.qci={...tab.qci,scores:Object.fromEntries(shared.students.filter(s=>s[classHost.options().field]!==null).map(s=>[s.name,s[classHost.options().field]]))};
}
// The central manager owns names, attendance, rules and scores. Keep room tools.
const manager=document.createElement('div');manager.className='class-managed';manager.textContent='Class list, attendance, scores and relationship rules are managed in Class.';
refs.namesInput.closest('aside').prepend(manager);
for(const child of [...refs.namesInput.closest('aside').children]){
 if(child===manager)continue;
 if(child.classList.contains('control-section'))break;
 child.hidden=true;
}
refs.attendanceList.closest('details').hidden=true;
// Keep room planning controls visible; only centralised relationship controls are hidden.
const planning=refs.ruleStudentA.closest('details');
planning.querySelector('summary').textContent='Planning mode and room editing';
refs.ruleStudentA.closest('.form-grid').hidden=true;
refs.addTogetherButton.closest('.mini-actions').hidden=true;
refs.rulesList.hidden=true;
const ruleHint=document.createElement('p');ruleHint.className='hint';ruleHint.textContent='Manage student relationship rules in Class Manager.';
refs.planningModeInput.closest('label').after(ruleHint);
planning.open=true;
// Room design is available even before a roster is imported.
const originalRenderPlan=renderPlan;
renderPlan=function(){
 const tab=activeTab();
 if(!sharedStudents().length){
  refs.planContent.hidden=false;refs.emptyState.hidden=true;ensureSeatArrays(tab);
  refs.planSummary.textContent=seatCount(tab)+' seats · room design';
  refs.planSubtitle.textContent=tab.title;
  refs.frontTop.hidden=tab.front!=='top';refs.frontBottom.hidden=tab.front!=='bottom';
  tab.mode==='custom'?renderCustom():renderQuick();renderStudentPool();renderTimer();renderLessonTask();renderPicker();return;
 }
 originalRenderPlan();
};
// Render all empty desks while editing; refresh immediately when planning changes.
const originalRenderRules=renderRules;
renderRules=function(){originalRenderRules();if(activeTab().planning.enabled){refs.planContent.hidden=false;refs.emptyState.hidden=true;}};
refs.planningModeInput.addEventListener('change',()=>renderPlan());
refs.exitPlanningButton.addEventListener('click',()=>renderPlan());
const originalCompact=compactSeatDisplay;
compactSeatDisplay=function(tab=activeTab()){if(!tab.seats.some(Boolean))return;originalCompact(tab);};
// Independent collapsible controls; no sticky overlay in teacher view.
const dashboard=document.querySelector('.display-dashboard');
dashboard.style.position='static';
const collapsibles=[];
for(const [selector,label] of [['.timer-card','Activity timer'],['.picker-card','Random student picker']]){
 const card=dashboard.querySelector(selector),details=document.createElement('details'),summary=document.createElement('summary');
 details.className='class-display-fold';summary.textContent=label;details.append(summary);
 card.before(details);details.append(card);details.open=!activeTab().planning.enabled;collapsibles.push(details);
 details.addEventListener('toggle',()=>requestAnimationFrame(applyFitToScreen));
}
refs.planningModeInput.addEventListener('change',()=>{if(activeTab().planning.enabled)collapsibles.forEach(d=>d.open=false);});
const originalSetLayoutMode=setLayoutMode;
setLayoutMode=function(mode){if(mode==='custom'){activeTab().planning.enabled=true;collapsibles.forEach(d=>d.open=false);}originalSetLayoutMode(mode);};

for(const id of ['qciScoreList','qciLabelsInput','deiModeInput']){const el=document.getElementById(id);if(id==='qciScoreList')el.hidden=true;}
refs.savedPlanSelect.closest('.control-section').querySelectorAll(':scope > :not(#planStatus)').forEach(el=>el.hidden=true);refs.exampleButton.hidden=true;
for(const id of ['savedPlanSelect','savePlanButton','newPlanButton','duplicatePlanButton','deletePlanButton','shareWorkspaceButton','importWorkspaceButton','exportButton','importButton'])refs[id].hidden=true;
const notice=document.createElement('p');notice.setAttribute('role','alert');notice.className='class-rule-warning';refs.planContent.before(notice);
for(const room of workspace.tabs){const a={};room.seats.forEach((n,i)=>{if(nameToId.has(n))a[nameToId.get(n)]=i;});if(classCore.violations(shared,a,(i,j)=>seatsAreRelated(room,i,j)).length){room.seats.fill(null);room.locks.fill(false);}}
let previousValid=classCore.clone(workspace), lastArrangement=JSON.stringify(Object.fromEntries(activeTab().seats.flatMap((name,i)=>nameToId.has(name)?[[nameToId.get(name),i]]:[])));
const rawSaveDraft=saveDraft;
saveDraft=function(){
 const tab=activeTab(),assignment=Object.create(null);tab.seats.forEach((name,i)=>{if(nameToId.has(name))assignment[nameToId.get(name)]=i;});
 const hasSeats=tab.seats.some(Boolean),bad=hasSeats?classCore.violations(shared,assignment,(a,b)=>seatsAreRelated(tab,a,b)).filter(rule=>assignment[rule.a]!==undefined&&assignment[rule.b]!==undefined):[];
 if(bad.length){workspace=hydrateWorkspace(previousValid);activeTabId=workspace.activeTabId;renderAll();notice.textContent=`Change rejected: ${bad.length} mandatory relationship rule(s) would be broken. Generate a valid plan or review rules in Class.`;classHost.warn(notice.textContent);return;}
 previousValid=classCore.clone(workspace);notice.textContent='';
 rawSaveDraft();classHost.saveModule('seating',{workspace:workspaceForStorage()});
 const signature=JSON.stringify(assignment);
 if(hasSeats&&signature!==lastArrangement){lastArrangement=signature;const pairs=[];for(const [a,i] of Object.entries(assignment))for(const [b,j] of Object.entries(assignment))if(a<b&&seatsAreRelated(tab,i,j))pairs.push([a,b]);classHost.record('seating',{assignment,pairs});}
};
randomiseSeating=function({all=false}={}){
 const tab=activeTab();ensureSeatArrays(tab);const locks={};if(!all)tab.seats.forEach((name,i)=>{if(tab.locks[i]&&nameToId.has(name))locks[nameToId.get(name)]=i;});
 const result=classCore.solve(shared,{slots:tab.seats.length,capacities:tab.seats.map((n,i)=>!all&&tab.locks[i]&&!n?0:1),related:(a,b)=>seatsAreRelated(tab,a,b),locks,history:classHost.read().histories.seating});
 if(result.error){notice.textContent=result.error;classHost.warn(result.error);return;}
 beginMutation();tab.seats=Array(tab.seats.length).fill(null);for(const s of shared.students)if(result.assignment[s.id]!==undefined)tab.seats[result.assignment[s.id]]=s.name;
 if(all)tab.locks.fill(false);invalidateRoles(tab);renderAll();saveDraft();
 const message=result.warnings.join(' ')||'All mandatory relationship rules satisfied.';notice.textContent=message;classHost.warn(message);
};
// Existing EDI picker uses the central score field and excludes missing scores.
const originalPickerPool=pickerPool;
pickerPool=function(tab=activeTab()){
 if(tab.picker.pool==='dei'||document.getElementById('deiModeInput').checked)return classCore.pool(shared,true,classHost.options().field).map(s=>s.name);
 return originalPickerPool(tab);
};

// Dedicated room designer; geometry remains in the existing workspace model.
const designerBar=document.createElement('div');designerBar.className='class-designer-bar';
designerBar.innerHTML='<button type="button" class="button small primary" data-design="mode">Room designer</button><button type="button" class="button small" data-design="panel">Hide settings</button><button type="button" class="button small" data-design="minus">−</button><output>100%</output><button type="button" class="button small" data-design="plus">+</button><button type="button" class="button small" data-design="fit">Fit room</button><button type="button" class="button small" data-design="reset">100%</button><label>Width <input type="number" min="980" max="5000" step="100" value="980" data-design="width"></label><label>Length <input type="number" min="650" max="5000" step="100" value="650" data-design="height"></label><label>Spacing <input type="number" min="0" max="150" value="30" data-design="gap"></label><span role="status" class="designer-warning"></span>';
refs.roomShell.before(designerBar);
const canvas=refs.customRoomCanvas,scroll=refs.customRoomScroll;
let zoom=1,fit=true,selectedTable=-1,panelHidden=false;
const control=k=>designerBar.querySelector('[data-design="'+k+'"]');
const dims=tab=>({w:Math.max(980,Math.min(5000,Number(tab.designWidth)||980)),h:Math.max(650,Math.min(5000,Number(tab.designHeight)||650)),gap:Math.max(0,Math.min(150,Number(tab.designGap??30)))});
function isDesign(){return activeTab().planning.enabled&&activeTab().mode==='custom'&&!document.body.classList.contains('student-focus')&&!document.body.classList.contains('class-project')&&!document.body.classList.contains('split-focus');}
function footprint(table){const angle=normaliseTableRotation(table.rotation),vertical=angle%180===90,diagonal=angle%90!==0;return diagonal?[430,430]:vertical?[350,440]:[440,350];}
function checkCrowding(){const tab=activeTab(),{w,h}=dims(tab);let count=0;tab.tables.forEach((t,i)=>{const [tw,th]=footprint(t);for(const u of tab.tables.slice(i+1)){const [uw,uh]=footprint(u);if(Math.abs(t.x-u.x)*w/100<(tw+uw)/2&&Math.abs(t.y-u.y)*h/100<(th+uh)/2)count++;}});designerBar.querySelector('.designer-warning').textContent=count?count+' overlapping table footprint(s) — move tables or arrange automatically.':'';}
function applyDesigner(){const tab=activeTab(),design=isDesign(),custom=tab.mode==='custom',d=dims(tab);document.body.classList.toggle('class-room-design',design);document.body.classList.toggle('class-design-wide',design&&panelHidden);designerBar.hidden=!custom||document.body.classList.contains('student-focus')||document.body.classList.contains('class-project');control('mode').textContent=design?'Seating allocation':'Room designer';control('panel').textContent=panelHidden?'Show settings':'Hide settings';control('panel').hidden=!design;for(const k of ['width','height','gap'])control(k).parentElement.hidden=!design;control('width').value=d.w;control('height').value=d.h;control('gap').value=d.gap;
 if(!custom)return;Object.assign(canvas.style,{width:d.w+'px',height:d.h+'px',minWidth:d.w+'px',minHeight:d.h+'px'});if(!document.body.classList.contains('student-focus')&&!document.body.classList.contains('split-focus')){const z=fit?Math.max(.25,Math.min(2,(scroll.clientWidth-8)/d.w)):zoom;canvas.style.zoom=String(z);designerBar.querySelector('output').textContent=Math.round(z*100)+'%';}checkCrowding();}
const legacyFit=applyFitToScreen;applyFitToScreen=function(){legacyFit();applyDesigner();const d=dims(activeTab());if(activeTab().mode==='custom'&&(document.body.classList.contains('student-focus')||document.body.classList.contains('split-focus'))){const h=Math.max(250,innerHeight-refs.roomShell.getBoundingClientRect().top-12),w=Math.max(280,scroll.clientWidth-4);const z=Math.max(.15,Math.min(1,w/d.w,h/d.h));canvas.style.zoom=String(z);scroll.style.height=Math.ceil(d.h*z)+'px';}};
const previousRenderCustom=renderCustom;renderCustom=function(){previousRenderCustom();canvas.querySelectorAll('.custom-table').forEach((el,i)=>{el.classList.toggle('designer-selected',i===selectedTable);el.addEventListener('pointerdown',()=>{if(!isDesign())return;selectedTable=i;canvas.querySelectorAll('.custom-table').forEach((e,j)=>e.classList.toggle('designer-selected',i===j));});});applyDesigner();};
const previousDrag=attachDrag;attachDrag=function(handle,element,item,opts={}){if(!isDesign())return;if(item.capacity){const d=dims(activeTab()),[w,h]=footprint(item);opts={...opts,minX:w/2/d.w*100,maxX:100-w/2/d.w*100,minY:h/2/d.h*100,maxY:100-h/2/d.h*100};}previousDrag(handle,element,item,opts);};
arrangeTables=function(tab=activeTab(),{silent=false}={}){if(!tab.tables.length)return;const d=dims(tab),gap=d.gap;const sizes=tab.tables.map(footprint),cw=Math.max(...sizes.map(s=>s[0]))+gap,ch=Math.max(...sizes.map(s=>s[1]))+gap,cols=Math.max(1,Math.ceil(Math.sqrt(tab.tables.length*1.35))),rows=Math.ceil(tab.tables.length/cols);const w=Math.max(d.w,cols*cw+gap),h=Math.max(d.h,rows*ch+gap);if(w>5000||h>5000){classHost.warn('Too many tables for automatic arrangement. Reduce spacing or split the room.');return;}tab.designWidth=w;tab.designHeight=h;tab.tables.forEach((t,i)=>{t.x=(gap+cw*(i%cols+.5))/w*100;t.y=(gap+ch*(Math.floor(i/cols)+.5))/h*100;});autoAssignAllTablesToZones(tab);if(!silent){renderAll();saveDraft();}};
const priorAddTable=addTableToTab;addTableToTab=function(tab,capacity,options={}){const table=priorAddTable(tab,capacity,{silent:true});if(!options.silent){const d=dims(tab),[tw,th]=footprint(table);let found=false;for(let y=th/2+d.gap;y<=d.h-th/2&&!found;y+=Math.max(20,d.gap+20))for(let x=tw/2+d.gap;x<=d.w-tw/2&&!found;x+=Math.max(20,d.gap+20)){if(tab.tables.every(t=>t===table||Math.abs(t.x*d.w/100-x)>=(footprint(t)[0]+tw)/2+d.gap||Math.abs(t.y*d.h/100-y)>=(footprint(t)[1]+th)/2+d.gap)){table.x=x/d.w*100;table.y=y/d.h*100;found=true;}}if(!found){const newH=d.h+th+d.gap*2;if(newH<=5000){tab.tables.filter(t=>t!==table).forEach(t=>t.y=t.y*d.h/newH);tab.designHeight=newH;table.x=50;table.y=(d.h+d.gap+th/2)/newH*100;}else classHost.warn('Room is full; expand the room or arrange tables.');}autoAssignTableZone(table,tab);renderAll();saveDraft();}return table;};
control('mode').onclick=()=>{beginMutation();activeTab().planning.enabled=!activeTab().planning.enabled;panelHidden=activeTab().planning.enabled;collapsibles.forEach(d=>d.open=false);renderAll();saveDraft();};
control('panel').onclick=()=>{panelHidden=!panelHidden;applyDesigner();requestAnimationFrame(applyFitToScreen);};
for(const k of ['minus','plus','fit','reset'])control(k).onclick=()=>{const current=Number(canvas.style.zoom)||1;fit=k==='fit';zoom=k==='reset'?1:Math.max(.25,Math.min(2,current+(k==='plus'?.1:-.1)));applyDesigner();};
for(const [k,prop] of [['width','designWidth'],['height','designHeight'],['gap','designGap']])control(k).onchange=()=>{beginMutation();activeTab()[prop]=Number(control(k).value);renderAll();saveDraft();};
let pan=null;canvas.addEventListener('pointerdown',e=>{if(e.target!==canvas||!isDesign())return;selectedTable=-1;canvas.querySelectorAll('.designer-selected').forEach(el=>el.classList.remove('designer-selected'));pan={x:e.clientX,y:e.clientY,left:scroll.scrollLeft,top:scroll.scrollTop};canvas.setPointerCapture(e.pointerId);});canvas.addEventListener('pointermove',e=>{if(pan){scroll.scrollLeft=pan.left+pan.x-e.clientX;scroll.scrollTop=pan.top+pan.y-e.clientY;}});for(const event of ['pointerup','pointercancel'])canvas.addEventListener(event,()=>pan=null);
refs.planningModeInput.addEventListener('change',()=>{panelHidden=false;renderAll();});refs.exitPlanningButton.addEventListener('click',()=>{panelHidden=false;renderAll();});
const designStyle=document.createElement('style');designStyle.textContent='body.class-room-design .display-dashboard,body.class-room-design .unseated,body.class-room-design .planning-banner{display:none!important}body.class-design-wide .workspace{grid-template-columns:1fr!important}body.class-design-wide .controls{display:none!important}.class-designer-bar{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin:8px 0}.class-designer-bar label{display:flex;align-items:center;gap:4px;font-size:.8rem}.class-designer-bar input{width:82px;min-height:30px;padding:3px}.designer-warning{color:var(--warning);font-size:.8rem}body.class-room-design .custom-seat{width:40px!important;min-height:22px!important;height:22px;padding:2px;display:grid;place-items:center;opacity:1!important;pointer-events:none;border-width:1px!important;box-shadow:none!important}body.class-room-design .custom-seat .student-name,body.class-room-design .custom-seat .student-role,body.class-room-design .custom-seat .seat-state,body.class-room-design .custom-seat .lock-button{display:none!important}body.class-room-design .custom-seat .seat-number{font-size:9px;grid-area:auto}body.class-room-design .custom-seat{grid-template-areas:none;grid-template-columns:1fr}body.class-room-design .custom-table:not(.designer-selected) .custom-table-actions{display:none!important}body.class-room-design .custom-table.designer-selected{z-index:500;outline:2px dashed var(--accent)}body.class-room-design .custom-room-scroll{max-height:72vh;overflow:auto}body.class-room-design .custom-room-canvas{touch-action:none;cursor:grab}body:not(.class-room-design) .seat-state{display:none!important}body:not(.class-room-design) .custom-table-surface,body:not(.class-room-design) .room-object,body:not(.class-room-design) .zone-label{cursor:default}body.class-project .class-designer-bar,body.student-focus .class-designer-bar{display:none!important}';document.head.append(designStyle);
const originalRenderAll=renderAll;renderAll=function(){originalRenderAll();applyDesigner();};
new MutationObserver(()=>{const design=isDesign();if(document.body.classList.contains('class-room-design')!==design){renderPlan();applyDesigner();}}).observe(document.body,{attributes:true,attributeFilter:['class']});

syncControlsFromTab();renderAll();saveDraft();
window.SciSimsClassModule={generate:()=>randomiseSeating(),getWorkspace:()=>workspaceForStorage()};
