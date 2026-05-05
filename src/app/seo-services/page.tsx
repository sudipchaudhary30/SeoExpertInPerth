import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

const services = [
  {
    title: "Technical SEO",
    description: "Site audits, Core Web Vitals, crawlability, indexation, structured data, and architecture fixes.",
  },
  {
    title: "Local SEO",
    description: "Google Business Profile optimization, local citations, location pages, and map-pack visibility.",
  },
  {
    title: "Content Strategy",
    description: "Keyword mapping, service page copy, blog planning, and content clusters that support rankings.",
  },
  {
    title: "Link Building",
    description: "Relevant backlinks, digital PR support, and authority-building outreach for Dutch businesses.",
  },
  {
    title: "SEO Consulting",
    description: "Strategy, audits, and implementation guidance for businesses that need senior-level SEO support.",
  },
  {
    title: "Reporting & Growth",
    description: "Rank tracking, analytics review, and ongoing optimization based on real search performance.",
  },
];

const faqs = [
  {
    question: "Which keywords is this page meant to rank for?",
    answer: "The page is built around SEO expert Amsterdam, SEO expert Netherlands, SEO specialist Netherlands, best SEO agency in Netherlands, and best digital marketing agency in Netherlands.",
  },
  {
    question: "Is this a service page or a blog post?",
    answer: "It is a commercial landing page designed to convert search traffic and support the homepage with a focused service cluster.",
  },
  {
    question: "What should rank first on the site?",
    answer: "The homepage should own the expert and specialist terms, while this page should compete for agency and service-intent searches.",
  },
];

export function generateMetadata(): Metadata {
  return {
    title: "SEO Services in Amsterdam | Best SEO Agency in Netherlands",
    description: "SEO services in Amsterdam and across the Netherlands. Technical SEO, local SEO, content strategy, and link building for businesses looking for the best SEO agency in Netherlands and best digital marketing agency in Netherlands.",
    keywords: [
      "SEO services Amsterdam",
      "SEO services Netherlands",
      "best SEO agency in Netherlands",
      "best digital marketing agency in Netherlands",
      "SEO expert Amsterdam",
      "SEO expert Netherlands",
      "SEO specialist Netherlands",
      "technical SEO Netherlands",
      "local SEO Amsterdam",
    ].join(", "),
    alternates: {
      canonical: `${SITE_CONFIG.url}/seo-services`,
    },
    openGraph: {
      title: "SEO Services in Amsterdam | Best SEO Agency in Netherlands",
      description: "Technical SEO, local SEO, content strategy, and link building for Dutch businesses that want better rankings and more qualified leads.",
      url: `${SITE_CONFIG.url}/seo-services`,
      type: "website",
    },
  };
}

export default function SeoServicesPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-sky-100 bg-gradient-to-b from-[#eaf4ff] to-white py-16 md:py-24">
        <div className="container space-y-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">SEO Services</p>
            <h1 className="text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-tight text-slate-900">
              SEO Services in Amsterdam for businesses searching for the best SEO agency in Netherlands.
            </h1>
            <p className="text-lg leading-8 text-slate-700">
              I help Dutch businesses grow with technical SEO, local SEO, content strategy, and link building. This page is built to support the highest-value commercial searches while staying clear, useful, and conversion focused.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="border border-sky-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Best SEO Agency in Netherlands</h2>
              <p className="mt-3 leading-7 text-slate-700">
                Built for users comparing agencies and looking for a reliable SEO partner with measurable results.
              </p>
            </article>
            <article className="border border-sky-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Best Digital Marketing Agency in Netherlands</h2>
              <p className="mt-3 leading-7 text-slate-700">
                Positioned for broader marketing searches where SEO, content, and growth strategy sit together.
              </p>
            </article>
            <article className="border border-sky-100 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">SEO Expert Amsterdam</h2>
              <p className="mt-3 leading-7 text-slate-700">
                Reinforces the local authority signal from the homepage and keeps the keyword cluster tightly connected.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">What I do</p>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-semibold text-slate-900">
              Services designed to improve rankings, traffic, and leads.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="border border-sky-100 bg-sky-50 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-sky-100 bg-slate-50 py-16 md:py-20">
        <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Process</p>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-semibold text-slate-900">
              The SEO process I use for Netherlands businesses.
            </h2>
            <div className="space-y-4 text-lg leading-8 text-slate-700">
              <p>1. Audit the site and identify technical barriers to crawling, indexing, and conversion.</p>
              <p>2. Build a keyword map that separates homepage, service, and blog intent.</p>
              <p>3. Improve the highest-value pages first, then support them with internal links and topical content.</p>
              <p>4. Track rankings, traffic, and conversions, then continue optimizing based on real data.</p>
            </div>
          </div>

          <div className="border border-sky-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Why this page exists</h2>
            <p className="mt-4 leading-7 text-slate-700">
              The homepage is the authority page for expert and specialist terms. This service page is the commercial page that can rank for agency and service-intent queries, which is the right way to build topical relevance and avoid keyword cannibalization.
            </p>
            <div className="mt-6 space-y-3 text-slate-700">
              <p>• Supports the homepage keyword cluster</p>
              <p>• Creates a clear internal linking path</p>
              <p>• Gives search engines a focused commercial landing page</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-800">
                Contact me
              </Link>
              <Link href="/blog" className="border border-sky-700 px-6 py-3 text-sm font-semibold text-sky-700 transition-colors hover:bg-sky-50">
                Read the blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">FAQs</p>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-semibold text-slate-900">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="border border-sky-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-700">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}