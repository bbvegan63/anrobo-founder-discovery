# W&Patent Next Agent Session Recommendation

> **Date:** 2026-05-20
> **Purpose:** Give the next agent session a clear execution order if Perplexity remains unavailable or is not the immediate focus

## Context

The core-page tightening pass is already complete:

- site repo implementation: `cbf2dc8`
- founder-discovery record: `39cd8d6`

Those changes added clearer `W&Patent's Direct Answer` and `Andrew Leung's Direct Answer` blocks to:

- `startup-patent-strategy.htm`
- `patent-commercialization-for-founders.htm`

The next session should treat those tightened pages as the new baseline.

## Recommended Execution Order

### 1. Let the May 20, 2026 tightening propagate, then rerun the non-Perplexity checks

Do this on **May 21 or May 22, 2026** before building more pages.

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --only-exa
node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --include-exa --include-dev
```

Use that rerun as the next checkpoint for:

- `W&Patent` mention
- `wpatent.com` citation
- `Andrew Leung` naming

Do not create another internal proof page before this checkpoint unless there is new outside evidence that changes priorities.

### 2. Make the local diagnostic lane cleaner

The current local diagnostic batch is still noisier than it should be because `openai_local_oauth` is grouped with slower legacy dev providers.

The next agent should:

- separate `openai_local_oauth` into a cleaner standalone diagnostic path
- keep it clearly labeled as a diagnostic lane, not the production benchmark
- avoid blurring `openai_local_oauth` with `openai_web_search`

The point is to keep a reliable second comparison lane available even without `OPENAI_API_KEY`.

### 3. If retrieval is still flat after propagation, tighten the Trust Chain ambiguity next

If the non-Perplexity rerun is still flat, the next content pass should move to:

- `/Users/andrew/backup/work/github/hmc62843u.github.io/trust-chain.htm`
- `/Users/andrew/backup/work/github/hmc62843u.github.io/trust-chain-explainer.htm`

The job is to reduce the persistent TLS / certificate-chain interpretation drift.

Recommended additions near the top:

- `What is Trust Chain for websites?`
- `This is not the HTTPS/TLS certificate chain`

Treat this as a disambiguation-and-citation-surface pass, not a full rewrite.

### 4. After that, shift to external founder proof

If the Trust Chain tightening still does not unlock movement, do not default to another internal patent support note.

Move next to external founder proof that connects:

- `Andrew Leung`
- `W&Patent`
- startup patent strategy
- patent commercialization

Good candidate surfaces:

- founder bio pages
- external profile pages
- third-party citations
- references from credible outside contexts

## Decision Rule

- if non-Perplexity retrieval improves after propagation, keep measuring before building more
- if non-Perplexity retrieval stays flat, tighten the Trust Chain pages next
- after the Trust Chain pass, prefer external founder proof over another internal support page
