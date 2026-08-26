import fs from 'node:fs';
import assert from 'node:assert/strict';

const file = new URL('../TeacherSims/data/nsw-2023/stage-4/7-1-observing-the-universe.json', import.meta.url);
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
assert.equal(data.overview.label, 'Overview');
assert.equal(data.overview.banks.length, 9);
for (const bank of data.overview.banks) {
  assert.equal(bank.cookies.length, 10, `${bank.outcome} cookie count`);
  assert.equal(bank.wyr.length, 10, `${bank.outcome} WYR count`);
}
const statements = data.sections.flatMap(section => section.contentStatements);
assert.equal(statements.length, 19);
const ids = new Set();
for (const statement of statements) {
  assert.equal(statement.cookies.length, 10, `${statement.id} cookie count`);
  assert.equal(statement.wyr.length, 10, `${statement.id} WYR count`);
  for (const item of [...statement.cookies, ...statement.wyr]) {
    assert(!ids.has(item.id), `duplicate id ${item.id}`); ids.add(item.id);
    assert(item.explanation.length >= 80, `${item.id} explanation too short`);
    assert(item.think.endsWith('?'), `${item.id} THINK must be a question`);
    assert(item.metadata.outcome && item.metadata.contentStatement && item.metadata.difficulty && item.metadata.type);
    assert(Array.isArray(item.metadata.workingScientifically) && Array.isArray(item.metadata.lessonUse));
    if (item.kind === 'fortune-cookie') assert(item.statement);
    else assert(item.optionA && item.optionB && item.prompt);
  }
}
console.log(`Verified 9 Overview banks (180 items) and ${statements.length} content statements (${ids.size} detailed items).`);
