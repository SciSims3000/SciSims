import fs from 'node:fs';
import assert from 'node:assert/strict';
import { Script } from 'node:vm';

const html=fs.readFileSync('index.html','utf8');
assert(!/(?:tokens truncated|Warning: truncated output|original token count)/.test(html),'Catalogue contains truncated tool output');
const scripts=[...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)].filter(m=>!m[1].includes('src='));
for(const [i,m] of scripts.entries())new Script(m[2],{filename:`index.html:inline-${i+1}`});
const match=html.match(/const SIMS\s*=\s*(\[[\s\S]*?\n\s*\]);/);
assert(match,'Catalogue array was not found');
const sims=new Script(match[1]).runInNewContext();
assert(sims.length>=200,'Catalogue unexpectedly lost resources');
for(const slug of ['ScienceCodebreaker','ScienceFlow','CircuitBuilder','LabEscape','ScienceSequence','FoodWebBuilder','ParticleDetective']){
 const path=`TeacherSims/${slug}/`;
 assert.equal(sims.filter(sim=>sim.path===path).length,1,`${slug} must be listed exactly once`);
}
assert.equal(sims.find(sim=>sim.path==='PhySims/RevisionEngine/').title,'HSC Physics Revision Engine','Physics engine naming drift');
assert.equal(sims.filter(sim=>sim.path==='BioSims/RevisionEngine/').length,1,'Biology engine must be listed exactly once');
assert.equal(sims.find(sim=>sim.path==='BioSims/RevisionEngine/').section,'biosims');
assert.equal(sims.find(sim=>sim.path==='BioSims/RevisionEngine/').title,'HSC Biology Revision Engine');
for(const sim of sims){
 assert.equal(typeof sim.title,'string','Resource title missing');
 assert.equal(typeof sim.path,'string',`${sim.title}: resource path missing`);
}
console.log(`Verified complete, parseable catalogue with ${sims.length} resources and all seven recent games.`);
