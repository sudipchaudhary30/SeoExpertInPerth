import type { Metadata } from "next";
import { useState } from "react";
import { SITE_CONFIG } from "@/lib/config";

export function generateMetadata(): Metadata {
  return {
    title: "Get Your Free Nepal SEO Audit in 24 Hours | " + SITE_CONFIG.name,
    description: "Submit your website and receive a free SEO audit for Nepal within 24 hours. Capture name, website URL, and phone number.",
    alternates: { canonical: `${SITE_CONFIG.url}/free-audit` },
  };
}

export default function FreeAuditPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="bg-white py-16">
      <div className="container max-w-2xl">
        <h1 className="text-3xl font-semibold">Get Your Free Nepal SEO Audit in 24 Hours</h1>
        <p className="mt-4 text-slate-700">Submit the form and our Nepal SEO expert will review your site and send a prioritized audit within 24 hours.</p>

        {!sent ? (
          <form className="mt-6 grid gap-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input name="name" placeholder="Name" required className="border px-4 py-2" />
            <input name="website" placeholder="Website URL" required className="border px-4 py-2" />
            <input name="phone" placeholder="Phone Number (WhatsApp preferred)" required className="border px-4 py-2" />
            <textarea name="notes" placeholder="Current problem (optional)" className="border px-4 py-2" />
            <button type="submit" className="bg-sky-700 px-5 py-3 text-white font-semibold">Request Free Audit</button>
          </form>
        ) : (
          <div className="mt-6 p-6 bg-sky-50 border">Thanks — we received your request and will reply within 24 hours. We may contact you on WhatsApp.</div>
        )}
      </div>
    </main>
  );
}
