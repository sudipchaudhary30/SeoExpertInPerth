import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-gradient-to-b from-[#f9fdff] to-white py-16 md:py-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
        <p className="text-2xl font-semibold text-slate-700 mb-4">Page Not Found</p>
        <p className="text-slate-600 mb-8 text-lg">The page you're looking for doesn't exist or has been moved.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/" className="bg-sky-600 text-white px-8 py-3 font-semibold hover:bg-sky-700 transition-colors">
            Go Home
          </Link>
          <Link href="/blog" className="border border-sky-600 text-sky-600 px-8 py-3 font-semibold hover:bg-sky-50 transition-colors">
            Read Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
