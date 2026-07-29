import { commitNextReceiptNumber } from "../../lib/receiptStore.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  try {
    const receiptNo = await commitNextReceiptNumber();
    res.status(200).json({ receiptNo });
  } catch (err) {
    console.error("[receipt/commit]", err);
    res.status(500).json({ error: "Could not update receipt counter" });
  }
}
