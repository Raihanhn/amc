// components/Footer.js

import Link from "next/link";
import Image from "next/image";

const explore = [
  { href: "/about-us", label: "About Us" },
  { href: "/our-services", label: "Our Services" },
  { href: "/tourist-visa", label: "Tourist Visa" },
  { href: "/work-visa", label: "Work Visa" },
];

const company = [
  { href: "/work-with-us", label: "Work With Us" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800 text-platinum-200">
      <div className="container-page py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo-amc-dubai.jpg"
              alt="AMC Dubai"
              width={44}
              height={44}
              className="rounded-full"
            />
            <p className="font-display text-platinum-50 text-lg">
              AMC <span className="text-gold-400">Dubai</span>
            </p>
          </div>
          <p className="text-sm leading-relaxed max-w-sm text-platinum-200/80">
            Asdaq Management Consultancy — a Dubai-based, single-umbrella authority for
            European immigration, corporate setup, and transnational workforce solutions.
            Powered by Amigos Global.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="flex flex-col gap-2.5 text-sm">
            {explore.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold-300 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Company</p>
          <ul className="flex flex-col gap-2.5 text-sm">
            {company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold-300 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 text-sm space-y-1.5 text-platinum-200/80">
            <p>Suite F1-547, Dubai Investment Park 1</p>
            <p>New Dubai, United Arab Emirates</p>
            <p className="pt-1">
              <a href="tel:+971564603123" className="hover:text-gold-300">
                +971 56 460 3123
              </a>
            </p>
            <p>
              <a href="mailto:info@amc-dubai.com" className="hover:text-gold-300">
                info@amc-dubai.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-platinum-200/60">
          <p>© {new Date().getFullYear()} Asdaq Management Consultancy (AMC Dubai). All rights reserved.</p>
          <p className="font-mono tracking-wide">Powered by Amigos Global</p>
        </div>
      </div>
    </footer>
  );
}