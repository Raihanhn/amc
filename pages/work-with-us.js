// pages/work-with-us.js
import Layout from "@/components/Layout";
import Button from "@/components/Button";

const B2C_POINTS = [
  {
    title: "The Zero-Chance Protocol",
    body: "We preserve our impeccable success rate via a strict, risk-eliminating pre-vetting framework — we only accept files engineered for guaranteed success.",
  },
  {
    title: "Sovereign Direct Pipelines",
    body: "Direct mandates with tier-one European enterprises and ministries bypass third-party administrative bottlenecks.",
  },
  {
    title: "Turnkey Comfort",
    body: "From diagnostic screening to MOFA legalizations and aviation ticketing — every detail is managed by a single, accountable entity.",
  },
];

const B2B_POINTS = [
  {
    title: "Tri-Tier Human Capital Access",
    body: "Sourcing, technically vetting, and deploying elite global talent across highly skilled, semi-skilled, and specialized industrial sectors.",
  },
  {
    title: "Unrivaled Global Footprint",
    body: "35+ elite European legal alliances and 100+ deeply vetted sourcing nodes across India, Bangladesh, Nepal, and Africa.",
  },
  {
    title: "Emirates Corporate Mastery",
    body: "End-to-end business lifecycle management across Dubai Mainland and Free Zones, interfacing directly with MOHRE and local ministries.",
  },
];

const COMPARISON = [
  {
    metric: "Risk Management",
    traditional: "Accepts all files blindly; inherently high rejection rates.",
    amc: "Strict pre-vetting; 100% success focus via selective case filtration.",
  },
  {
    metric: "Infrastructure",
    traditional: "Relies heavily on unverified third-party brokers and intermediaries.",
    amc: "Unified, single-umbrella legal internal management with absolute custody.",
  },
  {
    metric: "Global Reach",
    traditional: "Isolated, localized operations with limited institutional access.",
    amc: "35+ European law firm partnerships & 100+ global cross-border nodes.",
  },
  {
    metric: "Leadership",
    traditional: "Unverified sales-driven consultants without legal frameworks.",
    amc: "Led by an internationally educated Ph.D. academic and HRM expert.",
  },
  {
    metric: "Service Scope",
    traditional: "Only handles basic, entry-level visa documentation.",
    amc: "End-to-end legal, corporate setup, logistics & intercontinental sourcing.",
  },
];

export default function WorkWithUs() {
  return (
    <Layout
      title="Work With Us"
      description="Why partner with AMC Dubai — the Zero-Chance Protocol, our global footprint, and how we compare to traditional immigration agencies."
    >
      <section className="bg-navy-950">
        <div className="container-page py-16 md:py-24">
          <p className="eyebrow mb-4">The Worth of Our System</p>
          <h1 className="text-4xl md:text-5xl text-platinum-50 font-medium max-w-3xl">
            Mitigating risk, <span className="italic text-gold-300">maximizing approvals</span>
          </h1>
          <p className="mt-5 text-platinum-200/80 max-w-2xl leading-relaxed">
            Intentions mean nothing without flawless execution. Our worth is not
            defined by promises, but by an unwavering alignment with reality.
          </p>
        </div>
      </section>

      {/* B2C / B2B anatomy */}
      <section className="bg-platinum-50">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">The Anatomy of Worth</p>
            <h2 className="text-3xl md:text-4xl text-ink-900 font-medium">
              Our structural metrics
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="border border-platinum-200 bg-white p-8 rounded-sm">
              <p className="eyebrow mb-3">B2C Pathways</p>
              <h3 className="text-xl text-ink-900 font-medium mb-6">The Individual Worth</h3>
              <div className="space-y-5">
                {B2C_POINTS.map((p) => (
                  <div key={p.title}>
                    <h4 className="text-sm font-semibold text-ink-900 mb-1.5">{p.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-navy-800 bg-navy-950 p-8 rounded-sm">
              <p className="eyebrow mb-3">B2B Integration</p>
              <h3 className="text-xl text-platinum-50 font-medium mb-6">The Enterprise Worth</h3>
              <div className="space-y-5">
                {B2B_POINTS.map((p) => (
                  <div key={p.title}>
                    <h4 className="text-sm font-semibold text-platinum-50 mb-1.5">{p.title}</h4>
                    <p className="text-sm text-platinum-200/75 leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder quote */}
      <section className="bg-platinum-100 border-y border-platinum-200">
        <div className="container-page py-16 md:py-20">
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-ink-900 font-display italic leading-relaxed">
              "We don't make the process complex to justify our presence; we master
              the complexity so your journey can remain simple. At AMC, compliance is
              our chief global asset, and your trust is our ultimate benchmark."
            </p>
            <footer className="mt-5 eyebrow !text-slate-500">
              — Dr. Ahmed, Founder & CEO, Asdaq Management Consultancy
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-platinum-50">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">The Ultimate Comparative Advantage</p>
            <h2 className="text-3xl md:text-4xl text-ink-900 font-medium">
              AMC Standard vs. Traditional Agencies
            </h2>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block overflow-hidden border border-platinum-200 rounded-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-navy-950">
                  <th className="p-5 text-platinum-50 text-sm font-mono uppercase tracking-wide w-1/5">
                    Metric
                  </th>
                  <th className="p-5 text-platinum-200/70 text-sm font-mono uppercase tracking-wide w-2/5">
                    Traditional Agencies
                  </th>
                  <th className="p-5 text-gold-300 text-sm font-mono uppercase tracking-wide w-2/5">
                    The AMC Standard
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? "bg-white" : "bg-platinum-100"}>
                    <td className="p-5 text-ink-900 font-medium text-sm align-top">{row.metric}</td>
                    <td className="p-5 text-slate-500 text-sm leading-relaxed align-top">
                      {row.traditional}
                    </td>
                    <td className="p-5 text-ink-900 text-sm leading-relaxed align-top border-l-2 border-gold-400">
                      {row.amc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="md:hidden space-y-5">
            {COMPARISON.map((row) => (
              <div key={row.metric} className="border border-platinum-200 rounded-sm overflow-hidden">
                <div className="bg-navy-950 px-5 py-3">
                  <p className="text-platinum-50 text-sm font-mono uppercase tracking-wide">
                    {row.metric}
                  </p>
                </div>
                <div className="p-5 border-b border-platinum-200">
                  <p className="text-[11px] font-mono uppercase text-slate-500/70 mb-1.5">
                    Traditional Agencies
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed">{row.traditional}</p>
                </div>
                <div className="p-5 border-l-4 border-gold-400 bg-platinum-50">
                  <p className="text-[11px] font-mono uppercase text-gold-600 mb-1.5">
                    The AMC Standard
                  </p>
                  <p className="text-sm text-ink-900 leading-relaxed">{row.amc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-950">
        <div className="container-page py-20 text-center">
          <p className="eyebrow mb-4">Secure Your Trajectory Today</p>
          <h2 className="text-3xl md:text-4xl text-platinum-50 font-medium max-w-2xl mx-auto">
            Partner with an institution that treats global mobility as an exact
            legal science.
          </h2>
          <div className="mt-8">
            <Button href="/contact-us" variant="gold">
              Schedule a Diagnostic Audit
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}