export default function Bio() {
  return (
    <section id="about" className="bg-[#eaf4ff] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-4xl font-bold text-slate-900 md:text-5xl">SEO Expert in Amsterdam</h2>
        <div className="max-w-3xl space-y-6 text-lg text-slate-600">
          <p>I&apos;m <strong className="text-sky-600">Sudip Chaudhary</strong>, a specialized <strong>SEO expert based in Amsterdam, Netherlands</strong> with 3+ years of hands-on experience helping Dutch businesses and international companies rank higher on Google.</p>
          <p>My expertise focuses on <strong className="text-cyan-600">technical SEO, content strategy, keyword research, and local SEO optimization</strong> for the Dutch and European markets.</p>
          <p>Located in <strong className="text-sky-600">Amsterdam</strong>, I understand the unique challenges of the Netherlands market and specialize in helping businesses achieve sustainable organic growth.</p>
          <h3 className="pt-4 text-2xl font-bold text-slate-900">SEO Services & Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Technical SEO", "Keyword Research", "Content Strategy", "Local SEO", "GDPR Compliance", "Schema Markup", "Core Web Vitals", "Link Building", "Google Analytics", "Competitor Analysis", "Local Listings", "Dutch Market SEO"].map((skill) => (
              <div key={skill} className="border border-sky-200 bg-[#f1f8ff] px-4 py-2 text-center text-sm font-semibold text-slate-700 transition-colors hover:bg-[#e2f0fe]">{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}