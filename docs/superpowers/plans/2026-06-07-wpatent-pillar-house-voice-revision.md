# W&Patent Pillar House Voice Revision Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Revise the W&Patent flagship pillar so the source Markdown and live strategy page share a sharper, cleaner founder-language house voice without changing the approved editorial-reset structure.

**Architecture:** Work in isolated founder-discovery and site worktrees. First normalize and strengthen the source Markdown in founder-discovery, then map that revision into `startup-patent-strategy.htm`, updating only the page content and tests that assert the pillar copy. Keep the week-0 editorial-reset structure, nav, and retired-page behavior intact.

**Tech Stack:** Markdown, HTML, JSON-LD, Node test runner, git worktrees

---

## File Map

**Founder-discovery repo**

- Create: `docs/superpowers/plans/2026-06-07-wpatent-pillar-house-voice-revision.md`
- Modify: `outputs/publishing/2026-06-07-pillar-startup-patent-strategy.md`

**Site repo**

- Modify: `startup-patent-strategy.htm`
- Modify: `tests/support-pages.test.mjs`

**Notes**

- The current working draft in the main founder-discovery checkout already contains useful repetition cleanup, but it drifted from the approved headline. Use that draft as the sentence-level baseline while restoring the approved sharper title unless the user changes direction later.
- Do not broaden scope into the weekly posts, homepage, services page, or retired support pages.

### Task 1: Re-establish the source-of-truth pillar in founder-discovery

**Files:**
- Modify: `outputs/publishing/2026-06-07-pillar-startup-patent-strategy.md`

- [ ] **Step 1: Verify isolated worktrees and current baseline**

Run:

```bash
git -C /Users/andrew/.config/superpowers/worktrees/anrobo-founder-discovery/wpatent-pillar-house-voice-revision status --short --branch
git -C /Users/andrew/.config/superpowers/worktrees/hmc62843u.github.io/wpatent-pillar-house-voice-site status --short --branch
sed -n '1,220p' /Users/andrew/.config/superpowers/worktrees/anrobo-founder-discovery/wpatent-pillar-house-voice-revision/outputs/publishing/2026-06-07-pillar-startup-patent-strategy.md
```

Expected:

- founder-discovery worktree shows the copied draft as modified
- site worktree is clean against `origin/master`
- the current draft reflects the other agent’s tightening pass

- [ ] **Step 2: Rewrite the pillar Markdown line by line**

Update `outputs/publishing/2026-06-07-pillar-startup-patent-strategy.md` so it:

- restores the approved headline `What Every Patent Practitioner Knows But Won't Tell Founders`
- keeps the approved section list exactly:
  - `Opening Thesis`
  - `Provisional Before NDA`
  - `Draw First. Write Second.`
  - `Build And File In Parallel`
  - `The Unifying Founder Strategy`
  - `One-Paragraph Summary`
  - `Warning & Disclaimer`
- keeps the sharper founder-brief energy
- reduces semantic repetition around `founder language`, `leverage`, and `optionality`
- sounds like one confident Andrew-led argument rather than stitched notes
- avoids unsupported institutional-intent or overbroad systemic claims

Required editorial outcomes:

- the lead becomes more immediate and founder-problem-first
- the opening compresses the mismatch between founder constraints and patent process
- each core section clearly follows:
  1. what founders are usually told
  2. why that is incomplete
  3. what matters more
- the summary lands as a founder operating rule instead of a softer re-introduction

- [ ] **Step 3: Verify the revised Markdown**

Run:

