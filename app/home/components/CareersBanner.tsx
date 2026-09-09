import Image from "next/image";
import Link from "next/link";

import Reveal from "./Reveal";

export default function CareersBanner() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="grid overflow-hidden rounded-2xl bg-brand-navy-light shadow-card lg:grid-cols-2">
          <Reveal className="flex flex-col justify-center p-10 sm:p-12 lg:p-16">
            <p className="text-sm font-semibold tracking-wide text-white/70">
              Careers
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Build systems that matter.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/80">
              Join teams building technology and operating companies across
              markets — from engineering and research to finance, governance,
              communications, healthcare and operations.
            </p>
            <Link
              href="/careers"
              className="mt-8 inline-block w-fit rounded-full bg-brand-teal px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deepteal"
            >
              Explore Careers
            </Link>
          </Reveal>

          <Reveal
            delay={150}
            className="relative min-h-[280px] bg-brand-navy-light"
          >
            <Image
              src="/home/careers-banner.webp"
              alt="Zoiko team members collaborating across engineering, research and operations"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
