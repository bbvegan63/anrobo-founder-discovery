# Site Execution Handoff Playbook

Use this playbook when `anrobo-founder-discovery` identifies a next move that must be implemented in a founder-owned site repo.

## Core Rule

`anrobo-founder-discovery` decides and guides.  
The founder website repo builds and publishes.  
Then `anrobo-founder-discovery` records the result and refreshes evidence.

## When To Start Here

Start in `anrobo-founder-discovery` when the next move is:

- a new page
- a new proof asset
- a roadmap-driven site change
- a scorecard-driven content decision
- a cross-page authority or grounding improvement

## When It Is Reasonable To Start In The Site Repo

Start directly in the founder website repo only when the change is already decided and very small, such as:

- a small copy tweak
- a known schema fix
- a link or sitemap update
- a minor FAQ or answer-block revision

Even in those cases, return here afterward to record what changed and rerun evidence when appropriate.

## Default Flow

1. Read the founder's `roadmap.md`, `scorecard.md`, and `proof-network.md`.
2. Decide what page, proof asset, or site change should happen next.
3. Write or refresh the brief in this workspace before implementation when the change is substantial.
4. Switch to the founder website repo and build the actual page, proof note, schema, links, sitemap, and tests there.
5. Publish from the website repo.
6. Return to `anrobo-founder-discovery` and refresh the founder evidence, scorecard, and roadmap as needed.

## W&Patent Example

For W&Patent, the planning and evidence layer lives in:

- `founders/wpatent/profile.md`
- `founders/wpatent/scorecard.md`
- `founders/wpatent/roadmap.md`
- `founders/wpatent/proof-network.md`

The implementation target lives in the separate site repo:

- `/Users/andrew/backup/work/github/hmc62843u.github.io`

So the normal pattern is:

1. decide the next page or proof asset here
2. implement it in `hmc62843u.github.io`
3. come back here to rerun prompts and refresh the W&Patent founder files

## Output Expectations

For page-level work, aim to leave behind:

- a refreshed founder roadmap or evidence note here
- a published page or site change in the website repo
- a prompt rerun or comparison note if the change was discovery-relevant

## Reading Rule For Agents

Do not treat this workspace as the place where public site files are built by default.
Treat it as the operating system that decides what should happen next and keeps the evidence trail after the site repo changes go live.
