import { peekNextReceiptNumber } from "../../lib/receiptStore.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  try {
    const receiptNo = await peekNextReceiptNumber();
    res.status(200).json({ receiptNo });
  } catch (err) {
    console.error("[receipt/next]", err);
    res.status(500).json({ error: "Could not read receipt counter" });
  }
}
