import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";

export function generateMetadata(): Metadata {
  return {
    title: "Why hire an SEO expert in Kathmandu — Nepal SEO",
    description: "Reasons to hire an SEO expert in Kathmandu: local knowledge, Google Business Profile optimization, and Nepal market experience.",
    alternates: { canonical: `${SITE_CONFIG.url}/blog/seo-expert-kathmandu-nepal` },
  };
}

export default function SEOExpertKathmandu() {
  return (
    <main className="bg-white py-16">
      <div className="container max-w-3xl">
        <h1 className="text-2xl font-semibold">Why hire an SEO expert in Kathmandu</h1>
        <p className="mt-4 text-slate-700">Local expertise matters — an SEO expert in Kathmandu understands Nepal user intent, directories, and local link opportunities.</p>
      </div>
    </main>
  );
}
