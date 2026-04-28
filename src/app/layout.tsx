import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans, Poppins } from "next/font/google";
import { SITE_CONFIG } from "@/lib/config";
import { AuthProvider } from "@/components/AuthProvider";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

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
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-98423RYNSR" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive" dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-98423RYNSR');
        `}} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Person","name":SITE_CONFIG.author,"url":SITE_CONFIG.url,"email":SITE_CONFIG.email,"jobTitle":"SEO Specialist & Flutter Developer"})}} />
      </head>
      <body className={`${poppins.variable} ${dmSans.variable} bg-[#f0f2f5] text-[#5A6A7A] antialiased`}>
        <AuthProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}