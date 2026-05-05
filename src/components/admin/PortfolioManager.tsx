"use client";

import portfolioData from "@/data/portfolio.json";

export default function PortfolioManager() {
  const items = portfolioData || [];

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-[#dbe8f3] bg-white p-5 shadow-[0_14px_40px_rgba(26,34,51,0.05)]">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4A6CF7]">Static export mode</p>
        <h2 className="mt-2 text-2xl font-bold text-[#1A2233]">Portfolio data is read-only</h2>
        <p className="mt-2 text-[#5A6A7A]">
          This portfolio section is intentionally static. If you want to add case studies, update the source files and rebuild the site.
        </p>
      </div>

      <div className="grid gap-4">
        {items.length === 0 ? (
          <p className="text-[#5A6A7A]">No portfolio items yet</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-[#dbe8f3] bg-white p-5 shadow-[0_14px_40px_rgba(26,34,51,0.05)]"
            >
              <h3 className="text-lg font-bold text-[#1A2233]">{item.title}</h3>
              <p className="text-sm text-[#5A6A7A]">{item.description}</p>
              <p className="mt-3 text-sm text-[#5A6A7A]">This portfolio section is currently empty in the static source data.</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
