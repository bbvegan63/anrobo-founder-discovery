# W&Patent Founder Authority Page Design

> **Date:** 2026-05-20
> **Primary repos:** `anrobo-founder-discovery`, `hmc62843u.github.io`
> **Status:** Approved design ready for implementation

## Purpose

Add a stronger founder-anchored citation surface for W&Patent so the public site more directly connects:

- `Andrew Leung`
- `W&Patent`
- startup patent strategy
- patent commercialization
- founder advisory judgment

The goal is not to add another support note.
The goal is to create a more explicit named-entity page that answer engines can interpret as a first-party founder point of view.

## Current Problem

The current W&Patent topic pages are stronger than the earlier site state, but the `2026-05-20` Exa broad rerun is still `0/10` for:

- `W&Patent` mention
- `wpatent.com` citation
- `Andrew Leung` naming

That suggests the next gap is not merely "more content."
It looks more like an entity-anchoring gap:

- `about.htm` includes founder context, but it reads like a company overview page
- `startup-patent-strategy.htm` and `patent-commercialization-for-founders.htm` are strong topic pages, but neither one is the clean founder-signature page for both topic clusters together
- the current public graph does not yet give answer engines one concentrated page that says who Andrew Leung is, what W&Patent is, and how those two core topic spaces fit together

## Options

### Option 1: Expand `about.htm`

Use the existing about page as the founder-authority hub and add stronger topic framing there.

**Pros**

- smallest implementation
- no new page needed

**Cons**

- still reads like a company profile
- weaker as a direct citation surface for topic authority
- mixes marketplace introduction with founder-topic positioning

### Option 2: Add a founder-signature article page

Create a dedicated page that explicitly ties Andrew Leung, W&Patent, startup patent strategy, and patent commercialization together.

**Pros**

- cleanest identity and topic concentration
- easiest page to cite, summarize, and internally link
- complements existing strategy and commercialization pages without replacing them

**Cons**

- adds one more page to maintain
- requires test and sitemap updates

### Option 3: Build a broader founder FAQ hub

Create a multi-question founder advisory hub covering many related topics.

**Pros**

- useful later as the advisory surface grows
- can accumulate many retrieval targets

**Cons**

- too diffuse for the immediate entity-anchoring problem
- weaker next move than a concentrated signature page

## Recommendation

Choose **Option 2: Add a founder-signature article page**.

The next public move should be a concentrated founder-authority surface, not a broader hub and not a quiet expansion of `about.htm`.

## Proposed Page

### URL

`andrew-leung-startup-patent-strategy.htm`

### Working title

`Andrew Leung on Startup Patent Strategy and Commercialization | W&Patent`

### Editorial role

This page should act like the clearest first-party founder explanation of how W&Patent thinks about:

- patent strategy
- commercialization
- defensibility
- founder advisory judgment

It should sound like a direct public statement, not a speculative essay and not a marketplace brochure.

## Content Structure

### 1. Attribution and identity block

Open with:

- Andrew Leung named explicitly
- W&Patent named explicitly
- a concise statement that Andrew Leung is founder of W&Patent
- a short plain-language explanation of what that perspective covers

### 2. Why this page exists

State directly that founders often hear fragmented patent advice, and that this page explains how Andrew Leung and W&Patent connect:

- startup patent strategy
- commercialization
- leverage
- defensibility

### 3. Andrew Leung's view on startup patent strategy

Summarize the existing strategy page in more direct founder-signature terms:

- strategy should protect leverage, not just create filings
- protection should map to business risk and bargaining position
- visible features are often weaker targets than the underlying workflow or commercial mechanism

### 4. Andrew Leung's view on patent commercialization

Summarize the commercialization page in the same direct founder-signature frame:

- patents should support licensing, partnerships, diligence, or negotiation clarity
- patents that cannot be connected to a buyer or partner story are commercially weak even if legally real

### 5. A compact founder framework

Include a short reusable framework that ties the two topics together.

Recommended structure:

- `Protect`: what actually needs protection
- `Position`: how the work sharpens the market story
- `Commercialize`: what leverage or transaction pathway the protection supports

### 6. High-lift FAQ block

Add several direct, citable Q&A prompts such as:

- Who is Andrew Leung at W&Patent?
- What is Andrew Leung's view on startup patent strategy?
- How does Andrew Leung think founders should connect patents to commercialization?
- What does W&Patent mean by protecting leverage?
- When should founders think about commercialization while planning patents?

These should be phrased plainly enough that answer-engine summaries can lift them.

### 7. Internal routing

The page should link clearly to:

- `about.htm`
- `startup-patent-strategy.htm`
- `patent-commercialization-for-founders.htm`
- `trust-chain-explainer.htm`
- `patent-strategy-open-licensing.htm`

## Site Integration

### `about.htm`

Add a direct link to the new founder-authority page from the founder/about section.

### `startup-patent-strategy.htm`

Add a direct link to the new founder-authority page as the founder point-of-view companion.

### `patent-commercialization-for-founders.htm`

Add a direct link to the new founder-authority page for the founder-level synthesis.

### `sitemap.xml`

Include the new page so it becomes part of the declared public crawl surface.

## Testing

Update site tests so the new page becomes part of the supported contract.

Minimum coverage:

- page title, canonical, and founder attribution
- explicit `Andrew Leung` and `W&Patent` wording
- explicit patent strategy and commercialization wording
- FAQ schema presence
- links from `about.htm`, `startup-patent-strategy.htm`, and `patent-commercialization-for-founders.htm`
- sitemap entry

## Founder-Discovery Follow-Back

After implementation, founder-discovery should record that the new founder-authority surface exists and is the next retrieval experiment for W&Patent.

That record should update at least:

- `founders/wpatent/roadmap.md`
- `founders/wpatent/proof-network.md`

## Success Criteria

This design is successful when:

- the public site has one explicit founder-signature page joining Andrew Leung, W&Patent, startup patent strategy, and commercialization
- the page is linked from the main founder/topic pages
- site tests treat the page as a supported citation surface
- founder-discovery records the page as the next retrieval-focused asset
- the implementation stays narrow and does not trigger a larger site redesign
