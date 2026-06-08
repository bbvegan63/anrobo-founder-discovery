# W&Patent Founder Project Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Launch the first W&Patent founder project page as a support-layer page type, using `Dashing Robo` as the first concrete example without treating it as a listing or a virtual marking page.

**Architecture:** Treat `anrobo-founder-discovery` as the source-of-truth layer for the factual source pack and approved page copy, then implement one crawlable support page in the site repo with light links from existing support surfaces only. Keep the page outside the main nav and outside the primary service pitch, but add it to the sitemap so it can contribute to entity grounding and AI discovery.

**Tech Stack:** Markdown, static HTML, JSON-LD, sitemap XML, Node test runner, git

---

## File Map

**Founder-discovery repo**

- Create: `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/evidence/2026-06-08-dashing-robo-founder-project-source-pack.md`
- Create: `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/outputs/publishing/2026-06-08-dashing-robo-founder-project.md`
- Create: `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/evidence/2026-06-08-dashing-robo-founder-project-publish.md`
- Modify: `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/roadmap.md`
- Modify: `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/proof-network.md`

**Site repo**

- Create: `/Users/andrew/backup/work/github/hmc62843u.github.io/dashing-robo-founder-project.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/services.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/virtual-marking.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/sitemap.xml`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/support-pages.test.mjs`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/discovery.test.mjs`

**Assumption for Phase 1**

- `Dashing Robo` is the first founder project page because the user surfaced it as the clearest candidate and noted active pilot activity.
- If factual verification shows the current public status cannot be stated cleanly, stop and swap the candidate before creating the live page.

---

### Task 1: Build the factual source pack in founder-discovery

**Files:**
- Create: `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/evidence/2026-06-08-dashing-robo-founder-project-source-pack.md`
- Create: `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/outputs/publishing/2026-06-08-dashing-robo-founder-project.md`

- [ ] **Step 1: Create the source-pack note with approved facts and forbidden claims**

Create `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/evidence/2026-06-08-dashing-robo-founder-project-source-pack.md` with this structure:

```md
# Dashing Robo Founder Project Source Pack

## Public Facts
- Project name:
- Short product description:
- Public current status:
- Patent status wording approved for publication:
- Public links reviewed:

## Approved Claims
- 
- 
- 

## Claims To Avoid
- Do not describe this as virtual marking unless there is an issued patent tied to a real marked article.
- Do not describe this as a listing, sale opportunity, or licensing page.
- Do not imply issued-patent rights if status is only provisional or patent pending.

## Page Intent
- This page exists to explain the founder project in plain language.
- This page exists to state patent status accurately.
- This page exists to route readers back to W&Patent strategy and services surfaces.
```

- [ ] **Step 2: Create the approved publishing asset for the first founder project page**

Create `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/outputs/publishing/2026-06-08-dashing-robo-founder-project.md` with this structure:

```md
# Dashing Robo

*Founder project page*

## What Dashing Robo is

## Patent status

## Why this page exists

## What this page is not

## Next step

## Warning & Disclaimer
```

Content rules:

- founder-readable tone
- factual, not promotional
- no marketplace language
- no virtual-marking implication unless the source pack explicitly supports it
- clear link targets for `startup-patent-strategy.htm`, `services.htm`, and contact

- [ ] **Step 3: Verify the founder-discovery source files are clean**

Run:

```bash
git -C /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery diff --check -- \
  founders/wpatent/evidence/2026-06-08-dashing-robo-founder-project-source-pack.md \
  outputs/publishing/2026-06-08-dashing-robo-founder-project.md
```

Expected:

- no `git diff --check` errors

- [ ] **Step 4: Commit the source-pack files**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git add \
  founders/wpatent/evidence/2026-06-08-dashing-robo-founder-project-source-pack.md \
  outputs/publishing/2026-06-08-dashing-robo-founder-project.md
