import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { SITE_CONFIG } from "@/lib/config";

export function generateMetadata(): Metadata {
  return {
    title: "Contact SEO Expert Amsterdam | Best SEO Agency in Netherlands",
    description: "Contact Sudip Chaudhary for SEO services in Amsterdam and across the Netherlands. Get a consultation for technical SEO, local SEO, content strategy, and growth-focused search marketing.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/contact`,
    },
    openGraph: {
      title: "Contact SEO Expert Amsterdam | Best SEO Agency in Netherlands",
      description: "Schedule an SEO consultation for your Amsterdam or Netherlands business. Get help with technical SEO, local SEO, and content strategy.",
      url: `${SITE_CONFIG.url}/contact`,
    },
  };
}

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-b from-[#f0f7ff] to-white py-16 md:py-24">
      <div className="container space-y-12">
        <section className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Contact</p>
            <h1 className="text-[clamp(2.35rem,5vw,4.5rem)] font-semibold leading-tight text-slate-900">
              Speak with an SEO expert in Amsterdam about ranking your Netherlands business.
            </h1>
            <p className="text-lg leading-8 text-slate-700">
              If you are comparing the best SEO agency in Netherlands or the best digital marketing agency in Netherlands, this is the page to start with. I help businesses improve visibility with technical SEO, local SEO, content strategy, and focused growth planning.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="border border-sky-100 bg-white p-5 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">What I can help with</h2>
                <p className="mt-2 leading-7 text-slate-700">
                  Technical SEO audits, keyword mapping, local search visibility, service page optimization, and content planning.
                </p>
              </article>
              <article className="border border-sky-100 bg-white p-5 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">Best fit for</h2>
                <p className="mt-2 leading-7 text-slate-700">
                  Amsterdam businesses, Dutch service companies, and brands that need senior SEO support from strategy to execution.
                </p>
              </article>
            </div>

            <div className="border border-sky-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Direct contact</h2>
              <div className="mt-4 space-y-3 text-slate-700">
                <p>Email: <a href="mailto:chsudip28@gmail.com" className="text-sky-700 hover:underline">chsudip28@gmail.com</a></p>
                <p>Location: <strong>Amsterdam, Netherlands</strong></p>
                <p>
                  LinkedIn: <a href="https://www.linkedin.com/in/sudip-chaudhary" target="_blank" rel="noreferrer" className="text-sky-700 hover:underline">linkedin.com/in/sudip-chaudhary</a>
                </p>
                <p className="pt-4 border-t border-sky-100">
                  <strong>Free 30-minute consultation available</strong> for businesses that want practical next steps and a clear SEO roadmap.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/seo-services" className="border border-sky-700 bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-800">
                View SEO services
              </Link>
              <Link href="/blog" className="border border-sky-700 px-6 py-3 text-sm font-semibold text-sky-700 transition-colors hover:bg-sky-50">
                Read SEO guides
              </Link>
            </div>
          </div>

          <section className="border border-sky-100 bg-white p-4 shadow-xl md:p-6">
            <div className="mb-5 border-b border-sky-100 pb-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Consultation</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Tell me what you want to rank for</h2>
              <p className="mt-3 leading-7 text-slate-700">
                Share your website, your goals, and the keywords you want to target. I will review it with a practical SEO lens and respond with a clear next step.
              </p>
            </div>
            <ContactForm />
          </section>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <article className="border border-sky-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">SEO Expert Amsterdam</h3>
            <p className="mt-3 leading-7 text-slate-700">
              Contact me if you want local SEO strategy and hands-on execution from someone based in Amsterdam.
            </p>
          </article>
          <article className="border border-sky-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">SEO Expert Netherlands</h3>
            <p className="mt-3 leading-7 text-slate-700">
              This page supports Dutch businesses that need search visibility beyond a single city.
            </p>
          </article>
          <article className="border border-sky-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Best SEO Agency in Netherlands</h3>
            <p className="mt-3 leading-7 text-slate-700">
              For higher-intent searches, this contact page turns interest into a real consultation request.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}