import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from scripts.lib.mixed_mode import (
    apply_share_packet,
    load_community_workspace,
    load_json,
    save_community_workspace,
)


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
