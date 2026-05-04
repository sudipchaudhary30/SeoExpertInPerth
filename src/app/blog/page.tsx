import type { Metadata } from "next";
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

  // Group posts by category
  const categories = [...new Set(posts.map(p => p.category))];

  return (
    <div className="bg-gradient-to-b from-[#f9fdff] to-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <section className="mb-12">
          <h1 className="mb-4 text-5xl font-bold text-slate-900 md:text-6xl">SEO Blog & Resources</h1>
          <p className="mb-8 text-xl text-slate-600">Expert articles on SEO strategy, technical optimization, and ranking higher on Google for Netherlands businesses.</p>
          <p className="text-slate-700 leading-7">Whether you're looking to understand how SEO works, improve your website's technical performance, or implement a comprehensive content strategy for the Dutch market, you'll find practical, actionable insights here.</p>
        </section>

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-sky-100 bg-white p-8 shadow-sm">
            <p className="text-slate-600">Check back soon for latest articles on SEO strategies, content marketing, and technical optimization.</p>
          </div>
        ) : (
          <>
            {/* Categories Navigation */}
            <div className="mb-12 flex flex-wrap gap-2">
              {categories.map(cat => (
                <a key={cat} href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`} className="px-4 py-2 bg-sky-100 text-sky-700 rounded-full font-semibold hover:bg-sky-200 transition-colors">
                  {cat}
                </a>
              ))}
            </div>

            {/* Blog Posts by Category */}
            <div className="space-y-12">
              {categories.map(category => (
                <section key={category} id={category.toLowerCase().replace(/\s+/g, '-')}>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-4 border-b-2 border-sky-200">{category}</h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    {posts.filter(p => p.category === category).map((post: any) => (
                      <article key={post.id} className="border border-sky-200 bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-semibold text-sky-600 uppercase tracking-wider">{post.category}</span>
                            <span className="text-sm text-slate-500">{post.readTime} min read</span>
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight hover:text-sky-600 transition-colors">{post.title}</h3>
                          <p className="text-slate-600 mb-4 line-clamp-2">{post.excerpt}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.keywords && post.keywords.slice(0, 2).map((keyword: string) => (
                              <span key={keyword} className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">{keyword}</span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <time className="text-sm text-slate-500">{new Date(post.date).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                            <a href={`#${post.slug}`} className="text-sky-600 font-semibold hover:text-sky-700 transition-colors">Read →</a>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* CTA Section */}
            <section className="mt-16 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Need a Personalized SEO Strategy?</h2>
              <p className="mb-6 text-white/90">Get a free consultation about your website's SEO performance and opportunities for ranking higher in the Netherlands market.</p>
              <a href="/contact" className="inline-block px-8 py-3 bg-white text-sky-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">Get Free Consultation</a>
            </section>
          </>
        )}
      </div>
    </div>
  );
}