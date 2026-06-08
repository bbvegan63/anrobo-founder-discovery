# W&Patent Editorial Reset Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current calm-voice W&Patent strategy surface with a sharper Andrew-led pillar plus a weekly three-post series, while retiring older secondary pages and keeping the public site bare minimum.

**Architecture:** This implementation spans both repos. `anrobo-founder-discovery` becomes the source-of-truth for the rewritten pillar, the three weekly posts, the LinkedIn reinforcements, and the reset baseline docs. The site repo then maps the week-0 pillar and core-page rewrite live first, retires older support pages with redirects or retired-helper treatment, and leaves the week-1/2/3 posts to ship on cadence rather than as a burst.

**Tech Stack:** Markdown, HTML, CSS, JSON-LD/schema, sitemap XML, Node test runner, `git`, `rg`, manual LinkedIn publishing, manual OpenFor outreach

---

## File Map

**Founder-discovery repo**

- Create: `founders/wpatent/evidence/2026-06-07-editorial-reset-baseline.md`
- Create: `founders/wpatent/evidence/2026-06-07-editorial-reset-weekly-sequence.md`
- Create: `outputs/publishing/2026-06-07-pillar-startup-patent-strategy.md`
- Create: `outputs/publishing/2026-06-07-post-provisional-vs-nda-editorial-reset.md`
- Create: `outputs/publishing/2026-06-07-post-provisional-and-poc-budget-editorial-reset.md`
- Create: `outputs/publishing/2026-06-07-post-draw-first-write-second-editorial-reset.md`
- Create: `outputs/publishing/2026-06-07-linkedin-editorial-reset-pillar.md`
- Create: `outputs/publishing/2026-06-14-linkedin-editorial-reset-provisional-vs-nda.md`
- Create: `outputs/handoffs/2026-06-21-openfor-member-mention-request-editorial-reset.md`
- Modify: `founders/wpatent/profile.md`
- Modify: `founders/wpatent/scorecard.md`
- Modify: `founders/wpatent/roadmap.md`
- Modify: `founders/wpatent/proof-network.md`
- Modify: `founders/wpatent/external-signals.md`

**Site repo**

- Modify: `index.html`
- Modify: `about.htm`
- Modify: `services.htm`
- Modify: `startup-patent-strategy.htm`
- Modify later in week 1: `provisional-vs-nda.htm`
- Modify later in week 2: create `provisional-and-poc-budget.htm`
- Modify later in week 3: create `draw-first-write-second.htm`
- Modify: `patent-strategy-open-licensing.htm`
- Modify: `trust-chain.htm`
- Modify: `trust-chain-explainer.htm`
- Modify: `trust-chain-demo.htm`
- Modify: `sitemap.xml`
- Modify: `tests/homepage.test.mjs`
- Modify: `tests/discovery.test.mjs`
- Modify: `tests/shared-shell.test.mjs`
- Modify: `tests/support-pages.test.mjs`
- Modify: `tests/trust-chain.test.mjs`

**Notes**

- `startup-patent-strategy.htm` stays the canonical strategy URL, but its content is fully replaced.
- `provisional-vs-nda.htm` already exists live; rewrite it in place during week 1 and treat the current live copy as pre-reset history.
- The Trust Chain cluster and `patent-strategy-open-licensing.htm` are active live pages today, so their retirement requires link cleanup, sitemap cleanup, and retired-helper behavior rather than silent deletion.

### Task 1: Reset founder-discovery to the editorial-reset operating layer

**Files:**
- Create: `founders/wpatent/evidence/2026-06-07-editorial-reset-baseline.md`
- Create: `founders/wpatent/evidence/2026-06-07-editorial-reset-weekly-sequence.md`
- Modify: `founders/wpatent/profile.md`
- Modify: `founders/wpatent/scorecard.md`
- Modify: `founders/wpatent/roadmap.md`
- Modify: `founders/wpatent/proof-network.md`
- Modify: `founders/wpatent/external-signals.md`

- [ ] **Step 1: Create isolated worktrees for both repos**

Run:

