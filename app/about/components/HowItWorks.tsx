import Reveal from "./Reveal";
import { systemPillars } from "./data";

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
            Built as a system, not a collection.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-brand-muted">
            We combine the capital discipline of a diversified holding
            company with the engineering speed of a platform business.
            Operating divisions have dedicated leadership and P&amp;L
            responsibility, while the Group provides common governance,
            technology, capital-allocation discipline and strategic
            infrastructure.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <div className="grid overflow-hidden rounded-xl border border-brand-border sm:grid-cols-2">
            <div className="flex items-center bg-brand-deep px-6 py-6 text-sm font-semibold text-white">
              Operating principle
            </div>
            <div className="flex items-center px-6 py-6 text-sm leading-relaxed text-brand-deep">
              Centralize what creates leverage. Decentralize what creates
              speed.
            </div>
          </div>
        </Reveal>

        <ul className="mt-10 grid gap-y-10 divide-brand-border border-t border-b border-brand-border sm:grid-cols-3 sm:divide-x sm:gap-y-0">
          {systemPillars.map((pillar, index) => {
            const isFirst = index === 0;
            const isLast = index === systemPillars.length - 1;
            return (
              <Reveal key={pillar.label} delay={index * 100}>
                <li
                  className={`h-full px-6 py-10 ${isFirst ? "sm:pl-0" : ""} ${
                    isLast ? "sm:pr-0" : ""
                  }`}
                >
                  <p className="text-xs font-bold tracking-widest text-brand-teal uppercase">
                    {pillar.label}
                  </p>
                  <h3 className="mt-3 text-lg font-bold text-brand-deep">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                    {pillar.description}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
