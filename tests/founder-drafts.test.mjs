import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

function read(relativePath) {
  return readFileSync(new URL(`../${relativePath}`, import.meta.url), "utf8");
}

test("founder-discovery documents the shared drafts staging layer", () => {
  assert.equal(existsSync(new URL("../drafts/README.md", import.meta.url)), true);

  const claude = read("CLAUDE.md");
  const rootReadme = read("README.md");
  const draftsReadme = read("drafts/README.md");

  assert.match(claude, /drafts\/<founder-id>\//i);
  assert.match(claude, /outputs\/publishing/i);
  assert.match(rootReadme, /drafts\/<founder-id>\//i);
  assert.match(draftsReadme, /temporary founder-facing content/i);
  assert.match(draftsReadme, /outputs\/publishing/i);
});
