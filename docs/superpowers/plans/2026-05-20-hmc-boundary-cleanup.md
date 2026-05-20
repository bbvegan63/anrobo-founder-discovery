# HMC Site Boundary Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move discovery-ops ownership out of `hmc62843u.github.io` and into `anrobo-founder-discovery` so the site repo no longer needs provider keys or internal founder-discovery control-plane files.

**Architecture:** Execute the cleanup in phases. First move prompt-evidence ownership and its provider-keyed env expectations, then migrate comparison-control and founder-discovery skill files, then archive the old proof-flow control plane, and finally shrink the site repo tests and README to public-site concerns only. Keep the prompt-evidence runner in Node during the migration to minimize rewrite risk.

**Tech Stack:** Git, Markdown, Node.js `.mjs` tools, Python repo docs, `rg`, `git mv`, `node --test`, `python3 -m unittest`

---

### Task 1: Move prompt-evidence ownership into founder-discovery

**Files:**
- Create: `founders/wpatent/evidence/site-scorecards/README.md`
- Create: `founders/wpatent/evidence/site-scorecards/prompts.txt`
- Create: `founders/wpatent/evidence/site-scorecards/2026-05-07-wpatent-trust-chain-scorecard.md`
- Create: `founders/wpatent/evidence/site-scorecards/2026-05-07-wpatent-trust-chain-scorecard.csv`
- Create: `founders/wpatent/evidence/site-scorecards/2026-05-08-wpatent-discovery-roadmap.md`
- Create: `founders/wpatent/evidence/site-scorecards/2026-05-08-wpatent-prompt-runs.csv`
- Create: `scripts/run-prompt-evidence.mjs`
- Create: `scripts/lib/prompt-evidence.js`
- Create: `tests/prompt-evidence.test.mjs`
- Modify: `.env.example`
- Modify: `README.md`
- Remove from site repo: `docs/scorecards/`, `scripts/run-prompt-evidence.mjs`, `scripts/lib/prompt-evidence.js`, `tests/prompt-evidence.test.mjs`, `.env.example`

- [ ] **Step 1: Stage the receiving directories in founder-discovery**

Run:

```bash
mkdir -p founders/wpatent/evidence/site-scorecards
mkdir -p scripts/lib
```

Expected: the target evidence and script directories exist in `anrobo-founder-discovery`.

- [ ] **Step 2: Move the scorecard artifacts and prompt runner files**

Run:

```bash
git -C /Users/andrew/backup/work/github/hmc62843u.github.io mv docs/scorecards/README.md /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/evidence/site-scorecards/README.md
git -C /Users/andrew/backup/work/github/hmc62843u.github.io mv docs/scorecards/prompts.txt /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/evidence/site-scorecards/prompts.txt
git -C /Users/andrew/backup/work/github/hmc62843u.github.io mv docs/scorecards/2026-05-07-wpatent-trust-chain-scorecard.md /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/evidence/site-scorecards/2026-05-07-wpatent-trust-chain-scorecard.md
git -C /Users/andrew/backup/work/github/hmc62843u.github.io mv docs/scorecards/2026-05-07-wpatent-trust-chain-scorecard.csv /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/evidence/site-scorecards/2026-05-07-wpatent-trust-chain-scorecard.csv
git -C /Users/andrew/backup/work/github/hmc62843u.github.io mv docs/scorecards/2026-05-08-wpatent-discovery-roadmap.md /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/evidence/site-scorecards/2026-05-08-wpatent-discovery-roadmap.md
git -C /Users/andrew/backup/work/github/hmc62843u.github.io mv docs/scorecards/2026-05-08-wpatent-prompt-runs.csv /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/evidence/site-scorecards/2026-05-08-wpatent-prompt-runs.csv
git -C /Users/andrew/backup/work/github/hmc62843u.github.io mv scripts/run-prompt-evidence.mjs /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/scripts/run-prompt-evidence.mjs
git -C /Users/andrew/backup/work/github/hmc62843u.github.io mv scripts/lib/prompt-evidence.js /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/scripts/lib/prompt-evidence.js
git -C /Users/andrew/backup/work/github/hmc62843u.github.io mv tests/prompt-evidence.test.mjs /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/tests/prompt-evidence.test.mjs
```

Expected: the active evidence pipeline and raw evidence move into founder-discovery without content changes.

- [ ] **Step 3: Repoint the moved runner and test paths**

Update these references so they use founder-discovery paths:

```text
scripts/run-prompt-evidence.mjs
tests/prompt-evidence.test.mjs
founders/wpatent/evidence/site-scorecards/README.md
README.md
.env.example
```

Required path replacements:

```text
docs/scorecards/prompts.txt
-> founders/wpatent/evidence/site-scorecards/prompts.txt

docs/scorecards/2026-05-08-wpatent-prompt-runs.csv
-> founders/wpatent/evidence/site-scorecards/2026-05-08-wpatent-prompt-runs.csv
```

