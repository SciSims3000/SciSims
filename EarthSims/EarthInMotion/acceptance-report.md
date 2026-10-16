# Earth in Motion — acceptance report

Version 2.1.0 · 17 October 2026

**Result: 48/48 regression checks and 12/12 theme checks passed; no JavaScript runtime errors.**

## Scientific acceptance

| Requirement | Verified evidence |
|---|---|
| Eastward rotation | Rendered grid and attached observer advance 15° per model hour. Forward/reverse animation exercised. |
| Correct illumination | Shared world geometry drives shaded Earth and incoming rays. World-frame observer sunlight agrees with sky altitude across 756 states, within 3.3e-16. |
| Observer stays attached | Marker remains unit radius at the selected latitude through rotation, with explicit near/far-side status. |
| Sydney seasonal contrast | Independent solstice anchors: daylight approximately 14.27/9.73 hours; noon altitude 79.44°/32.56°. |
| Opposite hemispheres | June daylight contrast verified. Wording adapts to equinox and zero tilt. |
| Zero tilt | Fixed nonpolar latitude retains constant noon altitude and 12-hour geometric daylight through the year. Exact-pole horizon state is undefined. |
| Solar-position response | Nine dates × three tilts × seven latitudes × four daily times tested. Longitude extremes checked at fixed Greenwich reference. |
| Distance misconception | Approximate 147.1/152.1 million km anchors checked. Tilt identified as dominant; shared distance cannot explain opposite seasons. |
| Polar states | No fabricated sunrise/sunset crossings. Undefined compass direction/horizon states handled. No incident beam at/below the noon horizon. |
| Offline operation | Network blocked during tests; controls, notebook, export and teacher guide work. No external runtime assets. |

## Visual and functional coverage

- **756 states** passed SVG text-overlap and mark/text-bound checks. The numerical sweep includes intermediate dates, equinoxes, solstices, zero/default/maximum tilt, equator/Sydney/poles and midnight/06:00/noon/18:00.
- **320, 390, 768 and 1280 px** layouts have no page overflow or clipped diagram text in sampled states. Diagram type stays at least 12 screen pixels. An additional four-season × three-tilt mobile annotation sweep passed. Representative desktop/phone layouts were visually inspected.
- Day/night keys are outside the globe, eliminating hidden-side label projection. Rays have aligned filled arrowheads and reserved perimeter space; metadata is outside the diagram field. Orbit and space share world geometry; the noon cross-section camera is explicitly different.
- All form controls have native labels. Three keyboard tabs support arrow keys/Home/End; tested ArrowRight, Home and End. Inputs expose meaningful range values. Animation is user-initiated and pauses when the page is hidden or motion preferences change.
- Scheduled pause works at the starting target, forwards/backwards and across midnight in either direction. An empty enabled target blocks playback with validation. Hour steps pause playback first.
- Investigation drafts are independent and survive refresh. Observations survive refresh. Simulation reset preserves work; recording pauses before capturing one immutable state.
- CSV download preserves Unicode, quoted text, multiline notes and numeric negatives, with formula-safe textual fields. A downloaded CSV was also independently parsed.
- Changing settings hides previous feedback. Questions/answers use current tilt, equinox and zero-tilt conditions. Teacher-guide action and full-screen fallback/exit work.
- Storage failure was simulated: open-page work remains available with an export warning.

## Scope and limitations

Approximate educational model, not an ephemeris. Daily rotation holds date fixed. Geometric solar-centre horizon crossings omit refraction, terrain and the solar disc. Seasonal anchors are approximate. Greenwich solar reference is not precise UTC: civil zones, daylight saving and equation of time are omitted. Body sizes and camera geometry are schematic and explained. Zero tilt does not imply equal temperatures. No Moon, temperature or weather model.

Tested in desktop Chrome with responsive viewports and reduced-motion preference. Physical touch hardware, actual screen-reader sessions and native full screen in every host are not certified. Browser storage/full-screen support depends on browser/origin; fallback is supplied. External source links require internet. Written answers are not automatically marked.

The standalone `index.html`, optional test runner and README accompany this report. Tests use a separate temporary browser context with synthetic work and do not clear existing browser-profile data.

## Light/dark mode update

A title-banner switch follows the device appearance initially and remembers an explicit choice independently of student work. Theme colours cover text, panels, controls, tables, sky, ground, diagram annotations and sunlight vectors; scientific light/dark Earth shading remains meaningful in both modes. The initial preference is applied before the first paint.

The separate theme suite verifies the light default, dark toggle and accessible state, unchanged simulation settings, reload persistence, normal-text and sky-label contrast of at least 4.5:1 in both themes, 320 px layout in each, explicit preference taking precedence over system changes, graceful storage failure, light print surfaces and no runtime errors. Representative dark/light screenshots were inspected.
