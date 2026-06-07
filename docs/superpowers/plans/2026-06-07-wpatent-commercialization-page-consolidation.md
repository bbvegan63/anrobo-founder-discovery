# W&Patent Commercialization Page Consolidation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Retire `patent-commercialization-for-founders.htm` as a standalone W&Patent topic page by consolidating its strongest ideas into `startup-patent-strategy.htm`, converting the old URL into a helper redirect page, and removing commercialization from W&Patent’s primary owned-topic measurement set.

**Architecture:** Execute this only after the current draft-promotion signal-loop wave has completed and been measured. Use TDD to first define the retired-helper URL behavior and sitemap removal, then implement the site-side consolidation, and finally update founder-discovery so the profile, proof network, roadmap, and prompt pack all reflect that commercialization is no longer a primary owned topic.

**Tech Stack:** Static HTML, JSON-LD, Markdown, Node test runner, `npm`, `curl`, `rg`, `git`, GitHub Pages

---

## File Map

**Site repo**

- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/patent-commercialization-for-founders.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/startup-patent-strategy.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/services.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/why_us.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/patent-strategy-open-licensing.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/sitemap.xml`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/discovery.test.mjs`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/support-pages.test.mjs`

**Founder-discovery repo**

- Create: `founders/wpatent/evidence/2026-06-14-commercialization-page-consolidation.md`
- Modify: `founders/wpatent/profile.md`
- Modify: `founders/wpatent/prompts.json`
- Modify: `founders/wpatent/proof-network.md`
- Modify: `founders/wpatent/roadmap.md`

### Task 1: Gate execution on the current signal-loop checkpoint and add the failing tests

**Files:**
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/discovery.test.mjs`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/support-pages.test.mjs`

- [ ] **Step 1: Verify that the current signal-loop wave has already been measured**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
test -f founders/wpatent/evidence/2026-06-14-provisional-vs-nda-rerun.md
rg -n "provisional-vs-nda\\.htm|post-provisional-and-poc-budget|external founder proof" founders/wpatent/evidence/2026-06-14-provisional-vs-nda-rerun.md
```

Expected: the rerun note exists and contains the decision context for what should happen after the first draft-promotion wave.

If this step fails, stop. Do not begin commercialization-page consolidation until the current signal-loop checkpoint exists.

- [ ] **Step 2: Remove the commercialization URL from the sitemap contract**

In `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/discovery.test.mjs`, delete this exact line from the sitemap expectation list:

```js
    "https://wpatent.com/patent-commercialization-for-founders.htm",
```

- [ ] **Step 3: Replace the commercialization topic-page test with a helper-URL retirement test**

In `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/support-pages.test.mjs`, replace the entire `test("patent commercialization page is a founder-linked citation surface", () => { ... });` block with this exact test:

```js
test("patent commercialization URL consolidates into the strategy guide", () => {
  assert.match(commercialization, /<title>Patent Commercialization for Founders \| W&(?:amp;)?Patent<\/title>/i);
  assert.match(commercialization, /This commercialization logic now lives in the startup patent strategy guide/i);
  assert.match(commercialization, /<meta name="robots" content="noindex, follow">/i);
  assert.match(commercialization, /http-equiv="refresh" content="0; url=https:\/\/wpatent\.com\/startup-patent-strategy\.htm"/i);
  assert.match(commercialization, /href="startup-patent-strategy\.htm"/);
  assert.match(commercialization, /href="services\.htm"/);
  assert.match(commercialization, /<link rel="canonical" href="https:\/\/wpatent\.com\/startup-patent-strategy\.htm">/);
  assert.doesNotMatch(commercialization, /"@type":\s*"FAQPage"/);
});
```

- [ ] **Step 4: Run the targeted tests to confirm they fail first**

Run:

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
node --test tests/discovery.test.mjs tests/support-pages.test.mjs
```

Expected: failures because the live sitemap still lists the commercialization URL and the current commercialization page still behaves like a full topic page.

- [ ] **Step 5: Commit the failing-test checkpoint**

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
git add tests/discovery.test.mjs tests/support-pages.test.mjs
git commit -m "test: define commercialization consolidation contract"
```

