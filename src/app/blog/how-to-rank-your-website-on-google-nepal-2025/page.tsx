import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export function generateMetadata(): Metadata {
  return {
    title: "How to rank website on Google Nepal — Step-by-step 2025 | " + SITE_CONFIG.name,
    description: "A practical, step-by-step guide to how to rank website on Google Nepal in 2025. Actionable checklist, technical fixes, local SEO, and content strategy for Kathmandu and Nepal businesses.",
    alternates: { canonical: `${SITE_CONFIG.url}/blog/how-to-rank-your-website-on-google-nepal-2025` },
  };
}

export default function HowToRankNepal() {
  return (
    <main className="bg-white py-16">
      <div className="container max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Blog</p>
        <h1 className="text-[clamp(1.8rem,4vw,2.5rem)] font-semibold text-slate-900">How to rank website on Google Nepal in 2025 (Step-by-Step)</h1>

        <p className="mt-4 text-lg text-slate-700">This guide explains exactly <strong>how to rank website on Google Nepal</strong> with a practical checklist you can apply today. It covers technical fixes, local SEO for Kathmandu and Pokhara, content strategy, and link building tailored to Nepal markets.</p>

        <h2 className="mt-6 text-xl font-semibold">Quick checklist — What to do first</h2>
        <ul className="mt-3 list-disc pl-5 text-slate-700">
          <li>Install HTTPS, submit sitemap to Google Search Console, set target country to Nepal.</li>
          <li>Optimize Google Business Profile for Kathmandu (if local), add service areas and photos.</li>
          <li>Run a technical audit: fix LCP, CLS, mobile responsiveness, and canonical tags.</li>
          <li>Create a content plan that targets Nepal-specific queries and user intent.</li>
          <li>Start local citation and directory submissions with Nepal-focused sites.</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">Understand user intent in Nepal</h2>
        <p className="mt-3 text-slate-700">Before you optimize, ask: are searchers in Nepal looking for services, local businesses, how-to answers, or products? Queries from Kathmandu often include location modifiers (&quot;near me&quot;, &quot;Kathmandu&quot;, &quot;Nepal&quot;). Match content to that intent — transactional pages for service keywords and long-form guides for informational queries.</p>

        <h2 className="mt-6 text-xl font-semibold">Technical SEO essentials</h2>
        <p className="mt-3 text-slate-700">Technical issues block rankings. Use the following prioritized fixes:</p>
        <h3 className="mt-4 font-semibold">1. HTTPS & site accessibility</h3>
        <p className="mt-2 text-slate-700">Ensure TLS is installed and all pages serve over HTTPS. Update internal links and sitemap to HTTPS. Then verify the site in Google Search Console and submit your sitemap.</p>

        <h3 className="mt-4 font-semibold">2. Core Web Vitals</h3>
        <p className="mt-2 text-slate-700">Aim for LCP under 2.5s, CLS under 0.1, and FID/INP improvements. Compress images, use WebP, lazy-load below-the-fold images, and serve critical CSS inline. For Nepal audiences on slower mobile networks, prioritize mobile LCP improvements.</p>

        <h3 className="mt-4 font-semibold">3. Mobile-first and responsive</h3>
        <p className="mt-2 text-slate-700">Most Nepali users access sites on Android devices. Test on common Android screen sizes and ensure font sizes, tap targets, and viewport settings are correct.</p>

        <h2 className="mt-6 text-xl font-semibold">Local SEO for Kathmandu and other Nepal cities</h2>
        <p className="mt-3 text-slate-700">If your business serves local customers, optimize for Google Business Profile and local citations:</p>
        <ul className="mt-3 list-disc pl-5 text-slate-700">
          <li>Use a consistent NAP (Name, Address, Phone) across all listings.</li>
          <li>Add service categories, clear descriptions, and 10+ photos showing the business.</li>
          <li>Collect reviews — ask satisfied clients via WhatsApp and respond within 24 hours.</li>
          <li>Set service areas to include Kathmandu, Lalitpur, Bhaktapur, and Pokhara where relevant.</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">Keyword strategy for Google Nepal</h2>
        <p className="mt-3 text-slate-700">Start with a seed list and expand using Google Suggest, People Also Ask, and local modifiers (&quot;Kathmandu&quot;, &quot;Nepal&quot;). Prioritize high-intent commercial keywords for service pages and informational keywords for blog posts. Keep keyword density natural (1–1.5%).</p>

        <h3 className="mt-4 font-semibold">Content mapping</h3>
        <p className="mt-2 text-slate-700">Create dedicated pages for high-priority keywords (e.g., "SEO services in Nepal") and clusters of blog posts that support those pillars. Each service page should be 1,200–1,800 words and include FAQs and local context.</p>

        <h2 className="mt-6 text-xl font-semibold">On-page optimization checklist</h2>
        <ul className="mt-3 list-disc pl-5 text-slate-700">
          <li>Title tag (50–60 chars) containing primary keyword and location when relevant.</li>
          <li>Meta description (150–160 chars) with clear CTA and target keyword.</li>
          <li>H1 includes the exact keyword. H2s use variations and LSI terms.</li>
          <li>Schema: Service, LocalBusiness, FAQ where appropriate.</li>
          <li>Image alt text with natural keyword variations and location where relevant.</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">Content creation: exact recipe</h2>
        <p className="mt-3 text-slate-700">For each blog post, follow this structure:</p>
        <ol className="mt-3 list-decimal pl-5 text-slate-700">
          <li>Compelling intro that mentions the primary keyword within the first 100 words.</li>
          <li>Clear H2 roadmap that mirrors user questions.</li>
          <li>Data-driven sections, examples, and screenshots where possible (use local examples from Kathmandu or Pokhara).</li>
          <li>At least 1,500–2,500 words for cornerstone guides; include internal links to service pages.</li>
          <li>FAQ with 5+ questions targeting featured snippet opportunities.</li>
        </ol>

        <h2 className="mt-6 text-xl font-semibold">Link building tactics tailored to Nepal</h2>
        <p className="mt-3 text-slate-700">Start locally: submit to Nepal business directories (biznepal.com, yellowpages.com.np), create LinkedIn and Facebook company profiles, and reach out to Nepal blogs for guest posts. Build 4–6 quality backlinks per month, prioritizing .np domains and local news sites when possible.</p>

        <h2 className="mt-6 text-xl font-semibold">Measuring results and KPIs</h2>
        <p className="mt-3 text-slate-700">Track the following weekly and monthly:</p>
        <ul className="mt-3 list-disc pl-5 text-slate-700">
          <li>Impressions, clicks, and average position in Google Search Console (set country to Nepal).</li>
          <li>Organic sessions and goal conversions in GA4.</li>
          <li>Local signals: calls, direction requests, and reviews from Google Business Profile.</li>
        </ul>

        <h2 className="mt-6 text-xl font-semibold">Common pitfalls and how to avoid them</h2>
        <p className="mt-3 text-slate-700">Avoid thin content, duplicate titles/descriptions, and low-quality paid link schemes. Focus on local relevance, useful content, and measurable technical improvements.</p>

        <h2 className="mt-6 text-xl font-semibold">Case example: small Kathmandu business</h2>
        <p className="mt-3 text-slate-700">A small guesthouse in Thamel, Kathmandu improved direct bookings by optimizing their Google Business Profile, adding schema for Hotel, improving page speed for mobile, and publishing 8 location-specific blog posts highlighting nearby attractions. Within 3 months they saw a 40% increase in organic bookings.</p>

        <h2 className="mt-6 text-xl font-semibold">Implementation timeline (90 days)</h2>
        <p className="mt-3 text-slate-700">Week 1–2: Technical fixes, GSC & GA4 setup, GBP optimization. Week 3–6: Publish 4 cornerstone blog posts and service pages. Week 7–12: Outreach for local links, collect reviews, and refine CRO.</p>

        <h2 className="mt-6 text-xl font-semibold">FAQ</h2>
        <div className="mt-3 text-slate-700">
          <h3 className="mt-4 font-semibold">1. How long does it take to rank on Google Nepal?</h3>
          <p className="mt-2">Ranking time depends on competition, site authority, and effort. Expect initial improvements in 2–3 months and stronger gains by 6–12 months with consistent work.</p>

          <h3 className="mt-4 font-semibold">2. Do I need a Kathmandu address to rank locally?</h3>
          <p className="mt-2">A local address helps for local-pack rankings, but service-area businesses can rank by optimizing their GBP, citations, and local content.</p>

          <h3 className="mt-4 font-semibold">3. Which keywords should Nepal businesses target first?</h3>
          <p className="mt-2">Start with high-intent service keywords that include &quot;Nepal&quot; or city modifiers (Kathmandu, Pokhara) and build supporting blog content for informational queries.</p>

          <h3 className="mt-4 font-semibold">4. Should I focus on .np domains?</h3>
          <p className="mt-2">.np domains can help local trust signals, but quality content and local signals (GBP, citations) matter most. If you already have a good domain, focus on optimizing it.</p>

          <h3 className="mt-4 font-semibold">5. How many reviews do I need on Google Business Profile?</h3>
          <p className="mt-2">Aim for 20+ genuine reviews to build momentum; respond to each review and encourage reviewers to mention service specifics and location.</p>
        </div>

        <h2 className="mt-6 text-xl font-semibold">Local mentions (Kathmandu, Pokhara, Nepal)</h2>
        <p className="mt-3 text-slate-700">When creating content, reference local landmarks, events, and cities such as Kathmandu Durbar Square, Pokhara lakeside, and other Nepal-specific locations to show local relevance to Google Nepal.</p>

        <p className="mt-6 text-slate-700">This guide gives you the roadmap for <strong>how to rank website on Google Nepal</strong>. If you want a prioritized, site-specific plan, request a free audit and we&apos;ll send a 24-hour action list for your website.</p>

        <div className="mt-6">
          <Link href="/free-audit" className="bg-sky-700 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-800 transition-colors">Get Your Free Nepal SEO Audit</Link>
        </div>
      </div>
    </main>
  );
}
