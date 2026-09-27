import { checkEmailServiceReachability } from "../../lib/receiptEmailProxy.js";

/** GET — verify EMAIL_SERVICE_URL points at union-reality-email (for Vercel debugging). */
export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const report = await checkEmailServiceReachability();
  res.status(report.configured && report.ok ? 200 : 503).json(report);
}
