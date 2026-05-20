# W&Patent Roadmap

> **Date:** 2026-05-20
> **Current bottleneck:** broad discovery is still zero on the fixed Exa pack, and the cross-provider compare is key-blocked

## Priority Actions

1. Strengthen direct `W&Patent's view` and `Andrew Leung's view` answer blocks on the most citable topic pages.
2. Add one explicit founder-authority surface that ties Andrew Leung, W&Patent, startup patent strategy, and commercialization together in plain language.
3. Restore `PERPLEXITY_API_KEY` and `OPENAI_API_KEY` inside `anrobo-founder-discovery/.env.local`, then rerun `node --env-file=.env.local scripts/run-prompt-evidence.mjs --include-exa`.
4. Keep building proof assets only after broad discovery starts to move, so new pages can be judged against a working retrieval baseline.
5. Add more external founder proof and citation signals once the core named-entity surfaces are clearer, and log them in `external-signals.md`.

## Current Execution Status

- `2026-05-20`: draft proof-note brief saved to `outputs/publishing/2026-05-20-proof-note-wpatent-defensibility-choice.md`
- `2026-05-20`: site-repo implementation committed in `/Users/andrew/backup/work/github/hmc62843u.github.io` as `26fd29a`, adding `patent-strategy-open-licensing.htm` and linking it back to `startup-patent-strategy.htm`
- `2026-05-20`: live page verified at `https://wpatent.com/patent-strategy-open-licensing.htm`; publish check saved to `founders/wpatent/evidence/2026-05-20-defensibility-proof-note-publish.md`
- `2026-05-20`: boundary cleanup completed; site repo pushed as `8463e78`, and discovery ops absorbed into founder-discovery at `598328a`
- `2026-05-20`: local provider env moved out of the site repo and into `anrobo-founder-discovery/.env.local`
- `2026-05-20`: Exa broad rerun completed from founder-discovery; result stayed `0/10` for `W&Patent` mention, `wpatent.com` citation, and `Andrew Leung` naming; see `founders/wpatent/evidence/2026-05-20-exa-broad-rerun-after-boundary-cleanup.md`
- `2026-05-20`: new founder-authority page implemented in `/Users/andrew/backup/work/github/hmc62843u.github.io` at `andrew-leung-startup-patent-strategy.htm`, linking Andrew Leung, W&Patent, startup patent strategy, and patent commercialization in one direct citation surface
- current blocker: `PERPLEXITY_API_KEY` and `OPENAI_API_KEY` are empty in `anrobo-founder-discovery/.env.local`
- next evidence step: restore those keys, rerun the fixed prompt set with `--include-exa`, and compare whether the new founder-authority page moves broad or branded retrieval at all

## Recheck

- rerun the 10-prompt broad pack
- rerun branded control prompts once the keyed compare is restored
- compare whether the founder-authority page changes any `W&Patent`, `wpatent.com`, or `Andrew Leung` retrieval

## Agent Note

For the current evidence-led execution order, read:

- `founders/wpatent/evidence/2026-05-19-next-moves.md`
