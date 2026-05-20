# W&Patent Scorecard

> **Version:** 2026-05-20
> **Role:** Primary founder-discovery working example

## Summary Dashboard

| Category | Weight | Working Score | Evidence Base | Read |
| --- | --- | --- | --- | --- |
| Identity Surface Score | 20 | 15/20 | site pages, schema, founder attribution | Strong |
| Broad Discovery Score | 20 | 0/20 | `2026-05-20` Exa-only rerun plus local OpenAI OAuth broad diagnostic | Still invisible on generic broad prompts |
| Branded Grounding Score | 20 | 5/20 | `2026-05-19` branded control evidence | Earlier weak framing exists, but the production rerun is still Perplexity-blocked |
| Intent Fit Score | 20 | 15/20 | site structure and topic clustering | Stronger than retrieval |
| Improvement Readiness Score | 20 | 17/20 | page, proof, cleaner repo boundary, roadmap clarity, local OAuth diagnostic lane | High, but production comparison is still partially blocked |

**Working total:** `52/100`

## Live Prompt Snapshot

| Tier | Prompts | Mentioned | `wpatent.com` Cited | `Andrew Leung` Named |
| --- | --- | --- | --- | --- |
| Broad discovery fixed pack (`exa_answer`, `2026-05-20` post-founder-authority) | 10 | 0/10 | 0/10 | 0/10 |
| Broad diagnostic (`openai_local_oauth_manual`, `2026-05-20`) | 8 structured answers | 0/8 | 0/8 | 0/8 |
| Branded control rerun | pending `PERPLEXITY_API_KEY` restore | - | - | - |

## Current Read

The fresh Exa-only rerun after the founder-authority page is still a hard zero across the full fixed broad prompt pack.
The manual local OpenAI OAuth diagnostic loop also stayed generic on the eight prompts that returned structured output.
That means the new founder-authority page did not yet convert into generic discovery, first-party citation, or founder naming on either of the new broad reads.

The operating boundary is cleaner now because prompt evidence lives in `anrobo-founder-discovery`, and the local OpenAI OAuth diagnostic path now exists without requiring `OPENAI_API_KEY`.
But the production comparison loop is still only partially restored because `PERPLEXITY_API_KEY` remains empty in `.env.local`.
This score refresh should therefore be treated as a strong broad-diagnostic read, not a full production cross-provider refresh.
