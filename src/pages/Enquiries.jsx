import { useEffect, useState } from "react";

const NAVY = "#243b6b";

export default function Enquiries() {
  // Allow ?key=SECRET in the URL for quick access.
  const [key, setKey] = useState(
    () => new URLSearchParams(window.location.search).get("key") || ""
  );
  const [contacts, setContacts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (key) load(key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function load(token) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/enquiries", {
        headers: { "x-enquiries-token": token },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load enquiries");
      setContacts(data.contacts || []);
    } catch (err) {
      setError(err.message);
      setContacts(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#eef1f6",
        padding: "24px 16px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#111", marginBottom: "4px" }}>
          Enquiries
        </h1>
        <p style={{ color: "#555", fontSize: "13px", marginBottom: "20px" }}>
          Internal tool — contact form submissions.
        </p>

        <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
          <input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && load(key)}
            placeholder="Access key"
            style={{
              padding: "10px 12px",
              border: "1px solid #cfd6e4",
              borderRadius: "8px",
              fontSize: "14px",
              minWidth: "240px",
            }}
          />
          <button
            onClick={() => load(key)}
            disabled={loading || !key}
            style={{
              background: loading || !key ? "#8a97b8" : NAVY,
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "10px 18px",
              fontSize: "14px",
              fontWeight: 700,
              cursor: loading || !key ? "default" : "pointer",
            }}
          >
            {loading ? "Loading…" : "View"}
          </button>
        </div>

        {error && (
          <div
            style={{
              background: "#fdecea",
              color: "#c0392b",
              border: "1px solid #f5c6cb",
              borderRadius: "8px",
              padding: "12px 14px",
              fontSize: "13px",
              marginBottom: "16px",
            }}
          >
            {error}
          </div>
        )}

        {contacts && (
          <div style={{ background: "#fff", borderRadius: "12px", padding: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
            <div style={{ fontSize: "13px", color: "#555", marginBottom: "12px" }}>
              {contacts.length} enquir{contacts.length === 1 ? "y" : "ies"}
            </div>
            {contacts.length === 0 ? (
              <div style={{ color: "#777", fontSize: "14px" }}>No enquiries yet.</div>
            ) : (
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                  <thead>
                    <tr>
                      {["Date", "Name", "Phone", "Email", "Property Type", "Message"].map((h) => (
                        <th
                          key={h}
                          style={{
                            textAlign: "left",
                            padding: "10px 8px",
                            borderBottom: "2px solid #e2e6ee",
                            color: NAVY,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((c) => (
                      <tr key={c.id}>
                        <td style={cell}>{formatDate(c.createdAt)}</td>
                        <td style={cell}>{c.name}</td>
                        <td style={cell}>
                          <a href={`tel:${c.phone}`} style={{ color: NAVY }}>
                            {c.phone}
                          </a>
                        </td>
                        <td style={cell}>
                          <a href={`mailto:${c.email}`} style={{ color: NAVY }}>
                            {c.email}
                          </a>
                        </td>
                        <td style={cell}>{c.propertyType}</td>
                        <td style={{ ...cell, maxWidth: "260px" }}>{c.message || "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const cell = {
  padding: "10px 8px",
  borderBottom: "1px solid #eef1f6",
  verticalAlign: "top",
};

function formatDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
