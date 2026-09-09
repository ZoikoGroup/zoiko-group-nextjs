import Reveal from "./Reveal";
import { systemPillars } from "./data";

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-brand-teal">
            How Zoiko works
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-brand-deep sm:text-4xl">
            Built as a system, not a collection.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-muted">
            Zoiko combines independent operating leadership with shared
            technology, governance and capital discipline. Each business is
            expected to stand on its own; the Group integrates capabilities
            where integration creates leverage.
          </p>
          <blockquote className="mt-8 max-w-lg border-l-2 border-brand-teal pl-5 font-serif text-lg italic text-brand-deep">
            Centralize what creates leverage. Decentralize what creates
            speed.
          </blockquote>
        </Reveal>

        <ul className="border-t border-brand-divider">
          {systemPillars.map((pillar, index) => (
            <Reveal key={pillar.label} delay={index * 100}>
              <li className="grid gap-1 border-b border-brand-divider py-6 sm:grid-cols-[110px_1fr] sm:gap-6">
                <p className="text-xs font-bold tracking-widest text-brand-teal uppercase">
                  {pillar.label}
                </p>
                <div>
                  <h3 className="text-lg font-bold text-brand-deep">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    {pillar.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
