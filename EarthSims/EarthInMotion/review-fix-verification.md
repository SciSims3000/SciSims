# Version 2.2.0 review fixes

Verified against the local preview in the in-app browser:

- All 14 built-in model checks pass.
- North Pole with zero tilt: diagram description and visible status both identify the solar centre on the horizon.
- Noon cross-section has the correct meridian description.
- Prediction tab initially hides diagrams and measurements; Show explanation reveals both.
- Seasons tab suggests a matching notebook investigation without automatically replacing drafts or model settings.
- Recorded observation table includes tilt, solar altitude and noon altitude.
- CSV download parsed successfully with one immutable observation, five separate draft rows and current challenge reasoning. Text entered after recording, Unicode, commas and quotes were retained in the draft row.
- At 390 × 844, the fixed quick controls remain visible, +1 h updates the model and displayed time, and the page has no horizontal overflow.
- No captured browser JavaScript errors; git diff whitespace check passes.

The full Node/Playwright regression suites were not run because Node was unavailable in the shell environment. No deployment was performed.
