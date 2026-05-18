import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export function generateMetadata(): Metadata {
  return {
    title: "Ecommerce SEO Nepal — Rank Your Online Store | " + SITE_CONFIG.name,
    description: "Ecommerce SEO Nepal services: product SEO, category optimization, technical fixes, and CRO to increase organic sales for Nepali stores.",
    alternates: { canonical: `${SITE_CONFIG.url}/services/ecommerce-seo` },
  };
}

export default function EcommerceSEOPage() {
  return (
    <main className="bg-white py-16">
      <div className="container">
        <h1 className="text-3xl font-semibold">Ecommerce SEO Nepal</h1>
        <p className="mt-4 text-slate-700">We optimize Nepali ecommerce sites (including Shopify) to drive organic traffic and revenue: category pages, product schema, and site structure.
        </p>
        <div className="mt-6">
          <Link href="/free-audit" className="bg-sky-700 px-5 py-3 text-white font-semibold">Get Free SEO Audit</Link>
        </div>
      </div>
    </main>
  );
}
