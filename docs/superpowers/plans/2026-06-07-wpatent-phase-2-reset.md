# W&Patent Phase 2 Reset Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make Phase 2 the active W&Patent operating layer by resetting the founder-discovery documents, defining the Phase 2 publishing queue, publishing the first LinkedIn reinforcement, and preparing the first OpenFor member-recognition ask.

**Architecture:** This reset is founder-discovery-first. The live W&Patent site already reflects the bare-minimum Andrew-led advisory surface, so Phase 2 implementation should not add more public pages yet. Instead, it should activate a new baseline, keep the remaining drafts in a controlled queue, and make the first external signal sequence explicit and measurable.

**Tech Stack:** Markdown, JSON, Node test runner, `git`, `rg`, manual LinkedIn publishing, manual OpenFor outreach

---

## File Map

**Founder-discovery repo**

- Create: `founders/wpatent/evidence/2026-06-07-phase-2-reset-baseline.md`
- Create: `founders/wpatent/evidence/2026-06-07-phase-2-publishing-queue.md`
- Create: `founders/wpatent/evidence/2026-06-07-phase-2-signal-sequence-activation.md`
- Create: `outputs/handoffs/2026-06-07-openfor-member-mention-request-phase-2.md`
- Modify: `founders/wpatent/profile.md`
- Modify: `founders/wpatent/scorecard.md`
- Modify: `founders/wpatent/roadmap.md`
- Modify: `founders/wpatent/proof-network.md`
- Modify: `founders/wpatent/external-signals.md`
- Modify: `outputs/publishing/2026-06-07-linkedin-startup-patent-strategy.md`

No site-repo files change in this plan.

### Task 1: Activate the Phase 2 baseline in founder-discovery

**Files:**
- Create: `founders/wpatent/evidence/2026-06-07-phase-2-reset-baseline.md`
- Modify: `founders/wpatent/profile.md`
- Modify: `founders/wpatent/scorecard.md`
- Modify: `founders/wpatent/roadmap.md`
- Modify: `founders/wpatent/proof-network.md`

- [ ] **Step 1: Replace the founder profile with the Phase 2 interpretation**

Replace the full contents of `founders/wpatent/profile.md` with:

```md
# W&Patent Founder Profile

## Founder

- `Andrew Leung`
- domain: `wpatent.com`
- role: patent agent entrepreneur
- ecosystem proof: `OpenFor member`

## Topics To Own

- startup patent strategy
- founder-led authority building
- AI-readable company websites
- Trust Chain methodology

## Current Business Goal

Improve how AI answer engines understand, ground, and recommend W&Patent across non-branded prompts by using a smaller Andrew-led advisory surface, a tighter publishing queue, and stronger offsite proof.

## Current Interpretation

W&Patent is Andrew Leung's founder patent advisory surface.
It is centered on startup patent strategy, early patent decisions, and clear founder articulation around what matters enough to protect.
Virtual marking exists as a practical service wedge, not as the whole public identity.

## Known Strengths

- clear Andrew-led advisory shell on the live site
- a strong strategy anchor at `startup-patent-strategy.htm`
- one live founder-decision support page at `provisional-vs-nda.htm`
- simplified owned-topic set in `prompts.json`
- practical draft queue for the next support articles

## Known Weaknesses

- weak broad discovery on non-branded prompts
- fragile branded grounding
- founder recognition still trails concept framing
- the first-wave LinkedIn reinforcement is still not live
- more external proof and reinforcing citations are still needed
```

- [ ] **Step 2: Replace the scorecard with a Phase 2 baseline scorecard**

Replace the full contents of `founders/wpatent/scorecard.md` with:

