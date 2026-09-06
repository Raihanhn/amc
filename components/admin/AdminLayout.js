// components/admin/AdminLayout.js
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/admin/countries", label: "Countries", icon: "globe" },
  { href: "/admin", label: "Submissions", icon: "inbox" },
];

function Icon({ name, className }) {
  if (name === "inbox") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
        <path d="M4 12h4l2 3h4l2-3h4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 6h13l2 6v7a1.5 1.5 0 01-1.5 1.5h-14A1.5 1.5 0 013.5 19v-7l2-6z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "globe") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.2 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.2-3.6-8.5S9.6 5.8 12 3.5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

    if (name === "home") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
        <path d="M4 11.5L12 4l8 7.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 10v9.5a1 1 0 001 1h10a1 1 0 001-1V10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "logout") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
        <path d="M9 4H6a1.5 1.5 0 00-1.5 1.5v13A1.5 1.5 0 006 20h3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 16l4-4-4-4M20 12H9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "menu") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
        <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "close") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
        <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
      </svg>
    );
  }
  return null;
}

export default function AdminLayout({ children, title }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

    const isActive = (href) =>
    href === "/admin" || href === "/"
      ? router.pathname === href
      : router.pathname.startsWith(href);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
           <Link
        href="/"
        className="flex items-center gap-3 px-5 py-6 border-b border-navy-800 hover:bg-navy-900 transition-colors"
      >
        <Image
          src="/logo-amc-dubai.jpeg"
          alt="AMC Dubai"
          width={36}
          height={36}
          className="rounded-full shrink-0"
        />
        <div className="leading-tight">
          <p className="font-display text-platinum-50 text-sm">
            AMC <span className="text-gold-400">Dubai</span>
          </p>
          <p className="eyebrow !text-[9px] !text-gold-300">Admin Panel</p>
        </div>
      </Link>

      <nav className="flex-1 px-3 py-5 space-y-1">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium transition-colors ${
              isActive(item.href)
                ? "bg-navy-800 text-gold-300"
                : "text-platinum-200/70 hover:bg-navy-900 hover:text-platinum-50"
            }`}
          >
            <Icon name={item.icon} className="w-4.5 h-4.5 shrink-0" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="px-3 py-5 border-t border-navy-800">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm font-medium text-platinum-200/70 hover:bg-navy-900 hover:text-red-300 transition-colors cursor-pointer"
        >
          <Icon name="logout" className="w-4.5 h-4.5 shrink-0" />
          Log Out
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>{title ? `${title} | Admin` : "Admin"} — AMC Dubai</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-platinum-100 lg:flex">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 bg-navy-950 border-r border-navy-800">
          <div className="sticky top-0 h-screen">
            <SidebarContent />
          </div>
        </aside>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute left-0 top-0 h-full w-64 bg-navy-950">
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-5 right-[-44px] w-9 h-9 flex items-center justify-center bg-navy-950 rounded-r-sm text-platinum-50"
                aria-label="Close menu"
              >
                <Icon name="close" className="w-5 h-5" />
              </button>
              <SidebarContent />
            </div>
          </div>
        )}

        {/* Main column */}
        <div className="flex-1 min-w-0">
          {/* Mobile topbar */}
          <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between h-16 px-4 bg-navy-950 border-b border-navy-800">
            <button
              onClick={() => setMobileOpen(true)}
              className="w-9 h-9 flex items-center justify-center text-platinum-50"
              aria-label="Open menu"
            >
              <Icon name="menu" className="w-6 h-6" />
            </button>
            <p className="font-display text-platinum-50 text-sm">
              AMC <span className="text-gold-400">Dubai</span> Admin
            </p>
            <div className="w-9" />
          </div>

          <main className="px-4 sm:px-6 lg:px-10 py-6 lg:py-10">
            {title && (
              <h1 className="text-2xl sm:text-3xl font-display text-ink-900 mb-6">
                {title}
              </h1>
            )}
            {children}
          </main>
        </div>
      </div>
    </>
  );
}