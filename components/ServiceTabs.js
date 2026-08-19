// components/ServiceTabs.js
import Link from "next/link";
import { useRouter } from "next/router";

const TABS = [
  { href: "/our-services", label: "All Services" },
  { href: "/tourist-visa", label: "Tourist Visa" },
  { href: "/work-visa", label: "Work Visa" },
];

export default function ServiceTabs() {
  const router = useRouter();

  return (
    <div className="flex gap-1 overflow-x-auto no-scrollbar">
      {TABS.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className="tab-link shrink-0"
          data-active={router.pathname === tab.href ? "true" : "false"}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}