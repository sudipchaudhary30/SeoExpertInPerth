"use client";
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
        <h2 className="mb-12 text-4xl font-bold text-slate-900 md:text-5xl">Projects & Case Studies</h2>
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
      </div>
    </section>
  );
}