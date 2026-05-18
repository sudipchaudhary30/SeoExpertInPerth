import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export function generateMetadata(): Metadata {
  return {
    title: "Technical SEO Nepal — Website Audits & Core Web Vitals | " + SITE_CONFIG.name,
    description: "Technical SEO Nepal: site audits, Core Web Vitals improvements, schema markup, and crawlability fixes for Nepali websites.",
    alternates: { canonical: `${SITE_CONFIG.url}/services/technical-seo` },
  };
}

export default function TechnicalSEOPage() {
  return (
    <main className="bg-white py-16">
      <div className="container">
        <h1 className="text-3xl font-semibold">Technical SEO Nepal</h1>
        <p className="mt-4 text-slate-700">Comprehensive technical SEO audits and fixes: LCP, CLS, mobile responsiveness, sitemap, robots, and schema for Nepal websites.</p>
        <div className="mt-6">
          <Link href="/free-audit" className="bg-sky-700 px-5 py-3 text-white font-semibold">Get Free SEO Audit</Link>
        </div>
      </div>
    </main>
  );
}
