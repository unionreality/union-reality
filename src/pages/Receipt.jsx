import { useEffect, useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

/* ----------------------------- helpers ----------------------------- */

// Format a number using the Indian numbering system: 100000 -> "1,00,000"
function formatIndian(value) {
  const num = Number(value) || 0;
  const [intPart, decPart] = num.toFixed(0).split(".");
  const sign = intPart.startsWith("-") ? "-" : "";
  const digits = intPart.replace("-", "");
  let lastThree = digits.slice(-3);
  const otherNumbers = digits.slice(0, -3);
  if (otherNumbers !== "") {
    lastThree = "," + lastThree;
  }
  const formatted =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return sign + formatted + (decPart ? "." + decPart : "");
}

const ONES = [
  "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
  "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
  "Seventeen", "Eighteen", "Nineteen",
];
const TENS = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

function twoDigits(n) {
  if (n < 20) return ONES[n];
  const t = Math.floor(n / 10);
  const o = n % 10;
  return TENS[t] + (o ? " " + ONES[o] : "");
}

function threeDigits(n) {
  const h = Math.floor(n / 100);
  const rest = n % 100;
  let str = "";
  if (h) str += ONES[h] + " Hundred";
  if (rest) str += (h ? " " : "") + twoDigits(rest);
  return str;
}

// Convert a number to words using the Indian numbering system.
function numberToWords(value) {
  let num = Math.floor(Number(value) || 0);
  if (num === 0) return "Zero Rupees Only";

  const crore = Math.floor(num / 10000000);
  num %= 10000000;
  const lakh = Math.floor(num / 100000);
  num %= 100000;
  const thousand = Math.floor(num / 1000);
  num %= 1000;
  const hundred = num;

  const parts = [];
  if (crore) parts.push(twoDigits(crore) + " Crore");
  if (lakh) parts.push(twoDigits(lakh) + " Lakh");
  if (thousand) parts.push(twoDigits(thousand) + " Thousand");
  if (hundred) parts.push(threeDigits(hundred));

  return parts.join(" ").trim() + " Rupees Only";
}

/* ------------------------- default form data ------------------------- */

const todayStr = () => {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${dd}/${mm}/${d.getFullYear()}`;
};

const INITIAL = {
  receiptNo: "",
  date: todayStr(),
  // property
  project: "KSRTC LAYOUT",
  siteNo: "72 & 58",
  measurement: "1200 Sqft North Facing (800 Sqft + 400 Sqft)",
  location: "",
  // customer
  clientName: "Ajay Kumar M",
  salutation: "Mr.",
  mobile: "+91 63666 54009",
  email: "rohanbnglr95@gmail.com",
  address: "Kengeri Satellite Town",
  // payment
  items: [
    {
      description: "Amount received towards Site No. 72 & 58 at KSRTC Layout",
      amount: 100000,
    },
  ],
};

/* ------------------------------ styles ------------------------------ */

const NAVY = "#243b6b";
const BORDER = "#111111";
const TEXT = "#111111";

const sectionHeading = {
  fontWeight: 700,
  fontSize: "13px",
  letterSpacing: "0.5px",
  color: TEXT,
  marginBottom: "6px",
};

const detailLine = { fontSize: "13.5px", color: TEXT, margin: "3px 0", lineHeight: 1.35 };

/* ------------------------------ page ------------------------------ */

const raf = () =>
  new Promise((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(resolve))
  );

async function waitForImages(node) {
  if (!node) return;
  const imgs = Array.from(node.querySelectorAll("img"));
  await Promise.all(
    imgs.map((img) =>
      img.complete && img.naturalWidth > 0
        ? Promise.resolve()
        : new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          })
    )
  );
}

export default function Receipt() {
  const [form, setForm] = useState(INITIAL);
  const [generating, setGenerating] = useState(false);
  const [numberLoading, setNumberLoading] = useState(true);
  const receiptRef = useRef(null);

  // Fetch the next auto-incrementing receipt number from the server on load.
  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch("/api/receipt/next");
        if (!res.ok) throw new Error("bad status");
        const data = await res.json();
        if (active && data.receiptNo) {
          setForm((f) => ({ ...f, receiptNo: data.receiptNo }));
        }
      } catch {
        // Server unreachable — leave a manual placeholder so the tool still works.
        if (active) setForm((f) => ({ ...f, receiptNo: "URC 11 013 21318" }));
      } finally {
        if (active) setNumberLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const total = form.items.reduce((sum, it) => sum + (Number(it.amount) || 0), 0);

  const update = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const updateItem = (idx, key, val) =>
    setForm((f) => ({
      ...f,
      items: f.items.map((it, i) => (i === idx ? { ...it, [key]: val } : it)),
    }));

  const addItem = () =>
    setForm((f) => ({ ...f, items: [...f.items, { description: "", amount: 0 }] }));

  const removeItem = (idx) =>
    setForm((f) => ({ ...f, items: f.items.filter((_, i) => i !== idx) }));

  const handleDownload = async () => {
    if (!receiptRef.current) return;
    setGenerating(true);
    try {
      // Reserve (auto-increment + persist) the receipt number on the server.
      let receiptNo = form.receiptNo;
      try {
        const res = await fetch("/api/receipt/commit", { method: "POST" });
        if (!res.ok) throw new Error("commit failed");
        const data = await res.json();
        if (data.receiptNo) receiptNo = data.receiptNo;
      } catch {
        alert(
          "Could not reserve a new receipt number from the server. The PDF will use the currently shown number instead."
        );
      }

      // Render the reserved number into the receipt before capturing.
      if (receiptNo !== form.receiptNo) {
        setForm((f) => ({ ...f, receiptNo }));
        await raf();
      }

      await waitForImages(receiptRef.current);

      const canvas = await html2canvas(receiptRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft > 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      const fileName = (receiptNo || "payment-receipt").trim() + ".pdf";
      pdf.save(fileName);

      // Advance the displayed number to the next available one.
      try {
        const res = await fetch("/api/receipt/next");
        if (res.ok) {
          const data = await res.json();
          if (data.receiptNo) {
            setForm((f) => ({ ...f, receiptNo: data.receiptNo }));
          }
        }
      } catch {
        // ignore — not critical
      }
    } catch (err) {
      console.error("PDF generation failed", err);
      alert("Could not generate the PDF. Please try again.");
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#eef1f6", padding: "24px 16px" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "22px",
            fontWeight: 700,
            color: "#111",
            marginBottom: "4px",
          }}
        >
          Payment Receipt Generator
        </h1>
        <p style={{ fontFamily: "system-ui, sans-serif", color: "#555", fontSize: "13px", marginBottom: "20px" }}>
          Internal tool — fill in the details and download the receipt as a PDF.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
          {/* ------------------------- FORM ------------------------- */}
          <div
            style={{
              flex: "1 1 340px",
              minWidth: "320px",
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            <FormGroup label="Receipt No (auto-generated)">
              <Input
                value={numberLoading ? "Loading…" : form.receiptNo}
                onChange={() => {}}
                readOnly
              />
              <div style={{ fontSize: "11px", color: "#8a97b8", marginTop: "4px" }}>
                Automatically incremented and stored on the server.
              </div>
            </FormGroup>
            <FormGroup label="Date">
              <Input value={form.date} onChange={(v) => update("date", v)} />
            </FormGroup>

            <Divider>Property Details</Divider>
            <FormGroup label="Project / Layout Name">
              <Input value={form.project} onChange={(v) => update("project", v)} />
            </FormGroup>
            <FormGroup label="Site No">
              <Input value={form.siteNo} onChange={(v) => update("siteNo", v)} />
            </FormGroup>
            <FormGroup label="Measurement / Dimensions">
              <Input value={form.measurement} onChange={(v) => update("measurement", v)} />
            </FormGroup>
            <FormGroup label="Location (optional)">
              <Input value={form.location} onChange={(v) => update("location", v)} />
            </FormGroup>

            <Divider>Customer Details</Divider>
            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{ width: "90px" }}>
                <FormGroup label="Title">
                  <Input value={form.salutation} onChange={(v) => update("salutation", v)} />
                </FormGroup>
              </div>
              <div style={{ flex: 1 }}>
                <FormGroup label="Client Name">
                  <Input value={form.clientName} onChange={(v) => update("clientName", v)} />
                </FormGroup>
              </div>
            </div>
            <FormGroup label="Mobile Number">
              <Input value={form.mobile} onChange={(v) => update("mobile", v)} />
            </FormGroup>
            <FormGroup label="Email">
              <Input value={form.email} onChange={(v) => update("email", v)} />
            </FormGroup>
            <FormGroup label="Address">
              <Input value={form.address} onChange={(v) => update("address", v)} />
            </FormGroup>

            <Divider>Payment Details</Divider>
            {form.items.map((it, idx) => (
              <div
                key={idx}
                style={{
                  border: "1px solid #e2e6ee",
                  borderRadius: "8px",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <FormGroup label={`Description ${idx + 1}`}>
                  <Input
                    value={it.description}
                    onChange={(v) => updateItem(idx, "description", v)}
                  />
                </FormGroup>
                <FormGroup label="Amount (₹)">
                  <Input
                    type="number"
                    value={it.amount}
                    onChange={(v) => updateItem(idx, "amount", v)}
                  />
                </FormGroup>
                {form.items.length > 1 && (
                  <button
                    onClick={() => removeItem(idx)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#c0392b",
                      cursor: "pointer",
                      fontSize: "12px",
                      padding: 0,
                    }}
                  >
                    Remove row
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={addItem}
              style={{
                background: "#eef1f6",
                border: "1px dashed #9aa4bd",
                borderRadius: "8px",
                padding: "8px 12px",
                cursor: "pointer",
                fontSize: "13px",
                color: "#243b6b",
                fontWeight: 600,
                width: "100%",
              }}
            >
              + Add payment row
            </button>

            <button
              onClick={handleDownload}
              disabled={generating || numberLoading}
              style={{
                marginTop: "18px",
                width: "100%",
                background: generating || numberLoading ? "#8a97b8" : NAVY,
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "12px 16px",
                fontSize: "15px",
                fontWeight: 700,
                cursor: generating || numberLoading ? "default" : "pointer",
              }}
            >
              {generating ? "Generating…" : "Download PDF"}
            </button>
          </div>

          {/* ------------------------- PREVIEW ------------------------- */}
          <div style={{ flex: "1 1 794px", minWidth: "0", overflowX: "auto" }}>
            <ReceiptDocument ref={receiptRef} form={form} total={total} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------- receipt doc --------------------------- */

function ReceiptDocument({ ref, form, total }) {
  return (
    <div
      ref={ref}
      style={{
        width: "794px",
        minHeight: "1123px",
        background: "#ffffff",
        color: TEXT,
        fontFamily: "Arial, Helvetica, sans-serif",
        padding: "40px 44px",
        boxSizing: "border-box",
        boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ maxWidth: "60%" }}>
          <div style={{ fontSize: "22px", fontWeight: 700, color: TEXT, marginBottom: "8px" }}>
            Union Reality and Constructions
          </div>
          <div style={{ fontSize: "12.5px", lineHeight: 1.5, color: TEXT }}>
            No. 6, MCH Complex, Dasanpura Hobli, Huskur Road, Bengaluru 562162
          </div>
          <div style={{ fontSize: "12.5px", lineHeight: 1.5, color: TEXT }}>
            Email: sales@unionrealityandconstructions.com
          </div>
          <div style={{ fontSize: "12.5px", lineHeight: 1.5, color: TEXT }}>
            Phone no. : +91 82173 41627/99010 79241
          </div>
        </div>
        <div
          style={{
            background: NAVY,
            borderRadius: "4px",
            padding: "10px 14px",
            width: "150px",
            height: "110px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/urc.png"
            alt="Union Reality and Constructions"
            crossOrigin="anonymous"
            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          textAlign: "center",
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "34px",
          fontWeight: 700,
          color: TEXT,
          margin: "26px 0 30px",
        }}
      >
        Payment Receipt
      </div>

      {/* Property + Customer */}
      <div style={{ display: "flex", justifyContent: "space-between", gap: "30px" }}>
        <div style={{ flex: 1 }}>
          <div style={sectionHeading}>PROPERTY DETAILS</div>
          <div style={detailLine}>Project / Layout Name: {form.project}</div>
          {form.siteNo && <div style={detailLine}>Site No: {form.siteNo}</div>}
          {form.measurement && <div style={detailLine}>Dimensions: {form.measurement}</div>}
          {form.location && <div style={detailLine}>Location: {form.location}</div>}
        </div>
        <div style={{ flex: 1 }}>
          <div style={sectionHeading}>CUSTOMER DETAILS</div>
          <div style={detailLine}>
            Received From: {form.salutation} {form.clientName}
          </div>
          <div style={detailLine}>Mobile Number: {form.mobile}</div>
          {form.email && <div style={detailLine}>Email: {form.email}</div>}
          <div style={detailLine}>Address: {form.address}</div>
        </div>
      </div>

      {/* Receipt details */}
      <div style={{ marginTop: "22px" }}>
        <div style={sectionHeading}>RECEIPT DETAILS</div>
        <div style={detailLine}>Receipt No: {form.receiptNo}</div>
        <div style={detailLine}>Date: {form.date}</div>
      </div>

      {/* Payment table */}
      <div
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "15px",
          letterSpacing: "0.5px",
          margin: "26px 0 14px",
        }}
      >
        PAYMENT DETAILS
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "13.5px",
          color: TEXT,
        }}
      >
        <thead>
          <tr>
            <th style={{ ...cellHead, width: "58px" }}>Sl No.</th>
            <th style={cellHead}>Description</th>
            <th style={{ ...cellHead, width: "150px" }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {form.items.map((it, idx) => (
            <tr key={idx}>
              <td style={{ ...cell, textAlign: "center", fontWeight: 700 }}>{idx + 1}</td>
              <td style={{ ...cell, textAlign: "center" }}>{it.description}</td>
              <td style={{ ...cell, textAlign: "center", fontWeight: 700 }}>
                ₹{formatIndian(it.amount)}
              </td>
            </tr>
          ))}
          <tr>
            <td style={cell}></td>
            <td style={{ ...cell, textAlign: "center", fontWeight: 700 }}>Total</td>
            <td style={{ ...cell, textAlign: "center", fontWeight: 700 }}>
              ₹{formatIndian(total)}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Amount in words */}
      <div style={{ marginTop: "40px", fontSize: "13.5px", color: TEXT }}>
        <span style={{ fontWeight: 700 }}>Amount in Words :</span> {numberToWords(total)}
      </div>

      {/* Declaration */}
      <div style={{ marginTop: "26px" }}>
        <div style={{ fontWeight: 700, fontSize: "11px", letterSpacing: "0.5px" }}>DECLARATION</div>
        <div style={{ fontSize: "11px", color: TEXT, lineHeight: 1.5, marginTop: "4px" }}>
          Received the above amount towards the purchase of the above-mentioned property, subject to
          the terms and conditions of the sale agreement.
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          fontSize: "11px",
          color: "#333",
          marginTop: "60px",
        }}
      >
        System generated bill and signature not required
      </div>
    </div>
  );
}

const cellHead = {
  border: `1px solid ${BORDER}`,
  padding: "12px 8px",
  fontWeight: 700,
  textAlign: "center",
};
const cell = {
  border: `1px solid ${BORDER}`,
  padding: "12px 8px",
  verticalAlign: "middle",
};

/* --------------------------- form widgets --------------------------- */

function FormGroup({ label, children }) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <label
        style={{
          display: "block",
          fontSize: "12px",
          fontWeight: 600,
          color: "#444",
          marginBottom: "4px",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function Input({ value, onChange, type = "text", readOnly = false }) {
  return (
    <input
      type={type}
      value={value}
      readOnly={readOnly}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "8px 10px",
        border: "1px solid #cfd6e4",
        borderRadius: "6px",
        fontSize: "13px",
        color: readOnly ? "#555" : "#111",
        background: readOnly ? "#f3f5fa" : "#fff",
        outline: "none",
        fontFamily: "system-ui, sans-serif",
      }}
    />
  );
}

function Divider({ children }) {
  return (
    <div
      style={{
        marginTop: "18px",
        marginBottom: "10px",
        fontSize: "13px",
        fontWeight: 700,
        color: "#243b6b",
        borderBottom: "2px solid #e2e6ee",
        paddingBottom: "6px",
      }}
    >
      {children}
    </div>
  );
}
