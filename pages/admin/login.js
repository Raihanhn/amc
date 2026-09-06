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
  const [showPassword, setShowPassword] = useState(false);

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
              <div className="relative">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full bg-navy-950 border border-navy-700 rounded-sm px-4 py-3 pr-11 text-sm text-platinum-50 placeholder:text-platinum-200/30 focus:outline-none focus:border-gold-400 transition-colors"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-0 top-0 h-full w-11 flex items-center justify-center text-platinum-200/50 hover:text-gold-300 transition-colors cursor-pointer"
                >
                  {showPassword ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
                      <path d="M3 3l18 18" strokeLinecap="round" />
                      <path
                        d="M10.6 10.6a2.5 2.5 0 003.5 3.5M6.5 6.7C4.3 8.1 2.7 10 2 12c1.6 3.9 5.5 7 10 7 1.6 0 3.1-.4 4.5-1.1M9.8 4.3A10.9 10.9 0 0112 4c4.5 0 8.4 3.1 10 7-.5 1.3-1.3 2.6-2.3 3.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
                      <path
                        d="M2 12c1.6-3.9 5.5-7 10-7s8.4 3.1 10 7c-1.6 3.9-5.5 7-10 7s-8.4-3.1-10-7z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
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