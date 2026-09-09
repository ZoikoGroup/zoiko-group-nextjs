import Image from "next/image";
import Link from "next/link";

import Reveal from "./Reveal";
import { globalHubs } from "./data";

export default function GlobalPresence() {
  return (
    <section className="bg-brand-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
            Local relevance. Global foundations.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-muted">
            Headquartered in Sacramento, California, with operating hubs
            across the United States, the United Kingdom, India and
            Singapore. Zoiko is designed to build locally relevant
            businesses on globally scalable foundations.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {globalHubs.map((hub) => (
              <div key={hub.name} className="border-l-2 border-brand-teal pl-4">
                <p className="font-bold text-brand-deep">{hub.name}</p>
                <p className="mt-1 text-sm text-brand-muted">{hub.role}</p>
              </div>
            ))}
          </div>

          <Link
            href="/global-reach"
            className="mt-8 inline-block rounded-full bg-brand-teal px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deepteal"
          >
            Explore Global Presence
          </Link>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-card sm:h-[420px]">
            <Image
              src="/about/global-presence.webp"
              alt="A Zoiko team member looking out over a city skyline, with badges marking Sacramento, the United Kingdom, India and Singapore"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
