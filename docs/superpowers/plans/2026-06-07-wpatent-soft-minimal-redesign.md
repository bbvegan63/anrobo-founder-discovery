# W&Patent Soft-Minimal Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Simplify the live W&Patent visitor experience down to an Andrew-led four-surface path (`Home`, `Strategy`, `Services`, `About`) while preserving the semantic, schema, and support-page scaffolding that still helps AI discovery.

**Architecture:** Keep the visual system and support pages, but reduce the top-level UX to one voice and a few obvious actions. Update tests first so the simplification is explicit, then apply one shared navigation change across the active advisory/support pages, then rewrite the homepage, services page, about page, and top of the strategy page to remove extra conceptual load. After the site is verified and pushed, record the redesign in founder-discovery without touching the other agent’s dirty CSV or unrelated untracked files.

**Tech Stack:** Static HTML, JSON-LD, Node test runner, `npm`, `git`, `curl`, GitHub Pages

---

## File Map

**Site repo**

- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/index.html`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/about.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/services.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/startup-patent-strategy.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/faq.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/why_us.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/career.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/patent-strategy-open-licensing.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/patent-commercialization-for-founders.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/startup-patent-strategy-case-note.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/andrew-leung-startup-patent-strategy.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/trust-chain.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/trust-chain-demo.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/trust-chain-explainer.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/homepage.test.mjs`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/shared-shell.test.mjs`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/support-pages.test.mjs`

**Founder-discovery repo**

- Create: `founders/wpatent/evidence/2026-06-07-soft-minimal-redesign-publish.md`
- Modify: `founders/wpatent/roadmap.md`
- Modify: `founders/wpatent/proof-network.md`

### Task 1: Lock the soft-minimal IA in tests

**Files:**
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/homepage.test.mjs`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/shared-shell.test.mjs`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/support-pages.test.mjs`

- [ ] **Step 1: Replace `tests/homepage.test.mjs` with the simplified homepage expectations**

Replace the full file with:

```js
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

