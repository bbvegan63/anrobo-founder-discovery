# Anrobo Founder Discovery Bootstrap Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bootstrap a reusable `anrobo-founder-discovery` module inside `anrobo-os` with an orchestrator, shared workflows, templates, schemas, and starter founder profiles for W&Patent and OpenFor.

**Architecture:** Create a standalone sibling workspace that mirrors the existing `anrobo-os` module pattern. Keep the module file-based and human-readable: `CLAUDE.md` orchestrates session flows, `agents/` and `playbooks/` define reusable operating routines, `templates/` and `schemas/` define repeatable artifacts, and `founders/` holds per-founder working state.

**Tech Stack:** Markdown docs, JSON schemas, JSON prompt/profile files, filesystem conventions, optional local git repository.

---

## File Structure

**Create**

- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/CLAUDE.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/README.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/SETUP.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/.gitignore`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/.claude/commands/founder-intake.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/.claude/commands/discovery-audit.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/.claude/commands/scorecard-refresh.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/.claude/commands/improvement-roadmap.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/.claude/commands/proof-network-review.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/.claude/commands/comparison-control.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/.claude/commands/publishing-loop.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/agents/intake.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/agents/discovery.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/agents/scorecards.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/agents/proof-network.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/agents/comparison-controls.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/agents/publishing-loop.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/playbooks/founder-intake.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/playbooks/prompt-runs.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/playbooks/scorecard-refresh.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/playbooks/roadmap-refresh.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/playbooks/comparison-control.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/playbooks/founder-post-loop.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/templates/founder-scorecard-template.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/templates/founder-roadmap-template.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/templates/comparison-scorecard-template.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/templates/prompt-pack-template.json`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/templates/proof-network-template.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/templates/publishing-brief-template.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/schemas/founder-profile.v1.schema.json`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/schemas/prompt-pack.v1.schema.json`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/schemas/scorecard-summary.v1.schema.json`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/schemas/roadmap-item.v1.schema.json`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/profile.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/prompts.json`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/scorecard.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/roadmap.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/proof-network.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/openfor/profile.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/openfor/prompts.json`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/openfor/scorecard.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/openfor/roadmap.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/openfor/proof-network.md`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/outputs/.gitkeep`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/outputs/scorecards/.gitkeep`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/outputs/comparisons/.gitkeep`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/outputs/publishing/.gitkeep`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/outputs/handoffs/.gitkeep`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/received/.gitkeep`
- `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/docs/superpowers/plans/2026-05-19-anrobo-founder-discovery-bootstrap.md`

## Task 1: Scaffold the workspace skeleton

**Files:**
- Create: module root directories and `.gitignore`

- [ ] **Step 1: Create the directory skeleton**

Run:

```bash
mkdir -p \
  /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/.claude/commands \
  /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/agents \
  /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/playbooks \
  /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/templates \
  /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/schemas \
  /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/evidence \
  /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/openfor/evidence \
  /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/outputs/scorecards \
  /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/outputs/comparisons \
  /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/outputs/publishing \
  /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/outputs/handoffs \
  /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/received
