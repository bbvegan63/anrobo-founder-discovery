# W&Patent Post-Discovery-Surface Baseline

> **Date:** 2026-06-08
> **Commands:**
> `node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --only-exa`
> `node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --only-openai-local-oauth`
> **Context:** fresh baseline after the editorial reset stabilized, the three support posts went live under the new house voice, `poc-and-provisional.htm` replaced the older week-2 slug, `virtual-marking.htm` became a crawlable service page, `dashing-robo-founder-project.htm` launched as the first founder project page, and the cluster posts gained `Quick answer` blocks

## What Was Measured

The current live W&Patent cluster includes:

- `https://wpatent.com/startup-patent-strategy.htm`
- `https://wpatent.com/provisional-vs-nda.htm`
- `https://wpatent.com/poc-and-provisional.htm`
- `https://wpatent.com/draw-first-write-second.htm`
- `https://wpatent.com/virtual-marking.htm`
- `https://wpatent.com/dashing-robo-founder-project.htm`

The prompt pack was not rewritten for this run.
This baseline intentionally reused the existing W&Patent measurement recipe so the result can be compared against the June 6 and June 7 evidence trail.

Perplexity was not part of this refresh because `PERPLEXITY_API_KEY` is still empty in `.env.local`.

## Read

### Exa broad pack

- result: `W&Patent` mentioned in `0/10` answers
- result: `wpatent.com` cited in `0/10` answers
- result: `Andrew Leung` named in `0/10` answers

### Local OpenAI OAuth standalone diagnostic

- result: `W&Patent` mentioned in `0/10` answers
- result: `wpatent.com` cited in `0/10` answers
- result: `Andrew Leung` named in `0/10` answers

## Interpretation

This baseline stayed completely flat even after the site-level cleanup became much stronger.

Compared against:

- `founders/wpatent/evidence/2026-06-07-editorial-reset-pillar-launch.md`
- `founders/wpatent/evidence/2026-06-07-post-provisional-vs-nda-immediate-rerun.md`
- `founders/wpatent/evidence/2026-06-08-dashing-robo-founder-project-publish.md`

the main change is no longer page shape.
The live site now has a coherent Andrew-led pillar, three literal-topic support posts, stronger metadata, a crawlable virtual-marking page, and a founder project page pattern.
Yet the answer-engine read still does not connect the topic space back to `W&Patent`, `wpatent.com`, or `Andrew Leung`.

That makes the bottleneck clearer:

- onsite editorial structure is no longer the main blocker
- offsite repetition and entity reinforcement are still missing
- the current prompt pack is still usable for continuity, but it underweights the newer cluster topics

## Next move

1. Publish the pillar LinkedIn reinforcement under the editorial-reset voice.
2. Publish the cluster-post LinkedIn sequence one page at a time:
   `provisional-vs-nda`, then `poc-and-provisional`, then `draw-first-write-second`.
3. Send the OpenFor member/profile recognition request after the pillar plus at least one cluster-post reinforcement are live.
4. Rerun the smaller discovery check after the first external wave instead of making more onsite changes first.
