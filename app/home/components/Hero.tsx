import Image from "next/image";
import Link from "next/link";

import heroImage from "@/public/home/hero.png";

export default function Hero() {
  return (
    <section className="bg-white">
      {/* Measured from the Figma hero export at 1420px: ~1200px of content
          between ~110px gutters, with the photo at its natural 467x423. */}
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[1fr_467px] lg:py-10">
        <div>
          <h1 className="max-w-[700px] text-3xl font-bold leading-tight text-brand-deep lg:text-[2.125rem]">
            Redefining Enterprise Empowering Society Engineering the Future
          </h1>

          <p className="mt-6 max-w-[420px] text-[15px] leading-relaxed text-brand-muted">
            Global innovation rooted in integrity, built to transform industries
            and uplift communities at scale.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            <Link
              href="/divisions"
              className="rounded-full bg-brand-deep px-10 py-4 text-[15px] font-bold text-white"
            >
              Explore Our Ecosystem
            </Link>
            <Link
              href="/sustainability"
              className="rounded-full border-[1.5px] border-brand-deep px-10 py-4 text-[15px] font-bold text-brand-deep"
            >
              Discover Our Impact
            </Link>
          </div>
        </div>

        <Image
          src={heroImage}
          alt="Zoiko Group colleagues collaborating in a workshop"
          priority
          sizes="(max-width: 1024px) 100vw, 467px"
          className="h-auto w-full rounded-2xl lg:w-[467px]"
        />
      </div>
    </section>
  );
}
