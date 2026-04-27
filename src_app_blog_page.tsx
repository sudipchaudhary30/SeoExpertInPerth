import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = generateMetadata({
  title: "Blog - Articles on SEO & Development",
  description: "Read articles about SEO, Flutter development, web technologies, and digital marketing tips.",
  url: "https://sudipchaudhary101.com.np/blog",
  type: "website",
});

const blogPosts = [
  {
    slug: "getting-started-with-flutter",
    title: "Getting Started with Flutter Development",
    description: "A complete beginner's guide to Flutter, covering setup, basics, and first app.",
    date: "2024-04-20",
    readTime: "8 min read",
    tags: ["flutter", "mobile", "development"],
  },
  {
    slug: "seo-2024-guide",
    title: "Complete SEO Guide for 2024",
    description: "Everything you need to know about SEO, from basics to advanced strategies.",
    date: "2024-04-15",
    readTime: "12 min read",
    tags: ["seo", "marketing", "guide"],
  },
  {
    slug: "next-js-best-practices",
    title: "Next.js 14 Best Practices for Production",
    description: "Learn the essential best practices for building scalable Next.js applications.",
    date: "2024-04-10",
    readTime: "10 min read",
    tags: ["nextjs", "react", "web-development"],
  },
];

export default function BlogPage() {
  return (
    <div className="py-16 md:py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-slate-300 mb-12">
            Thoughts on SEO, Flutter development, and web technologies
          </p>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-slate-900 border border-slate-800 hover:border-blue-500 rounded-lg p-6 transition-all hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h2 className="text-2xl font-bold text-slate-50 flex-1">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                </div>

                <p className="text-slate-400 text-sm mb-3">
                  {post.date} · {post.readTime}
                </p>

                <p className="text-slate-300 mb-4">{post.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-800 text-blue-300 px-3 py-1 rounded text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-400 hover:text-blue-300 font-bold inline-flex items-center gap-2"
                >
                  Read Article →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 p-6 bg-slate-900 border border-slate-800 rounded-lg">
            <h3 className="text-xl font-bold text-slate-50 mb-3">
              More Coming Soon
            </h3>
            <p className="text-slate-300">
              I regularly publish articles about SEO strategies, Flutter development tips,
              and web technology best practices. Check back soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
