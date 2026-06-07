# Founder Drafts Layer Design

> **Date:** 2026-06-06
> **Module:** `anrobo-founder-discovery`
> **Status:** Approved design for temporary founder-facing draft staging

## Purpose

Define a standard shared `drafts/` layer for temporary founder-facing content that is still being worked on.

This layer should solve a current gap:

- founder-facing drafts sometimes exist before they are ready for `outputs/publishing/`
- ad hoc folders such as `blogposts/` are plausible in practice, but are not a documented convention
- the module needs a standard staging location that is temporary, explicit, and reusable across founders

The drafts layer should not become a second archive.
It should be a temporary staging area for founder-facing content in progress.

## Current Context

The module already has clear durable locations for:

- founder working state in `founders/<founder-id>/`
- approved founder-facing outputs in `outputs/publishing/`
- comparison outputs in `outputs/comparisons/`
- scorecard outputs in `outputs/scorecards/`

What is missing is a standard location for:

- early post bundles
- alternate founder-facing angles
- page-draft bundles
- content that may still be replaced, restructured, or discarded

The current top-level `blogposts/` folder shows the need for this layer, but should not become the long-term pattern.

## Scope

This design covers:

- location of the drafts layer
- folder structure
- naming conventions
- usage rules
- cleanup rules
- relationship to `outputs/publishing/` and founder folders

This design does not cover:

- automated promotion from drafts to publishing outputs
- dashboard UI
- site-repo implementation workflow details
- content-quality standards for individual posts

## Options

### Option 1: Keep ad hoc top-level draft folders such as `blogposts/`

**Pros**

- flexible
- low initial friction

**Cons**

- weak convention clarity
- harder to scale across founders
- easy to accumulate inconsistent temporary folders

### Option 2: Shared repo-level `drafts/` folder with founder subfolders

Structure:

```text
drafts/
  <founder-id>/
    YYYY-MM-DD-[type]-[topic].md
```

**Pros**

- shared at repo level
- preserves founder traceability
- fits date-first naming conventions already used elsewhere
- makes cleanup and promotion rules clearer

**Cons**

- slightly more structure than a flat scratch area

### Option 3: Shared repo-level `drafts/` folder organized by content type

Structure:

```text
drafts/
  blogposts/
  proof-notes/
  case-notes/
```

**Pros**

- easy if workflow is mainly content-type driven

**Cons**

- weak founder provenance
- awkward when one founder has multiple draft types at once
- less compatible with the founder-folder operating model

## Recommendation

Choose **Option 2: Shared repo-level `drafts/` folder with founder subfolders**.

This gives the repo a standard temporary staging area without losing founder context.

## Target Structure

Use:

```text
drafts/
  <founder-id>/
    YYYY-MM-DD-[type]-[topic].md
```

Examples:

- `drafts/wpatent/2026-06-06-pillar-startup-patent-strategy.md`
- `drafts/wpatent/2026-06-06-post-provisional-vs-nda.md`
- `drafts/openfor/2026-06-06-post-solo-founder-ai.md`

## Naming Rules

Use the existing date-first repo convention:

- `YYYY-MM-DD-[type]-[topic].md`

Recommended type values:

- `post`
- `pillar`
- `case-note`
- `proof-note`
- `intro-note`
- `page-draft`

Avoid low-signal names such as:

- `post1.md`
- `post2.md`
- `pillar.md`

Those names are acceptable for short-lived local scratch work, but not for the standard drafts layer.

## Usage Rules

Use `drafts/` for:

- early founder-facing writing
- staging post bundles not yet approved
- alternate versions or competing angles
- content that may later become a page, post, proof note, or handoff

Do not use `drafts/` for:

- scorecards
- roadmap decisions
- evidence logs
- owner progress reports
- durable archive of already-approved publishing assets

## Decision Rule

A file belongs in `drafts/` if the answer to this question is yes:

> Is this founder-facing content still being worked on, and could it reasonably be replaced, restructured, or discarded?

If yes, it belongs in `drafts/`.

If it has been approved as a durable founder-facing asset record, it belongs in `outputs/publishing/`.

If it is not founder-facing content, it belongs somewhere else.

## Relationship To Other Paths

Recommended roles:

- `founders/<founder-id>/...` = founder system of record
- `drafts/<founder-id>/...` = temporary founder-facing content staging
- `outputs/publishing/...` = durable approved founder-facing assets
- founder website repo = implemented or published version when relevant

This keeps the layers distinct:

- state
- staging
- durable asset
- published implementation

## Cleanup Rules

Every draft should end in one of three ways:

1. promoted into `outputs/publishing/`
2. handed off into a founder site repo for implementation
3. deleted if abandoned or superseded

The drafts layer should therefore remain intentionally temporary.
It should not become a second long-term archive of everything ever written.

## Treatment Of Existing `blogposts/`

The current top-level `blogposts/` folder should be treated as a temporary precursor to the standardized drafts layer rather than a permanent repo convention.

Under this design, the intended future state is:

- `blogposts/` disappears
- useful contents move into `drafts/wpatent/` with better names
- drafts are later promoted, implemented, or removed

## Rollout Recommendation

When implementation begins, start with:

```text
drafts/
  wpatent/
  openfor/
```

Then migrate the current W&Patent `blogposts/` bundle into `drafts/wpatent/` using date-first, type-aware names.

Do not attempt automation first.
Prove the convention manually before adding more system complexity.

## Success Criteria

The drafts-layer design is successful when:

- temporary founder-facing content has a standard home
- ad hoc top-level folders such as `blogposts/` are no longer needed
- founder provenance remains clear even in a shared repo-level staging area
- durable publishing outputs remain distinct from temporary drafts
- the system scales cleanly to additional founders and third-party founder websites
