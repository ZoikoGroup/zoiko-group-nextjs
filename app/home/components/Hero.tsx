import Image from "next/image";
import Link from "next/link";

import IndustryHighlights from "./IndustryHighlights";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      {/* Drop the new hero photo into public/home/hero-banner.jpg. */}
      <Image
        src="/home/hero-banner.webp"
        alt="Family looking out over a city skyline, overlaid with icons representing Zoiko's businesses"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />

      <div />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-20 pb-16 sm:px-8 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-white/80">
            Zoiko Group
          </p>

          <h1 className="mt-4 font-serif text-3xl font-medium leading-tight text-white sm:text-5xl lg:text-[65.6px] lg:leading-[70.8px] lg:tracking-[-0.66px]">
            Building the
            <br />
            <span className="whitespace-nowrap text-teal-300">
              Intelligent Infrastructure
            </span>
            <br />
            of Everyday Life.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
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
              className="rounded-md bg-brand-navy-light px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep"
            >
              Explore Our Businesses
            </Link>
            <Link
              href="/divisions"
              className="rounded-md border border-brand-navy-light bg-white/60 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-brand-deep"
            >
              How Zoiko Works
            </Link>
          </div>
        </Reveal>
      </div>

      <IndustryHighlights />
    </section>
  );
}
