"use client";
import Link from "next/link";
import { projects } from "@/lib/config";

type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  metrics?: string;
  link?: string;
  image?: string;
};

export default function Portfolio() {
  const items: PortfolioItem[] = projects;

  return (
    <section id="portfolio" className="bg-[#e1eefb] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Case Studies</p>
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">Projects & case studies that support SEO growth in the Netherlands</h2>
          <p className="text-lg leading-8 text-slate-700">
            These projects show how technical SEO, local SEO, and content strategy come together to improve rankings and qualified leads for Dutch businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((project) => (
            <div key={project.id} className="border border-sky-200 bg-[#f7fbff] p-6 transition-colors hover:bg-[#edf6ff] hover:shadow-md">
              {project.image && (
                <div className="w-full h-32 bg-sky-100 mb-4 flex items-center justify-center text-sky-600 text-sm">Image</div>
              )}
              <h3 className="mb-3 text-xl font-bold text-slate-900">{project.title}</h3>
              <p className="mb-4 text-slate-600">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {(project.technologies || []).map((tech: string) => (
                  <span key={tech} className="border border-sky-200 bg-[#e7f2ff] px-3 py-1 text-sm font-medium text-sky-800">{tech}</span>
                ))}
              </div>
              {project.metrics && <p className="mb-4 font-semibold text-sky-600">{project.metrics}</p>}
              {project.link && project.link !== "#" && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 font-semibold">
                  View →
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 border border-sky-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">Need a similar result on your site?</h3>
          <p className="mt-3 max-w-3xl leading-8 text-slate-700">
            If you are comparing the best SEO agency in Netherlands or looking for an SEO expert in Amsterdam, start with a consultation and a clear plan for your highest-value pages.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/seo-services" className="bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-800">
              View SEO services
            </Link>
            <Link href="/contact" className="border border-sky-700 px-6 py-3 text-sm font-semibold text-sky-700 transition-colors hover:bg-sky-50">
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}