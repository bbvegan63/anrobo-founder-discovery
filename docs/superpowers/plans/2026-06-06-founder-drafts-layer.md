# Founder Drafts Layer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Standardize a shared repo-level `drafts/` layer for temporary founder-facing content, update repo conventions to document it, and migrate the current W&Patent `blogposts/` bundle into `drafts/wpatent/`.

**Architecture:** Add the drafts convention to the module’s durable documentation first so the boundary is explicit. Then add one lightweight test and a local `drafts/README.md` guardrail. Finally, migrate the untracked W&Patent draft bundle into `drafts/wpatent/` with date-first names and corrected internal links, leaving `outputs/publishing/` as the durable approved-asset layer and the founder site repo untouched.

**Tech Stack:** Markdown, Node test runner, repository conventions, `rg`, `sed`, `git`

---

### Task 1: Document the shared drafts convention

**Files:**
- Modify: `CLAUDE.md`
- Modify: `README.md`
- Modify: `agents/publishing-loop.md`
- Modify: `playbooks/founder-post-loop.md`

- [ ] **Step 1: Update the Publishing Loop flow and output conventions in `CLAUDE.md`**

Use these exact additions:

```md
Then: read `agents/publishing-loop.md` and `playbooks/founder-post-loop.md`. Draft in-progress founder-facing assets in `drafts/<founder-id>/`. Promote approved founder posts, case notes, and proof notes into `outputs/publishing/`.
If the asset is actually published or sent offsite, also read `agents/external-signals.md` and `playbooks/external-signal-loop.md` to log the distribution or response signal.
```

and:

```md
- temporary founder-facing drafts -> `drafts/<founder-id>/`
- founder posts, case notes, and proof notes -> `outputs/publishing/`
```

- [ ] **Step 2: Add the drafts layer to the root README**

Use these exact snippets:

```md
anrobo-founder-discovery/
├── drafts/
```
```

and:

```md
In-progress founder-facing writing can stage in `drafts/<founder-id>/`.
Approved founder-facing assets belong in `outputs/publishing/`.
```

- [ ] **Step 3: Clarify the publishing agent boundary**

Update `agents/publishing-loop.md` to include:

```md
## Outputs

- in-progress founder-facing drafts in `drafts/<founder-id>/`
- approved founder post
- approved case note
- approved proof note
- approved intro note

## Rules

- draft in `drafts/<founder-id>/` while content is still being shaped
- move the approved asset record into `outputs/publishing/` before site-repo or offsite handoff
```

- [ ] **Step 4: Clarify the publishing playbook sequence**

Update `playbooks/founder-post-loop.md` to use this sequence:

```md
1. Measure using scorecards, prompt evidence, and proof signals.
2. Distill one clear lesson.
3. Assert the founder's point of view.
4. Draft the founder-facing asset in `drafts/<founder-id>/`.
5. Promote the approved version to `outputs/publishing/`.
6. Publish the idea as a post, note, or proof asset.
7. Log the offsite distribution or response in the external-signal tracker when the asset actually goes out.
8. Learn from response signals and feed them back into the next score refresh.
```

- [ ] **Step 5: Verify the documentation references**

Run:

```bash
rg -n "drafts/<founder-id>|outputs/publishing" CLAUDE.md README.md agents/publishing-loop.md playbooks/founder-post-loop.md
```

Expected: all four files reference the new drafts layer and preserve `outputs/publishing/` as the approved-output destination.

- [ ] **Step 6: Commit**

```bash
git add CLAUDE.md README.md agents/publishing-loop.md playbooks/founder-post-loop.md
git commit -m "docs: document shared founder drafts staging"
```

### Task 2: Add the local drafts guardrails and test coverage

**Files:**
- Create: `drafts/README.md`
- Create: `drafts/openfor/.gitkeep`
- Create: `tests/founder-drafts.test.mjs`

- [ ] **Step 1: Create the drafts README**

Create `drafts/README.md` with this complete content:

```md
# Drafts

This folder stages temporary founder-facing content that is still being worked on.

Use:

- `drafts/<founder-id>/YYYY-MM-DD-[type]-[topic].md`

Examples:

- `drafts/wpatent/2026-06-06-post-provisional-vs-nda.md`
- `drafts/openfor/2026-06-06-post-solo-founder-ai.md`

Use this folder for:

- early founder-facing writing
- alternate angles or competing versions
- page-draft bundles
- content that may still be replaced, restructured, or discarded

Do not use this folder for:

- scorecards
- roadmap decisions
- evidence logs
- owner progress reports
- durable archive of already-approved publishing assets

Approved founder-facing assets belong in `outputs/publishing/`.
Implemented or published versions belong in the relevant founder website repo when applicable.

Each draft should eventually be:

1. promoted into `outputs/publishing/`
2. handed off to a founder site repo for implementation
3. deleted if abandoned or superseded
```

- [ ] **Step 2: Create the OpenFor drafts folder skeleton**

Run:

```bash
mkdir -p drafts/openfor
touch drafts/openfor/.gitkeep
```

Expected: `drafts/openfor/.gitkeep` exists so the shared drafts layer includes both current founders.

- [ ] **Step 3: Add a lightweight convention test**

Create `tests/founder-drafts.test.mjs` with this complete content:

```js
import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

function read(relativePath) {
  return readFileSync(new URL(`../${relativePath}`, import.meta.url), "utf8");
}

test("founder-discovery documents the shared drafts staging layer", () => {
  assert.equal(existsSync(new URL("../drafts/README.md", import.meta.url)), true);

  const claude = read("CLAUDE.md");
  const rootReadme = read("README.md");
  const draftsReadme = read("drafts/README.md");

  assert.match(claude, /drafts\/<founder-id>\//i);
  assert.match(claude, /outputs\/publishing/i);
  assert.match(rootReadme, /drafts\/<founder-id>\//i);
  assert.match(draftsReadme, /temporary founder-facing content/i);
  assert.match(draftsReadme, /outputs\/publishing/i);
});
```

- [ ] **Step 4: Run the Node tests with the new file included**

Run:

```bash
node --test tests/prompt-evidence.test.mjs tests/boundary-archive.test.mjs tests/founder-drafts.test.mjs
```

Expected: all tests pass, including the new drafts convention checks.

- [ ] **Step 5: Commit**

```bash
git add drafts/README.md drafts/openfor/.gitkeep tests/founder-drafts.test.mjs
git commit -m "test: add founder drafts convention guardrails"
```

### Task 3: Migrate the W&Patent blogpost bundle into `drafts/wpatent/`

**Files:**
- Create: `drafts/wpatent/2026-06-06-pillar-startup-patent-strategy.md`
- Create: `drafts/wpatent/2026-06-06-post-provisional-vs-nda.md`
- Create: `drafts/wpatent/2026-06-06-post-draw-first-write-second.md`
- Create: `drafts/wpatent/2026-06-06-post-provisional-and-poc-budget.md`
- Remove local staging source: `blogposts/pillar.md`
- Remove local staging source: `blogposts/post1.md`
- Remove local staging source: `blogposts/post2.md`
- Remove local staging source: `blogposts/post3.md`

- [ ] **Step 1: Create the W&Patent drafts folder and move the files into their final names**

Run:

```bash
mkdir -p drafts/wpatent
mv blogposts/pillar.md drafts/wpatent/2026-06-06-pillar-startup-patent-strategy.md
mv blogposts/post1.md drafts/wpatent/2026-06-06-post-provisional-vs-nda.md
mv blogposts/post2.md drafts/wpatent/2026-06-06-post-draw-first-write-second.md
mv blogposts/post3.md drafts/wpatent/2026-06-06-post-provisional-and-poc-budget.md
rmdir blogposts
```

Expected: `blogposts/` no longer exists, and all four files now live in `drafts/wpatent/`.

- [ ] **Step 2: Update the pillar-page links to the new filenames**

In `drafts/wpatent/2026-06-06-pillar-startup-patent-strategy.md`, replace the three cross-links with these exact lines:

```md
**The full argument:** [Provisional + NDA: Why the $60 Filing Beats the NDA Every Time](2026-06-06-post-provisional-vs-nda.md)
```

```md
**The full argument:** [Draw First. Write Second. Claim Third.](2026-06-06-post-draw-first-write-second.md)
```

```md
**The full argument:** [Provisional + POC on a Limited Budget](2026-06-06-post-provisional-and-poc-budget.md)
```

- [ ] **Step 3: Update the post cross-links back to the renamed pillar and sibling posts**

Use these exact intro lines:

In `drafts/wpatent/2026-06-06-post-provisional-vs-nda.md`:

```md
*This is part of a series on startup patent strategy. For the full framework, start with the [Startup Patent Strategy Pillar](2026-06-06-pillar-startup-patent-strategy.md), then read [Draw First. Write Second. Claim Third.](2026-06-06-post-draw-first-write-second.md) and [Provisional + POC on a Limited Budget](2026-06-06-post-provisional-and-poc-budget.md).*
```

In `drafts/wpatent/2026-06-06-post-draw-first-write-second.md`:

```md
*This is part of a series on startup patent strategy. For the full framework, start with the [Startup Patent Strategy Pillar](2026-06-06-pillar-startup-patent-strategy.md), then read [Provisional + NDA: Why the $60 Filing Beats the NDA Every Time](2026-06-06-post-provisional-vs-nda.md) and [Provisional + POC on a Limited Budget](2026-06-06-post-provisional-and-poc-budget.md).*
```

In `drafts/wpatent/2026-06-06-post-provisional-and-poc-budget.md`:

```md
*This is part of a series on startup patent strategy. For the full framework, start with the [Startup Patent Strategy Pillar](2026-06-06-pillar-startup-patent-strategy.md), then read [Provisional + NDA: Why the $60 Filing Beats the NDA Every Time](2026-06-06-post-provisional-vs-nda.md) and [Draw First. Write Second. Claim Third.](2026-06-06-post-draw-first-write-second.md).*
```

- [ ] **Step 4: Verify that no stale `blogposts` links remain**

Run:

```bash
rg -n "blogposts/|pillar\\.md|post1\\.md|post2\\.md|post3\\.md" drafts/wpatent
```

Expected: no matches.

- [ ] **Step 5: Preview the migrated draft bundle**

Run:

```bash
sed -n '1,120p' drafts/wpatent/2026-06-06-pillar-startup-patent-strategy.md
sed -n '1,80p' drafts/wpatent/2026-06-06-post-provisional-vs-nda.md
sed -n '1,80p' drafts/wpatent/2026-06-06-post-draw-first-write-second.md
sed -n '1,80p' drafts/wpatent/2026-06-06-post-provisional-and-poc-budget.md
```

Expected: all four drafts keep their original content but now use date-first names and valid sibling links.

- [ ] **Step 6: Commit**

```bash
git add drafts/wpatent
git commit -m "docs: migrate W&Patent drafts into shared staging"
```

### Task 4: Run the full verification pass and confirm the final boundary

**Files:**
- Review: `CLAUDE.md`
- Review: `README.md`
- Review: `drafts/README.md`
- Review: `drafts/wpatent/*`
- Review: `tests/founder-drafts.test.mjs`

- [ ] **Step 1: Re-run the Node documentation tests**

Run:

```bash
node --test tests/prompt-evidence.test.mjs tests/boundary-archive.test.mjs tests/founder-drafts.test.mjs
```

Expected: all Node tests pass.

- [ ] **Step 2: Re-run the Python test suite**

Run:

```bash
python3 -m unittest discover -s tests -p 'test_*.py'
```

Expected: the existing Python suite still passes unchanged.

- [ ] **Step 3: Verify repo hygiene**

Run:

```bash
git diff --check
git status --short --untracked-files=all
```

Expected: no diff-format errors and no leftover `blogposts/` files.

- [ ] **Step 4: Confirm the new structure**

Run:

```bash
find drafts -maxdepth 2 \\( -type f -o -type d \\) | sort
```

Expected: the repo contains `drafts/README.md`, `drafts/openfor/.gitkeep`, and the four W&Patent draft files under `drafts/wpatent/`.

- [ ] **Step 5: Final commit if any verification-driven doc tweak was needed**

```bash
git add CLAUDE.md README.md agents/publishing-loop.md playbooks/founder-post-loop.md drafts tests
git commit -m "docs: finalize founder drafts layer rollout"
```

Expected: skip this commit if the prior task commits already leave the worktree clean after verification.
