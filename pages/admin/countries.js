// pages/admin/countries.js
import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";

function CountryForm({ type, onCreated }) {
  const [name, setName] = useState("");
  const [note, setNote] = useState("Tourist Visa");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/admin/countries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, note, type }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      onCreated(data.country);
      setName("");
      setNote("Tourist Visa");
    } catch (err) {
      setError(err.message || "Failed to add country");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-platinum-200 rounded-sm p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:items-end"
    >
      <div className="flex-1">
        <label className="block text-xs font-mono uppercase tracking-wide text-slate-500 mb-1.5">
          Country / Region Name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Vietnam"
          className="w-full border border-platinum-200 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-gold-400"
        />
      </div>
      {type === "tourist" && (
        <div className="sm:w-56">
          <label className="block text-xs font-mono uppercase tracking-wide text-slate-500 mb-1.5">
            Subtitle
          </label>
          <input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Tourist Visa"
            className="w-full border border-platinum-200 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-gold-400"
          />
        </div>
      )}
      <button
        type="submit"
        disabled={saving}
        className="btn btn-gold shrink-0 disabled:opacity-60"
      >
        {saving ? "Adding..." : "+ Add"}
      </button>
      {error && <p className="text-sm text-red-600 sm:ml-3">{error}</p>}
    </form>
  );
}

function CountryRow({ country, onUpdated, onDeleted }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(country.name);
  const [note, setNote] = useState(country.note || "");
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/countries/${country._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, note }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error();
      onUpdated(data.country);
      setEditing(false);
    } catch {
      alert("Failed to save changes.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm(`Remove "${country.name}" from this list?`)) return;
    try {
      const res = await fetch(`/api/admin/countries/${country._id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error();
      onDeleted(country._id);
    } catch {
      alert("Failed to delete.");
    }
  };

  if (editing) {
    return (
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center bg-gold-100/40 border border-gold-300 rounded-sm p-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 border border-platinum-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-gold-400"
        />
        {country.type === "tourist" && (
          <input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="sm:w-48 border border-platinum-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-gold-400"
          />
        )}
        <div className="flex gap-2 shrink-0">
          <button
            onClick={handleSave}
            disabled={saving}
            className="text-xs font-mono px-3 py-2 rounded-sm bg-navy-950 text-platinum-50 disabled:opacity-60 cursor-pointer"
          >
            {saving ? "Saving..." : "Save"}
          </button>
          <button
            onClick={() => {
              setEditing(false);
              setName(country.name);
              setNote(country.note || "");
            }}
            className="text-xs font-mono px-3 py-2 rounded-sm border border-platinum-200 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between gap-4 bg-white border border-platinum-200 rounded-sm p-3.5 hover:border-gold-400 transition-colors">
      <div className="min-w-0">
        <p className="text-ink-900 font-medium truncate">{country.name}</p>
        {country.type === "tourist" && country.note && (
          <p className="font-mono text-[11px] text-gold-500 mt-0.5 uppercase tracking-wide">
            {country.note}
          </p>
        )}
      </div>
      <div className="flex gap-2 shrink-0">
        <button
          onClick={() => setEditing(true)}
          className="text-xs font-mono text-navy-800 hover:text-gold-600 cursor-pointer"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="text-xs font-mono text-red-500 hover:text-red-700 cursor-pointer"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default function AdminCountries() {
  const [tab, setTab] = useState("tourist"); // "tourist" | "work"
  const [countries, setCountries] = useState({ tourist: [], work: [] });
  const [loading, setLoading] = useState(true);

  const loadCountries = async () => {
    setLoading(true);
    try {
      const [touristRes, workRes] = await Promise.all([
        fetch("/api/admin/countries?type=tourist"),
        fetch("/api/admin/countries?type=work"),
      ]);
      const tourist = (await touristRes.json()).countries || [];
      const work = (await workRes.json()).countries || [];
      setCountries({ tourist, work });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCountries();
  }, []);

  const list = countries[tab];

  const handleCreated = (country) => {
    setCountries((prev) => ({ ...prev, [tab]: [...prev[tab], country] }));
  };
  const handleUpdated = (updated) => {
    setCountries((prev) => ({
      ...prev,
      [tab]: prev[tab].map((c) => (c._id === updated._id ? updated : c)),
    }));
  };
  const handleDeleted = (id) => {
    setCountries((prev) => ({
      ...prev,
      [tab]: prev[tab].filter((c) => c._id !== id),
    }));
  };

  return (
    <AdminLayout title="Countries">
      <p className="text-sm text-slate-500 mb-6 max-w-2xl">
        These lists power the country cards shown on the public{" "}
        <span className="font-medium text-ink-900">Tourist Visa</span> and{" "}
        <span className="font-medium text-ink-900">Work Visa</span> pages.
        Changes appear on the site immediately — no code or design changes needed.
      </p>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setTab("tourist")}
          className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wide cursor-pointer transition-colors ${
            tab === "tourist"
              ? "bg-navy-950 text-platinum-50"
              : "bg-white border border-platinum-200 text-slate-500 hover:border-gold-400"
          }`}
        >
          Tourist Visa ({countries.tourist.length})
        </button>
        <button
          onClick={() => setTab("work")}
          className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wide cursor-pointer transition-colors ${
            tab === "work"
              ? "bg-navy-950 text-platinum-50"
              : "bg-white border border-platinum-200 text-slate-500 hover:border-gold-400"
          }`}
        >
          Work Visa ({countries.work.length})
        </button>
      </div>

      <div className="mb-6">
        <CountryForm type={tab} onCreated={handleCreated} />
      </div>

      {loading ? (
        <p className="text-slate-500 text-sm">Loading countries...</p>
      ) : list.length === 0 ? (
        <p className="text-slate-500 text-sm">
          No countries added yet for this page.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-3">
          {list.map((c) => (
            <CountryRow
              key={c._id}
              country={c}
              onUpdated={handleUpdated}
              onDeleted={handleDeleted}
            />
          ))}
        </div>
      )}
    </AdminLayout>
  );
}