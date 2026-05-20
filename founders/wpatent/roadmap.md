# W&Patent Roadmap

> **Date:** 2026-05-20
> **Current bottleneck:** broad discovery is still zero after the founder-authority page on both Exa and the local OpenAI diagnostic loop; the two core pages are now tightened, but the production compare is still Perplexity-blocked

## Priority Actions

1. Restore `PERPLEXITY_API_KEY` inside `anrobo-founder-discovery/.env.local`, then rerun `node --env-file=.env.local scripts/run-prompt-evidence.mjs --include-exa`.
2. Treat the new local OpenAI OAuth lane as a secondary diagnostic compare, not a production benchmark, until the mixed dev batch is separated from the slower legacy providers.
3. Compare the rerun against the current `2026-05-20` broad baseline to see whether the tightened core answer blocks move any `W&Patent`, `wpatent.com`, or `Andrew Leung` retrieval.
4. Keep building proof assets only after the tightened core pages have had a measurement pass, so new pages can be judged against a working retrieval baseline.
5. Add more external founder proof and citation signals once the core named-entity surfaces are clearer, and log them in `external-signals.md`.

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
- current blocker: `PERPLEXITY_API_KEY` is still empty in `anrobo-founder-discovery/.env.local`
- next evidence step: restore that key, rerun the production benchmark with `--include-exa`, and compare it against the current Exa plus local OAuth broad baseline after the tightened core pages have had time to propagate

## Recheck

- rerun the 10-prompt broad pack
- rerun branded control prompts once the Perplexity compare is restored
- compare whether the tightened core answer blocks change any `W&Patent`, `wpatent.com`, or `Andrew Leung` retrieval

## Agent Note

For the current evidence-led execution order, read:

- `founders/wpatent/evidence/2026-05-19-next-moves.md`
