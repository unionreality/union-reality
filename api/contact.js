import { validateContact, saveContact } from "../lib/enquiryStore.js";
import { sendEnquiryEmail } from "../lib/mailer.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const error = validateContact(req.body);
  if (error) {
    res.status(400).json({ error });
    return;
  }

  try {
    const record = await saveContact(req.body);
    console.log("[contact] New submission:", record.name, record.phone);

    // Best-effort email notification — never fail the request if email breaks.
    try {
      const result = await sendEnquiryEmail(record);
      if (!result.sent) console.warn("[contact] email not sent:", result.reason);
    } catch (mailErr) {
      console.error("[contact] email error:", mailErr);
    }

    res.status(201).json({ success: true, id: record.id });
  } catch (err) {
    console.error("[contact]", err);
    res.status(500).json({ error: "Could not save your enquiry. Please try again." });
  }
}
