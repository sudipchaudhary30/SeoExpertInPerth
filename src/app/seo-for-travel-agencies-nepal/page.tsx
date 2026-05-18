import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export function generateMetadata(): Metadata {
  return {
    title: "SEO for Travel Agencies in Nepal — Attract More Tourists | " + SITE_CONFIG.name,
    description: "SEO for travel agency Nepal: increase visibility, bookings, and enquiries for Nepali tour operators and agencies.",
    alternates: { canonical: `${SITE_CONFIG.url}/seo-for-travel-agencies-nepal` },
  };
}

export default function TravelSEOPage() {
  return (
    <main className="bg-white py-16">
      <div className="container">
        <h1 className="text-3xl font-semibold">SEO for Travel Agencies in Nepal</h1>
        <p className="mt-4 text-slate-700">SEO strategies to help travel agencies in Nepal attract tourists, rank for destination searches, and increase bookings.</p>
        <div className="mt-6"><Link href="/free-audit" className="bg-sky-700 px-5 py-3 text-white font-semibold">Get Free SEO Audit</Link></div>
      </div>
    </main>
  );
}
