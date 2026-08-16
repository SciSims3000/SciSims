import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import vm from 'node:vm';

const root = new URL('../', import.meta.url).pathname;
const outputRoot = join(root, 'question-banks');
const slug = value => value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const itemId = (collection, group, term) => `${collection}-${group}-${slug(term)}`;

async function writeJson(path, value) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, `${JSON.stringify(value, null, 2)}\n`);
}

function normaliseGroups(collectionId, module) {
  return Object.entries(module.groups)
    .filter(([, items]) => Array.isArray(items) && items.length)
    .map(([groupId, items]) => ({
      id: groupId,
      label: module.groupNames?.[groupId] || groupId,
      items: items.map(item => ({
        id: itemId(collectionId, groupId, item.word),
        term: item.word,
        clue: item.clue || item.definition,
        definition: item.definition || item.clue,
        tags: [groupId],
      })),
    }));
}

async function buildJunior() {
  const html = await readFile(join(root, 'Games/ScienceWordMatch/index.html'), 'utf8');
  const match = html.match(/const moduleLibrary = (\{.*\});/);
  if (!match) throw new Error('Could not find the Years 7–10 module library.');
  const library = JSON.parse(match[1]);
  const files = [];

  for (const [year, yearData] of Object.entries(library)) {
    const collections = Object.entries(yearData.modules).map(([moduleId, module]) => {
      const collectionId = `nsw-2023-year-${year}-${moduleId}`;
      return {
        id: collectionId,
        label: module.label,
        year: Number(year),
        stage: Number(year) <= 8 ? 4 : 5,
        course: `Year ${year} Science`,
        module: moduleId,
        learningIntention: module.learningIntention || '',
        successCriteria: module.successCriteria || '',
        groups: normaliseGroups(collectionId, module),
      };
    });
    const bank = {
      schemaVersion: '1.0.0',
      id: `nsw-2023-year-${year}`,
      jurisdiction: 'NSW',
      syllabus: 'Science 7–10 (2023)',
      label: `Year ${year} Science`,
      collections,
    };
    const relativePath = `nsw-2023/year-${year}.json`;
    await writeJson(join(outputRoot, relativePath), bank);
    files.push({ id: bank.id, label: bank.label, stage: collections[0]?.stage, years: [Number(year)], path: relativePath, collections: collections.length });
  }
  return files;
}

async function loadYear11Api() {
  const source = await readFile(join(root, 'shared/stage6-year11-games.js'), 'utf8');
  const context = { window: {}, document: { addEventListener() {} }, location: { pathname: '' } };
  vm.createContext(context);
  vm.runInContext(source, context);
  return context.window.SCISIMS_YEAR11_GAMES;
}

const stage6Courses = [
  ['Biology', 'Biology', 'Biology'],
  ['Chemistry', 'Chemistry', 'Chemistry'],
  ['EarthEnvironmentalScience', 'EarthEnvironmentalScience', 'Earth and Environmental Science'],
  ['InvSci', 'InvSci', 'Investigating Science'],
  ['Physics', 'Physics', 'Physics'],
  ['ScienceExtension', null, 'Science Extension'],
];

async function buildStage6() {
  const api = await loadYear11Api();
  const files = [];
  for (const [folder, apiCourse, course] of stage6Courses) {
    const collections = [];
    for (const module of apiCourse ? api.courseModules(apiCourse) : []) {
      const collectionId = `nsw-2017-${slug(course)}-year-11-${module.key}`;
      collections.push({
        id: collectionId,
        label: module.label,
        year: 11,
        stage: 6,
        course,
        module: module.key,
        groups: module.groups.map(group => {
          const groupId = slug(group.connection);
          return {
            id: groupId,
            label: group.connection,
            items: group.pairs.map(([term, definition]) => ({ id: itemId(collectionId, groupId, term), term, clue: definition, definition, tags: [groupId] })),
          };
        }),
      });
    }

    const html = await readFile(join(root, `Games/HSCWordMatch/${folder}/index.html`), 'utf8');
    const match = html.match(/const BANKS = (\{.*\});/);
    if (!match) throw new Error(`Could not find Year 12 banks for ${course}.`);
    const banks = JSON.parse(match[1]);
    const connectionsHtml = await readFile(join(root, `Games/HSCConnections/${folder}/index.html`), 'utf8');
    const connectionsMatch = connectionsHtml.match(/const CONNECTIONS=(\[.*\]);/);
    if (!connectionsMatch) throw new Error(`Could not find Year 12 connection groups for ${course}.`);
    const connectionGroups = JSON.parse(connectionsMatch[1]);
    for (const [moduleId, module] of Object.entries(banks)) {
      const isGlossary = moduleId.toLowerCase().includes('glossary');
      const collectionId = `nsw-2017-${slug(course)}-${isGlossary ? 'glossary' : `year-12-${moduleId}`}`;
      const definitions = new Map(module.items.map(([term, definition]) => [term.toLowerCase(), definition]));
      const connectionBankId = folder === 'ScienceExtension' && /^module[1-4]$/.test(moduleId)
        ? `module${Number(moduleId.replace('module', '')) + 4}`
        : moduleId;
      const groupedConnections = connectionGroups.filter(group => group.bank === connectionBankId && group.complexity === 'easy');
      const groups = groupedConnections.length ? groupedConnections.map((group, index) => {
        const groupId = `${slug(group.connection)}-${index + 1}`;
        return {
          id: groupId,
          label: group.connection,
          explanation: group.explanation,
          items: group.terms.map(term => {
            const definition = definitions.get(term.toLowerCase()) || group.explanation;
            return { id: itemId(collectionId, groupId, term), term, clue: definition, definition, tags: [moduleId, groupId] };
          }),
        };
      }) : [{
        id: 'core',
        label: isGlossary ? 'Syllabus glossary' : module.label,
        items: module.items.map(([term, definition]) => ({ id: itemId(collectionId, 'core', term), term, clue: definition, definition, tags: [moduleId] })),
      }];
      collections.push({
        id: collectionId,
        label: module.label,
        year: isGlossary ? null : 12,
        stage: 6,
        course,
        module: moduleId,
        collectionType: isGlossary ? 'glossary' : 'module',
        groups,
      });
    }

    const bank = {
      schemaVersion: '1.0.0',
      id: `nsw-2017-${slug(course)}`,
      jurisdiction: 'NSW',
      syllabus: 'Stage 6 Science (2017)',
      label: course,
      collections,
    };
    const relativePath = `nsw-2017/${slug(course)}.json`;
    await writeJson(join(outputRoot, relativePath), bank);
    files.push({ id: bank.id, label: bank.label, stage: 6, years: [...new Set(collections.map(x => x.year).filter(Boolean))], path: relativePath, collections: collections.length });
  }
  return files;
}

const junior = await buildJunior();
const stage6 = await buildStage6();
const catalogue = {
  schemaVersion: '1.0.0',
  generatedFrom: 'Existing verified SciSims revision banks',
  curricula: [
    { id: 'nsw-2023', label: 'NSW Science 7–10 (2023)', banks: junior },
    { id: 'nsw-2017', label: 'NSW Stage 6 Science (2017)', banks: stage6 },
  ],
};
await writeJson(join(outputRoot, 'catalogue.json'), catalogue);
console.log(`Built ${junior.length + stage6.length} banks with ${[...junior, ...stage6].reduce((sum, bank) => sum + bank.collections, 0)} collections.`);
