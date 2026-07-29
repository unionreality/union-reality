import { validateEmail, saveSubscriber } from "../lib/enquiryStore.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const error = validateEmail(req.body?.email);
  if (error) {
    res.status(400).json({ error });
    return;
  }

  try {
    const { record, alreadySubscribed } = await saveSubscriber(req.body.email);
    if (alreadySubscribed) {
      res.status(200).json({ success: true, message: "Already subscribed" });
      return;
    }
    console.log("[subscribe] New subscriber:", record.email);
    res.status(201).json({ success: true, id: record.id });
  } catch (err) {
    console.error("[subscribe]", err);
    res.status(500).json({ error: "Could not subscribe. Please try again." });
  }
}
