# W&Patent Commercialization Page Consolidation Design

> **Date:** 2026-06-07
> **Scope:** Retire the standalone W&Patent commercialization page by consolidating its strongest ideas into the strategy anchor
> **Status:** Approved design

## Decision

Retire `https://wpatent.com/patent-commercialization-for-founders.htm` as a standalone topic page.

Preserve its strongest ideas by consolidating them primarily into:

- `https://wpatent.com/startup-patent-strategy.htm`

Keep only a lighter commercialization mention in:

- `https://wpatent.com/services.htm`

Do not hard-delete the commercialization URL.
Retire it using the same careful helper-URL pattern already used for the older Andrew authority page:

- remove it from the sitemap
- remove or rewrite links that treat it as required reading
- point it canonically at the strategy guide
- keep a lightweight redirect / fallback page rather than a dead removal

## Sequencing Rule

Do not execute this consolidation in the middle of the current draft-promotion signal loop.

Required order:

1. complete the current signal-loop wave built around:
   - `startup-patent-strategy.htm`
   - the first queue-promoted support page
   - the associated post-publish measurement checkpoint
2. only after that measurement read should the commercialization-page consolidation begin

Reason:

- changing page structure in the middle of the current publication cycle would create link churn
- it would blur attribution for the first draft-promotion measurement
- it would make the current support-page promotion sequence harder to interpret

## Why This Exists

W&Patent has already moved toward:

- Andrew-led advisory
- a smaller public surface
- early founder decision-making
- budget and prioritization as the current content focus

In that context, the commercialization page is now more useful as supporting logic than as a separate owned topic.

Keeping it as a standalone page creates three costs:

- a more confusing public structure
- another overlapping topic surface
- continued pressure to treat commercialization as a core W&Patent theme even though the current focus is narrower

This consolidation keeps the useful ideas while reducing topical split.

## Consolidation Goal

The goal is:

- remove commercialization as a standalone primary topic page
- preserve the strongest commercialization ideas
- keep the public site simpler
- strengthen the existing strategy anchor instead of adding another parallel destination

The strategy guide should become the main home for the commercialization logic that still matters to founders.

The services page may retain a light commercialization mention because it helps describe Andrew's advisory range, but it should not act like a second long-form commercialization guide.

## What To Preserve

Preserve these ideas from the current commercialization page:

### 1. Business leverage framing

The strongest idea is that patent work matters commercially when it strengthens business leverage, not just when a filing exists.

### 2. Asset / Buyer / Leverage

This is one of the clearest founder-useful frameworks on the page and should be retained.

### 3. Downstream contexts

Licensing, partnership, diligence, and buyer conversations remain useful examples of how strategy becomes legible in business terms.

### 4. Commercial logic starts early

The page's most useful message is that commercialization is not an afterthought.
Founders should think about business relevance while deciding what to protect.

## What Not To Preserve As-Is

Do not preserve:

- a separate standalone commercialization guide as a primary owned topic
- commercialization as a top-level route W&Patent still expects visitors to choose early
- duplicate direct-answer treatment if it creates another competing entry point

This change should simplify, not re-spread the topic across multiple pages.

## Best Consolidation Targets

### Primary target: `startup-patent-strategy.htm`

This is the best destination for the stronger commercialization ideas because it is already:

- the main public strategy anchor
- the strongest W&Patent founder-authority page for this topic cluster
- the page most capable of absorbing related business-leverage framing without creating another destination

The commercialization material should become a stronger middle/later section of the strategy guide rather than a separate standalone guide.

### Secondary target: `services.htm`

`services.htm` can keep a short mention that Andrew helps founders connect protection decisions to partnership, diligence, licensing, or buyer logic.

That is enough for service framing.
It does not need to become a long commercialization explainer.

## Link Migration Map

The consolidation should not use a vague "point everything to the strategy page" rule.
Each current link context needs an explicit replacement.

