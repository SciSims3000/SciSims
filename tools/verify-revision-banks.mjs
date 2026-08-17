import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('../', import.meta.url).pathname;
const catalogue = JSON.parse(await readFile(join(root, 'question-banks/catalogue.json')));
assert.equal(catalogue.schemaVersion, '1.0.0');
const bankEntries = catalogue.curricula.flatMap(curriculum => curriculum.banks);
assert.equal(bankEntries.length, 10, 'Expected four junior banks and six Stage 6 course banks.');

const seenIds = new Set();
const coveredYears = new Set();
let collectionCount = 0;
let itemCount = 0;
for (const entry of bankEntries) {
  const bank = JSON.parse(await readFile(join(root, 'question-banks', entry.path)));
  assert.equal(bank.schemaVersion, '1.0.0');
  assert.ok(bank.collections.length, `${bank.label} has no collections.`);
  collectionCount += bank.collections.length;
  for (const collection of bank.collections) {
    if (collection.year) coveredYears.add(collection.year);
    assert.ok(collection.id && collection.label && collection.course && collection.module);
    assert.ok(collection.groups.length, `${collection.label} has no groups.`);
    assert.ok(collection.groups.filter(group => group.items.length >= 3).length >= 2, `${collection.label} cannot support Odd One Out.`);
    assert.ok(collection.groups.filter(group => group.items.length >= 4).length >= 4, `${collection.label} cannot support Connections.`);
    assert.ok(collection.groups.some(group => group.items.length >= 4), `${collection.label} cannot support Chain Reaction.`);
    for (const group of collection.groups) {
      assert.ok(group.id && group.label && group.items.length, `${collection.label} contains an empty group.`);
      for (const item of group.items) {
        assert.ok(item.id && item.term && item.clue && item.definition, `Incomplete item in ${collection.label}.`);
        assert.ok(!seenIds.has(item.id), `Duplicate item ID: ${item.id}`);
        seenIds.add(item.id);
        itemCount += 1;
      }
    }
  }
}

assert.deepEqual([...coveredYears].sort((a,b)=>a-b), [7,8,9,10,11,12]);
assert.ok(collectionCount >= 67);
assert.ok(itemCount >= 3000);
for (const page of ['index.html', 'Stage6index.html', 'shared/stage45-data.js']) {
  const source = await readFile(join(root, page), 'utf8');
  assert.match(source, /Games\/RevisionHub\//, `${page} does not expose the unified Revision Hub.`);
}
const hub = await readFile(join(root, 'Games/RevisionHub/index.html'), 'utf8');
const hubScript = await readFile(join(root, 'Games/RevisionHub/app.js'), 'utf8');
assert.match(hub, /shared\/revision-bank-loader\.js/);
for (const mode of ['match', 'mystery', 'odd', 'connections', 'chain', 'jeopardy']) assert.match(hubScript, new RegExp(`${mode}:render`, 'i'));
console.log(`Validated ${bankEntries.length} banks, ${collectionCount} collections and ${itemCount} unique records across Years 7–12.`);
