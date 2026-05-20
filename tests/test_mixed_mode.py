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
            workspace.write_text(
                json.dumps(
                    {
                        "version": 1,
                        "received_sync_ids": [],
                        "shared_assets": [],
                        "feedback_events": [],
                    },
                    indent=2,
                )
                + "\n"
            )

            export_cmd = [
                "python3",
                str(ROOT / "scripts" / "export_mixed_mode_share.py"),
                "--founder-id",
                "wpatent",
                "--asset-id",
                "asset-001",
                "--asset-type",
                "case-note",
                "--title",
                "Why a startup patent strategy should protect leverage, not just generate filings",
                "--summary",
                "Protect leverage, not just filing volume.",
                "--channels",
                "linkedin-founder-post,founder-list-intro-note",
                "--source-refs",
                "https://wpatent.com/startup-patent-strategy-case-note.htm",
                "--output-dir",
                str(outbox_dir),
                "--exported-at",
                "2026-05-19T00:00:00Z",
            ]
            subprocess.run(export_cmd, check=True)

            packet_path = outbox_dir / "asset-001-share.json"
            self.assertTrue(packet_path.exists())

            apply_cmd = [
                "python3",
                str(ROOT / "scripts" / "apply_mixed_mode_share.py"),
                "--community-workspace",
                str(workspace),
                "--packet",
                str(packet_path),
            ]
            subprocess.run(apply_cmd, check=True)

            updated_workspace = json.loads(workspace.read_text())
            self.assertEqual(len(updated_workspace["shared_assets"]), 1)
            self.assertEqual(len(updated_workspace["received_sync_ids"]), 1)

            feedback_packet = inbox_dir / "feedback-001.json"
            feedback_packet.write_text(
                json.dumps(
                    {
                        "feedback_id": "feedback-001",
                        "founder_id": "wpatent",
                        "asset_id": "asset-001",
                        "source_sync_id": updated_workspace["received_sync_ids"][0],
                        "feedback_type": "reply-quality",
                        "signal_strength": "medium",
                        "notes": "Founder replied with a concrete question about what to protect first.",
                        "imported_at": "2026-05-19T01:00:00Z",
                    },
                    indent=2,
                )
                + "\n"
            )

            import_cmd = [
                "python3",
                str(ROOT / "scripts" / "import_mixed_mode_feedback.py"),
                "--founder-dir",
                str(founder_dir),
                "--packet",
                str(feedback_packet),
            ]
            subprocess.run(import_cmd, check=True)

            imported = evidence_dir / "imported-feedback" / "feedback-001.json"
            self.assertTrue(imported.exists())
            data = json.loads(imported.read_text())
            self.assertEqual(data["founder_id"], "wpatent")
            self.assertEqual(data["feedback_type"], "reply-quality")


if __name__ == "__main__":
    unittest.main()
