import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export function generateMetadata(): Metadata {
  return {
    title: "Real Estate SEO Nepal — Generate Developer Leads | " + SITE_CONFIG.name,
    description: "Real estate SEO Nepal focused on lead generation for developers, property listings visibility, and local search performance.",
    alternates: { canonical: `${SITE_CONFIG.url}/seo-for-real-estate-nepal` },
  };
}

export default function RealEstateSEOPage() {
  return (
    <main className="bg-white py-16">
      <div className="container">
        <h1 className="text-3xl font-semibold">Real Estate SEO Nepal</h1>
        <p className="mt-4 text-slate-700">Improve visibility for developers and agents in Nepal with SEO focused on property keywords and local intent searches.</p>
        <div className="mt-6"><Link href="/free-audit" className="bg-sky-700 px-5 py-3 text-white font-semibold">Get Free SEO Audit</Link></div>
      </div>
    </main>
  );
}
