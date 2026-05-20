# W&Patent Broad Rerun After Founder-Authority Page

> **Date:** 2026-05-20
> **Primary commands:**
> `node --env-file=.env.local scripts/run-prompt-evidence.mjs --only-exa`
> manual local OAuth loop via Codex CLI against the same 10-prompt pack

## Environment State

- `EXA_API_KEY` is present
- `PERPLEXITY_API_KEY` is empty
- `OPENAI_API_KEY` is empty
- local OpenAI OAuth diagnostic access is available through the new Codex-backed path

An attempted mixed rerun with `--include-exa --include-dev` was aborted because the legacy `opencode_dev` lane hung on the first prompt.
The partial skip rows from that aborted run were removed from the raw CSV so the evidence log stayed clean.

## Prompt Pack

The fixed broad discovery pack remains:

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

## Results

### Exa broad rerun

- `W&Patent` mentioned: `0/10`
- `wpatent.com` cited: `0/10`
- `Andrew Leung` named: `0/10`

The fresh `exa_answer` rows were appended to `founders/wpatent/evidence/site-scorecards/2026-05-08-wpatent-prompt-runs.csv`.

### OpenAI local OAuth diagnostic loop

- structured answers returned: `8/10`
- `W&Patent` mentioned: `0/8`
- `wpatent.com` cited: `0/8`
- `Andrew Leung` named: `0/8`

The two prompts that failed to emit structured output were:

- patent strategy for startups
- patent advisory for startup founders

No successful local OAuth answer cited a source URL.

## Read

The new founder-authority page still did not move broad retrieval.

Exa remained fully generic across the pack, with no first-party routing, no founder naming, and no W&Patent citations.
The local OpenAI OAuth diagnostic loop behaved similarly on the eight prompts that returned structured output: generic patent, founder-credibility, and entity-authority answers with no W&Patent grounding.

The `trust chain for websites` prompt still collapsed to TLS certificate-chain language in the local OAuth diagnostic read, which means the older ambiguity is still alive outside direct W&Patent context.

This is enough evidence to say the founder-authority page alone was not sufficient to move broad discovery.

## Next Move

1. Tighten direct answer blocks on the two core pages:
   - `startup-patent-strategy.htm`
   - `patent-commercialization-for-founders.htm`
2. Restore `PERPLEXITY_API_KEY` and rerun `node --env-file=.env.local scripts/run-prompt-evidence.mjs --include-exa` for the missing production comparison layer.
3. Keep local OAuth as a secondary diagnostic path, not the primary benchmark, until the mixed dev runner is separated from the slow legacy provider lanes.
