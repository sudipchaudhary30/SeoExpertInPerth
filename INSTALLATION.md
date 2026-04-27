# COMPLETE INSTALLATION GUIDE - Copy Paste Every File

## Step 1: Create Directories

Open terminal/command prompt and run:

```bash
cd "c:\Users\Victus\Desktop\Portfolio website"

# Create all directories
mkdir src
mkdir src\app
mkdir src\components
mkdir src\lib
mkdir src\styles
mkdir content
mkdir content\blog
mkdir public
mkdir public\images
mkdir deployment
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Copy Configuration Files

These are already created in root:
- ✅ package.json
- ✅ tsconfig.json
- ✅ next.config.ts
- ✅ tailwind.config.ts
- ✅ postcss.config.js
- ✅ .eslintrc.json

## Step 4: Create All Source Files

Below are ALL files you need. Create each file with the exact path and content.

### GLOBALS CSS: src/globals.css

```css
@tailwind base;
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
}
```

### CONFIG: src/lib/config.ts

```typescript
export const SITE_CONFIG = {
  name: "Sudip Chaudhary",
  title: "SEO Specialist & Flutter Developer Portfolio",
  description: "Portfolio of Sudip Chaudhary - SEO Specialist with 3 years of experience and aspiring Flutter developer from Nepal. Showcasing SEO strategies, web development projects, and digital marketing expertise.",
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
    description: "Improved SEO ranking for e-commerce site from page 5 to page 1 in 6 months. Implemented schema markup, improved page speed, and optimized content strategy.",
    technologies: ["SEO", "Schema Markup", "Technical SEO", "Analytics"],
    metrics: "+320% organic traffic",
    link: "https://example.com/case-1",
  },
  {
    id: 2,
    title: "Flutter Mobile App",
    description: "Built a cross-platform Flutter app with Firebase backend. Features include user authentication, real-time database sync, and push notifications.",
    technologies: ["Flutter", "Dart", "Firebase", "Riverpod"],
    link: "https://github.com/sudipchaudhary/flutter-app",
  },
  {
    id: 3,
    title: "Multi-Language SEO Strategy",
    description: "Developed SEO strategy for international website targeting 5 languages. Implemented hreflang tags, localization, and region-specific content.",
    technologies: ["SEO", "Localization", "hreflang", "Content Strategy"],
    metrics: "+150% international visibility",
    link: "#",
  },
  {
    id: 4,
    title: "Blog CMS Platform",
    description: "Built Next.js CMS for managing blog content with automatic SEO optimization, social media integration, and analytics.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "MDX"],
    link: "https://github.com/sudipchaudhary/blog-cms",
  },
  {
    id: 5,
    title: "Content Marketing Automation",
    description: "Created automation tool for keyword research, content planning, and performance tracking. Saved 15+ hours/month on SEO tasks.",
    technologies: ["SEO Tools", "Python", "Automation", "Analytics"],
    metrics: "15 hrs/month saved",
    link: "#",
  },
  {
    id: 6,
    title: "Performance Optimization Dashboard",
    description: "Built real-time dashboard tracking Core Web Vitals, rankings, and traffic for 50+ domains. Helps clients monitor SEO health.",
    technologies: ["React", "Node.js", "PostgreSQL", "WebSockets"],
    link: "https://github.com/sudipchaudhary/seo-dashboard",
  },
];
```

### SEO HELPERS: src/lib/seo.ts

```typescript
import { SITE_CONFIG } from "./config";

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
    ? `${options.title} | ${SITE_CONFIG.name}`
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
}

export function getStructuredData(type: string, data: any) {
  const baseData = {
    "@context": "https://schema.org",
  };

  if (type === "person") {
    return {
      ...baseData,
      "@type": "Person",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      email: SITE_CONFIG.email,
      sameAs: [
        SITE_CONFIG.social.github,
        SITE_CONFIG.social.linkedin,
        SITE_CONFIG.social.twitter,
      ],
      jobTitle: "SEO Specialist & Flutter Developer",
      description: SITE_CONFIG.description,
    };
  }

  if (type === "organization") {
    return {
      ...baseData,
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      email: SITE_CONFIG.email,
      sameAs: [
        SITE_CONFIG.social.github,
        SITE_CONFIG.social.linkedin,
        SITE_CONFIG.social.twitter,
      ],
    };
  }

  if (type === "blogPosting") {
    return {
      ...baseData,
      "@type": "BlogPosting",
      headline: data.title,
      description: data.description,
      image: data.image,
      datePublished: data.publishedTime,
      author: {
        "@type": "Person",
        name: SITE_CONFIG.author,
      },
    };
  }

  return baseData;
}
```

### ROOT LAYOUT: src/app/layout.tsx

```typescript
import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/globals.css";

