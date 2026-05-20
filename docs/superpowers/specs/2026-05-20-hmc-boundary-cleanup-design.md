# HMC Site Boundary Cleanup Design

> **Date:** 2026-05-20
> **Primary repos:** `hmc62843u.github.io`, `anrobo-founder-discovery`
> **Status:** Design written from current repo state with recommended path selected

## Purpose

Clean up the boundary between the public W&Patent site repo and the founder-discovery operating system so that:

- the site repo owns public pages, public assets, and site-facing tests
- founder-discovery owns prompt evidence, scorecards, comparison controls, founder operations, and provider-keyed tooling
- API keys are no longer needed in the site repo after the cleanup completes

## Current Boundary Problem

`hmc62843u.github.io` is no longer just a static site repo.
It also owns several internal operational layers:

- prompt-evidence tooling and raw logs
- internal scorecard documentation
- comparison-control documentation
- proof-flow and mixed-mode workflow scripts and data
- a founder-discovery skill bundle under `.agents/skills/`

That creates three problems:

1. The site repo still needs provider keys for internal evidence work.
2. The site repo README and tests validate internal discovery artifacts that are not part of the public website.
3. Founder-discovery conceptually owns these workflows already, but does not yet own all of the files.

## What Should Stay In `hmc62843u.github.io`

The site repo should keep:

- public pages such as `*.htm`, `index.html`, `main.html`
- public crawl assets such as `robots.txt` and `sitemap.xml`
- shared public assets such as `site.css`, `site.js`, images, and starter-kit files
- public or public-adjacent content docs that are genuinely site-owned
- tests that prove page, schema, link, and sitemap behavior

## What Should Move Out Of `hmc62843u.github.io`

### Active evidence ownership

Move ownership of these into `anrobo-founder-discovery`:

- `.env.example`
- `scripts/run-prompt-evidence.mjs`
- `scripts/lib/prompt-evidence.js`
- `docs/scorecards/`
- `tests/prompt-evidence.test.mjs`
- README references that describe scorecards or provider-keyed evidence work

### Comparison and control artifacts

Move ownership of these into `anrobo-founder-discovery`:

- `docs/comparison-controls/`
- `tests/trust-chain-scorecard.test.mjs` sections that validate comparison-control and scorecard docs

### Founder-discovery skill state

Move or retire:

- `.agents/skills/founder-led-discovery-spine/`

This is a founder-discovery operating bundle, not a site runtime dependency.

### Legacy proof-flow control plane

Move or archive:

- `docs/proof-flow/`
- `data/proof-flow/`
- `scripts/*proof*`
- `scripts/lib/proof-flow.js`
- `tests/proof-flow.test.mjs`
- `tests/proof-flow-mixed-mode.test.mjs`

This layer has already been conceptually superseded by `anrobo-founder-discovery`, which now owns mixed mode, founder evidence, publishing outputs, community state, and sync packets.

## Options

### Option 1: Minimal key cleanup

Move only prompt-evidence tooling and scorecards out of the site repo, leaving proof-flow, comparison docs, and skill files in place.

**Pros**

- fastest path to removing API-key dependency from the site repo
- smallest immediate code/test change set

**Cons**

- still leaves the site repo acting like an operations repo
- boundary remains conceptually muddy

### Option 2: Full ownership split

Move all active discovery-ops artifacts out of the site repo, including prompt evidence, scorecards, comparison controls, proof-flow control plane, and founder-discovery skill files.

**Pros**

- cleanest long-term boundary
- makes repo purpose obvious
- removes API-key expectations from the site repo
- matches the operating model already documented in founder-discovery

**Cons**

- larger migration
- requires coordinated test cleanup and path rewiring

### Option 3: Hard prune

Delete the non-site artifacts from `hmc62843u.github.io` without preserving or migrating them.

**Pros**

- fastest visual cleanup

**Cons**

- throws away operational continuity
- makes founder-discovery weaker instead of stronger
- not acceptable for evidence-led work

## Recommendation

Choose **Option 2: Full ownership split**, but execute it in phases.

This gives the clean target boundary without forcing a single risky megachange.

## Recommended Target Structure

### `anrobo-founder-discovery` becomes the owner of:

- provider-keyed prompt-evidence scripts and tests
- W&Patent raw prompt logs and prompt source files
- W&Patent historical scorecard artifacts
- OpenFor comparison-control artifacts
- founder-discovery skill and runbook files currently stranded in `.agents/skills/`
- archived proof-flow and mixed-mode legacy files from the old site-side system

### `hmc62843u.github.io` becomes the owner of:

- public site content
- public site shell and assets
- site-only tests
- no provider-keyed local workflow

## Migration Principle

Do not combine boundary cleanup with large rewrites.

In particular:

- do **not** rewrite the prompt-evidence runner from Node to Python during the boundary move
- do **not** redesign proof-flow concepts during the archive move
- do **not** purge all historical site design docs in the same pass

Move ownership first.
Simplify implementation language or archive depth later only if still useful.

## Suggested Phases

### Phase 1: Remove key dependency from the site repo

Move prompt-evidence tooling and scorecard ownership into founder-discovery, then remove site-repo env references and evidence tests.

### Phase 2: Move comparison and skill ownership

Move comparison-control docs and the founder-discovery skill bundle into founder-discovery.

### Phase 3: Archive legacy proof-flow from the site repo

Preserve it under founder-discovery as legacy reference material, then remove its active scripts, tests, docs, and data from the site repo.

### Phase 4: Tighten repo identity

Update the two READMEs and final test suites so each repo describes only what it actually owns.

## Success Criteria

The cleanup is successful when:

- `hmc62843u.github.io` contains no references to `EXA_API_KEY`, `PERPLEXITY_API_KEY`, or `OPENAI_API_KEY`
- the site repo has no prompt-evidence or proof-flow scripts left
- founder-discovery owns the evidence and comparison workflows
- site tests only validate public pages and public assets
- founder-discovery docs explain where prompt evidence and comparison controls now live
- both repos still have clean, passing verification paths after the split
