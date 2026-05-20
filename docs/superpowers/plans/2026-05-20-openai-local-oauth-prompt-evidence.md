# OpenAI Local OAuth Prompt Evidence Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a separate `openai_local_oauth` provider to the W&Patent prompt-evidence runner so local OpenAI OAuth sessions can power diagnostic comparison runs without `OPENAI_API_KEY`.

**Architecture:** Keep the existing `openai_web_search` API path unchanged and add a new helper module that resolves and launches a local Codex CLI path with structured JSON output. The runner will treat that helper like the other dev providers and append normalized rows without changing the CSV schema.

**Tech Stack:** Node.js, `node:test`, CommonJS helper modules, Codex CLI `exec` JSON-schema output, filesystem temp files

---

## File map

| File | Responsibility |
| --- | --- |
| `scripts/lib/openai-local-oauth.js` | Resolve local Codex launch path, build structured prompt, and produce CLI args |
| `scripts/run-prompt-evidence.mjs` | Call the new helper and register `openai_local_oauth` under `--include-dev` |
| `tests/prompt-evidence.test.mjs` | Cover provider resolution, runner registration, and docs expectations |
| `founders/wpatent/evidence/site-scorecards/README.md` | Document provider semantics and local OAuth behavior |
| `README.md` | Document the new `--include-dev` OpenAI local OAuth comparison path |

### Task 1: Add failing tests for local OAuth provider support

**Files:**
- Create: none
- Modify: `tests/prompt-evidence.test.mjs`
- Test: `tests/prompt-evidence.test.mjs`

- [ ] **Step 1: Add a helper-module existence test and resolution assertions**

Add a new test that requires `scripts/lib/openai-local-oauth.js` and asserts it exports:

```js
const {
  buildStructuredPrompt,
  findVoltaCodexLaunch,
  resolveCodexLaunch
} = require("../scripts/lib/openai-local-oauth.js");
```

The test should cover:

```js
const launch = resolveCodexLaunch({
  OPENAI_LOCAL_CODEX_JS: "/tmp/codex.js",
  OPENAI_LOCAL_NODE_BIN: "/tmp/node"
});

assert.deepEqual(launch, {
  command: "/tmp/node",
  baseArgs: ["/tmp/codex.js"]
});
```

- [ ] **Step 2: Add a Volta fallback resolution test**

Add a test that uses:

```js
findVoltaCodexLaunch({
  homeDir: "/Users/tester",
  exists: (value) =>
    value ===
      "/Users/tester/.volta/tools/image/node/25.6.1/bin/node" ||
    value ===
      "/Users/tester/.volta/tools/image/node/25.6.1/lib/node_modules/@openai/codex/bin/codex.js",
  readdir: () => [{ name: "25.6.1", isDirectory: () => true }]
});
```

Expected result:

```js
{
  command: "/Users/tester/.volta/tools/image/node/25.6.1/bin/node",
  baseArgs: [
    "/Users/tester/.volta/tools/image/node/25.6.1/lib/node_modules/@openai/codex/bin/codex.js"
  ]
}
```

- [ ] **Step 3: Extend runner and docs expectations**

Update existing assertions so they fail until implementation lands:

```js
assert.match(runner, /openai_local_oauth/);
assert.match(readme, /openai_local_oauth/i);
assert.match(rootReadme, /--include-dev/i);
```

- [ ] **Step 4: Run the focused test file and verify failure**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
node --test tests/prompt-evidence.test.mjs
```

Expected: FAIL because the new helper and provider are not implemented yet.

### Task 2: Implement the local OAuth helper and runner integration

**Files:**
- Create: `scripts/lib/openai-local-oauth.js`
- Modify: `scripts/run-prompt-evidence.mjs`
- Test: `tests/prompt-evidence.test.mjs`

- [ ] **Step 1: Create the helper module**

Implement a CommonJS helper with exports for:

```js
buildStructuredPrompt(prompt)
findVoltaCodexLaunch({ homeDir, exists, readdir })
resolveCodexLaunch(env)
```

Behavior:

- `buildStructuredPrompt(prompt)` tells Codex to answer the supplied prompt using web search when needed and return JSON with `answer_text` and `citation_urls`
- `findVoltaCodexLaunch(...)` scans `~/.volta/tools/image/node/*`
- `resolveCodexLaunch(env)` honors env overrides before falling back to Volta and finally `codex`

- [ ] **Step 2: Integrate `openai_local_oauth` into the runner**

In `scripts/run-prompt-evidence.mjs`:

- import the helper module
- add a `runOpenAILocalOAuth(prompt)` function
- create temporary schema/output files
- invoke Codex with:

```text
exec --skip-git-repo-check --ephemeral --search --color never --cd /tmp --output-schema <schema> -o <output> <prompt>
```

- parse returned JSON
- return:

```js
{
  answerText,
  citations,
  notes: "openai local oauth run via Codex CLI; dev comparison run; citations model-reported"
}
```

- [ ] **Step 3: Register the provider**

Inside the `includeDev` provider block, append:

```js
{ system: "openai_local_oauth", run: () => runOpenAILocalOAuth(prompt) }
```

Keep `openai_web_search` behavior unchanged.

- [ ] **Step 4: Run the focused test file and verify pass**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
node --test tests/prompt-evidence.test.mjs
```

Expected: PASS.

### Task 3: Update docs for the new provider boundary

**Files:**
- Modify: `founders/wpatent/evidence/site-scorecards/README.md`
- Modify: `README.md`
- Test: `tests/prompt-evidence.test.mjs`

- [ ] **Step 1: Update provider policy text**

Document:

- `openai_web_search` remains API-keyed comparison evidence
- `openai_local_oauth` is a local OAuth-backed diagnostic comparison path
- `--include-dev` includes the local OAuth OpenAI provider

- [ ] **Step 2: Keep production guidance narrow**

Retain the existing production-safe default command:

```bash
node --env-file=.env.local scripts/run-prompt-evidence.mjs --include-exa
```

Add an explicit dev compare example:

```bash
node --env-file-if-exists=.env.local scripts/run-prompt-evidence.mjs --include-exa --include-dev
```

- [ ] **Step 3: Run the focused test file again**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
node --test tests/prompt-evidence.test.mjs
```

Expected: PASS.

### Task 4: Full verification and commit

**Files:**
- Modify: all changed files above
- Test: `tests/prompt-evidence.test.mjs`
- Test: `tests/boundary-archive.test.mjs`
- Test: `tests/test_*.py`

- [ ] **Step 1: Run founder-discovery verification**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
node --test tests/prompt-evidence.test.mjs tests/boundary-archive.test.mjs
python3 -m unittest discover -s tests -p 'test_*.py'
git diff --check
```

Expected:

- Node tests pass
- Python tests pass
- `git diff --check` is clean

- [ ] **Step 2: Commit the runner rework**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git add docs/superpowers/specs/2026-05-20-openai-local-oauth-prompt-evidence-design.md \
  docs/superpowers/plans/2026-05-20-openai-local-oauth-prompt-evidence.md \
  README.md \
  founders/wpatent/evidence/site-scorecards/README.md \
  scripts/lib/openai-local-oauth.js \
  scripts/run-prompt-evidence.mjs \
  tests/prompt-evidence.test.mjs
git commit -m "feat: add OpenAI local OAuth prompt evidence runner"
```

- [ ] **Step 3: Push when verification is still green**

Run:

```bash
cd /Users/andrew/backup/work/company-os/anrobo-os/anrobo-founder-discovery
git push origin master
```

Expected: push succeeds with the new runner support.
