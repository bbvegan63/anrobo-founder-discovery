# W&Patent Cluster Post Quick Answer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a readable `Quick answer` block to the three W&Patent cluster posts, keep the approved source assets aligned, and push the resulting site changes.

**Architecture:** Treat the live site pages as the behavior layer and the `outputs/publishing/` markdown files as the editorial source layer. Lock the behavior first with failing site tests, then add the `Quick answer` blocks immediately below each lead in both layers, verify the full site suite, and push only the site repo.

**Tech Stack:** Static HTML, Markdown source files, Node test runner, git

---

### Task 1: Add the failing site tests

**Files:**
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/support-pages.test.mjs`

- [ ] **Step 1: Add assertions for the new Quick answer block on all three posts**

Add checks that each live post:
- includes a visible `Quick answer` heading
- places it high on the page
- contains the literal topic phrase in the quick-answer copy

- [ ] **Step 2: Run the focused test slice and confirm it fails**

Run:

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
node --test tests/support-pages.test.mjs
```

Expected:
- failing assertions because `Quick answer` does not exist yet

### Task 2: Update the approved source assets

**Files:**
- Modify: `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/outputs/publishing/2026-06-07-post-provisional-vs-nda-editorial-reset.md`
- Modify: `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/outputs/publishing/2026-06-07-post-provisional-and-poc-budget-editorial-reset.md`
- Modify: `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/outputs/publishing/2026-06-07-post-draw-first-write-second-editorial-reset.md`

- [ ] **Step 1: Insert a `## Quick answer` section immediately below the lead in each source file**

Content rules:
- 2 to 4 sentences
- literal topic phrase in sentence 1
- concise founder-language answer
- no bullets
- no FAQ structure

- [ ] **Step 2: Verify the source edits are clean**

Run:

```bash
git -C /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery diff --check -- \
  outputs/publishing/2026-06-07-post-provisional-vs-nda-editorial-reset.md \
  outputs/publishing/2026-06-07-post-provisional-and-poc-budget-editorial-reset.md \
  outputs/publishing/2026-06-07-post-draw-first-write-second-editorial-reset.md
```

Expected:
- no diff-check errors

### Task 3: Update the live site pages

**Files:**
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/provisional-vs-nda.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/poc-and-provisional.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/draw-first-write-second.htm`

- [ ] **Step 1: Add the `Quick answer` block immediately below each lead**

Placement rule:
- inside `.article-body`
- before the first existing body paragraph

Content rules:
- match the approved source asset wording
- keep normal article styling
- no callout box

- [ ] **Step 2: Re-run the focused test slice and confirm it passes**

Run:

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
node --test tests/support-pages.test.mjs
```

Expected:
- all tests pass

### Task 4: Run full verification and push the site repo

**Files:**
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/support-pages.test.mjs`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/provisional-vs-nda.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/poc-and-provisional.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/draw-first-write-second.htm`

- [ ] **Step 1: Run full site verification**

Run:

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
npm test
git diff --check
```

Expected:
- `npm test` passes with 0 failures
- `git diff --check` is clean

- [ ] **Step 2: Commit the site repo changes**

Run:

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
git add tests/support-pages.test.mjs provisional-vs-nda.htm poc-and-provisional.htm draw-first-write-second.htm
git commit -m "feat: add quick answers to W&Patent cluster posts"
```

- [ ] **Step 3: Push the site repo**

Run:

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
git push origin master
```

Expected:
- remote accepts the new site commit

### Task 5: Commit the plan and source-asset updates in founder-discovery

**Files:**
- Create: `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/docs/superpowers/plans/2026-06-08-wpatent-cluster-post-quick-answer.md`
- Modify: `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/outputs/publishing/2026-06-07-post-provisional-vs-nda-editorial-reset.md`
- Modify: `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/outputs/publishing/2026-06-07-post-provisional-and-poc-budget-editorial-reset.md`
- Modify: `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/outputs/publishing/2026-06-07-post-draw-first-write-second-editorial-reset.md`

- [ ] **Step 1: Commit only the plan and source files**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git add \
  docs/superpowers/plans/2026-06-08-wpatent-cluster-post-quick-answer.md \
  outputs/publishing/2026-06-07-post-provisional-vs-nda-editorial-reset.md \
  outputs/publishing/2026-06-07-post-provisional-and-poc-budget-editorial-reset.md \
  outputs/publishing/2026-06-07-post-draw-first-write-second-editorial-reset.md
git commit -m "docs: add W&Patent quick-answer source updates"
```

- [ ] **Step 2: Leave unrelated founder-discovery dirty state untouched**

Verify:
- no other files are staged accidentally
