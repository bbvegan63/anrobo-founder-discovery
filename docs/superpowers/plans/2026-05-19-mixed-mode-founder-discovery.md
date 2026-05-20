# Mixed-Mode Founder Discovery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a mixed-mode v1 layer to `anrobo-founder-discovery` so private founder state can selectively sync approved assets outward to a shared incubator layer and import selected feedback back as founder evidence.

**Architecture:** Keep the current `founders/` folders as the private layer, add new `community/` and `sync/` folders as the shared and transport layers, and implement packet-based sync with small Python scripts and a pure-Python helper library. Use `unittest` with temp directories to verify export, apply-share, and import-feedback behavior without mutating the real workspace during tests.

**Tech Stack:** Python 3 standard library, Markdown, JSON, JSON Schema

---

## File Structure

### New files

- `scripts/__init__.py`
- `scripts/lib/__init__.py`
- `scripts/lib/mixed_mode.py`
- `scripts/export_mixed_mode_share.py`
- `scripts/apply_mixed_mode_share.py`
- `scripts/import_mixed_mode_feedback.py`
- `community/workspace.json`
- `community/shared-assets/.gitkeep`
- `community/feedback/.gitkeep`
- `sync/outbox/.gitkeep`
- `sync/inbox/.gitkeep`
- `schemas/share-packet.v1.schema.json`
- `schemas/feedback-packet.v1.schema.json`
- `agents/mixed-mode.md`
- `playbooks/mixed-mode-sync.md`
- `.claude/commands/mixed-mode-sync.md`
- `tests/test_mixed_mode.py`

### Modified files

- `CLAUDE.md`
- `README.md`
- `SETUP.md`
- `founders/wpatent/external-signals.md`

The main implementation boundary is:
- `scripts/lib/mixed_mode.py` owns pure packet/workspace logic
- `scripts/*.py` own CLI wrappers
- `community/` owns approved shared state
- `sync/` owns packet movement
- docs wire the new layer into the module

---

### Task 1: Add the failing mixed-mode test suite

**Files:**
- Create: `tests/test_mixed_mode.py`

- [ ] **Step 1: Write the failing test**

```python
import json
import subprocess
import tempfile
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


class MixedModeTests(unittest.TestCase):
    def test_mixed_mode_files_exist(self):
        self.assertTrue((ROOT / "community" / "workspace.json").exists())
        self.assertTrue((ROOT / "schemas" / "share-packet.v1.schema.json").exists())
        self.assertTrue((ROOT / "schemas" / "feedback-packet.v1.schema.json").exists())
        self.assertTrue((ROOT / "playbooks" / "mixed-mode-sync.md").exists())
        self.assertTrue((ROOT / ".claude" / "commands" / "mixed-mode-sync.md").exists())

    def test_share_and_feedback_schemas_parse(self):
        for relative in (
            "schemas/share-packet.v1.schema.json",
            "schemas/feedback-packet.v1.schema.json",
            "community/workspace.json",
        ):
            json.loads((ROOT / relative).read_text())

    def test_export_apply_and_import_flow(self):
        with tempfile.TemporaryDirectory() as tmp:
            tmp_path = Path(tmp)
            workspace = tmp_path / "community-workspace.json"
            founder_dir = tmp_path / "founders" / "wpatent"
            evidence_dir = founder_dir / "evidence"
            outbox_dir = tmp_path / "outbox"
            inbox_dir = tmp_path / "inbox"
            workspace.parent.mkdir(parents=True, exist_ok=True)
            founder_dir.mkdir(parents=True, exist_ok=True)
            evidence_dir.mkdir(parents=True, exist_ok=True)
            outbox_dir.mkdir(parents=True, exist_ok=True)
            inbox_dir.mkdir(parents=True, exist_ok=True)
            workspace.write_text(json.dumps({
                "version": 1,
                "received_sync_ids": [],
                "shared_assets": [],
                "feedback_events": []
            }, indent=2) + "\\n")

            export_cmd = [
                "python3",
                str(ROOT / "scripts" / "export_mixed_mode_share.py"),
                "--founder-id", "wpatent",
                "--asset-id", "asset-001",
                "--asset-type", "case-note",
                "--title", "Why a startup patent strategy should protect leverage, not just generate filings",
                "--summary", "Protect leverage, not just filing volume.",
                "--channels", "linkedin-founder-post,founder-list-intro-note",
                "--source-refs", "https://wpatent.com/startup-patent-strategy-case-note.htm",
                "--output-dir", str(outbox_dir),
                "--exported-at", "2026-05-19T00:00:00Z"
            ]
            subprocess.run(export_cmd, check=True)

            packet_path = outbox_dir / "asset-001-share.json"
            self.assertTrue(packet_path.exists())

            apply_cmd = [
                "python3",
                str(ROOT / "scripts" / "apply_mixed_mode_share.py"),
                "--community-workspace", str(workspace),
                "--packet", str(packet_path)
            ]
            subprocess.run(apply_cmd, check=True)

            updated_workspace = json.loads(workspace.read_text())
            self.assertEqual(len(updated_workspace["shared_assets"]), 1)
            self.assertEqual(len(updated_workspace["received_sync_ids"]), 1)

            feedback_packet = inbox_dir / "feedback-001.json"
            feedback_packet.write_text(json.dumps({
                "feedback_id": "feedback-001",
                "founder_id": "wpatent",
                "asset_id": "asset-001",
                "source_sync_id": updated_workspace["received_sync_ids"][0],
                "feedback_type": "reply-quality",
                "signal_strength": "medium",
                "notes": "Founder replied with a concrete question about what to protect first.",
                "imported_at": "2026-05-19T01:00:00Z"
            }, indent=2) + "\\n")

            import_cmd = [
                "python3",
                str(ROOT / "scripts" / "import_mixed_mode_feedback.py"),
                "--founder-dir", str(founder_dir),
                "--packet", str(feedback_packet)
            ]
            subprocess.run(import_cmd, check=True)

            imported = evidence_dir / "imported-feedback" / "feedback-001.json"
            self.assertTrue(imported.exists())
            data = json.loads(imported.read_text())
            self.assertEqual(data["founder_id"], "wpatent")
            self.assertEqual(data["feedback_type"], "reply-quality")
```

