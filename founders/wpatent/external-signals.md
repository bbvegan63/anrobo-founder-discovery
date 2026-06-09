# W&Patent External Signals

> **Version:** 2026-06-08
> **Purpose:** Track the post-reset offsite sequence for the new W&Patent editorial story

## Current Log

| Signal ID | Asset | Channel | Visibility | Status | Response Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `extsig-001` | `asset-001` | LinkedIn founder post | Public | Sent / live | Low positive | Pre-reset signal imported from the earlier W&Patent proof-flow workspace. Useful as history only, not as part of the new editorial sequence. |
| `extsig-002` | `asset-001` | founder list intro note | Private | Sent | Imported feedback | Pre-reset signal imported from the earlier W&Patent proof-flow workspace. Useful as history only, not as part of the new editorial sequence. |
| `extsig-003` | `asset-003` | LinkedIn founder post | Public | Sent / live | Awaiting response | User confirmed the pillar post was published on 2026-06-08. Approved copy lives at `outputs/publishing/2026-06-07-linkedin-editorial-reset-pillar.md`. Target URL: `startup-patent-strategy.htm`. Public permalink still pending capture. |

## Reset Sequence

- `asset-003` = rewritten pillar launch around `startup-patent-strategy.htm`
- `asset-004` = rewritten week-1 `provisional-vs-nda`
- first LinkedIn reinforcement points only to `startup-patent-strategy.htm`
- second LinkedIn reinforcement points to `provisional-vs-nda.htm`
- first OpenFor ask happens only after the new pillar plus at least one rewritten support post are live

## Reading Rule

Judge the reset sequence in order:

1. pillar goes live
2. first LinkedIn post reinforces the pillar
3. week-1 post goes live
4. second LinkedIn post reinforces week 1
5. OpenFor ask is sent
6. rerun measurement

Do not treat the older signal rows as active proof for the reset.
They are context, not the current sequence.