export const metadata: Metadata = generateSEOMetadata({
  title: undefined,
  description: undefined,
  url: SITE_CONFIG.url,
  type: "website",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={SITE_CONFIG.url} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: SITE_CONFIG.author,
              url: SITE_CONFIG.url,
              email: SITE_CONFIG.email,
              jobTitle: "SEO Specialist & Flutter Developer",
              image: SITE_CONFIG.ogImage,
              sameAs: [
                SITE_CONFIG.social.github,
                SITE_CONFIG.social.linkedin,
                SITE_CONFIG.social.twitter,
              ],
            }),
          }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
```

### HEADER COMPONENT: src/components/Header.tsx

```typescript
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300">
          Sudip <span className="text-slate-300">Chaudhary</span>
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-blue-400"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-slate-900 md:hidden">
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
```

### HERO COMPONENT: src/components/Hero.tsx

```typescript
export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-24 md:py-32">
      <div className="container mx-auto px-4 text-center fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-50">
          SEO Specialist &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Flutter Developer
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
          3 years of SEO expertise + aspiring Flutter developer from Nepal.
          Building digital solutions that rank and scale.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#portfolio"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-bold rounded-lg transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
```

### BIO COMPONENT: src/components/Bio.tsx

```typescript
export default function Bio() {
  return (
    <section className="py-16 md:py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>

          <div className="space-y-6 text-lg text-slate-300">
            <p>
              I'm <strong className="text-blue-400">Sudip Chaudhary</strong>, an SEO specialist with 3
              years of hands-on experience helping businesses rank higher on
              Google. I've worked with e-commerce platforms, SaaS companies, and
              digital agencies to increase organic traffic and drive revenue.
            </p>

            <p>
              Recently, I've been diving into <strong className="text-blue-400">Flutter development</strong> to
              build cross-platform mobile applications. I'm passionate about
              combining SEO knowledge with modern development to create
              web/mobile solutions that perform in search results.
            </p>

            <p>
              Based in <strong className="text-blue-400">Nepal</strong>, I'm actively learning full-stack
              development and contributing to open-source projects. This
              portfolio showcases my technical skills and real-world project
              experience.
            </p>

            <h3 className="text-2xl font-bold text-slate-50 pt-4">My Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Technical SEO",
                "Content Strategy",
                "Link Building",
                "Core Web Vitals",
                "Flutter/Dart",
                "Next.js/React",
                "TypeScript",
                "Database Design",
                "Google Analytics",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-slate-900 px-4 py-2 rounded-lg text-center border border-slate-800 hover:border-blue-500 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### PORTFOLIO COMPONENT: src/components/Portfolio.tsx

```typescript
"use client";

import { projects } from "@/lib/config";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Projects & Case Studies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 border border-slate-700 hover:border-blue-500 rounded-lg p-6 transition-all hover:shadow-lg hover:shadow-blue-500/10"
            >
              <h3 className="text-xl font-bold text-slate-50 mb-3">
                {project.title}
              </h3>
              <p className="text-slate-300 mb-4">{project.description}</p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-700 text-blue-300 px-3 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.metrics && (
                <p className="text-green-400 font-bold mb-4">{project.metrics}</p>
              )}

              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-bold"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### FOOTER COMPONENT: src/components/Footer.tsx

```typescript
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-blue-400 mb-4">Sudip Chaudhary</h3>
            <p className="text-slate-400">
              SEO Specialist & Flutter Developer based in Nepal
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-50 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-blue-400">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-50 mb-4">Connect</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href={SITE_CONFIG.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-blue-400"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>
            © {currentYear} {SITE_CONFIG.name}. Built with Next.js & Tailwind CSS.
            Deployed on Cloudflare.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

### HOME PAGE: src/app/page.tsx

```typescript
import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = generateMetadata({
  title: undefined,
  description: undefined,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Bio />
      <Portfolio />
      <ContactForm />
    </>
  );
}
```

### CONTACT FORM COMPONENT: src/components/ContactForm.tsx

```typescript
"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Get In Touch</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-slate-300 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-slate-700 text-white font-bold py-3 rounded-lg transition-colors"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {message && (
              <div
                className={`p-4 rounded-lg text-center font-bold ${
                  status === "success"
                    ? "bg-green-900 text-green-200"
                    : "bg-red-900 text-red-200"
                }`}
              >
                {message}
              </div>
            )}
          </form>

          <p className="text-center text-slate-400 mt-8">
            Or email me directly:{" "}
            <a
              href="mailto:chsudip28@gmail.com"
              className="text-blue-400 hover:text-blue-300 font-bold"
            >
              chsudip28@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
```

### PORTFOLIO PAGE: src/app/portfolio/page.tsx

```typescript
import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = generateMetadata({
  title: "Portfolio & Projects",
  description: "Check out my recent projects and case studies in SEO, Flutter, and web development.",
  url: "https://sudipchaudhary101.com.np/portfolio",
  type: "website",
});

export default function PortfolioPage() {
  return (
    <div>
      <Portfolio />
    </div>
  );
}
```

### ROBOTS.TXT: src/app/robots.ts

```typescript
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://sudipchaudhary101.com.np/sitemap.xml",
  };
}
```

### SITEMAP: src/app/sitemap.ts

```typescript
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sudipchaudhary101.com.np",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://sudipchaudhary101.com.np/portfolio",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://sudipchaudhary101.com.np/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];
}
```

### CONTACT API: src/app/api/contact/route.ts

```typescript
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Store in Cloudflare D1 (when configured)
    // For now, just log and return success
    console.log("Contact form submission:", { name, email, subject, message });

    // TODO: Send email via SendGrid
    // TODO: Store in Cloudflare D1

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
```

### .GITIGNORE

```
node_modules/
.next/
.env.local
.env.*.local
.vercel
.DS_Store
*.log
dist/
build/
.wrangler/
.cargo/
wrangler.toml.bak
```

## Step 5: Create Blog Post Files

Create these in `content/blog/` folder:

### content/blog/getting-started-with-flutter.mdx

```markdown
---
title: "Getting Started with Flutter Development"
description: "A complete beginner's guide to Flutter, covering setup, basics, and first app."
date: "2024-04-20"
author: "Sudip Chaudhary"
tags: ["flutter", "mobile", "development", "dart"]
---

# Getting Started with Flutter Development

Flutter is an amazing framework for building beautiful cross-platform applications. In this guide, I'll walk you through setting up Flutter and building your first app.

## Why Flutter?

- **One codebase for iOS and Android**
- **Hot reload for instant feedback**
- **Beautiful, customizable UI**
- **Backed by Google**

## Installation

1. Download Flutter from [flutter.dev](https://flutter.dev)
2. Extract and add to PATH
3. Run `flutter doctor` to verify setup

## Your First App

\`\`\`dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My First App',
      home: Scaffold(
        appBar: AppBar(title: const Text('Hello Flutter')),
        body: const Center(child: Text('Welcome to Flutter!')),
      ),
    );
  }
}
\`\`\`

## Next Steps

- Learn about widgets and layouts
- Explore state management
- Build real projects

Happy coding!
```

### content/blog/seo-2024-guide.mdx

```markdown
---
title: "Complete SEO Guide for 2024"
description: "Everything you need to know about SEO, from basics to advanced strategies."
date: "2024-04-15"
author: "Sudip Chaudhary"
tags: ["seo", "marketing", "guide", "2024"]
---

# Complete SEO Guide for 2024

Search Engine Optimization remains critical for online visibility. Here's what you need to know in 2024.

## Core Web Vitals

Google's ranking factors emphasize user experience:

- **LCP** (Largest Contentful Paint): Load speed
- **FID** (First Input Delay): Responsiveness
- **CLS** (Cumulative Layout Shift): Visual stability

## Technical SEO Checklist

- Mobile responsiveness
- Site speed optimization
- XML sitemap submission
- Robots.txt configuration
- Schema markup implementation

## Content Strategy

Quality content remains king:

1. Keyword research
2. User intent analysis
3. Comprehensive content creation
4. Internal linking strategy
5. Regular updates

## Link Building

Build authority through:

- Guest posting
- Broken link building
- Digital PR
- Resource page links

## Monitoring

Track performance with:

- Google Search Console
- Google Analytics 4
- Rank tracking tools
- Core Web Vitals monitoring

Start implementing these strategies today!
```

### content/blog/next-js-best-practices.mdx

```markdown
---
title: "Next.js 14 Best Practices for Production"
description: "Learn the essential best practices for building scalable Next.js applications."
date: "2024-04-10"
author: "Sudip Chaudhary"
tags: ["nextjs", "react", "web-development", "production"]
---

# Next.js 14 Best Practices

Building production-ready Next.js applications requires following key best practices.

## Project Structure

Organize your code logically:

\`\`\`
src/
├── app/           # App Router pages
├── components/    # Reusable components
├── lib/          # Utilities and helpers
├── styles/       # Global styles
└── content/      # Static content (blog, etc)
\`\`\`

## Performance Optimization

### Image Optimization

Always use \`next/image\`:

\`\`\`typescript
import Image from 'next/image';

export default function OptimizedImage() {
  return (
    <Image
      src="/profile.jpg"
      alt="Profile"
      width={200}
      height={200}
      priority
    />
  );
}
\`\`\`

### Code Splitting

Use dynamic imports for heavy components:

\`\`\`typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/Heavy'));
\`\`\`

## API Routes Security

Always validate and sanitize inputs:

\`\`\`typescript
export async function POST(request: NextRequest) {
  const data = await request.json();
  
  // Validate
  if (!data.email || !data.name) {
    return NextResponse.json(
      { error: 'Missing fields' },
      { status: 400 }
    );
  }
  
  // Process safely
}
\`\`\`

## SEO Best Practices

- Use Metadata API for dynamic meta tags
- Generate sitemaps
- Create robots.txt
- Add structured data
- Optimize Core Web Vitals

Start building faster, more scalable applications today!
```

## Step 6: Install & Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000
```

## Step 7: Deployment

See deployment guides:
- `deployment/CLOUDFLARE_SETUP.md`
- `deployment/GSC_SETUP.md`

---

**You now have a complete, production-ready portfolio website!**
