# SciSims 3000 — Solar System Model Showdown

Final technical delivery: version 1.3.0, 16 October 2026.

Deliverable: `Solar System Model Showdown.html`. Open directly in a modern browser; no installation, server or network connection is needed. The teacher guide and model limitations are inside the file.

## Original acceptance tests

| # | Requirement | Result and evidence |
|---|---|---|
| 1 | Retrograde emerges from relative positions | PASS. Computed Earth-to-Mars longitude has both forward and backward intervals; no decorative reversal is used. |
| 2 | Mars never physically reverses in heliocentric view | PASS. Signed orbital progression stayed forward across 1,500 samples in both circular and elliptical calculations. |
| 3 | Venus phases follow viewing and illumination geometry | PASS. Independent geometric checks give new, quarter and full phases at the corresponding Sun–Venus–Earth arrangements. The visible surface is illuminated using the resulting phase angle. |
| 4 | Jovian moons move around Jupiter | PASS. Four deterministic Jupiter-centred orbits generate the projected telescope positions and repeat at their own periods. The optional explanatory view shows their orbits. |
| 5 | Switching views preserves time | PASS. Simulation day 73.25 was retained through overview, Earth and Sun frames and tab changes. |
| 6 | Models labelled correctly | PASS, source/UI inspection. All four named models have descriptions distinguishing their assumptions. Changing frame translates the representation without changing the model dynamics. |
| 7 | Simplifications identified | PASS, source/UI inspection. Educational epicycles, fixed coplanar ellipses, enlarged bodies and Moon separation, simplified daily motion, circular Venus comparison, and projected moon motions are disclosed. |
| 8 | Historical conclusions not overstated | PASS, editorial inspection. The file distinguishes simple geocentric circles from more capable historical systems, avoids proof-by-one-observation language, explains the Tychonic exception for Venus, and qualifies the significance of Jupiter’s moons. This is an implementation review, not independent expert certification. |
| 9 | Students can complete investigations without teacher-operated controls | FUNCTIONAL PASS. A browser workflow completed prediction → run test → advance time → return directly to the selected evidence result → classify → explain → save/reload → CSV export. Actual Year 7 independent usability has not been observed. |
| 10 | Entire simulation runs offline | PASS. Loaded and operated with networking disabled and HTTP(S) requests blocked. No network requests or JavaScript errors occurred. Optional source links alone require internet. |

## Additional verification

43 checks passed in local desktop Chrome, using an isolated test browser so existing user records were not altered. These included all 16 model/activity combinations, separate evidence records for all 24 observation/model combinations, variable speed along modern ellipses, daily slider backward scrubbing, hour-sized daily steps, moon recording, committed challenge feedback, teacher answer hiding, keyboard stepping, large-diagram opening and Escape dismissal, CSV downloading, persistence and restart.

Desktop layout was visually inspected. At a 390-pixel viewport, the page remained 390 pixels wide; diagrams retained 720-pixel drawing width inside local scroll areas, preserving 15-pixel diagram text instead of shrinking it to approximately 7 pixels. Physical touch-device behaviour and other browser engines were not tested.

## Fixes made during final acceptance

- Daily playback defaults to 0.1 simulated days per second and daily steps advance 1.2 hours; daily evidence tests use that speed too.
- Moon playback defaults to 0.5 days per second when chosen, and the orbital explanation is optional rather than revealed before the investigation.
- A “Record findings” button returns directly to the active evidence result field.
- The guide and release notes describe the final behaviour.

## Declared scope and limits

- This is a qualitative educational investigation, not a dated numerical ephemeris. The original brief did not require a measured observational dataset. Sourced observation summaries are included offline and are clearly separate from model output; exact numerical fitting against historical measurements is not claimed.
- The moon activity reconstructs a common observation for comparison with students’ written predictions. It does not implement four separate historical satellite theories; the interface explicitly states this. The brief requires a deterministic Jupiter-moon activity, which is present.
- Modern dynamics uses analytic Kepler ellipses rather than mutual gravitational integration. Venus uses circular comparison geometry even in the modern model, as disclosed. These are intentional educational simplifications.
- Exact matching to an existing SciSims 3000 design remains unverified because no reference design was supplied. The delivered dark science-lab style is consistent throughout.
- Child usability testing, independent science-teacher review, screen-reader certification and cross-browser certification are not claimed.

The implementation and technical acceptance review are complete. No further development cycle is proposed by this report.
