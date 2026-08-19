// pages/thank-you.js
import Layout from "@/components/Layout";
import Button from "@/components/Button";

export default function ThankYou() {
  return (
    <Layout
      title="Thank You"
      description="Your AMC Dubai diagnostic intake has been received."
    >
      <section className="bg-navy-950 min-h-[70vh] flex items-center">
        <div className="container-page py-20 text-center max-w-2xl mx-auto">
          <div className="seal mx-auto mb-8">
            <span className="seal-num">✓</span>
            <span className="seal-label">Received</span>
          </div>

          <p className="eyebrow mb-4">Request Received</p>
          <h1 className="text-3xl md:text-4xl text-platinum-50 font-medium mb-5">
            Thank you — your diagnostic intake has been submitted.
          </h1>
          <p className="text-platinum-200/80 leading-relaxed max-w-lg mx-auto">
            A confirmation has also been sent to your email. Our senior legal
            strategists will review your file and reach out via your provided
            phone or email shortly.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/" variant="gold">
              Back to Home
            </Button>
            <Button href="/contact-us" variant="outline">
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}