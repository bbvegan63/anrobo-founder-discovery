# W&Patent Exa Broad Rerun After Boundary Cleanup

> **Date:** 2026-05-20
> **Command:** `node --env-file=.env.local scripts/run-prompt-evidence.mjs --include-exa`
> **Effective evidence used:** `exa_answer` rows only

## Environment State

- local provider env now lives in `anrobo-founder-discovery/.env.local`
- `EXA_API_KEY` is present
- `PERPLEXITY_API_KEY` is empty
- `OPENAI_API_KEY` is empty

The first rerun appended both valid Exa rows and invalid Perplexity missing-key rows.
The missing-key rows were removed from the raw log so the evidence stays clean.

## Prompt Pack

The current fixed prompt pack in `founders/wpatent/evidence/site-scorecards/prompts.txt` is a 10-prompt broad discovery set:

- patent strategy for startups
- startup defensibility through patents
- patent commercialization for founders
- founder-led authority building
- AI-readable company website
- trust chain for websites
- how founders build credibility online
- patent advisory for startup founders
- founder identity and company authority
- entity authority for AI search

## Result

- `W&Patent` mentioned: `0/10`
- `wpatent.com` cited: `0/10`
- `Andrew Leung` named: `0/10`

The new `exa_answer` rows were appended to `founders/wpatent/evidence/site-scorecards/2026-05-08-wpatent-prompt-runs.csv`.

## Read

The new defensibility proof note and the cleaner repo boundary did not yet move broad Exa discovery.
Exa still treats the topic space as generic patent and founder-authority advice rather than routing to W&Patent as the first-party source.

This rerun updates the broad discovery read only.
It does not refresh branded grounding or the production comparison layer because the Perplexity and OpenAI keys are still empty.

## Next Move

1. Restore `PERPLEXITY_API_KEY` and `OPENAI_API_KEY` in `anrobo-founder-discovery/.env.local`.
2. Rerun `node --env-file=.env.local scripts/run-prompt-evidence.mjs --include-exa`.
3. If broad discovery remains zero, prioritize a more direct founder-authority surface before publishing another supporting proof note.
