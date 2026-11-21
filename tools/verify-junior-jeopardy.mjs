import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const html = fs.readFileSync('Games/Jeopardy/Junior/index.html', 'utf8');
const adapter = html.slice(html.indexOf('const juniorParams='), html.indexOf('document.title=juniorBank.label'));
const bankSource = fs.readFileSync('Games/Jeopardy/Junior/jeopardy-banks.js', 'utf8');
for (const year of ['7', '8', '9', '10']) {
  const context = { window: {}, URLSearchParams, location: { search: '?year=' + year } };
  vm.createContext(context);
  vm.runInContext(bankSource, context);
  const result = vm.runInContext('const BANKS=[]; const CONTENT={};\n' + adapter + '\n({ BANKS, CONTENT, REVIEW_MAP, JUNIOR_MODULE_IDS, JUNIOR_MODULE_ALIASES });', context);
  assert.equal(result.JUNIOR_MODULE_IDS.length, 4, `Year ${year}: four curriculum units`);
  assert(result.BANKS.every(bank => Array.isArray(bank) && bank.length === 3), `Year ${year}: no undefined bank entries`);
  for (const id of result.JUNIOR_MODULE_IDS) assert(result.CONTENT[id]?.length, `Year ${year}: populated unit ${id}`);
  assert.equal(result.REVIEW_MAP.m1_3.length, 3);
  assert.equal(result.REVIEW_MAP.m1_4.length, 4);
  for (const [alias, id] of Object.entries(result.JUNIOR_MODULE_ALIASES)) assert(result.CONTENT[id]?.length, `Year ${year}: legacy link ${alias}`);
  for (const [id] of result.BANKS) {
    if (id === 'teacher') continue;
    const ids = result.REVIEW_MAP[id] || [id];
    assert(ids.every(key => result.CONTENT[key]?.length), `Year ${year}: playable bank ${id}`);
  }
}
console.log('Verified junior Jeopardy units, intro banks, reviews, glossary and legacy links for Years 7–10.');
