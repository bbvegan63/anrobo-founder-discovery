const { readdirSync, existsSync } = require("node:fs");
const os = require("node:os");
const path = require("node:path");

function buildStructuredPrompt(prompt) {
  return `Return JSON only. Use answer_text for the direct answer to this prompt: ${prompt} Use citation_urls for any source URLs you explicitly relied on, or [] when none were consulted.`;
}

function buildCodexExecArgs({ baseArgs = [], prompt, schemaPath, outputPath, scratchDir }) {
  return [
    ...baseArgs,
    "exec",
    "--skip-git-repo-check",
    "--ephemeral",
    "--output-schema",
    schemaPath,
    "-o",
    outputPath,
    buildStructuredPrompt(prompt)
  ];
}

function normalizeVersionEntries(entries) {
  return entries
    .map((entry) => {
      if (typeof entry === "string") {
        return entry;
      }

      if (entry && typeof entry === "object" && typeof entry.isDirectory === "function") {
        return entry.isDirectory() ? entry.name : null;
      }

      return null;
    })
    .filter(Boolean)
    .sort((left, right) => right.localeCompare(left, undefined, { numeric: true }));
}

function findVoltaCodexLaunch({
  homeDir = os.homedir(),
  exists = existsSync,
  readdir = readdirSync
} = {}) {
  const versionsRoot = path.join(homeDir, ".volta", "tools", "image", "node");

  let versionEntries;
  try {
    versionEntries = readdir(versionsRoot, { withFileTypes: true });
  } catch {
    return null;
  }

  const versions = normalizeVersionEntries(versionEntries);
  for (const version of versions) {
    const nodeBin = path.join(versionsRoot, version, "bin", "node");
    const codexJs = path.join(
      versionsRoot,
      version,
      "lib",
      "node_modules",
      "@openai",
      "codex",
      "bin",
      "codex.js"
    );

    if (exists(nodeBin) && exists(codexJs)) {
      return {
        command: nodeBin,
        baseArgs: [codexJs]
      };
    }
  }

  return null;
}

function resolveCodexLaunch(env = process.env) {
  const codexJs = String(env.OPENAI_LOCAL_CODEX_JS || "").trim();
  if (codexJs) {
    return {
      command: String(env.OPENAI_LOCAL_NODE_BIN || process.execPath).trim() || process.execPath,
      baseArgs: [codexJs]
    };
  }

  const codexBin = String(env.OPENAI_LOCAL_CODEX_BIN || "").trim();
  if (codexBin) {
    return {
      command: codexBin,
      baseArgs: []
    };
  }

  return findVoltaCodexLaunch() || { command: "codex", baseArgs: [] };
}

module.exports = {
  buildCodexExecArgs,
  buildStructuredPrompt,
  findVoltaCodexLaunch,
  resolveCodexLaunch
};