### Task 2: Consolidate the commercialization logic into the strategy anchor

**Files:**
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/startup-patent-strategy.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/services.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/why_us.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/patent-strategy-open-licensing.htm`

- [ ] **Step 1: Rewrite the commercialization section inside the strategy guide**

In `/Users/andrew/backup/work/github/hmc62843u.github.io/startup-patent-strategy.htm`, replace this block:

```html
      <h2>Where Patents Help Commercialization</h2>
      <p>Founders sometimes think of patents only as a legal shield. In practice, they can also be part of commercialization logic. The right patent work can make licensing conversations more concrete, help a buyer understand what is actually controlled, or make a startup look more deliberate when commercial relationships depend on proof of seriousness.</p>

      <p>This is one reason W&amp;Patent does not frame startup patent work as a disconnected legal service. The strategic value comes from how protection, market story, and commercial use cases fit together. A patent that no one can connect to product logic or buyer logic may be valid on paper but weak in business terms.</p>

      <p>For founders thinking further downstream, that is also where <a href="patent-commercialization-for-founders.htm">patent commercialization</a> starts to matter. The stronger the link between the protected asset and a real buyer, partner, or diligence pathway, the more commercially legible the patent work becomes.</p>
```

with this exact block:

```html
      <h2>Where Strategy Starts Becoming Commercially Useful</h2>
      <p>Founders sometimes think of patents only as a legal shield. In practice, the stronger patent strategy also helps make the business easier to value, diligence, partner with, or negotiate around. That commercial value starts earlier than most founders think.</p>

      <p>The useful question is not whether a patent exists in the abstract. It is whether the founder can explain what is protected, who would care, and what leverage that protection creates in a real business conversation.</p>

      <div class="article-table">
        <table>
          <thead>
            <tr>
              <th>Commercial Lens</th>
              <th>What The Founder Should Clarify</th>
              <th>Why It Matters</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>Asset</code></td>
              <td>What exactly is protected or controlled.</td>
              <td>If the asset is vague, the business value becomes vague too.</td>
            </tr>
            <tr>
              <td><code>Buyer</code></td>
              <td>Who would care about that protection and under what scenario.</td>
              <td>Commercial value is weak if no real buyer, partner, or diligence audience is in view.</td>
            </tr>
            <tr>
              <td><code>Leverage</code></td>
              <td>What negotiation, partnership, diligence, or licensing advantage the protection creates.</td>
              <td>A filing can be technically real while still being commercially underused.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>This is one reason W&amp;Patent does not treat commercialization as a separate topic founders need to learn later. The better move is to build business relevance into the strategy question from the start so the protection, market story, and future conversations all stay connected.</p>
```

- [ ] **Step 2: Lighten the commercialization mention in services**

In `/Users/andrew/backup/work/github/hmc62843u.github.io/services.htm`, replace this lead paragraph:

```html
      <p class="lead">These are the practical services Andrew offers — each grounded in real patent and commercialization judgment, not generic filing advice. If you are an early-stage founder trying to decide what matters enough to protect, start here.</p>
```

with:

```html
      <p class="lead">These are the practical services Andrew offers — each grounded in real founder patent judgment, not generic filing advice. If you are an early-stage founder trying to decide what matters enough to protect and how that decision should support real business conversations, start here.</p>
```

- [ ] **Step 3: Rewrite the commercialization card on `why_us.htm`**

In `/Users/andrew/backup/work/github/hmc62843u.github.io/why_us.htm`, replace these two cards:

```html
      <article class="card"><h3>Commercialization first, filing second</h3><p>Most patent work starts with filing. W&Patent starts with the business conversation — fundraising, partnership, licensing, acquisition — and builds the patent work around it. The <a href="patent-commercialization-for-founders.htm">commercialization guide</a> explains the lens.</p></article>
      <article class="card"><h3>Practical founder-facing guides</h3><p>This site contains dedicated pages on <a href="startup-patent-strategy.htm">patent strategy</a>, <a href="patent-commercialization-for-founders.htm">commercialization</a>, <a href="patent-strategy-open-licensing.htm">open licensing</a>, and a <a href="startup-patent-strategy-case-note.htm">case note</a> — all written for founders, not for lawyers.</p></article>