```md
# W&Patent Scorecard

> **Version:** 2026-06-07
> **Role:** Phase 2 active baseline

## Summary Dashboard

| Category | Weight | Working Score | Evidence Base | Read |
| --- | --- | --- | --- | --- |
| Identity Surface Score | 20 | 16/20 | live Andrew-led site shell, schema, simplified routing | Strong |
| Broad Discovery Score | 20 | 1/20 | `2026-06-07` immediate post-article Exa plus standalone local OpenAI OAuth rerun | Still flat |
| Branded Grounding Score | 20 | 5/20 | historical branded control evidence and founder-linked page structure | Weak but recoverable |
| Intent Fit Score | 20 | 16/20 | strategy anchor, service clarity, founder-decision topic cluster | Strong |
| Improvement Readiness Score | 20 | 17/20 | simpler site, controlled draft queue, external signal sequence, clearer owned-topic set | High |

**Working total:** `55/100`

## Live Prompt Snapshot

| Tier | Prompts | Mentioned | `wpatent.com` Cited | `Andrew Leung` Named |
| --- | --- | --- | --- | --- |
| Broad discovery fixed pack (`exa_answer`, `2026-06-07`) | 10 | 0/10 | 0/10 | 0/10 |
| Broad diagnostic (`openai_local_oauth`, `2026-06-07`) | 10 | 0/10 | 0/10 | 0/10 |
| External proof sequence | LinkedIn + OpenFor request not yet activated | - | - | - |
| Branded control rerun | pending `PERPLEXITY_API_KEY` restore | - | - | - |

## Current Read

Phase 2 starts from a cleaner but still weak discovery position.

The live W&Patent shell is now much more coherent: Andrew Leung is the visible voice, W&Patent is the container, startup patent strategy is the anchor topic, and virtual marking is a supporting service rather than a competing identity.

That public simplification has not yet produced a retrieval lift by itself.
The immediate June 7 post-article rerun stayed `0/10` on Exa and `0/10` on the local OAuth lane for `W&Patent`, `wpatent.com`, and `Andrew Leung`.

This Phase 2 score should therefore be read as:

- strong enough site structure to support discovery
- not enough external reinforcement yet for answer engines to name the founder and brand back reliably

The next meaningful comparison should happen only after the first LinkedIn reinforcement and the first OpenFor recognition attempt are both either executed or explicitly waived.
```

- [ ] **Step 3: Replace the roadmap with a Phase 2 active roadmap**

Replace the full contents of `founders/wpatent/roadmap.md` with:

```md
# W&Patent Roadmap

> **Date:** 2026-06-07
> **Current bottleneck:** the public site is now simpler and more coherent, but the Phase 2 external signal loop has not started; answer engines still are not naming `W&Patent`, `wpatent.com`, or `Andrew Leung` in the active broad-pack read

## Priority Actions

1. Publish the Andrew LinkedIn reinforcement for `startup-patent-strategy.htm`.
2. Send the first OpenFor member-recognition request using the Phase 2 handoff.
3. After those signals are sent or explicitly waived, rerun the smaller broad pack and compare it against the Phase 2 baseline.
4. Keep the next W&Patent draft in queue until the first external-signal sequence has a read.
5. Restore `PERPLEXITY_API_KEY` and rerun the production compare after the first external sequence has propagated.
6. If the post-reinforcement compare remains flat, prioritize more external founder proof before adding another internal support page.

## Current Execution Status

- `2026-06-07`: W&Patent Phase 2 reset adopted as the new active operating layer
- `2026-06-07`: live site already reflects the bare-minimum Andrew-led path: `Home`, `Strategy`, `Services`, and `About`
- `2026-06-07`: `startup-patent-strategy.htm` remains the main authority anchor
- `2026-06-07`: `provisional-vs-nda.htm` remains the first live support article under that anchor
- `2026-06-07`: standalone commercialization page retired into a helper URL and no longer counts as a primary owned topic
- current blocker: no fresh external reinforcement is live yet for the Phase 2 story

## Phase 1 Archived Context

Phase 1 evidence remains valid as historical learning but is no longer the active operating story.
Use these notes as context, not as the active execution order:

- `founders/wpatent/evidence/2026-06-06-broad-rerun-after-propagation.md`
- `founders/wpatent/evidence/2026-06-07-founder-advisory-reposition-publish.md`
- `founders/wpatent/evidence/2026-06-07-soft-minimal-redesign-and-authority-consolidation.md`
- `founders/wpatent/evidence/2026-06-07-post-provisional-vs-nda-immediate-rerun.md`
- `founders/wpatent/evidence/2026-06-07-commercialization-page-consolidation.md`

## Recheck

- rerun the smaller broad pack after the first external signal sequence
- check whether answer systems start naming `Andrew Leung`, `W&Patent`, or `wpatent.com`
- check whether the strategy anchor becomes easier to cite after external reinforcement
- keep Trust Chain and the remaining drafts secondary until the external proof loop has a clearer read
```

