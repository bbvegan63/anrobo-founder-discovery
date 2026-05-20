import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

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