```

with:

```html
      <article class="card"><h3>Business leverage first, filing second</h3><p>Most patent work starts with filing. W&Patent starts with the business conversation — fundraising, partnership, diligence, and negotiation leverage — then builds the filing work around that. The <a href="startup-patent-strategy.htm">strategy guide</a> explains the lens.</p></article>
      <article class="card"><h3>Practical founder-facing guides</h3><p>This site contains dedicated pages on <a href="startup-patent-strategy.htm">patent strategy</a>, <a href="patent-strategy-open-licensing.htm">open licensing</a>, a <a href="startup-patent-strategy-case-note.htm">case note</a>, and the <a href="trust-chain-explainer.htm">Trust Chain explainer</a> — all written for founders, not for lawyers.</p></article>
```

- [ ] **Step 4: Rewrite the related-reading path in the open-licensing note**

In `/Users/andrew/backup/work/github/hmc62843u.github.io/patent-strategy-open-licensing.htm`, replace this paragraph and CTA button:

```html
      <p>For the broader framing behind this note, read the main <a href="startup-patent-strategy.htm">startup patent strategy guide</a>, the related <a href="patent-commercialization-for-founders.htm">patent commercialization guide</a>, and the deeper <a href="trust-chain-explainer.htm">Trust Chain explainer</a>.</p>
```

```html
          <a class="btn" href="patent-commercialization-for-founders.htm">Read the commercialization guide</a>
```

with:

```html
      <p>For the broader framing behind this note, read the main <a href="startup-patent-strategy.htm">startup patent strategy guide</a>, the <a href="services.htm">services page</a> for Andrew&apos;s advisory range, and the deeper <a href="trust-chain-explainer.htm">Trust Chain explainer</a>.</p>
```

```html
          <a class="btn" href="services.htm">See services</a>
```

- [ ] **Step 5: Verify there are no remaining primary-path links to the commercialization page**

Run:

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
rg -n "patent-commercialization-for-founders\\.htm" startup-patent-strategy.htm services.htm why_us.htm patent-strategy-open-licensing.htm
```

Expected: no matches.

- [ ] **Step 6: Commit the consolidation-copy checkpoint**

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
git add startup-patent-strategy.htm services.htm why_us.htm patent-strategy-open-licensing.htm
git commit -m "refactor: fold commercialization into strategy anchor"
```

### Task 3: Retire the commercialization URL and ship the site changes

**Files:**
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/patent-commercialization-for-founders.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/sitemap.xml`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/discovery.test.mjs`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/support-pages.test.mjs`

- [ ] **Step 1: Replace the commercialization page with a helper URL page**

Replace the full contents of `/Users/andrew/backup/work/github/hmc62843u.github.io/patent-commercialization-for-founders.htm` with this exact file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Patent Commercialization for Founders | W&amp;Patent</title>
  <meta
    name="description"
    content="This commercialization logic now lives in W&amp;Patent&apos;s startup patent strategy guide."
  >
  <meta property="og:title" content="Patent Commercialization for Founders | W&Patent">
  <meta
    property="og:description"
    content="W&amp;Patent has consolidated this commercialization guidance into the startup patent strategy guide."
  >
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://wpatent.com/patent-commercialization-for-founders.htm">
  <meta name="robots" content="noindex, follow">
  <meta http-equiv="refresh" content="0; url=https://wpatent.com/startup-patent-strategy.htm">
  <link rel="canonical" href="https://wpatent.com/startup-patent-strategy.htm">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=IBM+Plex+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="site.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "W&Patent",
    "url": "https://wpatent.com/",
    "description": "Founder patent strategy advisory led by Andrew Leung."
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Andrew Leung",
    "jobTitle": "Founder",
    "worksFor": {
      "@type": "Organization",
      "name": "W&Patent"
    },
    "description": "Patent agent turned entrepreneur. Founder of W&Patent and advisor on startup patent strategy."
  }
  </script>
