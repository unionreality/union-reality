/**
 * Forwards receipt email requests to the Spring Boot emailService.
 * Set EMAIL_SERVICE_URL (server-side) on Vercel or in server/.env for local dev.
 */
export async function forwardReceiptSendEmail(body) {
  const base = (process.env.EMAIL_SERVICE_URL || "").replace(/\/$/, "");
  if (!base) {
    const err = new Error(
      "Receipt email service is not configured. Set EMAIL_SERVICE_URL."
    );
    err.statusCode = 503;
    throw err;
  }

  const upstream = await fetch(`${base}/api/v1/receipt/send-email`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await upstream.json().catch(() => ({}));
  if (!upstream.ok) {
    const err = new Error(data.message || "Could not send receipt email.");
    err.statusCode = upstream.status;
    err.details = data;
    throw err;
  }
  return data;
}
