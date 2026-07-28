import { useState } from "react";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  propertyType: "",
  message: "",
};

export default function ContactForm({ onSuccess, submitLabel = "Book Free Site Visit →" }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setStatus("success");
      setForm(initialForm);
      onSuccess?.();
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <p className="text-[#d4a437] text-2xl font-bold mb-3">Thank you!</p>
        <p className="text-gray-300">
          We received your request and will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Full Name"
        required
        className="w-full bg-white/5 border border-white/10 rounded-full px-7 py-5 text-white outline-none focus:border-[#d4a437]"
      />

      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        required
        className="w-full bg-white/5 border border-white/10 rounded-full px-7 py-5 text-white outline-none focus:border-[#d4a437]"
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email Address"
        required
        className="w-full bg-white/5 border border-white/10 rounded-full px-7 py-5 text-white outline-none focus:border-[#d4a437]"
      />

      <select
        name="propertyType"
        value={form.propertyType}
        onChange={handleChange}
        required
        className="w-full bg-white/5 border border-white/10 rounded-full px-7 py-5 text-gray-400 outline-none focus:border-[#d4a437]"
      >
        <option value="">Select Property Type</option>
        <option value="Gated Community Plot">Gated Community Plot</option>
        <option value="Farm Land">Farm Land</option>
        <option value="Villa Plot">Villa Plot</option>
      </select>

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        rows="5"
        placeholder="Message"
        className="w-full bg-white/5 border border-white/10 rounded-[30px] px-7 py-5 text-white outline-none focus:border-[#d4a437]"
      />

      {error && <p className="text-red-400 text-sm text-center">{error}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#d4a437] hover:bg-[#bc902d] disabled:opacity-60 duration-300 text-black font-semibold py-5 rounded-full"
      >
        {status === "loading" ? "Submitting..." : submitLabel}
      </button>
    </form>
  );
}