- [ ] **Step 2: Run test to verify it fails**

Run: `python3 -m unittest tests.test_mixed_mode -v`
Expected: FAIL because mixed-mode files, schemas, and scripts do not exist yet.

- [ ] **Step 3: Commit**

```bash
git add tests/test_mixed_mode.py
git commit -m "test: add failing mixed mode checks"
```

### Task 2: Implement the pure Python mixed-mode library and workspace scaffolding

**Files:**
- Create: `scripts/__init__.py`
- Create: `scripts/lib/__init__.py`
- Create: `scripts/lib/mixed_mode.py`
- Create: `community/workspace.json`
- Create: `community/shared-assets/.gitkeep`
- Create: `community/feedback/.gitkeep`
- Create: `sync/outbox/.gitkeep`
- Create: `sync/inbox/.gitkeep`
- Create: `schemas/share-packet.v1.schema.json`
- Create: `schemas/feedback-packet.v1.schema.json`

- [ ] **Step 1: Add package markers**

Create `scripts/__init__.py` and `scripts/lib/__init__.py` with:

```python
# Package marker for mixed-mode scripts.
```

- [ ] **Step 2: Add the mixed-mode helper library**

Create `scripts/lib/mixed_mode.py` with:

```python
import json
from pathlib import Path


def load_json(path):
    return json.loads(Path(path).read_text())


def save_json(path, payload):
    target = Path(path)
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(json.dumps(payload, indent=2) + "\\n")


def build_share_packet(*, founder_id, asset_id, asset_type, title, summary, allowed_channels, source_refs, exported_at):
    sync_id = f"{asset_id}--{exported_at.replace(':', '-').replace('.', '-')}"
    return {
        "sync_id": sync_id,
        "founder_id": founder_id,
        "asset_id": asset_id,
        "asset_type": asset_type,
        "title": title,
        "summary": summary,
        "allowed_channels": allowed_channels,
        "source_refs": source_refs,
        "exported_at": exported_at,
    }


def load_community_workspace(path):
    return load_json(path)


def save_community_workspace(path, workspace):
    save_json(path, workspace)


def apply_share_packet(workspace, packet):
    sync_id = packet["sync_id"]
    if sync_id in workspace["received_sync_ids"]:
        return {"community_workspace": workspace, "duplicated": True}

    workspace["received_sync_ids"].append(sync_id)
    workspace["shared_assets"].append(packet)
    return {"community_workspace": workspace, "duplicated": False}


def import_feedback_packet(founder_dir, packet):
    founder_path = Path(founder_dir)
    feedback_dir = founder_path / "evidence" / "imported-feedback"
    feedback_dir.mkdir(parents=True, exist_ok=True)
    target = feedback_dir / f"{packet['feedback_id']}.json"
    save_json(target, packet)
    return target
```

- [ ] **Step 3: Add the shared workspace and sync folders**

Create `community/workspace.json` with:

```json
{
  "version": 1,
  "received_sync_ids": [],
  "shared_assets": [],
  "feedback_events": []
}
```

Create empty marker files:

```text
community/shared-assets/.gitkeep
community/feedback/.gitkeep
sync/outbox/.gitkeep
sync/inbox/.gitkeep
```

- [ ] **Step 4: Add the packet schemas**

Create `schemas/share-packet.v1.schema.json` with:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "anrobo-share-packet.v1.schema.json",
  "title": "Share Packet",
  "type": "object",
  "required": [
    "sync_id",
    "founder_id",
    "asset_id",
    "asset_type",
    "title",
    "summary",
    "allowed_channels",
    "source_refs",
    "exported_at"
  ],
  "properties": {
    "sync_id": { "type": "string" },
    "founder_id": { "type": "string" },
    "asset_id": { "type": "string" },
    "asset_type": { "type": "string" },
    "title": { "type": "string" },
    "summary": { "type": "string" },
    "allowed_channels": { "type": "array", "items": { "type": "string" } },
    "source_refs": { "type": "array", "items": { "type": "string" } },
    "exported_at": { "type": "string" }
  },
  "additionalProperties": false
}
```

Create `schemas/feedback-packet.v1.schema.json` with:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "anrobo-feedback-packet.v1.schema.json",
  "title": "Feedback Packet",
  "type": "object",
  "required": [
    "feedback_id",
    "founder_id",
    "asset_id",
    "source_sync_id",
    "feedback_type",
    "signal_strength",
    "notes",
    "imported_at"
  ],
  "properties": {
    "feedback_id": { "type": "string" },
    "founder_id": { "type": "string" },
    "asset_id": { "type": "string" },
    "source_sync_id": { "type": "string" },
    "feedback_type": { "type": "string" },
    "signal_strength": { "type": "string" },
    "notes": { "type": "string" },
    "imported_at": { "type": "string" }
  },
  "additionalProperties": false
}
```

- [ ] **Step 5: Commit**

```bash
git add scripts/__init__.py scripts/lib/__init__.py scripts/lib/mixed_mode.py \
  community/workspace.json community/shared-assets/.gitkeep community/feedback/.gitkeep \
  sync/outbox/.gitkeep sync/inbox/.gitkeep \
  schemas/share-packet.v1.schema.json schemas/feedback-packet.v1.schema.json
git commit -m "feat: add mixed mode core library and schemas"
```

### Task 3: Add the CLI entrypoints

**Files:**
- Create: `scripts/export_mixed_mode_share.py`
- Create: `scripts/apply_mixed_mode_share.py`
- Create: `scripts/import_mixed_mode_feedback.py`

- [ ] **Step 1: Add the export CLI**

Create `scripts/export_mixed_mode_share.py` with:

```python
import sys
from pathlib import Path

from scripts.lib.mixed_mode import build_share_packet, save_json


def read_args(argv):
    args = {}
    index = 1
    while index < len(argv):
        args[argv[index]] = argv[index + 1]
        index += 2
    return args


args = read_args(sys.argv)
channels = [item.strip() for item in args["--channels"].split(",") if item.strip()]
source_refs = [item.strip() for item in args["--source-refs"].split(",") if item.strip()]
packet = build_share_packet(
    founder_id=args["--founder-id"],
    asset_id=args["--asset-id"],
    asset_type=args["--asset-type"],
    title=args["--title"],
    summary=args["--summary"],
    allowed_channels=channels,
    source_refs=source_refs,
    exported_at=args["--exported-at"],
)
output_dir = Path(args["--output-dir"])
output_dir.mkdir(parents=True, exist_ok=True)
target = output_dir / f"{args['--asset-id']}-share.json"
save_json(target, packet)
print(f"Exported {packet['sync_id']} to {target}.")
```

- [ ] **Step 2: Add the apply-share CLI**

Create `scripts/apply_mixed_mode_share.py` with:

```python
import sys

from scripts.lib.mixed_mode import apply_share_packet, load_community_workspace, load_json, save_community_workspace


def read_args(argv):
    args = {}
    index = 1
    while index < len(argv):
        args[argv[index]] = argv[index + 1]
        index += 2
    return args


args = read_args(sys.argv)
workspace = load_community_workspace(args["--community-workspace"])
packet = load_json(args["--packet"])
result = apply_share_packet(workspace, packet)
save_community_workspace(args["--community-workspace"], result["community_workspace"])
print(
    f"Skipped duplicate sync {packet['sync_id']}."
    if result["duplicated"]
    else f"Applied sync {packet['sync_id']}."
)
```

- [ ] **Step 3: Add the import-feedback CLI**

Create `scripts/import_mixed_mode_feedback.py` with:

