// pages/work-visa.js
import Image from "next/image";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import ServiceTabs from "@/components/ServiceTabs";
import connectDB from "@/lib/mongodb";
import Country from "@/models/Country";

const FALLBACK_COUNTRIES = [
  { _id: "fallback-1", name: "Serbia" },
  { _id: "fallback-2", name: "North Macedonia" },
  { _id: "fallback-3", name: "Moldova" },
  { _id: "fallback-4", name: "Belarus" },
  { _id: "fallback-5", name: "Portugal" },
  { _id: "fallback-6", name: "Malta" },
  { _id: "fallback-7", name: "Poland" },
  { _id: "fallback-8", name: "Greece" },
  { _id: "fallback-9", name: "Estonia" },
  { _id: "fallback-10", name: "Slovakia" },
];

export async function getServerSideProps() {
  try {
    await connectDB();
    const docs = await Country.find({ type: "work" })
      .sort({ order: 1, createdAt: 1 })
      .lean();
    const countries = docs.length
      ? docs.map((c) => ({ _id: String(c._id), name: c.name }))
      : FALLBACK_COUNTRIES;
    return { props: { countries } };
  } catch (err) {
    console.error("Failed to load work visa countries:", err);
    return { props: { countries: FALLBACK_COUNTRIES } };
  }
}

export default function WorkVisa({ countries }) {
  return (
    <Layout
      title="Work Visa"
      description="Actively running European work permit corridors — Serbia, North Macedonia, Moldova, Belarus, Portugal — updated periodically."
    >
      <section className="bg-navy-950">
        <div className="container-page py-16 md:py-24">
          <p className="eyebrow mb-4">B2C · European Work Permits</p>
          <h1 className="text-4xl md:text-5xl text-platinum-50 font-medium max-w-3xl">
            Work Visa <span className="italic text-gold-300">Corridors</span>
          </h1>
          <p className="mt-5 text-platinum-200/80 max-w-2xl leading-relaxed">
            Strategic intercontinental work permits and sovereign deployments —
            active corridors rotate periodically based on ministerial quotas and
            partner demand.
          </p>
        </div>
      </section>

      {/* Work Permit Visa (Schengen & EU) intro */}
        <section id="schengen-visa" className="bg-platinum-50 border-b border-platinum-200 scroll-mt-24">
          <div className="container-page py-16 md:py-20">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              <div>
                <p className="eyebrow mb-4">For Asian Applicants</p>
                <h2 className="text-3xl md:text-4xl text-ink-900 font-medium mb-5">
                  Work Permit Visa <span className="italic text-gold-500">(Schengen & EU)</span>
                </h2>
                <p className="text-slate-500 leading-relaxed mb-4">
                  Looking for reliable work opportunities in Europe? At AMC, we provide
                  hassle-free pathways to official Schengen & European Union work permits,
                  specifically for applicants from Asia.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Europe is currently facing a massive shortage of unskilled and semi-skilled
                  workers. We've built powerful corporate connections and a dedicated team of
                  expert immigration lawyers, liaising directly with verified companies across
                  Europe to secure your employment and visa smoothly.
                </p>
              </div>
              <div className="relative w-full h-64 md:h-80 rounded-sm overflow-hidden">
                <Image src="/images/visa/europe-work-permit.jpeg" alt="European work permit destinations" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

      <section id="work-corridors" className="bg-platinum-50 scroll-mt-24">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-4">Active Right Now</p>
            <h2 className="text-3xl md:text-4xl text-ink-900 font-medium">
              Currently running work visa corridors
            </h2>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Unlike tourist visas, work permit corridors run on a rotating basis —
              typically 5-8 countries active at any given time. Below is our
              current lineup.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {countries.map((c, i) => (
              <div
                key={c._id}
                className="bg-white border border-platinum-200 rounded-sm p-6 flex items-start justify-between gap-4"
              >
                <div>
                  <p className="font-mono text-xs text-gold-500 mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-lg text-ink-900 font-medium">{c.name}</h3>
                </div>
                <span className="shrink-0 mt-1 inline-flex items-center gap-1.5 text-xs font-mono text-navy-800 bg-gold-100 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                  Active
                </span>
              </div>
            ))}

            <div className="bg-navy-950 rounded-sm p-6 flex flex-col justify-center">
              <p className="text-platinum-50 font-medium leading-snug">
                Corridor list updates periodically
              </p>
              <p className="text-xs text-platinum-200/70 mt-1.5">
                Call us for this week's active countries
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-platinum-100 border-t border-platinum-200">
        <div className="container-page py-20 text-center">
          <p className="eyebrow mb-4">Timing Matters</p>
          <h2 className="text-3xl md:text-4xl text-ink-900 font-medium max-w-2xl mx-auto">
            Work permit quotas open and close fast — check with us before you plan.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="tel:+971564603123" variant="navy">
              +971 56 460 3123
            </Button>
            <Button href="/contact-us" variant="gold">
              Check Current Corridors
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}