import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

// Static blog data (no fs.readFile needed for static export)
import blogData from "@/data/blog.json";

export function generateMetadata(): Metadata {
  return {
    title: "SEO Blog | Netherlands SEO Strategy, Technical SEO, and Local Search",
    description: "Read practical SEO articles for Netherlands businesses on technical SEO, local SEO, keyword research, content strategy, and how to rank higher on Google.",
    keywords: "SEO blog, SEO articles, SEO tips Netherlands, technical SEO Netherlands, local SEO Amsterdam, content strategy Netherlands, best SEO agency in Netherlands",
    alternates: {
      canonical: `${SITE_CONFIG.url}/blog`,
    },
    openGraph: {
      title: "SEO Blog | Netherlands SEO Strategy, Technical SEO, and Local Search",
      description: "Practical SEO articles covering technical optimization, content strategy, local SEO, and Google ranking strategies for Netherlands businesses.",
      url: `${SITE_CONFIG.url}/blog`,
      type: "website",
    },
  };
}

export default function Blog() {
  const posts: any[] = blogData || [];

  return (
    <div className="bg-gradient-to-b from-[#f9fdff] to-white py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Blog</p>
          <h1 className="mt-3 text-[clamp(2.4rem,5vw,4.5rem)] font-semibold text-slate-900">
            SEO Blog for Netherlands businesses that want better rankings.
          </h1>
          <p className="mt-4 text-xl leading-8 text-slate-600">
            Expert articles on technical SEO, local SEO, content strategy, keyword research, and ranking opportunities for Amsterdam and across the Netherlands.
          </p>
        </div>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          <Link href="/seo-services" className="border border-sky-100 bg-white p-6 shadow-sm transition-colors hover:border-sky-300 hover:bg-sky-50">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Service page</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900">SEO services in Amsterdam</h2>
            <p className="mt-3 leading-7 text-slate-700">Use this if you are comparing the best SEO agency in Netherlands and want a clear service overview.</p>
          </Link>
          <Link href="/contact" className="border border-sky-100 bg-white p-6 shadow-sm transition-colors hover:border-sky-300 hover:bg-sky-50">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Consultation</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900">Talk to an SEO expert</h2>
            <p className="mt-3 leading-7 text-slate-700">If you need a plan for your site, start with a consultation and a practical SEO roadmap.</p>
          </Link>
          <Link href="/about" className="border border-sky-100 bg-white p-6 shadow-sm transition-colors hover:border-sky-300 hover:bg-sky-50">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">About</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900">Why work with Sudip</h2>
            <p className="mt-3 leading-7 text-slate-700">Learn how the SEO strategy is structured for Amsterdam and Netherlands businesses.</p>
          </Link>
        </section>

        <div className="mt-12 max-w-3xl">
          <p className="text-slate-600">Use these articles to understand the strategy behind the pages that should rank first.</p>
        </div>
        
        {posts.length === 0 ? (
          <div className="border border-sky-100 bg-white p-8 shadow-sm">
            <p className="text-slate-600">Check back soon for latest articles on SEO strategies, content marketing, and technical optimization.</p>
          </div>
        ) : (
          <div>
            <div className="mt-10 space-y-[5rem]">
              {posts.map((post: any) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="border border-sky-200 bg-white p-8 cursor-pointer transition-shadow hover:shadow-lg hover:border-sky-400">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-semibold text-sky-600">{post.category}</span>
                      <span className="text-sm text-slate-500">{post.readTime} min read</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2 hover:text-sky-600" style={{lineHeight: '1.5'}}>{post.title}</h2>
                    <p className="text-slate-500 text-sm mb-3">{new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p className="text-slate-600 mb-4" style={{lineHeight: '1.5'}}>{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.keywords && post.keywords.slice(0, 3).map((keyword: string) => (
                        <span key={keyword} className="text-xs bg-sky-50 text-sky-700 px-3 py-1">#{keyword}</span>
                      ))}
                    </div>
                    <div className="text-sky-600 font-semibold hover:text-sky-700">Read Article →</div>
                  </article>
                </Link>
              ))}
            </div>

            <section className="mt-[5rem] border border-sky-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Next step</p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900">Want help turning this strategy into rankings?</h2>
              <p className="mt-4 text-slate-600" style={{lineHeight: '1.5'}}>
                Read the articles, then move to the service page or contact page if you want a practical SEO plan for your Netherlands business.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/seo-services" className="bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-800">
                  View SEO services
                </Link>
                <Link href="/contact" className="border border-sky-700 px-6 py-3 text-sm font-semibold text-sky-700 transition-colors hover:bg-sky-50">
                  Get a consultation
                </Link>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}