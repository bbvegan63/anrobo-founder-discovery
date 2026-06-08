# W&Patent Cluster Post Quick Answer Design

Date: 2026-06-08

## Context

The current W&Patent cluster posts have strong editorial openings, but that sharp voice can delay the literal answer to the page's core question.

For AI discovery and answer extraction, each cluster post should expose a compact, high-page summary that:

- restates the literal topic
- gives Andrew Leung's practical answer
- names the immediate founder implication

The goal is to improve page-level extractability without flattening the reading experience or turning the pages into FAQ pages.

## Decision

Add a `Quick answer` section to each cluster post.

This is not the same thing as an FAQ.

- `Quick answer` = the page's compact thesis
- `FAQ` = optional secondary clarification, only if a page later needs it

The `Quick answer` should appear immediately below the lead on each cluster post.

## Scope

Apply this pattern to the three cluster posts:

- `https://wpatent.com/provisional-vs-nda.htm`
- `https://wpatent.com/poc-and-provisional.htm`
- `https://wpatent.com/draw-first-write-second.htm`

Mirror the same content in the approved source assets under `outputs/publishing/`, not the now-obsolete `drafts/wpatent/` layer.

## Content Pattern

Each `Quick answer` should:

1. state the literal topic phrase early
2. give Andrew's answer in founder language
3. name the practical action or judgment

Target shape:

- 2 to 4 sentences
- roughly 45 to 90 words
- one short heading plus one compact paragraph, or at most two short paragraphs

Recommended label:

- `Quick answer`

Avoid:

- `TL;DR`
- `Andrew's take`
- bullets
- boxed legal-callout styling
- repeating the lead verbatim

## Per-Post Intent

### Provisional vs. NDA

The `Quick answer` should clarify:

- the main question is what to secure before talking
- a provisional on the enabling piece usually matters more than an NDA
- the founder still needs judgment about what stays private

### POC and Provisional

The `Quick answer` should clarify:

- this is no longer a pure sequential choice
- many founders should build and file in parallel
- the real task is capturing technically distinctive work while the evidence is fresh

### Draw First, Write Second

The `Quick answer` should clarify:

- drawings help prove possession
- drawings create fallback support if claims need to narrow later
- text alone is often a weaker starting position

## Readability Guardrails

The `Quick answer` should feel like a small pause in the article, not a widget.

Design guardrails:

- normal article typography
- no floating box
- no bright background
- no dense summary block
- no duplicate mini-article

The page flow should remain:

1. H1
2. lead
3. `Quick answer`
4. rest of article

## Discovery Rationale

Expected benefits:

- better page-level query-to-answer alignment
- cleaner extractable summaries for answer engines
- better human scannability
- less ambiguity when the editorial opening is sharper than the literal topic wording

Expected limits:

- this does not replace external signals
- this does not replace titles, metadata, schema, or internal links
- this is a page-extraction improvement, not a whole-site discovery strategy

## Source Of Truth

Use the approved publishing assets as the editorial source layer:

- `outputs/publishing/2026-06-07-post-provisional-vs-nda-editorial-reset.md`
- `outputs/publishing/2026-06-07-post-provisional-and-poc-budget-editorial-reset.md`
- `outputs/publishing/2026-06-07-post-draw-first-write-second-editorial-reset.md`

The deleted `drafts/wpatent/` queue is no longer the active source of truth for this work.

## Verification

Implementation should verify:

- each of the three posts includes a visible `Quick answer` immediately below the lead
- each `Quick answer` includes the literal topic phrase
- the wording is shorter and plainer than the body copy
- readability is preserved on desktop and mobile
- no FAQ structure is introduced unless intentionally added later
