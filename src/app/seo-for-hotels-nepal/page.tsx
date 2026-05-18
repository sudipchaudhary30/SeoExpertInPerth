import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export function generateMetadata(): Metadata {
  return {
    title: "SEO for Hotels Nepal — Get More Direct Bookings | " + SITE_CONFIG.name,
    description: "SEO for hotels Nepal to increase direct bookings, improve visibility on Google Nepal, and attract travellers to Kathmandu and Pokhara.",
    alternates: { canonical: `${SITE_CONFIG.url}/seo-for-hotels-nepal` },
  };
}

export default function HotelsSEOPage() {
  return (
    <main className="bg-white py-16">
      <div className="container">
        <h1 className="text-3xl font-semibold">SEO for Hotels Nepal</h1>
        <p className="mt-4 text-slate-700">Target travellers and increase direct bookings with hotel SEO focused on Nepal markets and Google searches originating in Nepal.</p>
        <div className="mt-6"><Link href="/free-audit" className="bg-sky-700 px-5 py-3 text-white font-semibold">Get Free SEO Audit</Link></div>
      </div>
    </main>
  );
}