</head>
<body>
  <header class="topbar">
    <div class="container topbar-inner">
      <a class="brand" href="index.html">W&<strong>Patent</strong></a>
      <nav class="nav">
        <a href="index.html">Home</a>
        <a href="startup-patent-strategy.htm">Strategy</a>
        <a href="services.htm">Services</a>
        <a href="about.htm">About</a>
        <a href="mailto:wp@wpatent.com">Contact</a>
      </nav>
    </div>
  </header>
  <main class="container article-shell">
    <section class="article-header">
      <span class="eyebrow mono">Commercialization Guide Archived</span>
      <h1>Patent Commercialization for Founders</h1>
      <p class="lead">This commercialization logic now lives in the startup patent strategy guide on W&amp;Patent. If you are not redirected immediately, use the link below.</p>
      <p class="mono article-attribution">Canonical source: https://wpatent.com/startup-patent-strategy.htm</p>
    </section>

    <section class="article-cta card">
      <p class="kicker">Next step</p>
      <h2>Use the consolidated strategy guide instead of a separate commercialization page.</h2>
      <div class="actions">
        <a class="btn btn-solid" href="startup-patent-strategy.htm">Read the strategy guide</a>
        <a class="btn" href="services.htm">See services</a>
        <a class="btn" href="mailto:wp@wpatent.com">Contact Andrew</a>
      </div>
    </section>
  </main>
  <footer><div class="container mono">General information only, not legal advice.</div></footer>
  <script src="site.js" defer></script>
</body>
</html>
```

- [ ] **Step 2: Remove the page from the sitemap**

In `/Users/andrew/backup/work/github/hmc62843u.github.io/sitemap.xml`, delete this exact line:

```xml
  <url><loc>https://wpatent.com/patent-commercialization-for-founders.htm</loc></url>
```

- [ ] **Step 3: Run the targeted tests and then the full site suite**

Run:

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
node --test tests/discovery.test.mjs tests/support-pages.test.mjs
npm test
git diff --check
```

Expected: the targeted tests pass, the full site suite passes, and diff-check is clean.

- [ ] **Step 4: Push the site changes**

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
git add patent-commercialization-for-founders.htm sitemap.xml tests/discovery.test.mjs tests/support-pages.test.mjs
git commit -m "refactor: retire commercialization support page"
GIT_SSH_COMMAND='ssh -i ~/.ssh/id_hmc62843u' git push origin master
```

### Task 4: Update founder-discovery so commercialization is no longer a primary owned topic

**Files:**
- Create: `founders/wpatent/evidence/2026-06-14-commercialization-page-consolidation.md`
- Modify: `founders/wpatent/profile.md`
- Modify: `founders/wpatent/prompts.json`
- Modify: `founders/wpatent/proof-network.md`
- Modify: `founders/wpatent/roadmap.md`

- [ ] **Step 1: Update the founder profile topics and interpretation**

In `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/profile.md`, make these exact edits:

1. Under `## Topics To Own`, delete:

```md
- patent commercialization for founders
```

2. Replace this paragraph under `## Current Interpretation`:

```md
W&Patent is a founder-led site that combines patent strategy, commercialization framing, Trust Chain methodology, and AI-readability thinking.
```

with:

```md
W&Patent is a founder-led site centered on startup patent strategy, Trust Chain methodology, and AI-readability thinking.
```

3. Replace this bullet under `## Known Strengths`:

```md
- dedicated topic pages for startup patent strategy and patent commercialization
```

with:

```md
- a strong strategy anchor and supporting founder-decision pages
```

- [ ] **Step 2: Remove commercialization from the primary prompt pack**

In `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/prompts.json`, make these exact edits:

1. change:

```json
  "version": "2026-05-19",
```

to:

```json
  "version": "2026-06-14",
```

2. remove this topic line:

```json
    "patent commercialization for founders",
```

3. remove this broad-prompt line:

```json
        "patent commercialization for founders",
```

