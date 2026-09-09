import Image from "next/image";
import Link from "next/link";

import Reveal from "./Reveal";
import { globalHubs, globalPresenceBullets } from "./data";

export default function GlobalPresence() {
  return (
    <section className="bg-brand-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-brand-teal">
            Global by design
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-brand-deep sm:text-4xl">
            Local relevance. Global foundations.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-muted">
            Headquartered in Sacramento, Zoiko operates through teams and
            hubs across the United States, United Kingdom, India and
            Singapore. Our businesses are designed to adapt to local
            markets, laws and cultures while reusing globally scalable
            technology and operating foundations.
          </p>

          <ul className="mt-6 space-y-3">
            {globalPresenceBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal"
                />
                <span className="text-sm leading-relaxed text-brand-muted">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/global-reach"
            className="mt-8 inline-block rounded-full border border-brand-navy px-7 py-3 text-sm font-semibold text-brand-navy transition-colors duration-300 hover:bg-brand-navy hover:text-white"
          >
            Explore Global Presence
          </Link>
        </Reveal>

        <Reveal delay={150}>
          <div className="rounded-2xl bg-white p-5 shadow-card">
            <div className="relative h-64 w-full overflow-hidden rounded-xl sm:h-80">
              <Image
                src="/home/global-presence.webp"
                alt="Zoiko team members collaborating, with a world map showing office locations"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <ul className="mt-5 grid grid-cols-2 gap-x-6 border-t border-brand-divider">
              {globalHubs.map((hub, index) => (
                <li
                  key={hub.name}
                  className={`py-4 ${index >= 2 ? "border-t border-brand-divider" : ""}`}
                >
                  <p className="text-sm font-bold text-brand-navy">{hub.name}</p>
                  <p className="text-xs text-brand-muted">{hub.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