```bash
git -C /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery worktree add /Users/andrew/.config/superpowers/worktrees/anrobo-founder-discovery/wpatent-editorial-reset-impl -b wpatent-editorial-reset-impl
git -C /Users/andrew/backup/work/github/hmc62843u.github.io worktree add /Users/andrew/.config/superpowers/worktrees/hmc62843u.github.io/wpatent-editorial-reset-site -b wpatent-editorial-reset-site
git -C /Users/andrew/.config/superpowers/worktrees/anrobo-founder-discovery/wpatent-editorial-reset-impl status --short --branch
git -C /Users/andrew/.config/superpowers/worktrees/hmc62843u.github.io/wpatent-editorial-reset-site status --short --branch
```

Expected: both worktrees are on clean new branches.

- [ ] **Step 2: Replace the founder profile with the editorial-reset interpretation**

Replace the full contents of `founders/wpatent/profile.md` with an editorial-reset profile that explicitly says:

- Andrew Leung is a `patent agent entrepreneur`
- W&Patent is the place where Andrew `articulates patent strategy in founder language`
- the primary live topic cluster is:
  - startup patent strategy
  - early founder patent decisions
  - budget / prioritization
  - virtual marking as service wedge
- the current weakness is still discovery / founder naming, not lack of pages

Required section headings:

```md
# W&Patent Founder Profile
## Founder
## Topics To Own
## Current Business Goal
## Current Interpretation
## Known Strengths
## Known Weaknesses
```

- [ ] **Step 3: Replace the scorecard with an editorial-reset baseline**

Replace the full contents of `founders/wpatent/scorecard.md` with a new baseline that:

- keeps `55/100` as the working total unless new measurement has already been run
- explicitly says the current site is being reset around a rewritten pillar and weekly series
- treats the current live `provisional-vs-nda.htm` as pre-reset history
- treats external reinforcement as pending

Required summary categories:

```md
| Identity Surface Score | 20 | ... |
| Broad Discovery Score | 20 | ... |
| Branded Grounding Score | 20 | ... |
| Intent Fit Score | 20 | ... |
| Improvement Readiness Score | 20 | ... |
```

- [ ] **Step 4: Replace the roadmap with the editorial-reset execution order**

Replace the full contents of `founders/wpatent/roadmap.md` so that the active order is:

1. publish rewritten pillar
2. rewrite the top-level site around the new voice
3. retire older strategy secondary pages
4. publish rewritten `provisional-vs-nda` in week 1
5. publish rewritten `provisional-and-poc-budget` in week 2
6. publish rewritten `draw-first-write-second` in week 3
7. run LinkedIn/OpenFor signals in sequence
8. measure after each wave

Required note:

- the current live `startup-patent-strategy.htm` and `provisional-vs-nda.htm` are being replaced in place, not treated as net-new URLs

- [ ] **Step 5: Replace the proof network with the editorial-reset proof map**

Replace the full contents of `founders/wpatent/proof-network.md` so that current proof is defined as:

- Andrew-led bare-minimum shell
- rewritten pillar as the new flagship anchor
- one weekly series rolling out from the drafts
- LinkedIn/OpenFor reinforcement sequence

It must also explicitly list missing proof:

- live pillar reinforcement
- OpenFor public recognition
- repeated offsite founder/company/topic linkage

- [ ] **Step 6: Replace the external-signals tracker with the editorial-reset sequence**

Replace the full contents of `founders/wpatent/external-signals.md` so that the active sequence is:

- `asset-003` = rewritten pillar launch
- `asset-004` = rewritten week-1 `provisional-vs-nda`
- first LinkedIn post points only to `startup-patent-strategy.htm`
- OpenFor ask comes after the new pillar plus at least one rewritten support post

Keep the older signal rows as imported history if they are still useful, but mark them clearly as pre-reset signals.

- [ ] **Step 7: Create the editorial-reset baseline note**

Create `founders/wpatent/evidence/2026-06-07-editorial-reset-baseline.md` with these exact sections:

```md
# W&Patent Editorial Reset Baseline
## What Is Being Replaced
## New Story
## Starting Read
## Why The Reset Exists
## Rule For Weekly Publishing
```

The note must explicitly state:

- `startup-patent-strategy.htm` is being rewritten in place
- `provisional-vs-nda.htm` is being treated as pre-reset history
- Trust Chain and open-licensing pages are candidates for retirement
- the new weekly series is measured as a new editorial sequence

- [ ] **Step 8: Create the weekly-sequence note**

Create `founders/wpatent/evidence/2026-06-07-editorial-reset-weekly-sequence.md` with these exact headings:

```md
# W&Patent Editorial Reset Weekly Sequence
## Week 0
## Week 1
## Week 2
## Week 3
## Signal Sequence
## Measurement Rule
```

The week mapping must be:

- week 0 = rewritten pillar
- week 1 = rewritten `provisional-vs-nda`
- week 2 = rewritten `provisional-and-poc-budget`
- week 3 = rewritten `draw-first-write-second`

- [ ] **Step 9: Verify founder-discovery reset docs**

Run:

```bash
cd /Users/andrew/.config/superpowers/worktrees/anrobo-founder-discovery/wpatent-editorial-reset-impl
git diff --check -- founders/wpatent/profile.md founders/wpatent/scorecard.md founders/wpatent/roadmap.md founders/wpatent/proof-network.md founders/wpatent/external-signals.md founders/wpatent/evidence/2026-06-07-editorial-reset-baseline.md founders/wpatent/evidence/2026-06-07-editorial-reset-weekly-sequence.md
rg -n "founder language|weekly series|pre-reset history|OpenFor|virtual marking" founders/wpatent/profile.md founders/wpatent/scorecard.md founders/wpatent/roadmap.md founders/wpatent/proof-network.md founders/wpatent/external-signals.md founders/wpatent/evidence/2026-06-07-editorial-reset-baseline.md founders/wpatent/evidence/2026-06-07-editorial-reset-weekly-sequence.md
```

Expected: `git diff --check` is clean and the grep output confirms the reset language.

- [ ] **Step 10: Commit the founder-discovery baseline reset**

```bash
cd /Users/andrew/.config/superpowers/worktrees/anrobo-founder-discovery/wpatent-editorial-reset-impl
git add founders/wpatent/profile.md founders/wpatent/scorecard.md founders/wpatent/roadmap.md founders/wpatent/proof-network.md founders/wpatent/external-signals.md founders/wpatent/evidence/2026-06-07-editorial-reset-baseline.md founders/wpatent/evidence/2026-06-07-editorial-reset-weekly-sequence.md
git commit -m "docs: activate W&Patent editorial reset baseline"
```

### Task 2: Create the rewritten content source pack in founder-discovery

**Files:**
- Create: `outputs/publishing/2026-06-07-pillar-startup-patent-strategy.md`
- Create: `outputs/publishing/2026-06-07-post-provisional-vs-nda-editorial-reset.md`
- Create: `outputs/publishing/2026-06-07-post-provisional-and-poc-budget-editorial-reset.md`
- Create: `outputs/publishing/2026-06-07-post-draw-first-write-second-editorial-reset.md`
- Create: `outputs/publishing/2026-06-07-linkedin-editorial-reset-pillar.md`
- Create: `outputs/publishing/2026-06-14-linkedin-editorial-reset-provisional-vs-nda.md`
- Create: `outputs/handoffs/2026-06-21-openfor-member-mention-request-editorial-reset.md`

- [ ] **Step 1: Rewrite the pillar into the approved source asset**

Create `outputs/publishing/2026-06-07-pillar-startup-patent-strategy.md`.

The asset must use the original draft as source material, but the rewritten structure must be:

```md
# What Every Patent Practitioner Knows But Won't Tell Founders

*Human Authored · AI Assisted*

## Opening Thesis
## Provisional Before NDA
## Draw First. Write Second.
## Build And File In Parallel
## The Unifying Founder Strategy
## One-Paragraph Summary
## Warning & Disclaimer
```