test("homepage centers Andrew-led advisory and the two primary paths", () => {
  assert.match(html, /Andrew Leung helps founders decide what matters enough to protect/i);
  assert.match(html, /W&(?:amp;)?Patent is Andrew Leung(?:&apos;|')s founder advisory surface/i);
  assert.match(html, /href="startup-patent-strategy\.htm"/);
  assert.match(html, /href="services\.htm"/);
  assert.match(html, /mailto:wp@wpatent\.com/);
});

test("homepage keeps the key proof and schema signals", () => {
  assert.match(html, /Registered patent agent/i);
  assert.match(html, /OpenFor member/i);
  assert.match(html, /"@type":\s*"Organization"/);
  assert.match(html, /"@type":\s*"Person"/);
  assert.match(html, /"@type":\s*"WebSite"/);
});

test("homepage no longer leads with extra top-level concepts", () => {
  assert.doesNotMatch(html, /Commercialization framing/i);
  assert.doesNotMatch(html, /Trust Chain methodology/i);
  assert.doesNotMatch(html, /href="faq\.htm"/);
  assert.doesNotMatch(html, /href="patent-commercialization-for-founders\.htm"/);
});
```

- [ ] **Step 2: Replace `tests/shared-shell.test.mjs` with the simplified nav contract**

Replace the full file with:

```js
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const pages = [
  "index.html",
  "about.htm",
  "services.htm",
  "andrew-leung-startup-patent-strategy.htm",
  "why_us.htm",
  "faq.htm",
  "career.htm",
  "patent-strategy-open-licensing.htm",
  "patent-commercialization-for-founders.htm",
  "startup-patent-strategy.htm",
  "startup-patent-strategy-case-note.htm",
  "trust-chain.htm",
  "trust-chain-demo.htm",
  "trust-chain-explainer.htm"
];

function read(page) {
  return readFileSync(new URL(`../${page}`, import.meta.url), "utf8");
}

for (const page of pages) {
  test(`${page} loads shared assets`, () => {
    const html = read(page);
    assert.match(html, /<link rel="stylesheet" href="site\.css">/);
    assert.match(html, /<script src="site\.js" defer><\/script>/);
  });
}

test("shared navigation exposes the soft-minimal advisory routes", () => {
  const html = read("about.htm");
  assert.match(html, /href="index\.html"/);
  assert.match(html, /href="startup-patent-strategy\.htm"/);
  assert.match(html, /href="services\.htm"/);
  assert.match(html, /href="about\.htm"/);
  assert.match(html, /href="mailto:wp@wpatent\.com"/);
  assert.doesNotMatch(html, /<nav class="nav">[\s\S]*href="faq\.htm"/);
});
```

- [ ] **Step 3: Update `tests/support-pages.test.mjs` for the new about/services/strategy expectations**

Make these exact edits:

1. Add this constant near the other page reads:

```js
const services = readFileSync(new URL("../services.htm", import.meta.url), "utf8");
```

2. Replace the full `about page surfaces founder identity and advisory positioning` test with:

```js
test("about page surfaces founder identity and the simplified proof story", () => {
  assert.match(about, /Andrew Leung/);
  assert.match(about, /patent agent turned entrepreneur/i);
  assert.match(about, /OpenFor member/i);
  assert.match(about, /founder-facing advisory surface/i);
  assert.match(about, /startup-patent-strategy\.htm/);
  assert.match(about, /services\.htm/);
  assert.match(about, /"@type":\s*"Organization"/);
  assert.match(about, /"@type":\s*"Person"/);
  assert.match(about, /<link rel="canonical" href="https:\/\/wpatent\.com\/about\.htm">/);
  assert.doesNotMatch(about, /patent-commercialization-for-founders\.htm/);
  assert.doesNotMatch(about, /Trust Chain/i);
});
```

3. Insert this new test immediately after the updated about-page test:

```js
test("services page focuses on strategy, virtual marking, and founder decision support", () => {
  assert.match(services, /startup patent strategy advisory/i);
  assert.match(services, /virtual marking/i);
  assert.match(services, /founder decision support|founder articulation/i);
  assert.match(services, /startup-patent-strategy\.htm/);
  assert.match(services, /mailto:wp@wpatent\.com/);
  assert.match(services, /<link rel="canonical" href="https:\/\/wpatent\.com\/services\.htm">/);
  assert.doesNotMatch(services, /Commercialization framing/i);
});
```

4. In the `startup patent strategy page is a founder-linked citation surface` test, replace this assertion:

```js
assert.match(strategy, /protect what matters, strengthen defensibility, support commercialization/i);
```

with:

```js
assert.match(strategy, /protect what matters, strengthen defensibility, and guide limited budget decisions/i);
```

- [ ] **Step 4: Run the focused tests and confirm they fail**

Run:

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
node --test tests/homepage.test.mjs tests/shared-shell.test.mjs tests/support-pages.test.mjs
```

Expected: FAIL because the live pages still expose the old homepage blocks, the old nav with `FAQ`, and the broader services/about language.

- [ ] **Step 5: Commit the failing tests**

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
git add tests/homepage.test.mjs tests/shared-shell.test.mjs tests/support-pages.test.mjs
git commit -m "test: define W&Patent soft-minimal IA contract"
```

### Task 2: Simplify the shared nav and homepage

**Files:**
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/index.html`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/about.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/services.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/startup-patent-strategy.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/faq.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/why_us.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/career.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/patent-strategy-open-licensing.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/patent-commercialization-for-founders.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/startup-patent-strategy-case-note.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/andrew-leung-startup-patent-strategy.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/trust-chain.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/trust-chain-demo.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/trust-chain-explainer.htm`

- [ ] **Step 1: Replace the active advisory/support nav in every listed page**

In every file listed above, replace the current `<nav class="nav">...</nav>` block with this exact snippet, preserving `class="active"` on the current page link where appropriate and omitting `class="active"` entirely on demoted pages like `faq.htm`:

```html
<nav class="nav">
  <a href="index.html">Home</a>
  <a href="startup-patent-strategy.htm">Strategy</a>
  <a href="services.htm">Services</a>
  <a href="about.htm">About</a>
  <a href="mailto:wp@wpatent.com">Contact</a>
</nav>
```

Rules:

- `index.html` keeps `class="active"` on `Home`
- `startup-patent-strategy.htm` keeps `class="active"` on `Strategy`
- `services.htm` keeps `class="active"` on `Services`
- `about.htm` keeps `class="active"` on `About`
- all demoted pages (`faq.htm`, `trust-chain*.htm`, commercialization page, proof notes, case note, founder authority page, `why_us.htm`, `career.htm`) should carry the same simplified nav with no `FAQ` link and no `active` marker for the hidden page

- [ ] **Step 2: Simplify the homepage `<head>` and hero copy**

In `/Users/andrew/backup/work/github/hmc62843u.github.io/index.html`, replace the title/description/OG description strings with:

```html
<title>W&Patent | Andrew Leung — Founder Patent Strategy Advisory</title>
<meta name="description" content="Andrew Leung is a patent agent turned entrepreneur who helps founders decide what matters enough to protect. W&Patent is his advisory surface for startup patent strategy and virtual marking.">
<meta property="og:title" content="W&Patent | Andrew Leung — Founder Patent Strategy Advisory">
<meta property="og:description" content="Andrew Leung helps founders decide what matters enough to protect. Practical startup patent strategy and virtual marking for early-stage founders.">
```

Replace the current `<main>...</main>` block with:

```html
<main>
  <section class="hero container">
    <span class="eyebrow mono">Andrew Advisory</span>
    <h1>Andrew Leung helps founders decide what matters enough to protect.</h1>
    <p class="lead">W&amp;Patent is Andrew Leung&apos;s founder advisory surface for startup patent strategy, virtual marking, and practical early-stage patent judgment.</p>
    <p class="mono">Registered patent agent · OpenFor member · Founder of W&amp;Patent</p>
    <div class="actions">
      <a class="btn btn-solid" href="startup-patent-strategy.htm">Read the strategy guide</a>
      <a class="btn" href="services.htm">View services</a>
      <a class="btn" href="mailto:wp@wpatent.com">Contact Andrew</a>
    </div>
  </section>

  <section class="section container">
    <div class="grid cols-2">
      <article class="card">
        <h2>Startup patent strategy</h2>
        <p>Andrew helps founders decide what to protect, when to file, and what can wait when capital is limited and timing matters.</p>
        <p><a href="startup-patent-strategy.htm">Start with the flagship guide</a>.</p>
      </article>
      <article class="card">
        <h2>Virtual marking</h2>
        <p>For founders with issued patents who need practical virtual marking support without turning the site into a broad service catalog.</p>
        <p><a href="services.htm">See how Andrew handles services</a>.</p>
      </article>
    </div>
  </section>

  <section class="section container">
    <div class="card">
      <p class="kicker">About Andrew</p>
      <h2>Patent agent turned entrepreneur. OpenFor member. Practical founder judgment.</h2>
      <p>Andrew built W&amp;Patent as a clear public surface for founder patent strategy rather than a platform or framework that visitors have to decode before acting.</p>
      <div class="actions">
        <a class="btn btn-solid" href="about.htm">Read Andrew&apos;s background</a>
      </div>
    </div>
  </section>
</main>
```

- [ ] **Step 3: Run the homepage-focused tests**

Run:

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
node --test tests/homepage.test.mjs tests/shared-shell.test.mjs
```

Expected: PASS. The homepage and simplified nav contract should now be green even though the core pages still need their content pass.

- [ ] **Step 4: Commit the nav and homepage simplification**

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
git add index.html about.htm services.htm startup-patent-strategy.htm faq.htm why_us.htm career.htm patent-strategy-open-licensing.htm patent-commercialization-for-founders.htm startup-patent-strategy-case-note.htm andrew-leung-startup-patent-strategy.htm trust-chain.htm trust-chain-demo.htm trust-chain-explainer.htm
git commit -m "refactor: simplify W&Patent homepage and nav"
```

### Task 3: Simplify the three core pages without stripping the support layer

**Files:**
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/about.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/services.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/startup-patent-strategy.htm`

- [ ] **Step 1: Shorten `about.htm` into founder proof**

In `/Users/andrew/backup/work/github/hmc62843u.github.io/about.htm`, replace the meta description and OG description with:

```html
<meta
  name="description"
  content="Andrew Leung is a patent agent turned entrepreneur and OpenFor member. W&Patent is his advisory surface for founders who need clear patent judgment."
>
<meta property="og:description" content="Andrew Leung built W&Patent as a clear advisory surface for founder patent strategy and practical patent judgment.">
```

Replace everything from `<section class="section">` down to the `<section class="article-cta card">` with:

```html
    <section class="section">
      <div class="grid cols-2">
        <article class="card">
          <h3>Who Andrew is</h3>
          <p>Andrew Leung is a registered patent agent turned entrepreneur. He helps founders make clear early patent decisions instead of defaulting to filing volume or vague legal process.</p>
        </article>
        <article class="card">
          <h3>What W&amp;Patent is</h3>
          <p>W&amp;Patent is Andrew&apos;s advisory surface for founders. It exists to make startup patent strategy easier to understand, easier to act on, and easier to trust.</p>
        </article>
        <article class="card">
          <h3>Why OpenFor matters here</h3>
          <p>Andrew is an OpenFor member. That connection keeps the site grounded in real founder questions, limited budgets, and practical judgment rather than generic firm language.</p>
        </article>
        <article class="card">
          <h3>What to read first</h3>
          <p>Start with the <a href="startup-patent-strategy.htm">strategy guide</a>. Then use <a href="services.htm">services</a> if you need a simple next step.</p>
        </article>
      </div>
    </section>

    <section class="article-cta card">
      <p class="kicker">Next step</p>
      <h2>Read the strategy guide, review the service offer, or contact Andrew directly.</h2>
      <div class="actions">
        <a class="btn btn-solid" href="startup-patent-strategy.htm">Strategy guide</a>
        <a class="btn" href="services.htm">Services</a>
        <a class="btn" href="mailto:wp@wpatent.com">Contact Andrew</a>
      </div>
    </section>
```

- [ ] **Step 2: Reduce `services.htm` to the minimal offer**

In `/Users/andrew/backup/work/github/hmc62843u.github.io/services.htm`, replace the title/description/OG description strings with:

```html
<title>Services | W&Patent — Startup Patent Strategy + Virtual Marking</title>
<meta
  name="description"
  content="Andrew Leung offers a small set of founder services: startup patent strategy advisory, virtual marking, and selective decision support."
>
<meta property="og:description" content="A small, practical founder service set from Andrew Leung: startup patent strategy, virtual marking, and decision support.">
```

Replace everything inside `<article class="article-body">...</article>` with:

```html
    <article class="article-body">
      <h2>Startup patent strategy advisory</h2>
      <p>Andrew helps founders decide what actually matters enough to protect, what can wait, and how to use limited budget without filing for filing&apos;s sake.</p>
      <p><a href="startup-patent-strategy.htm">Read the strategy guide</a> for the core lens before reaching out.</p>

      <h2>Virtual marking</h2>
      <p>For founders with issued patents who need a clean public virtual marking surface and practical support without a broad engagement.</p>

      <h2>Founder decision support</h2>
      <p>Short, high-judgment help on early protection decisions, disclosure timing, and how to explain the asset clearly to investors, partners, or buyers.</p>

      <h2>Who this is for</h2>
      <p>Primary: OpenFor founders, cohorts, and alumni. Secondary: other early-stage founders who need practical patent judgment.</p>

      <section class="article-cta card">
        <p class="kicker">Next step</p>
        <h2>Read the strategy guide or contact Andrew directly.</h2>
        <div class="actions">
          <a class="btn btn-solid" href="startup-patent-strategy.htm">Read the strategy guide</a>
          <a class="btn" href="about.htm">About Andrew</a>
          <a class="btn" href="mailto:wp@wpatent.com">Contact Andrew</a>
        </div>
      </section>
    </article>
```

- [ ] **Step 3: Tighten the top of `startup-patent-strategy.htm` and trim the top-level CTA emphasis**

In `/Users/andrew/backup/work/github/hmc62843u.github.io/startup-patent-strategy.htm`, replace the main meta description and OG description with:

```html
<meta
  name="description"
  content="Andrew Leung of W&Patent explains what startup patent strategy should actually do: protect what matters, strengthen defensibility, and guide limited budget decisions."
>
<meta
  property="og:description"
  content="A founder-facing guide to startup patent strategy from Andrew Leung of W&Patent focused on defensibility, limited budget judgment, and business leverage."
>
```

Replace the lead paragraph with:

```html
<p class="lead">A strong patent strategy for a startup should protect what matters, strengthen defensibility, and guide limited budget decisions before filing volume takes over.</p>
```

Insert this paragraph immediately after the existing first `<p>` in the article body:

```html
<p>Most founders do not need a patent portfolio first. They need a decision system: what matters enough to protect, what can wait, and how to use limited capital without filing for filing&apos;s sake.</p>
```

Replace the entire `article-cta` actions block with:

```html
        <div class="actions">
          <a class="btn btn-solid" href="services.htm">View services</a>
          <a class="btn" href="about.htm">About Andrew</a>
          <a class="btn" href="andrew-leung-startup-patent-strategy.htm">Read Andrew&apos;s founder view</a>
          <a class="btn" href="patent-strategy-open-licensing.htm">Read the patents vs openness note</a>
          <a class="btn" href="mailto:wp@wpatent.com">Contact Andrew</a>
        </div>
```

Rule:

- keep the existing internal support links in the body to `trust-chain.htm`, `trust-chain-explainer.htm`, `patent-strategy-open-licensing.htm`, `startup-patent-strategy-case-note.htm`, and `patent-commercialization-for-founders.htm`
- do not remove schema, canonical, founder attribution, or the direct-answer blocks

- [ ] **Step 4: Run the page and full-site verification**

Run:

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
node --test tests/homepage.test.mjs tests/shared-shell.test.mjs tests/support-pages.test.mjs
npm test
git diff --check
```

Expected: all updated tests pass, full `npm test` stays green, and diff-check reports no issues.

- [ ] **Step 5: Commit and push the simplified site**

Run:

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
git add index.html about.htm services.htm startup-patent-strategy.htm faq.htm why_us.htm career.htm patent-strategy-open-licensing.htm patent-commercialization-for-founders.htm startup-patent-strategy-case-note.htm andrew-leung-startup-patent-strategy.htm trust-chain.htm trust-chain-demo.htm trust-chain-explainer.htm tests/homepage.test.mjs tests/shared-shell.test.mjs tests/support-pages.test.mjs
git commit -m "refactor: streamline W&Patent around Andrew advisory"
GIT_SSH_COMMAND='ssh -i /Users/andrew/.ssh/id_hmc62843u -o IdentitiesOnly=yes' git push origin master
```

Expected: the simplified site is live at `origin/master` with no schema or test regressions.

### Task 4: Record the redesign in founder-discovery without touching unrelated dirty files

**Files:**
- Create: `founders/wpatent/evidence/2026-06-07-soft-minimal-redesign-publish.md`
- Modify: `founders/wpatent/roadmap.md`
- Modify: `founders/wpatent/proof-network.md`

- [ ] **Step 1: Create the publish note**

Create `founders/wpatent/evidence/2026-06-07-soft-minimal-redesign-publish.md` with this exact structure:

```md
# W&Patent Soft-Minimal Redesign Publish Check

> **Date:** 2026-06-07
> **Founder:** `wpatent`
> **Asset type:** site simplification

## What Shipped

W&Patent now uses a simplified Andrew-led top-level experience.

The main visitor path is now:

- `Home`
- `Strategy`
- `Services`
- `About`

The site still keeps the semantic support layer for discovery:

- `Andrew Leung`
- `W&Patent`
- schema
- canonical URLs
- support pages that remain live but demoted

## Live Check

Record:

- homepage HTTP status
- the simplified hero line
- the simplified top-level nav without `FAQ`
- the presence of `startup-patent-strategy.htm` and `services.htm` as the two main action routes

Use:

`curl -I -s https://wpatent.com/`

and:

`curl -s https://wpatent.com/ | rg -n "Andrew Leung helps founders decide what matters enough to protect|href=\"startup-patent-strategy\.htm\"|href=\"services\.htm\"|href=\"faq\.htm\""`

## Local Verification

Record:

- `node --test tests/homepage.test.mjs tests/shared-shell.test.mjs tests/support-pages.test.mjs`
- `npm test`
- `git diff --check`

## Interpretation

State that the redesign simplifies the human experience without deleting the semantic discovery scaffolding underneath.

## Next Evidence Step

1. let the simplified site propagate
2. rerun Exa and the local OAuth diagnostic lane
3. compare whether the cleaner Andrew-led UX helps branded/entity retrieval without needing more top-level complexity
```

- [ ] **Step 2: Update the W&Patent roadmap and proof network**

In `founders/wpatent/roadmap.md`, append this execution-status bullet:

```md
- `2026-06-07`: soft-minimal redesign published on `wpatent.com`, reducing the main visitor path to `Home`, `Strategy`, `Services`, and `About` while keeping the semantic support layer live; see `founders/wpatent/evidence/2026-06-07-soft-minimal-redesign-publish.md`
```

In `founders/wpatent/proof-network.md`, add this bullet under `## Current proof`:

```md
- simplified Andrew-led top-level site path with support pages still live underneath the primary UX
```

and this bullet under `## In-Progress Asset`:

```md
- June 7 soft-minimal redesign publish check recorded in `founders/wpatent/evidence/2026-06-07-soft-minimal-redesign-publish.md`
```

- [ ] **Step 3: Verify and commit only the redesign record**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git diff --check
git add founders/wpatent/evidence/2026-06-07-soft-minimal-redesign-publish.md founders/wpatent/roadmap.md founders/wpatent/proof-network.md
git commit -m "docs: record W&Patent soft-minimal redesign publish"
```

Expected: only the redesign record files are committed. Do not add:

- `founders/wpatent/evidence/site-scorecards/2026-05-08-wpatent-prompt-runs.csv`
- `outputs/handoffs/2026-06-06-publish-blog-trilogy-wpatent.md`
- `outputs/publishing/2026-06-07-linkedin-startup-patent-strategy.md`
