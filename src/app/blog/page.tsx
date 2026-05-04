import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

// Static blog data (no fs.readFile needed for static export)
import blogData from "@/data/blog.json";

export function generateMetadata(): Metadata {
  return {
    title: "SEO Blog | Articles on Search Rankings and Digital Strategy",
    description: "Read expert articles on SEO strategies for Netherlands businesses, technical SEO, local optimization, content strategy, and how to rank higher on Google.",
    keywords: "SEO blog, SEO articles, SEO tips Netherlands, search engine optimization, digital marketing strategy",
    alternates: {
      canonical: `${SITE_CONFIG.url}/blog`,
    },
    openGraph: {
      title: "SEO Blog | Articles on Search Rankings and Digital Strategy",
      description: "Expert SEO articles covering technical optimization, content strategy, local SEO, and Google ranking strategies for Netherlands businesses.",
      url: `${SITE_CONFIG.url}/blog`,
      type: "website",
    },
  };
}

export default function Blog() {
  const posts: any[] = blogData || [];

  return (
    <div className="bg-gradient-to-b from-[#f9fdff] to-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="mb-4 text-5xl font-bold text-slate-900 md:text-6xl">SEO Blog & Resources</h1>
        <p className="mb-12 text-xl text-slate-600">Expert articles on SEO strategy, technical optimization, and ranking higher on Google for Netherlands businesses.</p>
        
        {posts.length === 0 ? (
          <div className="border border-sky-100 bg-white p-8 shadow-sm">
            <p className="text-slate-600">Check back soon for latest articles on SEO strategies, content marketing, and technical optimization.</p>
          </div>
        ) : (
          <div className="space-y-16">
            {posts.map((post: any) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="border border-sky-200 bg-white p-8 cursor-pointer transition-shadow hover:shadow-lg hover:border-sky-400">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-semibold text-sky-600">{post.category}</span>
                    <span className="text-sm text-slate-500">{post.readTime} min read</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2 hover:text-sky-600" style={{lineHeight: '1.5'}}>{post.title}</h2>
                  <p className="text-slate-500 text-sm mb-3">{new Date(post.date).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
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

            <section className="border border-sky-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Upcoming blogs</p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900">More detailed SEO guides are coming soon</h2>
              <p className="mt-4 text-slate-600" style={{lineHeight: '1.5'}}>
                I will keep adding practical SEO articles for businesses in the Netherlands, with deeper answers to
                ranking questions, local search issues, and content strategy problems.
              </p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}