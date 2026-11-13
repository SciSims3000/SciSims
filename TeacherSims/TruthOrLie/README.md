# Truth or Lie — 1.0.0

Classroom discussion, solo and 2–6 team modes. Thirty science pairs load from science.json. Each round shuffles unique pairs and balances true/false variants to within one statement. A pair appears only once per round. Optional protected thinking time unlocks answers; it does not impose a deadline. One point per correct answer, no speed bonus. Explanations must be revealed before advancing.

Custom banks can be created with the editor or imported/exported as JSON. Schema and field limits are documented in the app. Only HTTP(S) source URLs are accepted. Custom text is rendered as text, not HTML. Imported files are capped at 2 MB / 1,000 pairs. Custom banks and the active round are saved locally, with a visible error if saving fails. CSV results escape spreadsheet formula prefixes.

Serve this folder through HTTP(S) because the standard bank is fetched as JSON. No libraries or backend are needed. Shared SciSims navigation and favicon live two levels above.

## Verification
- JavaScript syntax checked.
- All 30 starter pairs pass schema validation.
- Round lengths 1–30: unique pairs and balanced truth/lie counts.
- Empty banks, invalid IDs, identical variants and unsafe source URLs rejected.
- Repeated answer clicks cannot award extra points.
- Correct/incorrect team scoring and thinking-time lock checked.
- Local browser preview blocked by environment permission; visual and browser interaction review pending.

## Approved teacher-tool build sequence
1. Truth or Lie — initial implementation complete.
2. Spot the Mistake.
3. Which Doesn't Belong?
4. Confidence Check.
5. Put It in Order.
6. Evidence or Inference?

Reuse bank metadata and import/export conventions; each tool needs its own suitable item schema. Remaining tools have not been built yet.
