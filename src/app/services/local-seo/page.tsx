import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export function generateMetadata(): Metadata {
  return {
    title: "Local SEO Services Nepal — Rank in Kathmandu | " + SITE_CONFIG.name,
    description: "Local SEO services Nepal focused on Kathmandu and Pokhara. Improve local search visibility, Google Business Profile optimization, and local citations.",
    alternates: { canonical: `${SITE_CONFIG.url}/services/local-seo` },
  };
}

export default function LocalSEOPage() {
  return (
    <main className="bg-white py-16">
      <div className="container">
        <h1 className="text-3xl font-semibold">Local SEO Services Nepal</h1>
        <p className="mt-4 text-slate-700">Our local SEO services in Nepal help businesses rank in Kathmandu and nearby cities by optimizing Google Business Profile, local citations, and on-page signals.</p>
        <div className="mt-6">
          <Link href="/free-audit" className="bg-sky-700 px-5 py-3 text-white font-semibold">Get Free SEO Audit</Link>
        </div>
      </div>
    </main>
  );
}