Required ownership wording:

```text
This evidence lives in anrobo-founder-discovery as founder-private or ops evidence, not in the public site repo.
```

- [ ] **Step 4: Remove site-repo key expectations**

Update or remove these site-repo files:

```text
README.md
.env.example
tests/trust-chain-scorecard.test.mjs
```

Minimum required results:

```text
- site README no longer advertises internal measurement assets
- site repo no longer ships `.env.example`
- site tests no longer assert scorecard-doc presence
```

- [ ] **Step 5: Verify the split**

Run:

```bash
rg -n "EXA_API_KEY|PERPLEXITY_API_KEY|OPENAI_API_KEY|run-prompt-evidence|docs/scorecards" /Users/andrew/backup/work/github/hmc62843u.github.io -g '!**/.git/**'
node --test /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/tests/prompt-evidence.test.mjs
```

Expected:

- no active prompt-evidence ownership remains in the site repo
- the moved runner test passes in founder-discovery

### Task 2: Move OpenFor comparison-control ownership into founder-discovery

**Files:**
- Create: `founders/openfor/evidence/comparison-controls/README.md`
- Create: `founders/openfor/evidence/comparison-controls/2026-05-19-openfor-scorecard.md`
- Create: `founders/openfor/evidence/comparison-controls/2026-05-19-openfor-identity-overview.md`
- Create: `founders/openfor/evidence/comparison-controls/2026-05-19-openfor-discovery-grounding-overview.md`
- Create: `founders/openfor/evidence/comparison-controls/2026-05-19-openfor-improvement-snapshot.md`
- Modify: `tests/trust-chain-scorecard.test.mjs`
- Modify: site `README.md`

- [ ] **Step 1: Move the comparison-control docs**

Run:

```bash
mkdir -p /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/openfor/evidence/comparison-controls
git -C /Users/andrew/backup/work/github/hmc62843u.github.io mv docs/comparison-controls/README.md /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/openfor/evidence/comparison-controls/README.md
git -C /Users/andrew/backup/work/github/hmc62843u.github.io mv docs/comparison-controls/2026-05-19-openfor-scorecard.md /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/openfor/evidence/comparison-controls/2026-05-19-openfor-scorecard.md
git -C /Users/andrew/backup/work/github/hmc62843u.github.io mv docs/comparison-controls/2026-05-19-openfor-identity-overview.md /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/openfor/evidence/comparison-controls/2026-05-19-openfor-identity-overview.md
git -C /Users/andrew/backup/work/github/hmc62843u.github.io mv docs/comparison-controls/2026-05-19-openfor-discovery-grounding-overview.md /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/openfor/evidence/comparison-controls/2026-05-19-openfor-discovery-grounding-overview.md
git -C /Users/andrew/backup/work/github/hmc62843u.github.io mv docs/comparison-controls/2026-05-19-openfor-improvement-snapshot.md /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/openfor/evidence/comparison-controls/2026-05-19-openfor-improvement-snapshot.md
```

- [ ] **Step 2: Remove site-repo comparison assertions**

Edit `tests/trust-chain-scorecard.test.mjs` so it no longer reads or asserts:

```text
docs/comparison-controls/README.md
docs/comparison-controls/2026-05-19-openfor-scorecard.md
docs/comparison-controls/2026-05-19-openfor-identity-overview.md
docs/comparison-controls/2026-05-19-openfor-discovery-grounding-overview.md
docs/comparison-controls/2026-05-19-openfor-improvement-snapshot.md
```

- [ ] **Step 3: Verify the site repo no longer owns comparison controls**

Run:

```bash
rg -n "comparison-controls|openfor-scorecard|openfor-identity-overview" /Users/andrew/backup/work/github/hmc62843u.github.io -g '!**/.git/**'
```

Expected: only historical design docs may mention them; active README/tests should not.

### Task 3: Move founder-discovery skill ownership out of the site repo

**Files:**
- Create: `received/hmc62843u-site-skill/founder-led-discovery-spine/`
- Remove from site repo: `.agents/skills/founder-led-discovery-spine/`
- Modify: any moved tests that still reference those skill files

- [ ] **Step 1: Preserve the skill bundle in founder-discovery**

Run:

```bash
mkdir -p /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/received/hmc62843u-site-skill
mv /Users/andrew/backup/work/github/hmc62843u.github.io/.agents/skills/founder-led-discovery-spine /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/received/hmc62843u-site-skill/
```

Expected: the bundle is preserved as imported legacy operating material in founder-discovery.

- [ ] **Step 2: Remove any remaining site tests that depend on the skill bundle**

Edit:

```text
tests/prompt-evidence.test.mjs
tests/proof-flow.test.mjs
```

Required result:

```text
site-repo tests no longer load files from `.agents/skills/founder-led-discovery-spine/`
```

