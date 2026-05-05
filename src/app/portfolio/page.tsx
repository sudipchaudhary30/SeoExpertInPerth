import type { Metadata } from "next";
import Link from "next/link";
import Portfolio from "@/components/Portfolio";
import { SITE_CONFIG } from "@/lib/config";

export function generateMetadata(): Metadata {
	return {
		title: "SEO Case Studies | Best SEO Agency in Netherlands",
		description: "Explore SEO case studies and portfolio results from Sudip Chaudhary, an SEO expert in Amsterdam helping Netherlands businesses with technical SEO, local SEO, content strategy, and organic growth.",
		keywords: "SEO case studies, SEO portfolio, SEO expert Amsterdam, SEO expert Netherlands, best SEO agency in Netherlands, technical SEO Netherlands, local SEO Amsterdam",
		alternates: {
			canonical: `${SITE_CONFIG.url}/portfolio`,
		},
		openGraph: {
			title: "SEO Case Studies | Best SEO Agency in Netherlands",
			description: "See the SEO projects, technical improvements, and ranking-focused work behind Sudip Chaudhary's portfolio.",
			url: `${SITE_CONFIG.url}/portfolio`,
			type: "website",
		},
	};
}

export default function PortfolioPage() {
	return (
		<main className="bg-gradient-to-b from-[#eef6ff] to-white py-16 md:py-24">
			<div className="container mx-auto space-y-12 px-4">
				<section className="max-w-3xl space-y-5">
					<p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Portfolio</p>
					<h1 className="text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-tight text-slate-900">
						SEO case studies for Amsterdam and Netherlands businesses.
					</h1>
					<p className="text-lg leading-8 text-slate-700">
						These projects show how I approach technical SEO, local search visibility, content strategy, and ranking growth for businesses that want the best SEO agency in Netherlands-level execution.
					</p>
				</section>

				<section className="grid gap-4 md:grid-cols-3">
					<article className="border border-sky-100 bg-white p-6 shadow-sm">
						<h2 className="text-xl font-semibold text-slate-900">SEO expert Amsterdam</h2>
						<p className="mt-3 leading-7 text-slate-700">Portfolio work centered on local market relevance, search intent, and lead generation.</p>
					</article>
					<article className="border border-sky-100 bg-white p-6 shadow-sm">
						<h2 className="text-xl font-semibold text-slate-900">SEO expert Netherlands</h2>
						<p className="mt-3 leading-7 text-slate-700">Projects built to support broader Dutch visibility and commercial keyword targets.</p>
					</article>
					<article className="border border-sky-100 bg-white p-6 shadow-sm">
						<h2 className="text-xl font-semibold text-slate-900">Best SEO agency in Netherlands</h2>
						<p className="mt-3 leading-7 text-slate-700">Case studies that demonstrate execution, process, and results rather than generic claims.</p>
					</article>
				</section>

				<div>
					<Portfolio />
				</div>

				<section className="border border-sky-100 bg-white p-8 shadow-sm">
					<h2 className="text-2xl font-semibold text-slate-900">Want this approach on your site?</h2>
					<p className="mt-4 max-w-3xl leading-8 text-slate-700">
						If you want SEO work structured around service pages, supporting content, and commercial intent, review the services page and get in touch for a consultation.
					</p>
					<div className="mt-6 flex flex-wrap gap-3">
						<Link href="/seo-services" className="bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-800">
							View SEO services
						</Link>
						<Link href="/contact" className="border border-sky-700 px-6 py-3 text-sm font-semibold text-sky-700 transition-colors hover:bg-sky-50">
							Contact me
						</Link>
					</div>
				</section>
			</div>
		</main>
	);
}