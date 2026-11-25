// Inserted inside the original Random Group Maker closure by build-class.mjs.
const classHost=window.SciSimsClassHost,classCore=parent.SciSimsClassCore,shared=classHost.read();
studentId=function(name){return shared.students.find(s=>s.name===name)?.id||name;};
dom.namesInput.value=shared.students.map(s=>s.name).join('\n');
attendance=new Map(shared.students.map(s=>[s.id,s.present]));settings.attendance=true;
rules=[];Object.assign(settings,shared.modules.grouping?.settings||{});settings.rules=false;settings.history=true;applySettings();
rosters=[{id:shared.classId,names:shared.students.map(s=>s.name),className:shared.className,year:shared.year,course:shared.course,history:shared.histories.grouping.map(h=>h.groups).filter(Boolean)}];activeRosterId=shared.classId;
dom.classNameInput.value=shared.className;dom.yearSelect.value=shared.year;dom.courseSelect.value=shared.course;
makeCandidate=function(students,numberOfGroups,preserveLocks){
 const capacities=Array.from({length:numberOfGroups},(_,i)=>Math.floor(students.length/numberOfGroups)+(i<students.length%numberOfGroups?1:0));
 const locks={};if(preserveLocks)currentGroups.forEach((group,i)=>group.forEach(s=>{if(studentLocks.has(s.id)||groupLocks.has(i))locks[s.id]=i;}));
 const options=classHost.options(),result=classCore.solve(shared,{mode:'grouping',capacities,locks,history:classHost.read().histories.grouping,differentiation:options.differentiation,field:options.field});
 if(result.error){classHost.warn(result.error);return result;}
 const groups=Array.from({length:numberOfGroups},()=>[]);students.forEach(s=>groups[result.assignment[s.id]].push(s));return {...result,groups};
};
const originalRecordHistory=recordHistory;
recordHistory=function(){originalRecordHistory();const assignment={};currentGroups.forEach((g,i)=>g.forEach(s=>assignment[s.id]=i));if(classCore.violations(shared,assignment,(a,b)=>a===b).length){classHost.warn('Mandatory rules violated: regenerate groups before displaying them.');return;}const pairs=[];currentGroups.forEach(g=>g.forEach((s,i)=>g.slice(i+1).forEach(t=>pairs.push([s.id,t.id]))));classHost.record('grouping',{groups:currentGroups.map(g=>g.map(s=>s.id)),pairs});classHost.saveModule('grouping',{groups:currentGroups,settings});};
// Reject drag moves that break mandatory rules, including partial together sets.
const originalRenderGroups=renderGroups;
let lastValidGroups=[];
renderGroups=function(){const assignment={};currentGroups.forEach((g,i)=>g.forEach(s=>assignment[s.id]=i));if(currentGroups.length&&classCore.violations(shared,assignment,(a,b)=>a===b).length){currentGroups=classCore.clone(lastValidGroups);classHost.warn('Move rejected: it would break a mandatory relationship rule.');}else lastValidGroups=classCore.clone(currentGroups);originalRenderGroups();if(currentGroups.length)classHost.saveModule('grouping',{groups:currentGroups,settings});};
dom.savedRosterSelect.closest('.control-section').hidden=true;dom.namesInput.closest('.control-section').hidden=true;
// Hide duplicate class editing; the original activity controls stay available.
for(const el of [dom.namesInput,dom.savedRosterSelect,dom.yearSelect,dom.courseSelect,dom.classNameInput,dom.saveRosterButton,dom.newRosterButton,dom.deleteRosterButton,dom.loadExampleButton,dom.clearButton]){el.hidden=true;}
for(const el of [dom.attendanceToggle,dom.rulesToggle]){el.closest('.feature-card')?.setAttribute('hidden','');el.disabled=true;}
dom.attendanceBody.hidden=true;dom.rulesBody.hidden=true;
// Central attendance cannot be disabled by a local feature toggle.
getEligibleStudents=function(){return getAllStudents().filter(s=>s.present);};
updateInputState();renderRules();updateHistorySummary();
const saved=shared.modules.grouping?.groups;
if(saved?.length){const eligible=new Set(shared.students.filter(s=>s.present).map(s=>s.id));currentGroups=saved.map(g=>g.filter(s=>eligible.has(s.id)).map(s=>({...s,name:shared.students.find(x=>x.id===s.id).name})));renderGroups();}
const originalSaveSettings=saveSettings;saveSettings=function(){originalSaveSettings();classHost.saveModule('grouping',{settings});};
window.SciSimsClassModule={generate:()=>generateGroups(false),getGroups:()=>currentGroups};
