# W&Patent Roadmap

> **Date:** 2026-06-07
> **Current bottleneck:** the June 7 Andrew-led simplification and the first follow-on page are live, but the first-wave signal loop is still incomplete because the Andrew LinkedIn reinforcement is not yet live; the immediate post-article rerun stayed `0/10` on Exa and `0/10` on the local OAuth lane for W&Patent naming, `wpatent.com` citation, and Andrew naming

## Priority Actions

1. Publish the Andrew LinkedIn reinforcement for `startup-patent-strategy.htm`, or explicitly waive that channel and record the decision.
2. After the external reinforcement decision, rerun the Exa broad pack and the local OAuth diagnostic lane again from founder-discovery and compare them against the immediate June 7 post-article check.
3. Restore `PERPLEXITY_API_KEY` inside `anrobo-founder-discovery/.env.local`, then rerun `node --env-file=.env.local scripts/run-prompt-evidence.mjs --include-exa`.
4. Keep the commercialization-page consolidation deferred until the first-wave signal loop is either completed or explicitly waived.
5. Hold off on promoting the next W&Patent draft until the article-plus-anchor wave has a settled measurement read.
6. If the post-reinforcement compare remains narrow, shift the next build toward external founder proof and citation signals, then log them in `external-signals.md`.

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
- `2026-06-07`: founder-advisory reposition implemented, pushed, and verified live from `/Users/andrew/backup/work/github/hmc62843u.github.io` as `1df4e5b`; the live homepage now centers Andrew Leung, OpenFor member context, and founder patent strategy / commercialization; see `founders/wpatent/evidence/2026-06-07-founder-advisory-reposition-publish.md`
- `2026-06-07`: soft-minimal redesign pushed as `859293c`, reducing the main visitor path to `Home`, `Strategy`, `Services`, and `About` while keeping the support layer live underneath
- `2026-06-07`: founder authority consolidated into `startup-patent-strategy.htm` and the older founder-signature URL retired into a canonicalized redirect page as `4d5912a`; see `founders/wpatent/evidence/2026-06-07-soft-minimal-redesign-and-authority-consolidation.md`
- `2026-06-07`: `provisional-vs-nda.htm` is live as the first promoted follow-on support page; immediate rerun stayed `0/10` on Exa and `0/10` on the local OAuth lane, and the first-wave LinkedIn reinforcement still was not logged as live; see `founders/wpatent/evidence/2026-06-07-post-provisional-vs-nda-immediate-rerun.md`
- current blocker: `PERPLEXITY_API_KEY` is still empty in `anrobo-founder-discovery/.env.local`
- next evidence step: complete or explicitly waive the first-wave LinkedIn reinforcement, rerun the broad pack after that choice has had time to propagate, restore that key, rerun the production benchmark with `--include-exa`, and compare it against the June 6 and immediate June 7 baselines

## Recheck

- rerun the 10-prompt broad pack
- check whether the June 7 simplified Andrew-led path changes branded/entity retrieval
- rerun branded control prompts once the Perplexity compare is restored
- check whether `startup-patent-strategy.htm` keeps or improves its Exa citation foothold
- compare whether any provider now adds direct `W&Patent`, `Andrew Leung`, or OpenFor-linked identity naming

## Agent Note

For the current evidence-led execution order, read:

- `founders/wpatent/evidence/2026-05-19-next-moves.md`
- `founders/wpatent/evidence/2026-05-20-next-agent-session-recommendation.md`
- `founders/wpatent/evidence/2026-06-06-broad-rerun-after-propagation.md`
- `founders/wpatent/evidence/2026-06-07-founder-advisory-reposition-publish.md`
- `founders/wpatent/evidence/2026-06-07-soft-minimal-redesign-and-authority-consolidation.md`
- `founders/wpatent/evidence/2026-06-07-post-provisional-vs-nda-immediate-rerun.md`
