import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { SITE_CONFIG } from "@/lib/config";

export function generateMetadata(): Metadata {
  return {
    title: "Contact Sudip Chaudhary",
    description: "Contact Sudip Chaudhary for SEO, Flutter, and portfolio work.",
    alternates: {
      canonical: `${SITE_CONFIG.url}/contact`,
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
            Let&apos;s build something search-friendly and polished.
          </h1>
          <p className="text-lg leading-8 text-[#5A6A7A]">
            Reach out if you need help with SEO, Flutter development, content planning, or a website refresh that
            is easier to trust and easier to find.
          </p>

          <div className="glass-card rounded-[1.75rem] p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#1A2233]">Direct contact</h2>
            <div className="mt-4 space-y-3 text-[#5A6A7A]">
              <p>Email: <a href="mailto:chsudip28@gmail.com">chsudip28@gmail.com</a></p>
              <p>Location: Kathmandu, Nepal</p>
              <p>
                LinkedIn: <a href="https://www.linkedin.com/in/sudip-chaudhary" target="_blank" rel="noreferrer">linkedin.com/in/sudip-chaudhary</a>
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