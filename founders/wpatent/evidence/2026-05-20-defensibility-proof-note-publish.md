# W&Patent Defensibility Proof Note Publish Check

> **Date:** 2026-05-20
> **Founder:** `wpatent`
> **Asset type:** proof note
> **Site repo commit:** `26fd29a`

## What Shipped

The W&Patent proof note on patents versus open or non-patent defensibility strategies is now implemented and published at:

- `https://wpatent.com/patent-strategy-open-licensing.htm`

The page is linked back into:

- `startup-patent-strategy.htm`
- `sitemap.xml`

## Live Check

Direct live verification succeeded on `2026-05-20`:

- HTTP status: `200`
- server: `GitHub Pages`
- live page contains the expected canonical URL
- live page contains the expected headline and opening paragraph

## Local Verification

In `/Users/andrew/backup/work/github/hmc62843u.github.io`:

- `npm test` passed with `83/83`
- the new page contract is covered in:
  - `tests/discovery.test.mjs`
  - `tests/shared-shell.test.mjs`
  - `tests/support-pages.test.mjs`

## Prompt Rerun Status

The post-publish prompt rerun was attempted from the site repo, but this local environment does not currently have the needed provider keys configured.

Observed blocker state:

- `.env.local` not present
- `PERPLEXITY_API_KEY` missing
- `EXA_API_KEY` missing

Because the runner appends missing-key rows into the raw CSV, those rows were reverted instead of being kept as meaningful evidence.

## Next Evidence Step

Rerun the fixed site prompt set from an environment with working provider keys:

- `node --env-file=.env.local scripts/run-prompt-evidence.mjs --include-exa`

Then refresh:

- `founders/wpatent/scorecard.md`
- `founders/wpatent/roadmap.md`
- any comparison or discovery note needed for the post-publish read
