import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

function read(relativePath) {
  return readFileSync(new URL(`../${relativePath}`, import.meta.url), "utf8");
}

test("founder-discovery owns the W&Patent prompt evidence assets", () => {
  assert.equal(
    existsSync(
      new URL("../founders/wpatent/evidence/site-scorecards/prompts.txt", import.meta.url)
    ),
    true
  );
  assert.equal(
    existsSync(
      new URL(
        "../founders/wpatent/evidence/site-scorecards/2026-05-08-wpatent-prompt-runs.csv",
        import.meta.url
      )
    ),
    true
  );

  const prompts = read("founders/wpatent/evidence/site-scorecards/prompts.txt");
  const csv = read("founders/wpatent/evidence/site-scorecards/2026-05-08-wpatent-prompt-runs.csv");

  for (const fragment of [
    "patent strategy for startups",
    "startup defensibility through patents",
    "patent commercialization for founders",
    "entity authority for AI search"
  ]) {
    assert.match(prompts, new RegExp(fragment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
  }

  assert.match(
    csv,
    /timestamp,system,prompt,answer_summary,wpatent_mentioned,wpatent_cited,cited_page,andrew_named,andrew_role_correct,positioning_aligned,citation_urls,notes/i
  );
});

test("prompt evidence README documents the founder-discovery ownership boundary", () => {
  assert.equal(
    existsSync(new URL("../founders/wpatent/evidence/site-scorecards/README.md", import.meta.url)),
    true
  );

  const readme = read("founders/wpatent/evidence/site-scorecards/README.md");

  assert.match(readme, /founder-private or ops evidence/i);
  assert.match(readme, /not in the public site repo/i);
  assert.match(readme, /prompts\.txt/i);
  assert.match(readme, /prompt-runs\.csv/i);
  assert.match(readme, /append/i);
  assert.match(readme, /--env-file=.env\.local/i);
  assert.match(readme, /openai_local_oauth/i);
});

test("founder-discovery env template lists the prompt-evidence provider keys", () => {
  assert.equal(existsSync(new URL("../.env.example", import.meta.url)), true);

  const example = read(".env.example");
  const rootReadme = read("README.md");

  assert.match(example, /EXA_API_KEY=/);
  assert.match(example, /PERPLEXITY_API_KEY=/);
  assert.match(example, /OPENAI_API_KEY=/);
  assert.match(rootReadme, /founders\/wpatent\/evidence\/site-scorecards/i);
  assert.match(rootReadme, /run-prompt-evidence\.mjs/i);
  assert.match(rootReadme, /--include-dev/i);
});

test("local OpenAI OAuth helper resolves explicit and Volta Codex launches", () => {
  assert.equal(
    existsSync(new URL("../scripts/lib/openai-local-oauth.js", import.meta.url)),
    true
  );

  const {
    buildCodexExecArgs,
    buildStructuredPrompt,
    findBundledAppCodexLaunch,
    findVoltaCodexLaunch,
    resolveCodexLaunch
  } = require("../scripts/lib/openai-local-oauth.js");

  const explicitLaunch = resolveCodexLaunch({
    OPENAI_LOCAL_CODEX_JS: "/tmp/codex.js",
    OPENAI_LOCAL_NODE_BIN: "/tmp/node"
  });

  assert.deepEqual(explicitLaunch, {
    command: "/tmp/node",
    baseArgs: ["/tmp/codex.js"]
  });

  const voltaLaunch = findVoltaCodexLaunch({
    homeDir: "/Users/tester",
    exists: (value) =>
      value === "/Users/tester/.volta/tools/image/node/25.6.1/bin/node" ||
      value ===
        "/Users/tester/.volta/tools/image/node/25.6.1/lib/node_modules/@openai/codex/bin/codex.js",
    readdir: () => [{ name: "25.6.1", isDirectory: () => true }]
  });

  assert.deepEqual(voltaLaunch, {
    command: "/Users/tester/.volta/tools/image/node/25.6.1/bin/node",
    baseArgs: [
      "/Users/tester/.volta/tools/image/node/25.6.1/lib/node_modules/@openai/codex/bin/codex.js"
    ]
  });

  const bundledLaunch = findBundledAppCodexLaunch({
    exists: (value) => value === "/Applications/Codex.app/Contents/Resources/codex"
  });

  assert.deepEqual(bundledLaunch, {
    command: "/Applications/Codex.app/Contents/Resources/codex",
    baseArgs: []
  });

  assert.match(buildStructuredPrompt("startup patent strategy"), /citation_urls/i);
  assert.match(buildStructuredPrompt("startup patent strategy"), /startup patent strategy/i);

  const execArgs = buildCodexExecArgs({
    baseArgs: ["/tmp/codex.js"],
    prompt: "startup patent strategy",
    schemaPath: "/tmp/schema.json",
    outputPath: "/tmp/output.json",
    scratchDir: "/tmp"
  });

  assert.deepEqual(execArgs.slice(0, 5), [
    "/tmp/codex.js",
    "exec",
    "--skip-git-repo-check",
    "--ephemeral",
    "--output-schema"
  ]);
});

test("normalization helpers identify W&Patent and Andrew signals", () => {
  assert.equal(existsSync(new URL("../scripts/lib/prompt-evidence.js", import.meta.url)), true);

  const {
    buildRow,
    extractFirstWpatentCitation,
    normalizeCitations
  } = require("../scripts/lib/prompt-evidence.js");

  const citations = normalizeCitations([
    "https://wpatent.com/trust-chain-explainer.htm",
    "https://example.com/reference"
  ]);

  assert.deepEqual(citations, [
    "https://wpatent.com/trust-chain-explainer.htm",
    "https://example.com/reference"
  ]);
  assert.equal(
    extractFirstWpatentCitation(citations),
    "https://wpatent.com/trust-chain-explainer.htm"
  );

  const row = buildRow({
    timestamp: "2026-05-08T00:00:00.000Z",
    system: "perplexity",
    prompt: "trust chain for websites",
    answerText:
      "Andrew Leung explains how W&Patent uses the Trust Chain for founder-led authority.",
    citations
  });

  assert.equal(row.timestamp, "2026-05-08T00:00:00.000Z");
  assert.equal(row.system, "perplexity");
  assert.equal(row.wpatent_mentioned, "yes");
  assert.equal(row.wpatent_cited, "yes");
  assert.equal(row.cited_page, "https://wpatent.com/trust-chain-explainer.htm");
  assert.equal(row.andrew_named, "yes");
  assert.equal(row.andrew_role_correct, "manual");
  assert.equal(row.positioning_aligned, "manual");
  assert.equal(
    row.citation_urls,
    "https://wpatent.com/trust-chain-explainer.htm|https://example.com/reference"
  );
});

test("csvEscape quotes commas and quotes safely", () => {
  assert.equal(existsSync(new URL("../scripts/lib/prompt-evidence.js", import.meta.url)), true);

  const { csvEscape } = require("../scripts/lib/prompt-evidence.js");

  assert.equal(csvEscape("simple"), "simple");
  assert.equal(csvEscape("alpha,beta"), "\"alpha,beta\"");
  assert.equal(csvEscape("say \"hello\""), "\"say \"\"hello\"\"\"");
});

test("runner script uses founder-discovery evidence paths and required APIs", () => {
  assert.equal(existsSync(new URL("../scripts/run-prompt-evidence.mjs", import.meta.url)), true);

  const runner = read("scripts/run-prompt-evidence.mjs");
  for (const fragment of [
    "PERPLEXITY_API_KEY",
    "OPENAI_API_KEY",
    "EXA_API_KEY",
    "founders/wpatent/evidence/site-scorecards",
    "prompts.txt",
    "2026-05-08-wpatent-prompt-runs.csv",
    "api.perplexity.ai",
    "api.openai.com",
    "api.exa.ai",
    "appendFileSync",
    "buildRow",
    "openai_local_oauth"
  ]) {
    assert.match(runner, new RegExp(fragment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
  }
});

test("runner defaults to perplexity only and supports dev providers", () => {
  assert.equal(existsSync(new URL("../scripts/run-prompt-evidence.mjs", import.meta.url)), true);

  const runner = read("scripts/run-prompt-evidence.mjs");
  assert.match(runner, /--include-dev/);
  assert.match(runner, /--include-exa/);
  assert.match(runner, /--only-exa/);
  assert.match(runner, /--only-openai-local-oauth/);
  assert.match(runner, /perplexity/);
  assert.match(runner, /exa_answer/);
  assert.match(runner, /openai_web_search/);
  assert.match(runner, /openai_local_oauth/);
  assert.match(runner, /opencode_dev/);
  assert.match(runner, /kilocode_dev/);
});

test("runner includes CLI-based dev provider handling", () => {
  assert.equal(existsSync(new URL("../scripts/run-prompt-evidence.mjs", import.meta.url)), true);

  const runner = read("scripts/run-prompt-evidence.mjs");
  assert.match(runner, /execFile/);
  assert.match(runner, /opencode/);
  assert.match(runner, /kilocode/);
  assert.match(runner, /summarizeCliStderr/);
});
