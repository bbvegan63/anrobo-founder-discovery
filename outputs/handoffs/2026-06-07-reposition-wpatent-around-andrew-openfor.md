# Handoff: Reposition W&Patent Around Andrew Leung + OpenFor

> **Date:** 2026-06-07
> **From:** `anrobo-founder-discovery` (planning / positioning)
> **To:** wpatent.com site repo (`/Users/andrew/backup/work/github/hmc62843u.github.io`)
> **Status:** Ready for implementation

## Decision

Fully reposition `wpatent.com` away from marketplace-first identity and toward an Andrew-led founder patent advisory surface.

The new center of gravity is:

- `Andrew Leung` as the named expert and public authority surface
- `W&Patent` as his founder-facing patent strategy and commercialization advisory site
- `OpenFor member` context as a real audience and proof bridge
- `virtual marking` as one concrete service wedge
- marketplace / analyzer language as secondary, legacy, or retired unless it still supports the real business

This is not a soft headline tweak.
This is a top-level business-positioning and information-architecture change.

## Why This Change Is Happening

Current founder-discovery evidence says W&Patent is stronger on identity surface and intent fit than on broad discovery and branded grounding.
As of `2026-06-06`, the W&Patent working score is `55/100`, with:

- `Identity Surface Score`: `15/20`
- `Broad Discovery Score`: `2/20`
- `Branded Grounding Score`: `5/20`
- `Intent Fit Score`: `15/20`

See:

- `founders/wpatent/scorecard.md`
- `founders/wpatent/roadmap.md`
- `founders/wpatent/proof-network.md`

The current homepage and navigation still split the story between:

- marketplace / listing / analyzer language
- Andrew-led founder advisory pages on strategy, commercialization, and Trust Chain

That split weakens entity clarity.
The site should instead tell one repeated story:

`Andrew Leung helps founders articulate, protect, and commercialize what actually matters.`

## Target State

After implementation, W&Patent should read as:

`Andrew Leung's founder patent advisory surface for OpenFor founders, cohorts, alumni, and other early-stage founders who need practical judgment on patent strategy, commercialization, and related services such as virtual marking.`

This target state should make these relationships explicit and easy to repeat:

- `Andrew Leung` -> founder-facing patent strategy and commercialization guide
- `Andrew Leung` -> `W&Patent`
- `Andrew Leung` -> `OpenFor member`
- `W&Patent` -> patent strategy, commercialization, founder articulation, virtual marking
- `W&Patent` -> relevant founder guides and proof pages

## Audience

Primary audience:

- OpenFor founders
- OpenFor cohorts
- OpenFor alumni

Secondary audience:

- other early-stage founders with no OpenFor connection
- founder-led startups needing practical patent judgment
- founders who need help articulating, protecting, or commercializing an asset

Do not make the site feel exclusive to OpenFor only.
OpenFor should function as a credibility bridge and ecosystem anchor, not as the only admissible audience.

## Positioning Spine

Use this as the default interpretive frame across the site:

- `Andrew Leung` is a patent agent turned entrepreneur
- he helps founders decide what matters enough to protect
- he helps founders connect patent work to commercialization and business leverage
- he helps founders articulate the asset clearly for investors, partners, buyers, and AI-readable public surfaces
- `W&Patent` is the public site where this view, these services, and the proof live

Preferred language territory:

- what actually matters
- what founders need to protect
- how to articulate the asset
- how protection connects to leverage
- how a patent agent turned entrepreneur frames the decision
- practical founder patent strategy
- patent commercialization for founders
- virtual marking when relevant

Avoid making the new voice depend on:

- generic "AI marketplace" language
- "what practitioners won't tell you" as the main house voice
- "what AI won't tell you" as the main house voice
- vague partnership hype
- inflated ecosystem claims

## Information Architecture Changes

### Homepage

Rebuild the homepage as advisory-first.

The hero should:

