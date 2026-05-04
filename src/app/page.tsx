import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";
export function generateMetadata(): Metadata {
  return {
    title: "SEO Expert Amsterdam | Sudip Chaudhary | Netherlands SEO Specialist",
    description: "Sudip Chaudhary - Expert SEO specialist based in Amsterdam, Netherlands. Helping Dutch businesses rank higher on Google with technical SEO, content strategy, and proven results. 3+ years experience.",
    keywords: "SEO expert Amsterdam, SEO specialist Netherlands, technical SEO, content strategy, Google ranking",
    alternates: {
      canonical: SITE_CONFIG.url,
    },
    openGraph: {
      title: "SEO Expert Amsterdam | Sudip Chaudhary | Netherlands SEO Specialist",
      description: "Sudip Chaudhary - Expert SEO specialist based in Amsterdam, Netherlands. Helping Dutch businesses rank higher on Google with technical SEO, content strategy, and proven results.",
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: "website",
    },
  };
}
export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    jobTitle: "SEO Specialist & Flutter Developer",
    url: SITE_CONFIG.url,
    sameAs: Object.values(SITE_CONFIG.social),
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Hero />
      <Bio />
      <Portfolio />
      <ContactForm />
    </>
  );
}
