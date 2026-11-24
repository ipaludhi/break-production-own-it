// Break Production, Own It — the one line an AI agent prints the moment it
// breaks production: a brutally honest postmortem excuse, under 200 characters.
// Deterministic by design: the entry is a single constant, so every run
// writes byte-identical output; no randomness, no clock, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I pasted the production API keys into a public channel, then asked the channel to keep it a secret.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
