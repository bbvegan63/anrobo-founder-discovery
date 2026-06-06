# Founder Progress Report Design

> **Date:** 2026-06-06
> **Module:** `anrobo-founder-discovery`
> **Status:** Approved design for owner-facing reporting layer

## Purpose

Add a periodic progress-report layer for founder website owners such as W&Patent and OpenFor.

The report should:

- give each owner a short readable summary of current discovery progress
- translate internal operator evidence into owner-facing language
- show score movement when a prior report exists
- preserve a dated history of meaningful checkpoints

The report should not replace the existing working files.
It should sit above them as a synthesis layer.

This reporting layer is intended to be reusable across additional third-party founder websites and founder profiles as they are added to `anrobo-founder-discovery`.
W&Patent and OpenFor are the initial working examples, not the limit of the design.

## Current Context

Each founder already has a stable working structure:

- `profile.md`
- `scorecard.md`
- `roadmap.md`
- `proof-network.md`
- `external-signals.md`
- `evidence/`

Those files are useful for operators and agents, but they are not optimized for website owners who want a compact answer to:

- where do things stand now
- what changed recently
- what is still blocked
- what should happen next

## Scope

This design covers:

- report audience
- report cadence
- report storage location
- report structure
- relationship to existing founder files

This design does not cover:

- dashboard UI
- cross-founder comparison reporting
- automated report generation
- any implementation beyond the written design

## Audience

The report is for the founder website owner.

It should therefore be hybrid:

- owner-readable first
- evidence-backed second

The top of the report should be plain English and decision-oriented.
The bottom of the report can point back to scorecards, evidence notes, and live pages.

## Options

### Option 1: Keep using `scorecard.md` and `roadmap.md` only

**Pros**

- no new files
- lowest maintenance

**Cons**

- still too operator-oriented
- weak for owner communication
- does not create a clean reporting history

### Option 2: Per-founder dated reports

Each founder gets a `reports/` folder with dated Markdown files.

**Pros**

- readable owner-facing history
- easy to issue after meaningful events
- fits the existing founder folder model
- avoids adding a dashboard system too early

**Cons**

- adds one more artifact type to maintain
- needs lightweight issuance rules to avoid noisy reports

### Option 3: Shared incubator-wide report

Create one comparison report across W&Patent, OpenFor, and future founders.

**Pros**

- useful later for portfolio review
- supports cross-founder comparison

**Cons**

- wrong first layer for individual owners
- adds comparison pressure before each founder report format is stable
- more coordination than current needs justify

## Recommendation

Choose **Option 2: Per-founder dated reports**.

This is the cleanest fit for the current founder-discovery structure and the most useful shape for owner communication right now.

## Target Structure

Each founder gets:

```text
founders/<founder-id>/
  reports/
    YYYY-MM-DD-progress-report.md
```

Examples:

- `founders/wpatent/reports/YYYY-MM-DD-progress-report.md`
- `founders/openfor/reports/YYYY-MM-DD-progress-report.md`

## Cadence

Use a mixed cadence:

### Monthly report

Issue one at a monthly checkpoint even if movement was modest.

Purpose:

- preserve continuity
- avoid long silent gaps
- give owners a regular state read

### Event-triggered report

Issue one only after a meaningful change, such as:

- a page or asset publish that creates a new citation surface
- a score refresh
- a live prompt-evidence rerun
- a major roadmap shift
- a meaningful external-signal change

Purpose:

- capture decision checkpoints
- explain whether the latest work moved the read

### Do not issue a report for

- tiny housekeeping-only repo changes
- tooling refactors with no change in founder read
- small copy cleanup without a meaningful measurement update

## Report Structure

Each report should follow a stable template:

### 1. Executive Summary

Short owner-facing summary of:

- what changed
- whether progress improved, stayed flat, or regressed
- what matters most right now

### 2. Current Status

Compact snapshot of:

- current total score
- most important current category reads
- headline interpretation in plain English

### 3. What Changed Since Last Report

Include only meaningful deltas such as:

- pages published
- evidence reruns
- score changes
- founder-linkage improvements
- external signal changes
- tooling changes that materially improve confidence in the read

### 4. Evidence Highlights

Summarize only the highest-signal findings.

Example style:

- first non-branded citation appeared
- founder naming is still absent
- Trust Chain still drifts toward TLS interpretation

### 5. Current Blockers

Name the main factors limiting progress.

Typical blockers may include:

- missing provider coverage
- weak entity naming
- ambiguous topic interpretation
- thin external proof
- low repeated citation across topic clusters

### 6. Next Recommended Moves

List the next two to four actions in owner-readable language.

### 7. Reference Links

Point back to:

- `scorecard.md`
- `roadmap.md`
- latest evidence note
- relevant live pages or assets

## Relationship To Existing Files

The new report layer should not become a second system of record.

Recommended roles:

- `scorecard.md` = working score source
- `roadmap.md` = working action source
- `proof-network.md` = proof inventory and proof gaps
- `external-signals.md` = live distribution or response evidence
- `evidence/*.md` = detailed measurement trail
- `reports/*.md` = owner-facing synthesis

## Before/After Treatment

The report should include explicit deltas, but only at a compact level.

Recommended format:

- current total score
- prior report total score
- score delta when a prior report exists
- two to four meaningful category deltas when available

Example:

- `Current score: 55/100`
- `Prior report: 52/100`
- `Change: +3`
- `Main shift: Broad Discovery improved from 0/20 to 2/20 after Exa produced the first non-branded W&Patent citation`

Do not embed the full raw worksheet inside the report.
Detailed before/after evidence should remain in scorecards and evidence notes.

## First Report Rule

The first report for a founder should establish the reporting baseline rather than pretending a longer report history already exists.

So the first report should:

- state that it is the baseline owner report
- summarize current status
- list key evidence to date
- identify current blockers
- recommend the next moves

It does not need a delta section if no prior owner report exists.

## W&Patent And OpenFor Fit

This reporting layer is appropriate for both current founders:

- W&Patent as the main deep working example
- OpenFor as the comparison control

Both already have the file structure needed to support synthesis without adding a dashboard or cross-founder reporting layer first.
They should be treated as the first examples of a general per-founder reporting pattern that can extend to future founder websites and profiles.

## Success Criteria

The design is successful when:

- each founder can receive a readable dated report without replacing internal working files
- owners can quickly understand current progress and next moves
- reports are grounded in existing scorecards and evidence rather than ad hoc summaries
- monthly and event-triggered reports can coexist without creating noise
- the system scales to additional founders and third-party founder websites without redesign

## Recommended First Implementation

When implementation begins, start by creating:

- `founders/wpatent/reports/`
- `founders/openfor/reports/`

Then create one baseline report for each founder using the approved template.

Do not build shared dashboards, cross-founder comparisons, or automation first.
Prove the per-founder Markdown reporting format manually before adding more system complexity.