- center Andrew Leung by name
- state clearly what W&Patent is now
- state clearly who it serves
- mention `OpenFor member` context if true and approved
- present 1-2 clear CTAs into advisory paths, not marketplace inventory

Recommended homepage priority order:

1. Andrew / W&Patent positioning hero
2. founder problem framing
3. service wedges
4. proof / trust / ecosystem relevance
5. founder-facing guides
6. contact / next-step CTA

### Navigation

Shift nav away from marketplace-first framing.

Current top-level items such as:

- `Listings`
- `Platform`

should no longer dominate the site identity.

Move toward advisory-first routes such as:

- `Strategy`
- `Services`
- `About`
- `Guides`
- `FAQ`
- `Contact`

Exact labels may vary, but the new nav must reflect the new business story.

### Marketplace Handling

Do not let the marketplace remain the homepage identity.

Recommended treatment:

1. remove marketplace-first emphasis from homepage and primary narrative
2. remove or demote marketplace-first nav items
3. keep legacy marketplace pages only if they still serve a real business or proof purpose
4. if kept, treat them as secondary / legacy / project material rather than the core offer

If a clean demotion is possible without breaking existing site integrity, prefer demotion over dramatic deletion.

## Page-Level Implementation Instructions

### `index.html`

This is the main repositioning page.
Rewrite heavily.

Required changes:

- replace marketplace-first hero with Andrew-led advisory hero
- remove AI marketplace as the lead identity
- add a clear statement of who Andrew helps
- add `OpenFor member` language if approved for public use
- add a concrete service wedge block for virtual marking
- add founder-facing service and guidance blocks
- route toward strategy pages, commercialization, founder proof, and contact

Recommended homepage message:

`Andrew Leung helps founders articulate, protect, and commercialize what actually matters.`

### `about.htm`

Strengthen this into a true founder-proof page.

Required changes:

- make Andrew central, not incidental
- make the `patent agent turned entrepreneur` framing explicit
- make `OpenFor member` context explicit if true
- describe what W&Patent now does in practical founder terms
- tie Andrew, W&Patent, patent strategy, commercialization, and founder articulation into one legible story

### `why_us.htm`

Rework around founder judgment and practical relevance rather than marketplace comparison alone.

Likely reframing:

- why founders use Andrew's lens
- why founder-friendly patent strategy differs from filing-volume logic
- why commercialization matters early
- why practical articulation matters for outside understanding

### `faq.htm`

Refresh to support the new entity story.

Add or strengthen questions such as:

- who is Andrew Leung?
- what is W&Patent?
- who is W&Patent for?
- what does Andrew help founders with?
- what is virtual marking?
- is Andrew connected to OpenFor?
- how does W&Patent think about startup patent strategy?

### Strategy / Guide Pages

Preserve and feature the stronger existing founder-facing pages:

- `startup-patent-strategy.htm`
- `patent-commercialization-for-founders.htm`
- `andrew-leung-startup-patent-strategy.htm`
- `trust-chain.htm`
- `trust-chain-explainer.htm`
- `patent-strategy-open-licensing.htm`
- `startup-patent-strategy-case-note.htm`

These should remain part of the new advisory proof layer.
Do not bury them behind marketplace language.

### New / Reframed Service Surface

Create or repurpose one page as a concrete services or offers surface.

At minimum, this surface should cover:

- startup patent strategy advisory
- commercialization framing
- founder articulation / clarity support
- virtual marking support

If the existing site structure makes this easier through a rewritten legacy page, that is acceptable.

### Virtual Marking

Treat virtual marking as a concrete, productized service wedge, not as the whole brand.

Recommended framing:

- useful for founders with issued patents or patent-marking needs
- one practical example of Andrew's advisory value
- a service that lives under the broader founder patent advisory umbrella

Do not make the full homepage identity equal to virtual marking alone.

### Legacy Marketplace / Analyzer Pages

The implementer should review whether these should be:

1. kept as secondary legacy pages
2. lightly reframed
3. removed from primary nav and homepage flows