| Current location | Current role | New target / treatment |
| --- | --- | --- |
| `index.html` | old commercialization service-card route | remove the standalone commercialization route; keep homepage focused on `startup-patent-strategy.htm` and `services.htm` only |
| `about.htm` | founder-proof card mentioning commercialization framing | keep the commercialization idea in copy if still useful, but route readers to `startup-patent-strategy.htm` rather than a standalone commercialization page |
| `services.htm` | service-range explanation | keep commercialization as a short service concept inside `services.htm`; do not route out to a standalone commercialization guide unless a later explicit decision restores one |
| `why_us.htm` | comparison/support card | rewrite the commercialization card so it points to `startup-patent-strategy.htm` as the stronger strategy anchor |
| `startup-patent-strategy.htm` | internal support link | absorb the strongest commercialization logic into this page directly; remove the dependency on the standalone commercialization URL |
| `andrew-leung-startup-patent-strategy.htm` | retired helper URL | no new commercialization destination needed; if any fallback copy still mentions the old page, point to `startup-patent-strategy.htm` |
| `patent-strategy-open-licensing.htm` | related support note | rewrite the commercialization reference so the related reading path points to `startup-patent-strategy.htm`, not the retired commercialization page |

The general rule is:

- service-context links stay inside `services.htm` or route to the strategy anchor
- strategy-context links route to `startup-patent-strategy.htm`
- no page should keep presenting the commercialization URL as required reading once this consolidation is complete

## Retirement Shape

Retire `patent-commercialization-for-founders.htm` using a helper-URL pattern:

- page title can remain recognizable for continuity
- add canonical to `startup-patent-strategy.htm`
- add refresh to `startup-patent-strategy.htm`
- keep a short fallback explanation telling visitors the commercialization logic now lives in the strategy guide
- remove `FAQPage` or any heavyweight topic-owning schema from the retired page

This is safer than abrupt deletion because it:

- preserves continuity for existing links
- reduces the chance of losing any residual topic value
- consolidates authority toward the strategy guide

## Required Cleanup

### Site repo

Update at minimum:

- `startup-patent-strategy.htm`
- `services.htm` if needed
- `why_us.htm`
- `patent-strategy-open-licensing.htm`
- `patent-commercialization-for-founders.htm`
- `sitemap.xml`
- `tests/support-pages.test.mjs`
- `tests/shared-shell.test.mjs`
- `tests/discovery.test.mjs`

The cleanup should:

- remove or rewrite links that treat the commercialization page as a main destination
- preserve any commercialization ideas that are still useful inside the strategy page
- make the retired URL behave consistently with other retired helper URLs

### Founder-discovery

Update at minimum:

- `founders/wpatent/proof-network.md`
- `founders/wpatent/roadmap.md`
- `founders/wpatent/profile.md`
- `founders/wpatent/scorecard.md` if the topic interpretation changes materially
- `founders/wpatent/prompts.json` if commercialization is no longer a tracked owned topic

### Measurement logic

Remove `patent commercialization for founders` from the core W&Patent owned-topic prompt pack when this consolidation executes.

Reason:

- once the standalone page is retired, W&Patent is no longer claiming commercialization as a primary owned topic
- keeping that prompt in the core pack would add recurring noise to future measurement runs
- weaker retrieval on a deliberately de-prioritized topic would not be a useful failure signal

If commercialization is still worth tracking at all, it should move to a secondary comparison/control set rather than remain in the primary owned-topic prompts.

## Expected Final Test State

The retired commercialization URL should still be tested, but as a helper URL rather than a full topic-owning page.

Expected final test posture:

- `tests/shared-shell.test.mjs`
  - keep the retired page in the shared-shell coverage only if the helper URL still serves the normal shell assets
- `tests/discovery.test.mjs`
  - remove the commercialization page from the sitemap expectation because it should no longer be listed as a public primary page
- `tests/support-pages.test.mjs`
  - replace the current heavy commercialization-page assertions with a smaller retired-URL helper test that verifies:
    - canonical to `startup-patent-strategy.htm`
    - refresh to `startup-patent-strategy.htm`
    - short fallback copy explaining the consolidation
    - no heavyweight `FAQPage` topic-owning schema

## Recommendation

The right move is:

- retire the standalone commercialization page
- preserve its strongest business-leverage ideas inside `startup-patent-strategy.htm`
- keep only a light commercialization mention in `services.htm`
- stop treating commercialization as a major standalone W&Patent topic

This supports:

- simpler visitor experience
- stronger concentration around the strategy anchor
- cleaner topical ownership
- less duplication between strategy and commercialization surfaces
