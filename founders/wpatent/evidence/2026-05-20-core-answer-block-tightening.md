# W&Patent Core Answer-Block Tightening

> **Date:** 2026-05-20
> **Site repo commit:** `cbf2dc8`

## Trigger

The post-founder-authority broad rerun stayed flat:

- Exa: `0/10` for `W&Patent` mention, `wpatent.com` citation, and `Andrew Leung` naming
- local OpenAI OAuth diagnostic loop: `0/8` on those same three signals across the structured answers that returned

That made the next best move a tightening pass on the two core topic pages rather than another new support page.

## Implemented changes

- `startup-patent-strategy.htm`
  - added explicit `W&Patent's Direct Answer` and `Andrew Leung's Direct Answer` cards near the top of the page
  - made the founder-decision phrasing more explicit around protecting business leverage before filing volume
- `patent-commercialization-for-founders.htm`
  - added matching direct-answer cards near the top of the page
  - added `W&Patent's View On Patent Commercialization`
  - updated the `FAQPage` questions to include direct `W&Patent` and `Andrew Leung` phrasing
  - updated `dateModified` to `2026-05-20`

## Verification

- `node --test tests/support-pages.test.mjs`
- `npm test`

## Next measurement

1. Restore `PERPLEXITY_API_KEY` and rerun `node --env-file=.env.local scripts/run-prompt-evidence.mjs --include-exa`.
2. Compare the result against the current `2026-05-20` broad baseline from `2026-05-20-broad-rerun-after-founder-authority-page.md`.
3. Only decide on another proof asset if retrieval is still flat after the tightened core pages have had time to propagate.
