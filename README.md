# Anrobo Founder Discovery

A shared operating system for assessing and improving founder-led discovery across AI search, answer engines, founder authority surfaces, and supporting proof networks.

This module is designed for incubator operators and founders who need a repeatable way to:

- evaluate how a founder-led site is understood and surfaced
- compare founder sites against controls
- refresh scorecards and improvement roadmaps
- identify proof gaps
- turn internal evidence into public founder-facing outputs

## Why it exists

W&Patent started as the first deep working example.
OpenFor became the first comparison control.
This module generalizes that work into a central reusable workspace so multiple founders can be assessed without turning any one founder repo into the system of record.

## Frameworks inside this module

- `Founder-Led Discovery Spine` — the operating framework for founder identity, citation surfaces, proof, and measurement
- `Measure -> Distill -> Assert -> Publish -> Learn` — the recurring founder publishing loop

## Session Menu

Every new session should open with:

1. `Founder Intake`
2. `Discovery Audit`
3. `Scorecard Refresh`
4. `Improvement Roadmap`
5. `Proof Network Review`
6. `Comparison Control`
7. `Publishing Loop`
8. `Something else`

## Directory structure

```text
anrobo-founder-discovery/
├── CLAUDE.md
├── README.md
├── SETUP.md
├── .claude/commands/
├── agents/
├── playbooks/
├── templates/
├── schemas/
├── founders/
├── outputs/
└── received/
```

## Founder working model

Each founder gets a stable folder:

```text
founders/<founder-id>/
  profile.md
  prompts.json
  scorecard.md
  roadmap.md
  proof-network.md
  evidence/
```

This module is the shared workspace.
Founder websites or founder-owned repos can remain separate and act as downstream targets for site changes, publishing, or exports.

## Starter founder profiles

- `founders/wpatent/`
- `founders/openfor/`

These are the first two working examples:
- W&Patent as the primary case
- OpenFor as a comparison control

## Relationship to other `anrobo-os` modules

This module can eventually exchange handoffs with:

- `anrobo-marketing`
- `anrobo-bd`
- `anrobo-moat`
- `anrobo-product`

The default pattern is:
1. produce Markdown output first
2. optionally produce JSON handoffs
3. copy handoffs into another module's `received/` folder

## Setup

Start with [SETUP.md](./SETUP.md).

Minimal local setup:

```bash
python3 -m venv .venv
source .venv/bin/activate
cp .env.example .env
```

Current expected env keys:

- `EXA_API_KEY`
- `PERPLEXITY_API_KEY`
- `OPENAI_API_KEY`
