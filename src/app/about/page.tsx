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
    <main className="bg-[#f0f2f5] py-16 md:py-24">
      <div className="container space-y-12">
        <section className="max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#4A6CF7]">About</p>
          <h1 className="text-[clamp(2.25rem,5vw,4rem)] font-semibold text-[#1A2233]">
            SEO Expert in Amsterdam helping Netherlands businesses dominate Google.
          </h1>
          <p className="text-lg leading-8 text-[#5A6A7A]">
            I am Sudip Chaudhary, a specialized SEO expert based in Amsterdam, Netherlands. With 3+ years of hands-on experience, I focus on delivering measurable SEO results for Dutch businesses—from technical optimization and keyword strategy to content architecture and link building. My work centers on combining data-driven SEO practices with a deep understanding of the Dutch digital market.
          </p>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-card rounded-[1.75rem] p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1A2233]">Experience timeline</h2>
            <div className="mt-6 space-y-5">
              {timeline.map((item) => (
                <article key={item.year} className="rounded-2xl border border-[#dbe8f3] bg-white/70 p-5">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4A6CF7]">{item.year}</div>
                  <h3 className="mt-2 text-xl font-semibold text-[#1A2233]">{item.title}</h3>
                  <p className="mt-2 leading-7 text-[#5A6A7A]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-[1.75rem] p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#1A2233]">Core skills</h2>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skills.map((skill) => (
                <div key={skill} className="rounded-2xl border border-[#dbe8f3] bg-white px-4 py-3 text-center text-sm font-semibold text-[#2E3A4E]">
                  {skill}
                </div>
              ))}
            </div>
            <p className="mt-6 leading-7 text-[#5A6A7A]">
              I like projects where the strategy is practical and the execution is visible: better search rankings,
              better user journeys, and better long-term content systems.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-[linear-gradient(135deg,#1A2233_0%,#2E3A4E_100%)] p-8 text-white shadow-2xl md:p-10">
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-semibold">Need help with SEO or Flutter?</h2>
          <p className="mt-4 max-w-2xl text-white/80">
            If you want a search-led portfolio, a mobile app, or a content strategy that brings in better leads,
            I can help shape the next move.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-[#00D4C8] px-6 py-3 text-sm font-semibold text-[#1A2233]">
              Contact me
            </Link>
            <Link href="/portfolio" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white">
              View portfolio
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}