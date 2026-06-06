# W&Patent Broad Rerun After Propagation

> **Date:** 2026-06-06
> **Commands:**
> `node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --only-exa`
> `node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --only-openai-local-oauth`

## Context

The May 20 tightening pass had already been live for more than two weeks, so the older "wait for propagation" instruction was stale.
This rerun was the next clean checkpoint after that delay.

The local OpenAI OAuth lane was also cleaned up in this same session:

- `openai_local_oauth` can now run by itself without `opencode_dev` or `kilocode_dev`
- the helper now prefers the newer desktop-app Codex binary at `/Applications/Codex.app/Contents/Resources/codex`
- the failed Volta-based diagnostic rows from the broken local Codex path were removed before the clean rerun

## Read

### Exa broad pack

- result: `0/10` `W&Patent` mentions
- result: `1/10` `wpatent.com` citations
- result: `0/10` `Andrew Leung` naming

The first broad-pack movement came on:

- prompt: `patent strategy for startups`
- cited page: `https://wpatent.com/startup-patent-strategy.htm`

This is the first saved broad-pack evidence that Exa cited a live W&Patent page without a branded prompt.

### Local OpenAI OAuth standalone diagnostic

- result: `0/10` `W&Patent` mentions
- result: `0/10` `wpatent.com` citations
- result: `0/10` `Andrew Leung` naming

The standalone lane now works reliably as a diagnostic path, but the answers stayed generic.
`trust chain for websites` still resolved to TLS / certificate-chain language rather than the W&Patent concept.

## Interpretation

This is no longer a total broad-discovery zero.
The tightened startup patent strategy page appears to have created the first real foothold on Exa.

But the gain is still narrow:

- no direct `W&Patent` naming
- no `Andrew Leung` naming
- no movement on commercialization, founder authority, or Trust Chain

That means the right next move is still measurement-first, not another internal support page.

## Next move

1. Restore `PERPLEXITY_API_KEY` in `.env.local`.
2. Run `node --env-file=.env.local scripts/run-prompt-evidence.mjs --include-exa` as the production benchmark refresh.
3. If the production compare confirms only the startup-patent-strategy foothold, shift next to external founder proof before another internal patent support note.
4. If `trust chain for websites` still drifts to TLS language after the production compare, then tighten `trust-chain.htm` and `trust-chain-explainer.htm`.
