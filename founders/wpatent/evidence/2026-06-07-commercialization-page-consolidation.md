# W&Patent Commercialization Page Consolidation

> **Date:** 2026-06-07
> **Founder:** `wpatent`
> **Asset type:** support-page retirement and strategy-page consolidation
> **Site repo commit:** `ee492b7`

## What Changed

W&Patent retired the standalone commercialization guide at:

- `https://wpatent.com/patent-commercialization-for-founders.htm`

The strongest commercialization logic now lives inside:

- `https://wpatent.com/startup-patent-strategy.htm`

The old commercialization URL now behaves as a helper page with:

- canonical to `startup-patent-strategy.htm`
- refresh to `startup-patent-strategy.htm`
- short fallback copy
- no heavyweight `FAQPage` topic-owning schema

## Why This Was Done

The site is no longer treating commercialization as a primary owned topic.
The simpler W&Patent structure now concentrates on:

- startup patent strategy
- founder decision-making
- founder authority
- Trust Chain support

This consolidation also matches the current visitor-feedback direction: keep the public advisory surface smaller, keep the semantic support layer intact, and stop splitting Andrew-led strategy across too many parallel topic pages.

## Live Check

- retired URL returns `200`
- retired URL contains `noindex, follow`
- retired URL canonicals to `startup-patent-strategy.htm`
- retired URL contains the helper copy that points visitors to the strategy guide
- strategy guide no longer links out to `patent-commercialization-for-founders.htm`
- sitemap no longer lists the commercialization URL

## Founder-discovery Update

- `profile.md` no longer lists commercialization as a topic to own
- `prompts.json` no longer includes `patent commercialization for founders` in the core pack
- `proof-network.md` and `roadmap.md` now reflect the smaller owned-topic set

## Next Step

Rerun the smaller owned-topic prompt pack after the LinkedIn reinforcement decision and compare whether the reduced topic set sharpens W&Patent signal clarity around startup patent strategy, founder authority, and Trust Chain.