Required rewrite rule:

- preserve the sharpness
- remove or soften any unsupported institutional-intent or hard systemic claims
- make every section sound like Andrew articulating strategy in founder language

- [ ] **Step 2: Rewrite `provisional-vs-nda` into the week-1 source asset**

Create `outputs/publishing/2026-06-07-post-provisional-vs-nda-editorial-reset.md`.

Required H1 and section skeleton:

```md
# NDAs Won't Save You. A Provisional Will.
## VCs Don't Sign NDAs
## The Grace Period Is Real But Not A Strategy
## Foreign Rights Die First
## What An NDA Actually Does
## File First. Then Talk Freely.
## Warning & Disclaimer
```

Required rule:

- rewrite from scratch using the draft as raw input
- do not copy the current live `provisional-vs-nda.htm`
- remove `Social Media Snippet`

- [ ] **Step 3: Rewrite `provisional-and-poc-budget` into the week-2 source asset**

Create `outputs/publishing/2026-06-07-post-provisional-and-poc-budget-editorial-reset.md`.

Required H1 and section skeleton:

```md
# AI Collapsed The Quiet Period. Your Timeline Just Shrunk.
## The Old Build-Then-File Default
## The New Timing Problem
## Build And File In Parallel
## The Budget Math
## Why This Is Founder Strategy, Not Legal Formality
## Warning & Disclaimer
```

Required rule:

- soften claims like “45 minutes from public GitHub” unless directly defensible
- keep the core founder-budget lesson intact

- [ ] **Step 4: Rewrite `draw-first-write-second` into the week-3 source asset**

Create `outputs/publishing/2026-06-07-post-draw-first-write-second-editorial-reset.md`.

Required H1 and section skeleton:

```md
# A Picture Is Worth A Thousand Words At The USPTO.
## Possession Comes First
## Why Drawings Beat Dense Prose
## What Founders Usually Miss
## Draw First. Write Second. Claim Third.
## Warning & Disclaimer
```

Required rule:

- keep the article practical
- keep Andrew explicit in the framing or attribution
- remove `Social Media Snippet`

- [ ] **Step 5: Create the pillar LinkedIn source asset**

Create `outputs/publishing/2026-06-07-linkedin-editorial-reset-pillar.md` with:

- target URL = `https://wpatent.com/startup-patent-strategy.htm`
- one short sharper post in Andrew’s voice
- explicit naming of Andrew Leung and W&Patent
- factual `OpenFor member` language
- no second W&Patent URL

- [ ] **Step 6: Create the week-1 LinkedIn source asset**

Create `outputs/publishing/2026-06-14-linkedin-editorial-reset-provisional-vs-nda.md` with:

- target URL = `https://wpatent.com/provisional-vs-nda.htm`
- short founder-language takeaway about filing versus NDAs
- explicit Andrew + W&Patent naming
- no second URL

- [ ] **Step 7: Create the OpenFor ask handoff**

Create `outputs/handoffs/2026-06-21-openfor-member-mention-request-editorial-reset.md`.

The handoff must ask for:

- factual public mention
- Andrew Leung
- W&Patent
- OpenFor member
- one link to the live pillar

Do not ask for:

- partnership inflation
- generic “SEO help”

- [ ] **Step 8: Verify the source pack**

Run:

```bash
cd /Users/andrew/.config/superpowers/worktrees/anrobo-founder-discovery/wpatent-editorial-reset-impl
git diff --check -- outputs/publishing/2026-06-07-pillar-startup-patent-strategy.md outputs/publishing/2026-06-07-post-provisional-vs-nda-editorial-reset.md outputs/publishing/2026-06-07-post-provisional-and-poc-budget-editorial-reset.md outputs/publishing/2026-06-07-post-draw-first-write-second-editorial-reset.md outputs/publishing/2026-06-07-linkedin-editorial-reset-pillar.md outputs/publishing/2026-06-14-linkedin-editorial-reset-provisional-vs-nda.md outputs/handoffs/2026-06-21-openfor-member-mention-request-editorial-reset.md
rg -n "What Every Patent Practitioner Knows|NDAs Won't Save You|AI Collapsed The Quiet Period|A Picture Is Worth A Thousand Words|OpenFor member" outputs/publishing/2026-06-07-pillar-startup-patent-strategy.md outputs/publishing/2026-06-07-post-provisional-vs-nda-editorial-reset.md outputs/publishing/2026-06-07-post-provisional-and-poc-budget-editorial-reset.md outputs/publishing/2026-06-07-post-draw-first-write-second-editorial-reset.md outputs/publishing/2026-06-07-linkedin-editorial-reset-pillar.md outputs/handoffs/2026-06-21-openfor-member-mention-request-editorial-reset.md
```