- [ ] **Step 4: Replace the proof network with a Phase 2 proof map**

Replace the full contents of `founders/wpatent/proof-network.md` with:

```md
# W&Patent Proof Network

## Current proof

- Andrew-led bare-minimum site shell centered on `Home`, `Strategy`, `Services`, and `About`
- strategy anchor at `https://wpatent.com/startup-patent-strategy.htm`
- one live support page at `https://wpatent.com/provisional-vs-nda.htm`
- canonical services page with virtual marking as a real offer
- retired-helper treatment for the old commercialization URL
- Trust Chain pages preserved as secondary support
- remaining drafts available as a controlled queue

## Missing proof

- live LinkedIn reinforcement for the strategy anchor
- factual OpenFor public recognition that names Andrew Leung and links back to W&Patent
- stronger repeated founder / company / topic linkage offsite
- evidence that answer engines now repeat the simpler Andrew -> W&Patent -> startup patent strategy story

## Phase 2 Queue

- next support candidate: `2026-06-06-post-provisional-and-poc-budget.md`
- later support candidate: `2026-06-06-post-draw-first-write-second.md`
- pillar remains source material until retoned

## Smallest useful next asset

- the first external signal sequence: LinkedIn reinforcement plus OpenFor member-recognition request
```

- [ ] **Step 5: Create the Phase 2 baseline evidence note**

Create `founders/wpatent/evidence/2026-06-07-phase-2-reset-baseline.md` with:

```md
# W&Patent Phase 2 Reset Baseline

> **Date:** 2026-06-07
> **Role:** active Phase 2 baseline

## What Changed

W&Patent is no longer being operated as a continuation of the mixed Phase 1 strategy.
Phase 2 makes the active story smaller and more explicit:

- Andrew Leung is the visible advisory voice
- W&Patent is the branded container
- startup patent strategy is the main topic cluster
- virtual marking is the first service wedge
- OpenFor member context is the first ecosystem proof layer

## Starting Read

At the moment Phase 2 starts:

- the public site is already simplified
- one support page is already live under the strategy anchor
- the commercialization page is no longer a primary owned topic
- the broad-pack read is still flat

## Why This Baseline Exists

Phase 1 generated useful learning, but it also accumulated too many active threads.
This baseline marks the point where the active operating layer becomes:

- smaller
- founder-led
- AI-discovery-first
- queue-based instead of batch-based

## Phase 2 Rule

No new W&Patent support page should go live before the first external signal sequence has been executed or explicitly waived and then remeasured.
```

- [ ] **Step 6: Verify the Phase 2 baseline docs**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git diff --check -- founders/wpatent/profile.md founders/wpatent/scorecard.md founders/wpatent/roadmap.md founders/wpatent/proof-network.md founders/wpatent/evidence/2026-06-07-phase-2-reset-baseline.md
rg -n "Phase 2|OpenFor member|virtual marking|startup patent strategy" founders/wpatent/profile.md founders/wpatent/scorecard.md founders/wpatent/roadmap.md founders/wpatent/proof-network.md founders/wpatent/evidence/2026-06-07-phase-2-reset-baseline.md
```

Expected: `git diff --check` is clean, and the grep shows the new Phase 2 language in all five files.

