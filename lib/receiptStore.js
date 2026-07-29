import fs from "fs";
import path from "path";
import { createClient } from "@vercel/kv";

/**
 * Persistent, auto-incrementing receipt number store.
 *
 * Format:  "URC 11 013 21318"
 *            └─ prefix ┘ │    └── LAST_BASE + seq
 *                         └── MIDDLE_BASE + seq (3 digits, zero padded)
 *
 * `seq` is the number of receipts issued after the base value. Both running
 * numbers increase by 1 for every receipt, matching the existing numbering
 * (URC 11 012 21317 -> URC 11 013 21318 -> ...).
 *
 * Storage:
 *   - Vercel / production: an atomic Redis counter via @vercel/kv. Connect a
 *     Vercel KV / Upstash store and it is used automatically as soon as the
 *     env vars are present (KV_REST_API_URL/TOKEN or UPSTASH_REDIS_REST_URL/TOKEN).
 *   - Local dev: a JSON file (data/receipt-counter.json), seeded from the
 *     committed data/receipt-counter.seed.json on first run.
 */

// URC 11 012 21317 was already issued, so seq 0 == 12 / 21317 and the first
// tool-generated receipt (seq 1) is URC 11 013 21318.
const MIDDLE_BASE = 12;
const LAST_BASE = 21317;
const SEQ_KEY = "receipt:seq";

// Support both the Vercel KV and the Upstash Redis env var names.
const KV_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const KV_TOKEN =
  process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const useKv = Boolean(KV_URL && KV_TOKEN);

const kv = useKv ? createClient({ url: KV_URL, token: KV_TOKEN }) : null;

const DATA_DIR = path.join(process.cwd(), "data");
// Runtime file (git-ignored, holds the live counter).
const FILE = path.join(DATA_DIR, "receipt-counter.json");
// Committed seed file (initial value used when no runtime file exists yet).
const SEED_FILE = path.join(DATA_DIR, "receipt-counter.seed.json");

function format(seq) {
  return `${"URC 11"} ${String(MIDDLE_BASE + seq).padStart(3, "0")} ${
    LAST_BASE + seq
  }`;
}

function readSeqFile(file) {
  try {
    const parsed = JSON.parse(fs.readFileSync(file, "utf-8"));
    if (typeof parsed.seq === "number") return parsed.seq;
    // Backwards compatibility with the old { middle, last } format.
    if (typeof parsed.middle === "number") return parsed.middle - MIDDLE_BASE;
  } catch {
    // ignore
  }
  return null;
}

function readSeq() {
  const live = readSeqFile(FILE);
  if (live !== null) return live;
  const seed = readSeqFile(SEED_FILE);
  if (seed !== null) return seed;
  return 0;
}

function writeSeq(seq) {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(FILE, JSON.stringify({ seq }, null, 2), "utf-8");
}

/** Returns the next receipt number without consuming it. */
export async function peekNextReceiptNumber() {
  if (useKv) {
    const current = Number((await kv.get(SEQ_KEY)) || 0);
    return format(current + 1);
  }
  return format(readSeq() + 1);
}

/** Atomically increments, persists and returns the newly reserved receipt number. */
export async function commitNextReceiptNumber() {
  if (useKv) {
    const next = await kv.incr(SEQ_KEY);
    return format(next);
  }
  const next = readSeq() + 1;
  writeSeq(next);
  return format(next);
}
