# W&Patent Draft Promotion Queue Design

> **Date:** 2026-06-07
> **Scope:** Use W&Patent drafts as a measured publication queue without collapsing the live advisory shell
> **Status:** Approved design

## Decision

Do not promote all W&Patent drafts at once.

Use the W&Patent draft set as a disciplined publication queue:

- keep one stable public authority anchor on `wpatent.com`
- promote one draft at a time
- move a draft into `outputs/publishing/` only when it is the actual next approved public asset
- measure after each publish before choosing the next draft

The canonical public anchor should remain:

- `https://wpatent.com/startup-patent-strategy.htm`

## Why This Exists

The current W&Patent direction is:

- Andrew-led advisory
- small, simple public surface
- strong enough semantic support for AI discovery

The drafts under `drafts/wpatent/` are useful source material, but they are not a substitute for the public site:

- they are not public crawl surfaces
- they are not yet normalized to the live W&Patent voice
- some still contain draft-only sections or sharper editorial framing

At the same time, keeping good draft work stuck in `drafts/` forever would waste useful founder-facing material.

This design creates a middle path:

- keep the public shell stable
- use drafts as the next-content queue
- avoid flooding the site with too many new overlapping pages at once

## Public-Surface Rule

Do not reduce W&Patent to drafts only.

If AI discovery remains a primary goal, W&Patent still needs a small live advisory shell on the public domain.

That shell should continue to include:

- `Home`
- `Strategy`
- `Services`
- `About`

Support pages may be demoted or kept secondary, but the site should still maintain at least one strong public advisory anchor.

The draft set is a publishing pipeline, not a replacement for that shell.

## Queue Rule

Treat `drafts/wpatent/` as a queue, not a bundle.

Rules:

- one draft moves forward at a time
- each promoted draft must support the same Andrew-led founder-authority story
- each promoted draft must reinforce, not compete with, `startup-patent-strategy.htm`
- `outputs/publishing/` should contain approved next assets, not every draft that happens to exist

This keeps the publishing system legible:

- `drafts/` = working queue
- `outputs/publishing/` = approved durable asset
- `wpatent.com` = live public surface

## Promotion Order

Recommended order:

1. keep `startup-patent-strategy.htm` as the live topic anchor
2. promote `drafts/wpatent/2026-06-06-post-provisional-vs-nda.md`
3. promote `drafts/wpatent/2026-06-06-post-provisional-and-poc-budget.md`
4. hold `drafts/wpatent/2026-06-06-post-draw-first-write-second.md` for later
5. do not publish `drafts/wpatent/2026-06-06-pillar-startup-patent-strategy.md` directly in its current form

### Why This Order

`post-provisional-vs-nda` should go first because it:

- answers a practical founder decision
- fits early decision-making cleanly
- supports the existing strategy guide well
- is a better first supporting article than the more polemical pillar

`post-provisional-and-poc-budget` should go second because it:

- extends the same cluster into budget and prioritization
- stays founder-useful
- remains close to the main authority page

`post-draw-first-write-second` is useful but less clearly first-wave than the other two.

The draft pillar should be treated as source material to rewrite later, not as a direct publication candidate.

## Promotion Criteria

A draft should move out of `drafts/` only when it satisfies all of the following:

### 1. Tone Fit

The article should sound like:

- Andrew's practical founder judgment
- calm, specific advisory guidance
- founder usefulness first

It should not lead with:

- "what practitioners won't tell you"
- "what AI won't tell you"
- expose-style or grievance-style framing as the main house voice

### 2. Public-Shape Fit

The article should have:

- a clear H1
- a clear lead
- normal W&Patent article structure
- no draft-only sections such as `Social Media Snippet`

### 3. Anchor Support Fit

The article should:

- support `startup-patent-strategy.htm`
- link back to that anchor
- avoid competing with it for primary identity or topic ownership

### 4. Discovery Fit

The article should:

- keep `Andrew Leung` and `W&Patent` explicit where appropriate
- contribute a distinct founder-question surface
- avoid duplicating another live page too closely

### 5. Approval Fit

The article should move into `outputs/publishing/` only when it is:

- actually approved as the next public asset
- not merely present as a draft

## Minimal Publishing Loop

Use this loop for each promoted draft:

1. keep the live authority anchor stable
2. choose one draft from `drafts/wpatent/`
3. normalize it for tone and article shape
4. promote that one file into `outputs/publishing/`
5. implement and publish it on W&Patent
6. log the publish event in founder-discovery
7. rerun evidence before choosing the next draft

This loop should stay sequential.

Do not publish the full draft queue as a burst unless a later explicit decision changes the strategy.

## Non-Goals

This design does not recommend:

- removing the live W&Patent advisory shell and relying only on drafts
- promoting all W&Patent drafts together
- treating every draft as already publication-ready
- replacing the canonical strategy guide with a bundle of narrower posts

## Recommendation

The right move is:

- keep the live W&Patent shell small
- keep `startup-patent-strategy.htm` as the main public anchor
- use `drafts/wpatent/` as a disciplined publication queue
- promote one article at a time in the recommended order

This preserves:

- straightforward visitor experience
- strong founder-authority continuity
- cleaner AI-discovery support
- a practical way to convert draft work into public assets without flooding the site
