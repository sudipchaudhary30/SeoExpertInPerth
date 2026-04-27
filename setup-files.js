#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const basePath = process.cwd();

// Define all files to create
const files = {
  'src/styles/globals.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  @apply transition-colors duration-200;
}

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-slate-950 text-slate-100;
}

a {
  @apply text-blue-400 hover:text-blue-300 underline;
}

h1 {
  @apply text-4xl font-bold;
}

h2 {
  @apply text-3xl font-bold;
}

h3 {
  @apply text-2xl font-bold;
}

code {
  @apply bg-slate-900 px-2 py-1 rounded text-sm font-mono text-amber-300;
}

pre {
  @apply bg-slate-900 p-4 rounded overflow-x-auto;
}

.container {
  @apply max-w-6xl mx-auto px-4;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}`,

  'src/lib/config.ts': `export const SITE_CONFIG = {
  name: "Sudip Chaudhary",
  title: "SEO Specialist & Flutter Developer Portfolio",
  description: "Portfolio of Sudip Chaudhary - SEO Specialist with 3 years of experience and aspiring Flutter developer from Nepal.",
  url: "https://sudipchaudhary101.com.np",
  ogImage: "https://sudipchaudhary101.com.np/og-image.png",
  email: "chsudip28@gmail.com",
  social: {
    github: "https://github.com/sudipchaudhary",
    linkedin: "https://linkedin.com/in/sudipchaudhary",
    twitter: "https://twitter.com/sudipchaudhary",
  },
  author: "Sudip Chaudhary",
  locale: "en_US",
} as const;

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform Optimization",
    description: "Improved SEO ranking from page 5 to page 1 in 6 months.",
    technologies: ["SEO", "Schema Markup", "Technical SEO", "Analytics"],
    metrics: "+320% organic traffic",
    link: "#",
  },
  {
    id: 2,
    title: "Flutter Mobile App",
    description: "Built cross-platform Flutter app with Firebase backend.",
    technologies: ["Flutter", "Dart", "Firebase", "Riverpod"],
    link: "#",
  },
  {
    id: 3,
    title: "Multi-Language SEO Strategy",
    description: "Developed SEO strategy for international website targeting 5 languages.",
    technologies: ["SEO", "Localization", "hreflang"],
    metrics: "+150% visibility",
    link: "#",
  },
  {
    id: 4,
    title: "Blog CMS Platform",
    description: "Built Next.js CMS for managing blog content.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "MDX"],
    link: "#",
  },
  {
    id: 5,
    title: "Content Marketing Automation",
    description: "Created automation tool for keyword research.",
    technologies: ["SEO Tools", "Python", "Automation"],
    metrics: "15 hrs/month saved",
    link: "#",
  },
  {
    id: 6,
    title: "Performance Dashboard",
    description: "Built real-time dashboard tracking metrics for 50+ domains.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    link: "#",
  },
];`,

  'src/lib/seo.ts': `import { SITE_CONFIG } from "./config";

