import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";

export function generateMetadata(): Metadata {
  return {
    title: "Local SEO Kathmandu guide — Google Business Profile Nepal",
    description: "Local SEO Kathmandu guide: optimize Google Business Profile, citations, and local content to rank in Kathmandu and Nepal.",
    alternates: { canonical: `${SITE_CONFIG.url}/blog/local-seo-kathmandu-google-business` },
  };
}

export default function LocalSEOKathmandu() {
  return (
    <main className="bg-white py-16">
      <div className="container max-w-3xl">
        <h1 className="text-2xl font-semibold">Local SEO Kathmandu guide</h1>
        <p className="mt-4 text-slate-700">Step-by-step Google Business Profile optimisation and local citation strategy for Kathmandu businesses.</p>
      </div>
    </main>
  );
}
