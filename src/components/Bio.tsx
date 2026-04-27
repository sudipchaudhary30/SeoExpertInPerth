export default function Bio() {
  return (
    <section id="about" className="bg-[#eaf4ff] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-4xl font-bold text-slate-900 md:text-5xl">About Me</h2>
        <div className="max-w-3xl space-y-6 text-lg text-slate-600">
          <p>I'm <strong className="text-sky-600">Sudip Chaudhary</strong>, an SEO specialist with 3 years of hands-on experience helping businesses rank higher on Google.</p>
          <p>Recently, I've been diving into <strong className="text-cyan-600">Flutter development</strong> to build cross-platform mobile applications.</p>
          <p>Based in <strong className="text-sky-600">Nepal</strong>, I'm actively learning full-stack development and contributing to open-source projects.</p>
          <h3 className="pt-4 text-2xl font-bold text-slate-900">My Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Technical SEO", "Content Strategy", "Link Building", "Core Web Vitals", "Flutter/Dart", "Next.js/React", "TypeScript", "Database Design", "Google Analytics"].map((skill) => (
              <div key={skill} className="border border-sky-200 bg-[#f1f8ff] px-4 py-2 text-center text-sm font-semibold text-slate-700 transition-colors hover:bg-[#e2f0fe]">{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}