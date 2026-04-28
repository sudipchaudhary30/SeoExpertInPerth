"use client";

import { useState, useEffect } from "react";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  image?: string;
  author?: string;
  createdAt?: any;
}

export default function BlogManager() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
    author: "Admin",
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/blog");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError("Failed to fetch posts");
    }
    setLoading(false);
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/admin/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        let json;
        try {
          json = await res.json();
        } catch (_) {
          throw new Error("Failed to create post");
        }
        throw new Error(json?.error || json?.message || "Failed to create post");
      }

      setForm({
        title: "",
        description: "",
        content: "",
        image: "",
        author: "Admin",
      });
      setIsCreating(false);
      await fetchPosts();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this post?")) return;

    try {
      const res = await fetch(`/api/admin/blog/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      await fetchPosts();
    } catch (err) {
      setError("Error deleting post");
    }
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="rounded-2xl border border-[#f3c2ca] bg-[#fff5f6] p-4 text-[#c13b50] shadow-sm">
          {error}
        </div>
      )}

      {!isCreating ? (
        <button
          onClick={() => setIsCreating(true)}
          className="rounded-full bg-[#4A6CF7] px-6 py-3 font-semibold text-white shadow-[0_12px_30px_rgba(74,108,247,0.22)] transition hover:bg-[#3951d1]"
        >
          + Create New Post
        </button>
      ) : (
        <form
          onSubmit={handleCreate}
          className="space-y-4 rounded-3xl border border-[#dbe8f3] bg-white p-6 shadow-[0_18px_50px_rgba(26,34,51,0.06)]"
        >
          <input
            type="text"
            placeholder="Post Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full rounded-xl border border-[#dbe8f3] bg-[#f8fcff] px-4 py-3 text-[#1A2233] placeholder:text-[#8a97a8] focus:border-[#4A6CF7] focus:bg-white focus:outline-none"
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full rounded-xl border border-[#dbe8f3] bg-[#f8fcff] px-4 py-3 text-[#1A2233] placeholder:text-[#8a97a8] focus:border-[#4A6CF7] focus:bg-white focus:outline-none"
            required
          />
          <input
            type="url"
            placeholder="Image URL"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="w-full rounded-xl border border-[#dbe8f3] bg-[#f8fcff] px-4 py-3 text-[#1A2233] placeholder:text-[#8a97a8] focus:border-[#4A6CF7] focus:bg-white focus:outline-none"
          />
          <textarea
            placeholder="Content (Markdown supported)"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            className="h-40 w-full rounded-xl border border-[#dbe8f3] bg-[#f8fcff] px-4 py-3 text-[#1A2233] placeholder:text-[#8a97a8] focus:border-[#4A6CF7] focus:bg-white focus:outline-none"
            required
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="rounded-full bg-[#00b8ad] px-6 py-3 font-semibold text-white transition hover:bg-[#0aa89e]"
            >
              Save Post
            </button>
            <button
              type="button"
              onClick={() => setIsCreating(false)}
              className="rounded-full border border-[#dbe8f3] px-6 py-3 font-semibold text-[#1A2233] transition hover:bg-[#f0f4f9]"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="grid gap-4">
        {loading ? (
          <p className="text-[#5A6A7A]">Loading...</p>
        ) : posts.length === 0 ? (
          <p className="text-[#5A6A7A]">No blog posts yet</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="rounded-3xl border border-[#dbe8f3] bg-white p-5 shadow-[0_14px_40px_rgba(26,34,51,0.05)]"
            >
              <h3 className="text-lg font-bold text-[#1A2233]">{post.title}</h3>
              <p className="text-sm text-[#5A6A7A]">{post.description}</p>
              <button
                onClick={() => handleDelete(post.id)}
                className="mt-4 rounded-full bg-[#ff5d73] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#e5485f]"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
