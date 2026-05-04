import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { SITE_CONFIG } from "@/lib/config";

export function generateMetadata(): Metadata {
  return {
    title: "Contact SEO Expert Amsterdam | Sudip Chaudhary",
    description: "Get in touch with Sudip Chaudhary, SEO expert in Amsterdam. Free consultation for Netherlands businesses looking to improve their search visibility and rankings.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/contact`,
    },
    openGraph: {
      title: "Contact SEO Expert Amsterdam | Sudip Chaudhary",
      description: "Schedule a free SEO consultation. Sudip Chaudhary helps Netherlands businesses rank higher on Google.",
      url: `${SITE_CONFIG.url}/contact`,
    },
  };
}

export default function ContactPage() {
  return (
    <main className="bg-[#f0f2f5] py-16 md:py-24">
      <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <section className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#4A6CF7]">Contact</p>
          <h1 className="text-[clamp(2.25rem,5vw,4rem)] font-semibold text-[#1A2233]">
            Let&apos;s improve your search visibility.
          </h1>
          <p className="text-lg leading-8 text-[#5A6A7A]">
            Whether you need SEO strategy, technical optimization, content planning, or a complete digital refresh—I'm here to help Netherlands businesses rank higher on Google and reach more customers.
          </p>

          <div className="glass-card rounded-[1.75rem] p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#1A2233]">Direct contact</h2>
            <div className="mt-4 space-y-3 text-[#5A6A7A]">
              <p>Email: <a href="mailto:chsudip28@gmail.com" className="text-sky-600 hover:underline">chsudip28@gmail.com</a></p>
              <p>Location: <strong>Amsterdam, Netherlands</strong></p>
              <p>
                LinkedIn: <a href="https://www.linkedin.com/in/sudip-chaudhary" target="_blank" rel="noreferrer" className="text-sky-600 hover:underline">linkedin.com/in/sudip-chaudhary</a>
              </p>
              <p className="pt-4 border-t border-[#dbe8f3]">
                <strong>Free 30-minute consultation available</strong> to discuss your SEO goals and website improvement opportunities.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-4 shadow-xl md:p-6">
          <ContactForm />
        </section>
      </div>
    </main>
  );
}