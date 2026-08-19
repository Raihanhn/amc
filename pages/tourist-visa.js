// pages/tourist-visa.js
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import ServiceTabs from "@/components/ServiceTabs";

const COUNTRIES = [
  { name: "Schengen Region", note: "Tourist Visa" },
  { name: "Dubai, UAE", note: "Tourist Visa" },
  { name: "Armenia", note: "Tourist Visa" },
  { name: "Russia", note: "Tourist Visa" },
  { name: "Turkey", note: "Tourist Visa" },
  { name: "Belarus", note: "Tourist Visa" },
  { name: "Uzbekistan", note: "Tourist Visa" },
  { name: "Kazakhstan", note: "Tourist Visa" },
  { name: "Saudi Arabia", note: "Tourist Visa" },
  { name: "African Region", note: "Select Countries" },
];

export default function TouristVisa() {
  return (
    <Layout
      title="Tourist Visa"
      description="High-clearance tourist and leisure visa processing across Schengen, Dubai, Armenia, Russia, Turkey, and 30-40+ destinations worldwide."
    >
      <section className="bg-navy-950">
        <div className="container-page py-16 md:py-24">
          <p className="eyebrow mb-4">B2C · Global Entry Visas</p>
          <h1 className="text-4xl md:text-5xl text-platinum-50 font-medium max-w-3xl">
            Tourist Visa <span className="italic text-gold-300">Pathways</span>
          </h1>
          <p className="mt-5 text-platinum-200/80 max-w-2xl leading-relaxed">
            Premium global leisure visa processing with unmatched approval rates —
            covering 30-40+ destinations, backed by our strict pre-vetting standard.
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
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">Currently Serving</p>
            <h2 className="text-3xl md:text-4xl text-ink-900 font-medium">
              A snapshot of our tourist visa destinations
            </h2>
            <p className="mt-4 text-slate-500 leading-relaxed">
              We currently process tourist visas across the following destinations,
              among 30-40+ countries in total. Contact us for the complete,
              up-to-date list for your nationality.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {COUNTRIES.map((c) => (
              <div
                key={c.name}
                className="bg-white border border-platinum-200 rounded-sm p-5 hover:border-gold-400 transition-colors"
              >
                <p className="text-ink-900 font-medium leading-snug">{c.name}</p>
                <p className="font-mono text-[11px] text-gold-500 mt-1.5 uppercase tracking-wide">
                  {c.note}
                </p>
              </div>
            ))}

            <div className="bg-navy-950 rounded-sm p-5 flex flex-col justify-center">
              <p className="text-platinum-50 font-medium leading-snug">
                + Many More Destinations
              </p>
              <p className="text-xs text-platinum-200/70 mt-1.5">
                Call us for the full list
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-platinum-100 border-t border-platinum-200">
        <div className="container-page py-20 text-center">
          <p className="eyebrow mb-4">Don't See Your Destination?</p>
          <h2 className="text-3xl md:text-4xl text-ink-900 font-medium max-w-2xl mx-auto">
            Our full country list is updated regularly — call or WhatsApp us directly.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="tel:+971564603123" variant="navy">
              +971 56 460 3123
            </Button>
            <Button href="/contact-us" variant="gold">
              Send an Inquiry
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}