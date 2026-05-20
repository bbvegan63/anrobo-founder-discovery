# External Signal Tracker Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a lightweight external-signal tracker to `anrobo-founder-discovery` so offsite distributions and response signals can be recorded inside the central module instead of remaining split across older W&Patent-only proof-flow files.

**Architecture:** Add one small structured layer and one small human-readable layer. The structured layer is a schema plus per-founder JSON evidence file for migrated external signal records. The human-readable layer is a per-founder `external-signals.md` file plus a playbook, agent note, and command so future agents know how to log LinkedIn posts, founder-list sends, YouTube appearances, and other offsite signals.

**Tech Stack:** Markdown, JSON, JSON Schema, Python `unittest` for file-and-structure verification

---

### Task 1: Add a failing module test for external-signal support

**Files:**
- Create: `tests/test_external_signals.py`

- [ ] **Step 1: Write the failing test**

```python
import json
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


class ExternalSignalTrackerTests(unittest.TestCase):
    def test_external_signal_schema_exists_and_parses(self):
        path = ROOT / "schemas" / "external-signal.v1.schema.json"
        self.assertTrue(path.exists(), f"Missing schema: {path}")
        data = json.loads(path.read_text())
        self.assertEqual(data.get("title"), "External Signal Log")

    def test_wpatent_external_signal_log_exists(self):
        path = ROOT / "founders" / "wpatent" / "external-signals.md"
        self.assertTrue(path.exists(), f"Missing log: {path}")
        text = path.read_text()
        self.assertIn("asset-001", text)
        self.assertIn("LinkedIn", text)
        self.assertIn("founder list", text)

    def test_wpatent_external_signal_evidence_exists(self):
        path = ROOT / "founders" / "wpatent" / "evidence" / "2026-05-19-external-signals.json"
        self.assertTrue(path.exists(), f"Missing evidence: {path}")
        data = json.loads(path.read_text())
        self.assertEqual(data.get("founder_id"), "wpatent")
        self.assertEqual(len(data.get("records", [])), 2)
```

- [ ] **Step 2: Run test to verify it fails**

Run: `python3 -m unittest tests.test_external_signals -v`
Expected: FAIL because the schema, W&Patent external-signal log, and evidence file do not exist yet.

- [ ] **Step 3: Commit**

```bash
git add tests/test_external_signals.py
git commit -m "test: add failing external signal tracker checks"
```

### Task 2: Add the minimal external-signal tracker layer

**Files:**
- Create: `schemas/external-signal.v1.schema.json`
- Create: `agents/external-signals.md`
- Create: `playbooks/external-signal-loop.md`
- Create: `.claude/commands/external-signal-loop.md`
- Create: `founders/wpatent/external-signals.md`
- Create: `founders/wpatent/evidence/2026-05-19-external-signals.json`
- Modify: `founders/wpatent/proof-network.md`
- Modify: `CLAUDE.md`
- Modify: `README.md`
- Modify: `SETUP.md`

- [ ] **Step 1: Write the structured schema**

Add a top-level JSON schema with `version`, `founder_id`, and a `records` array that supports:
- `id`
- `asset_id`
- `source_workspace`
- `channel`
- `signal_type`
- `visibility`
- `status`
- `published_at`
- `recorded_at`
- `source_url`
- `notes`
- `response_status`

- [ ] **Step 2: Write the agent, playbook, and command**

Create concise files that explain:
- how external signals relate to proof and publishing
- which kinds of channels count
- how to log a send or publish event
- how to refresh the founder proof network and roadmap afterward

- [ ] **Step 3: Migrate the W&Patent baseline**

Create `founders/wpatent/external-signals.md` and `founders/wpatent/evidence/2026-05-19-external-signals.json` with two baseline records migrated from the older W&Patent proof-flow workspace:
- `asset-001` LinkedIn founder post
- `asset-001` founder-list intro note

Use `2026-05-19` as the migration record date and clearly note that these are migrated records from the older workspace.

- [ ] **Step 4: Update module docs**

Add external-signal support to the founder folder contract and relevant module docs so future agents know the tracker is part of the standard founder state.

- [ ] **Step 5: Commit**

```bash
git add schemas/external-signal.v1.schema.json \
  agents/external-signals.md \
  playbooks/external-signal-loop.md \
  .claude/commands/external-signal-loop.md \
  founders/wpatent/external-signals.md \
  founders/wpatent/evidence/2026-05-19-external-signals.json \
  founders/wpatent/proof-network.md \
  CLAUDE.md README.md SETUP.md
git commit -m "feat: add external signal tracker"
```

### Task 3: Turn the failing test green

**Files:**
- Modify: `tests/test_external_signals.py`

- [ ] **Step 1: Run the test again**

Run: `python3 -m unittest tests.test_external_signals -v`
Expected: PASS after the tracker files are present.

- [ ] **Step 2: Add any minimal assertions needed for migrated records**

If the first green run reveals a missing but useful contract, add the smallest extra assertion needed for:
- two migrated records
- channels `linkedin-founder-post` and `founder-list-intro-note`
- response status `pending`

- [ ] **Step 3: Run the test again**

Run: `python3 -m unittest tests.test_external_signals -v`
Expected: PASS with no errors.

- [ ] **Step 4: Commit**

```bash
git add tests/test_external_signals.py
git commit -m "test: verify external signal tracker"
```
