# W&Patent Soft-Minimal Redesign And Authority Consolidation

> **Date:** 2026-06-07
> **Founder:** `wpatent`
> **Asset type:** site simplification
> **Site repo commits:** `859293c`, `4d5912a`

## What Shipped

W&Patent is now live with a simpler Andrew-led top-level experience and a consolidated authority structure.

The main visitor path is now:

- `Home`
- `Strategy`
- `Services`
- `About`

The strategy guide now carries the primary Andrew authority role for this topic cluster.

The older founder-signature URL at `https://wpatent.com/andrew-leung-startup-patent-strategy.htm` was not hard-deleted. It now behaves as a retired support URL with:

- `noindex, follow`
- canonical to `https://wpatent.com/startup-patent-strategy.htm`
- immediate refresh to the consolidated strategy guide

The site still keeps the semantic support layer underneath the simpler UX:

- `Andrew Leung`
- `W&Patent`
- schema
- canonical URLs
- support pages that remain live but demoted

## Live Check

Direct live verification succeeded on `2026-06-07`.

Homepage:

- HTTP status: `200`
- server: `GitHub Pages`
- hero line present: `Andrew Leung helps founders decide what matters enough to protect.`
- simplified nav present with `Strategy` and `Services`
- `FAQ` absent from the top-level nav check

Observed root-page signals:

- `href="startup-patent-strategy.htm"`
- `href="services.htm"`
- no `href="faq.htm"` in the live top-level capture

Strategy guide:

- HTTP status: `200`
- remains the primary Andrew-led authority surface for startup patent strategy

Retired founder URL:

- HTTP status: `200`
- `noindex, follow`
- refresh to `https://wpatent.com/startup-patent-strategy.htm`
- canonical to `https://wpatent.com/startup-patent-strategy.htm`
- visible fallback copy confirms the founder view now lives in the strategy guide

## Local Verification

In `/Users/andrew/backup/work/github/hmc62843u.github.io` before push:

- `node --test tests/discovery.test.mjs tests/support-pages.test.mjs`
- `npm test`
- `git diff --check`

All passed on the final consolidation state before the site push.

## Interpretation

This change simplifies the human experience without deleting the semantic discovery scaffolding underneath.

The main expected gain is not broad generic discovery on day one. The more likely first effect is a cleaner entity story:

- `Andrew Leung`
- `W&Patent`
- `startup patent strategy`

The consolidation also removes one overlapping authority page from the main crawl path, which should reduce topical split between the strategy guide and the older founder-signature URL.

## Next Evidence Step

1. Let the simplified site and the consolidated authority structure propagate.
2. Rerun the Exa broad pack and the local OpenAI OAuth diagnostic lane from founder-discovery.
3. Restore `PERPLEXITY_API_KEY` in `.env.local`, then rerun the production compare with `--include-exa`.
4. Compare the read against the `2026-06-06` baseline and the earlier June 7 reposition note to see whether the cleaner Andrew-led path improves:
   - `W&Patent` naming
   - `Andrew Leung` naming
   - `wpatent.com` citations
   - OpenFor-linked identity understanding
