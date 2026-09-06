// pages/admin/index.js
import { Fragment, useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";

const STATUS_OPTIONS = [
  { value: "new", label: "New" },
  { value: "read", label: "Read" },
  { value: "contacted", label: "Contacted" },
  { value: "closed", label: "Closed" },
];

const STATUS_STYLES = {
  new: "bg-gold-100 text-gold-600",
  read: "bg-navy-800/10 text-navy-800",
  contacted: "bg-emerald-100 text-emerald-700",
  closed: "bg-platinum-200 text-slate-500",
};

function StatusBadge({ status }) {
  const label = STATUS_OPTIONS.find((s) => s.value === status)?.label || status;
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full ${
        STATUS_STYLES[status] || STATUS_STYLES.new
      }`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}

export default function AdminSubmissions() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [updatingId, setUpdatingId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  const loadSubmissions = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/submissions");
      if (!res.ok) throw new Error();
      const data = await res.json();
      setSubmissions(data.submissions || []);
    } catch {
      setError("Could not load submissions.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubmissions();
  }, []);

  const handleStatusChange = async (id, status) => {
    setUpdatingId(id);
    // Optimistic update
    setSubmissions((prev) =>
      prev.map((s) => (s._id === id ? { ...s, status } : s))
    );
    try {
      const res = await fetch(`/api/admin/submissions/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error();
    } catch {
      setError("Failed to update status — refreshing list.");
      loadSubmissions();
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this submission permanently?")) return;
    setSubmissions((prev) => prev.filter((s) => s._id !== id));
    try {
      const res = await fetch(`/api/admin/submissions/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
    } catch {
      setError("Failed to delete — refreshing list.");
      loadSubmissions();
    }
  };

  const filtered =
    filter === "all" ? submissions : submissions.filter((s) => s.status === filter);

  return (
    <AdminLayout title="Submissions">
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["all", ...STATUS_OPTIONS.map((s) => s.value)].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wide transition-colors cursor-pointer ${
              filter === f
                ? "bg-navy-950 text-platinum-50"
                : "bg-white border border-platinum-200 text-slate-500 hover:border-gold-400"
            }`}
          >
            {f === "all" ? "All" : STATUS_OPTIONS.find((s) => s.value === f)?.label}
            {f !== "all" && (
              <span className="ml-1.5 opacity-60">
                {submissions.filter((s) => s.status === f).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {error && (
        <p className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-sm px-4 py-2">
          {error}
        </p>
      )}

      {loading ? (
        <p className="text-slate-500 text-sm">Loading submissions...</p>
      ) : filtered.length === 0 ? (
        <p className="text-slate-500 text-sm">No submissions found.</p>
      ) : (
        <>
          {/* Desktop table */}
          <div className="hidden md:block bg-white border border-platinum-200 rounded-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-platinum-100 text-left text-xs font-mono uppercase tracking-wide text-slate-500">
                  <th className="px-4 py-3 w-12">#</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Contact</th>
                  <th className="px-4 py-3">Inquiry</th>
                  <th className="px-4 py-3">Received</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s, i) => (
                  <Fragment key={s._id}>
                    <tr
                      className="border-t border-platinum-200 hover:bg-platinum-50/60 align-top"
                    >
                      <td className="px-4 py-4 text-slate-500 font-mono text-xs">
                        {i + 1}
                      </td>
                      <td className="px-4 py-4">
                        <button
                          onClick={() =>
                            setExpandedId(expandedId === s._id ? null : s._id)
                          }
                          className="font-medium text-ink-900 hover:text-gold-600 text-left cursor-pointer"
                        >
                          {s.fullName}
                        </button>
                        <p className="text-xs text-slate-500 mt-0.5">{s.country}</p>
                      </td>
                      <td className="px-4 py-4 text-slate-500">
                        <p className="text-ink-900">{s.email}</p>
                        <p className="text-xs mt-0.5">{s.phone}</p>
                      </td>
                      <td className="px-4 py-4 text-slate-500">{s.inquiryType}</td>
                      <td className="px-4 py-4 text-slate-500 whitespace-nowrap">
                        {new Date(s.createdAt).toLocaleDateString()}{" "}
                        <span className="text-xs">
                          {new Date(s.createdAt).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <select
                          value={s.status}
                          disabled={updatingId === s._id}
                          onChange={(e) => handleStatusChange(s._id, e.target.value)}
                          className="text-xs font-mono border border-platinum-200 rounded-full px-2.5 py-1 bg-white focus:outline-none focus:border-gold-400 cursor-pointer disabled:opacity-50"
                        >
                          {STATUS_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <button
                          onClick={() => handleDelete(s._id)}
                          className="text-xs text-red-500 hover:text-red-700 font-mono cursor-pointer"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                    {expandedId === s._id && (
                      <tr className="border-t border-platinum-200 bg-platinum-50/60">
                        <td colSpan={7} className="px-4 py-4">
                          <div className="grid sm:grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="text-xs font-mono uppercase text-slate-500 mb-1">
                                Nationality
                              </p>
                              <p className="text-ink-900">{s.nationality || "—"}</p>
                            </div>
                            <div>
                              <p className="text-xs font-mono uppercase text-slate-500 mb-1">
                                Timeline
                              </p>
                              <p className="text-ink-900">{s.timeline || "—"}</p>
                            </div>
                            <div className="sm:col-span-3">
                              <p className="text-xs font-mono uppercase text-slate-500 mb-1">
                                Notes
                              </p>
                              <p className="text-ink-900 whitespace-pre-wrap">
                                {s.notes || "—"}
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-3">
            {filtered.map((s, i) => (
              <div
                key={s._id}
                className="bg-white border border-platinum-200 rounded-sm p-4"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <p className="text-xs font-mono text-slate-500">#{i + 1}</p>
                    <p className="font-medium text-ink-900">{s.fullName}</p>
                  </div>
                  <StatusBadge status={s.status} />
                </div>
                <p className="text-sm text-slate-500">{s.email}</p>
                <p className="text-sm text-slate-500">{s.phone}</p>
                <p className="text-sm text-slate-500 mt-1">
                  {s.inquiryType} · {s.country}
                </p>
                <p className="text-xs text-slate-500/70 mt-1">
                  {new Date(s.createdAt).toLocaleString()}
                </p>

                {(s.nationality || s.timeline || s.notes) && (
                  <div className="mt-3 pt-3 border-t border-platinum-200 space-y-1.5 text-sm">
                    {s.nationality && (
                      <p>
                        <span className="text-slate-500">Nationality: </span>
                        {s.nationality}
                      </p>
                    )}
                    {s.timeline && (
                      <p>
                        <span className="text-slate-500">Timeline: </span>
                        {s.timeline}
                      </p>
                    )}
                    {s.notes && (
                      <p className="whitespace-pre-wrap">
                        <span className="text-slate-500">Notes: </span>
                        {s.notes}
                      </p>
                    )}
                  </div>
                )}

                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-platinum-200">
                  <select
                    value={s.status}
                    disabled={updatingId === s._id}
                    onChange={(e) => handleStatusChange(s._id, e.target.value)}
                    className="flex-1 text-xs font-mono border border-platinum-200 rounded-full px-2.5 py-1.5 bg-white focus:outline-none focus:border-gold-400 disabled:opacity-50"
                  >
                    {STATUS_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => handleDelete(s._id)}
                    className="text-xs text-red-500 font-mono shrink-0"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </AdminLayout>
  );
}