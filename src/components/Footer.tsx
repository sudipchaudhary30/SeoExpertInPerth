import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-[#f7fbff] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="mb-4 text-lg font-bold text-sky-600">Sudip Chaudhary</h3>
            <p className="text-slate-600">SEO Specialist & Flutter Developer</p>
          </div>
          <div>
            <h4 className="mb-4 font-bold text-slate-900">Links</h4>
            <ul className="space-y-2 text-slate-600">
              <li><Link href="/" className="transition-colors hover:text-sky-600">Home</Link></li>
              <li><Link href="/portfolio" className="transition-colors hover:text-sky-600">Portfolio</Link></li>
              <li><Link href="/blog" className="transition-colors hover:text-sky-600">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold text-slate-900">Connect</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="https://github.com/sudipchaudhary30" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-sky-600">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/sudip-chaudhary" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-sky-600">LinkedIn</a></li>
              <li><a href="mailto:chsudip28@gmail.com" className="transition-colors hover:text-sky-600">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-sky-100 pt-8 text-center text-sm text-slate-500">
          <p>© 2024 Sudip Chaudhary. Built with Next.js & Tailwind CSS. Deployed on Cloudflare.</p>
        </div>
      </div>
    </footer>
  );
}