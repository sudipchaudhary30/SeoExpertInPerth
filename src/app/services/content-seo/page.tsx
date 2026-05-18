import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export function generateMetadata(): Metadata {
  return {
    title: "Content SEO Nepal — Content Strategy & Blog SEO | " + SITE_CONFIG.name,
    description: "Content SEO Nepal: content strategy, blog SEO, keyword research, and on-page optimization tailored for Nepal audiences.",
    alternates: { canonical: `${SITE_CONFIG.url}/services/content-seo` },
  };
}

export default function ContentSEOPage() {
  return (
    <main className="bg-white py-16">
      <div className="container">
        <h1 className="text-3xl font-semibold">Content SEO Nepal</h1>
        <p className="mt-4 text-slate-700">Strategy and content creation focused on high-intent keywords for Nepal businesses, including in-depth blogs and pillar pages to capture search traffic.</p>
        <div className="mt-6">
          <Link href="/free-audit" className="bg-sky-700 px-5 py-3 text-white font-semibold">Get Free SEO Audit</Link>
        </div>
      </div>
    </main>
  );
}
