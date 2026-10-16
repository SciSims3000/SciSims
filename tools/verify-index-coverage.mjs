import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const read = file => fs.readFileSync(file, 'utf8');
const normalise = value => value.replace(/index\.html$/, '').replace(/\/$/, '');
const failures = [];
function catalogue(file, name) {
  const match = read(file).match(new RegExp(`const ${name} = (\\[[\\s\\S]*?\\n\\s*\\]);`));
  if (!match) throw new Error(`Cannot find ${name} in ${file}`);
  return vm.runInNewContext(match[1], Object.create(null), { timeout: 1000 });
}
const main = catalogue('index.html', 'SIMS');
const senior = catalogue('Stage6index.html', 'STAGE6_SIMS');
const context = { window: {} };
vm.runInNewContext(read('shared/stage45-data.js'), context, { timeout: 1000 });
const junior = context.window.SCISIMS_STAGE45.resources;
const mainPaths = new Set(main.map(item => normalise(item.path)));
const entries = [];
function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name === 'index.html' && directory !== '.') entries.push(directory);
  }
}
walk('.');
for (const entry of entries) {
  if (!mainPaths.has(entry)) failures.push(`Main catalogue is missing ${entry}/`);
}
for (const [name, items] of [['Main', main], ['Stage 4/5', junior], ['Stage 6', senior]]) {
  const seen = new Set();
  for (const item of items) {
    const target = normalise(item.path);
    if (!fs.existsSync(`${target}/index.html`)) failures.push(`${name}: broken path ${item.path}`);
    // The main catalogue deliberately lists some activities in multiple sections.
    const key = name === 'Main' ? `${item.section}:${target}` : target;
    if (seen.has(key)) failures.push(`${name}: duplicate entry ${item.path}`);
    seen.add(key);
  }
}
const teacherLinks = new Set([...read('TeacherToolsindex.html').matchAll(/href="([^"]+)"/g)].map(match => normalise(match[1])));
for (const item of main.filter(item => item.section === 'teachertools')) {
  if (!teacherLinks.has(normalise(item.path))) failures.push(`Teacher Tools is missing ${item.path}`);
}
for (const file of ['Stage4index.html', 'Stage5index.html']) {
  if (!read(file).includes('shared/stage45-data.js')) failures.push(`${file}: shared curriculum data is not loaded`);
}
for (const target of ['PhySims/CombinationCircuits', 'PhySims/WorkEnergy']) {
  for (const [name, items] of [['Stage 4/5', junior], ['Stage 6', senior]]) {
    if (!items.some(item => normalise(item.path) === target)) failures.push(`${name} is missing ${target}/`);
  }
}
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Verified all ${entries.length} activity entry points in the main catalogue, ${junior.length} junior and ${senior.length} senior resource paths, and Teacher Tools coverage.`);
}
