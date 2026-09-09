import Link from "next/link";

import Reveal from "./Reveal";
import { researchCards } from "./data";

export default function ResearchFrontiers() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-brand-teal">
            Research &amp; Frontiers
          </p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl font-semibold leading-tight text-brand-deep sm:text-4xl">
            Research the future. Productize selectively.
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {researchCards.map((card, index) => (
            <Reveal key={card.name} delay={index * 100}>
              <li className="h-full rounded-2xl border border-brand-border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal hover:shadow-card">
                <h3 className="font-serif text-xl font-semibold text-brand-deep">
                  {card.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="mt-6 inline-block rounded-full border border-brand-navy px-6 py-2.5 text-sm font-semibold text-brand-navy transition-colors duration-300 hover:bg-brand-navy hover:text-white"
                >
                  {card.ctaLabel}
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
