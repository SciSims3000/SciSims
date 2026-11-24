import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const ctx=vm.createContext({});
vm.runInContext(fs.readFileSync('EarthSims/RevisionEngine/bank.js','utf8')+';globalThis.bank={templates,syllabusBanks};',ctx);
const {templates,syllabusBanks}=ctx.bank;
assert.equal(templates.length,40);assert.equal(new Set(templates.map(t=>t.id)).size,40);
assert.equal(templates.filter(t=>t.mapping.legacy).length,40);
for(let seed=0;seed<100;seed++){
 let n=seed;const r={pick:a=>a[(n++*17+seed)%a.length]};
 for(const t of templates){const q=t.make(r);assert(q.prompt&&q.explanation&&q.hint,t.id);
  for(const [b,area] of Object.entries(t.mapping))if(area)assert(syllabusBanks[b].areas[area],t.id+' mapping');
  if(q.kind==='entry')for(const f of q.fields){assert(typeof f.expected==='string'||Number.isFinite(f.expected),t.id);assert(f.tolerance>=0,t.id)}
  else if(q.kind==='mcq'){assert.equal(q.choices.filter(v=>v===q.answer).length,1,t.id);assert.equal(new Set(q.choices).size,q.choices.length,t.id)}
  else{assert.equal(q.kind,'short');assert(q.criteria.length>=3&&q.model,t.id)}
  if(q.chart){assert.equal(q.chart.labels.length,q.chart.values.length,t.id);assert(q.chart.values.every(Number.isFinite),t.id);if(q.chart.second)assert.equal(q.chart.second.length,q.chart.labels.length,t.id)}
  if(q.table)assert(q.table.rows.every(row=>row.length===q.table.headers.length),t.id);
 }
}
const q=id=>templates.find(t=>t.id===id).make({pick:a=>a[0]});
assert.equal(q('e2').fields[0].expected,20);assert.equal(q('e5').fields[0].expected,4);
assert.equal(q('e9').fields[0].expected,.015);assert.equal(q('h1').fields[0].expected,120);
assert(Math.abs(q('h2').fields[0].expected-Math.sqrt(1000))<1e-10);
assert(Math.abs(q('h4').fields[0].expected-9.561792499)<1e-7);
assert.equal(q('c1').fields[0].expected,.5);assert.equal(q('c4').fields[0].expected,60);
assert.equal(q('c4').fields[1].expected,240);assert.equal(q('c8').fields[0].expected,6);
assert.equal(q('r1').fields[0].expected,30);assert(Math.abs(q('r3').fields[0].expected-60)<1e-10);
assert.equal(q('r7').fields[0].expected,90);
console.log('Verified 4,000 EES variants, both syllabus mappings, charts, choices and independent calculation anchors.');