```bash
git -C /Users/andrew/.config/superpowers/worktrees/anrobo-founder-discovery/wpatent-pillar-house-voice-revision diff --check -- outputs/publishing/2026-06-07-pillar-startup-patent-strategy.md
printf 'Andrew\\x27s view is that: '; rg -o "Andrew's view is that" /Users/andrew/.config/superpowers/worktrees/anrobo-founder-discovery/wpatent-pillar-house-voice-revision/outputs/publishing/2026-06-07-pillar-startup-patent-strategy.md | wc -l
printf 'Founders are often told: '; rg -o "Founders are often told" /Users/andrew/.config/superpowers/worktrees/anrobo-founder-discovery/wpatent-pillar-house-voice-revision/outputs/publishing/2026-06-07-pillar-startup-patent-strategy.md | wc -l
printf 'founder language: '; rg -oi "founder language" /Users/andrew/.config/superpowers/worktrees/anrobo-founder-discovery/wpatent-pillar-house-voice-revision/outputs/publishing/2026-06-07-pillar-startup-patent-strategy.md | wc -l
printf 'leverage: '; rg -oi "leverage" /Users/andrew/.config/superpowers/worktrees/anrobo-founder-discovery/wpatent-pillar-house-voice-revision/outputs/publishing/2026-06-07-pillar-startup-patent-strategy.md | wc -l
printf 'optionality: '; rg -oi "optionality" /Users/andrew/.config/superpowers/worktrees/anrobo-founder-discovery/wpatent-pillar-house-voice-revision/outputs/publishing/2026-06-07-pillar-startup-patent-strategy.md | wc -l
```

Expected:

- `git diff --check` is clean
- the repeated-phrase counts are lower or no worse than the current baseline
- the copy still clearly contains the approved section structure

- [ ] **Step 4: Commit the source-of-truth revision**

```bash
git -C /Users/andrew/.config/superpowers/worktrees/anrobo-founder-discovery/wpatent-pillar-house-voice-revision add outputs/publishing/2026-06-07-pillar-startup-patent-strategy.md docs/superpowers/plans/2026-06-07-wpatent-pillar-house-voice-revision.md
git -C /Users/andrew/.config/superpowers/worktrees/anrobo-founder-discovery/wpatent-pillar-house-voice-revision commit -m "docs: revise W&Patent pillar house voice"
```

### Task 2: Align the live strategy page to the revised pillar

**Files:**
- Modify: `startup-patent-strategy.htm`
- Modify: `tests/support-pages.test.mjs`

- [ ] **Step 1: Map the revised pillar into the live strategy page**

Update `startup-patent-strategy.htm` so it reflects the revised source Markdown while preserving:

- canonical URL
- article shell
- nav structure
- JSON-LD `Organization`, `Person`, and `Article` support
- current CTA block unless the revised copy requires minor wording cleanup

Required alignment rules:

- the visible H1 should match the revised source headline
- the lead should match the revised source tone
- the body sections should stay in the approved order
- the page should continue to avoid Trust Chain and open-licensing links in the primary article body

- [ ] **Step 2: Update the support-page assertions**

Adjust `tests/support-pages.test.mjs` so the strategy-page test asserts the new revised copy rather than the older week-0 wording.

At minimum, keep assertions for:

- the final H1
- the revised lead / opening signal
- presence of the core section headings
- absence of `trust-chain.htm` and `patent-strategy-open-licensing.htm` links
- retained `Warning & Disclaimer`

- [ ] **Step 3: Verify the site revision**

Run:

```bash
cd /Users/andrew/.config/superpowers/worktrees/hmc62843u.github.io/wpatent-pillar-house-voice-site
node --test tests/support-pages.test.mjs
npm test
git diff --check
```

Expected:

- focused support-page test passes
- full site suite passes
- `git diff --check` is clean

- [ ] **Step 4: Commit the live-page revision**

```bash
git -C /Users/andrew/.config/superpowers/worktrees/hmc62843u.github.io/wpatent-pillar-house-voice-site add startup-patent-strategy.htm tests/support-pages.test.mjs
git -C /Users/andrew/.config/superpowers/worktrees/hmc62843u.github.io/wpatent-pillar-house-voice-site commit -m "refactor: tighten W&Patent pillar house voice"
```

### Task 3: Finish the branch cleanly

**Files:**
- No new code files

- [ ] **Step 1: Confirm both worktrees are clean after commits**

Run:

```bash
git -C /Users/andrew/.config/superpowers/worktrees/anrobo-founder-discovery/wpatent-pillar-house-voice-revision status --short --branch
git -C /Users/andrew/.config/superpowers/worktrees/hmc62843u.github.io/wpatent-pillar-house-voice-site status --short --branch
```

Expected:

- both worktrees show clean branches with only committed changes

- [ ] **Step 2: Hand off for integration choice**

After implementation and verification succeed, stop and present the normal integration options rather than merging into either dirty main checkout automatically.
