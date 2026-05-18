import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export function generateMetadata(): Metadata {
  return {
    title: "SEO Company in Kathmandu — Local SEO Services Nepal | " + SITE_CONFIG.name,
    description: "Professional SEO company in Kathmandu offering local SEO services Nepal, technical SEO, ecommerce SEO, and content strategy to help Nepali businesses rank.",
    alternates: { canonical: `${SITE_CONFIG.url}/services` },
  };
}

export default function ServicesPage() {
  return (
    <main className="bg-white py-16">
      <div className="container">
        <h1 className="text-3xl font-semibold text-slate-900">SEO Company in Kathmandu — Local & Technical SEO Services Nepal</h1>
        <p className="mt-4 text-slate-700 max-w-2xl">We are an SEO company in Kathmandu providing local SEO services Nepal, ecommerce SEO, technical audits, and content SEO to help local businesses increase visibility on Google Nepal.</p>
        <div className="mt-6 flex gap-4">
          <Link href="/free-audit" className="bg-sky-700 px-5 py-3 text-white font-semibold">Get Free SEO Audit</Link>
          <Link href="/pricing" className="border px-5 py-3 font-semibold">View Pricing (NPR)</Link>
        </div>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          <Link href="/services/local-seo" className="border p-6">Local SEO — Improve Kathmandu rankings</Link>
          <Link href="/services/ecommerce-seo" className="border p-6">Ecommerce SEO — Rank your online store</Link>
          <Link href="/services/technical-seo" className="border p-6">Technical SEO — Website audits & fixes</Link>
          <Link href="/services/content-seo" className="border p-6">Content SEO — Content strategy & creation</Link>
        </section>
      </div>
    </main>
  );
}
