export default function AdminLogin() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8fcff] via-[#f3f8fd] to-[#edf3f9] px-4 py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(74,108,247,0.14),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(0,212,200,0.14),_transparent_40%)]" />
      <div className="relative w-full max-w-md rounded-3xl border border-[#dbe8f3] bg-white/90 p-8 shadow-[0_24px_70px_rgba(26,34,51,0.08)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4A6CF7]">
          Static deployment
        </p>
        <h1 className="mt-2 text-3xl font-bold text-[#1A2233]">No runtime login on GitHub Pages</h1>
        <p className="mt-2 text-[#5A6A7A]">
          This site is exported statically, so there is no secure admin login in production. Edit the source files and redeploy to update the website.
        </p>

        <div className="mt-8 space-y-3">
          <a
            href="/admin"
            className="block w-full rounded-xl bg-[#4A6CF7] py-3 text-center font-semibold text-white transition hover:bg-[#3951d1]"
          >
            Open static admin info
          </a>
          <a
            href="/"
            className="block w-full rounded-xl border border-[#dbe8f3] bg-white py-3 text-center font-semibold text-[#1A2233] transition hover:bg-[#f8fcff]"
          >
            Back to site
          </a>
        </div>
      </div>
    </div>
  );
}
