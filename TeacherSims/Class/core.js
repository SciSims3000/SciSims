/* Shared local class model and hard-constraint solver. No network access. */
(function(root){
'use strict';
const clone = value => JSON.parse(JSON.stringify(value));
const uid = () => root.crypto?.randomUUID?.() || `s-${Date.now()}-${Math.random().toString(36).slice(2)}`;
const key = (a,b) => JSON.stringify([a,b].sort());
function text(value, label, max=150){if(typeof value!=='string'||value.length>max)throw Error(`${label} must be text of at most ${max} characters.`);return value.trim();}
function score(value){if(value===null||value===undefined||value==='')return null;if(typeof value!=='number'||!Number.isFinite(value)||value<0)throw Error('Scores must be non-negative numbers or blank.');return value;}
function normalise(raw){
 if(!raw||typeof raw!=='object')throw Error('Choose a SciSims class JSON file.');
 let data=clone(raw);
 // Original tool files remain importable, alongside universal version 1 lists.
 if(!data.schema && Array.isArray(data.students)) data={...data,schema:'scisims-class-list',version:1,students:data.students.map(s=>typeof s==='string'?{id:uid(),name:s}:{...s,id:s.id||uid()})};
 if(data.schema!=='scisims-class-list'||![1,2].includes(data.version))throw Error('Unsupported class format/version. Use a SciSims class list v1 or v2.');
 if(!Array.isArray(data.students)||data.students.length>500)throw Error('A class may contain at most 500 students.');
 const ids=new Set(),names=new Set();
 data.students=data.students.map(s=>{
  if(!s||typeof s!=='object')throw Error('Each student needs an ID and name.');
  const id=text(s.id,'Student ID'),name=text(s.name,'Student name').replace(/\s+/g,' '),lower=name.toLocaleLowerCase('en-AU');
  if(!id||!name||/[,;\t\r\n]/.test(s.name)||ids.has(id)||names.has(lower))throw Error('Student names and IDs must be non-empty and unique.');
  if(s.present!==undefined&&typeof s.present!=='boolean')throw Error('Attendance must be true or false.');
  ids.add(id);names.add(lower);return {...s,id,name,present:s.present!==false,preTest:score(s.preTest),qci:score(s.qci)};
 });
 data.classId=data.classId?text(data.classId,'Class ID'):uid();
 data.className=text(data.className||'Untitled class','Class name',100);
 data.year=text(data.year||'','Year',100);data.course=text(data.course||'','Course',100);
 data.metadata=data.metadata||{};if(typeof data.metadata!=='object'||Array.isArray(data.metadata))throw Error('Invalid class metadata.');
 data.constraints=data.constraints||[];if(!Array.isArray(data.constraints)||data.constraints.length>2000)throw Error('Invalid relationship rules.');
 const rules=new Set();data.constraints=data.constraints.map(r=>{
  if(!r||!ids.has(r.a)||!ids.has(r.b)||r.a===r.b||!['together','apart'].includes(r.type)||!['mandatory','preferred'].includes(r.priority))throw Error('A relationship rule needs two different valid student IDs, a type and priority.');
  const k=key(r.a,r.b)+r.type+r.priority;if(rules.has(k))throw Error('Duplicate relationship rule.');rules.add(k);return {...r,id:r.id||uid()};
 });
 data.histories=data.histories||{};data.modules=data.modules||{};
 for(const section of ['histories','modules'])if(typeof data[section]!=='object'||Array.isArray(data[section]))throw Error(`Invalid ${section}.`);
 for(const m of ['seating','grouping','participation']){data.histories[m]??=[];if(!Array.isArray(data.histories[m]))throw Error('Invalid module history.');}
 data.schema='scisims-class-list';data.version=2;return data;
}
function legacy(data){const c=normalise(data);if(!c.students.length)throw Error('Add students before exporting a legacy list.');return {schema:c.schema,version:1,className:c.className,year:c.year,course:c.course,students:c.students.map(({id,name})=>({id,name}))};}
function pool(c,edi=false,field='qci'){
 const present=c.students.filter(s=>s.present);if(!edi)return present;
 const ranked=present.filter(s=>s[field]!==null&&s[field]!==undefined).sort((a,b)=>a[field]-b[field]||a.id.localeCompare(b.id));
 if(ranked.length<4)return [];const outer=Math.ceil(ranked.length/2),low=Math.floor(outer/2),high=Math.ceil(outer/2);return ranked.slice(low,ranked.length-high);
}
function violations(c, assignment, related){
 const present=new Set(c.students.filter(s=>s.present).map(s=>s.id));
 return c.constraints.filter(r=>r.priority==='mandatory'&&present.has(r.a)&&present.has(r.b)).filter(r=>assignment[r.a]===undefined||assignment[r.b]===undefined||(related(assignment[r.a],assignment[r.b])!==(r.type==='together')));
}
function solve(c,{mode='seating',slots,capacities,related,locks={},history=[],differentiation='random',field='qci',rng=Math.random,maxNodes=180000}={}){
 const students=c.students.filter(s=>s.present),ids=students.map(s=>s.id),allowed=new Set(ids);
 if(!ids.length)return {error:'No present students to arrange.',reason:'infeasible'};
 if(ids.length>100)return {error:'The integrated constraint solver supports up to 100 present students. Reduce attendance or use a standalone tool.',reason:'limit'};
 const caps=capacities||Array(slots).fill(1),count=caps.length;
 if(!count||caps.reduce((a,b)=>a+b,0)<ids.length)return {error:'Not enough seats or group capacity for all present students.',reason:'infeasible'};
 related ||= (a,b)=>a===b;
 const rules=c.constraints.filter(r=>allowed.has(r.a)&&allowed.has(r.b));
 const hard=rules.filter(r=>r.priority==='mandatory'),edges=new Map(ids.map(id=>[id,[]]));hard.forEach(r=>{edges.get(r.a).push(r);edges.get(r.b).push(r);});
 let nodes=0,exhausted=false;const assigned=Object.create(null),used=Array(count).fill(0);
 const valid=(id,pos)=>used[pos]<caps[pos]&&edges.get(id).every(r=>{const other=r.a===id?r.b:r.a;return assigned[other]===undefined||related(pos,assigned[other])===(r.type==='together');});
 for(const [id,pos] of Object.entries(locks)){if(!allowed.has(id))continue;if(!Number.isInteger(pos)||pos<0||pos>=count||!valid(id,pos))return {error:'Locked positions conflict with mandatory rules or capacity.',reason:'infeasible'};assigned[id]=pos;used[pos]++;}
 const shuffle=arr=>{for(let i=arr.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}return arr;};
 function search(){
  if(++nodes>maxNodes){exhausted=true;return false;}
  let next,domain;
  for(const id of ids){if(assigned[id]!==undefined)continue;const d=Array.from({length:count},(_,i)=>i).filter(p=>valid(id,p));if(!d.length)return false;if(!domain||d.length<domain.length||(d.length===domain.length&&edges.get(id).length>edges.get(next).length)){next=id;domain=d;}}
  if(!next)return true;
  for(const p of shuffle(domain)){assigned[next]=p;used[p]++;if(search())return true;delete assigned[next];used[p]--;if(exhausted)return false;}return false;
 }
 if(!search())return {error:exhausted?'Search limit reached. A valid arrangement was not found; this does not prove the rules impossible. Try again, unlock positions or simplify rules.':'Mandatory constraints are infeasible for this layout/capacity. Review together/apart rules and locks.',reason:exhausted?'limit':'infeasible',nodes};
 const prior=new Map();for(const h of history.slice(-5))for(const pair of h.pairs||[])prior.set(key(...pair),(prior.get(key(...pair))||0)+1);
 const byId=new Map(students.map(s=>[s.id,s]));
 function cost(a){let v=0;for(const r of rules)if(r.priority==='preferred'&&related(a[r.a],a[r.b])!==(r.type==='together'))v+=50;
  for(let i=0;i<ids.length;i++)for(let j=i+1;j<ids.length;j++)if(related(a[ids[i]],a[ids[j]])){v+=(prior.get(key(ids[i],ids[j]))||0)*10;const x=byId.get(ids[i])[field],y=byId.get(ids[j])[field];if(mode==='grouping'&&x!==null&&y!==null){const diff=Math.abs(x-y);v+=differentiation==='similar'?diff:differentiation==='mixed'?-diff:0;}}
  return v;
 }
 let best=cost(assigned);const movable=ids.filter(id=>locks[id]===undefined);
 for(let n=0;n<1200&&movable.length>1;n++){const a=movable[Math.floor(rng()*movable.length)],b=movable[Math.floor(rng()*movable.length)];if(a===b)continue;[assigned[a],assigned[b]]=[assigned[b],assigned[a]];const hardOK=!violations(c,assigned,related).length,newCost=hardOK?cost(assigned):Infinity;if(newCost<=best)best=newCost;else [assigned[a],assigned[b]]=[assigned[b],assigned[a]];}
 const pairs=[];for(let i=0;i<ids.length;i++)for(let j=i+1;j<ids.length;j++)if(related(assigned[ids[i]],assigned[ids[j]]))pairs.push([ids[i],ids[j]]);
 const unmet=rules.filter(r=>r.priority==='preferred'&&related(assigned[r.a],assigned[r.b])!==(r.type==='together')).length;
 return {assignment:{...assigned},pairs,nodes,warnings:unmet?[`${unmet} preferred relationship rule(s) could not be met.`]:[]};
}
root.SciSimsClassCore={normalise,legacy,pool,violations,solve,uid,clone};
if(typeof module!=='undefined')module.exports=root.SciSimsClassCore;
})(globalThis);
