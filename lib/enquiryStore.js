import fs from "fs";
import path from "path";
import { createClient } from "@vercel/kv";

/**
 * Storage for contact enquiries and newsletter subscribers.
 *
 *   - Production (Vercel): persisted in Redis via @vercel/kv (the filesystem is
 *     read-only). Connect a Vercel KV / Upstash store and it is used
 *     automatically once the env vars are present.
 *   - Local dev: JSON files under server/data/.
 */

const KV_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const KV_TOKEN =
  process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const useKv = Boolean(KV_URL && KV_TOKEN);
const kv = useKv ? createClient({ url: KV_URL, token: KV_TOKEN }) : null;

const DATA_DIR = path.join(process.cwd(), "server", "data");
const CONTACTS_FILE = path.join(DATA_DIR, "contacts.json");
const SUBSCRIBERS_FILE = path.join(DATA_DIR, "subscribers.json");

function readFileJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch {
    return [];
  }
}

function writeFileJson(file, data) {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf-8");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(body = {}) {
  if (!body.name?.trim()) return "Name is required";
  if (!body.phone?.trim()) return "Phone number is required";
  if (!body.email?.trim()) return "Email is required";
  if (!EMAIL_RE.test(body.email.trim())) return "Invalid email address";
  if (!body.propertyType?.trim()) return "Property type is required";
  return null;
}

export function validateEmail(email) {
  if (!email?.trim()) return "Email is required";
  if (!EMAIL_RE.test(email.trim())) return "Invalid email address";
  return null;
}

export async function saveContact(body) {
  const record = {
    name: body.name.trim(),
    phone: body.phone.trim(),
    email: body.email.trim(),
    propertyType: body.propertyType.trim(),
    message: body.message?.trim() || "",
    createdAt: new Date().toISOString(),
  };

  if (useKv) {
    const id = await kv.incr("contact:id");
    record.id = String(id);
    await kv.set(`contact:${id}`, record);
    await kv.lpush("contacts", id);
    return record;
  }

  record.id = Date.now().toString();
  const contacts = readFileJson(CONTACTS_FILE);
  contacts.push(record);
  writeFileJson(CONTACTS_FILE, contacts);
  return record;
}

/** Returns all contact enquiries, newest first. */
export async function getContacts() {
  if (useKv) {
    const ids = await kv.lrange("contacts", 0, -1); // lpush => already newest first
    if (!ids || ids.length === 0) return [];
    const keys = ids.map((id) => `contact:${id}`);
    const records = await kv.mget(...keys);
    return records.filter(Boolean);
  }

  const contacts = readFileJson(CONTACTS_FILE);
  return [...contacts].reverse();
}

/** Returns { record, alreadySubscribed }. */
export async function saveSubscriber(email) {
  const normalized = email.trim().toLowerCase();

  if (useKv) {
    const added = await kv.sadd("subscribers:emails", normalized);
    if (added === 0) {
      return { alreadySubscribed: true };
    }
    const id = await kv.incr("subscriber:id");
    const record = {
      id: String(id),
      email: normalized,
      createdAt: new Date().toISOString(),
    };
    await kv.set(`subscriber:${id}`, record);
    return { record, alreadySubscribed: false };
  }

  const subscribers = readFileJson(SUBSCRIBERS_FILE);
  if (subscribers.some((s) => s.email === normalized)) {
    return { alreadySubscribed: true };
  }
  const record = {
    id: Date.now().toString(),
    email: normalized,
    createdAt: new Date().toISOString(),
  };
  subscribers.push(record);
  writeFileJson(SUBSCRIBERS_FILE, subscribers);
  return { record, alreadySubscribed: false };
}
