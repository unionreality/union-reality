import { useState } from "react";

export default function SubscribeForm({
  layout = "inline",
  submitLabel = "SUBSCRIBE →",
  inputPlaceholder = "Enter your email",
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <p className={`text-sm font-semibold ${layout === "banner" ? "text-black" : "text-[#d4a437]"}`}>
        Thank you! You are subscribed.
      </p>
    );
  }

  if (layout === "banner") {
    return (
      <div className="w-full xl:w-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-full p-3 flex flex-col sm:flex-row items-center gap-4 shadow-2xl"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={inputPlaceholder}
            required
            className="w-full sm:w-[350px] px-6 py-5 rounded-full outline-none text-black"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-black hover:bg-[#03142b] disabled:opacity-60 duration-300 text-white px-10 py-5 rounded-full font-semibold whitespace-nowrap"
          >
            {status === "loading" ? "..." : submitLabel}
          </button>
        </form>
        {error && <p className="text-red-700 text-sm mt-3 text-center">{error}</p>}
      </div>
    );
  }

  if (layout === "footer") {
    return (
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={inputPlaceholder}
            required
            className="w-full bg-[#0b223f] border border-white/10 rounded-l-full px-6 py-4 text-white outline-none focus:border-[#d4a437]"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-[#d4a437] hover:bg-[#bc902d] disabled:opacity-60 px-8 rounded-r-full font-semibold text-black whitespace-nowrap"
          >
            {status === "loading" ? "..." : submitLabel}
          </button>
        </div>
        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
      </form>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-14 flex flex-col md:flex-row gap-5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={inputPlaceholder}
          required
          className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-5 text-white outline-none focus:border-[#d4a437]"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-[#d4a437] hover:bg-[#bc902d] disabled:opacity-60 duration-300 text-black font-semibold px-10 py-5 rounded-full whitespace-nowrap"
        >
          {status === "loading" ? "Subscribing..." : submitLabel}
        </button>
      </form>
      {error && <p className="text-red-400 text-sm mt-3 text-center">{error}</p>}
    </div>
  );
}
