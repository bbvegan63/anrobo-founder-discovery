# External Signal Loop Playbook

Use this playbook after a founder-facing asset is distributed offsite or when new response signals come back.

## Purpose

Track the offsite layer that sits between a published onsite asset and the next discovery refresh.

## What Counts As An External Signal

- LinkedIn post
- founder-list send
- YouTube video or interview
- guest article
- podcast appearance
- third-party citation or mention
- meaningful reply, repost, intro, or follow-up response

## Default Flow

1. Identify the onsite source asset or linked page.
2. Record the offsite action in `founders/<founder-id>/external-signals.md`.
3. Save or refresh structured evidence in `founders/<founder-id>/evidence/YYYY-MM-DD-external-signals.json` when the event is significant or migrated from another workspace.
4. Note whether the signal is a `distribution` event or a `response` event.
5. Refresh `proof-network.md` if the signal materially strengthens or weakens the founder's offsite reinforcement.
6. Refresh `roadmap.md` or `scorecard.md` if the signal changes what should happen next.
7. Later, rerun prompts if the signal may affect grounding or discovery.

## Reading Rule

Do not confuse `sent` with `effective`.
The first entry records that a signal exists; later entries or notes record whether it produced meaningful response or authority effects.
