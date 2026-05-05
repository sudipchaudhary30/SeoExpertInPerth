"use client";

import blogPosts from "@/data/blog";

export default function BlogManager() {
  const posts = blogPosts;

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-[#dbe8f3] bg-white p-5 shadow-[0_14px_40px_rgba(26,34,51,0.05)]">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4A6CF7]">Static export mode</p>
        <h2 className="mt-2 text-2xl font-bold text-[#1A2233]">Blog content is managed in source files</h2>
        <p className="mt-2 text-[#5A6A7A]">
          This deployment is fully static, so the blog preview below is read-only. To publish changes, update <span className="font-semibold text-[#1A2233]">src/data/blog.ts</span> and rebuild the site.
        </p>
      </div>

      <div className="grid gap-4">
        {posts.length === 0 ? (
          <p className="text-[#5A6A7A]">No blog posts yet</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="rounded-3xl border border-[#dbe8f3] bg-white p-5 shadow-[0_14px_40px_rgba(26,34,51,0.05)]"
            >
              <h3 className="text-lg font-bold text-[#1A2233]">{post.title}</h3>
              <p className="text-sm text-[#5A6A7A]">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#eaf1ff] px-3 py-1 text-xs font-semibold text-[#3550c7]">
                  {post.category}
                </span>
                <span className="rounded-full bg-[#f0f4f9] px-3 py-1 text-xs font-semibold text-[#5A6A7A]">
                  {post.readTime} min read
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
