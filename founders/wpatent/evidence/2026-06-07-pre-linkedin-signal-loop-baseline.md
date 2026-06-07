# W&Patent Pre-LinkedIn Signal Loop Baseline

> **Date:** 2026-06-07
> **Commands:**
> `node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --only-exa`
> `node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --only-openai-local-oauth`

## Context

This note captures the first measurement checkpoint after the June 7 founder-advisory reposition and before the first Andrew LinkedIn reinforcement in the AI-discovery signal loop.

## Read

### Exa broad pack

- result: W&Patent mentioned: 0 of 20 Exa answers
- result: wpatent.com cited: 0 of 20 Exa answers
- result: Andrew Leung named: 0 of 20 Exa answers

### Local OpenAI OAuth standalone diagnostic

- result: usage limit reached — all 8 OpenAI OAuth prompts returned `openai_local_oauth run failed: ERROR: You've hit your usage limit`
- result: no fresh W&Patent mention, citation, or Andrew Leung naming data from OAuth

## Interpretation

The Exa broad pack shows zero W&Patent retrieval across all 20 prompts. This is consistent with the June 7 reposition being too recent for any propagation. The OpenAI OAuth lane is unavailable due to usage limits and should be retried after the usage window resets.

Compare directly against:

- `founders/wpatent/evidence/2026-06-06-broad-rerun-after-propagation.md`
- `founders/wpatent/evidence/2026-06-07-founder-advisory-reposition-publish.md`

The June 7 site reposition has not changed any baseline retrieval yet — as expected before LinkedIn reinforcement or follow-on articles.

## Next move

1. Publish the first Andrew LinkedIn reinforcement using the approved copy artifact.
2. Keep `startup-patent-strategy.htm` as the canonical authority anchor.
3. Ship the first follow-on W&Patent article on provisional vs NDA.
4. Rerun measurement only after the first public trail has had time to propagate.
