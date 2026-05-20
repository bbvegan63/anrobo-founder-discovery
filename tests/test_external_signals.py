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
        records = data.get("records", [])
        self.assertEqual(len(records), 2)
        channels = {record["channel"] for record in records}
        self.assertEqual(channels, {"linkedin-founder-post", "founder-list-intro-note"})
        self.assertTrue(all(record["response_status"] == "pending" for record in records))


if __name__ == "__main__":
    unittest.main()
