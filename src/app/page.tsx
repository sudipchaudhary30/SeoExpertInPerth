import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";
import fs from "fs";
import path from "path";
export function generateMetadata(): Metadata {
  return {
    title: "Best SEO Services in Nepal — Rank #1 on Google | " + SITE_CONFIG.name,
    description: "Best SEO services in Nepal. We help Nepal businesses rank on Google Nepal with technical SEO, local SEO Kathmandu, content strategy, and measurable organic growth.",
    keywords: "SEO services in Nepal, best SEO agency Nepal, SEO company Kathmandu, local SEO Nepal, SEO consultant Nepal, affordable SEO packages Nepal",
    alternates: {
      canonical: SITE_CONFIG.url,
    },
    openGraph: {
      title: "Best SEO Services in Nepal — Rank #1 on Google | " + SITE_CONFIG.name,
      description: "We help Nepal businesses rank on Google Nepal with technical SEO, local SEO Kathmandu, and content-led growth.",
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: "website",
    },
  };
}
export default function Home() {
  const publicDir = path.join(process.cwd(), "public");
  const perfImg = fs.existsSync(path.join(publicDir, "images", "proof", "performance-6m.png"))
    ? "/images/proof/performance-6m.png"
    : "/images/proff%20of%20work/35.3K_clicks.png";
  const gsc12 = fs.existsSync(path.join(publicDir, "images", "proof", "gsc-12k.png"))
    ? "/images/proof/gsc-12k.png"
    : "/images/proff%20of%20work/12k_clicks.png";
  const gsc14 = fs.existsSync(path.join(publicDir, "images", "proof", "gsc-14k.png"))
    ? "/images/proof/gsc-14k.png"
    : "/images/proff%20of%20work/14K_clicks.png";
  const gsc17 = fs.existsSync(path.join(publicDir, "images", "proof", "gsc-17k.png"))
    ? "/images/proof/gsc-17k.png"
    : "/images/proff%20of%20work/17k_click.png";
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    jobTitle: "SEO Specialist & Flutter Developer",
    url: SITE_CONFIG.url,
    sameAs: Object.values(SITE_CONFIG.social),
  };
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    telephone: "+977 9808376303",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kathmandu",
      addressLocality: "Kathmandu",
      addressRegion: "Bagmati",
      postalCode: "44600",
      addressCountry: "NP",
    },
    sameAs: Object.values(SITE_CONFIG.social),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />
      <section className="border-b border-sky-100 bg-white py-10">
        <div className="container">
          <h1 className="text-[clamp(2.25rem,5vw,4rem)] font-semibold text-slate-900">Best SEO Services in Nepal — Rank #1 on Google</h1>
          <p className="mt-4 text-lg text-slate-700 max-w-2xl">Local Nepal-focused SEO services: technical SEO, local SEO Kathmandu, content strategy, and affordable packages tailored for Nepal businesses.</p>
          <div className="mt-6 flex items-center gap-4">
            <a href="/free-audit" className="bg-sky-700 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-800 transition-colors">Get Free SEO Audit</a>
            <a href="/pricing" className="text-sm font-semibold text-slate-900 border border-sky-200 px-4 py-2 hover:bg-sky-50">See Pricing (NPR)</a>
          </div>
        </div>
      </section>
      <section className="border-y border-sky-100 bg-white py-16 md:py-20">
        <div className="container space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">SEO Services</p>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-semibold text-slate-900">
              Built for searches like best SEO agency Nepal and best digital marketing agency Nepal.
            </h2>
            <p className="text-lg leading-8 text-slate-700">
              This homepage is structured around the terms clients actually search for when they want SEO help in Kathmandu and across Nepal, with a clear focus on technical SEO, local SEO, and content-led growth.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="border border-sky-100 bg-sky-50 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">SEO Expert Kathmandu</h3>
              <p className="mt-3 leading-7 text-slate-700">For businesses that want an SEO expert in Kathmandu with hands-on strategy, audits, and ranking improvements.</p>
            </article>
            <article className="border border-sky-100 bg-sky-50 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">SEO Specialist Nepal</h3>
              <p className="mt-3 leading-7 text-slate-700">For Nepal companies that need technical SEO, content strategy, and structured growth across the Nepal market.</p>
            </article>
            <article className="border border-sky-100 bg-sky-50 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Best SEO Agency in Nepal</h3>
              <p className="mt-3 leading-7 text-slate-700">For commercial search terms where trust, proof, and service clarity matter most before a lead decides to contact you.</p>
            </article>
          </div>
        </div>
      </section>
      <Bio />
      <Portfolio />
      
      <section className="bg-white py-12 border-t border-sky-100">
        <div className="container">
          <h2 className="text-2xl font-semibold">Proof of work</h2>
          <p className="mt-2 text-slate-600">Selected Google Search Console performance snapshots showing increased clicks and improved average position.</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <figure className="border p-4 bg-white shadow-sm">
              <img src={perfImg} alt="GSC Performance 6 months chart" className="w-full h-96 object-cover rounded" />
              <figcaption className="mt-2 text-sm text-slate-600">6-month performance overview — total clicks, impressions, CTR, average position.</figcaption>
            </figure>

            <figure className="border p-4 bg-white shadow-sm">
              <img src={gsc12} alt="Google Search impact 12k clicks Mar 18 2026" className="w-full h-96 object-cover rounded" />
              <figcaption className="mt-2 text-sm text-slate-600">Google Search impact — 12k clicks (18 Mar 2026).</figcaption>
            </figure>

            <figure className="border p-4 bg-white shadow-sm">
              <img src={gsc14} alt="Google Search impact 14k clicks Mar 20 2026" className="w-full h-96 object-cover rounded" />
              <figcaption className="mt-2 text-sm text-slate-600">Google Search impact — 14k clicks (20 Mar 2026).</figcaption>
            </figure>

            <figure className="border p-4 bg-white shadow-sm">
              <img src={gsc17} alt="Google Search impact 17k clicks Mar 25 2026" className="w-full h-96 object-cover rounded" />
              <figcaption className="mt-2 text-sm text-slate-600">Google Search impact — 17k clicks (25 Mar 2026).</figcaption>
            </figure>
          </div>

          
        </div>
      </section>
      <ContactForm />
    </>
  );
}
