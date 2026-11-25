# SciSims Class 1.0 assessment — 26 November 2026

**Status: development build ready for assessment; production deployment is not authorised.**

Foundation: clean `class-list-interoperability` branch at `91d33b9397727f781625d8a5bdf18b8cf015fa67`. No existing local checkout or concurrent local edits were reused. Main and deployment configuration were not changed.

## Automated verification

`node --test tests/class-core.test.cjs` — **17 passed, 0 failed**.

Covers 24-student v1 migration; ID stability on rename; complete v2 JSON round trip including metadata, attendance, scores, rules and module histories/state; v1 export accepted by the existing legacy validator; malformed/future/duplicate files; mandatory seating adjacency and separation; balanced random/mixed/similar grouping; fixed locks and insufficient capacity; proven infeasibility versus search exhaustion; preferred-rule warnings; absent partners; EDI pool; older Everybody Thinks list files; unchanged standalone application sources; generated script parsing; and prevention of stale iframe writes into another class.

`node tools/verify-site-navigation.mjs` — **passed**, existing audit covered 204 primary pages.

`node tools/verify-latest-menus.mjs` — **passed**, existing audit covered relevant menus and 139 junior/155 senior resources.

Build helper completed successfully. Generated inline seating/grouping scripts and participation JavaScript parsed successfully. The generator checks foundation anchors to prevent silent adaptation failure.

## Browser verification

Tested through a local static HTTP server in the available in-app browser, with fictional data only in Class.

- Created a demo with 24 named/identified students, 22 present, two absent, independent scores, two mandatory rules and one preferred rule.
- Generated seating for all 22 present students with the mandatory together/apart pair relationships satisfied. Absentees were omitted.
- Generated 22 present students into balanced groups of 6/6/5/5. Together pair stayed together and apart pair stayed separated. Correct class metadata displayed.
- Completed Everybody Thinks question → one-second think timer → EDI student selection. Selected Zara Ahmed, within the scored middle pool. Participation history saved and restored after reloading.
- Exported a full v2 file through the actual browser download. Parsed that exported file: 24 students, 22 present, 3 rules, and one entry in each of seating/grouping/participation histories. A normalise/JSON round trip was deeply equal. Reimported the browser-exported file using the actual file chooser and replacement dialog; the interface confirmed IDs preserved.
- Added contradictory mandatory together and apart rules for the same fictional pair. Seating generation displayed “Mandatory constraints are infeasible for this layout/capacity. Review together/apart rules and locks.” No violating plan was published. Removed the test contradiction and regenerated groups successfully.
- Checked light/dark theme switching. The in-app browser refused native fullscreen; the app displayed an explicit unavailable message, so native fullscreen still needs a classroom-browser check.
- Checked student display in questioning and grouping: central class/score/rule controls concealed; questioning setup/history/settings controls concealed. Activity controls and student names remained available.
- Standalone Seating Plan Maker: exact legacy notice/link visible; example list still generated 22/22 seats.
- Standalone Random Group Maker: exact legacy notice/link visible; example list still generated 22 students across four groups.
- Standalone Everybody Thinks: exact legacy notice/link visible; pre-existing standalone list, question count and participation state remained available, demonstrating separation from the integrated demo. This check was read-only to preserve that existing data.

A host-binding defect introduced during development was found in browser testing, fixed, and covered by the generated-bootstrap/stale-write regression test. Seating and grouping browser checks were rerun afterward.

## Limits and assessment needs

- Browser checks are representative smoke tests, not an exhaustive cross-browser, mobile, printing, fullscreen or accessibility certification. Custom-room geometry, all lock/role combinations, undo edge cases, audio and every legacy capability were not manually exercised. Existing implementation reuse/source comparison substantially reduces, but does not eliminate, regression risk.
- Mandatory solving is capped at 100 present students and 180,000 nodes. Preferences/history/differentiation are best effort, not optimality guarantees. An exhausted search is explicitly not labelled proof of infeasibility.
- No account security or cloud backup: teacher-only means concealed from projection. Export before clearing browser data. A full v2 file contains sensitive planning data. v1 intentionally drops extended information.
- Histories have bounded retention, attendance is current state, and active timers/rounds/transient locks are not guaranteed to resume when switching modules. Standalone seating workspace/backup files use their existing importers rather than the new central class importer.
- Before production approval, assess a realistic class, custom room layout and projected display on the actual classroom device. Production main remains untouched.
