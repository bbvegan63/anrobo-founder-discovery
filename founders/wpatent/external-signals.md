# W&Patent External Signals

> **Version:** 2026-05-19
> **Purpose:** Track offsite distribution and response signals that support W&Patent founder discovery

## Current Log

| Signal ID | Asset | Channel | Visibility | Status | Response Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `extsig-001` | `asset-001` | LinkedIn founder post | Public | Sent / live | Pending | Migrated from the older W&Patent proof-flow workspace after manual confirmation that the founder post was published. Included in mixed-mode share packet `asset-001--2026-05-19T00-00-00Z`. |
| `extsig-002` | `asset-001` | founder list intro note | Private | Sent | Pending | Migrated from the older W&Patent proof-flow workspace after manual confirmation that the founder-list send went out. Included in mixed-mode share packet `asset-001--2026-05-19T00-00-00Z`. |

## Source Asset

- onsite case note: `startup-patent-strategy-case-note.htm`
- linked page: `startup-patent-strategy.htm`

## Mixed-Mode Pilot

- share packet: `sync/outbox/asset-001-share.json`
- community sync id: `asset-001--2026-05-19T00-00-00Z`
- shared workspace status: applied to `community/workspace.json`
- feedback import status: not yet used; waiting for a real response worth importing

## Reading Rule

These entries track the external layer around `asset-001`, not the onsite source asset itself.
Follow-up replies, intros, reposts, or later evidence changes should be appended here or reflected in the next structured evidence refresh.
Selected shared-layer feedback can also be imported into `evidence/imported-feedback/` when mixed-mode sync is used.
