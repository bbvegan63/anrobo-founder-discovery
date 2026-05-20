# Anrobo Founder Discovery — Setup & Recovery

## What this folder is

This is the Anrobo Founder Discovery workspace — a central shared module for founder intake, discovery audits, prompt packs, scorecards, comparison controls, proof networks, and founder publishing loops.

It is meant to be reused across multiple founder-led sites, not tied to a single domain.

## Quick start

```bash
cd anrobo-founder-discovery
python3 -m venv .venv
source .venv/bin/activate
cp .env.example .env
```

Expected local env keys:

- `EXA_API_KEY`
- `PERPLEXITY_API_KEY`
- `OPENAI_API_KEY`

## Folder structure

```text
anrobo-founder-discovery/
├── CLAUDE.md                           ← Orchestrator — loads on every session
├── SETUP.md                            ← This file
├── README.md                           ← User-facing overview
├── .gitignore
├── .env.example                        ← Local env template
├── .claude/commands/
│   ├── founder-intake.md               ← /founder-intake
│   ├── discovery-audit.md              ← /discovery-audit
│   ├── scorecard-refresh.md            ← /scorecard-refresh
│   ├── improvement-roadmap.md          ← /improvement-roadmap
│   ├── proof-network-review.md         ← /proof-network-review
│   ├── comparison-control.md           ← /comparison-control
│   └── publishing-loop.md              ← /publishing-loop
├── agents/                             ← Core operating knowledge (BACKUP THIS)
├── playbooks/                          ← Repeatable workflows (BACKUP THIS)
├── templates/                          ← Reusable founder and comparison templates (BACKUP THIS)
├── schemas/                            ← JSON schema reference copies (BACKUP THIS)
├── founders/                           ← Per-founder working state
│   ├── wpatent/
│   └── openfor/
├── outputs/
│   ├── scorecards/
│   ├── comparisons/
│   ├── publishing/
│   └── handoffs/
└── received/
```

## Minimum backup set

The `agents/`, `playbooks/`, `templates/`, and `schemas/` folders contain the reusable operating logic.
Those should be considered the minimum system backup set.

The `founders/` folder contains working state and should also be backed up if you want to preserve current founder profiles.

## Recreate prompt

Use this prompt in Claude Code from the `anrobo-founder-discovery/` directory after restoring the backup files.

---

You are restoring the Anrobo Founder Discovery workspace from backup.
The reusable operating files in `agents/`, `playbooks/`, `templates/`, and `schemas/` are already present.
Recreate the top-level orchestration files and session commands.

**`CLAUDE.md`** should:
- frame this module as a shared operating system for founder-led discovery
- open every session with a menu:
  [1] Founder Intake
  [2] Discovery Audit
  [3] Scorecard Refresh
  [4] Improvement Roadmap
  [5] Proof Network Review
  [6] Comparison Control
  [7] Publishing Loop
  [8] Something else
- use one-question-at-a-time interview flows
- define the agent roster, playbook roster, founder folder contract, output conventions, and handoff protocol
- reference `Founder-Led Discovery Spine` and `Measure -> Distill -> Assert -> Publish -> Learn`

**`README.md`** should:
- explain what this module is for
- explain why it exists as a central shared workspace
- describe its relationship to founder repos and the rest of `anrobo-os`
- summarize the session menu and directory structure

**Command files** in `.claude/commands/` should:
- route to the matching agent and playbook
- define required inputs
- define output file paths
- avoid external skill tool invocations

**Style conventions:**
- Markdown-first
- JSON only for prompt packs, schemas, or handoffs
- file naming `YYYY-MM-DD-[type]-[founder-or-topic].md`
- no external skill tool invocations

---

## Notes

This module is intentionally central and cross-founder.
It should not assume that founder websites live inside the same repo.
