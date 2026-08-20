// components/Header.js

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  {
    label: "Services",
    href: "/our-services",
    children: [
      { href: "/our-services", label: "All Services" },
      { href: "/tourist-visa", label: "Tourist Visa" },
      { href: "/work-visa", label: "Work Visa" },
    ],
  },
  { href: "/work-with-us", label: "Work With Us" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const router = useRouter();

  const isActive = (href) => router.pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-navy-950 border-b border-navy-800">
      <div className="container-page flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo-amc-dubai.jpeg"
            alt="AMC Dubai"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="leading-tight">
            <p className="font-display text-platinum-50 text-lg tracking-wide">
              AMC <span className="text-gold-400">Dubai</span>
            </p>
            <p className="eyebrow !text-[10px] !text-gold-300">More Reliable</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                    isActive(link.href) ||
                    link.children.some((c) => isActive(c.href))
                      ? "text-gold-400"
                      : "text-platinum-100 hover:text-gold-300"
                  }`}
                >
                  {link.label}
                </Link>
                <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                  <div className="bg-navy-900 border border-navy-700 rounded shadow-xl min-w-[180px] py-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-platinum-100 hover:bg-navy-800 hover:text-gold-300"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                  isActive(link.href)
                    ? "text-gold-400"
                    : "text-platinum-100 hover:text-gold-300"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <Link
          href="/contact-us"
          className="hidden lg:inline-flex btn btn-gold !py-2.5 !px-5 !text-sm transition transform hover:scale-105"
          
        >
          Get Consultation
        </Link>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="lg:hidden text-platinum-50 p-2"
          onClick={() => setOpen(!open)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-navy-800 bg-navy-950">
          <nav className="container-page py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    className="w-full flex items-center justify-between py-3 text-platinum-100 text-sm font-medium"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    {link.label}
                    <span className="text-gold-400">{mobileServicesOpen ? "−" : "+"}</span>
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 flex flex-col gap-1 pb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="py-2 text-sm text-platinum-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-platinum-100 text-sm font-medium border-b border-navy-800"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact-us"
              onClick={() => setOpen(false)}
              className="btn btn-gold mt-4 w-full"
            >
              Get Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}