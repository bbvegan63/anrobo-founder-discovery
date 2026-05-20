# OpenFor.co Comparison Control Note

> **Date:** 2026-05-19
> **Provider:** Exa
> **Role:** Comparison control against W&Patent

## Prompt Snapshot

| Tier | Prompts | OpenFor Mentioned | `openfor.co` Cited | `Erdinc Ekinci` Named | Read |
| --- | --- | --- | --- | --- | --- |
| Broad discovery | 3 | 0/3 | 0/3 | 0/3 | Absent |
| Identity retrieval control | 3 | 3/3 | 3/3 | 1/3 | Stronger branded grounding |

## What The Live Run Showed

- OpenFor is also weak on broad discovery in open topic space.
- Unlike W&Patent, OpenFor grounded all three branded control answers on `openfor.co`.
- Founder naming is still partial: `Erdinc Ekinci` appeared in only `1/3` branded answers.
- The site performs better when the prompt already signals commentary, founder guidance, or OpenFor's own phrasing.

## Representative Prompt Reads

- `What is OpenFor.co's view on using AI as a solo founder?`
  Exa cited `openfor.co/blog` and captured the "AI helps execution but does not replace judgment" framing.
- `How does Erdinc Ekinci describe OpenFor.co?`
  Exa cited both `erdincekinci.com/about` and `openfor.co/aboutus`, showing mixed but usable founder-to-site grounding.
- `According to OpenFor.co, how do individuals turn story, skills, and presence into an asset?`
  Exa cited multiple `openfor.co` pages and preserved OpenFor's personal-asset framing.

## Why This Matters For W&Patent

This comparison suggests that small founder-led sites are not automatically invisible to Exa. Broad discovery can stay weak for both, while branded grounding still differs materially. That makes OpenFor a useful control: it shows that W&Patent's current grounding weakness is not only a "small site" problem, but also a first-party retrieval and reinforcement problem.
