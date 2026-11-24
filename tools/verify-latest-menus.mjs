import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const read=p=>fs.readFileSync(p,'utf8');const main=vm.runInNewContext(read('index.html').match(/const SIMS\s*=\s*(\[[\s\S]*?\n\s*\]);/)[1]);const ctx={window:{}};vm.runInNewContext(read('shared/stage45-data.js'),ctx);const data=ctx.window.SCISIMS_STAGE45;
const source=read('Stage6index.html');const senior=vm.runInNewContext(source.slice(source.indexOf('const STAGE6_SIMS ='),source.indexOf('  const COURSE_COLOURS ='))+'\nSTAGE6_SIMS;');
const normal=p=>p.replace(/index\.html$/,'').replace(/\/$/,'');
for(const list of [data.resources,data.sharedTools,senior]){const paths=list.map(x=>normal(x.path));assert.equal(new Set(paths).size,paths.length,'Duplicate menu path')}
for(const slug of ['ScienceCodebreaker','ScienceFlow','CircuitBuilder','LabEscape','ScienceSequence','FoodWebBuilder','ParticleDetective']){const path=`TeacherSims/${slug}/`;assert(main.some(x=>x.path===path));assert(data.sharedTools.some(x=>x.path===path));const entry=data.resources.find(x=>x.path===path);assert(entry?.mappings.length,slug);for(const mapping of entry.mappings)assert(data.modules.some(m=>m.code===mapping.module));for(const file of ['TeacherToolsindex.html','Moreindex.html'])assert(read(file).includes(`href="${path}"`),`${file}: ${slug}`)}
for(const path of ['PhySims/RevisionEngine/','ChemSims/RevisionEngine/','BioSims/RevisionEngine/','EarthSims/RevisionEngine/']){assert(main.some(x=>x.path===path));assert(senior.some(x=>x.path===path));for(const file of ['TeacherToolsindex.html','Moreindex.html'])assert(read(file).includes(`href="${path}"`),file+': '+path)}
for(const slug of ['CircuitBuilder','FoodWebBuilder','ParticleDetective'])assert(senior.some(x=>x.path===`TeacherSims/${slug}/`));
for(const file of ['Stage4index.html','Stage5index.html'])assert(read(file).includes('shared/stage45-data.js'));
assert(read('HSCindex.html').includes("window.location.replace('Stage6index.html')"));
for(const file of ['Stage4index.html','Stage5index.html','Stage6index.html','TeacherToolsindex.html','Moreindex.html'])assert(read(file).includes('shared/scisims-nav.js'));
console.log(`Verified recent games and all HSC engines across relevant menus; ${data.resources.length} junior resources and ${senior.length} senior resources.`);
