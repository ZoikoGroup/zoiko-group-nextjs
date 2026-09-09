import Image from "next/image";
import Link from "next/link";

import LogoMarquee from "./LogoMarquee";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      {/* hero-bg.webp already has the wave divider baked into its bottom
          edge, so it's anchored right/bottom and never covered again below. */}
      <Image
        src="/home/hero-bg.webp"
        alt="Family looking out over a city skyline, overlaid with icons representing Zoiko's businesses"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right-bottom"
      />

      {/* No extra overlay needed — hero-bg.webp already bakes in the
          teal-to-blue gradient over its left side, which keeps this copy
          readable without darkening the photo a second time. */}
      <div className="relative mx-auto w-full max-w-7xl px-6 pt-20 pb-28 sm:px-8 sm:pt-24 sm:pb-32 lg:pt-28 lg:pb-40">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-white/80">
            Zoiko Group
          </p>

          <h1 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Building the Intelligent Infrastructure of Everyday Life.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Zoiko Group is a technology-led venture and operating group
            building intelligent infrastructure, trusted platforms and
            category-defining businesses across technology, connectivity,
            financial services, healthcare, mobility, commerce, media and
            global trade. We build locally relevant businesses on globally
            scalable foundations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/companies"
              className="rounded-full bg-brand-deep px-8 py-3.5 text-sm font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-navy hover:shadow-lg"
            >
              Explore Our Businesses
            </Link>
            <Link
              href="/divisions"
              className="rounded-full border border-white/70 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-brand-deep"
            >
              How Zoiko Works
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Sits directly on the cream band already baked into hero-bg.webp —
          no background of its own, so there's no seam with the photo. */}
      <div className="relative overflow-hidden pb-6 sm:pb-8">
        <LogoMarquee />
      </div>
    </section>
  );
}
