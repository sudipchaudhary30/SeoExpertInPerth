export default function Blog() {
  return (
    <div className="bg-gradient-to-b from-[#f9fdff] to-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="mb-4 text-5xl font-bold text-slate-900 md:text-6xl">Blog</h1>
        <p className="mb-12 text-xl text-slate-600">Articles on SEO, Flutter, and web development coming soon!</p>
        <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm">
          <p className="text-slate-600">Check back soon for latest articles on SEO strategies, Flutter development tips, and web technologies.</p>
        </div>
      </div>
    </div>
  );
}