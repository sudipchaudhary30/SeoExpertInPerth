"use client";

import { useState } from "react";
import BlogManager from "@/components/admin/BlogManager";
import PortfolioManager from "@/components/admin/PortfolioManager";

type Tab = "blog" | "portfolio" | "settings";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>("blog");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fcff] via-[#f4f8fd] to-[#edf3f9]">
      <div className="absolute inset-x-0 top-0 -z-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(74,108,247,0.14),_transparent_45%),radial-gradient(circle_at_top_right,_rgba(0,212,200,0.14),_transparent_40%)]" />

      {/* Header */}
      <header className="relative z-10 border-b border-[#dbe8f3]/80 bg-white/85 shadow-[0_8px_30px_rgba(26,34,51,0.04)] backdrop-blur">
        <div className="container flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4A6CF7]">
              Admin workspace
            </p>
            <h1 className="mt-1 text-2xl font-bold text-[#1A2233]">CMS Admin</h1>
          </div>
          <a
            href="/"
            className="rounded-full border border-[#f0c9cf] bg-[#fff5f6] px-4 py-2 font-semibold text-[#c13b50] transition hover:bg-[#ffe9ed]"
          >
            Back to Site
          </a>
        </div>
      </header>

      {/* Tabs */}
      <div className="relative z-10 border-b border-[#dbe8f3]/70 bg-white/70 backdrop-blur">
        <div className="container flex gap-0 overflow-x-auto">
          <button
            onClick={() => setActiveTab("blog")}
            className={`px-6 py-4 font-semibold transition ${
              activeTab === "blog"
                ? "border-b-2 border-[#4A6CF7] text-[#4A6CF7]"
                : "text-[#5A6A7A] hover:text-[#1A2233]"
            }`}
          >
            Blog Posts
          </button>
          <button
            onClick={() => setActiveTab("portfolio")}
            className={`px-6 py-4 font-semibold transition ${
              activeTab === "portfolio"
                ? "border-b-2 border-[#4A6CF7] text-[#4A6CF7]"
                : "text-[#5A6A7A] hover:text-[#1A2233]"
            }`}
          >
            Portfolio
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`px-6 py-4 font-semibold transition ${
              activeTab === "settings"
                ? "border-b-2 border-[#4A6CF7] text-[#4A6CF7]"
                : "text-[#5A6A7A] hover:text-[#1A2233]"
            }`}
          >
            Settings
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container py-10">
        {activeTab === "blog" && <BlogManager />}
        {activeTab === "portfolio" && <PortfolioManager />}
        {activeTab === "settings" && (
          <div className="rounded-3xl border border-[#dbe8f3] bg-white p-8 shadow-[0_18px_50px_rgba(26,34,51,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4A6CF7]">
              Configuration
            </p>
            <h2 className="text-2xl font-bold text-[#1A2233]">Settings</h2>
            <p className="mt-2 text-[#5A6A7A]">
              Settings panel coming soon. For now, edit config in{" "}
              <code className="rounded bg-[#f0f4f9] px-2 py-1 font-mono text-[#1A2233]">
                src/lib/config.ts
              </code>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
