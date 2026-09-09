import Image from "next/image";
import Link from "next/link";

import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      {/* Drop the hero photo (globe/city + robotics collage) into
          public/about/hero-bg.jpg to replace this placeholder. */}
      <Image
        src="/about/hero-bg.webp"
        alt="Globe overlaid on a city skyline, with panels representing Zoiko's businesses"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />

      {/* This photo has no gradient baked in (unlike the home page's hero
          image), so the wash that keeps the copy readable is added here. */}
      <div className="absolute inset-0 bg-linear-to-r from-brand-teal-overlay via-brand-teal-overlay/80 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:py-28">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-white/80">
            About Zoiko Group
          </p>

          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            Redefining enterprise. Empowering society. Engineering the
            future.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Zoiko Group Inc. is a U.S.-headquartered, technology-led
            multinational holding company building and operating businesses
            across artificial intelligence, telecommunications, financial
            services, healthcare, media, consumer markets and global trade.
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
    </section>
  );
}