```

Expected: directories created with no output

- [ ] **Step 2: Add `.gitignore` and placeholder keep files**

Implementation: add `.gitignore` covering `.DS_Store`, `.env`, `.env.*`, and keep `outputs/` / `received/` subfolders with `.gitkeep`.

- [ ] **Step 3: Verify the skeleton exists**

Run:

```bash
find /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery -maxdepth 3 -type d | sort
```

Expected: lists `.claude/commands`, `agents`, `playbooks`, `templates`, `schemas`, `founders`, `outputs`, and `received`

## Task 2: Write the top-level operator docs

**Files:**
- Create: `CLAUDE.md`, `README.md`, `SETUP.md`

- [ ] **Step 1: Write `CLAUDE.md`**

Include:
- mission
- session start menu with 8 options
- one-question-at-a-time interview flows
- agent roster
- playbook roster
- output conventions
- handoff protocol

- [ ] **Step 2: Write `README.md`**

Include:
- what the module is
- how it fits with `anrobo-os`
- session menu summary
- directory structure
- relationship to founder repos vs central workspace

- [ ] **Step 3: Write `SETUP.md`**

Include:
- what the folder is
- folder map
- minimum backup set
- recreate prompt for the module

- [ ] **Step 4: Verify the docs contain the expected anchors**

Run:

```bash
rg -n "Founder Intake|Discovery Audit|Comparison Control|Founder-Led Discovery Spine|outputs/handoffs" /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/{CLAUDE.md,README.md,SETUP.md}
```

Expected: matches across the three files

## Task 3: Add commands, agents, and playbooks

**Files:**
- Create: `.claude/commands/*.md`, `agents/*.md`, `playbooks/*.md`

- [ ] **Step 1: Write command files**

Each command should:
- say which agent/playbook to read first
- define required inputs
- define the output file path

- [ ] **Step 2: Write agent files**

Each agent file should start with:

```md
You are the Anrobo Founder Discovery [specialist]...
```

and define:
- role
- inputs
- output shape
- what not to overclaim

- [ ] **Step 3: Write playbook files**

Each playbook should turn one workflow into a repeatable, step-by-step routine.

- [ ] **Step 4: Verify all command and agent docs are present**

Run:

```bash
find /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/.claude/commands -maxdepth 1 -type f | wc -l
find /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/agents -maxdepth 1 -type f | wc -l
find /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/playbooks -maxdepth 1 -type f | wc -l
```

Expected: `7`, `6`, and `6`

## Task 4: Add templates and schemas

**Files:**
- Create: `templates/*`, `schemas/*.json`

- [ ] **Step 1: Write markdown templates**

Templates should cover:
- founder scorecard
- founder roadmap
- comparison scorecard
- proof network
- publishing brief

- [ ] **Step 2: Write the prompt-pack template JSON**

It should model:
- founder metadata
- broad prompts
- narrow prompts
- branded control prompts
- reading rules

- [ ] **Step 3: Write JSON schemas**

Schemas should define:
- founder profile
- prompt pack
- scorecard summary
- roadmap item

- [ ] **Step 4: Parse all JSON schemas and JSON templates**

Run:

```bash
python3 - <<'PY'
import json, pathlib
root = pathlib.Path('/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery')
for path in list((root / 'schemas').glob('*.json')) + list((root / 'templates').glob('*.json')):
    json.loads(path.read_text())
    print(path.name, 'OK')
PY
```

Expected: one `OK` line per JSON file, no exceptions

## Task 5: Seed the W&Patent and OpenFor founder profiles

**Files:**
- Create: `founders/wpatent/*`, `founders/openfor/*`

- [ ] **Step 1: Write `profile.md` files**

Each profile should define:
- founder
- site/domain
- intended topics
- current interpretation
- known strengths
- known weaknesses

- [ ] **Step 2: Write `prompts.json` files**

Seed W&Patent from the existing prompt tiers and OpenFor from the comparison-control tiers.

- [ ] **Step 3: Write `scorecard.md`, `roadmap.md`, and `proof-network.md`**

Use the templates but prefill with the current known working state.

- [ ] **Step 4: Verify founder folders are complete**

Run:

```bash
find /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders -maxdepth 2 -type f | sort
```

Expected: each founder folder contains `profile.md`, `prompts.json`, `scorecard.md`, `roadmap.md`, and `proof-network.md`

## Task 6: Final verification and optional repo initialization

**Files:**
- Verify whole module

- [ ] **Step 1: Run a workspace smoke check**

Run:

```bash
rg -n "Anrobo Founder Discovery|Founder-Led Discovery Spine|Comparison Control|Measure -> Distill -> Assert -> Publish -> Learn" /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
```

Expected: matches in top-level docs, agents, and playbooks

- [ ] **Step 2: Initialize a local git repository if one does not exist**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery && git init
```

Expected: `.git/` created locally

- [ ] **Step 3: Stage and commit the bootstrap**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery && git add . && git commit -m "feat: bootstrap founder discovery module"
```

Expected: initial local commit created

- [ ] **Step 4: Report any intentionally uncommitted external artifacts**

Note that unrelated work outside this module, such as older prompt-run CSV snapshots in other repos, stays out of this bootstrap.
