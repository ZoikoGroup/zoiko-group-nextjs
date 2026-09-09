import Reveal from "./Reveal";
import { trustPoints } from "./data";

export default function TrustInfrastructure() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
            Trust is infrastructure.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-brand-muted">
            Zoiko treats governance as operating infrastructure rather than
            an administrative afterthought — aligned with the OECD
            Principles of Corporate Governance and benchmarked against
            international best practice.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {trustPoints.map((point, index) => (
            <Reveal key={point} delay={index * 60}>
              <li className="h-full rounded-xl border border-brand-border px-6 py-5 text-sm font-semibold leading-relaxed text-brand-deep transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal hover:shadow-card">
                {point}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
