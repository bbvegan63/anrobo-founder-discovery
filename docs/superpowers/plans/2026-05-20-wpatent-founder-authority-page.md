# W&Patent Founder Authority Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a founder-signature page that explicitly ties Andrew Leung, W&Patent, startup patent strategy, and patent commercialization together, then wire it into the public site and founder-discovery records.

**Architecture:** Use the existing W&Patent editorial article pattern and extend the site contract through tests first. Add one new article page, link it from the three strongest founder/topic surfaces, add it to the sitemap, and then record the page as the next retrieval experiment in founder-discovery.

**Tech Stack:** Static HTML, JSON-LD schema, Node.js `node:test`, Markdown, `npm test`

---

### Task 1: Add the failing public-page contract

**Files:**
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/support-pages.test.mjs`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/tests/discovery.test.mjs`

- [ ] **Step 1: Add the new page fixture to the support-page test**

Extend the page reads so the new page is loaded:

```js
const founderAuthority = readFileSync(
  new URL("../andrew-leung-startup-patent-strategy.htm", import.meta.url),
  "utf8"
);
```

- [ ] **Step 2: Add a failing support-page test for the new founder-authority page**

Add a test that expects:

```js
test("Andrew Leung founder authority page is a direct citation surface", () => {
  assert.match(founderAuthority, /<title>Andrew Leung on Startup Patent Strategy and Commercialization \| W&(?:amp;)?Patent<\/title>/i);
  assert.match(founderAuthority, /Andrew Leung, founder of W&(?:amp;)?Patent/i);
  assert.match(founderAuthority, /startup patent strategy/i);
  assert.match(founderAuthority, /patent commercialization/i);
  assert.match(founderAuthority, /Protect, Position, Commercialize/i);
  assert.match(founderAuthority, /"@type":\s*"Article"/);
  assert.match(founderAuthority, /"@type":\s*"FAQPage"/);
  assert.match(founderAuthority, /href="about\.htm"/);
  assert.match(founderAuthority, /href="startup-patent-strategy\.htm"/);
  assert.match(founderAuthority, /href="patent-commercialization-for-founders\.htm"/);
  assert.match(founderAuthority, /<link rel="canonical" href="https:\/\/wpatent\.com\/andrew-leung-startup-patent-strategy\.htm">/);
});
```

- [ ] **Step 3: Add failing link assertions to existing page tests**

Add assertions that:

```js
assert.match(about, /href="andrew-leung-startup-patent-strategy\.htm"/);
assert.match(strategy, /href="andrew-leung-startup-patent-strategy\.htm"/);
assert.match(commercialization, /href="andrew-leung-startup-patent-strategy\.htm"/);
```

- [ ] **Step 4: Add a failing sitemap expectation**

In `tests/discovery.test.mjs`, add:

```js
"https://wpatent.com/andrew-leung-startup-patent-strategy.htm",
```

- [ ] **Step 5: Run the focused failing tests**

Run:

```bash
node --test tests/support-pages.test.mjs tests/discovery.test.mjs
```

Expected: FAIL because the new page and links do not exist yet.

### Task 2: Implement the founder-signature page and links

**Files:**
- Create: `/Users/andrew/backup/work/github/hmc62843u.github.io/andrew-leung-startup-patent-strategy.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/about.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/startup-patent-strategy.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/patent-commercialization-for-founders.htm`
- Modify: `/Users/andrew/backup/work/github/hmc62843u.github.io/sitemap.xml`

- [ ] **Step 1: Create the new founder-authority page**

Build the page using the current editorial shell pattern with:

- canonical `https://wpatent.com/andrew-leung-startup-patent-strategy.htm`
- `Organization`, `Person`, `Article`, and `FAQPage` schema
- direct founder attribution
- sections for founder identity, patent strategy, commercialization, and the `Protect, Position, Commercialize` framework
- internal links back to the key W&Patent pages

- [ ] **Step 2: Link the new page from `about.htm`**

Add a direct founder-authority CTA in the founder/about content so `about.htm` clearly routes to the new page.

- [ ] **Step 3: Link the new page from `startup-patent-strategy.htm`**

Add a founder point-of-view companion link near the strategy explanation or CTA cluster.

- [ ] **Step 4: Link the new page from `patent-commercialization-for-founders.htm`**

Add a founder synthesis link near the commercialization explanation or CTA cluster.

- [ ] **Step 5: Add the new URL to `sitemap.xml`**

Insert:

```xml
<url><loc>https://wpatent.com/andrew-leung-startup-patent-strategy.htm</loc></url>
```

alongside the other W&Patent article pages.

- [ ] **Step 6: Run the focused tests again**

Run:

```bash
node --test tests/support-pages.test.mjs tests/discovery.test.mjs
```

Expected: PASS.

### Task 3: Record the new founder-authority surface in founder-discovery

**Files:**
- Modify: `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/roadmap.md`
- Modify: `/Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery/founders/wpatent/proof-network.md`

- [ ] **Step 1: Update the roadmap execution status**

Add a `2026-05-20` entry that records the new founder-authority page as the next retrieval experiment.

- [ ] **Step 2: Update the proof network**

List the new page under current proof and adjust the “smallest useful next asset” or equivalent note so it reflects the page now existing.

- [ ] **Step 3: Run founder-discovery verification**

Run:

```bash
git diff --check
```

Expected: PASS with no whitespace or patch errors.

### Task 4: Run full verification and commit

**Files:**
- Verify both repos after implementation

- [ ] **Step 1: Run the full site test suite**

Run:

```bash
npm test
```

Expected: PASS with the new founder-authority page included.

- [ ] **Step 2: Run founder-discovery verification again**

Run:

```bash
git diff --check
```

Expected: PASS.

- [ ] **Step 3: Commit the site repo changes**

Run:

```bash
git add andrew-leung-startup-patent-strategy.htm about.htm startup-patent-strategy.htm patent-commercialization-for-founders.htm sitemap.xml tests/support-pages.test.mjs tests/discovery.test.mjs
git commit -m "feat: add W&Patent founder authority page"
```

- [ ] **Step 4: Commit the founder-discovery updates**

Run:

```bash
git add founders/wpatent/roadmap.md founders/wpatent/proof-network.md
git commit -m "docs: record founder authority surface"
```

- [ ] **Step 5: Push if remotes are already configured and working**

Run:

```bash
git push origin master
```

in each repo if the current session still has working remote access.
