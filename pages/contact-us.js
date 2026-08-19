// pages/contact-us.js

import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";

const DESKS = [
  {
    letter: "A",
    title: "Corporate Enterprises & Sourcing Desk (B2B)",
    body: "Mass industrial recruitment pipelines, Dubai company registration, and ministerial labor quota compliance (MOHRE).",
    routing: "Specify industry sector, required skill/unskilled echelons, and projected deployment timelines.",
  },
  {
    letter: "B",
    title: "Sovereign Migration & Relocation Desk (B2C)",
    body: "Sovereign European work permits, long-term residency tracks, and high-clearance Schengen visas.",
    routing: "Provide professional field, target European nations, and current passport nationality.",
  },
  {
    letter: "C",
    title: "Executive Logistics & Document Verification Desk",
    body: "MOFA document legalizations, global consular verification, and mass group aviation ticketing.",
    routing: "Indicate document jurisdiction origin, required ministerial seals, or corporate transit schedules.",
  },
];

export default function ContactUs() {
  return (
    <Layout
      title="Contact Us"
      description="Reach AMC Dubai's Global Operations Desk — Dubai Investment Park HQ, WhatsApp, and our intent-driven intake desks."
    >
      <section className="bg-navy-950">
        <div className="container-page py-16 md:py-24">
          <p className="eyebrow mb-4">Global Operations Desk</p>
          <h1 className="text-4xl md:text-5xl text-platinum-50 font-medium max-w-3xl">
            Connect with the <span className="italic text-gold-300">Vanguard</span>
          </h1>
          <p className="mt-5 text-platinum-200/80 max-w-2xl leading-relaxed">
            Direct channels to jurisprudential excellence and corporate synthesis —
            all inquiries centrally processed from our Dubai headquarters.
          </p>
        </div>
      </section>

      <section className="bg-platinum-50">
        <div className="container-page py-16 md:py-24 grid lg:grid-cols-5 gap-14">
          {/* Contact info + desks */}
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-white border border-platinum-200 rounded-sm p-7">
              <p className="eyebrow mb-4">Headquarters</p>
              <div className="space-y-3 text-sm text-slate-500 leading-relaxed">
                <p className="text-ink-900 font-medium">
                  Suite F1-547, Dubai Investment Park 1
                  <br />
                  New Dubai, United Arab Emirates
                </p>
                <p>
                  <a href="tel:+971564603123" className="text-ink-900 hover:text-gold-600">
                    +971 56 460 3123
                  </a>{" "}
                  (Mobile & WhatsApp)
                </p>
                <p>
                  <a href="mailto:info@amc-dubai.com" className="text-ink-900 hover:text-gold-600">
                    info@amc-dubai.com
                  </a>
                </p>
                <p>amc-dubai.com</p>
              </div>
            </div>

            <div>
              <p className="eyebrow mb-4">Intent-Driven Intake Desks</p>
              <div className="space-y-4">
                {DESKS.map((desk) => (
                  <div key={desk.letter} className="border border-platinum-200 bg-white rounded-sm p-5">
                    <div className="flex gap-3 items-start">
                      <span className="font-mono text-gold-500 text-lg shrink-0">{desk.letter}.</span>
                      <div>
                        <h3 className="text-ink-900 font-medium text-sm leading-snug mb-1.5">
                          {desk.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{desk.body}</p>
                        <p className="text-xs text-slate-500/80 mt-2 italic">{desk.routing}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <p className="eyebrow mb-4">Strategic Diagnostic Form</p>
            <h2 className="text-2xl md:text-3xl text-ink-900 font-medium mb-3">
              Start your AMC intake
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-lg">
              This structured intake is engineered to eliminate administrative
              latency and instantly capture the essentials for your Zero-Chance
              Protocol evaluation.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}