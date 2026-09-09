import Image from "next/image";
import Link from "next/link";

import Reveal from "./Reveal";
import { technologyPillars } from "./data";

const operatingBusinesses = [
  "Technology",
  "Communications",
  "Financial",
  "Realty",
  "Media",
  "Healthcare",
  "Supply",
];

export default function TechnologyLayer() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy py-20 sm:py-24 lg:py-28">
      <Image
        src="/home/technology-layer-bg.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-white/80">
            Technology as the common layer
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Technology is the common layer.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/85">
            Zoiko Tech builds technology that can stand independently and
            serves as a technology engine for the wider Group. Shared
            capabilities increase speed, consistency, trust and strategic
            leverage across operating businesses.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-10">
          <div className="overflow-hidden rounded-2xl bg-white shadow-card">
            <p className="bg-brand-deep px-6 py-4 text-center text-sm font-semibold tracking-wide text-white sm:text-left">
              Operating businesses — {operatingBusinesses.join(" · ")}
            </p>

            <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3 lg:p-8">
              {technologyPillars.map((pillar) => (
                <div
                  key={pillar}
                  className="rounded-xl border border-brand-border bg-brand-skybg px-5 py-4 text-center text-sm font-semibold text-brand-navy transition-colors duration-300 hover:bg-white hover:shadow-card"
                >
                  {pillar}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 px-6 pb-8 lg:px-8">
              <Link
                href="/companies"
                className="rounded-full bg-brand-navy px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep"
              >
                Explore Zoiko Tech
              </Link>
              <Link
                href="/companies"
                className="text-sm font-semibold text-brand-navy underline underline-offset-4 transition-colors hover:text-brand-teal"
              >
                Developer Ecosystem
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
