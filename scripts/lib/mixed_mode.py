import json
from pathlib import Path


def load_json(path):
    return json.loads(Path(path).read_text())


def save_json(path, payload):
    target = Path(path)
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(json.dumps(payload, indent=2) + "\n")


def build_share_packet(
    *,
    founder_id,
    asset_id,
    asset_type,
    title,
    summary,
    allowed_channels,
    source_refs,
    exported_at,
):
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
