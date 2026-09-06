// pages/admin/login.js
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

export default function AdminLogin() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Login failed");
        setLoading(false);
        return;
      }
      router.push("/admin");
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Admin Login | AMC Dubai</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="min-h-screen bg-navy-950 flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-sm">
          <div className="flex flex-col items-center mb-8">
            <Image
              src="/logo-amc-dubai.jpeg"
              alt="AMC Dubai"
              width={56}
              height={56}
              className="rounded-full"
            />
            <p className="font-display text-platinum-50 text-xl mt-4">
              AMC <span className="text-gold-400">Dubai</span>
            </p>
            <p className="eyebrow !text-[10px] !text-gold-300 mt-1">
              Admin Panel
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-navy-900 border border-navy-800 rounded-sm p-6 sm:p-8 space-y-5"
          >
            <div>
              <label className="block text-xs font-mono uppercase tracking-wide text-platinum-200/70 mb-2">
                Username
              </label>
              <input
                required
                autoFocus
                name="username"
                value={form.username}
                onChange={handleChange}
                className="w-full bg-navy-950 border border-navy-700 rounded-sm px-4 py-3 text-sm text-platinum-50 placeholder:text-platinum-200/30 focus:outline-none focus:border-gold-400 transition-colors"
                placeholder="admin"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wide text-platinum-200/70 mb-2">
                Password
              </label>
              <input
                required
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full bg-navy-950 border border-navy-700 rounded-sm px-4 py-3 text-sm text-platinum-50 placeholder:text-platinum-200/30 focus:outline-none focus:border-gold-400 transition-colors"
                placeholder="••••••••"
              />
            </div>

            {error && <p className="text-sm text-red-400">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="btn btn-gold w-full disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}