/**
 * Forwards receipt email requests to the Spring Boot emailService (union-reality-email).
 *
 * Vercel / local server env:
 *   EMAIL_SERVICE_URL=https://your-service.onrender.com
 * (Root URL only — no /api/v1/... suffix, not the union-reality website URL.)
 */
function normalizeEmailServiceBase(raw) {
  let base = (raw || "").trim().replace(/\/$/, "");
  if (!base) return "";

  // Allow pasting the full send-email URL by mistake.
  base = base.replace(/\/api\/v1\/receipt(\/send-email)?\/?$/i, "");

  if (/unionrealityandconstructions\.com/i.test(base)) {
    console.warn(
      "[receiptEmailProxy] EMAIL_SERVICE_URL looks like the marketing site, not union-reality-email."
    );
  }
  return base;
}

export function getEmailServiceSendUrl() {
  const base = normalizeEmailServiceBase(process.env.EMAIL_SERVICE_URL);
  if (!base) return null;
  return `${base}/api/v1/receipt/send-email`;
}

export function getEmailServiceHealthUrl() {
  const base = normalizeEmailServiceBase(process.env.EMAIL_SERVICE_URL);
  if (!base) return null;
  return `${base}/actuator/health`;
}

/**
 * @returns {Promise<{ configured: boolean, base: string|null, healthUrl: string|null, sendUrl: string|null, ok: boolean, status: number|null, body: unknown }>}
 */
export async function checkEmailServiceReachability() {
  const base = normalizeEmailServiceBase(process.env.EMAIL_SERVICE_URL);
  const healthUrl = getEmailServiceHealthUrl();
  if (!base || !healthUrl) {
    return {
      configured: false,
      base: null,
      healthUrl: null,
      sendUrl: getEmailServiceSendUrl(),
      ok: false,
      status: null,
      body: { message: "EMAIL_SERVICE_URL is not set" },
    };
  }

  try {
    const res = await fetch(healthUrl, { method: "GET" });
    const body = await res.json().catch(() => ({}));
    return {
      configured: true,
      base,
      healthUrl,
      sendUrl: getEmailServiceSendUrl(),
      ok: res.ok,
      status: res.status,
      body,
    };
  } catch (cause) {
    return {
      configured: true,
      base,
      healthUrl,
      sendUrl: getEmailServiceSendUrl(),
      ok: false,
      status: null,
      body: { message: cause.message || "Could not reach email service" },
    };
  }
}

export async function forwardReceiptSendEmail(body) {
  const sendUrl = getEmailServiceSendUrl();
  if (!sendUrl) {
    const err = new Error(
      "Receipt email service is not configured. Set EMAIL_SERVICE_URL on Vercel to your deployed union-reality-email URL."
    );
    err.statusCode = 503;
    throw err;
  }

  const upstream = await fetch(sendUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const text = await upstream.text();
  let data = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { message: text.slice(0, 200) };
  }

  if (!upstream.ok) {
    const hint =
      upstream.status === 404
        ? ` Email API not found at ${sendUrl}. Deploy union-reality-email and set EMAIL_SERVICE_URL to that host root (not https://www.unionrealityandconstructions.com).`
        : "";
    const err = new Error(
      (data.message || `Email service returned HTTP ${upstream.status}.`) + hint
    );
    err.statusCode = upstream.status;
    err.details = { ...data, upstreamUrl: sendUrl, upstreamStatus: upstream.status };
    console.error("[receiptEmailProxy] upstream failed", sendUrl, upstream.status, text.slice(0, 500));
    throw err;
  }
  return data;
}