```python
import sys

from scripts.lib.mixed_mode import import_feedback_packet, load_json


def read_args(argv):
    args = {}
    index = 1
    while index < len(argv):
        args[argv[index]] = argv[index + 1]
        index += 2
    return args


args = read_args(sys.argv)
packet = load_json(args["--packet"])
target = import_feedback_packet(args["--founder-dir"], packet)
print(f"Imported feedback packet to {target}.")
```

- [ ] **Step 4: Commit**

```bash
git add scripts/export_mixed_mode_share.py scripts/apply_mixed_mode_share.py scripts/import_mixed_mode_feedback.py
git commit -m "feat: add mixed mode sync scripts"
```

### Task 4: Wire the mixed-mode docs and command surface

**Files:**
- Create: `agents/mixed-mode.md`
- Create: `playbooks/mixed-mode-sync.md`
- Create: `.claude/commands/mixed-mode-sync.md`
- Modify: `CLAUDE.md`
- Modify: `README.md`
- Modify: `SETUP.md`
- Modify: `founders/wpatent/external-signals.md`

- [ ] **Step 1: Add the agent note**

Create `agents/mixed-mode.md` with:

```md
# Mixed Mode Agent

You are the Anrobo Founder Discovery mixed-mode specialist.
Your role is to move approved assets outward into shared incubator state and import selected feedback back as founder evidence.

## Inputs

- founder id
- approved asset metadata
- allowed channels
- selected feedback packet

## Outputs

- share packet
- updated community workspace
- imported feedback evidence

## Rules

- private founder files stay private by default
- only approved assets sync outward
- only selected feedback syncs back inward
- founder folders remain the system of record
```

- [ ] **Step 2: Add the playbook**

Create `playbooks/mixed-mode-sync.md` with:

```md
# Mixed-Mode Sync Playbook

Use this playbook when approved founder assets need shared incubator circulation or when selected shared feedback should move back into founder evidence.

## Flow

1. Confirm the asset is approved for sharing.
2. Export a share packet into `sync/outbox/`.
3. Apply the share packet to `community/workspace.json`.
4. Move selected feedback into `sync/inbox/`.
5. Import the feedback packet into the founder's `evidence/imported-feedback/` folder.
6. Refresh `external-signals.md`, `proof-network.md`, or `roadmap.md` if the imported feedback changes what should happen next.
```

- [ ] **Step 3: Add the command file**

Create `.claude/commands/mixed-mode-sync.md` with:

```md
# /mixed-mode-sync

Read `agents/mixed-mode.md` and `playbooks/mixed-mode-sync.md` first.

Gather one question at a time:
1. founder profile
2. approved asset or feedback packet
3. whether this is an outward sync or inward feedback import

Produce:
- `sync/outbox/*.json` for share packets
- `community/workspace.json` updates for applied shares
- `founders/<founder-id>/evidence/imported-feedback/*.json` for imported feedback
```

- [ ] **Step 4: Update the module docs**

Modify `README.md`, `CLAUDE.md`, and `SETUP.md` to:
- mention `community/` and `sync/` in the directory structure
- mention the mixed-mode layer in the overview
- add the agent/playbook/command references
- keep the rule that the founder folder remains the system of record

Modify `founders/wpatent/external-signals.md` to add a short note that shared/community feedback may later be imported under `evidence/imported-feedback/`.

- [ ] **Step 5: Commit**

```bash
git add agents/mixed-mode.md playbooks/mixed-mode-sync.md .claude/commands/mixed-mode-sync.md \
  CLAUDE.md README.md SETUP.md founders/wpatent/external-signals.md
git commit -m "docs: add mixed mode workflow"
```

### Task 5: Turn the mixed-mode tests green and verify the full flow

**Files:**
- Modify: `tests/test_mixed_mode.py`

- [ ] **Step 1: Run the new mixed-mode tests**

Run: `python3 -m unittest tests.test_mixed_mode -v`
Expected: PASS

- [ ] **Step 2: Run the existing external-signal tests too**

Run: `python3 -m unittest tests.test_external_signals tests.test_mixed_mode -v`
Expected: PASS

- [ ] **Step 3: Verify the repo shape**

Run: `find community sync scripts -maxdepth 2 -type f | sort`
Expected to include:
- `community/workspace.json`
- `scripts/lib/mixed_mode.py`
- `scripts/export_mixed_mode_share.py`
- `scripts/apply_mixed_mode_share.py`
- `scripts/import_mixed_mode_feedback.py`
- `schemas/share-packet.v1.schema.json`
- `schemas/feedback-packet.v1.schema.json`

- [ ] **Step 4: Commit**

```bash
git add tests/test_mixed_mode.py
git commit -m "test: verify mixed mode founder discovery"
```
