// pages/tourist-visa.js
import Image from "next/image";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import ServiceTabs from "@/components/ServiceTabs";

const COUNTRIES = [
  { name: "Canada", note: "Tourist Visa" },
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

      <section id="schengen-visa" className="bg-platinum-50 scroll-mt-24">
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

      {/* Canada Tourist Visa spotlight */}
<section id="canada-visa" className="bg-platinum-50 scroll-mt-24">
  <div className="container-page py-16 md:py-20">
    <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
      <div className="relative w-full h-64 md:h-80 rounded-sm overflow-hidden order-2 md:order-1">
        <Image src="/images/visa/canada-tourist.jpeg" alt="Ottawa, Canada" fill className="object-cover" />
      </div>
      <div className="order-1 md:order-2">
        <p className="eyebrow mb-4">Canada Tourist Visa</p>
        <h2 className="text-3xl md:text-4xl text-ink-900 font-medium mb-5">
          Turn your <span className="italic text-gold-500">Canada travel goals</span> into reality
        </h2>
        <p className="text-slate-500 leading-relaxed mb-4">
          Canada is world-renowned for its breathtaking natural wonders, vibrant cities,
          and rich cultural experiences. Whether you want to witness the majestic Niagara
          Falls, explore the Rocky Mountains of Banff, or visit loved ones, AMC is here
          to pave your way.
        </p>
        <p className="text-slate-500 leading-relaxed">
          Getting your Canadian tourist or visitor visa doesn't have to be stressful.
          While no agency can legally guarantee 100% approval, AMC's rigorous,
          document-driven filing process delivers an exceptional visa success ratio.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Dubai Work & Tourist Visa spotlight */}
<section id="dubai-visa" className="bg-platinum-100 border-y border-platinum-200 scroll-mt-24">
  <div className="container-page py-16 md:py-20">
    <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
      <div>
        <p className="eyebrow mb-4">Dubai Work & Tourist Visa</p>
        <h2 className="text-3xl md:text-4xl text-ink-900 font-medium mb-5">
          Live, work, and innovate in <span className="italic text-gold-500">Dubai</span>
        </h2>
        <p className="text-slate-500 leading-relaxed mb-4">
          Often compared to Manhattan and major US megacities, Dubai is the city that
          never sleeps — a dynamic world hub where modern innovation meets endless
          opportunity. From the iconic Burj Khalifa to booming corporate districts,
          Dubai is the planet's favourite destination for holidays, careers, and
          groundbreaking business ventures.
        </p>
        <p className="text-slate-500 leading-relaxed">
          Whether you want to launch a company, land your dream job, or experience a
          luxury vacation, AMC is your trusted gateway to the United Arab Emirates.
        </p>
      </div>
      <div className="relative w-full h-64 md:h-80 rounded-sm overflow-hidden">
        <Image src="/images/visa/dubai-uae.jpeg" alt="Dubai skyline and UAE flag" fill className="object-cover" />
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