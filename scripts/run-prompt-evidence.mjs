import { execFile } from "node:child_process";
import { appendFileSync, existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";
import openaiLocalOauth from "./lib/openai-local-oauth.js";
import promptEvidence from "./lib/prompt-evidence.js";

const execFileAsync = promisify(execFile);
const { buildRow, csvEscape } = promptEvidence;
const { buildCodexExecArgs, resolveCodexLaunch } = openaiLocalOauth;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const promptEvidenceRoot = path.join(repoRoot, "founders/wpatent/evidence/site-scorecards");
const promptPath = path.join(promptEvidenceRoot, "prompts.txt");
const csvPath = path.join(promptEvidenceRoot, "2026-05-08-wpatent-prompt-runs.csv");
const openaiLocalOauthTimeoutMs = 60 * 1000;
const csvHeader =
  "timestamp,system,prompt,answer_summary,wpatent_mentioned,wpatent_cited,cited_page,andrew_named,andrew_role_correct,positioning_aligned,citation_urls,notes\n";

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function optionalEnv(name) {
  const value = process.env[name];
  return value ? value : "";
}

function shellQuote(value) {
  return `'${String(value).replace(/'/g, `'\\''`)}'`;
}

function summarizeCliStderr(stderrText) {
  const lines = String(stderrText || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const explicitError = [...lines].reverse().find((line) => line.startsWith("ERROR:"));
  if (explicitError) {
    return explicitError;
  }

  return lines.at(-1) || "";
}

function parseArgs(argv) {
  const onlyExa = argv.includes("--only-exa");
  const onlyOpenAILocalOauth = argv.includes("--only-openai-local-oauth");

  return {
    includeDev: argv.includes("--include-dev"),
    includeExa: argv.includes("--include-exa") || onlyExa,
    onlyExa,
    onlyOpenAILocalOauth
  };
}

function readPrompts() {
  return readFileSync(promptPath, "utf8")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

async function runPerplexity(prompt, apiKey) {
  const response = await fetch("https://api.perplexity.ai/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "sonar",
      messages: [{ role: "user", content: prompt }]
    })
  });

  if (!response.ok) {
    throw new Error(`Perplexity request failed: ${response.status}`);
  }

  const data = await response.json();
  return {
    answerText: data.choices?.[0]?.message?.content || "",
    citations: data.citations || [],
    notes: ""
  };
}

async function runOpenAI(prompt, apiKey) {
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-5",
      input: prompt,
      tools: [{ type: "web_search" }]
    })
  });

  if (!response.ok) {
    throw new Error(`OpenAI request failed: ${response.status}`);
  }

  const data = await response.json();
  const outputText = Array.isArray(data.output)
    ? data.output
        .flatMap((item) => item.content || [])
        .filter((item) => item.type === "output_text")
        .map((item) => item.text || "")
        .join("\n")
    : "";
  const citations = Array.isArray(data.output)
    ? data.output
        .flatMap((item) => item.content || [])
        .flatMap((item) => item.annotations || [])
        .map((annotation) => annotation.url)
        .filter(Boolean)
    : [];

  return {
    answerText: outputText,
    citations,
    notes: "openai comparison run"
  };
}

async function runOpenAILocalOAuth(prompt) {
  const launch = resolveCodexLaunch(process.env);
  const tempDir = mkdtempSync(path.join(os.tmpdir(), "openai-local-oauth-"));
  const schemaPath = path.join(tempDir, "schema.json");
  const outputPath = path.join(tempDir, "output.json");
  const stdoutPath = path.join(tempDir, "stdout.log");
  const stderrPath = path.join(tempDir, "stderr.log");

  writeFileSync(
    schemaPath,
    JSON.stringify({
      type: "object",
      properties: {
        answer_text: { type: "string" },
        citation_urls: { type: "array", items: { type: "string" } }
      },
      required: ["answer_text", "citation_urls"],
      additionalProperties: false
    }),
    "utf8"
  );

  try {
    const args = buildCodexExecArgs({
      baseArgs: launch.baseArgs,
      prompt,
      schemaPath,
      outputPath,
      scratchDir: os.tmpdir()
    });
    const command = [shellQuote(launch.command), ...args.map(shellQuote)].join(" ");

    await execFileAsync(
      "zsh",
      [
        "-lc",
        `${command} </dev/null >${shellQuote(stdoutPath)} 2>${shellQuote(stderrPath)}`
      ],
      {
        cwd: repoRoot,
        maxBuffer: 10 * 1024 * 1024,
        timeout: openaiLocalOauthTimeoutMs
      }
    );

    if (!existsSync(outputPath)) {
      throw new Error("openai_local_oauth run skipped: Codex did not produce structured output");
    }

    const parsed = JSON.parse(readFileSync(outputPath, "utf8"));
    const citations = Array.isArray(parsed.citation_urls)
      ? parsed.citation_urls.map((value) => String(value || "").trim()).filter(Boolean)
      : [];

    return {
      answerText: String(parsed.answer_text || ""),
      citations,
      notes: "openai local oauth run via Codex CLI; dev comparison run; citations model-reported or empty"
    };
  } catch (error) {
    const stderrSummary = existsSync(stderrPath)
      ? summarizeCliStderr(readFileSync(stderrPath, "utf8"))
      : "";
    if (stderrSummary) {
      throw new Error(`openai_local_oauth run failed: ${stderrSummary}`);
    }
    throw error;
  } finally {
    rmSync(tempDir, { recursive: true, force: true });
  }
}

async function runExaAnswer(prompt, apiKey) {
  const response = await fetch("https://api.exa.ai/answer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey
    },
    body: JSON.stringify({
      query: prompt,
      text: true
    })
  });

  if (!response.ok) {
    throw new Error(`Exa request failed: ${response.status}`);
  }

  const data = await response.json();
  const citations = Array.isArray(data.citations)
    ? data.citations
        .map((citation) =>
          typeof citation === "string"
            ? citation
            : citation?.url || citation?.link || citation?.source || ""
        )
        .filter(Boolean)
    : [];

  return {
    answerText: data.answer || "",
    citations,
    notes: "exa comparison run"
  };
}

async function runOpenCode(prompt) {
  const { stdout } = await execFileAsync("opencode", ["run", prompt], {
    cwd: repoRoot,
    maxBuffer: 1024 * 1024
  });

  return {
    answerText: stdout.trim(),
    citations: [],
    notes: "opencode local run via CLI; dev provider run; citations unavailable"
  };
}

async function runKiloCode(prompt) {
  const { stdout } = await execFileAsync("kilocode", ["run", "--auto", prompt], {
    cwd: repoRoot,
    maxBuffer: 1024 * 1024
  });

  return {
    answerText: stdout.trim(),
    citations: [],
    notes: "kilocode local run via CLI; dev provider run; citations unavailable"
  };
}

function buildProviders({
  includeDev,
  includeExa,
  onlyExa,
  onlyOpenAILocalOauth,
  openAIKey,
  exaKey,
  prompt
}) {
  const providers = [];

  if (onlyOpenAILocalOauth) {
    return [{ system: "openai_local_oauth", run: () => runOpenAILocalOAuth(prompt) }];
  }

  if (!onlyExa) {
    providers.push({
      system: "perplexity",
      run: () => runPerplexity(prompt, requireEnv("PERPLEXITY_API_KEY"))
    });
  }

  if (includeExa) {
    if (exaKey) {
      providers.push({
        system: "exa_answer",
        run: () => runExaAnswer(prompt, exaKey)
      });
    } else {
      providers.push({
        system: "exa_answer",
        run: async () => {
          throw new Error("exa_answer run skipped: EXA_API_KEY not configured");
        }
      });
    }
  }

  if (onlyExa || !includeDev) {
    return providers;
  }

  if (openAIKey) {
    providers.push({
      system: "openai_web_search",
      run: () => runOpenAI(prompt, openAIKey)
    });
  } else {
    providers.push({
      system: "openai_web_search",
      run: async () => {
        throw new Error("openai_web_search run skipped: OPENAI_API_KEY not configured");
      }
    });
  }

  providers.push(
    { system: "openai_local_oauth", run: () => runOpenAILocalOAuth(prompt) },
    { system: "opencode_dev", run: () => runOpenCode(prompt) },
    { system: "kilocode_dev", run: () => runKiloCode(prompt) }
  );

  return providers;
}

function serializeRow(row) {
  return [
    row.timestamp,
    row.system,
    row.prompt,
    row.answer_summary,
    row.wpatent_mentioned,
    row.wpatent_cited,
    row.cited_page,
    row.andrew_named,
    row.andrew_role_correct,
    row.positioning_aligned,
    row.citation_urls,
    row.notes
  ]
    .map(csvEscape)
    .join(",");
}

function ensureCsvHeader() {
  if (!existsSync(csvPath)) {
    writeFileSync(csvPath, csvHeader, "utf8");
  }
}

function isMissingCommandError(error) {
  return Boolean(error) && typeof error === "object" && "code" in error && error.code === "ENOENT";
}

function isTimeoutError(error) {
  return Boolean(error) && typeof error === "object" && (
    ("code" in error && error.code === "ETIMEDOUT") ||
    ("killed" in error && error.killed === true && "signal" in error && error.signal === "SIGTERM")
  );
}

function noteFromError(system, error) {
  if (isMissingCommandError(error)) {
    return `${system} run skipped: command not found`;
  }

  if (isTimeoutError(error)) {
    return `${system} run skipped: command timed out`;
  }

  return error instanceof Error ? error.message : String(error);
}

async function main() {
  const { includeDev, includeExa, onlyExa, onlyOpenAILocalOauth } = parseArgs(process.argv.slice(2));
  const prompts = readPrompts();
  const openAIKey = optionalEnv("OPENAI_API_KEY");
  const exaKey = optionalEnv("EXA_API_KEY");

  ensureCsvHeader();

  for (const prompt of prompts) {
    const timestamp = new Date().toISOString();
    const providers = buildProviders({
      includeDev,
      includeExa,
      onlyExa,
      onlyOpenAILocalOauth,
      openAIKey,
      exaKey,
      prompt
    });

    for (const provider of providers) {
      try {
        const result = await provider.run();
        const row = buildRow({
          timestamp,
          system: provider.system,
          prompt,
          answerText: result.answerText,
          citations: result.citations,
          notes: result.notes || ""
        });
        appendFileSync(csvPath, `${serializeRow(row)}\n`, "utf8");
      } catch (error) {
        const note = noteFromError(provider.system, error);
        console.warn(note);
        const row = buildRow({
          timestamp,
          system: provider.system,
          prompt,
          answerText: "",
          citations: [],
          notes: note
        });
        appendFileSync(csvPath, `${serializeRow(row)}\n`, "utf8");
      }
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
