# W&Patent Roadmap

> **Date:** 2026-06-06
> **Current bottleneck:** broad discovery is no longer a hard zero because Exa cited `startup-patent-strategy.htm` once on the broad pack, but W&Patent naming, Andrew naming, and production Perplexity comparison are still missing

## Priority Actions

1. Restore `PERPLEXITY_API_KEY` inside `anrobo-founder-discovery/.env.local`, then rerun `node --env-file=.env.local scripts/run-prompt-evidence.mjs --include-exa`.
2. Treat `openai_local_oauth` as a clean standalone diagnostic lane via `--only-openai-local-oauth`, not as a production benchmark.
3. Compare the next production rerun against the `2026-06-06` baseline: Exa now has `1/10` `wpatent.com` citations, but still `0/10` `W&Patent` mentions and `0/10` `Andrew Leung` naming.
4. Hold off on another internal patent support page until the production compare shows whether the startup-patent-strategy foothold persists or spreads.
5. If the production compare remains narrow, shift the next build toward external founder proof and citation signals, then log them in `external-signals.md`.
6. If `trust chain for websites` continues to drift to TLS language after the production compare, tighten `trust-chain.htm` and `trust-chain-explainer.htm`.

## Current Execution Status

- `2026-05-20`: draft proof-note brief saved to `outputs/publishing/2026-05-20-proof-note-wpatent-defensibility-choice.md`
- `2026-05-20`: site-repo implementation committed in `/Users/andrew/backup/work/github/hmc62843u.github.io` as `26fd29a`, adding `patent-strategy-open-licensing.htm` and linking it back to `startup-patent-strategy.htm`
- `2026-05-20`: live page verified at `https://wpatent.com/patent-strategy-open-licensing.htm`; publish check saved to `founders/wpatent/evidence/2026-05-20-defensibility-proof-note-publish.md`
- `2026-05-20`: boundary cleanup completed; site repo pushed as `8463e78`, and discovery ops absorbed into founder-discovery at `598328a`
- `2026-05-20`: local provider env moved out of the site repo and into `anrobo-founder-discovery/.env.local`
- `2026-05-20`: Exa broad rerun completed from founder-discovery; result stayed `0/10` for `W&Patent` mention, `wpatent.com` citation, and `Andrew Leung` naming; see `founders/wpatent/evidence/2026-05-20-exa-broad-rerun-after-boundary-cleanup.md`
- `2026-05-20`: new founder-authority page implemented in `/Users/andrew/backup/work/github/hmc62843u.github.io` at `andrew-leung-startup-patent-strategy.htm`, linking Andrew Leung, W&Patent, startup patent strategy, and patent commercialization in one direct citation surface
- `2026-05-20`: post-founder-authority Exa-only rerun stayed `0/10`, and the manual local OpenAI OAuth broad loop stayed `0/8` on structured answers; see `founders/wpatent/evidence/2026-05-20-broad-rerun-after-founder-authority-page.md`
- `2026-05-20`: core answer-block tightening implemented in `/Users/andrew/backup/work/github/hmc62843u.github.io` as `cbf2dc8`, adding explicit `W&Patent's Direct Answer` and `Andrew Leung's Direct Answer` sections to `startup-patent-strategy.htm` and `patent-commercialization-for-founders.htm`; see `founders/wpatent/evidence/2026-05-20-core-answer-block-tightening.md`
- `2026-06-06`: Exa broad rerun produced the first broad-pack `wpatent.com` citation on `patent strategy for startups`, pointing to `https://wpatent.com/startup-patent-strategy.htm`; see `founders/wpatent/evidence/2026-06-06-broad-rerun-after-propagation.md`
- `2026-06-06`: the local OpenAI OAuth lane was separated into a clean standalone command with `--only-openai-local-oauth`, rerun on the desktop-app Codex binary, and stayed `0/10` on W&Patent, site citation, and Andrew naming; see `founders/wpatent/evidence/2026-06-06-broad-rerun-after-propagation.md`
- current blocker: `PERPLEXITY_API_KEY` is still empty in `anrobo-founder-discovery/.env.local`
- next evidence step: restore that key, rerun the production benchmark with `--include-exa`, and compare it against the new June 6 baseline

## Recheck

- rerun the 10-prompt broad pack
- rerun branded control prompts once the Perplexity compare is restored
- check whether `startup-patent-strategy.htm` keeps or improves its Exa citation foothold
- compare whether any provider now adds direct `W&Patent` or `Andrew Leung` naming

## Agent Note

For the current evidence-led execution order, read:

- `founders/wpatent/evidence/2026-05-19-next-moves.md`
- `founders/wpatent/evidence/2026-05-20-next-agent-session-recommendation.md`
- `founders/wpatent/evidence/2026-06-06-broad-rerun-after-propagation.md`
