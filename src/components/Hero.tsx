import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-gradient-to-b from-[#eaf4ff] to-[#dbeeff] pt-10 pb-6">
      <div className="absolute inset-0">
        <Image
          src="/images/background (1).png"
          alt="Abstract light blue background"
          fill
          className="object-cover opacity-85"
          priority
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#eaf4ff]/75 via-[#eaf4ff]/55 to-[#eaf4ff]/10" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-6 pt-14 md:pt-16 lg:pt-20">
            <div>
              <h1 className="max-w-xl text-4xl font-extrabold leading-[1.18] tracking-[0.01em] text-slate-900 md:text-[3.45rem]">
                SEO Expert in Netherlands
                <span className="mt-1 block font-semibold text-sky-700">
                  Technical SEO & Digital Strategy Specialist
                </span>
              </h1>
            </div>

            <p className="max-w-xl text-[1.08rem] leading-8 text-slate-700">
              I help Amsterdam and Netherlands businesses rank higher on Google with proven SEO strategies, technical optimization, and data-driven content.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="#portfolio"
                className="border border-sky-700 bg-sky-700 px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-sky-800"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="border border-sky-700 bg-transparent px-8 py-3 font-semibold text-sky-800 transition-colors duration-200 hover:bg-sky-100"
              >
                Enquiry
              </Link>
            </div>
          </div>

          <div className="relative flex items-start justify-center lg:justify-end">
            <div className="relative h-[540px] w-[405px] md:h-[650px] md:w-[500px] lg:translate-x-24 xl:translate-x-32">
              <Image
                src="/images/sudip profile no bg.png"
                alt="Sudip Chaudhary portrait"
                fill
                className="object-contain object-bottom scale-110 md:scale-125"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}