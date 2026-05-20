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
