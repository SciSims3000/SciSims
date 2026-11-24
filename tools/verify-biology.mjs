import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const ctx=vm.createContext({});
vm.runInContext(fs.readFileSync('BioSims/RevisionEngine/bank.js','utf8')+';globalThis.bank={templates,syllabusBanks};',ctx);
const {templates,syllabusBanks}=ctx.bank;
assert.equal(templates.length,40);assert.equal(new Set(templates.map(t=>t.id)).size,40);
assert.equal(templates.filter(t=>t.mapping.legacy).length,32);
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
assert.equal(q('h1').fields[0].expected,0.25);assert.equal(q('h3').fields[0].expected,0.0625);
assert.equal(q('h6').fields[1].expected,16);assert.equal(q('g4').fields[0].expected,16);
assert.equal(q('n8').fields[0].expected,10);assert(Math.abs(q('b2').fields[0].expected-0.641025641)<1e-8);
console.log('Verified 4,000 Biology question variants, syllabus mappings, tables, choices and science calculation anchors.');
