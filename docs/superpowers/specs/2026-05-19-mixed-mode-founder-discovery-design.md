# Mixed-Mode Founder Discovery Design

> **Date:** 2026-05-19
> **Module:** `anrobo-founder-discovery`
> **Status:** Design approved for spec-writing stage

## Purpose

Extend `anrobo-founder-discovery` with a mixed-mode layer so the module can support:

- private founder working state
- shared incubator or community circulation
- selective sync outward for approved assets
- selective feedback sync back into founder state

The goal is to generalize the older W&Patent proof-flow mixed-mode pattern into a multi-founder operating system without turning the shared layer into a second planning system.

## Why This Exists

The current module already supports:

- founder-private working state in `founders/<founder-id>/`
- proof-network planning
- publishing loops
- external-signal tracking
- cross-repo site execution handoffs

What it does not yet support is a formal shared layer for approved founder assets and selected feedback. The older W&Patent proof-flow system already proved that a mixed-mode pattern is useful, but it is still trapped in a founder-specific repo and data model.

## Design Goals

1. Keep private founder state private by default.
2. Allow only approved assets or summaries to circulate outward.
3. Allow only selected community or incubator feedback to move back inward.
4. Preserve `anrobo-founder-discovery` as the system of record for founder planning and evidence.
5. Stay compatible with the current W&Patent mixed-mode logic so migration can be incremental.

## Non-Goals

- building a live multi-user platform
- adding user accounts, permissions, or dashboards
- syncing arbitrary raw files between repos
- replacing founder-owned website repos
- exposing raw scorecards or private notes by default

## Core Model

Mixed mode should use three layers:

### 1. Private founder layer

This is the existing per-founder working state:

```text
founders/<founder-id>/
  profile.md
  prompts.json
  scorecard.md
  roadmap.md
  proof-network.md
  external-signals.md
  evidence/
```

This remains the private layer for:

- drafts
- scorecards
- private evidence
- internal notes
- pre-approval assets
- roadmap decisions

### 2. Shared incubator layer

This is a new shared layer for approved outward circulation and community response:

```text
community/
  workspace.json
  shared-assets/
  feedback/
```

This layer is for:

- approved assets safe to circulate
- approved summaries safe to share
- shared amplification records
- selected feedback records

### 3. Selective sync layer

This is a packet-based boundary between the private founder layer and the shared incubator layer:

```text
sync/
  outbox/
  inbox/
```

This layer moves only explicit packets, never implicit shared state.

## System Rule

`anrobo-founder-discovery` remains the system of record.  
Mixed mode adds controlled shared circulation.  
It does not create a second planning system.

## What Syncs Outward

Only approved items should move from founder state into the shared layer:

- approved proof assets
- approved founder posts
- approved case notes
- approved intro notes
- selected public-safe summaries
- selected external-signal summaries

These outward packets should never include:

- raw notes
- unapproved drafts
- internal score details
- sensitive founder feedback

## What Syncs Back

Only selected, useful feedback should move from the shared layer back into founder state:

- meaningful replies
- community amplification
- reposts or shares
- intros
- endorsements
- selected feedback that changes roadmap or proof priorities

These feedback packets should be treated as evidence, not as direct edits to founder strategy files.

## Data Model

Mixed-mode v1 should use two packet types:

### Share packet

Purpose: move an approved outward asset into the shared layer.

Required fields:

- `sync_id`
- `founder_id`
- `asset_id`
- `asset_type`
- `title`
- `summary`
- `allowed_channels`
- `source_refs`
- `exported_at`

### Feedback packet

Purpose: move selected community or distribution feedback back into founder state.

Required fields:

- `feedback_id`
- `founder_id`
- `asset_id`
- `source_sync_id`
- `feedback_type`
- `signal_strength`
- `notes`
- `imported_at`

## Proposed Folder Additions

Mixed-mode v1 would add:

```text
anrobo-founder-discovery/
  community/
    workspace.json
    shared-assets/
    feedback/
  sync/
    outbox/
    inbox/
```

The existing founder folders remain unchanged except that they become the explicit private founder layer in this model.

## Suggested Workspace Shapes

### `community/workspace.json`

Should track:

- `version`
- `shared_assets`
- `received_sync_ids`
- `feedback_events`

### `sync/outbox/`

Should contain exported share packets waiting to be applied into the shared layer.

### `sync/inbox/`

Should contain selected feedback packets waiting to be imported back into founder state.

## Command Surface

Mixed-mode v1 should stay intentionally small. It only needs:

- one export command for approved share packets
- one apply-share command for loading them into the community layer
- one import-feedback command for selected feedback packets

The current W&Patent proof-flow scripts are a strong compatibility reference, but the new commands should be generalized around founder ids and founder folders instead of W&Patent-only paths.

## Compatibility With Existing W&Patent Proof Flow

The current W&Patent proof-flow mixed-mode model maps cleanly:

- old founder workspace -> `founders/wpatent/`
- old community workspace -> `community/workspace.json`
- old outbox -> `sync/outbox/`
- old selected feedback import -> founder evidence refresh plus `external-signals.md`

So mixed-mode in `anrobo-founder-discovery` is not a new concept. It is a generalization of an existing founder-specific pattern.

## Migration Strategy

Mixed-mode should be migrated in phases:

### Phase 1

Add the new shared-layer folders, packet schemas, and playbook docs.

### Phase 2

Prove the pattern with one founder:

- `wpatent`

### Phase 3

Use the new mixed-mode flow for one approved W&Patent asset and one selected feedback loop.

### Phase 4

Only after W&Patent works cleanly, extend the pattern to other founders such as `openfor`.

## Operational Rules For Agents

When working in mixed mode, agents should follow these rules:

1. Do not sync anything outward unless it is explicitly approved for sharing.
2. Do not import feedback back into founder state unless it is selected and meaningful.
3. Do not treat shared-layer artifacts as replacements for founder-private files.
4. Always preserve the founder folder as the private working truth.
5. Record sync events as evidence rather than silently changing planning files.

## Success Criteria

Mixed-mode v1 is successful if:

- founder-private files remain the working source of truth
- approved assets can circulate outward without manual copy-paste sprawl
- selected feedback can come back inward without mixing raw community noise into founder state
- the system works first for W&Patent without breaking the current module shape

## Recommended First Implementation Boundary

The first implementation should stay intentionally narrow:

- one shared workspace
- two packet schemas
- one mixed-mode playbook
- one export path
- one apply-share path
- one import-feedback path
- one founder pilot (`wpatent`)

That is enough to prove the architecture without overbuilding a multi-founder sync system too early.