The resulting `topics` array should contain exactly:

```json
  "topics": [
    "startup patent strategy",
    "founder-led authority building",
    "AI-readable company websites",
    "Trust Chain methodology"
  ],
```

The resulting `tiers.broad.prompts` array should contain exactly:

```json
      "prompts": [
        "patent strategy for startups",
        "startup defensibility through patents",
        "founder-led authority building",
        "AI-readable company website"
      ]
```

- [ ] **Step 3: Update the proof network and roadmap**

In `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/proof-network.md`, make these exact edits:

1. Replace:

```md
- topic pages for startup patent strategy and patent commercialization
```

with:

```md
- strategy anchor at `https://wpatent.com/startup-patent-strategy.htm` plus narrower founder-decision support pages
```

2. Replace:

```md
- tightened direct-answer blocks on the two core topic pages for startup patent strategy and patent commercialization
```

with:

```md
- commercialization logic consolidated into the startup strategy anchor while the old commercialization URL now behaves as a retired helper page
```

In `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/roadmap.md`, add this bullet under `## Current Execution Status` near the other June 14 items:

```md
- `2026-06-14`: standalone commercialization page retired into a helper URL, with its strongest business-leverage logic consolidated into `startup-patent-strategy.htm`; see `founders/wpatent/evidence/2026-06-14-commercialization-page-consolidation.md`
```

Also replace Priority Action 4 with:

```md
4. Rerun the core owned-topic pack without the commercialization prompt and compare whether the smaller topic set improves signal clarity around startup patent strategy, founder authority, and Trust Chain.
```

- [ ] **Step 4: Create the consolidation evidence note**

Create `founders/wpatent/evidence/2026-06-14-commercialization-page-consolidation.md` with this exact content, using the actual site commit hash from Task 3:

```md
# W&Patent Commercialization Page Consolidation

> **Date:** 2026-06-14
> **Founder:** `wpatent`
> **Asset type:** support-page retirement and strategy-page consolidation
> **Site repo commit:** record the exact site commit hash from Task 3

## What Changed

W&Patent retired the standalone commercialization guide at:

- `https://wpatent.com/patent-commercialization-for-founders.htm`

The strongest commercialization logic now lives inside:

- `https://wpatent.com/startup-patent-strategy.htm`

The old commercialization URL now behaves as a helper page with:

- canonical to `startup-patent-strategy.htm`
- refresh to `startup-patent-strategy.htm`
- short fallback copy
- no heavyweight `FAQPage` topic-owning schema

## Why This Was Done

The site is no longer treating commercialization as a primary owned topic.
The simpler W&Patent structure now concentrates on:

- startup patent strategy
- founder decision-making
- founder authority
- Trust Chain support

## Live Check

- retired URL returns `200`
- retired URL contains `noindex, follow`
- retired URL canonicals to `startup-patent-strategy.htm`
- strategy guide no longer links out to `patent-commercialization-for-founders.htm`
- sitemap no longer lists the commercialization URL

## Founder-discovery Update

- `profile.md` no longer lists commercialization as a topic to own
- `prompts.json` no longer includes `patent commercialization for founders` in the core pack
- `proof-network.md` and `roadmap.md` now reflect the smaller owned-topic set

## Next Step

Rerun the smaller owned-topic prompt pack and compare whether the reduced topic set sharpens W&Patent signal clarity around startup patent strategy, founder authority, and Trust Chain.
```

- [ ] **Step 5: Verify and commit the founder-discovery cleanup**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git diff --check -- founders/wpatent/profile.md founders/wpatent/prompts.json founders/wpatent/proof-network.md founders/wpatent/roadmap.md founders/wpatent/evidence/2026-06-14-commercialization-page-consolidation.md
```

Expected: clean diff-check on all founder-discovery updates.

Then commit:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git add founders/wpatent/profile.md founders/wpatent/prompts.json founders/wpatent/proof-network.md founders/wpatent/roadmap.md founders/wpatent/evidence/2026-06-14-commercialization-page-consolidation.md
git commit -m "docs: record commercialization page consolidation"
```