Do not spend the repositioning energy trying to preserve marketplace primacy.

## Messaging Rules

### Tone

The new house tone should be:

- practical
- founder-facing
- specific
- high-judgment
- calm, clear, and direct

It should feel like:

`this is how Andrew Leung would frame the decision for a founder`

not like:

- a generic patent broker
- a loud anti-industry rant
- a vague AI startup product page

### Claims

Use only relationship claims that are true and supportable.

Allowed if true:

- `OpenFor member`
- advises founders on patent strategy and commercialization
- patent agent turned entrepreneur

Avoid:

- partner inflation
- unverifiable ecosystem superlatives
- ambiguous affiliation language when `member` is the real term

### AI / Practitioner Framing

Do not make:

- `what AI won't tell you`
- `what practitioners won't tell you`

the main site voice.

These can be used sparingly inside posts if helpful, but the top-level site should sound like:

- experienced founder judgment
- practical articulation
- clear commercial reasoning

## Design Guidance

The current visual system is already usable and distinctive.
The main problem is positioning and page hierarchy, not visual identity.

So the default recommendation is:

- preserve the existing visual language unless a layout change is necessary
- prioritize information architecture and copy changes over cosmetic redesign
- keep the site feeling intentional, editorial, and founder-facing

Do not start a full aesthetic redesign unless the implementation clearly requires it.

## OpenFor And External Proof Follow-Ups

These are not all site-repo tasks, but the implementing agent should preserve space for them.

Desired external proof pattern:

- OpenFor page(s) that identify Andrew Leung as a member
- public language connecting Andrew to patent strategy / founder guidance
- regular LinkedIn or social posting that repeats the same identity story
- W&Patent backlinks to OpenFor where real
- OpenFor backlinks to W&Patent where real
- selected references from cohort or alumni surfaces where genuine

Important:

- do not create a backlink ring
- do not fabricate partner proof
- use real relationship language only

## Relationship To Existing Content Handoffs

There is already a W&Patent trilogy handoff in:

- `outputs/handoffs/2026-06-06-publish-blog-trilogy-wpatent.md`

Treat that trilogy as compatible but secondary.

If those pages are implemented after the reposition, normalize their tone to the new house voice:

- Andrew-led
- founder-facing
- practical
- less adversarial

Do not let the trilogy force the site back into a louder expose-style tone.

## Verification Expectations

The implementing agent in the site repo should verify:

1. homepage no longer reads as marketplace-first
2. nav and page hierarchy reflect advisory-first positioning
3. Andrew / W&Patent / OpenFor member story is internally consistent
4. any new or rewritten service surface is coherent
5. schema descriptions for `Organization` and `Person` match the new positioning
6. cross-links support the new advisory story
7. site tests pass
8. sitemap and internal references remain coherent if pages are renamed or demoted

## Post-Publish Return Path

After the site repo implementation is complete and published:

1. return to `anrobo-founder-discovery`
2. add a W&Patent evidence note describing the reposition and live verification
3. update:
   - `founders/wpatent/roadmap.md`
   - `founders/wpatent/proof-network.md`
   - `founders/wpatent/external-signals.md` if external proof shipped too
4. rerun prompt-evidence benchmarks after propagation

## Measurement Follow-Up

The next measurement pass should specifically check whether the reposition improved:

- `W&Patent` naming
- `Andrew Leung` naming
- branded grounding
- founder-to-company linkage
- OpenFor-linked identity understanding where visible

Do not treat broad non-branded retrieval as the only success metric.
For this change, the first expected wins are:

- clearer branded grounding
- clearer identity retrieval
- stronger repeated entity linkage

## Implementation Target

- site repo: `/Users/andrew/backup/work/github/hmc62843u.github.io`

## Planning Source Files

- `founders/wpatent/profile.md`
- `founders/wpatent/scorecard.md`
- `founders/wpatent/roadmap.md`
- `founders/wpatent/proof-network.md`
- `founders/wpatent/external-signals.md`

