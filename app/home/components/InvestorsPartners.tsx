import Link from "next/link";

import Reveal from "./Reveal";
import { partnerCards } from "./data";

export default function InvestorsPartners() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-brand-teal">
            Investors &amp; strategic partners
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-brand-deep sm:text-4xl">
            Long-term capital for long-term company building.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-muted">
            Zoiko Group is privately held and engages selectively with
            institutional investors, strategic partners and long-term
            capital where strategic fit is clear. Our approach combines
            operating accountability, disciplined capital allocation and
            long-horizon technology investment.
          </p>
        </Reveal>

        <div className="mt-10 overflow-hidden rounded-2xl border border-brand-border">
          <ul className="grid divide-y divide-brand-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {partnerCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 100} className="h-full">
                <li className="h-full p-8">
                  <h3 className="text-lg font-bold text-brand-deep">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                    {card.description}
                  </p>
                  <Link
                    href={card.href}
                    className="mt-6 inline-block rounded-full bg-brand-navy px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep"
                  >
                    {card.ctaLabel}
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
