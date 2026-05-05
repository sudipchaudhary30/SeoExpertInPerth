import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";
export function generateMetadata(): Metadata {
  return {
    title: "SEO Expert Amsterdam | Best SEO Agency in Netherlands | Sudip Chaudhary",
    description: "Sudip Chaudhary is an SEO expert in Amsterdam, Netherlands, helping Dutch businesses improve rankings with technical SEO, local SEO, and content strategy. Focused on best SEO agency in Netherlands and best digital marketing agency in Netherlands searches.",
    keywords: "SEO expert Amsterdam, SEO specialist Netherlands, Best SEO agency in Netherlands, Best Digital Marketing Agency in Netherlands, technical SEO, content strategy, Google ranking",
    alternates: {
      canonical: SITE_CONFIG.url,
    },
    openGraph: {
      title: "SEO Expert Amsterdam | Best SEO Agency in Netherlands | Sudip Chaudhary",
      description: "Sudip Chaudhary is an SEO expert in Amsterdam, Netherlands, helping Dutch businesses improve rankings with technical SEO, local SEO, and content strategy.",
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: "website",
    },
  };
}
export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    jobTitle: "SEO Specialist & Flutter Developer",
    url: SITE_CONFIG.url,
    sameAs: Object.values(SITE_CONFIG.social),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Hero />
      <section className="border-y border-sky-100 bg-white py-16 md:py-20">
        <div className="container space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">SEO Services</p>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-semibold text-slate-900">
              Built for searches like best SEO agency in Netherlands and best digital marketing agency in Netherlands.
            </h2>
            <p className="text-lg leading-8 text-slate-700">
              This homepage is structured around the terms clients actually search for when they want SEO help in Amsterdam and across the Netherlands, with a clear focus on technical SEO, local SEO, and content-led growth.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="border border-sky-100 bg-sky-50 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">SEO Expert Amsterdam</h3>
              <p className="mt-3 leading-7 text-slate-700">
                For businesses that want an SEO expert in Amsterdam with hands-on strategy, audits, and ranking improvements.
              </p>
            </article>
            <article className="border border-sky-100 bg-sky-50 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">SEO Specialist Netherlands</h3>
              <p className="mt-3 leading-7 text-slate-700">
                For Dutch companies that need technical SEO, content strategy, and structured growth across the Netherlands market.
              </p>
            </article>
            <article className="border border-sky-100 bg-sky-50 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Best SEO Agency in Netherlands</h3>
              <p className="mt-3 leading-7 text-slate-700">
                For commercial search terms where trust, proof, and service clarity matter most before a lead decides to contact you.
              </p>
            </article>
          </div>
        </div>
      </section>
      <Bio />
      <Portfolio />
      <ContactForm />
    </>
  );
}