Expected: clean diff-check and all required titles/phrases present.

- [ ] **Step 9: Commit the source pack**

```bash
cd /Users/andrew/.config/superpowers/worktrees/anrobo-founder-discovery/wpatent-editorial-reset-impl
git add outputs/publishing/2026-06-07-pillar-startup-patent-strategy.md outputs/publishing/2026-06-07-post-provisional-vs-nda-editorial-reset.md outputs/publishing/2026-06-07-post-provisional-and-poc-budget-editorial-reset.md outputs/publishing/2026-06-07-post-draw-first-write-second-editorial-reset.md outputs/publishing/2026-06-07-linkedin-editorial-reset-pillar.md outputs/publishing/2026-06-14-linkedin-editorial-reset-provisional-vs-nda.md outputs/handoffs/2026-06-21-openfor-member-mention-request-editorial-reset.md
git commit -m "docs: add W&Patent editorial reset source pack"
```

### Task 3: Launch week-0 site makeover with the rewritten pillar

**Files:**
- Modify: `index.html`
- Modify: `about.htm`
- Modify: `services.htm`
- Modify: `startup-patent-strategy.htm`
- Modify: `tests/homepage.test.mjs`
- Modify: `tests/shared-shell.test.mjs`
- Modify: `tests/support-pages.test.mjs`

- [ ] **Step 1: Rewrite the homepage around the new spine**

Update `index.html` so the homepage:

- introduces Andrew with the message “patent strategy in founder language”
- points users first to `startup-patent-strategy.htm`
- stops sounding like the calmer advisory brochure
- keeps only the minimal route set in the visible nav

Required visible destinations in the homepage shell:

- `startup-patent-strategy.htm`
- `services.htm`
- `about.htm`

- [ ] **Step 2: Rewrite the strategy page in place using the new pillar**

Replace the article body of `startup-patent-strategy.htm` with the content from `outputs/publishing/2026-06-07-pillar-startup-patent-strategy.md`.

Keep:

- canonical URL
- article shell
- schema support
- Andrew attribution

Remove from the old live copy:

- the calm “business leverage” framing as the primary opening
- links to Trust Chain or open-licensing inside the main body
- the current FAQ-style “Questions Founders Usually Need Answered” cluster if it conflicts with the new pillar structure

- [ ] **Step 3: Rewrite `about.htm` to match the new founder-language framing**

Update `about.htm` so it emphasizes:

- Andrew Leung
- patent agent entrepreneur
- articulates strategy in founder language
- OpenFor member

Remove any remaining calm-voice phrasing that makes the page sound like a generic advisory brochure.

- [ ] **Step 4: Rewrite `services.htm` to stay secondary to the new editorial story**

Update `services.htm` so:

- founder patent advisory stays first
- virtual marking remains a real offer
- the language matches the sharper founder-translation voice
- the page points back to `startup-patent-strategy.htm` as the primary worldview page

- [ ] **Step 5: Update the week-0 tests**

Update:

- `tests/homepage.test.mjs`
- `tests/shared-shell.test.mjs`
- `tests/support-pages.test.mjs`

so they assert:

- homepage routes to the rewritten strategy anchor
- about/services match the new house voice
- strategy page no longer links into Trust Chain or open-licensing from the primary article body

- [ ] **Step 6: Verify the week-0 makeover**

Run:

```bash
cd /Users/andrew/.config/superpowers/worktrees/hmc62843u.github.io/wpatent-editorial-reset-site
npm test
git diff --check
```

Expected: test suite passes and diff-check is clean.

- [ ] **Step 7: Commit the week-0 makeover**

```bash
cd /Users/andrew/.config/superpowers/worktrees/hmc62843u.github.io/wpatent-editorial-reset-site
git add index.html about.htm services.htm startup-patent-strategy.htm tests/homepage.test.mjs tests/shared-shell.test.mjs tests/support-pages.test.mjs
git commit -m "feat: launch W&Patent editorial reset pillar"
```

### Task 4: Retire or redirect the older strategy-support cluster

**Files:**
- Modify: `patent-strategy-open-licensing.htm`
- Modify: `trust-chain.htm`
- Modify: `trust-chain-explainer.htm`
- Modify: `trust-chain-demo.htm`
- Modify: `sitemap.xml`
- Modify: `tests/discovery.test.mjs`
- Modify: `tests/support-pages.test.mjs`
- Modify: `tests/trust-chain.test.mjs`

- [ ] **Step 1: Convert `patent-strategy-open-licensing.htm` into a retired-helper page**

Update `patent-strategy-open-licensing.htm` to:

- canonical to `https://wpatent.com/startup-patent-strategy.htm`
- immediate refresh to `startup-patent-strategy.htm`
- short fallback message with one strategy link and one about link

- [ ] **Step 2: Convert the Trust Chain cluster into retired-helper pages**

Update:

- `trust-chain.htm`
- `trust-chain-explainer.htm`
- `trust-chain-demo.htm`

to use the same retired-helper pattern.

Default destination for all three:

- `https://wpatent.com/startup-patent-strategy.htm`

Reason:

- the editorial reset removes Trust Chain from the public strategy story
- strategy remains the cleanest catch-all replacement destination

- [ ] **Step 3: Remove retired pages from the sitemap**

Update `sitemap.xml` so it no longer lists:

- `patent-strategy-open-licensing.htm`
- `trust-chain.htm`
- `trust-chain-explainer.htm`
- `trust-chain-demo.htm`

Keep:

- `startup-patent-strategy.htm`
- `services.htm`
- `about.htm`
- `provisional-vs-nda.htm`

- [ ] **Step 4: Rewrite discovery and support tests around retired-helper behavior**

Update:

- `tests/discovery.test.mjs`
- `tests/support-pages.test.mjs`
- `tests/trust-chain.test.mjs`

so they no longer expect the retired pages to be active content destinations.

They should instead verify:

- those pages still exist
- canonical target is `startup-patent-strategy.htm`
- refresh target is `startup-patent-strategy.htm`
- fallback links route to `startup-patent-strategy.htm` or `about.htm`
- sitemap no longer lists them

- [ ] **Step 5: Verify retirements**

Run:

```bash
cd /Users/andrew/.config/superpowers/worktrees/hmc62843u.github.io/wpatent-editorial-reset-site
node --test tests/discovery.test.mjs tests/support-pages.test.mjs tests/trust-chain.test.mjs
npm test
git diff --check
```

Expected: the focused tests and the full suite pass.

- [ ] **Step 6: Commit the retirement pass**

```bash
cd /Users/andrew/.config/superpowers/worktrees/hmc62843u.github.io/wpatent-editorial-reset-site
git add patent-strategy-open-licensing.htm trust-chain.htm trust-chain-explainer.htm trust-chain-demo.htm sitemap.xml tests/discovery.test.mjs tests/support-pages.test.mjs tests/trust-chain.test.mjs
git commit -m "refactor: retire W&Patent secondary strategy pages"
```

### Task 5: Record the week-0 live launch in founder-discovery

**Files:**
- Create: `founders/wpatent/evidence/2026-06-07-editorial-reset-pillar-launch.md`
- Modify: `founders/wpatent/roadmap.md`
- Modify: `founders/wpatent/proof-network.md`

- [ ] **Step 1: Push the site worktree and verify the live pillar**

Run:

```bash
cd /Users/andrew/.config/superpowers/worktrees/hmc62843u.github.io/wpatent-editorial-reset-site
git push origin wpatent-editorial-reset-site:master
curl -I https://wpatent.com/startup-patent-strategy.htm
curl -L https://wpatent.com/startup-patent-strategy.htm | rg -n "What Every Patent Practitioner Knows But Won't Tell Founders|patent strategy in founder language"
```

Expected: push succeeds, live page returns `HTTP 200`, and the new pillar language is visible.

- [ ] **Step 2: Create the week-0 launch evidence note**

Create `founders/wpatent/evidence/2026-06-07-editorial-reset-pillar-launch.md` with these sections:

```md
# W&Patent Editorial Reset Pillar Launch
## What Shipped
## What Was Retired
## Live Check
## Immediate Read
## Next Week
```

The note must explicitly name:

- `startup-patent-strategy.htm` as the rewritten pillar
- retirement of the Trust Chain cluster and open-licensing note
- `provisional-vs-nda.htm` as pre-reset history waiting for week 1 rewrite

- [ ] **Step 3: Refresh the roadmap and proof network after launch**

Update:

- `founders/wpatent/roadmap.md`
- `founders/wpatent/proof-network.md`

to reflect:

- week 0 is complete
- week 1 is the rewritten `provisional-vs-nda`
- the retired pages are no longer active proof surfaces

- [ ] **Step 4: Verify founder-discovery launch note**

Run:

```bash
cd /Users/andrew/.config/superpowers/worktrees/anrobo-founder-discovery/wpatent-editorial-reset-impl
git diff --check -- founders/wpatent/evidence/2026-06-07-editorial-reset-pillar-launch.md founders/wpatent/roadmap.md founders/wpatent/proof-network.md
rg -n "pre-reset history|week 1|retired|startup-patent-strategy.htm" founders/wpatent/evidence/2026-06-07-editorial-reset-pillar-launch.md founders/wpatent/roadmap.md founders/wpatent/proof-network.md
```

- [ ] **Step 5: Commit the launch record**

```bash
cd /Users/andrew/.config/superpowers/worktrees/anrobo-founder-discovery/wpatent-editorial-reset-impl
git add founders/wpatent/evidence/2026-06-07-editorial-reset-pillar-launch.md founders/wpatent/roadmap.md founders/wpatent/proof-network.md
git commit -m "docs: record W&Patent editorial reset pillar launch"
```

### Task 6: Week-1 publication of the rewritten `provisional-vs-nda`

**Files:**
- Modify: `provisional-vs-nda.htm`
- Modify: `startup-patent-strategy.htm`
- Modify: `outputs/publishing/2026-06-14-linkedin-editorial-reset-provisional-vs-nda.md` only if final copy changes
- Create: `founders/wpatent/evidence/2026-06-14-editorial-reset-week-1.md`
- Modify: `founders/wpatent/external-signals.md`

- [ ] **Step 1: Wait until week 1 or an explicitly approved earlier restart date**

Do not ship this task in the same push as the pillar launch unless the user explicitly collapses the weekly cadence.

- [ ] **Step 2: Rewrite `provisional-vs-nda.htm` in place from the week-1 source asset**

Map `outputs/publishing/2026-06-07-post-provisional-vs-nda-editorial-reset.md` into `provisional-vs-nda.htm`.

Required result:

- the old live calm-voice or pre-reset version is fully replaced
- the article shell matches the current W&Patent article pattern
- the page links back to `startup-patent-strategy.htm`

- [ ] **Step 3: Update the pillar to link to the week-1 live post**

Update `startup-patent-strategy.htm` so the series section or the relevant pillar section now links to:

- `provisional-vs-nda.htm`

Do not link to week-2 or week-3 post URLs yet if they are not live.

- [ ] **Step 4: Publish the week-1 LinkedIn reinforcement manually**

Manual action:

- publish the copy from `outputs/publishing/2026-06-14-linkedin-editorial-reset-provisional-vs-nda.md`
- copy the live LinkedIn URL

