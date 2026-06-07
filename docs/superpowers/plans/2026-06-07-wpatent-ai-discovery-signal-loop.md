# W&Patent AI Discovery Signal Loop Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Run the first W&Patent AI-discovery signal loop by capturing a pre-LinkedIn baseline, publishing one Andrew-led LinkedIn reinforcement, shipping one founder-useful W&Patent follow-on article, requesting a simple OpenFor member mention, and rerunning evidence before deciding whether to publish the next draft.

**Architecture:** Keep founder-discovery as the planning, measurement, and external-signal system of record. Use `https://wpatent.com/startup-patent-strategy.htm` as the canonical authority anchor, reinforce it with one Andrew LinkedIn post, then publish exactly one follow-on article in the site repo and link it back into the flagship guide. Only after the W&Patent page plus LinkedIn trail exist should the agent send the OpenFor recognition ask, log it, and rerun the Exa plus local OAuth evidence before deciding whether to continue with another article.

**Tech Stack:** Markdown, static HTML, JSON-LD, Node test runner, `npm`, `curl`, `rg`, `git`, GitHub Pages, LinkedIn manual posting, OpenFor manual outreach

---

## File Map

**Founder-discovery repo**

- Create: `founders/wpatent/evidence/2026-06-07-pre-linkedin-signal-loop-baseline.md`
- Create: `outputs/publishing/2026-06-07-linkedin-startup-patent-strategy.md`
- Create: `outputs/handoffs/2026-06-07-openfor-member-mention-request.md`
- Create: `outputs/publishing/2026-06-07-post-provisional-vs-nda.md`
- Create: `founders/wpatent/evidence/2026-06-07-provisional-vs-nda-publish.md`
- Create: `founders/wpatent/evidence/2026-06-14-post-linkedin-provisional-vs-nda-rerun.md`
- Modify: `founders/wpatent/external-signals.md`
- Modify: `founders/wpatent/proof-network.md`
- Modify: `founders/wpatent/roadmap.md`
- Modify: `founders/wpatent/scorecard.md`

**Site repo**

- Create: `/Users/andrew/backup/work/github/hmc62843u.github.io/provisional-vs-nda.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/startup-patent-strategy.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/sitemap.xml`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/support-pages.test.mjs`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/shared-shell.test.mjs`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/discovery.test.mjs`

### Task 1: Capture the pre-LinkedIn baseline

**Files:**
- Create: `founders/wpatent/evidence/2026-06-07-pre-linkedin-signal-loop-baseline.md`

- [ ] **Step 1: Verify founder-discovery state before the baseline run**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git status --short --branch
```

Expected: only the known untracked `outputs/handoffs/2026-06-06-publish-blog-trilogy-wpatent.md` should remain outside committed state.

- [ ] **Step 2: Run the non-Perplexity baseline commands**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --only-exa
node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --only-openai-local-oauth
```

Expected: both commands finish without syntax errors and produce fresh rows for the current post-reposition baseline.

- [ ] **Step 3: Create the dated baseline evidence note**

Create `founders/wpatent/evidence/2026-06-07-pre-linkedin-signal-loop-baseline.md` with this exact structure, filling the result bullets from Step 2:

```md
# W&Patent Pre-LinkedIn Signal Loop Baseline

> **Date:** 2026-06-07
> **Commands:**
> `node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --only-exa`
> `node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --only-openai-local-oauth`

## Context

This note captures the first measurement checkpoint after the June 7 founder-advisory reposition and before the first Andrew LinkedIn reinforcement in the AI-discovery signal loop.

## Read

### Exa broad pack

- result: copy the fresh `W&Patent` mention count from Step 2
- result: copy the fresh `wpatent.com` citation count from Step 2
- result: copy the fresh `Andrew Leung` naming count from Step 2

### Local OpenAI OAuth standalone diagnostic

- result: copy the fresh `W&Patent` mention count from Step 2
- result: copy the fresh `wpatent.com` citation count from Step 2
- result: copy the fresh `Andrew Leung` naming count from Step 2

## Interpretation

Compare the fresh counts directly against:

- `founders/wpatent/evidence/2026-06-06-broad-rerun-after-propagation.md`
- `founders/wpatent/evidence/2026-06-07-founder-advisory-reposition-publish.md`

