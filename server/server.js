import express from "express";
import cors from "cors";
import {
  peekNextReceiptNumber,
  commitNextReceiptNumber,
} from "../lib/receiptStore.js";
import {
  validateContact,
  validateEmail,
  saveContact,
  saveSubscriber,
  getContacts,
} from "../lib/enquiryStore.js";
import { sendEnquiryEmail } from "../lib/mailer.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.get("/api/receipt/next", async (_req, res) => {
  try {
    const receiptNo = await peekNextReceiptNumber();
    res.json({ receiptNo });
  } catch (err) {
    console.error("[receipt/next]", err);
    res.status(500).json({ error: "Could not read receipt counter" });
  }
});

app.post("/api/receipt/commit", async (_req, res) => {
  try {
    const receiptNo = await commitNextReceiptNumber();
    res.json({ receiptNo });
  } catch (err) {
    console.error("[receipt/commit]", err);
    res.status(500).json({ error: "Could not update receipt counter" });
  }
});

app.post("/api/contact", async (req, res) => {
  const error = validateContact(req.body);
  if (error) {
    return res.status(400).json({ error });
  }

  try {
    const record = await saveContact(req.body);
    console.log("[contact] New submission:", record.name, record.phone);

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
});

app.get("/api/enquiries", async (req, res) => {
  const expected = process.env.ENQUIRIES_TOKEN;
  if (!expected) {
    return res.status(500).json({
      error:
        "Admin access is not configured. Set the ENQUIRIES_TOKEN environment variable.",
    });
  }
  const provided = req.headers["x-enquiries-token"] || req.query?.key;
  if (provided !== expected) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const contacts = await getContacts();
    res.json({ contacts });
  } catch (err) {
    console.error("[enquiries]", err);
    res.status(500).json({ error: "Could not load enquiries" });
  }
});

app.post("/api/subscribe", async (req, res) => {
  const error = validateEmail(req.body?.email);
  if (error) {
    return res.status(400).json({ error });
  }

  try {
    const { record, alreadySubscribed } = await saveSubscriber(req.body.email);
    if (alreadySubscribed) {
      return res.json({ success: true, message: "Already subscribed" });
    }
    console.log("[subscribe] New subscriber:", record.email);
    res.status(201).json({ success: true, id: record.id });
  } catch (err) {
    console.error("[subscribe]", err);
    res.status(500).json({ error: "Could not subscribe. Please try again." });
  }
});

app.listen(PORT, () => {
  console.log(`Contact API running on http://localhost:${PORT}`);
});