- [ ] **Step 5: Log the week-1 evidence**

Create `founders/wpatent/evidence/2026-06-14-editorial-reset-week-1.md` and append a new row to `founders/wpatent/external-signals.md` for:

- the week-1 LinkedIn post
- direct link target `https://wpatent.com/provisional-vs-nda.htm`

- [ ] **Step 6: Verify week-1**

Run:

```bash
cd /Users/andrew/.config/superpowers/worktrees/hmc62843u.github.io/wpatent-editorial-reset-site
npm test
git diff --check
```

Then run:

```bash
curl -I https://wpatent.com/provisional-vs-nda.htm
curl -L https://wpatent.com/provisional-vs-nda.htm | rg -n "NDAs Won't Save You. A Provisional Will."
```

- [ ] **Step 7: Commit week-1 records**

Site repo:

```bash
git add provisional-vs-nda.htm startup-patent-strategy.htm
git commit -m "feat: publish W&Patent editorial reset week 1"
```

Founder-discovery repo:

```bash
git add founders/wpatent/evidence/2026-06-14-editorial-reset-week-1.md founders/wpatent/external-signals.md
git commit -m "docs: record W&Patent editorial reset week 1"
```

### Task 7: Week-2 and week-3 rollout plus OpenFor sequence

**Files:**
- Create later: `provisional-and-poc-budget.htm`
- Create later: `draw-first-write-second.htm`
- Create later: `founders/wpatent/evidence/2026-06-21-editorial-reset-week-2.md`
- Create later: `founders/wpatent/evidence/2026-06-28-editorial-reset-week-3.md`
- Modify later: `founders/wpatent/external-signals.md`
- Use later: `outputs/handoffs/2026-06-21-openfor-member-mention-request-editorial-reset.md`

- [ ] **Step 1: Week 2 publish `provisional-and-poc-budget.htm` from the approved source asset**

Create the live HTML page from `outputs/publishing/2026-06-07-post-provisional-and-poc-budget-editorial-reset.md`, link it from the pillar, and log the publish note as `2026-06-21-editorial-reset-week-2.md`.

- [ ] **Step 2: Send the OpenFor ask after the pillar plus at least one rewritten support post are live**

Manual action:

- send `outputs/handoffs/2026-06-21-openfor-member-mention-request-editorial-reset.md`
- record the real destination in `founders/wpatent/external-signals.md`

- [ ] **Step 3: Week 3 publish `draw-first-write-second.htm` from the approved source asset**

Create the live HTML page from `outputs/publishing/2026-06-07-post-draw-first-write-second-editorial-reset.md`, link it from the pillar, and log the publish note as `2026-06-28-editorial-reset-week-3.md`.

- [ ] **Step 4: Rerun measurement after each wave**

Run from founder-discovery after each publish wave:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --only-exa
node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --only-openai-local-oauth
```

If `PERPLEXITY_API_KEY` is restored:

```bash
node --env-file=.env.local scripts/run-prompt-evidence.mjs --include-exa
```

- [ ] **Step 5: Stop if the weekly cadence is being collapsed**

If the user later chooses to ship week 1, 2, or 3 earlier than planned, stop and get explicit approval to change the cadence before continuing.

## Self-Review

Spec coverage check:

- new pillar replacing `startup-patent-strategy.htm`: Task 3
- three rewritten weekly posts from the drafts: Tasks 2, 6, and 7
- sharper Andrew-led house voice across home / services / about: Task 3
- retirement and redirects for Trust Chain and open-licensing: Task 4
- sequential LinkedIn and OpenFor signals: Tasks 2, 6, and 7
- founder-discovery reset to the new operating layer: Tasks 1, 2, and 5

Placeholder scan:

- no `TBD`
- no `TODO`
- no unresolved filenames

Type consistency:

- canonical pillar URL is always `startup-patent-strategy.htm`
- week-1 post URL is always `provisional-vs-nda.htm`
- week-2 post URL is always `provisional-and-poc-budget.htm`
- week-3 post URL is always `draw-first-write-second.htm`
