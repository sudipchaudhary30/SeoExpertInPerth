import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

const skills = [
  "Technical SEO",
  "Keyword Research",
  "Content Strategy",
  "Local SEO Amsterdam",
  "GDPR & SEO",
  "Schema Markup",
  "Core Web Vitals",
  "Link Building",
  "Analytics & Reporting",
  "Dutch Market Expertise",
  "Conversion Optimization",
  "Competitive Analysis",
];

const timeline = [
  {
    year: "2022",
    title: "Started specializing in technical SEO",
    description: "Began focusing on comprehensive audits, technical optimization, content strategy, and search visibility for international clients and Dutch businesses.",
  },
  {
    year: "2024",
    title: "Established as SEO Expert in Amsterdam",
    description: "Relocated to Amsterdam and began working directly with Netherlands businesses, understanding local market dynamics and Dutch search behavior.",
  },
  {
    year: "Now",
    title: "Leading SEO for Netherlands market",
    description: "Helping Dutch businesses and international brands reach the Netherlands market through data-backed SEO, content strategy, and sustainable organic growth.",
  },
];

export function generateMetadata(): Metadata {
  return {
    title: "About Sudip Chaudhary | SEO Expert Amsterdam",
    description: "Sudip Chaudhary - SEO expert based in Amsterdam, Netherlands. Specializing in technical SEO, content strategy, and helping Dutch businesses achieve better search rankings. 3+ years of proven SEO results.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/about`,
    },
  };
}

export default function AboutPage() {
  return (
    <main className="bg-white py-16 md:py-24">
      <div className="container space-y-12">
        <section className="max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">About</p>
          <h1 className="text-[clamp(2.25rem,5vw,4rem)] font-semibold text-slate-900">
            SEO Expert in Netherlands helping businesses dominate Google search results.
          </h1>
          <p className="text-lg leading-8 text-slate-700" style={{lineHeight: '1.5'}}>
            I am Sudip Chaudhary, a <strong>specialized SEO expert</strong> based in <strong>Amsterdam, Netherlands</strong>. With <strong>3+ years of hands-on experience</strong>, I focus on delivering <strong>measurable SEO results</strong> for Dutch businesses from technical optimization and keyword strategy to content architecture and link building. My work centers on combining data-driven SEO practices with a deep understanding of the Dutch digital market.
          </p>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border border-sky-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Experience timeline</h2>
            <div className="mt-6 space-y-5">
              {timeline.map((item) => (
                <article key={item.year} className="border border-sky-200 bg-white p-5">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">{item.year}</div>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-700" style={{lineHeight: '1.5'}}>{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="border border-sky-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Core skills</h2>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skills.map((skill) => (
                <div key={skill} className="border border-sky-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900">
                  {skill}
                </div>
              ))}
            </div>
            <p className="mt-6 leading-relaxed text-slate-700" style={{lineHeight: '1.5'}}>
              I like projects where the strategy is practical and the execution is visible: better search rankings,
              better user journeys, and better long-term content systems.
            </p>
          </div>
        </section>

        <section className="border border-sky-200 bg-white p-8 text-slate-900 shadow-sm">
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold">Ready to improve your SEO?</h2>
          <p className="mt-4 max-w-2xl text-slate-700">
            If you want a search-led strategy, technical optimization, or a content plan that brings in better leads,
            I&apos;m here to help you rank higher and reach more customers.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="bg-sky-700 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-800 transition-colors">
              Contact me
            </Link>
            <Link href="/portfolio" className="border border-sky-700 px-6 py-3 text-sm font-semibold text-sky-700 hover:bg-sky-50 transition-colors">
              View portfolio
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}