git commit -m "docs: add Dashing Robo founder project source pack"
```

### Task 2: Lock the founder-project-page pattern with failing site tests

**Files:**
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/support-pages.test.mjs`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/discovery.test.mjs`

- [ ] **Step 1: Add a new support-page test for the founder project pattern**

In `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/support-pages.test.mjs`, add a new page load:

```js
const dashingRoboProject = readFileSync(new URL("../dashing-robo-founder-project.htm", import.meta.url), "utf8");
```

Then add a new test with these assertions:

```js
test("founder project page stays distinct from virtual marking and listings", () => {
  assert.match(dashingRoboProject, /Dashing Robo/i);
  assert.match(dashingRoboProject, /Founder project/i);
  assert.match(dashingRoboProject, /patent status/i);
  assert.match(dashingRoboProject, /strategy\.htm|startup-patent-strategy\.htm/i);
  assert.match(dashingRoboProject, /services\.htm/i);
  assert.doesNotMatch(dashingRoboProject, /For Sale|Licensing|marketplace/i);
  assert.doesNotMatch(dashingRoboProject, /virtual marking surface/i);
});
```

- [ ] **Step 2: Add the new URL to the discovery test sitemap contract**

In `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/discovery.test.mjs`, extend the active sitemap URL array with:

```js
"https://wpatent.com/dashing-robo-founder-project.htm"
```

- [ ] **Step 3: Run the focused tests and confirm they fail**

Run:

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
node --test tests/support-pages.test.mjs tests/discovery.test.mjs
```

Expected:

- failure because `dashing-robo-founder-project.htm` does not exist yet
- failure because the sitemap does not yet list the new URL

### Task 3: Implement the first founder project page and light support-layer links

**Files:**
- Create: `/Users/andrew/backup/work/github/hmc62843u.github.io/dashing-robo-founder-project.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/services.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/virtual-marking.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/sitemap.xml`

- [ ] **Step 1: Create the live founder project page shell**

Create `/Users/andrew/backup/work/github/hmc62843u.github.io/dashing-robo-founder-project.htm` using the same shell pattern as the current article pages:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashing Robo | Founder Project Page | W&amp;Patent</title>
  <meta
    name="description"
    content="Dashing Robo is a founder project page on W&Patent. Andrew Leung explains the project in plain language and states patent status carefully."
  >
  <meta property="og:title" content="Dashing Robo | Founder Project Page | W&amp;Patent">
  <meta
    property="og:description"
    content="A founder-readable project page for Dashing Robo with plain-language invention context and careful patent-status wording."
  >
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://wpatent.com/dashing-robo-founder-project.htm">
  <link rel="canonical" href="https://wpatent.com/dashing-robo-founder-project.htm">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=IBM+Plex+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="site.css">
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
      <span class="eyebrow mono">Founder project</span>
      <h1>Dashing Robo</h1>
      <p class="lead">A founder-readable public page about the Dashing Robo project, what technical idea matters, and how its patent status should be understood.</p>
      <p class="mono article-attribution">By Andrew Leung, founder of W&amp;Patent · OpenFor member<br>Canonical source: https://wpatent.com/dashing-robo-founder-project.htm</p>
    </section>

    <article class="article-body"></article>
  </main>
  <footer><div class="container mono">General information only, not legal advice. The author is a registered patent agent. Nothing on this site creates an agent-client relationship.</div></footer>
  <script src="site.js" defer></script>
</body>
</html>
```

- [ ] **Step 2: Fill the article body from the approved markdown asset**

Use `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/outputs/publishing/2026-06-08-dashing-robo-founder-project.md` as the source of truth and render these exact section headings into HTML:

```html
<h2>What Dashing Robo is</h2>
<h2>Patent status</h2>
<h2>Why this page exists</h2>
<h2>What this page is not</h2>
<section class="article-cta card">
  <p class="kicker">Next step</p>
  <h2>Start with strategy, review services, or contact Andrew directly.</h2>
  <div class="actions">
    <a class="btn btn-solid" href="startup-patent-strategy.htm">Strategy guide</a>
    <a class="btn" href="services.htm">Services</a>
    <a class="btn" href="mailto:wp@wpatent.com">Contact Andrew</a>
  </div>
