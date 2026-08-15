import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const files = [];
const failures = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === '.git') continue;
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name === 'index.html') files.push(full);
  }
}

walk(root);

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const label = path.relative(root, file);
  const navScripts = [...html.matchAll(/<script\b[^>]*src=["']([^"']*scisims-nav\.js)["'][^>]*>/gi)];
  const navStyles = [...html.matchAll(/<link\b[^>]*href=["']([^"']*scisims-nav\.css)["'][^>]*>/gi)];
  const mounts = [...html.matchAll(/id=["']scisimsSiteNav["']/gi)];

  if (navScripts.length !== 1) failures.push(`${label}: expected one navigation script, found ${navScripts.length}`);
  if (navStyles.length !== 1) failures.push(`${label}: expected one navigation stylesheet, found ${navStyles.length}`);
  if (mounts.length !== 1) failures.push(`${label}: expected one navigation mount, found ${mounts.length}`);

  for (const match of [...navScripts, ...navStyles]) {
    const target = path.resolve(path.dirname(file), match[1].split('?')[0]);
    if (!fs.existsSync(target)) failures.push(`${label}: missing asset ${match[1]}`);
  }

  if (/Back to (?:the )?(?:main )?SciSims(?: page)?/i.test(html)) {
    failures.push(`${label}: redundant back-to-SciSims control remains`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Verified shared navigation, asset paths, mounts, and back-control cleanup across ${files.length} primary pages.`);
}
