# W&Patent Founder Advisory Reposition Publish Check

> **Date:** 2026-06-07
> **Founder:** `wpatent`
> **Asset type:** site reposition
> **Site repo commit:** `1df4e5b`

## What Shipped

W&Patent is now live with the June 7 founder-advisory reposition.

The site no longer leads with the older marketplace-first story.
The live homepage now centers:

- Andrew Leung as the named advisory voice
- founder patent strategy and commercialization
- OpenFor member context
- `services.htm` as the canonical services destination

Key live surfaces in the pushed site state include:

- `https://wpatent.com/`
- `https://wpatent.com/about.htm`
- `https://wpatent.com/services.htm`
- `https://wpatent.com/faq.htm`

## Live Check

Direct live verification succeeded on `2026-06-07`:

- HTTP status: `200`
- server: `GitHub Pages`
- live homepage contains the expected Andrew-led hero line
- live homepage contains explicit `OpenFor member` language
- live homepage contains the new advisory-first navigation, including `Services`

Observed live homepage signals included:

- `Andrew Leung helps founders articulate, protect, and commercialize what actually matters.`
- `Registered patent agent. OpenFor member.`
- `Andrew Leung, OpenFor member`

## Local Verification

In `/Users/andrew/backup/work/github/hmc62843u.github.io` before push:

- `npm test` passed with `62/62`
- `git diff --check` was clean
- the advisory-first reposition was reviewed and approved before commit

## Interpretation

This is a meaningful identity and positioning shift, not a small content update.

The main expected gain is stronger:

- branded grounding
- founder-to-site linkage
- Andrew Leung naming
- intent fit around founder patent strategy and commercialization

This change is not expected to solve broad non-branded discovery by itself on day one.
The next useful read is whether answer engines start to repeat the clearer Andrew -> W&Patent -> OpenFor -> founder patent strategy story after propagation.

## Next Evidence Step

1. Rerun the Exa broad pack from founder-discovery after initial propagation.
2. Restore `PERPLEXITY_API_KEY` in `.env.local`, then rerun the production compare with `--include-exa`.
3. Compare the post-reposition read against the `2026-06-06` baseline:
   - Exa: `1/10` `wpatent.com` citations
   - Exa: `0/10` `W&Patent` mentions
   - Exa: `0/10` `Andrew Leung` naming
4. If the branded/entity story is still flat after that rerun, shift the next build toward external founder proof rather than another internal support page.
