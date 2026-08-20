// components/ContactForm.js

import { useState } from "react";
import { useRouter } from "next/router";

const INQUIRY_TYPES = [
  "B2B Staffing & Sourcing",
  "B2B Dubai Setup",
  "B2C European Permits",
  "B2C Global Entry Visas",
  "Logistics / Document Attestation",
];

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  country: "",
  inquiryType: "",
  nationality: "",
  timeline: "",
  notes: "",
};

export default function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | loading | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");

      // Success — redirect to the dedicated Thank You page
      router.push("/thank-you");
    } catch (err) {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white border border-platinum-200 rounded-sm px-4 py-3 text-sm text-ink-900 placeholder:text-slate-500/60 focus:outline-none focus:border-gold-400 transition-colors";
  const labelClass = "block text-xs font-mono uppercase tracking-wide text-slate-500 mb-2";

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-platinum-200 rounded-sm p-6 md:p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Full Legal Name</label>
          <input
            required
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className={labelClass}>Email</label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Phone / WhatsApp</label>
          <input
            required
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="+971 ..."
          />
        </div>
        <div>
          <label className={labelClass}>Current Country of Residence</label>
          <input
            required
            name="country"
            value={form.country}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g. Bangladesh"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Inquiry Vertical Type</label>
        <select
          required
          name="inquiryType"
          value={form.inquiryType}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" disabled>
            Select an option
          </option>
          {INQUIRY_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Passport Nationality</label>
          <input
            name="nationality"
            value={form.nationality}
            onChange={handleChange}
            className={inputClass}
            placeholder="For pre-vetting check"
          />
        </div>
        <div>
          <label className={labelClass}>Projected Deployment Timeline</label>
          <input
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g. Within 3 months"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Project Scope / Core Need</label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={4}
          className={inputClass}
          placeholder="Briefly describe what you need help with..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or WhatsApp us directly.
        </p>
      )}

        <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-gold w-full sm:w-auto disabled:opacity-60 relative transition transform hover:scale-105 cursor-pointer"
      >
        {status === "loading" && (
          <svg
            className="animate-spin h-4 w-4 text-navy-950"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-90"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        )}
        {status === "loading" ? "Submitting..." : "Submit Diagnostic Intake"}
      </button>
    </form>
  );
}