# W&Patent Draft Promotion Queue Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Promote the first W&Patent draft (`post-provisional-vs-nda`) from `drafts/` into an approved publishing artifact, implement it as a live W&Patent support page, clean up the original draft per lifecycle rules, and record the publish plus post-propagation evidence before deciding whether to promote the next draft.

**Architecture:** Keep founder-discovery as the system of record for the queue, the approved publishing artifact, and the evidence trail. Use `https://wpatent.com/startup-patent-strategy.htm` as the stable authority anchor, ship one new support page at `provisional-vs-nda.htm` that links back to it, and remove the original draft from `drafts/wpatent/` in the same promotion cycle so the queue stays truthful.

**Tech Stack:** Markdown, static HTML, JSON-LD, Node test runner, `npm`, `curl`, `rg`, `git`, GitHub Pages

---

## File Map

**Founder-discovery repo**

- Create: `outputs/publishing/2026-06-07-post-provisional-vs-nda.md`
- Delete: `drafts/wpatent/2026-06-06-post-provisional-vs-nda.md`
- Create: `founders/wpatent/evidence/2026-06-07-provisional-vs-nda-publish.md`
- Create: `founders/wpatent/evidence/2026-06-14-provisional-vs-nda-rerun.md`
- Modify: `founders/wpatent/proof-network.md`
- Modify: `founders/wpatent/roadmap.md`
- Modify: `founders/wpatent/scorecard.md`

**Site repo**

- Create: `/Users/andrew/backup/work/github/hmc62843u.github.io/provisional-vs-nda.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/startup-patent-strategy.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/sitemap.xml`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/shared-shell.test.mjs`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/discovery.test.mjs`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/support-pages.test.mjs`

### Task 1: Approve the first draft and move it out of the queue

**Files:**
- Create: `outputs/publishing/2026-06-07-post-provisional-vs-nda.md`
- Delete: `drafts/wpatent/2026-06-06-post-provisional-vs-nda.md`

- [ ] **Step 1: Verify the current draft source and the publishing target**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
test -f drafts/wpatent/2026-06-06-post-provisional-vs-nda.md
test ! -f outputs/publishing/2026-06-07-post-provisional-vs-nda.md
```

Expected: the draft exists in `drafts/wpatent/`, and no approved publishing artifact exists yet.

- [ ] **Step 2: Create the approved publishing artifact with the retoned article copy**

Create `outputs/publishing/2026-06-07-post-provisional-vs-nda.md` with this exact content:

```md
# W&Patent Publishing Draft: Provisional vs NDA

> **Founder:** W&Patent
> **Date:** 2026-06-07
> **Output type:** FounderAdvisoryPost
> **Status:** Approved for site implementation
> **Target URL:** `https://wpatent.com/provisional-vs-nda.htm`
> **Anchor page:** `https://wpatent.com/startup-patent-strategy.htm`

## Working title

Why Founders Should Usually File a Provisional Before Asking for an NDA

## Lead

When a founder is about to share technical detail with investors, partners, or early buyers, the first protection question is usually not whether someone will sign an NDA. It is whether the company has already filed a provisional application that preserves optionality.

## Article draft

Andrew Leung, founder of W&Patent, treats this as an early decision-making question rather than a legal ritual. Founders often spend time worrying about NDAs because confidentiality feels like control. In practice, the stronger first move is often to file a provisional application and then speak more freely with the priority date already in place.

### Why investors usually do not sign NDAs

VCs and many active startup investors do not sign NDAs for first meetings. That is not unusual behavior. They see too many companies, cannot negotiate confidentiality with everyone, and do not want friction at the start of a relationship.

| Founder move | Likely outcome |
| --- | --- |
| Ask a VC to sign an NDA before a first meeting | The firm declines or slows the process |
| Ask informally for discretion | You may get courtesy, but not legal protection |
| File first, then pitch | You keep more control over optionality and timing |

