import fs from "fs";
import path from "path";

/**
 * Persistent, auto-incrementing receipt number store.
 *
 * Format:  "URC 11 013 21318"
 *            └── prefix ─┘ │    └── "last" running number
 *                          └── "middle" running number (3 digits, zero padded)
 *
 * Both running numbers increase by 1 for every receipt, matching the existing
 * numbering (URC 11 012 21317 -> URC 11 013 21318 -> ...).
 *
 * Storage:
 *   - By default the last issued value is kept in a JSON file (data/receipt-counter.json).
 *     This works locally and on any long-running Node host.
 *   - On Vercel the filesystem is read-only, so set up Vercel KV / Upstash and the
 *     store will automatically use it (env: KV_REST_API_URL + KV_REST_API_TOKEN).
 */

const KEY = "receipt_counter";
const PREFIX = "URC 11";

// The last value that has already been issued. The next receipt is SEED + 1.
// URC 11 012 21317 was already issued, so the next auto number is URC 11 013 21318.
const SEED = { middle: 12, last: 21317 };

const KV_URL = process.env.KV_REST_API_URL;
const KV_TOKEN = process.env.KV_REST_API_TOKEN;
const useKv = Boolean(KV_URL && KV_TOKEN);

const DATA_DIR = path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "receipt-counter.json");

function format(state) {
  return `${PREFIX} ${String(state.middle).padStart(3, "0")} ${state.last}`;
}

function nextOf(state) {
  return { middle: state.middle + 1, last: state.last + 1 };
}

async function kvCommand(command) {
  const res = await fetch(KV_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${KV_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
  });
  if (!res.ok) {
    throw new Error(`KV request failed with status ${res.status}`);
  }
  return res.json();
}

async function readState() {
  if (useKv) {
    const { result } = await kvCommand(["GET", KEY]);
    if (result) {
      return typeof result === "string" ? JSON.parse(result) : result;
    }
    return { ...SEED };
  }

  try {
    const raw = fs.readFileSync(FILE, "utf-8");
    const parsed = JSON.parse(raw);
    if (typeof parsed.middle === "number" && typeof parsed.last === "number") {
      return parsed;
    }
  } catch {
    // fall through to seed
  }
  return { ...SEED };
}

async function writeState(state) {
  if (useKv) {
    await kvCommand(["SET", KEY, JSON.stringify(state)]);
    return;
  }

  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(FILE, JSON.stringify(state, null, 2), "utf-8");
}

/** Returns the next receipt number without consuming it. */
export async function peekNextReceiptNumber() {
  const state = await readState();
  return format(nextOf(state));
}

/** Increments, persists and returns the newly reserved receipt number. */
export async function commitNextReceiptNumber() {
  const state = await readState();
  const next = nextOf(state);
  await writeState(next);
  return format(next);
}
