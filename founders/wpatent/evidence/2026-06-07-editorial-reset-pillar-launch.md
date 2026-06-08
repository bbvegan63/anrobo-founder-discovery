# W&Patent Editorial Reset Pillar Launch

## What Shipped

- `startup-patent-strategy.htm` was rewritten in place as the new editorial-reset pillar:
  - `What Every Patent Practitioner Knows But Won't Tell Founders`
- `index.html`, `about.htm`, and `services.htm` now route visitors into the sharper Andrew-led founder-language story
- the week-0 site push shipped from the clean site worktree at commit `4c2eb22`

## What Was Retired

- `trust-chain.htm`
- `trust-chain-explainer.htm`
- `trust-chain-demo.htm`
- `patent-strategy-open-licensing.htm`

These URLs now behave as retired helper pages that canonicalize and refresh to `startup-patent-strategy.htm`.

## Live Check

- push to `wpatent.com` succeeded from the isolated site worktree
- `curl -I https://wpatent.com/startup-patent-strategy.htm` returned `HTTP 200`
- follow-up live HTML check confirmed:
  - `What Every Patent Practitioner Knows But Won't Tell Founders`
  - `investors generally do not sign NDAs`
  - `Warning & Disclaimer`

## Immediate Read

Week 0 is now live.

The old calmer strategy page has been replaced in place, and the retired secondary cluster is no longer part of the public strategy story.

`provisional-vs-nda.htm` is still pre-reset history at this moment. It remains live, but it has not yet been rewritten into the new week-1 editorial-reset version.

## Next Week

- rewrite `provisional-vs-nda.htm` in place from the approved week-1 source asset
- publish the matching LinkedIn reinforcement that points only to `https://wpatent.com/provisional-vs-nda.htm`
- then rerun the smaller discovery pack instead of adding more internal pages immediately