The practical lesson is simple: treat the lack of an NDA as a normal part of startup fundraising and prepare for it properly.

### What the provisional changes

A provisional application does not give immediate enforcement power, but it does establish a priority date. That changes the founder's posture from "please keep this confidential" to "I already documented what matters, so now we can talk."

The value is not paranoia. The value is optionality. A provisional makes it easier to:

- explain the novel mechanism without freezing the conversation around secrecy
- preserve the option to convert into a later non-provisional filing
- avoid losing leverage before the business has even had the important conversations

### Why disclosure timing still matters

US grace-period rules can tempt founders into thinking that filing later is always fine. That is too loose for a serious early-stage strategy.

| Jurisdiction lens | Practical meaning for founders |
| --- | --- |
| United States grace period exists | Some late filing flexibility may remain |
| Foreign rights often require filing before disclosure | A public pitch can permanently narrow future options |
| Early startup conversations move fast | Once details are out, you do not get a clean reset |

W&Patent's founder view is that the grace period is a backup rule, not a strategy.

### What an NDA still does well

This does not mean NDAs are useless. They can still matter in narrower situations:

- contractor or vendor relationships
- diligence with a specific strategic partner
- technical sharing outside the fundraising context

But the NDA and the provisional do different jobs.

| Tool | What it helps with | What it does not solve by itself |
| --- | --- | --- |
| NDA | Confidentiality expectations between named parties | Priority date, foreign filing optionality, independent invention |
| Provisional application | Priority date and filing optionality | Confidentiality obligations or immediate enforcement |

### A better founder workflow

The stronger default workflow is:

1. identify the mechanism or workflow that actually creates leverage
2. write it down clearly enough to support a provisional filing
3. file the provisional before broad technical disclosure
4. use the filing to speak more freely in the meetings that matter

That is the same Andrew-led logic behind the broader startup strategy guide: protect what matters first, then use the protection to make real business conversations easier.

### W&Patent's view

W&Patent's view is not that every founder should file reflexively. It is that founders should stop confusing confidentiality theater with protection strategy. When the business is about to disclose something important, the more useful first question is often whether the company has secured a priority date on the part of the system that actually creates leverage.

## CTA

For the broader founder framework behind this decision, read:

- `https://wpatent.com/startup-patent-strategy.htm`
```

- [ ] **Step 3: Remove the original draft from the queue**

Delete the original file:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
rm drafts/wpatent/2026-06-06-post-provisional-vs-nda.md
```

Expected: the queue no longer shows this article as pending because the approved artifact now lives in `outputs/publishing/`.

- [ ] **Step 4: Verify the queue-to-publishing move**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
test -f outputs/publishing/2026-06-07-post-provisional-vs-nda.md
test ! -f drafts/wpatent/2026-06-06-post-provisional-vs-nda.md
git diff --check -- outputs/publishing/2026-06-07-post-provisional-vs-nda.md
```

Expected: the approved artifact exists, the original draft file is gone, and diff-check is clean.

- [ ] **Step 5: Commit**

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git add outputs/publishing/2026-06-07-post-provisional-vs-nda.md drafts/wpatent/2026-06-06-post-provisional-vs-nda.md
git commit -m "docs: approve provisional vs nda publishing draft"
```

### Task 2: Add failing site tests for the new support page

**Files:**
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/shared-shell.test.mjs`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/discovery.test.mjs`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/support-pages.test.mjs`

- [ ] **Step 1: Extend the shared-shell page list**

In `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/shared-shell.test.mjs`, add `"provisional-vs-nda.htm"` to the `pages` array directly after `"startup-patent-strategy.htm"`:

```js
  "startup-patent-strategy.htm",
  "provisional-vs-nda.htm",
  "startup-patent-strategy-case-note.htm",
