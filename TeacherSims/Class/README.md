# SciSims Class 1.0 — development assessment

Class combines the existing Seating Plan Maker, Random Group Maker and Everybody Thinks with a local class manager. Open `TeacherSims/Class/` through a static HTTP server. There is no package install or server-side student database.

## Architecture and maintenance

- `core.js`: portable class v2 validation, v1 migration/export, EDI pool and mandatory constraint solver.
- `app.js`, `index.html`, `class.css`: shared class manager and teacher/student display.
- `seating-bridge.js`, `grouping-bridge.js`: adapters inserted inside the existing module closures.
- `tools/build-class.mjs`: reproducibly generates `modules/` from the three existing implementations. It checks source anchors and fails if the bundled Everybody Thinks foundation changes incompatibly. Commit generated files because GitHub Pages serves static assets directly.
- Existing standalone application code and storage keys are unchanged. Their only application-page edit loads the exact legacy notice below the title. Class module persistence uses a bound host adapter, so it cannot write into standalone storage or another class after a class switch.

Run from repository root:

```sh
node tools/build-class.mjs
node --test tests/class-core.test.cjs
node tools/verify-site-navigation.mjs
node tools/verify-latest-menus.mjs
python3 -m http.server 8765 --bind 127.0.0.1
```

## Data contract and privacy

`scisims-class-list` version 2 retains classId, className/year/course, extensible metadata, stable student IDs, present flags, nullable non-negative preTest/qci scores, relationship rules, independent module histories and module state. Unknown JSON properties survive a v2 round trip. Full exports contain sensitive teacher information and should be stored appropriately by the teacher.

Version 1 lists import directly with IDs retained. Everybody Thinks older list exports also import, retaining extra question data in the portable object. A legacy v1 export intentionally contains only names/IDs/basic metadata and is accepted by all three unchanged standalone validators. Use v2 for a complete backup. Legacy seating workspace/all-tool backup formats remain available through the standalone tool; they are not automatically migrated by the central importer.

Browser localStorage stores classes on the current origin. Clearing site data removes them; there is no cloud sync. The parent and integrated module content-security policies forbid network connections; static scripts/styles are loaded from the same site. There are no analytics, remote student services or student data requests. The parent detects a changed saved revision and refuses to overwrite a newer copy from another tab. This is a best-effort tab conflict safeguard; localStorage is not a transactional database.

Teacher controls, scores, notes, relationship rules, imports and history panels are hidden in student display. This is a projection safeguard, not authentication: someone with access to the browser/device can exit the display or inspect local data.

## Constraint and score semantics

Mandatory together/apart constraints must all hold. Failed searches never publish a violating candidate. Seating uses the original `seatsAreRelated` geometry: orthogonal neighbours in rows/exams, same desk/pod, original custom-room/U-shape proximity thresholds. Thus “near” in a custom room is the foundation's 18-coordinate-unit threshold, not a physical distance measurement.

Grouping together means same group; apart means different groups. Shared attendance deactivates rules involving absent students without deleting them. Manual seating/grouping changes that violate mandatory rules are rejected. Changing rules clears affected arrangements but preserves room geometry and prior histories.

Preferred rules, repeated-pair penalties and mixed/similar score grouping use a heuristic objective and are not guaranteed optimal. Infeasibility and search exhaustion have different explicit messages. The solver supports up to 100 present students (the portable model supports 500) and stops at 180,000 search nodes. Very complex valid sets may require another attempt, unlocking or simplification.

EDI ranks scored present students and selects the middle floor(n/2), using the legacy QCI outer-quarter convention and ID tie-breaks. At least four scored present students are required. Blank scores are excluded. QCI and pre-test are independent fields. Everybody Thinks fair-cycle completion uses the eligible pool in EDI mode.

## Preserved capabilities and boundaries

Seating retains quick/custom rooms, up to five room tabs, tables, rotation, zones, objects, locks, manual moves, name order, QCI A/B arrangement, roles, lesson task, timers, picker, print and display controls. Central rules also guard QCI/name-order/manual arrangement changes, which may be rejected when mandatory constraints conflict.

Grouping retains group count/size settings, locks, roles, manual moves, copy, print, timer and focus view, with shared hard/preferred rules and optional score grouping. Questioning retains Plinko, custom banks, curriculum starters, thinking/answer time, weighted cycles, question pool, undo and round history. Class list editing and legacy export controls are centralised.

Module histories retain at most 100 central entries; original internal history limits also apply. Attendance is current shared lesson state, not an official register or a dated attendance ledger. Module timers pause when leaving/reloading a module; an active round is not resumed. Group locks/role assignments and some transient UI state are session controls rather than full cross-module resume state. Older Everybody Thinks import questions are preserved in the file but should be loaded into the question bank through that module's editor if needed.

## Release gate

Development only. Do not merge into main or deploy until the user has assessed the result and explicitly approves production release. See TEST-REPORT.md for evidence and remaining verification limits.
