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

Make an explicit decision about whether `patent commercialization for founders` remains in the prompt pack.

If W&Patent is no longer trying to own commercialization as a primary topic, the cleaner move is to de-prioritize or remove that prompt from the core owned-topic measurement set.

Keeping the prompt while removing the page is possible, but it means accepting weaker performance on a topic the site no longer directly targets.

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
