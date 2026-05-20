# Mixed-Mode Sync Playbook

Use this playbook when approved founder assets need shared incubator circulation or when selected shared feedback should move back into founder evidence.

## Flow

1. Confirm the asset is approved for sharing.
2. Export a share packet into `sync/outbox/`.
3. Apply the share packet to `community/workspace.json`.
4. Move selected feedback into `sync/inbox/`.
5. Import the feedback packet into the founder's `evidence/imported-feedback/` folder.
6. Refresh `external-signals.md`, `proof-network.md`, or `roadmap.md` if the imported feedback changes what should happen next.
