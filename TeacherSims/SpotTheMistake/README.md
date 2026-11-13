# Spot the Mistake — 1.0.0

Identify an incorrect scientific statement, write or discuss a correction, then reveal the correct statement and explanation. Teacher/self-assessment awards 2 for a correction with explanation, 1 for partial understanding or 0 for not yet. No automatic judgement of free text. Discussion mode has no scores.

Uses the live 330-pair science bank at ../TruthOrLie/science.json (30 per topic), without duplicating it. Compatible custom JSON schema: scisims-truth-or-lie-1. The lie field is the prompt and truth is the correction. The editor labels make this relationship explicit. Imported text is rendered safely, with HTTP(S)-only source links.

Includes topic filters, unique shuffled rounds, 2–6 teams, protected thinking time, fullscreen, local saved state, custom JSON import/export and CSV response export. A response or spoken-response confirmation is required before reveal. A rating is required to advance. Submitted answers and ratings cannot be changed to farm points. Browser storage key is separate from Truth or Lie.

Serve over HTTP(S). Shared navigation and favicon are two levels above.

Verification: syntax and DOM identifiers; blank response guard; duplicate-submit/rating protection; spoken answers; thinking-time lock; complete 30-prompt team round and saved completion; validation of 330 entries. Browser visual/interactivity review remains pending.
