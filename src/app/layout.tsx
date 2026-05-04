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
  keywords: SITE_CONFIG.keywords.join(", "),
  robots: "index, follow",
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
  metadataBase: new URL(SITE_CONFIG.url),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* CookieYes Consent Banner */}
        <Script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/a2f76f24b688035cea390509/script.js" strategy="beforeInteractive" />
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-98423RYNSR" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive" dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-98423RYNSR');
        `}} />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#4A6CF7" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": SITE_CONFIG.author,
          "url": SITE_CONFIG.url,
          "email": SITE_CONFIG.email,
          "jobTitle": "SEO Expert & Digital Strategist",
          "areaServed": "NL",
          "knowsAbout": ["Search Engine Optimization", "Technical SEO", "Content Strategy", "Local SEO", "Digital Marketing"],
          "worksFor": {
            "@type": "Organization",
            "name": SITE_CONFIG.author,
            "url": SITE_CONFIG.url,
            "location": {
              "@type": "Place",
              "name": SITE_CONFIG.location,
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "NL",
                "addressRegion": "North Holland"
              }
            }
          },
          "sameAs": Object.values(SITE_CONFIG.social)
        })}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": SITE_CONFIG.author,
          "description": "SEO Expert and Digital Strategy Specialist in Amsterdam, Netherlands",
          "url": SITE_CONFIG.url,
          "email": SITE_CONFIG.email,
          "areaServed": "NL",
          "serviceType": ["SEO Services", "Content Strategy", "Technical SEO", "Local SEO"],
          "location": {
            "@type": "Place",
            "name": "Amsterdam",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "NL",
              "addressRegion": "North Holland"
            }
          },
          "priceRange": "$$"
        })}} />
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