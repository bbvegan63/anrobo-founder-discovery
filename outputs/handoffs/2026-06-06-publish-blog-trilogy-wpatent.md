# Handoff: Publish Startup Patent Strategy Trilogy to wpatent.com

> **Date:** 2026-06-06
> **From:** `anrobo-founder-discovery` (planning/drafting)
> **To:** wpatent.com site repo (`/Users/andrew/backup/work/github/hmc62843u.github.io`)
> **Status:** Ready for implementation

## Decision

Publish 4 new pages on `wpatent.com` — one pillar and three cluster posts forming a startup patent strategy series. This is the first content lever to improve W&Patent's Broad Discovery (currently 2/20) and Branded Grounding (currently 5/20) scores.

## Assets To Implement

Source drafts are in `drafts/wpatent/` (within this repo). Convert each to .htm pages in the site repo.

| Draft (this repo) | Target page (site repo) | Type |
|---|---|---|
| `drafts/wpatent/2026-06-06-pillar-startup-patent-strategy.md` | `pillar-startup-patent-strategy.htm` | Pillar |
| `drafts/wpatent/2026-06-06-post-provisional-vs-nda.md` | `provisional-vs-nda.htm` | Cluster post |
| `drafts/wpatent/2026-06-06-post-draw-first-write-second.md` | `draw-first-write-second.htm` | Cluster post |
| `drafts/wpatent/2026-06-06-post-provisional-and-poc-budget.md` | `provisional-and-poc-budget.htm` | Cluster post |

## Site Template

Every existing `wpatent.com` article page follows this exact HTML structure. Replicate it for each new page.

### Required `<head>` elements

- **Title tag:** `<title>` with `| W&Patent` suffix
- **Meta description:** ~155 chars, founder-facing
- **OG tags:** `og:title`, `og:description` (can copy from meta), `og:type: article`, `og:url`
- **Canonical URL:** `https://wpatent.com/<filename>.htm`
- **Font preconnect:** Google Fonts (Cormorant Garamond, IBM Plex Mono, Instrument Sans) — same as existing pages
- **CSS:** `<link rel="stylesheet" href="site.css">`
- **Schema JSON-LD blocks (all required):**
  - `Organization` schema for W&Patent
  - `Person` schema for Andrew Leung
  - `Article` schema per post (`headline`, `description`, `author: Andrew Leung`, `publisher: W&Patent`, `datePublished`, `mainEntityOfPage`)
  - `FAQPage` schema for posts with question-answer shaped content (post1 and post2 have natural FAQ material)

### Required `<body>` structure

```
<header class="topbar">
  <div class="container topbar-inner">
    <a class="brand" href="index.html">W&<strong>Patent</strong></a>
    <nav class="nav">
      <a href="index.html">Home</a>
      <a href="listings.htm">Listings</a>
      <a href="platform.htm">Platform</a>
      <a href="about.htm">About</a>
      <a href="why_us.htm">Why Us</a>
      <a href="faq.htm">FAQ</a>
      <a href="career.htm">Career</a>
    </nav>
  </div>
</header>
<main class="container article-shell">
  <section class="article-header">
    <span class="eyebrow mono">[eyebrow label]</span>
    <h1>[title]</h1>
    <p class="lead">[one-sentence lead]</p>
    <p class="mono article-attribution">By Andrew Leung, founder of W&amp;Patent<br>Canonical source: https://wpatent.com/[filename].htm</p>
  </section>
  <article class="article-body">
    [converted markdown content — see below]
  </article>
</main>
<footer><div class="container mono">General information only, not legal advice.</div></footer>
<script src="site.js" defer></script>
```

Note: `wpatent.com` uses `.htm` extension, NOT `.html`.

### CSS classes used on existing pages

| Class | Where |
|---|---|
| `.container` | Wrapper |
| `.topbar` / `.topbar-inner` | Header |
| `.brand` | Site brand link |
| `.nav` | Navigation |
| `.article-shell` | Main content wrapper |
| `.article-header` | Title section |
| `.eyebrow` | Category label (e.g. "Founder Patent Strategy") |
| `.lead` | Lead paragraph |
| `.mono` | Mono font metadata |
| `.article-attribution` | Byline |
| `.article-body` | Content body |
| `.article-table` | Table wrapper |
| `.article-cta.card` | CTA section at bottom |
| `.card` | Card component |
| `.grid.cols-2` | Two-column grid |
| `.actions` | CTA button row |
| `.btn` / `.btn-solid` | Buttons |
| `kicker` class | CTA subtitle |

