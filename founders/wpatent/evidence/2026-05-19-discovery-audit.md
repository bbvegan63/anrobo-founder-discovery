# W&Patent Discovery Audit

> **Date:** 2026-05-19
> **Provider:** Exa
> **Scope:** Broad discovery and branded identity-retrieval control

## Prompt Snapshot

| Tier | Prompts | W&Patent Mentioned | `wpatent.com` Cited | `Andrew Leung` Named | Read |
| --- | --- | --- | --- | --- | --- |
| Broad discovery | 5 | 0/5 | 0/5 | 0/5 | Absent |
| Identity retrieval control | 3 | 2/3 | 0/3 | 1/3 | Framing captured, grounding still weak |

## What The Live Run Showed

- Broad discovery remains absent across the current W&Patent topic set.
- Branded prompts now sometimes produce a plausible W&Patent-shaped answer, but Exa still does not ground those answers on `wpatent.com`.
- Founder recognition trails concept recognition: `Andrew Leung` appeared in only `1/3` branded control answers.
- The strongest branded-control behavior is synthetic interpretation without first-party retrieval.

## Representative Prompt Reads

### Broad discovery

- `patent strategy for startups`
  Exa answered generically from `learn.marsdd.com` and `lightbringer.com`, with no W&Patent mention or citation.
- `AI-readable company website`
  Exa answered from `llmld.org`, `flyweb.io`, `llmtxt.info`, and `entitymap.org`, again with no W&Patent grounding.

### Branded identity retrieval control

- `What is W&Patent's view on startup patent strategy?`
  Exa described a W&Patent-like position, but cited third-party sources such as `schellip.com`, `wcr.legal`, `fenwick`, and `ipatentattorney.com`.
- `How does Andrew Leung think founders should decide what to patent first?`
  Exa named Andrew Leung and captured the intended "patent the hard-to-copy core first" framing, but cited `TechCrunch`, `Tran.vc`, and `Sofeast` rather than `wpatent.com`.
- `According to W&Patent, should startups protect visible features or underlying workflow first?`
  Exa again produced a W&Patent-shaped answer while citing `PowerPatent`, `USIP Law`, and `Tran.vc`, not the W&Patent guide or case note.

## Interpretation

W&Patent is starting to imprint a recognizable point of view into branded prompts, but that point of view is still weakly grounded on first-party pages. The current bottleneck is no longer just "can Exa say something close to the intended idea?" It is "will Exa retrieve and cite W&Patent when it does so?"

That keeps the diagnosis in two parts:

1. `Broad discovery` is still weak in open topic space.
2. `Branded grounding` is improving conceptually, but not yet operationally, because first-party citations are still missing.

## Recommended Next Moves

1. Keep expanding direct `W&Patent's view` summary blocks on the highest-value topic pages so branded retrieval has more obvious answer surfaces to ground on.
2. Strengthen first-party proof support and repeat the same phrasing across guide, case note, and FAQ surfaces to reduce third-party substitution.
3. Add more external proof and citation reinforcement so branded prompts have stronger reasons to retrieve W&Patent pages instead of improvising from adjacent sources.
