import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const folders = ['Biology','Chemistry','EarthEnvironmentalScience','InvSci','Physics'];
const families = ['HSCWordMatch','HSCConnections','Stage6ChainReaction'];
const failures = [];

const shared = fs.readFileSync(path.join(root, 'shared/stage6-year11-games.js'), 'utf8');
const sandbox = { window: {}, document: { addEventListener() {} } };
vm.runInNewContext(shared, sandbox, { filename: 'stage6-year11-games.js' });
const api = sandbox.window.SCISIMS_YEAR11_GAMES;

for (const folder of folders) {
  const course = folder;
  if (api.courseModules(course).length !== 4) failures.push(`${course}: expected four Year 11 modules`);
  if (Object.keys(api.wordMatch(course)).length !== 4) failures.push(`${course}: missing Word Match banks`);
  if (api.connections(course).length !== 72) failures.push(`${course}: missing Connections groups`);
  if (api.sequences(course).length !== 4 || api.chains(course).length !== 4) failures.push(`${course}: missing chain data`);
  for (const family of families) {
    const file = path.join(root, 'Games', family, folder, 'index.html');
    const html = fs.readFileSync(file, 'utf8');
    for (const token of ['stage6-year11-games.js','scisims-nav.js','value="module1"','value="year11review"','value="year11glossary"']) {
      if (!html.includes(token)) failures.push(`${family}/${folder}: missing ${token}`);
    }
    for (const match of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)) {
      if (!match[1].trim()) continue;
      try { new vm.Script(match[1], { filename: `${family}/${folder}/inline.js` }); }
      catch (error) { failures.push(`${family}/${folder}: ${error.message}`); }
    }
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Verified 15 games, 20 Year 11 module banks, shared navigation, and inline JavaScript syntax.');
}
