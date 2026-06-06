# Anrobo Founder Discovery

A shared operating system for assessing and improving founder-led discovery across AI search, answer engines, founder authority surfaces, supporting proof networks, and mixed-mode circulation between private founder state and shared incubator state.

This module is designed for incubator operators and founders who need a repeatable way to:

- evaluate how a founder-led site is understood and surfaced
- compare founder sites against controls
- refresh scorecards and improvement roadmaps
- identify proof gaps
- track external distribution and response signals
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
├── community/
├── playbooks/
├── scripts/
├── sync/
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
  external-signals.md
  evidence/
```

This module is the shared workspace.
Founder websites or founder-owned repos can remain separate and act as downstream targets for site changes, publishing, or exports.
Approved founder assets can also circulate into a shared incubator layer without replacing the private founder folders as the system of record.

## Cross-repo execution flow

For substantial site work, the default rule is:

`anrobo-founder-discovery` decides and guides.  
The founder website repo builds and publishes.  
Then `anrobo-founder-discovery` records the result and refreshes evidence.

That means new pages, new proof assets, and roadmap-driven site changes should usually start here, move into the founder website repo for implementation, and then return here for scorecard and roadmap refreshes.

## Starter founder profiles

- `founders/wpatent/`
- `founders/openfor/`

These are the first two working examples:
- W&Patent as the primary case
- OpenFor as a comparison control

For W&Patent specifically, the downstream implementation target is:
- `/Users/andrew/backup/work/github/hmc62843u.github.io`

The W&Patent prompt-evidence and scorecard inputs now live here:
- `founders/wpatent/evidence/site-scorecards/`
- `scripts/run-prompt-evidence.mjs`

That evidence is founder-private or ops evidence, not part of the public site repo.
The standard rerun command is:

```bash
node --env-file=.env.local scripts/run-prompt-evidence.mjs --include-exa
```

For a development comparison run that includes the local OAuth-backed OpenAI path:

```bash
node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --include-exa --include-dev
```

For a cleaner local diagnostic run that uses only the OAuth-backed OpenAI lane:

```bash
node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --only-openai-local-oauth
```

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
