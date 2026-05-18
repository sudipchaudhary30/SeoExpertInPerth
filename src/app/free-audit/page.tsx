import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";

export function generateMetadata(): Metadata {
  return {
    title: "Get Your Free Nepal SEO Audit in 24 Hours | " + SITE_CONFIG.name,
    description: "Submit your website and receive a free SEO audit for Nepal within 24 hours. Email your site and contact details to request the free audit.",
    alternates: { canonical: `${SITE_CONFIG.url}/free-audit` },
  };
}

export default function FreeAuditPage() {
  return (
    <main className="bg-white py-16">
      <div className="container max-w-2xl">
        <h1 className="text-3xl font-semibold">Get Your Free Nepal SEO Audit in 24 Hours</h1>
        <p className="mt-4 text-slate-700">Email your website and contact details and I&apos;ll send a prioritized audit within 24 hours.</p>

        <form action="mailto:chsudip28@gmail.com" method="get" encType="text/plain" className="mt-6 grid gap-4">
          <input name="Name" placeholder="Name" required className="border px-4 py-2" />
          <input name="Website" placeholder="Website URL" required className="border px-4 py-2" />
          <input name="Phone" placeholder="Phone Number (WhatsApp preferred)" required className="border px-4 py-2" />
          <textarea name="Notes" placeholder="Current problem (optional)" className="border px-4 py-2" />
          <button type="submit" className="bg-sky-700 px-5 py-3 text-white font-semibold">Request Free Audit</button>
        </form>
      </div>
    </main>
  );
}
