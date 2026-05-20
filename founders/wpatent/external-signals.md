# W&Patent External Signals

> **Version:** 2026-05-19
> **Purpose:** Track offsite distribution and response signals that support W&Patent founder discovery

## Current Log

| Signal ID | Asset | Channel | Visibility | Status | Response Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `extsig-001` | `asset-001` | LinkedIn founder post | Public | Sent / live | Low positive | Migrated from the older W&Patent proof-flow workspace after manual confirmation that the founder post was published. Included in mixed-mode share packet `asset-001--2026-05-19T00-00-00Z`. Current response: `2` likes and no comments. |
| `extsig-002` | `asset-001` | founder list intro note | Private | Sent | Imported feedback | Migrated from the older W&Patent proof-flow workspace after manual confirmation that the founder-list send went out. Included in mixed-mode share packet `asset-001--2026-05-19T00-00-00Z`. Current response: one founder asked whether there are also anti-patent or open-license strategies such as Creative Commons, Apache, and GPL. |

## Source Asset

- onsite case note: `startup-patent-strategy-case-note.htm`
- linked page: `startup-patent-strategy.htm`

## Mixed-Mode Pilot

- share packet: `sync/outbox/asset-001-share.json`
- community sync id: `asset-001--2026-05-19T00-00-00Z`
- shared workspace status: applied to `community/workspace.json`
- feedback import status: first founder-list feedback packet imported from `sync/inbox/feedback-asset-001-founder-list-question.json` into `evidence/imported-feedback/feedback-asset-001-founder-list-question.json`

## Reading Rule

These entries track the external layer around `asset-001`, not the onsite source asset itself.
Follow-up replies, intros, reposts, or later evidence changes should be appended here or reflected in the next structured evidence refresh.
Selected shared-layer feedback can also be imported into `evidence/imported-feedback/` when mixed-mode sync is used.