- [ ] **Step 7: Commit the Phase 2 baseline activation**

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git add founders/wpatent/profile.md founders/wpatent/scorecard.md founders/wpatent/roadmap.md founders/wpatent/proof-network.md founders/wpatent/evidence/2026-06-07-phase-2-reset-baseline.md
git commit -m "docs: activate W&Patent phase 2 baseline"
```

### Task 2: Reset the publishing queue and external-signal artifacts

**Files:**
- Create: `founders/wpatent/evidence/2026-06-07-phase-2-publishing-queue.md`
- Create: `outputs/handoffs/2026-06-07-openfor-member-mention-request-phase-2.md`
- Modify: `founders/wpatent/external-signals.md`
- Modify: `outputs/publishing/2026-06-07-linkedin-startup-patent-strategy.md`

- [ ] **Step 1: Replace the LinkedIn draft with a Phase 2 version**

Replace the full contents of `outputs/publishing/2026-06-07-linkedin-startup-patent-strategy.md` with:

```md
# Andrew LinkedIn Post: W&Patent Phase 2 Strategy Anchor

Target URL:

- `https://wpatent.com/startup-patent-strategy.htm`

Suggested post copy:

Founders keep hearing two weak defaults: "file early" or "make everyone sign an NDA."

My view is simpler: decide what actually creates leverage, protect that first, and use the patent work to make fundraising, partnership, and diligence conversations clearer.

I wrote up the current W&Patent view here:
https://wpatent.com/startup-patent-strategy.htm

I'm Andrew Leung, founder of W&Patent, a registered patent agent, and an OpenFor member. I help founders think through early patent decisions, budget tradeoffs, and what is actually worth protecting.

#startupfounders #patentstrategy #defensibility #openfor

Posting rule:

- publish as Andrew Leung
- link only to `startup-patent-strategy.htm`
- do not add a second W&Patent URL in this first Phase 2 reinforcement post
- keep `OpenFor member` language factual, not inflated
```

- [ ] **Step 2: Create the OpenFor member-recognition request handoff**

Create `outputs/handoffs/2026-06-07-openfor-member-mention-request-phase-2.md` with:

```md
# OpenFor Member Mention Request — W&Patent Phase 2

## Goal

Request a simple factual OpenFor public mention that links:

- Andrew Leung
- W&Patent
- OpenFor member
- startup patent strategy for founders

## Preferred ask

The smallest useful public recognition is:

- a member profile
- a short member mention
- or a resource page mention

with one link to:

- `https://wpatent.com/startup-patent-strategy.htm`

## Facts To Keep Accurate

- Andrew Leung is an OpenFor member
- Andrew Leung is the founder of W&Patent
- W&Patent is Andrew's founder patent advisory surface
- the main current public resource is the startup patent strategy guide

## Suggested Request Copy

Hi OpenFor team,

I'm refreshing the public W&Patent surface around Andrew Leung's founder patent advisory work.
If helpful, I'd like to request a simple factual public mention that identifies Andrew as an OpenFor member and links to the current W&Patent strategy guide:

https://wpatent.com/startup-patent-strategy.htm

The goal is not a big feature.
A small member profile, member mention, or founder-resource mention would already help make the relationship clearer publicly.

Key facts to keep accurate:

- Andrew Leung is an OpenFor member
- Andrew is the founder of W&Patent
- W&Patent focuses on startup patent strategy and early founder patent decisions

Thank you.

## Rule

Ask for factual recognition, not partnership inflation and not generic "SEO help."
```

- [ ] **Step 3: Replace the external-signal doc with a Phase 2-ready version**

Replace the full contents of `founders/wpatent/external-signals.md` with:

```md
# W&Patent External Signals

> **Version:** 2026-06-07
> **Purpose:** Track the active offsite signal sequence that supports W&Patent founder discovery in Phase 2

## Current Log

| Signal ID | Asset | Channel | Visibility | Status | Response Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `extsig-001` | `asset-001` | LinkedIn founder post | Public | Sent / live | Low positive | Migrated from the older W&Patent proof-flow workspace after manual confirmation that the founder post was published. Included in mixed-mode share packet `asset-001--2026-05-19T00-00-00Z`. Current response: `2` likes and no comments. |
| `extsig-002` | `asset-001` | founder list intro note | Private | Sent | Imported feedback | Migrated from the older W&Patent proof-flow workspace after manual confirmation that the founder-list send went out. Included in mixed-mode share packet `asset-001--2026-05-19T00-00-00Z`. Current response: one founder asked whether there are also anti-patent or open-license strategies such as Creative Commons, Apache, and GPL. |

