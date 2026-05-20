# W&Patent Defensibility Proof Note Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Draft the next W&Patent proof-note brief in `anrobo-founder-discovery` and refresh the founder records so the site-repo handoff is explicit.

**Architecture:** Keep planning and draft content inside `anrobo-founder-discovery`. Create one founder-facing brief in `outputs/publishing/`, then refresh `founders/wpatent/roadmap.md` and `founders/wpatent/proof-network.md` so both docs point to the drafted asset and the next step becomes site-repo implementation. Do not edit the public site repo in this plan.

**Tech Stack:** Markdown, repository conventions, `rg`, `sed`, `git`

---

### Task 1: Create the founder-facing proof-note brief

**Files:**
- Create: `outputs/publishing/2026-05-20-proof-note-wpatent-defensibility-choice.md`
- Reference: `templates/publishing-brief-template.md`
- Reference: `founders/wpatent/evidence/2026-05-19-next-moves.md`
- Reference: `founders/wpatent/evidence/imported-feedback/feedback-asset-001-founder-list-question.json`

- [ ] **Step 1: Draft the publishing-brief structure**

```md
# Publishing Brief

> **Founder:** W&Patent
> **Date:** 2026-05-20
> **Output type:** ProofNote
> **Status:** Drafted in founder-discovery before site-repo implementation

## Measured insight

## Distilled lesson

## Founder point of view

## Draft
```

- [ ] **Step 2: Write the founder-facing draft body**

```md
### Working title
When founders should choose patents, open licensing, or other defensibility strategies

### Draft note
Most founders do not need a belief system about patents. They need a way to decide what kind of defensibility actually supports the business they are building.
```

- [ ] **Step 3: Verify the brief sections exist**

Run:

```bash
rg -n "^# Publishing Brief|^## Measured insight|^## Distilled lesson|^## Founder point of view|^## Draft" outputs/publishing/2026-05-20-proof-note-wpatent-defensibility-choice.md
```

Expected: five matching section headers in the new file.

- [ ] **Step 4: Review the tone and cross-linking**

Run:

```bash
sed -n '1,220p' outputs/publishing/2026-05-20-proof-note-wpatent-defensibility-choice.md
```

Expected: the note stays practical, non-ideological, and points back to the startup patent strategy surface.

- [ ] **Step 5: Commit**

```bash
git add outputs/publishing/2026-05-20-proof-note-wpatent-defensibility-choice.md
git commit -m "docs: draft W&Patent defensibility proof note"
```

### Task 2: Refresh W&Patent operating docs

**Files:**
- Modify: `founders/wpatent/roadmap.md`
- Modify: `founders/wpatent/proof-network.md`
- Reference: `outputs/publishing/2026-05-20-proof-note-wpatent-defensibility-choice.md`

- [ ] **Step 1: Add execution status to the roadmap**

```md
## Current execution status

- `2026-05-20`: draft proof-note brief saved to `outputs/publishing/2026-05-20-proof-note-wpatent-defensibility-choice.md`
- next site-repo step: implement the note as a small public proof asset in `/Users/andrew/backup/work/github/hmc62843u.github.io`
```

- [ ] **Step 2: Add an in-progress asset section to the proof network**

```md
## In-progress asset

- `2026-05-20` proof-note brief drafted in `outputs/publishing/2026-05-20-proof-note-wpatent-defensibility-choice.md`
- job: answer the imported founder-list question practically without turning it into a broad ideology debate
```

- [ ] **Step 3: Verify the new references**

Run:

```bash
rg -n "2026-05-20|proof-note|outputs/publishing" founders/wpatent/roadmap.md founders/wpatent/proof-network.md
```

Expected: both files reference the new drafted asset and the next step.

- [ ] **Step 4: Re-read both founder docs**

Run:

```bash
sed -n '1,220p' founders/wpatent/roadmap.md
sed -n '1,220p' founders/wpatent/proof-network.md
```

Expected: both docs still distinguish between live proof and unpublished draft state.

- [ ] **Step 5: Commit**

```bash
git add founders/wpatent/roadmap.md founders/wpatent/proof-network.md
git commit -m "docs: record W&Patent proof note handoff"
```

### Task 3: Capture the design-and-plan trail and verify the final state

**Files:**
- Create: `docs/superpowers/specs/2026-05-20-wpatent-defensibility-proof-note-design.md`
- Create: `docs/superpowers/plans/2026-05-20-wpatent-defensibility-proof-note.md`
- Review: repo status and diffs

- [ ] **Step 1: Save the approved design spec**

```md
# W&Patent Defensibility Proof Note Design
```

- [ ] **Step 2: Save the implementation plan**

```md
# W&Patent Defensibility Proof Note Implementation Plan
```

- [ ] **Step 3: Verify the final change set**

Run:

```bash
git status --short
git diff --stat
```

Expected: only the spec, plan, proof-note brief, and founder record updates are present before commit, or the worktree is clean after commit.

- [ ] **Step 4: Re-read the spec against the brief**

Run:

```bash
sed -n '1,240p' docs/superpowers/specs/2026-05-20-wpatent-defensibility-proof-note-design.md
printf '\n---\n'
sed -n '1,240p' outputs/publishing/2026-05-20-proof-note-wpatent-defensibility-choice.md
```

Expected: the drafted brief matches the approved proof-note shape and guardrails.

- [ ] **Step 5: Commit**

```bash
git add docs/superpowers/specs/2026-05-20-wpatent-defensibility-proof-note-design.md docs/superpowers/plans/2026-05-20-wpatent-defensibility-proof-note.md
git commit -m "docs: capture W&Patent proof note design and plan"
```