### Task 4: Archive the legacy proof-flow control plane

**Files:**
- Create: `received/hmc62843u-site-proof-flow/`
- Remove from site repo:
  - `docs/proof-flow/`
  - `data/proof-flow/`
  - `scripts/apply-proof-sync.mjs`
  - `scripts/approve-proof-asset.mjs`
  - `scripts/build-proof-packet.mjs`
  - `scripts/create-proof-task.mjs`
  - `scripts/export-proof-sync.mjs`
  - `scripts/import-proof-feedback.mjs`
  - `scripts/record-proof-feedback.mjs`
  - `scripts/lib/proof-flow.js`
  - `tests/proof-flow.test.mjs`
  - `tests/proof-flow-mixed-mode.test.mjs`

- [ ] **Step 1: Move the legacy proof-flow docs and data into founder-discovery archive**

Run:

```bash
mkdir -p /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/received/hmc62843u-site-proof-flow
mv /Users/andrew/backup/work/github/hmc62843u.github.io/docs/proof-flow /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/received/hmc62843u-site-proof-flow/
mv /Users/andrew/backup/work/github/hmc62843u.github.io/data/proof-flow /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/received/hmc62843u-site-proof-flow/
mv /Users/andrew/backup/work/github/hmc62843u.github.io/scripts/apply-proof-sync.mjs /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/received/hmc62843u-site-proof-flow/
mv /Users/andrew/backup/work/github/hmc62843u.github.io/scripts/approve-proof-asset.mjs /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/received/hmc62843u-site-proof-flow/
mv /Users/andrew/backup/work/github/hmc62843u.github.io/scripts/build-proof-packet.mjs /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/received/hmc62843u-site-proof-flow/
mv /Users/andrew/backup/work/github/hmc62843u.github.io/scripts/create-proof-task.mjs /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/received/hmc62843u-site-proof-flow/
mv /Users/andrew/backup/work/github/hmc62843u.github.io/scripts/export-proof-sync.mjs /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/received/hmc62843u-site-proof-flow/
mv /Users/andrew/backup/work/github/hmc62843u.github.io/scripts/import-proof-feedback.mjs /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/received/hmc62843u-site-proof-flow/
mv /Users/andrew/backup/work/github/hmc62843u.github.io/scripts/record-proof-feedback.mjs /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/received/hmc62843u-site-proof-flow/
mv /Users/andrew/backup/work/github/hmc62843u.github.io/scripts/lib/proof-flow.js /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/received/hmc62843u-site-proof-flow/
mv /Users/andrew/backup/work/github/hmc62843u.github.io/tests/proof-flow.test.mjs /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/received/hmc62843u-site-proof-flow/
mv /Users/andrew/backup/work/github/hmc62843u.github.io/tests/proof-flow-mixed-mode.test.mjs /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/received/hmc62843u-site-proof-flow/
```

- [ ] **Step 2: Remove any site test imports or README references that still point at proof-flow**

Run:

```bash
rg -n "proof-flow|create-proof-task|approve-proof-asset|build-proof-packet|record-proof-feedback" /Users/andrew/backup/work/github/hmc62843u.github.io -g '!**/.git/**'
```

Expected: only intentionally retained historical planning docs may still mention proof-flow.

### Task 5: Tighten the public site identity and final verification

**Files:**
- Modify: `README.md`
- Modify: `tests/*.test.mjs` that still assert removed ops files
- Optional remove: site `.env.example`

- [ ] **Step 1: Rewrite the site README as a site-only README**

Keep only sections like:

```md
# W&Patent Static Site

## Public pages
## Starter kit
## Development
```

Remove sections like:

```md
## Internal measurement
## Comparison controls
```

- [ ] **Step 2: Run the site test suite**

Run:

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
npm test
```

Expected: site tests pass without prompt-evidence, scorecard, comparison-control, or proof-flow dependencies.

- [ ] **Step 3: Run the founder-discovery verification set**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
python3 -m unittest
node --test tests/prompt-evidence.test.mjs
```

Expected: founder-discovery passes its Python tests and the moved Node prompt-evidence test.

- [ ] **Step 4: Prove the key boundary is clean**

Run:

```bash
rg -n "EXA_API_KEY|PERPLEXITY_API_KEY|OPENAI_API_KEY|api.exa.ai|api.perplexity.ai|api.openai.com" /Users/andrew/backup/work/github/hmc62843u.github.io -g '!**/.git/**'
```

Expected: no matches in the site repo.

- [ ] **Step 5: Commit in two repos**

```bash
git -C /Users/andrew/backup/work/github/hmc62843u.github.io add .
git -C /Users/andrew/backup/work/github/hmc62843u.github.io commit -m "refactor: remove discovery ops from site repo"

git -C /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery add .
git -C /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery commit -m "feat: absorb W&Patent discovery ops boundary"
```
