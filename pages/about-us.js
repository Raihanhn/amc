// pages/about-us.js
import Image from "next/image";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Seal from "@/components/Seal";

const TIMELINE = [
  {
    year: "2011",
    title: "The Dubai Paradigm Exposure",
    body: "Dr. Ahmed isolates fundamental structural gaps, client vulnerabilities, and deployment inefficiencies in the Middle Eastern corporate landscape.",
  },
  {
    year: "2014",
    title: "The Manpower Renaissance",
    body: "Amigos Global is incorporated in Sector V, Salt Lake City, Kolkata, introducing transparent, honesty-driven deployment frameworks across the GCC region.",
  },
  {
    year: "2016–17",
    title: "The European Schengen Pivot",
    body: "AMC scales operations directly into the strictly regulated European continental market, securing premier enterprise retainers in Poland, Greece, and Portugal.",
  },
  {
    year: "Present",
    title: "Pan-European Saturation",
    body: "Strategic corporate channels scaled extensively across Romania, Croatia, Moldova, North Macedonia, Kosovo, and Belarus.",
  },
];

export default function AboutUs() {
  return (
    <Layout
      title="About Us"
      description="The founder's story behind Asdaq Management Consultancy — from Amigos Global in Kolkata to a 35+ partner European immigration network."
    >
      {/* HERO */}
      <section className="bg-navy-950">
        <div className="container-page py-16 md:py-24">
          <p className="eyebrow mb-4">The Architecture of Integrity</p>
          <h1 className="text-4xl md:text-5xl text-platinum-50 font-medium max-w-3xl">
            The AMC <span className="italic text-gold-300">Origin Story</span>
          </h1>
          <p className="mt-5 text-platinum-200/80 max-w-2xl leading-relaxed">
            Bridging borders, securing legacies — your panoramic gateway to European
            mobility, born out of a profound commitment to systemic reform.
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-platinum-50">
        <div className="container-page py-20 md:py-28 grid lg:grid-cols-2 gap-14 items-start">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-sm overflow-hidden border border-platinum-200 aspect-[4/5]">
              <Image
                src="https://picsum.photos/seed/amc-founder/800/1000"
                alt="Dr. Ahmed, Founder & CEO"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-4">The Founder's Manifesto</p>
            <h2 className="text-3xl md:text-4xl text-ink-900 font-medium mb-6">
              A profound commitment to systemic reform
            </h2>
            <div className="space-y-4 text-slate-500 leading-relaxed text-[15px]">
              <p>
                In 2011, Founder and CEO Dr. Ahmed — an academically distinguished
                alumnus with a foundational degree from Australia, an MBA, and a Ph.D.
                from India — transitioned into the Dubai corporate ecosystem. Tasked
                with managing high-profile executive placements, he was immediately
                confronted with the inefficiencies and systemic vulnerabilities
                plaguing the cross-border recruitment and migration pipeline.
              </p>
              <p>
                Recognizing that the industry's complexity was often artificially
                manufactured to mask inefficiency, Dr. Ahmed chose to disrupt the
                status quo. In 2014, he founded Amigos Global in Sector V, Salt Lake
                City, Kolkata — established to replace bureaucratic obscurity with
                absolute honesty and a radically simplified, transparent visa
                procurement architecture.
              </p>
            </div>

            <blockquote className="mt-8 border-l-2 border-gold-400 pl-6 py-1">
              <p className="text-ink-900 italic leading-relaxed">
                "Migration should be an empowering evolutionary milestone, not a
                bureaucratic nightmare. We do not just issue visas; we secure your
                legacy."
              </p>
              <footer className="mt-3 text-sm text-slate-500 not-italic">
                — Dr. Ahmed, Founder & CEO, Asdaq Management Consultancy
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-platinum-100 border-y border-platinum-200">
        <div className="container-page py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Chronological Evolution</p>
            <h2 className="text-3xl md:text-4xl text-ink-900 font-medium">
              Frontier Expansion
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {TIMELINE.map((item) => (
              <div
                key={item.year}
                className="bg-white border border-platinum-200 rounded-sm p-6 relative"
              >
                <p className="font-mono text-2xl text-gold-500 mb-3">{item.year}</p>
                <h3 className="text-base text-ink-900 font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL SCALE */}
      <section className="bg-navy-950">
        <div className="container-page py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Institutional Ecosystem</p>
            <h2 className="text-3xl md:text-4xl text-platinum-50 font-medium">
              Scale of Operations
            </h2>
            <p className="mt-4 text-platinum-200/80 leading-relaxed">
              Headquartered in Dubai, AMC directly orchestrates transnational talent
              pipelines and legal processes across four continents, with absolute
              administrative efficiency.
            </p>
          </div>

          <div className="flex flex-wrap gap-10 md:gap-16 mb-14">
            <Seal number="35+" label="European Alliances" />
            <Seal number="100+" label="Sourcing Nodes" />
            <Seal number="12+" label="Years Operating" />
            <Seal number="4" label="Continents Served" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-navy-800 p-6 rounded-sm">
              <h3 className="text-platinum-50 font-medium mb-2">
                35+ European Alliances
              </h3>
              <p className="text-sm text-platinum-200/70 leading-relaxed">
                Permanent legal retainers and strategic partnerships with premier
                European corporations and elite immigration law firms.
              </p>
            </div>
            <div className="border border-navy-800 p-6 rounded-sm">
              <h3 className="text-platinum-50 font-medium mb-2">100+ Sourcing Nodes</h3>
              <p className="text-sm text-platinum-200/70 leading-relaxed">
                A deeply vetted network of associate partners spanning India,
                Bangladesh, Nepal, and the African continent.
              </p>
            </div>
            <div className="border border-navy-800 p-6 rounded-sm">
              <h3 className="text-platinum-50 font-medium mb-2">
                Centralized Governance
              </h3>
              <p className="text-sm text-platinum-200/70 leading-relaxed">
                Every cross-border file, legal document legalization, and ministerial
                clearance is managed securely from our Dubai headquarters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-platinum-50">
        <div className="container-page py-20 text-center">
          <h2 className="text-3xl md:text-4xl text-ink-900 font-medium max-w-2xl mx-auto">
            Ready to begin your trajectory?
          </h2>
          <div className="mt-8">
            <Button href="/contact-us" variant="navy">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}