## Content Conversion Rules

### Markdown to HTML mapping

| Markdown | HTML |
|---|---|
| `## Section Title` | `<h2>Section Title</h2>` |
| `### Subsection` | `<h3>Subsection</h3>` |
| `**bold**` | `<strong>bold</strong>` |
| `*italic*` | `<em>italic</em>` |
| `> blockquote` | `<blockquote><p>blockquote</p></blockquote>` |
| `| table |` | `<div class="article-table"><table><thead><tr><th>...</th></tr></thead><tbody><tr><td>...</td></tr></tbody></table></div>` |
| `- list item` | `<ul><li>list item</li></ul>` |
| `1. numbered` | `<ol><li>numbered</li></ol>` |
| `---` (hr) | `<hr>` |
| `[text](post1.md)` | Update to `.htm` extension and relative path |

### Internal link mapping

Convert all internal `.md` references to `.htm`:

| Draft reference | Site reference |
|---|---|
| `2026-06-06-pillar-startup-patent-strategy.md` | `pillar-startup-patent-strategy.htm` |
| `2026-06-06-post-provisional-vs-nda.md` | `provisional-vs-nda.htm` |
| `2026-06-06-post-draw-first-write-second.md` | `draw-first-write-second.htm` |
| `2026-06-06-post-provisional-and-poc-budget.md` | `provisional-and-poc-budget.htm` |

### Cross-links to existing site pages

Add natural cross-links in each post to existing pages where relevant:

- `startup-patent-strategy.htm` — main strategy guide
- `patent-commercialization-for-founders.htm` — commercialization guide
- `trust-chain.htm` — Trust Chain method
- `andrew-leung-startup-patent-strategy.htm` — founder POV page
- `patent-strategy-open-licensing.htm` — patents vs openness note
- `trust-chain-explainer.htm` — deeper Trust Chain explainer

### Eyebrow labels for each page

| Page | Eyebrow |
|---|---|
| `pillar-startup-patent-strategy.htm` | `Startup Patent Strategy` |
| `provisional-vs-nda.htm` | `Patent Strategy Series` |
| `draw-first-write-second.htm` | `Patent Strategy Series` |
| `provisional-and-poc-budget.htm` | `Patent Strategy Series` |

### Social Media Snippet sections

Each draft has a `## Social Media Snippet` section at the bottom. **Remove this section** from the page — it's for LinkedIn/Twitter promotion, not for the page itself.

### Disclaimer section formatting

The disclaimer text in the drafts can remain as-is inside `<p>` tags within the `.article-body`, or be removed if it duplicates the site footer (`"General information only, not legal advice."`). The footer already covers this. If you keep it, keep it at the bottom of `.article-body` before the CTA.

## CTA Section

Each page should end with a `<section class="article-cta card">` inside `.article-body`. At minimum, link to the pillar page and one related cluster. Reference how existing pages do this (see `startup-patent-strategy.htm` lines 278-290 for the pattern).

Suggested CTAs:

- **Pillar page:** Link to all three cluster posts + Trust Chain + contact
- **Each cluster post:** Link to pillar + the other two cluster posts + relevant existing page

## What NOT To Do

- Do NOT add these pages to the navigation bar (Home, Listings, Platform, About, Why Us, FAQ, Career) — they are content pages linked from within each other and cross-referenced from existing pages
- Do NOT remove or rename any existing files
- Do NOT change the site CSS or JS
- Do NOT add the Social Media Snippets to the published page

## Post-Publish Tasks

After all 4 pages are live on `wpatent.com`:

1. **Update `sitemap.xml`** in the site repo — add entries for all 4 new pages with their `lastmod` dates
2. **Return to this workspace** (`anrobo-founder-discovery`) and:
   - Promote the draft files: copy from `drafts/wpatent/` to `outputs/publishing/` with a note that they've been published
   - Refresh the W&Patent evidence with a publish-check note in `founders/wpatent/evidence/YYYY-MM-DD-blog-trilogy-publish.md`
   - Schedule a prompt-evidence rerun after ~1 week to measure whether the new pages moved Broad Discovery or Branded Grounding scores
   - Update the W&Patent proof-network.md to include these 4 pages as published proof assets

## Reference Files

- Existing page template: `startup-patent-strategy.htm` in site repo
- Site CSS: `site.css` in site repo
- Drafts: `drafts/wpatent/2026-06-06-*.md` in this repo
- Site repo path: `/Users/andrew/backup/work/github/hmc62843u.github.io`
