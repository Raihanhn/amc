// pages/our-services.js
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import ServiceTabs from "@/components/ServiceTabs";

const SERVICES = [
  {
    num: "01",
    title: "High-Clearance Global Leisure & Business Visas",
    body: "Premium global visitor and business entry processing characterized by unmatched approval rates, backed by a strict pre-vetting framework.",
    points: [
      "Risk elimination audits against current geopolitical frameworks",
      "Exhaustive file optimization for financial and itinerary profiles",
      "Global coverage across major economic, business, and leisure zones",
    ],
  },
  {
    num: "02",
    title: "Intercontinental Work Permits & Sovereign Deployments",
    body: "Robust, legally bulletproof occupational mobility pipelines across the EU, UAE, and CIS region for Asian professionals and technical specialists.",
    points: [
      "EU footprint across Germany, Poland, Greece, Portugal, Romania, Croatia",
      "CIS region integration with fast-tracked processing",
      "Emirates occupational integration for executive and skilled roles",
    ],
  },
  {
    num: "03",
    title: "Corporate Synthesis & Dubai Infrastructure Setup",
    body: "The premier architectural partner for enterprises and investors seeking a commercial footprint in Dubai — Mainland and Free Zone.",
    points: [
      "Jurisdictional selection, tax and ownership structuring",
      "Sovereign legal clearances and commercial registrations",
      "Strategic introductions to local and international banking",
    ],
  },
  {
    num: "04",
    title: "Transnational Human Capital & Enterprise Staffing",
    body: "Sourcing, screening, and deploying elite global talent to bridge acute labor deficits across European and UAE corporate ecosystems.",
    points: [
      "Tri-tier sourcing across India, Bangladesh, Nepal, and Africa",
      "Rigorous technical vetting against Euro/Emirati standards",
      "Turnkey workforce management and deployment timelines",
    ],
  },
  {
    num: "05",
    title: "Document Forwarding & Ministerial Liaison",
    body: "End-to-end chain of custody for sensitive corporate and personal document processing, legalizations, and ministerial approvals.",
    points: [
      "Consular and MOFA document legalization",
      "MOHRE and immigration regulatory clearances",
      "Secure, confidential chain of custody for institutional records",
    ],
  },
  {
    num: "06",
    title: "Executive Logistics & Aviation Ticketing",
    body: "A dedicated corporate logistics desk managing multi-destinational aviation arrangements and complex travel scheduling.",
    points: [
      "Mass deployment logistics aligned to visa timelines",
      "Optimized multi-sector routings and preferred rates",
      "Continuous travel oversight for seamless arrivals",
    ],
  },
];

export default function OurServices() {
  return (
    <Layout
      title="Our Services"
      description="Legal jurisprudence, corporate setup, workforce sourcing, document legalization, and logistics — all under one Dubai-based umbrella."
    >
      <section className="bg-navy-950">
        <div className="container-page py-16 md:py-24">
          <p className="eyebrow mb-4">The Arsenal of Institutional Services</p>
          <h1 className="text-4xl md:text-5xl text-platinum-50 font-medium max-w-3xl">
            Strategic frameworks for{" "}
            <span className="italic text-gold-300">transnational mobility</span>
          </h1>
          <p className="mt-5 text-platinum-200/80 max-w-2xl leading-relaxed">
            AMC operates at the nexus of international law, executive staffing, and
            corporate engineering — six integrated services under a single
            administrative umbrella.
          </p>
        </div>
      </section>

      <section className="bg-platinum-50 border-b border-platinum-200">
        <div className="container-page pt-8">
          <ServiceTabs />
        </div>
      </section>

      <section className="bg-platinum-50">
        <div className="container-page py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.num}
                className="bg-white border border-platinum-200 rounded-sm p-7 md:p-8"
              >
                <p className="font-mono text-3xl text-gold-500 mb-4">{service.num}</p>
                <h2 className="text-xl text-ink-900 font-medium mb-3 leading-snug">
                  {service.title}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">
                  {service.body}
                </p>
                <ul className="space-y-2.5 border-t border-platinum-200 pt-5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm text-slate-500 leading-relaxed"
                    >
                      <span className="text-gold-500 mt-0.5 shrink-0">—</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950">
        <div className="container-page py-20 text-center">
          <h2 className="text-3xl md:text-4xl text-platinum-50 font-medium max-w-2xl mx-auto">
            Need to know which service fits your case?
          </h2>
          <div className="mt-8">
            <Button href="/contact-us" variant="gold">
              Talk to Our Strategists
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}