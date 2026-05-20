# OpenAI Local OAuth Prompt Evidence Design

> **Date:** 2026-05-20
> **Status:** Approved for implementation

## Goal

Allow the W&Patent prompt-evidence runner to record a machine-authenticated OpenAI comparison path without requiring `OPENAI_API_KEY`, while keeping the existing API-keyed `openai_web_search` rows intact.

## Problem

The current runner treats OpenAI as a direct API comparison source only. That blocks any OpenAI comparison when the workstation has a live OpenAI OAuth session but no local `OPENAI_API_KEY`.

The current implementation also overloads the meaning of "OpenAI comparison" into one path:

- `openai_web_search` means direct API call to `https://api.openai.com/v1/responses`
- that path is unavailable when the environment only has machine login

We need a new local path without corrupting the meaning of existing scorecard rows.

## Decision

Add a separate provider named `openai_local_oauth`.

This provider will:

- run only when `--include-dev` is enabled
- use a locally authenticated Codex CLI path instead of `OPENAI_API_KEY`
- request structured JSON output so the runner can still append normalized CSV rows
- use web search in the local Codex run so it behaves like an external-answer comparison instead of a repo-reading helper
- keep citations as model-reported URLs, not as first-party API annotations

This provider will not replace `openai_web_search`.

## Provider boundary

The provider meanings after the change are:

- `perplexity`: main production evidence
- `exa_answer`: production comparison evidence
- `openai_web_search`: API-keyed OpenAI comparison evidence
- `openai_local_oauth`: local OAuth-backed OpenAI diagnostic comparison
- `opencode_dev` and `kilocode_dev`: other dev or simulation runs

This keeps the evidence log semantically honest:

- API evidence stays API evidence
- local authenticated dev evidence stays local authenticated dev evidence

## Launch strategy

The local provider should resolve the Codex CLI in this order:

1. `OPENAI_LOCAL_CODEX_JS` plus optional `OPENAI_LOCAL_NODE_BIN`
2. `OPENAI_LOCAL_CODEX_BIN`
3. a detected Volta-installed Codex JS entrypoint with its matching Node binary
4. fallback to `codex`

This is intentionally resilient to a broken shell shim.

## Execution shape

`openai_local_oauth` should:

1. create a temporary JSON Schema file
2. create a temporary output file
3. run `codex exec`
4. enable web search
5. run outside the founder repo as agent context by setting Codex `--cd /tmp`
6. ask Codex to return JSON with:
   - `answer_text`
   - `citation_urls`
7. parse the JSON file back into the prompt-evidence row format
8. clean up temporary files

## Failure behavior

If the Codex path cannot be found, cannot run, or does not return valid structured output:

- the provider should not crash the entire batch
- the runner should append a row with:
  - `system=openai_local_oauth`
  - blank answer/citations
  - a clear note describing the skip or failure

This matches the current provider-failure behavior.

## Testing

Add tests for:

- provider resolution via env override
- provider resolution via Volta fallback
- runner text including `openai_local_oauth`
- docs describing the separation between API and local OAuth OpenAI paths

## Non-goals

- replacing `openai_web_search`
- promoting local OAuth runs to production evidence by default
- changing CSV schema
- changing W&Patent scorecard semantics
