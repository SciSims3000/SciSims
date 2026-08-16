# SciSims revision-bank schema

All revision games load the same curriculum catalogue and bank files.

## Catalogue

`catalogue.json` lists curricula and the relative path of each bank. A bank represents one Year 7–10 course or one Stage 6 course.

## Bank

Each bank contains:

- `schemaVersion`: schema compatibility version.
- `id`, `label`, `jurisdiction`, `syllabus`: stable metadata.
- `collections`: editable modules or glossary collections.

Each collection contains its year, stage, course, module and grouped items. Each item has a stable ID, term, clue, definition and tags.

Game modes transform the same records:

- Word Match pairs `term` with `definition`.
- Mystery Word uses `term`, `clue` and `definition`.
- Odd One Out uses the collection's groups.
- Connections uses four groups of four terms.
- Chain Reaction uses ordered terms from related groups.

Generated banks are rebuilt with `node tools/build-revision-banks.mjs`. Source corrections should ultimately be made in the canonical JSON rather than copied back into individual games.