export function generateMetadata(options: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
}) {
  const title = options.title
    ? \`\${options.title} | \${SITE_CONFIG.name}\`
    : SITE_CONFIG.title;
  const description = options.description || SITE_CONFIG.description;
  const image = options.image || SITE_CONFIG.ogImage;
  const url = options.url || SITE_CONFIG.url;

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title,
    description,
    keywords: [
      "SEO",
      "Flutter",
      "Web Development",
      "Digital Marketing",
      "Nepal",
    ],
    authors: [{ name: SITE_CONFIG.author }],
    creator: SITE_CONFIG.author,
    openGraph: {
      type: options.type || "website",
      locale: SITE_CONFIG.locale,
      url,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      siteName: SITE_CONFIG.name,
      ...(options.publishedTime && {
        publishedTime: options.publishedTime,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: SITE_CONFIG.social.twitter,
    },
  };
}`,

  'src/components/Header.tsx': `"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          Sudip <span className="text-slate-300">Chaudhary</span>
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="hidden md:flex gap-8">
          {[["Home", "/"], ["Portfolio", "/portfolio"], ["Blog", "/blog"], ["Contact", "#contact"]].map(([label, href]) => (
            <Link key={href} href={href} className="text-slate-300 hover:text-blue-400 font-medium">
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}`,

  'src/components/Hero.tsx': `export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-24 md:py-32">
      <div className="container mx-auto px-4 text-center fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-50">
          SEO Specialist & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Flutter Developer</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
          3 years of SEO expertise + aspiring Flutter developer from Nepal. Building digital solutions that rank and scale.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#portfolio" className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg">View My Work</a>
          <a href="#contact" className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-bold rounded-lg">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}`,

  'src/components/Bio.tsx': `export default function Bio() {
  return (
    <section className="py-16 md:py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
        <div className="space-y-6 text-lg text-slate-300 max-w-3xl">
          <p>I'm <strong className="text-blue-400">Sudip Chaudhary</strong>, an SEO specialist with 3 years of hands-on experience helping businesses rank higher on Google.</p>
          <p>Recently, I've been diving into <strong className="text-blue-400">Flutter development</strong> to build cross-platform mobile applications.</p>
          <p>Based in <strong className="text-blue-400">Nepal</strong>, I'm actively learning full-stack development and contributing to open-source projects.</p>
          <h3 className="text-2xl font-bold text-slate-50 pt-4">My Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Technical SEO", "Content Strategy", "Link Building", "Core Web Vitals", "Flutter/Dart", "Next.js/React", "TypeScript", "Database Design", "Google Analytics"].map((skill) => (
              <div key={skill} className="bg-slate-900 px-4 py-2 rounded-lg text-center border border-slate-800">{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}`,

  'src/components/Portfolio.tsx': `"use client";
import { projects } from "@/lib/config";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Projects & Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-slate-800 border border-slate-700 hover:border-blue-500 rounded-lg p-6 transition-all">
              <h3 className="text-xl font-bold text-slate-50 mb-3">{project.title}</h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-slate-700 text-blue-300 px-3 py-1 rounded text-sm">{tech}</span>
                ))}
              </div>
              {project.metrics && <p className="text-green-400 font-bold mb-4">{project.metrics}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  'src/components/ContactForm.tsx': `"use client";
import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      if (response.ok) {
        setStatus("success");
        setMsg("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch {
      setStatus("error");
      setMsg("Error sending message");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-950">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="text" name="name" placeholder="Name" onChange={(e) => setFormData({...formData, name: e.target.value})} required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100" />
          <input type="email" name="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100" />
          <input type="text" name="subject" placeholder="Subject" onChange={(e) => setFormData({...formData, subject: e.target.value})} required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100" />
          <textarea name="message" placeholder="Message" rows={6} onChange={(e) => setFormData({...formData, message: e.target.value})} required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100" />
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg">{status === "loading" ? "Sending..." : "Send Message"}</button>
          {msg && <div className={status === "success" ? "bg-green-900 text-green-200 p-4 rounded-lg text-center" : "bg-red-900 text-red-200 p-4 rounded-lg text-center"}>{msg}</div>}
        </form>
      </div>
    </section>
  );
}`,

  'src/components/Footer.tsx': `import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-blue-400 mb-4">Sudip Chaudhary</h3>
            <p className="text-slate-400">SEO Specialist & Flutter Developer</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-50 mb-4">Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link href="/portfolio" className="hover:text-blue-400">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-50 mb-4">Connect</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="https://github.com/sudipchaudhary" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a></li>
              <li><a href="mailto:chsudip28@gmail.com" className="hover:text-blue-400">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>© 2024 Sudip Chaudhary. Built with Next.js & Tailwind CSS. Deployed on Cloudflare.</p>
        </div>
      </div>
    </footer>
  );
}`,

  'src/app/layout.tsx': `import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
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
      <body className="bg-slate-950 text-slate-100">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}`,

  'src/app/page.tsx': `import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return <>
    <Hero />
    <Bio />
    <Portfolio />
    <ContactForm />
  </>;
}`,

  'src/app/robots.ts': `import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://sudipchaudhary101.com.np/sitemap.xml",
  };
}`,

  'src/app/sitemap.ts': `import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://sudipchaudhary101.com.np", lastModified: new Date(), priority: 1 },
    { url: "https://sudipchaudhary101.com.np/portfolio", lastModified: new Date(), priority: 0.9 },
    { url: "https://sudipchaudhary101.com.np/blog", lastModified: new Date(), priority: 0.8 },
  ];
}`,

  'src/app/portfolio/page.tsx': `import Portfolio from "@/components/Portfolio";
export default function PortfolioPage() { return <Portfolio />; }`,

  'src/app/blog/page.tsx': `export default function Blog() {
  return (
    <div className="py-16 md:py-24 bg-slate-950">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-slate-300 mb-12">Articles on SEO, Flutter, and web development coming soon!</p>
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <p className="text-slate-300">Check back soon for latest articles on SEO strategies, Flutter development tips, and web technologies.</p>
        </div>
      </div>
    </div>
  );
}`,

  'src/app/api/contact/route.ts': `import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    console.log("Contact:", { name, email, subject, message });
    return NextResponse.json({ message: "Thank you! I'll get back to you soon." });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}`,

  '.gitignore': `node_modules/
.next/
.env.local
.vercel
dist/`,
};

// Create all files
Object.entries(files).forEach(([filePath, content]) => {
  const fullPath = path.join(basePath, filePath);
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`✅ Created: ${filePath}`);
});

console.log('\n✅ All source files created!\n');