## Phase 2 Active Sequence

- `asset-002` = strategy-anchor reinforcement around `startup-patent-strategy.htm`
- first public signal = Andrew LinkedIn post
- first ecosystem proof ask = OpenFor member mention request
- next support article stays queued until this sequence is either completed or explicitly waived and then remeasured

## Source Asset

- Phase 2 anchor: `startup-patent-strategy.htm`
- already-live support page: `provisional-vs-nda.htm`
- next queued support draft: `2026-06-06-post-provisional-and-poc-budget.md`

## Reading Rule

Phase 2 external signals should be judged in order:

1. controlled public reinforcement
2. ecosystem recognition
3. remeasurement

No new draft should be promoted to the live site before that sequence has a read.
```

- [ ] **Step 4: Create the Phase 2 publishing-queue note**

Create `founders/wpatent/evidence/2026-06-07-phase-2-publishing-queue.md` with:

```md
# W&Patent Phase 2 Publishing Queue

> **Date:** 2026-06-07
> **Role:** active publication order for remaining W&Patent drafts

## Queue Rule

The remaining W&Patent drafts are a queue, not a rollout bundle.

One stable authority anchor stays live:

- `https://wpatent.com/startup-patent-strategy.htm`

One support page is already live:

- `https://wpatent.com/provisional-vs-nda.htm`

No additional support page should go live until the first Phase 2 external signal sequence has a read.

## Remaining Draft Order

1. `2026-06-06-post-provisional-and-poc-budget.md`
2. `2026-06-06-post-draw-first-write-second.md`
3. `2026-06-06-pillar-startup-patent-strategy.md` only after retone / rewrite

## Why This Order

- `post-provisional-and-poc-budget` is closest to the existing early-decision and budget cluster
- `post-draw-first-write-second` is useful, but narrower and slightly less immediate
- the pillar is too sharp in tone for direct publication and should be treated as source material
```

- [ ] **Step 5: Verify the queue and signal artifacts**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git diff --check -- founders/wpatent/evidence/2026-06-07-phase-2-publishing-queue.md founders/wpatent/external-signals.md outputs/publishing/2026-06-07-linkedin-startup-patent-strategy.md outputs/handoffs/2026-06-07-openfor-member-mention-request-phase-2.md
rg -n "asset-002|OpenFor member|next queued support draft|Phase 2" founders/wpatent/external-signals.md founders/wpatent/evidence/2026-06-07-phase-2-publishing-queue.md outputs/publishing/2026-06-07-linkedin-startup-patent-strategy.md outputs/handoffs/2026-06-07-openfor-member-mention-request-phase-2.md
```

Expected: `git diff --check` is clean and the grep confirms the Phase 2 asset, OpenFor wording, and queue order.

- [ ] **Step 6: Commit the queue and external-signal reset**

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git add founders/wpatent/evidence/2026-06-07-phase-2-publishing-queue.md founders/wpatent/external-signals.md outputs/publishing/2026-06-07-linkedin-startup-patent-strategy.md outputs/handoffs/2026-06-07-openfor-member-mention-request-phase-2.md
git commit -m "docs: reset W&Patent phase 2 publishing queue"
```

### Task 3: Publish the first Phase 2 LinkedIn reinforcement and log it

**Files:**
- Modify: `founders/wpatent/external-signals.md`

- [ ] **Step 1: Publish the LinkedIn post manually**

Manual action:

1. Open LinkedIn as Andrew Leung.
2. Paste the exact copy from `outputs/publishing/2026-06-07-linkedin-startup-patent-strategy.md`.
3. Publish with the direct `https://wpatent.com/startup-patent-strategy.htm` link.
4. Copy the live LinkedIn URL.

Expected: one live public LinkedIn post that names Andrew Leung, W&Patent, OpenFor member, and links directly to the strategy anchor.

