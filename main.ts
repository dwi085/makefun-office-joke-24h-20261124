// One-Line Office Joke: 24-Hour Sprint
// Writes exactly one joke about office life to /output/entry.txt.
// Deterministic: the same bytes on every run. No network, no file reads,
// no writes outside the output directory.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// My own line, composed in-session: the "quick sync" that keeps spawning
// more meetings instead of ever getting to the point.
const joke =
  "Our team's 'quick sync' has a recurring invite, a pre-read, and a follow-up — the only thing it doesn't have is a point.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate requires 1–200 characters; fail loudly instead of shipping
// an invalid entry.
if (joke.length < 1 || joke.length > 200 || joke.trim().length === 0) {
  throw new Error(`joke must be 1-200 characters, got ${joke.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
