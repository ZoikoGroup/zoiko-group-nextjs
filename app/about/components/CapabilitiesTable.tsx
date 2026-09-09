import Reveal from "./Reveal";
import { capabilities } from "./data";

export default function CapabilitiesTable() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
            Shared capabilities, group-wide leverage
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-brand-muted">
            Where technology, data and operating discipline create leverage
            across businesses, Zoiko builds it once and shares it.
          </p>
        </Reveal>

        <div className="mt-10 overflow-hidden rounded-xl border border-brand-border">
          <div className="grid grid-cols-1 gap-1 bg-brand-deep px-6 py-4 text-sm font-semibold text-white sm:grid-cols-[280px_1fr] sm:gap-6">
            <p>Capability</p>
            <p>How it creates leverage</p>
          </div>

          <ul>
            {capabilities.map((capability, index) => (
              <Reveal key={capability.name} delay={index * 60}>
                <li
                  className={`grid grid-cols-1 gap-1 px-6 py-5 transition-colors duration-300 hover:bg-brand-skybg sm:grid-cols-[280px_1fr] sm:gap-6 ${
                    index % 2 === 1 ? "bg-brand-cream" : "bg-white"
                  }`}
                >
                  <p className="font-bold text-brand-deep">{capability.name}</p>
                  <p className="text-sm leading-relaxed text-brand-muted">
                    {capability.leverage}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
