import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Seal from "@/components/Seal";
import Ticker from "@/components/Ticker";
import ShowcaseRow from "@/components/ShowcaseRow";

const VISA_PATHWAYS = [
  {
    image: "/images/visa/europe-work-permit.jpeg",
    alt: "Schengen region cityscape",
    title: "Schengen Region: 27 Nations, One Permit",
    description:
      "Multi-year, multiple-entry access across the Schengen bloc, processed under strict internal compliance — no third-party dependencies.",
    ctaLabel: "Explore Schengen",
    ctaHref: "/tourist-visa",
  },
    {
    image: "/images/visa/canada-tourist.jpeg",
    alt: "Ottawa, Canada",
    title: "Canada: Tourist & Visitor Visa",
    description:
      "Document-driven filing with an exceptional success ratio — Niagara Falls, Banff, and family visits made simple.",
    ctaLabel: "Explore Canada Visa",
    ctaHref: "/tourist-visa",
  },
  {
    image: "/images/visa/dubai-uae.jpeg",
    alt: "Dubai skyline",
    title: "Dubai, UAE: Your Regional Base",
    description:
      "Residency and tourist pathways into the Emirates, fully coordinated with our Dubai HQ legal desk.",
    ctaLabel: "UAE Residency",
    ctaHref: "/tourist-visa",
  },
];

const SOURCING_REGIONS = [
    {
    image: "/images/sourcing/nepal-workforce.jpeg",
    alt: "Nepali workforce, Everest",
    title: "Nepal: Loyalty & Discipline",
    description:
      "A resilient, highly disciplined workforce trusted across security, construction, hospitality, and manufacturing sectors.",
    ctaLabel: "Nepal Sourcing",
    ctaHref: "/work-with-us#sourcing-regions",
  },
  {
    image: "/images/sourcing/bangladesh-workforce.jpeg",
    alt: "Bangladeshi workforce",
    title: "Bangladesh: Trusted Deployment Partner",
    description:
      "Reliable skilled and semi-skilled labor across construction, hospitality, manufacturing, and agriculture.",
    ctaLabel: "Bangladesh Sourcing",
    ctaHref: "/work-with-us#sourcing-regions",
  },
  {
    image: "/images/sourcing/multinational-workforce.jpeg",
    alt: "Multi-national workforce",
    title: "Multi-National: One-Stop Talent Access",
    description:
      "Diverse, vetted talent from India, the Philippines, Sri Lanka, and Africa — matched to your project needs.",
    ctaLabel: "Global Sourcing",
    ctaHref: "/work-with-us#sourcing-regions",
  },
];

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
      {/* HERO — video background */}
      <section className="relative bg-navy-950 overflow-hidden min-h-[88vh] flex items-center">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://picsum.photos/seed/amc-hero-dubai/1600/1000"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* darken + left-to-right gradient so the text stays legible over any footage */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/92 via-navy-950/65 to-navy-950/25" />

        <div className="container-page relative z-10 py-24 md:py-28">
          <div className="max-w-2xl">
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
              <Button href="/contact-us" variant="gold" className="min-w-[200px] sm:min-w-0 transition transform hover:scale-105">
                Request Consultation
              </Button>
              <Button href="/our-services" variant="outline" className="min-w-[200px] sm:min-w-0 transition transform hover:scale-105">
                Explore Services
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 md:right-14 z-10 hidden sm:block">
          <Seal number="12+" label="Years Est. 2014" />
        </div>
      </section>

      {/* TICKER — hover-fill destination strip */}
      <Ticker />

      {/* CREDENTIAL STRIP */}
      <section className="bg-navy-900 border-y border-navy-800">
        <div className="container-page py-10 flex flex-wrap items-center justify-center gap-10 md:gap-16">
          <Seal number="12+" label="Years Operating" />
          <Seal number="35+" label="European Alliances" />
          <Seal number="100+" label="Sourcing Nodes" />
          <Seal number="4" label="Continents Served" />
        </div>
      </section>

      {/* POPULAR VISA PATHWAYS — hover-reveal row */}
      <section className="bg-platinum-50">
        <div className="container-page py-20 md:py-24">
          <ShowcaseRow eyebrowWord="Popular" boldWord="Pathways" items={VISA_PATHWAYS} />
        </div>
      </section>

      {/* SOURCING REGIONS — hover-reveal row */}
      <section className="bg-platinum-100 border-y border-platinum-200">
        <div className="container-page py-20 md:py-24">
          <ShowcaseRow eyebrowWord="Sourcing" boldWord="Regions" items={SOURCING_REGIONS} />
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
              <Button href="/work-with-us" variant="gold" className="mt-8 transition transform hover:scale-105">
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
              <Button href="/tourist-visa" variant="gold" className="mt-8 transition transform hover:scale-105">
                Explore Visa Pathways
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AMC */}
      <section className=" bg-platinum-100 border-y border-platinum-200">
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
              <div key={item.title} className=" bg-white border border-platinum-200 p-6 rounded-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:border-gold-400">
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
            <Button href="/contact-us" variant="gold" className="transition transform hover:scale-105">
              Contact Asdaq Management Consultancy
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}