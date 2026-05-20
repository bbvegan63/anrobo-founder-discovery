# W&Patent vs OpenFor Comparison

> **Date:** 2026-05-19
> **Provider:** Exa
> **Source data:** `outputs/comparisons/2026-05-19-test-run-wpatent-openfor.json`
> **Purpose:** First live comparison-control run inside `anrobo-founder-discovery`

## Side-By-Side Snapshot

| Founder | Tier | Prompts | Mentioned | First-Party Domain Cited | Founder Named | Read |
| --- | --- | --- | --- | --- | --- | --- |
| W&Patent | Broad discovery | 5 | 0/5 | 0/5 | 0/5 | Absent |
| W&Patent | Identity retrieval control | 3 | 2/3 | 0/3 | 1/3 | Framing captured, grounding weak |
| OpenFor.co | Broad discovery | 3 | 0/3 | 0/3 | 0/3 | Absent |
| OpenFor.co | Identity retrieval control | 3 | 3/3 | 3/3 | 1/3 | Grounded |

## Pattern-Level Read

- `Broad discovery` is weak for both founder-led sites.
- `Branded grounding` is materially different between them.
- OpenFor shows that Exa can retrieve and cite a small founder-led domain when the branded prompt is specific enough.
- W&Patent is now closer to conceptual recognition than before, but it still loses the grounding step to third-party sources.

## Representative Difference

For W&Patent, Exa often answered in a W&Patent-like voice while citing `schellip.com`, `Tran.vc`, `PowerPatent`, or other third-party pages.
For OpenFor, Exa cited `openfor.co` directly on all three branded-control prompts, especially when the prompt echoed OpenFor's own phrasing around AI, solo founders, and turning story or skills into an asset.

## What This Validates

The new module workflow is useful because it separates three different failure modes:

1. open-topic absence
2. branded recognition without first-party grounding
3. stronger branded grounding on a comparable founder-led control site

That distinction matters operationally. It means W&Patent should keep treating broad discovery and branded grounding as separate problems rather than expecting one fix to solve both.

## Immediate W&Patent Implication

The next W&Patent improvements should continue to prioritize first-party branded grounding:

1. more explicit `W&Patent's view` summary surfaces
2. tighter founder-to-company-to-topic linkage
3. stronger proof repetition across guide, case note, FAQ, and external signals