</section>
```

Copy rules:

- the `Patent status` section must use the exact approved wording from the source pack
- the `What this page is not` section must explicitly say the page is not a virtual marking page or listing page
- the page must not contain `For Sale`, `Licensing`, or marketplace language

- [ ] **Step 3: Add one light mention from Services without creating a new service card**

Update the `Founder decision support` section in `/Users/andrew/backup/work/github/hmc62843u.github.io/services.htm` to add one follow-on sentence such as:

```html
<p>When a founder needs a clear public project page rather than a virtual marking page, Andrew can also help shape that surface. See the <a href="dashing-robo-founder-project.htm">Dashing Robo founder project page</a> for the pattern.</p>
```

Rule:

- keep this inside the existing `Founder decision support` section
- do not create a new top-level `Founder project pages` service heading

- [ ] **Step 4: Add one distinction note on the virtual-marking page**

Update `/Users/andrew/backup/work/github/hmc62843u.github.io/virtual-marking.htm` with one short paragraph after `Who this helps`:

```html
<p>Not every founder needs virtual marking. If the project is still earlier-stage or the patent status is not yet an issued patent tied to a product, a founder project page may be the better public surface. See <a href="dashing-robo-founder-project.htm">Dashing Robo</a> for that pattern.</p>
```

Rule:

- this paragraph should clarify the distinction
- it should not turn `virtual-marking.htm` into a project archive

- [ ] **Step 5: Add the new page to the sitemap**

Insert into `/Users/andrew/backup/work/github/hmc62843u.github.io/sitemap.xml`:

```xml
<url><loc>https://wpatent.com/dashing-robo-founder-project.htm</loc></url>
```

Place it after `virtual-marking.htm` and before the cluster posts so it remains part of the support layer rather than the primary cluster.

- [ ] **Step 6: Re-run the focused tests and confirm they pass**

Run:

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
node --test tests/support-pages.test.mjs tests/discovery.test.mjs
```

Expected:

- all focused tests pass

### Task 4: Run full verification, publish the site changes, and record them in founder-discovery

**Files:**
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/support-pages.test.mjs`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/discovery.test.mjs`
- Create: `/Users/andrew/backup/work/github/hmc62843u.github.io/dashing-robo-founder-project.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/services.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/virtual-marking.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/sitemap.xml`
- Create: `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/evidence/2026-06-08-dashing-robo-founder-project-publish.md`
- Modify: `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/roadmap.md`
- Modify: `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/proof-network.md`

- [ ] **Step 1: Run full site verification**

Run:

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
npm test
git diff --check
```

Expected:

- `npm test` passes with zero failures
- `git diff --check` is clean

- [ ] **Step 2: Commit and push the site repo**

Run:

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
git add \
  dashing-robo-founder-project.htm \
  services.htm \
  virtual-marking.htm \
  sitemap.xml \
  tests/support-pages.test.mjs \
  tests/discovery.test.mjs
git commit -m "feat: add W&Patent founder project page pattern"
git push origin master
```

- [ ] **Step 3: Record the publish event in founder-discovery**

Create `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/evidence/2026-06-08-dashing-robo-founder-project-publish.md` with this structure:

```md
# Dashing Robo Founder Project Page Publish

## What Shipped
- 

## Why This Is Not Virtual Marking
- 

## Site Role
- 

## Discovery Contribution
- 

## Verification
- 
```

The note must explicitly state:

- the page is a founder project page, not a listing
- the page is not a virtual marking page unless facts later change
- the page lives in the support layer and is not in main nav

- [ ] **Step 4: Update the W&Patent operating docs**

Update `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/roadmap.md` and `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/proof-network.md` to add one brief note each:

```md
- `2026-06-08`: first founder project page pattern launched with `dashing-robo-founder-project.htm`
```

Keep the note clearly secondary to the pillar plus cluster-post program.

- [ ] **Step 5: Verify and commit the founder-discovery publish record**

Run:

```bash
git -C /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery diff --check -- \
  founders/wpatent/evidence/2026-06-08-dashing-robo-founder-project-publish.md \
  founders/wpatent/roadmap.md \
  founders/wpatent/proof-network.md

cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git add \
  founders/wpatent/evidence/2026-06-08-dashing-robo-founder-project-publish.md \
  founders/wpatent/roadmap.md \
  founders/wpatent/proof-network.md
git commit -m "docs: record first W&Patent founder project page"
```

Expected:

- `git diff --check` is clean
- only the intended founder-project-page docs are committed
