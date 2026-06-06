# W&Patent Scorecard

> **Version:** 2026-06-06
> **Role:** Primary founder-discovery working example

## Summary Dashboard

| Category | Weight | Working Score | Evidence Base | Read |
| --- | --- | --- | --- | --- |
| Identity Surface Score | 20 | 15/20 | site pages, schema, founder attribution | Strong |
| Broad Discovery Score | 20 | 2/20 | `2026-06-06` Exa-only rerun plus standalone local OpenAI OAuth diagnostic | First Exa citation foothold exists, but generic discovery is still weak |
| Branded Grounding Score | 20 | 5/20 | `2026-05-19` branded control evidence | Earlier weak framing exists, but the production rerun is still Perplexity-blocked |
| Intent Fit Score | 20 | 15/20 | site structure and topic clustering | Stronger than retrieval |
| Improvement Readiness Score | 20 | 18/20 | page, proof, cleaner repo boundary, roadmap clarity, standalone local OAuth diagnostic lane | High, but production comparison is still partially blocked |

**Working total:** `55/100`

## Live Prompt Snapshot

| Tier | Prompts | Mentioned | `wpatent.com` Cited | `Andrew Leung` Named |
| --- | --- | --- | --- | --- |
| Broad discovery fixed pack (`exa_answer`, `2026-06-06`) | 10 | 0/10 | 1/10 | 0/10 |
| Broad diagnostic (`openai_local_oauth`, `2026-06-06`) | 10 | 0/10 | 0/10 | 0/10 |
| Branded control rerun | pending `PERPLEXITY_API_KEY` restore | - | - | - |

## Current Read

The June 6 Exa rerun is the first saved broad-pack evidence that a live W&Patent page was cited without a branded prompt.
The win is narrow: `startup-patent-strategy.htm` was cited once for `patent strategy for startups`, but no run produced direct `W&Patent` naming or `Andrew Leung` naming.

The standalone local OpenAI OAuth diagnostic lane now works cleanly through the desktop-app Codex binary, but its ten-answer batch still stayed generic and did not cite W&Patent.
`trust chain for websites` also continued to resolve to TLS / certificate-chain language.

This score refresh should therefore be treated as a meaningful but limited improvement in broad discovery, not a full production recovery.
The next decision should wait for the restored Perplexity benchmark rather than defaulting immediately to another internal content asset.
