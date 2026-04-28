"use client";

import { useState, useEffect } from "react";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  metrics?: string;
  image?: string;
  link?: string;
  createdAt?: any;
}

export default function PortfolioManager() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    title: "",
    description: "",
    technologies: "",
    metrics: "",
    image: "",
    link: "",
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/portfolio");
      const data = await res.json();
      setItems(data);
    } catch (err) {
      setError("Failed to fetch portfolio items");
    }
    setLoading(false);
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/admin/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          technologies: form.technologies
            .split(",")
            .map((t) => t.trim())
            .filter((t) => t),
        }),
      });

      if (!res.ok) throw new Error("Failed to create item");

      setForm({
        title: "",
        description: "",
        technologies: "",
        metrics: "",
        image: "",
        link: "",
      });
      setIsCreating(false);
      await fetchItems();
    } catch (err) {
      setError("Error creating portfolio item");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this item?")) return;

    try {
      const res = await fetch(`/api/admin/portfolio/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete");
      await fetchItems();
    } catch (err) {
      setError("Error deleting item");
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
          + Add Portfolio Item
        </button>
      ) : (
        <form
          onSubmit={handleCreate}
          className="space-y-4 rounded-3xl border border-[#dbe8f3] bg-white p-6 shadow-[0_18px_50px_rgba(26,34,51,0.06)]"
        >
          <input
            type="text"
            placeholder="Project Title"
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
            type="text"
            placeholder="Technologies (comma-separated)"
            value={form.technologies}
            onChange={(e) => setForm({ ...form, technologies: e.target.value })}
            className="w-full rounded-xl border border-[#dbe8f3] bg-[#f8fcff] px-4 py-3 text-[#1A2233] placeholder:text-[#8a97a8] focus:border-[#4A6CF7] focus:bg-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Metrics/Results"
            value={form.metrics}
            onChange={(e) => setForm({ ...form, metrics: e.target.value })}
            className="w-full rounded-xl border border-[#dbe8f3] bg-[#f8fcff] px-4 py-3 text-[#1A2233] placeholder:text-[#8a97a8] focus:border-[#4A6CF7] focus:bg-white focus:outline-none"
          />
          <input
            type="url"
            placeholder="Image URL"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="w-full rounded-xl border border-[#dbe8f3] bg-[#f8fcff] px-4 py-3 text-[#1A2233] placeholder:text-[#8a97a8] focus:border-[#4A6CF7] focus:bg-white focus:outline-none"
          />
          <input
            type="url"
            placeholder="Project Link"
            value={form.link}
            onChange={(e) => setForm({ ...form, link: e.target.value })}
            className="w-full rounded-xl border border-[#dbe8f3] bg-[#f8fcff] px-4 py-3 text-[#1A2233] placeholder:text-[#8a97a8] focus:border-[#4A6CF7] focus:bg-white focus:outline-none"
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="rounded-full bg-[#00b8ad] px-6 py-3 font-semibold text-white transition hover:bg-[#0aa89e]"
            >
              Save Item
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
        ) : items.length === 0 ? (
          <p className="text-[#5A6A7A]">No portfolio items yet</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-[#dbe8f3] bg-white p-5 shadow-[0_14px_40px_rgba(26,34,51,0.05)]"
            >
              <h3 className="text-lg font-bold text-[#1A2233]">{item.title}</h3>
              <p className="text-sm text-[#5A6A7A]">{item.description}</p>
              {item.technologies.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#eaf1ff] px-3 py-1 text-xs font-semibold text-[#3550c7]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <button
                onClick={() => handleDelete(item.id)}
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
