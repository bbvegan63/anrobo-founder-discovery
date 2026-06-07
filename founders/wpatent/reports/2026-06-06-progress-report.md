# W&Patent Progress Report

> **Date:** 2026-06-06
> **Report:** Baseline (first owner-facing report)
> **Working total:** 55/100

## Executive Summary

W&Patent has a strong identity surface and clear topic pages, but AI answer engines still struggle to find it on non-branded prompts. The June 6 evidence rerun produced the first-ever broad-pack citation of a W&Patent page — a meaningful foothold but still narrow. Founder naming (`Andrew Leung`) and site naming (`W&Patent`) remain absent across all broad discovery channels. The next step is to restore the Perplexity benchmark to establish a full production baseline, then decide whether to add more onsite content or shift toward external proof signals.

## Current Status

| Category | Score | Read |
|---|---|---|
| Identity Surface | 15/20 | Strong — clear founder attribution, schema, dedicated topic pages |
| Broad Discovery | 2/20 | Weak — first Exa citation appeared on June 6, but generic discovery is still the main gap |
| Branded Grounding | 5/20 | Fragile — branded control rerun is blocked by missing Perplexity key |
| Intent Fit | 15/20 | Stronger than retrieval — site structure and topic clustering work well |
| Improvement Readiness | 18/20 | High — pages, proof assets, cleaner repo boundary, clear roadmap |

**Total: 55/100**

The score tells a split story: W&Patent is well-built for visitors who already know where they are, but nearly invisible to AI systems answering non-branded topic questions.

## What Changed Since Last Report

This is the first baseline report, so there is no prior owner-facing report to compare against. Key events leading to this baseline:

- **May 20:** Founder-authority page published linking Andrew Leung, W&Patent, startup patent strategy, and patent commercialization on a single citation surface
- **May 20:** Core answer-block tightening added direct-answer sections to the two main topic pages
- **May 20:** Repository boundary cleanup completed, moving provider keys into `anrobo-founder-discovery`
- **May 20:** First proof-note brief published at `patent-strategy-open-licensing.htm`
- **June 6:** Exa broad rerun produced the first-ever `wpatent.com` citation on `patent strategy for startups` pointing to `startup-patent-strategy.htm`
- **June 6:** Local OpenAI OAuth lane separated into a clean standalone diagnostic command

## Evidence Highlights

- **First broad-pack citation:** Exa cited `https://wpatent.com/startup-patent-strategy.htm` once for `patent strategy for startups` — a narrow but non-zero result after months of zero citations
- **Founder naming absent:** No run produced direct `W&Patent` mention or `Andrew Leung` naming — the site is cited but not recognized as a named entity
- **Trust Chain drift:** `trust chain for websites` still resolves to TLS / certificate-chain language, not the W&Patent Trust Chain methodology
- **Local OpenAI diagnostic:** Clean standalone lane now functional but produced zero citations across 10 answers
- **LinkedIn signal:** `asset-001` founder post has 2 likes, no comments — low engagement but a valid external signal
- **Founder-list feedback:** One founder asked about anti-patent / open-license alternatives, which prompted the `patent-strategy-open-licensing.htm` proof note

## Current Blockers

1. **Missing production benchmark** — `PERPLEXITY_API_KEY` is empty; the branded control rerun and full provider comparison cannot run
2. **Weak broad discovery** — 2/20 with only one Exa citation; no provider names W&Patent or Andrew Leung in non-branded answers
3. **Thin external proof** — one LinkedIn post with minimal engagement; no external citations or backlinks in the evidence record
4. **Trust Chain ambiguity** — the methodology name is being interpreted as TLS security content by answer engines

## Next Recommended Moves

1. **Restore Perplexity and rerun the production benchmark** — this is the single highest-leverage action. Until the full provider comparison is available, every subsequent decision is informed by incomplete data.
2. **Compare the full production rerun against the June 6 baseline** — check whether the Exa foothold persists, spreads, or collapses, and whether any provider adds direct entity naming.
3. **Hold on new internal pages** until the production compare shows whether the startup-patent-strategy foothold is stable. If it is, the limiting factor shifts from content to citation frequency and entity recognition.
4. **If the compare stays narrow, shift to external founder proof** — offsite citations, guest content, or founder-list signals that reinforce W&Patent and Andrew Leung as named entities outside the site itself.

## Reference Links

- [Scorecard](../scorecard.md)
- [Roadmap](../roadmap.md)
- [Proof Network](../proof-network.md)
- [External Signals](../external-signals.md)
- [June 6 Evidence Rerun](../evidence/2026-06-06-broad-rerun-after-propagation.md)
- [May 20 Proof-Note Publish](../evidence/2026-05-20-defensibility-proof-note-publish.md)
- [May 20 Core Answer-Block Tightening](../evidence/2026-05-20-core-answer-block-tightening.md)
- Live site: `https://wpatent.com`
