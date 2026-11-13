# Truth or Lie — 1.1.0

Classroom discussion, solo and 2–6 team modes. 330 science pairs (30 in each of 11 topics) load from science.json. Each round shuffles unique pairs and balances true/false variants to within one statement. A pair appears only once per round. Optional protected thinking time unlocks answers; it does not impose a deadline. One point per correct answer, no speed bonus. Explanations must be revealed before advancing.

Custom banks can be created with the editor or imported/exported as JSON. Schema and field limits are documented in the app. Only HTTP(S) source URLs are accepted. Custom text is rendered as text, not HTML. Imported files are capped at 2 MB / 1,000 pairs. Custom banks and the active round are saved locally, with a visible error if saving fails. CSV results escape spreadsheet formula prefixes.

Serve this folder through HTTP(S) because the standard bank is fetched as JSON. No libraries or backend are needed. Shared SciSims navigation and favicon live two levels above.

## Verification
- JavaScript syntax checked.
- All 330 starter pairs pass schema validation.
- Round lengths 1–30: unique pairs and balanced truth/lie counts.
- Empty banks, invalid IDs, identical variants and unsafe source URLs rejected.
- Repeated answer clicks cannot award extra points.
- Correct/incorrect team scoring and thinking-time lock checked.
- Local browser preview blocked by environment permission; visual and browser interaction review pending.

## Approved teacher-tool build sequence
1. Truth or Lie — initial implementation complete.
2. Spot the Mistake — initial implementation complete.
3. Which Doesn't Belong?
4. Confidence Check.
5. Put It in Order.
6. Evidence or Inference?

Reuse bank metadata and import/export conventions; each tool needs its own suitable item schema. Tools 3–6 have not been built yet.

## Expanded bank (1.0.1)
Each of the 11 topics now contains 30 pairs (330 pairs / 660 statement variants). Existing starter pairs retain their IDs. Questions include conceptual distinctions, misconceptions, simple calculations and interpretation of graphs. Thirty-question rounds are now directly selectable.

Further reading for teachers:
- Physics: https://openstax.org/books/physics/pages/index
- Chemistry: https://openstax.org/books/chemistry-2e/pages/index
- Biology: https://openstax.org/books/biology-2e/pages/index
- Earth: https://science.nasa.gov/earth/facts/
- Moon phases: https://science.nasa.gov/moon/moon-phases/
- Weathering and erosion: https://www.bgs.ac.uk/discovering-geology/geological-processes/erosion/
These are subject reference resources, not claims of line-by-line validation of every question.

## Timing, sound and Year 7 (1.1.0)
- Protected thinking-time choices now include 30 and 60 seconds. Answers unlock at zero; time expiry is not an incorrect answer.
- Correct answers play a bright synthesised ding; incorrect answers play a buzzer. Sound toggle is available in the header and saved locally.
- Secret Fact or Fart mode: Option/Alt + Shift + F, or five version-badge clicks with less than 1.5 seconds between clicks. Repeat to restore the normal title. Incorrect answers use a synthesised fart; correct answers retain the ding. The toggle changes presentation, not question truth or scoring. Preference persists locally.
- Year 7 bank: 50 pairs mapped to the current SciSims front-page units: 13 Observing the Universe, 13 Forces, 12 Cells and classification, 12 Solutions and mixtures. Separate year7.json; general science bank preserved. Export and custom-copy import supported.
- Verified schema, both timer durations, scoring, all three audio routes using a mock AudioContext, keyboard/five-tap toggles, mute, saved preferences and DOM references. Audio timbre and volume have not been auditioned in a real browser.
