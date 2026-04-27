import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: "%s | Sudip Chaudhary",
  },
  description: SITE_CONFIG.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Person","name":SITE_CONFIG.author,"url":SITE_CONFIG.url,"email":SITE_CONFIG.email,"jobTitle":"SEO Specialist & Flutter Developer"})}} />
      </head>
      <body className="bg-[#e6f1fb] text-slate-700">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}