```

- [ ] **Step 2: Extend the discovery sitemap assertion**

In `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/discovery.test.mjs`, add the new public URL to the sitemap assertion list:

```js
    "https://wpatent.com/startup-patent-strategy.htm",
    "https://wpatent.com/provisional-vs-nda.htm",
    "https://wpatent.com/startup-patent-strategy-case-note.htm",
```

- [ ] **Step 3: Add a support-page test for the new article**

In `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/support-pages.test.mjs`, add this path constant near the other page constants:

```js
const provisionalVsNdaPath = new URL("../provisional-vs-nda.htm", import.meta.url);
```

Then add this full test near the other founder-support page tests:

```js
test("provisional vs NDA page turns an early founder protection question into a live support page", () => {
  assert.equal(existsSync(provisionalVsNdaPath), true);

  const provisionalVsNda = readFileSync(provisionalVsNdaPath, "utf8");

  assert.match(provisionalVsNda, /<title>Provisional Patent vs NDA for Founders \| W&(?:amp;)?Patent<\/title>/i);
  assert.match(provisionalVsNda, /Why Founders Should Usually File a Provisional Before Asking for an NDA/i);
  assert.match(provisionalVsNda, /Andrew Leung, founder of W&(?:amp;)?Patent/i);
  assert.match(provisionalVsNda, /investors usually do not sign NDAs/i);
  assert.match(provisionalVsNda, /the provisional changes/i);
  assert.match(provisionalVsNda, /What an NDA still does well/i);
  assert.match(provisionalVsNda, /A better founder workflow/i);
  assert.match(provisionalVsNda, /W&(?:amp;)?Patent(?:&apos;|')s view is not that every founder should file reflexively/i);
  assert.match(provisionalVsNda, /href="startup-patent-strategy\.htm"/);
  assert.match(provisionalVsNda, /"@type":\s*"Article"/);
  assert.match(provisionalVsNda, /"@type":\s*"FAQPage"/);
  assert.match(provisionalVsNda, /<link rel="canonical" href="https:\/\/wpatent\.com\/provisional-vs-nda\.htm">/);
  assert.doesNotMatch(provisionalVsNda, /Social Media Snippet/i);
});
```

- [ ] **Step 4: Run the targeted tests to confirm they fail first**

Run:

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
node --test tests/shared-shell.test.mjs tests/discovery.test.mjs tests/support-pages.test.mjs
```

Expected: failure because `provisional-vs-nda.htm` does not exist yet and `sitemap.xml` does not list it.

- [ ] **Step 5: Commit the failing-test checkpoint**

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
git add tests/shared-shell.test.mjs tests/discovery.test.mjs tests/support-pages.test.mjs
git commit -m "test: add provisional vs nda support page contract"
```

### Task 3: Implement the live W&Patent support page and anchor link

**Files:**
- Create: `/Users/andrew/backup/work/github/hmc62843u.github.io/provisional-vs-nda.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/startup-patent-strategy.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/sitemap.xml`

- [ ] **Step 1: Create the new article page with the standard W&Patent article shell**

Create `/Users/andrew/backup/work/github/hmc62843u.github.io/provisional-vs-nda.htm` using the same shell pattern as `patent-strategy-open-licensing.htm`, with these exact metadata values and section headings:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Provisional Patent vs NDA for Founders | W&amp;Patent</title>
  <meta
    name="description"
    content="Andrew Leung of W&Patent explains why founders should usually file a provisional before asking investors to sign an NDA."
  >
  <meta property="og:title" content="Provisional Patent vs NDA for Founders | W&Patent">
  <meta
    property="og:description"
    content="A founder-facing W&Patent guide to when a provisional application matters more than NDA friction in early startup conversations."
  >
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://wpatent.com/provisional-vs-nda.htm">
  <link rel="canonical" href="https://wpatent.com/provisional-vs-nda.htm">
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
    "description": "Patent strategy, commercialization framing, and founder-led authority design led by Andrew Leung."
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
    "description": "Founder of W&Patent and creator of the Trust Chain method."
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Why Founders Should Usually File a Provisional Before Asking for an NDA",
    "description": "A founder-facing W&Patent guide to using a provisional application as the stronger first protection move in investor and early partner conversations.",
    "author": {
      "@type": "Person",
      "name": "Andrew Leung"
    },
    "publisher": {
      "@type": "Organization",
      "name": "W&Patent",
      "url": "https://wpatent.com/"
    },
    "mainEntityOfPage": "https://wpatent.com/provisional-vs-nda.htm",
    "datePublished": "2026-06-07",
    "dateModified": "2026-06-07"
  }
  </script>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Should founders ask investors to sign an NDA before pitching?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually no. Most active startup investors do not sign NDAs for first meetings, so founders should prepare a better protection strategy before the conversation starts."
        }
      },
      {
        "@type": "Question",
        "name": "What does a provisional application do that an NDA does not?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A provisional application helps establish a priority date and preserve filing optionality. An NDA creates confidentiality expectations between specific parties but does not create that filing position."
        }
      },
      {
        "@type": "Question",
        "name": "When do NDAs still help founders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NDAs can still help in narrower settings such as contractor, vendor, diligence, or strategic-partner relationships where confidentiality between named parties is the main issue."
        }
      }
    ]
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
      <span class="eyebrow mono">Founder Decision Note</span>
      <h1>Why Founders Should Usually File a Provisional Before Asking for an NDA</h1>
      <p class="lead">When a founder is about to share technical detail with investors, partners, or early buyers, the first protection question is usually not whether someone will sign an NDA. It is whether the company has already filed a provisional application that preserves optionality.</p>
      <p class="mono article-attribution">By Andrew Leung, founder of W&amp;Patent<br>Canonical source: https://wpatent.com/provisional-vs-nda.htm</p>
    </section>

    <article class="article-body">
      <p>Andrew Leung, founder of W&amp;Patent, treats this as an early decision-making question rather than a legal ritual. Founders often spend time worrying about NDAs because confidentiality feels like control. In practice, the stronger first move is often to file a provisional application and then speak more freely with the priority date already in place.</p>

      <h2>Why Investors Usually Do Not Sign NDAs</h2>
      <p>VCs and many active startup investors do not sign NDAs for first meetings. That is normal startup behavior, not a special rejection of your company. They see too many companies, cannot negotiate confidentiality with everyone, and do not want friction at the start of a relationship.</p>

      <div class="article-table">
        <table>
          <thead>
            <tr>
              <th>Founder move</th>
              <th>Likely outcome</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>Ask for an NDA before the first pitch</code></td>
              <td>The investor declines or the process slows down.</td>
            </tr>
            <tr>
              <td><code>Ask informally for discretion</code></td>
              <td>You may get courtesy, but not real protection.</td>
            </tr>
            <tr>
              <td><code>File first, then pitch</code></td>
              <td>You keep more control over optionality and timing.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>What the Provisional Changes</h2>
      <p>A provisional application does not create immediate enforcement power, but it does establish a priority date. That changes the founder's posture from asking for secrecy to speaking with a filing position already in place.</p>

      <ul>
        <li>It helps preserve the option to convert into a later non-provisional filing.</li>
        <li>It makes technical conversations less dependent on confidentiality theater.</li>
        <li>It gives the founder a clearer way to discuss what matters without improvising protection strategy in the room.</li>
      </ul>

      <h2>Why Disclosure Timing Still Matters</h2>
      <p>US grace-period rules can make late filing sound safer than it really is. W&amp;Patent's founder view is that the grace period is a backup rule, not a strategy.</p>

      <div class="article-table">
        <table>
          <thead>
            <tr>
              <th>Jurisdiction lens</th>
              <th>Practical meaning for founders</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>United States grace period exists</code></td>
              <td>Some late filing flexibility may remain.</td>
            </tr>
            <tr>
              <td><code>Foreign rights often require filing before disclosure</code></td>
              <td>A public pitch can permanently narrow future options.</td>
            </tr>
            <tr>
              <td><code>Early startup conversations move fast</code></td>
              <td>Once details are out, you do not get a clean reset.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>What an NDA Still Does Well</h2>
      <p>This does not mean NDAs are useless. They still help in narrower situations such as contractor relationships, vendor work, diligence with a specific partner, or technical sharing outside the fundraising context.</p>

      <div class="article-table">
        <table>
          <thead>
            <tr>
              <th>Tool</th>
              <th>What it helps with</th>
              <th>What it does not solve by itself</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>NDA</code></td>
              <td>Confidentiality expectations between named parties</td>
              <td>Priority date, foreign filing optionality, independent invention risk</td>
            </tr>
            <tr>
              <td><code>Provisional application</code></td>
              <td>Priority date and filing optionality</td>
              <td>Confidentiality obligations or immediate enforcement</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>A Better Founder Workflow</h2>
      <p>The stronger default workflow is to identify the mechanism or workflow that actually creates leverage, document it clearly enough to support a provisional filing, file before broad technical disclosure, and then use that filing position to speak more freely in the meetings that matter.</p>

      <p>That is the same Andrew-led logic behind the broader W&amp;Patent strategy guide: protect what matters first, then use the protection to make real business conversations easier.</p>

      <h2>W&amp;Patent&apos;s View</h2>
      <p>W&amp;Patent&apos;s view is not that every founder should file reflexively. It is that founders should stop confusing confidentiality theater with protection strategy. When the business is about to disclose something important, the more useful first question is often whether the company has secured a priority date on the part of the system that actually creates leverage.</p>

      <section class="article-cta card">
        <p class="kicker">Next Step</p>
        <h2>Use the broader startup strategy guide to decide what actually deserves protection before the next meeting.</h2>
        <div class="actions">
          <a class="btn btn-solid" href="startup-patent-strategy.htm">Read the strategy guide</a>
          <a class="btn" href="services.htm">See services</a>
          <a class="btn" href="mailto:wp@wpatent.com">Contact Andrew</a>
        </div>
      </section>
    </article>
  </main>
  <footer><div class="container mono">General information only, not legal advice.</div></footer>
  <script src="site.js" defer></script>
</body>
</html>
```

- [ ] **Step 2: Link the anchor page to the new support page**

In `/Users/andrew/backup/work/github/hmc62843u.github.io/startup-patent-strategy.htm`, add this paragraph immediately after the paragraph that begins `Most founders do not need a patent portfolio first.`:

```html
      <p>For one early protection decision founders repeatedly get wrong, read <a href="provisional-vs-nda.htm">why filing a provisional usually matters more than asking investors to sign an NDA</a>.</p>
```

- [ ] **Step 3: Add the new page to the sitemap**

In `/Users/andrew/backup/work/github/hmc62843u.github.io/sitemap.xml`, add this URL entry near the existing strategy cluster URLs:

```xml
  <url><loc>https://wpatent.com/provisional-vs-nda.htm</loc></url>
```

- [ ] **Step 4: Run the targeted tests and then the full site suite**

Run:

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
node --test tests/shared-shell.test.mjs tests/discovery.test.mjs tests/support-pages.test.mjs
npm test
git diff --check
```

Expected: the targeted tests now pass, the full suite passes, and `git diff --check` is clean.

- [ ] **Step 5: Commit and push the site repo**

```bash
cd /Users/andrew/backup/work/github/hmc62843u.github.io
git add provisional-vs-nda.htm startup-patent-strategy.htm sitemap.xml tests/shared-shell.test.mjs tests/discovery.test.mjs tests/support-pages.test.mjs
git commit -m "feat: publish provisional vs nda founder note"
GIT_SSH_COMMAND='ssh -i ~/.ssh/id_hmc62843u' git push origin master
```

### Task 4: Record the live publish in founder-discovery

**Files:**
- Create: `founders/wpatent/evidence/2026-06-07-provisional-vs-nda-publish.md`
- Modify: `founders/wpatent/proof-network.md`
- Modify: `founders/wpatent/roadmap.md`

- [ ] **Step 1: Verify the live page after push**

Run:

```bash
curl -I https://wpatent.com/provisional-vs-nda.htm
curl -s https://wpatent.com/provisional-vs-nda.htm | rg -n "Why Founders Should Usually File a Provisional Before Asking for an NDA|startup-patent-strategy.htm|W&Patent's view is not that every founder should file reflexively"
```

Expected: `HTTP/2 200` (or `HTTP/1.1 200 OK`) plus matches for the headline, the anchor link, and the W&Patent view sentence.

- [ ] **Step 2: Create the publish evidence note**

Create `founders/wpatent/evidence/2026-06-07-provisional-vs-nda-publish.md` with this exact structure, filling in the site commit hash from Task 3:

```md
# W&Patent Provisional vs NDA Publish Check

> **Date:** 2026-06-07
> **Founder:** `wpatent`
> **Asset type:** founder support page
> **Site repo commit:** record the exact commit hash from Task 3

## What Shipped

W&Patent published a new founder support page at:

- `https://wpatent.com/provisional-vs-nda.htm`

The page turns one practical early founder question into a live advisory asset:

- when a founder should file a provisional before worrying about an investor NDA

It supports the canonical strategy anchor at:

- `https://wpatent.com/startup-patent-strategy.htm`

## Live Check

- HTTP status: copy the result from Step 1
- headline present: `Why Founders Should Usually File a Provisional Before Asking for an NDA`
- anchor link present: `startup-patent-strategy.htm`
- W&Patent founder view sentence present

## Interpretation

This publish adds one narrower founder-decision surface under the strategy anchor rather than introducing a second competing authority page.

## Next Evidence Step

1. Let the new page propagate.
2. Rerun Exa and the local OAuth lane before promoting the next draft.
3. Compare whether the new support page improves `W&Patent`, `Andrew Leung`, or `wpatent.com` retrieval on early-decision prompts.
```

- [ ] **Step 3: Update the proof network**

In `founders/wpatent/proof-network.md`, make these exact edits:

1. Under `## Current proof`, add:

```md
- founder support page on provisional filing versus investor NDA timing at `https://wpatent.com/provisional-vs-nda.htm`
```

2. Under `## Smallest useful next asset`, replace the current bullet with:

```md
- rerun measurement after the `provisional-vs-nda.htm` publish before promoting the next draft from the queue
```

- [ ] **Step 4: Update the roadmap execution status**

In `founders/wpatent/roadmap.md`, add this bullet under `## Current Execution Status` near the other June 7 items:

```md
- `2026-06-07`: first queue-promoted founder support page published at `https://wpatent.com/provisional-vs-nda.htm`, linking back to `startup-patent-strategy.htm`; see `founders/wpatent/evidence/2026-06-07-provisional-vs-nda-publish.md`
```

Also replace Priority Action 4 with:

```md
4. Let `provisional-vs-nda.htm` propagate, then rerun Exa and the local OAuth diagnostic lane before deciding whether to promote `post-provisional-and-poc-budget`.
```

- [ ] **Step 5: Verify and commit the founder-discovery publish record**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git diff --check -- founders/wpatent/evidence/2026-06-07-provisional-vs-nda-publish.md founders/wpatent/proof-network.md founders/wpatent/roadmap.md
```

Expected: no whitespace or patch-format errors.

Then commit:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git add founders/wpatent/evidence/2026-06-07-provisional-vs-nda-publish.md founders/wpatent/proof-network.md founders/wpatent/roadmap.md
git commit -m "docs: record provisional vs nda support page publish"
```

### Task 5: Rerun evidence before choosing the next draft

**Files:**
- Create: `founders/wpatent/evidence/2026-06-14-provisional-vs-nda-rerun.md`
- Modify: `founders/wpatent/scorecard.md`
- Modify: `founders/wpatent/roadmap.md`

- [ ] **Step 1: Wait for propagation, then run the non-Perplexity checks**

After a propagation window of roughly one week, run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --only-exa
node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --only-openai-local-oauth
```

Expected: both commands complete and append fresh rows to the prompt-run CSV.

- [ ] **Step 2: Create the rerun note**

Create `founders/wpatent/evidence/2026-06-14-provisional-vs-nda-rerun.md` with this exact structure, filling in the fresh counts from Step 1:

```md
# W&Patent Provisional vs NDA Post-Publish Rerun

> **Date:** 2026-06-14
> **Commands:**
> `node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --only-exa`
> `node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --only-openai-local-oauth`

## Context

This note measures the first queue-promoted founder support page after `provisional-vs-nda.htm` went live under the startup strategy anchor.

## Read

### Exa broad pack

- `W&Patent` mention count: copy the fresh count from Step 1
- `wpatent.com` citation count: copy the fresh count from Step 1
- `Andrew Leung` naming count: copy the fresh count from Step 1

### Local OpenAI OAuth standalone diagnostic

- `W&Patent` mention count: copy the fresh count from Step 1
- `wpatent.com` citation count: copy the fresh count from Step 1
- `Andrew Leung` naming count: copy the fresh count from Step 1

## Interpretation

Compare these results against:

- `founders/wpatent/evidence/2026-06-06-broad-rerun-after-propagation.md`
- `founders/wpatent/evidence/2026-06-07-soft-minimal-redesign-and-authority-consolidation.md`
- `founders/wpatent/evidence/2026-06-07-provisional-vs-nda-publish.md`

State plainly whether the new support page improved retrieval enough to justify promoting the next draft.

## Recommendation

Choose one:

1. promote `post-provisional-and-poc-budget`
2. pause onsite publication and shift effort to external founder proof
3. rerun with Perplexity once `PERPLEXITY_API_KEY` is restored
```

- [ ] **Step 3: Update the scorecard snapshot**

In `founders/wpatent/scorecard.md`, update these exact sections so they reflect the post-`provisional-vs-nda` read:

1. change `> **Version:** 2026-06-06` to `> **Version:** 2026-06-14`
2. update the `Broad Discovery Score` row in `## Summary Dashboard` so the `Evidence Base` cites `2026-06-14` and the `Read` cell states whether the first support-page publish changed the earlier single-citation foothold
3. replace the two rows in `## Live Prompt Snapshot` with fresh `2026-06-14` counts from the rerun note
4. replace `## Current Read` with a short 2-3 paragraph summary that answers:
   - did `provisional-vs-nda.htm` improve `W&Patent` naming?
   - did it improve `wpatent.com` citation counts?
   - did it improve `Andrew Leung` naming?
   - is the next move another draft promotion or an external-proof shift?

- [ ] **Step 4: Update the roadmap next move**

In `founders/wpatent/roadmap.md`, replace Priority Action 4 with the recommendation chosen in Step 2.

Also add this bullet under `## Recheck`:

```md
- compare whether `provisional-vs-nda.htm` changed early-decision retrieval enough to justify promoting the budget follow-on article
```

- [ ] **Step 5: Verify and commit the rerun state**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git diff --check -- founders/wpatent/evidence/2026-06-14-provisional-vs-nda-rerun.md founders/wpatent/scorecard.md founders/wpatent/roadmap.md
```

Expected: clean diff-check on the rerun note and state updates.

Then commit:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git add founders/wpatent/evidence/2026-06-14-provisional-vs-nda-rerun.md founders/wpatent/scorecard.md founders/wpatent/roadmap.md
git commit -m "docs: rerun W&Patent provisional vs nda evidence"
```
