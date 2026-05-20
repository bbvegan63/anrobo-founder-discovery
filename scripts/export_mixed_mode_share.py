import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

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
