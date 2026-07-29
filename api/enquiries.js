import { getContacts } from "../lib/enquiryStore.js";

/**
 * Token-gated list of contact enquiries for the hidden /enquiries admin page.
 * Requires the ENQUIRIES_TOKEN env var to be set, then supply it via the
 * `x-enquiries-token` header or `?key=` query param.
 */
export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const expected = process.env.ENQUIRIES_TOKEN;
  if (!expected) {
    res.status(500).json({
      error:
        "Admin access is not configured. Set the ENQUIRIES_TOKEN environment variable.",
    });
    return;
  }

  const provided = req.headers["x-enquiries-token"] || req.query?.key;
  if (provided !== expected) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const contacts = await getContacts();
    res.status(200).json({ contacts });
  } catch (err) {
    console.error("[enquiries]", err);
    res.status(500).json({ error: "Could not load enquiries" });
  }
}
