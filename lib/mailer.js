import nodemailer from "nodemailer";

/**
 * Sends enquiry notification emails.
 *
 * Configure via environment variables (SMTP of the domain mailbox):
 *   SMTP_HOST   e.g. smtp.gmail.com / smtp.zoho.in / smtp-mail.outlook.com
 *   SMTP_PORT   465 (SSL) or 587 (STARTTLS)   [default 465]
 *   SMTP_USER   chaitra@unionrealityandconstructions.com
 *   SMTP_PASS   mailbox / app password
 *   MAIL_FROM   defaults to SMTP_USER (chaitra@unionrealityandconstructions.com)
 *   MAIL_TO     defaults to sales@unionrealityandconstructions.com
 *
 * If SMTP is not configured the mailer is a no-op (so the contact form still
 * saves the enquiry and succeeds).
 */

const host = process.env.SMTP_HOST;
const port = Number(process.env.SMTP_PORT || 465);
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

const enabled = Boolean(host && user && pass);
const FROM = process.env.MAIL_FROM || user;
const TO = process.env.MAIL_TO || "sales@unionrealityandconstructions.com";

let transporter = null;
function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
  }
  return transporter;
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function sendEnquiryEmail(record) {
  if (!enabled) {
    return { sent: false, reason: "SMTP not configured" };
  }

  const rows = [
    ["Name", record.name],
    ["Phone", record.phone],
    ["Email", record.email],
    ["Property Type", record.propertyType],
    ["Message", record.message || "—"],
    ["Received At", record.createdAt],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;font-weight:bold;background:#f3f5fa;border:1px solid #e2e6ee;">${label}</td><td style="padding:6px 12px;border:1px solid #e2e6ee;">${escapeHtml(
          value
        )}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#111;">
      <h2 style="color:#243b6b;margin:0 0 12px;">New Website Enquiry</h2>
      <table style="border-collapse:collapse;font-size:14px;">${rows}</table>
      <p style="font-size:12px;color:#777;margin-top:16px;">
        Sent automatically from the Union Reality &amp; Constructions website.
      </p>
    </div>`;

  const text = `New Website Enquiry
Name: ${record.name}
Phone: ${record.phone}
Email: ${record.email}
Property Type: ${record.propertyType}
Message: ${record.message || "-"}
Received At: ${record.createdAt}`;

  await getTransporter().sendMail({
    from: `"Union Reality Website" <${FROM}>`,
    to: TO,
    replyTo: record.email,
    subject: `New enquiry: ${record.name} (${record.propertyType})`,
    html,
    text,
  });

  return { sent: true };
}
