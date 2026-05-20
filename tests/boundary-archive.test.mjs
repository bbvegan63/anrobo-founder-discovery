import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

function read(relativePath) {
  return readFileSync(new URL(`../${relativePath}`, import.meta.url), "utf8");
}

test("founder-discovery owns the OpenFor comparison-control docs", () => {
  for (const relativePath of [
    "founders/openfor/evidence/comparison-controls/README.md",
    "founders/openfor/evidence/comparison-controls/2026-05-19-openfor-scorecard.md",
    "founders/openfor/evidence/comparison-controls/2026-05-19-openfor-identity-overview.md",
    "founders/openfor/evidence/comparison-controls/2026-05-19-openfor-discovery-grounding-overview.md",
    "founders/openfor/evidence/comparison-controls/2026-05-19-openfor-improvement-snapshot.md"
  ]) {
    assert.equal(existsSync(new URL(`../${relativePath}`, import.meta.url)), true);
  }

  const guide = read("founders/openfor/evidence/comparison-controls/README.md");
  const scorecard = read("founders/openfor/evidence/comparison-controls/2026-05-19-openfor-scorecard.md");
  const identity = read("founders/openfor/evidence/comparison-controls/2026-05-19-openfor-identity-overview.md");
  const grounding = read(
    "founders/openfor/evidence/comparison-controls/2026-05-19-openfor-discovery-grounding-overview.md"
  );
  const improvements = read(
    "founders/openfor/evidence/comparison-controls/2026-05-19-openfor-improvement-snapshot.md"
  );

  assert.match(guide, /# Comparison Controls/);
  assert.match(guide, /OpenFor\.co/i);
  assert.match(scorecard, /# OpenFor\.co Comparison Scorecard/);
  assert.match(identity, /# OpenFor\.co Identity Overview/);
  assert.match(grounding, /# OpenFor\.co Discovery And Grounding Overview/);
  assert.match(improvements, /# OpenFor\.co Improvement Snapshot/);
});

test("founder-discovery archives the founder-discovery skill bundle", () => {
  for (const relativePath of [
    "received/hmc62843u-site-skill/founder-led-discovery-spine/README.md",
    "received/hmc62843u-site-skill/founder-led-discovery-spine/SKILL.md",
    "received/hmc62843u-site-skill/founder-led-discovery-spine/profiles/wpatent-proof-prompts.json",
    "received/hmc62843u-site-skill/founder-led-discovery-spine/profiles/openfor-comparison-control.json"
  ]) {
    assert.equal(existsSync(new URL(`../${relativePath}`, import.meta.url)), true);
  }

  const readme = read("received/hmc62843u-site-skill/founder-led-discovery-spine/README.md");
  const prompts = read(
    "received/hmc62843u-site-skill/founder-led-discovery-spine/profiles/wpatent-proof-prompts.json"
  );

  assert.match(readme, /Founder-Led Discovery Spine/i);
  assert.match(prompts, /W&Patent/i);
});

test("founder-discovery archives the legacy proof-flow control plane", () => {
  for (const relativePath of [
    "received/hmc62843u-site-proof-flow/docs/proof-flow/README.md",
    "received/hmc62843u-site-proof-flow/data/proof-flow/workspace.json",
    "received/hmc62843u-site-proof-flow/scripts/apply-proof-sync.mjs",
    "received/hmc62843u-site-proof-flow/scripts/lib/proof-flow.js",
    "received/hmc62843u-site-proof-flow/tests/proof-flow.test.mjs",
    "received/hmc62843u-site-proof-flow/tests/proof-flow-mixed-mode.test.mjs"
  ]) {
    assert.equal(existsSync(new URL(`../${relativePath}`, import.meta.url)), true);
  }

  const readme = read("received/hmc62843u-site-proof-flow/docs/proof-flow/README.md");
  const workspace = read("received/hmc62843u-site-proof-flow/data/proof-flow/workspace.json");

  assert.match(readme, /Proof Flow/i);
  assert.match(workspace, /startup patent strategy/i);
});
