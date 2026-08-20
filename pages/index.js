import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Seal from "@/components/Seal";

const B2B_POINTS = [
  "Precision sourcing across highly skilled, semi-skilled, and industrial labor echelons",
  "Applicant identification networks across key Asian and African economic hubs",
  "Comprehensive legal screening and corporate interview management",
  "End-to-end Dubai company incorporation across Mainland and Free Zones",
  "Proactive execution of corporate visa allocations and MOHRE approvals",
];

const B2C_POINTS = [
  "Expeditious procurement of highly regulated European work authorizations",
  "Structured legal pathways for permanent relocation and citizenship",
  "Streamlined processing for high-clearance Schengen and tourist permits",
  "Total elimination of third-party dependencies — files stay under strict internal supervision",
  "Complex laws translated into clear, actionable personal timelines",
];

const WHY_AMC = [
  {
    title: "Elite Jurisprudence",
    body: "Specialised mastery over complex European immigration statutory frameworks.",
  },
  {
    title: "Turnkey Solutions",
    body: "Consolidated visa procurement, corporate registration, and labor compliance under one singular umbrella.",
  },
  {
    title: "Intercontinental Reach",
    body: "An entrenched, proactive network spanning European, Asian, and African territories.",
  },
  {
    title: "Zero-Chance Protocol",
    body: "A strict pre-vetting framework — we only accept files engineered for guaranteed success.",
  },
];

export default function Home() {
  return (
    <Layout title="Home">
      {/* HERO */}
      <section className="bg-navy-950 relative overflow-hidden">
        <div className="container-page py-20 md:py-28 grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <p className="eyebrow mb-5">Dubai HQ · Powered by Amigos Global</p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08] text-platinum-50 font-medium">
              Bridging borders,{" "}
              <span className="italic text-gold-300">securing legacies.</span>
            </h1>
            <p className="mt-6 text-platinum-200/85 text-base md:text-lg leading-relaxed max-w-xl">
              Asdaq Management Consultancy is the Dubai-based, single-umbrella authority
              for European jurisprudence and comprehensive visa counsel — architecting
              bespoke global trajectories for individuals and enterprises alike.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/contact-us" variant="gold" className="transition transform hover:scale-105" >
                Request Consultation
              </Button>
              <Button href="/our-services" variant="outline" className="transition transform hover:scale-105">
                Explore Services
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-sm overflow-hidden border border-navy-700 aspect-[4/5] md:aspect-[5/4]">
              <Image
                src="https://picsum.photos/seed/amc-hero-dubai/900/1000"
                alt="Dubai business district"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block">
              <Seal number="12+" label="Years Est. 2014" />
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIAL STRIP */}
      <section className="bg-navy-900 border-y border-navy-800">
        <div className="container-page py-10 flex flex-wrap items-center justify-center gap-10 md:gap-16">
          <Seal number="12+" label="Years Operating" />
          <Seal number="35+" label="European Alliances" />
          <Seal number="100+" label="Sourcing Nodes" />
          <Seal number="4" label="Continents Served" />
        </div>
      </section>

      {/* B2B / B2C SPLIT */}
      <section className="bg-platinum-50">
        <div className="container-page py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">The Dual-Spectrum Architecture</p>
            <h2 className="text-3xl md:text-4xl text-ink-900 font-medium">
              Built for two audiences. Governed by one standard.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="border border-platinum-200 bg-white p-8 md:p-10 rounded-sm">
              <p className="eyebrow mb-3">For Enterprises</p>
              <h3 className="text-2xl text-ink-900 font-medium mb-5">B2B Corporate Ventures</h3>
              <ul className="space-y-3.5">
                {B2B_POINTS.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-slate-500 leading-relaxed">
                    <span className="text-gold-500 mt-0.5">—</span>
                    {point}
                  </li>
                ))}
              </ul>
              <Button href="/work-with-us" variant="navy" className="mt-8">
                Corporate Solutions
              </Button>
            </div>

            <div className="border border-navy-800 bg-navy-950 p-8 md:p-10 rounded-sm">
              <p className="eyebrow mb-3">For Individuals & Families</p>
              <h3 className="text-2xl text-platinum-50 font-medium mb-5">B2C Sovereign Migration</h3>
              <ul className="space-y-3.5">
                {B2C_POINTS.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-platinum-200/80 leading-relaxed">
                    <span className="text-gold-400 mt-0.5">—</span>
                    {point}
                  </li>
                ))}
              </ul>
              <Button href="/tourist-visa" variant="gold" className="mt-8">
                Explore Visa Pathways
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AMC */}
      <section className="bg-platinum-100 border-y border-platinum-200">
        <div className="container-page py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">The Institutional Advantage</p>
            <h2 className="text-3xl md:text-4xl text-ink-900 font-medium">Why AMC?</h2>
            <p className="mt-4 text-slate-500 leading-relaxed">
              For over a decade, AMC has transformed the abstract aspirations of global
              mobility into tangible, legally fortified realities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_AMC.map((item, i) => (
              <div key={item.title} className="bg-white border border-platinum-200 p-6 rounded-sm">
                <p className="font-mono text-xs text-gold-500 mb-3">0{i + 1}</p>
                <h3 className="text-lg text-ink-900 font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-navy-950">
        <div className="container-page py-20 text-center">
          <p className="eyebrow mb-4">Secure Your Trajectory</p>
          <h2 className="text-3xl md:text-4xl text-platinum-50 font-medium max-w-2xl mx-auto">
            Do not leave your jurisdictional future to administrative inertia.
          </h2>
          <p className="mt-4 text-platinum-200/80 max-w-xl mx-auto">
            Schedule a diagnostic consultation with our senior legal strategists today.
          </p>
          <div className="mt-8">
            <Button href="/contact-us" variant="gold">
              Contact Asdaq Management Consultancy
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}