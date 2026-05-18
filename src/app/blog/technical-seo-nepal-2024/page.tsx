import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";

export function generateMetadata(): Metadata {
  return {
    title: "Technical SEO for Nepal businesses — 2024 guide",
    description: "Technical SEO checklist and guide for Nepal businesses: Core Web Vitals, schema, sitemaps, and mobile-first optimizations.",
    alternates: { canonical: `${SITE_CONFIG.url}/blog/technical-seo-nepal-2024` },
  };
}

export default function TechnicalSEONepal() {
  return (
    <main className="bg-white py-16">
      <div className="container max-w-3xl">
        <h1 className="text-2xl font-semibold">Technical SEO for Nepal businesses</h1>
        <p className="mt-4 text-slate-700">A concise technical SEO guide tailored for Nepal websites and mobile-heavy audiences.</p>
      </div>
    </main>
  );
}
