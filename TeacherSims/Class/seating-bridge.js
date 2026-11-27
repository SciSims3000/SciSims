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
syncControlsFromTab();renderAll();saveDraft();
window.SciSimsClassModule={generate:()=>randomiseSeating(),getWorkspace:()=>workspaceForStorage()};
