import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const clean = value => String(value || '').replaceAll('|', '—').trim();
const usable = item => item.term && item.definition && !/syllabus concept used when explaining/i.test(item.definition);
const moduleKey = collection => collection.module === 'glossary' ? 'glossary' : collection.module.replace(/^module/, 'm');

function categoriesFor(collection) {
  const categories = [];
  let pending = [];
  let pendingLabels = [];
  for (const group of collection.groups) {
    const items = group.items.filter(usable);
    if (items.length >= 5) {
      for (let offset = 0; offset + 5 <= items.length; offset += 5) {
        const suffix = offset ? ` ${Math.floor(offset / 5) + 1}` : '';
        categories.push([`${group.label}${suffix}`, items.slice(offset, offset + 5)]);
      }
    } else {
      pending.push(...items);
      pendingLabels.push(group.label);
      if (pending.length >= 5) {
        categories.push([pendingLabels.join(' and '), pending.slice(0, 5)]);
        pending = pending.slice(5);
        pendingLabels = [];
      }
    }
  }
  const all = collection.groups.flatMap(group => group.items).filter(usable);
  while (categories.length < 6 && all.length >= 5) {
    const offset = categories.length * 5 % Math.max(5, all.length - 4);
    categories.push([`${collection.label} challenge ${categories.length + 1}`, all.slice(offset, offset + 5)]);
  }
  return categories.slice(0, 6).map(([label, items]) => [label, items.map(item =>
    `${clean(item.term)}|${clean(item.definition)}|${clean(item.term)}`
  )]);
}

function contentFor(bank) {
  return Object.fromEntries(bank.collections.map(collection => [moduleKey(collection), categoriesFor(collection)]));
}

function writeStage6(file, directory, globalName) {
  const bank = JSON.parse(fs.readFileSync(path.join(root, 'question-banks/nsw-2017', file)));
  const output = `/* Dedicated static Jeopardy clues generated from reviewed course definitions. */\nwindow.${globalName}=${JSON.stringify(contentFor(bank))};\n`;
  fs.writeFileSync(path.join(root, 'Games/Jeopardy', directory, 'jeopardy-bank.js'), output);
}

const stage6 = [
  ['biology.json', 'Biology', 'SCISIMS_BIOLOGY_JEOPARDY'],
  ['chemistry.json', 'Chemistry', 'SCISIMS_CHEMISTRY_JEOPARDY'],
  ['investigating-science.json', 'InvSci', 'SCISIMS_INVSCI_JEOPARDY'],
  ['physics.json', 'Physics', 'SCISIMS_PHYSICS_JEOPARDY'],
  ['science-extension.json', 'ScienceExtension', 'SCISIMS_SCIENCE_EXTENSION_JEOPARDY'],
];
stage6.forEach(args => writeStage6(...args));

const junior = {};
for (const year of [7, 8, 9, 10]) {
  const bank = JSON.parse(fs.readFileSync(path.join(root, `question-banks/nsw-2023/year-${year}.json`)));
  junior[year] = {
    label: `Year ${year} Science Jeopardy`,
    banks: bank.collections.map(collection => [collection.id, collection.label, `Year ${year}`]),
    content: Object.fromEntries(bank.collections.map(collection => [collection.id, categoriesFor(collection)])),
  };
}
const juniorDirectory = path.join(root, 'Games/Jeopardy/Junior');
fs.mkdirSync(juniorDirectory, { recursive: true });
fs.writeFileSync(path.join(juniorDirectory, 'jeopardy-banks.js'), `/* Dedicated Years 7–10 Jeopardy banks. */\nwindow.SCISIMS_JUNIOR_JEOPARDY=${JSON.stringify(junior)};\n`);