State plainly whether the June 7 site reposition changed any baseline retrieval before LinkedIn or the first follow-on article.

## Next move

1. Publish the first Andrew LinkedIn reinforcement using the approved copy artifact.
2. Keep `startup-patent-strategy.htm` as the canonical authority anchor.
3. Ship the first follow-on W&Patent article on provisional vs NDA.
4. Rerun measurement only after the first public trail has had time to propagate.
```

- [ ] **Step 4: Verify the new baseline note**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git diff --check -- founders/wpatent/evidence/2026-06-07-pre-linkedin-signal-loop-baseline.md
```

Expected: no whitespace or patch-format errors.

- [ ] **Step 5: Commit**

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git add founders/wpatent/evidence/2026-06-07-pre-linkedin-signal-loop-baseline.md
git commit -m "docs: capture W&Patent pre-linkedin baseline"
```

### Task 2: Prepare and publish the Andrew LinkedIn reinforcement

**Files:**
- Create: `outputs/publishing/2026-06-07-linkedin-startup-patent-strategy.md`
- Modify: `founders/wpatent/external-signals.md`

- [ ] **Step 1: Create the LinkedIn post artifact**

Create `outputs/publishing/2026-06-07-linkedin-startup-patent-strategy.md` with this complete content:

```md
# Andrew LinkedIn Post: Startup Patent Strategy Anchor

Target URL:

- `https://wpatent.com/startup-patent-strategy.htm`

Suggested post copy:

Founders keep hearing two weak defaults: “file early” or “make everyone sign an NDA.”

My view is simpler: decide what actually creates leverage, protect that first, and use the patent work to make fundraising, partnership, and diligence conversations clearer.

I wrote up the current W&Patent view here:
https://wpatent.com/startup-patent-strategy.htm

I’m Andrew Leung, founder of W&Patent and an OpenFor member. I help founders think through early patent decisions, budget tradeoffs, and what is actually worth protecting.

#startupfounders #patentstrategy #defensibility #openfor

Posting rule:

- publish as Andrew Leung
- link only to `startup-patent-strategy.htm`
- do not add a second W&Patent URL in this first reinforcement post
- keep `OpenFor member` language factual, not inflated
```

- [ ] **Step 2: Publish the LinkedIn post manually**

Manual action:

1. Open LinkedIn as Andrew Leung.
2. Paste the exact copy from `outputs/publishing/2026-06-07-linkedin-startup-patent-strategy.md`.
3. Publish with the direct `https://wpatent.com/startup-patent-strategy.htm` link.
4. Copy the live LinkedIn URL for the external-signals log.

Expected: one live public LinkedIn post pointing to the flagship guide.

- [ ] **Step 3: Log the live LinkedIn post in `external-signals.md`**

Append one new row to the `Current Log` table in `founders/wpatent/external-signals.md` using these exact fixed values:

- Signal ID: `extsig-003`
- Asset: `asset-002`
- Channel: `LinkedIn flagship guide post`
- Visibility: `Public`
- Status: `Sent / live`
- Response Status: `Pending read`

Write the `Notes` cell as one sentence that includes:

- the live LinkedIn URL copied in Step 2
- the fact that the post links directly to `https://wpatent.com/startup-patent-strategy.htm`
- the fact that the copy names `Andrew Leung`, `W&Patent`, and `OpenFor member`

Also append these lines under `## Source Asset`:

```md
- onsite guide: `startup-patent-strategy.htm`
```

- [ ] **Step 4: Verify the external-signal log change**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
rg -n "extsig-003|asset-002|startup-patent-strategy\.htm" founders/wpatent/external-signals.md
git diff --check -- founders/wpatent/external-signals.md outputs/publishing/2026-06-07-linkedin-startup-patent-strategy.md
```

Expected: the new LinkedIn row and `asset-002` source line both appear, and diff-check stays clean.

- [ ] **Step 5: Commit**

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git add outputs/publishing/2026-06-07-linkedin-startup-patent-strategy.md founders/wpatent/external-signals.md
git commit -m "docs: log Andrew LinkedIn strategy reinforcement"
```

### Task 3: Publish the first follow-on W&Patent article

