import { forwardReceiptSendEmail } from "../../lib/receiptEmailProxy.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ success: false, message: "Method not allowed" });
    return;
  }

  try {
    const result = await forwardReceiptSendEmail(req.body);
    res.status(200).json(result);
  } catch (err) {
    console.error("[receipt/send-email]", err);
    const status = err.statusCode || 500;
    res.status(status).json({
      success: false,
      message: err.message || "Could not send receipt email.",
      errors: err.details?.errors,
    });
  }
}
