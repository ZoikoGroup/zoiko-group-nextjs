import Image from "next/image";

import Reveal from "./Reveal";
import { technologyPillars } from "./data";

export default function TechnologyLayer() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy py-20 sm:py-24 lg:py-28">
      {/* Drop the dark tech collage image into
          public/about/technology-layer-bg.jpg to replace this placeholder. */}
      <Image
        src="/about/technology-layer-bg.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Technology is the common layer.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/85">
            ZoikoTech builds technology that can stand independently and
            serve as an engineering layer for the wider Group. Shared
            capabilities increase speed, resilience and leverage across
            every operating business.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-10 flex flex-wrap gap-4">
          {technologyPillars.map((pillar) => (
            <span
              key={pillar}
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors duration-300 hover:bg-white/20"
            >
              {pillar}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