**Files:**
- Create: `/Users/andrew/backup/work/github/hmc62843u.github.io/provisional-vs-nda.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/startup-patent-strategy.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/sitemap.xml`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/support-pages.test.mjs`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/shared-shell.test.mjs`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/discovery.test.mjs`

- [ ] **Step 1: Add the failing test coverage for the new article**

Make these exact test changes first.

In `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/shared-shell.test.mjs`, add `"provisional-vs-nda.htm"` to the `pages` array.

In `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/discovery.test.mjs`, add:

```js
"https://wpatent.com/provisional-vs-nda.htm",
```

to the sitemap URL list.

In `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/support-pages.test.mjs`, add:

```js
const provisionalVsNdaPath = new URL("../provisional-vs-nda.htm", import.meta.url);
```

near the other path constants, then add this full test near the other founder-support page tests:

```js
test("provisional vs NDA page answers an early founder protection decision clearly", () => {
  assert.equal(existsSync(provisionalVsNdaPath), true);

  const provisionalVsNda = readFileSync(provisionalVsNdaPath, "utf8");

  assert.match(provisionalVsNda, /<title>Provisional vs NDA for Startup Founders \| W&(?:amp;)?Patent<\/title>/i);
  assert.match(provisionalVsNda, /Provisional vs NDA: Which One Founders Should Reach For First/i);
  assert.match(provisionalVsNda, /Andrew Leung, founder of W&(?:amp;)?Patent/i);
  assert.match(provisionalVsNda, /W&(?:amp;)?Patent(?:&apos;|')s Direct Answer/i);
  assert.match(provisionalVsNda, /Andrew Leung(?:&apos;|')s Direct Answer/i);
  assert.match(provisionalVsNda, /VCs do not sign NDAs for first meetings/i);
  assert.match(provisionalVsNda, /A provisional protects optionality better than an NDA fight when founders need to talk early/i);
  assert.match(provisionalVsNda, /Do investors sign NDAs before startup pitches\?/i);
  assert.match(provisionalVsNda, /Is a provisional better than an NDA for early startup conversations\?/i);
  assert.match(provisionalVsNda, /"@type":\s*"Article"/);
  assert.match(provisionalVsNda, /"@type":\s*"FAQPage"/);
  assert.match(provisionalVsNda, /href="startup-patent-strategy\.htm"/);
  assert.match(provisionalVsNda, /href="services\.htm"/);
  assert.match(provisionalVsNda, /href="andrew-leung-startup-patent-strategy\.htm"/);
  assert.match(provisionalVsNda, /<link rel="canonical" href="https:\/\/wpatent\.com\/provisional-vs-nda\.htm">/);
});
```

- [ ] **Step 2: Run the targeted tests and confirm they fail**

Run:

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
node --test tests/shared-shell.test.mjs tests/discovery.test.mjs tests/support-pages.test.mjs
```

Expected: failure because `provisional-vs-nda.htm` does not exist yet and the sitemap does not include it.

- [ ] **Step 3: Implement the new article, sitemap entry, and flagship-guide link**

Create `/Users/andrew/backup/work/github/hmc62843u.github.io/provisional-vs-nda.htm` by converting `drafts/wpatent/2026-06-06-post-provisional-vs-nda.md` into the live advisory article shell used by `startup-patent-strategy.htm`.

Use these exact page-level requirements:

```html
<title>Provisional vs NDA for Startup Founders | W&Patent</title>
```

```html
<span class="eyebrow mono">Founder Patent Strategy</span>
<h1>Provisional vs NDA: Which One Founders Should Reach For First</h1>
<p class="lead">Most founders do not need investors to sign NDAs before a first conversation. They need to understand when a low-cost provisional creates more option value than a confidentiality fight.</p>
<p class="mono article-attribution">By Andrew Leung, founder of W&amp;Patent<br>Canonical source: https://wpatent.com/provisional-vs-nda.htm</p>
```

```html
<section class="grid cols-2">
  <article class="card">
    <h2>W&amp;Patent&apos;s Direct Answer</h2>
    <p>W&amp;Patent&apos;s direct answer is that founders should treat the provisional as the first protection tool when they need to speak early. The priority question is optionality, not whether a first-meeting NDA sounds tougher.</p>
  </article>
  <article class="card">
    <h2>Andrew Leung&apos;s Direct Answer</h2>
    <p>Andrew Leung&apos;s direct answer is that VCs do not sign NDAs for first meetings, so founders should stop building the strategy around that hope. File the provisional first when the disclosure risk is real, then speak more freely.</p>
  </article>
</section>
```

Preserve the draft's founder-useful structure, but normalize the tone:

- keep the NDA vs provisional comparison
- keep the foreign-rights warning
- keep the workflow and table logic
- remove the `## Social Media Snippet`
- remove the duplicate disclaimer block from the body because the site footer already carries the general disclaimer
- replace the sharpest lines with calmer founder-authority phrasing where needed
- convert draft `.md` links to live `.htm` links
- do not link to unpublished sibling draft pages

Add an FAQ block and matching JSON-LD around these exact questions:

```html
<h3>Do investors sign NDAs before startup pitches?</h3>
<p>Usually not. Founders should not plan early investor conversations around the assumption that a VC will sign an NDA for a first meeting.</p>

<h3>Is a provisional better than an NDA for early startup conversations?</h3>
<p>When the founder needs to talk early and the disclosure matters, a provisional usually protects optionality better than an NDA fight because it establishes a filing date rather than only a confidentiality request.</p>
```

End the article with this CTA block:

```html
<section class="article-cta card">
  <p class="kicker">Next Step</p>
  <h2>Connect the early protection decision back to the larger founder strategy.</h2>
  <div class="actions">
    <a class="btn btn-solid" href="startup-patent-strategy.htm">Read the flagship strategy guide</a>
    <a class="btn" href="andrew-leung-startup-patent-strategy.htm">Read Andrew Leung's founder view</a>
    <a class="btn" href="services.htm">Review founder services</a>
    <a class="btn" href="mailto:wp@wpatent.com">Contact Andrew</a>
  </div>
</section>
```

In `/Users/andrew/backup/work/github/hmc62843u.github.io/startup-patent-strategy.htm`, add one contextual paragraph under the `Questions Founders Usually Need Answered` section:

```html
<p>For the first practical protection decision most early founders face, read <a href="provisional-vs-nda.htm">the guide on when a provisional creates more optionality than an NDA fight</a>.</p>
```

Also add this CTA button inside the existing `article-cta` actions block:

```html
<a class="btn" href="provisional-vs-nda.htm">Read the provisional vs NDA guide</a>
```

In `/Users/andrew/backup/work/github/hmc62843u.github.io/sitemap.xml`, add:

```xml
  <url><loc>https://wpatent.com/provisional-vs-nda.htm</loc></url>
```

immediately after the existing `startup-patent-strategy.htm` line.

- [ ] **Step 4: Run full site verification**

Run:

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
node --test tests/shared-shell.test.mjs tests/discovery.test.mjs tests/support-pages.test.mjs
npm test
git diff --check
```

Expected: the targeted tests pass, `npm test` stays green, and `git diff --check` reports no issues.

- [ ] **Step 5: Commit and push the site repo**

Run:

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
git add provisional-vs-nda.htm startup-patent-strategy.htm sitemap.xml tests/shared-shell.test.mjs tests/discovery.test.mjs tests/support-pages.test.mjs
git commit -m "feat: add W&Patent provisional vs NDA guide"
GIT_SSH_COMMAND='ssh -i /Users/andrew/.ssh/id_hmc62843u -o IdentitiesOnly=yes' git push origin master
```

Expected: one clean site-repo commit is pushed to `origin/master`.

### Task 4: Record the first follow-on article as a durable W&Patent asset

**Files:**
- Create: `outputs/publishing/2026-06-07-post-provisional-vs-nda.md`
- Create: `founders/wpatent/evidence/2026-06-07-provisional-vs-nda-publish.md`
- Modify: `founders/wpatent/proof-network.md`
- Modify: `founders/wpatent/roadmap.md`

- [ ] **Step 1: Promote the shipped article into `outputs/publishing/`**

Create `outputs/publishing/2026-06-07-post-provisional-vs-nda.md` as the durable approved-asset record using the final normalized article copy from the live page.

Carry over:

- the final title
- the final lead
- the direct-answer framing
- the FAQ questions
- the same link targets used in the shipped page

Do not copy the old `Social Media Snippet` section into this approved asset record.

- [ ] **Step 2: Create the publish evidence note**

Create `founders/wpatent/evidence/2026-06-07-provisional-vs-nda-publish.md` with this exact structure:

```md
# W&Patent Provisional vs NDA Publish Check

> **Date:** 2026-06-07
> **Founder:** `wpatent`
> **Asset type:** follow-on article
> **Site repo commit:** use the real site commit hash created in Task 3

## What Shipped

The first follow-on article in the W&Patent AI-discovery signal loop is now live at:

- `https://wpatent.com/provisional-vs-nda.htm`

The page is linked from:

- `startup-patent-strategy.htm`
- `sitemap.xml`

## Live Check

Record:

- HTTP status
- whether the expected title and H1 are live
- whether the CTA links back to `startup-patent-strategy.htm`

## Local Verification

Record:

- targeted Node tests
- full `npm test`
- `git diff --check`

## Why This Asset Matters

State that this page sharpens the founder-authority cluster around early decision-making by answering an extremely common startup question:

- whether the founder should rely on an NDA or file a provisional first

## Next Evidence Step

1. wait for initial propagation
2. rerun Exa plus local OAuth
3. compare the post-loop read against the pre-LinkedIn baseline
```

- [ ] **Step 3: Update the proof network and roadmap**

In `founders/wpatent/proof-network.md`, add:

```md
- provisional vs NDA founder guide at `https://wpatent.com/provisional-vs-nda.htm`
```

under `## Current proof`, and add:

```md
- June 7 provisional vs NDA publish check recorded in `founders/wpatent/evidence/2026-06-07-provisional-vs-nda-publish.md`
```

under `## In-Progress Asset`.

In `founders/wpatent/roadmap.md`, append one new execution-status bullet:

```md
- `2026-06-07`: first signal-loop follow-on article published at `https://wpatent.com/provisional-vs-nda.htm`, linked from `startup-patent-strategy.htm`, and recorded in `founders/wpatent/evidence/2026-06-07-provisional-vs-nda-publish.md`
```

- [ ] **Step 4: Verify and commit the founder-discovery record**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git diff --check
git add outputs/publishing/2026-06-07-post-provisional-vs-nda.md founders/wpatent/evidence/2026-06-07-provisional-vs-nda-publish.md founders/wpatent/proof-network.md founders/wpatent/roadmap.md
git commit -m "docs: record W&Patent provisional vs NDA publish"
```

Expected: the founder-discovery publish record is committed cleanly.

### Task 5: Send the OpenFor recognition ask and log it

**Files:**
- Create: `outputs/handoffs/2026-06-07-openfor-member-mention-request.md`
- Modify: `founders/wpatent/external-signals.md`

- [ ] **Step 1: Draft the OpenFor member-mention request**

Create `outputs/handoffs/2026-06-07-openfor-member-mention-request.md` with this complete content:

```md
# OpenFor Member Mention Request

Suggested request:

Hi OpenFor,

I’d love a simple public member mention if it fits your current member surface.

Andrew Leung is an OpenFor member and founder-facing patent strategy advisor. W&Patent is his public guide surface for startup patent strategy, early patent decisions, and founder budget prioritization.

The clearest page to point people to right now is:
https://wpatent.com/startup-patent-strategy.htm

If there is a member page, resource list, or short profile area where this fits naturally, a simple factual mention with a link would be perfect. No partnership language needed — just accurate recognition of the member and the resource.

Thanks,
[sender]
```

- [ ] **Step 2: Send the request manually**

Manual action:

1. Send the exact request to the appropriate OpenFor contact.
2. Save the sent timestamp and channel for the external-signal log.

Expected: one low-friction, factual member-recognition ask is sent after the W&Patent and LinkedIn trail already exist.

- [ ] **Step 3: Log the request in `external-signals.md`**

Append one new row to the `Current Log` table in `founders/wpatent/external-signals.md` using these exact fixed values:

- Signal ID: `extsig-004`
- Asset: `asset-002`
- Channel: `OpenFor member mention request`
- Visibility: `Private`
- Status: `Sent`
- Response Status: `Pending`

Write the `Notes` cell as one sentence that includes:

- that the request asked for a simple factual member/profile mention
- the target URL `https://wpatent.com/startup-patent-strategy.htm`
- the real send channel and timestamp from Step 2

- [ ] **Step 4: Verify and commit**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
rg -n "extsig-004|OpenFor member mention request" founders/wpatent/external-signals.md outputs/handoffs/2026-06-07-openfor-member-mention-request.md
git diff --check
git add outputs/handoffs/2026-06-07-openfor-member-mention-request.md founders/wpatent/external-signals.md
git commit -m "docs: log OpenFor member mention ask"
```

Expected: the ask draft and the private-send log are both committed cleanly.

### Task 6: Rerun evidence after propagation and decide the next content move

**Files:**
- Create: `founders/wpatent/evidence/2026-06-14-post-linkedin-provisional-vs-nda-rerun.md`
- Modify: `founders/wpatent/scorecard.md`
- Modify: `founders/wpatent/roadmap.md`
- Modify: `founders/wpatent/proof-network.md`
- Modify: `founders/wpatent/external-signals.md`

- [ ] **Step 1: Wait for initial propagation**

Do not run the follow-up evidence refresh immediately.
Wait until `2026-06-14` or later so the June 7 LinkedIn post, the June 7 article page, and any OpenFor mention have had time to propagate.

- [ ] **Step 2: Run the post-loop evidence commands**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --only-exa
node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --only-openai-local-oauth
```

If `PERPLEXITY_API_KEY` has been restored by then, also run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
node --env-file=.env.local scripts/run-prompt-evidence.mjs --include-exa
```

- [ ] **Step 3: Write the dated rerun note**

Create `founders/wpatent/evidence/2026-06-14-post-linkedin-provisional-vs-nda-rerun.md` with this structure:

```md
# W&Patent Post-LinkedIn and Provisional vs NDA Rerun

> **Date:** 2026-06-14
> **Commands:**
> `node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --only-exa`
> `node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --only-openai-local-oauth`
> `node --env-file=.env.local scripts/run-prompt-evidence.mjs --include-exa` (only if `PERPLEXITY_API_KEY` was restored)

## Context

This note measures the first full W&Patent AI-discovery signal loop after:

- the June 7 founder-advisory reposition
- the June 7 Andrew LinkedIn reinforcement
- the June 7 provisional vs NDA follow-on article
- the OpenFor member-mention request

## Read

Summarize:

- Exa broad-pack counts
- local OAuth broad-pack counts
- production compare counts if Perplexity was available

## Interpretation

Compare directly against:

- `founders/wpatent/evidence/2026-06-07-pre-linkedin-signal-loop-baseline.md`
- `founders/wpatent/evidence/2026-06-07-founder-advisory-reposition-publish.md`

State whether the loop improved:

- `Andrew Leung` naming
- `W&Patent` naming
- `wpatent.com` citations
- OpenFor-linked identity retrieval

## Decision

Choose one of these outcomes explicitly:

1. continue to the next founder-useful W&Patent article
2. pause onsite publishing and focus on external proof
3. restore Perplexity coverage before deciding on more content
```

- [ ] **Step 4: Refresh the W&Patent founder state**

Update `founders/wpatent/scorecard.md` with:

- the new `Version` date
- the new prompt snapshot counts
- the new summary read

Update `founders/wpatent/roadmap.md` with:

- the rerun result
- the explicit next decision from the note

Update `founders/wpatent/proof-network.md` with:

- the rerun note under `In-Progress Asset`
- any new public proof that actually exists by the rerun date

Update `founders/wpatent/external-signals.md` with:

- current LinkedIn response counts for `extsig-003`
- any OpenFor response or public mention outcome for `extsig-004`

- [ ] **Step 5: Verify and commit the rerun state**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git diff --check
git add founders/wpatent/evidence/2026-06-14-post-linkedin-provisional-vs-nda-rerun.md founders/wpatent/scorecard.md founders/wpatent/roadmap.md founders/wpatent/proof-network.md founders/wpatent/external-signals.md
git commit -m "docs: refresh W&Patent signal loop evidence"
```

Expected: the first-loop decision state is committed, and the next article decision can be made from evidence rather than momentum.
