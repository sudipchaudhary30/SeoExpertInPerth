import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export function generateMetadata(): Metadata {
  return {
    title: "Affordable SEO Packages Nepal — Pricing (NPR) | " + SITE_CONFIG.name,
    description: "Affordable SEO packages in Nepal with transparent NPR pricing: Basic, Growth, and Enterprise plans designed for Nepali businesses.",
    alternates: { canonical: `${SITE_CONFIG.url}/pricing` },
  };
}

export default function PricingPage() {
  return (
    <main className="bg-white py-16">
      <div className="container">
        <h1 className="text-3xl font-semibold">Affordable SEO Packages Nepal</h1>
        <p className="mt-4 text-slate-700">Choose a plan priced in NPR designed for Nepali businesses. Compare the cost of our managed service versus doing SEO yourself.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="border p-6">
            <h3 className="text-xl font-semibold">Basic</h3>
            <p className="mt-2 font-bold">NPR 25,000 / month</p>
            <ul className="mt-3 text-sm text-slate-700">
              <li>Monthly audit</li>
              <li>Local SEO optimizations</li>
              <li>5 keywords</li>
            </ul>
          </div>
          <div className="border p-6">
            <h3 className="text-xl font-semibold">Growth</h3>
            <p className="mt-2 font-bold">NPR 45,000 / month</p>
            <ul className="mt-3 text-sm text-slate-700">
              <li>Technical fixes</li>
              <li>Content & blog support</li>
              <li>15 keywords</li>
            </ul>
          </div>
          <div className="border p-6">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="mt-2 font-bold">NPR 120,000 / month</p>
            <ul className="mt-3 text-sm text-slate-700">
              <li>Full SEO program</li>
              <li>Dedicated strategist</li>
              <li>Custom reporting</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold">DIY Comparison</h2>
          <p className="mt-2 text-slate-700">Our packages include strategy, implementation, and reporting — compare this with the time and tools cost of doing SEO yourself.</p>
        </div>

        <div className="mt-6">
          <Link href="/free-audit" className="bg-sky-700 px-5 py-3 text-white font-semibold">Get Free SEO Audit</Link>
        </div>
      </div>
    </main>
  );
}