- [ ] **Step 2: Append the live LinkedIn row to `external-signals.md`**

Append one new row under the existing `Current Log` table in `founders/wpatent/external-signals.md` with these exact fixed columns:

- Signal ID: `extsig-003`
- Asset: `asset-002`
- Channel: `LinkedIn strategy anchor post`
- Visibility: `Public`
- Status: `Sent / live`
- Response Status: `Pending read`

Write the `Notes` cell as one sentence that includes:

- the live LinkedIn URL copied in Step 1
- the direct link target `https://wpatent.com/startup-patent-strategy.htm`
- the fact that the copy names Andrew Leung, W&Patent, and OpenFor member

- [ ] **Step 3: Verify the LinkedIn log update**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
rg -n "extsig-003|asset-002|LinkedIn strategy anchor post|startup-patent-strategy\\.htm" founders/wpatent/external-signals.md
git diff --check -- founders/wpatent/external-signals.md
```

Expected: the new row appears and `git diff --check` is clean.

- [ ] **Step 4: Commit the LinkedIn publication log**

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git add founders/wpatent/external-signals.md
git commit -m "docs: log W&Patent phase 2 LinkedIn reinforcement"
```

### Task 4: Send the first OpenFor recognition ask and record signal-sequence activation

**Files:**
- Create: `founders/wpatent/evidence/2026-06-07-phase-2-signal-sequence-activation.md`
- Modify: `founders/wpatent/external-signals.md`

- [ ] **Step 1: Send the OpenFor request manually**

Manual action:

1. Use the copy in `outputs/handoffs/2026-06-07-openfor-member-mention-request-phase-2.md`.
2. Send it to the appropriate OpenFor contact or channel.
3. Record the send date and the exact destination used.

Expected: one real, factual OpenFor member-recognition request is sent.

- [ ] **Step 2: Append the OpenFor request row to `external-signals.md`**

Append one new row under `extsig-003` with these exact fixed columns:

- Signal ID: `extsig-004`
- Asset: `asset-002`
- Channel: `OpenFor member mention request`
- Visibility: `Private`
- Status: `Sent`
- Response Status: `Pending response`

Write the `Notes` cell as one sentence that includes:

- the send date `2026-06-07`
- the real destination used in Step 1
- the fact that the request asks for a factual public mention linking Andrew Leung, W&Patent, OpenFor member, and the startup strategy guide

- [ ] **Step 3: Create the signal-sequence activation note**

Create `founders/wpatent/evidence/2026-06-07-phase-2-signal-sequence-activation.md` with:

```md
# W&Patent Phase 2 Signal Sequence Activation

> **Date:** 2026-06-07
> **Role:** records the first external signal sequence for Phase 2

## Sequence Activated

Phase 2 has now activated the first external signal sequence:

1. Andrew LinkedIn reinforcement of `startup-patent-strategy.htm`
2. OpenFor member-recognition request

## Why This Matters

Phase 2 is no longer relying only on onsite simplification.
It now has:

- one live founder-authored public reinforcement
- one factual ecosystem-recognition ask

This is the first clean external-proof sequence under the new Phase 2 story.

## Next Measurement Rule

Do not promote the next W&Patent draft until:

- the first signal sequence has had time to propagate
- the smaller broad-pack rerun is recorded
- the result is compared against the Phase 2 baseline
```

- [ ] **Step 4: Verify the activation record**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
rg -n "extsig-004|signal sequence|OpenFor member-recognition request|do not promote the next W&Patent draft" founders/wpatent/external-signals.md founders/wpatent/evidence/2026-06-07-phase-2-signal-sequence-activation.md
git diff --check -- founders/wpatent/external-signals.md founders/wpatent/evidence/2026-06-07-phase-2-signal-sequence-activation.md
```

Expected: the OpenFor row and activation note are both present, and `git diff --check` is clean.

- [ ] **Step 5: Commit the activation record**

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git add founders/wpatent/external-signals.md founders/wpatent/evidence/2026-06-07-phase-2-signal-sequence-activation.md
git commit -m "docs: activate W&Patent phase 2 signal sequence"
```
