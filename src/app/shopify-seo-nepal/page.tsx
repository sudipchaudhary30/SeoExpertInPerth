import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export function generateMetadata(): Metadata {
  return {
    title: "Shopify SEO Nepal — Shopify & Shopify Plus SEO | " + SITE_CONFIG.name,
    description: "Shopify SEO Nepal: optimize Shopify stores for Nepali audiences, improve product visibility and organic sales.",
    alternates: { canonical: `${SITE_CONFIG.url}/shopify-seo-nepal` },
  };
}

export default function ShopifySEOPage() {
  return (
    <main className="bg-white py-16">
      <div className="container">
        <h1 className="text-3xl font-semibold">Shopify SEO Nepal</h1>
        <p className="mt-4 text-slate-700">Shopify and ecommerce SEO tailored to Nepal: product schema, collection optimization, and technical fixes to increase sales.</p>
        <div className="mt-6"><Link href="/free-audit" className="bg-sky-700 px-5 py-3 text-white font-semibold">Get Free SEO Audit</Link></div>
      </div>
    </main>
  );
}
