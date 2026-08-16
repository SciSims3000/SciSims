# Unified revision games overhaul

## Audit summary

The current catalogue contains five core revision mechanics across 23 curriculum-specific pages:

| Game mechanic | Existing implementations | Unified mode |
| --- | ---: | --- |
| Word and definition matching | Years 7–10 plus six Stage 6 pages | Word Match |
| Hidden vocabulary guessing | Years 7–10 | Mystery Word |
| Category discrimination | Years 7–10 | Odd One Out |
| Four connected groups | Years 7–10 plus six Stage 6 pages | Science Connections |
| Ordered concept chains | Years 7–10 plus six Stage 6 pages | Chain Reaction |

The legacy games embed large, duplicated curriculum objects inside individual HTML files. The largest standalone game is over 800 KB. Corrections therefore need to be repeated across several games and Stage 6 course variants.

## Implemented foundation

- One shared JSON catalogue under `question-banks/`.
- Four NSW Science 7–10 (2023) banks, one for each year.
- Six NSW Stage 6 Science (2017) course banks.
- Year 11, Year 12, whole-course and glossary-compatible collections.
- 67 collections and 3,715 unique term, clue and definition records.
- A versioned schema and stable record IDs.
- A shared browser loader with caching and schema compatibility checks.
- One front end at `Games/RevisionHub/` with five game adapters.
- Automated structural validation for coverage, uniqueness and required fields.

## Migration policy

The existing game URLs remain intact during review. The Revision Hub becomes the primary catalogue entry first. After classroom acceptance, legacy URLs can redirect to the equivalent Hub mode without breaking bookmarks.

Future curriculum corrections should be made in the JSON banks. Game code must not contain curriculum question banks.
