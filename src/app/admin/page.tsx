export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fcff] via-[#f4f8fd] to-[#edf3f9] px-4 py-16">
      <div className="mx-auto max-w-3xl rounded-3xl border border-[#dbe8f3] bg-white/90 p-8 shadow-[0_24px_70px_rgba(26,34,51,0.08)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4A6CF7]">Static site</p>
        <h1 className="mt-2 text-3xl font-bold text-[#1A2233]">Admin tools are disabled on the static build</h1>
        <p className="mt-4 text-[#5A6A7A]">
          This website is deployed as a static export for GitHub Pages. Content is managed in source files and rebuilt during deployment, so there is no runtime admin panel here.
        </p>
        <p className="mt-4 text-[#5A6A7A]">
          To update the site, edit <span className="font-semibold text-[#1A2233]">src/data/blog.ts</span>, <span className="font-semibold text-[#1A2233]">src/lib/config.ts</span>, or the relevant page component, then run the build again.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/"
            className="rounded-full bg-[#4A6CF7] px-5 py-3 font-semibold text-white transition hover:bg-[#3951d1]"
          >
            Go to site
          </a>
          <a
            href="/blog"
            className="rounded-full border border-[#dbe8f3] bg-white px-5 py-3 font-semibold text-[#1A2233] transition hover:bg-[#f8fcff]"
          >
            View blog
          </a>
        </div>
      </div>
    </div>
  );
}
