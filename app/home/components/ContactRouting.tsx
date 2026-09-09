import Link from "next/link";

import Reveal from "./Reveal";
import { contactRoutes } from "./data";

// Rendered as two explicit rows of three so each row's divider (lg:divide-x)
// only falls between its own three cards, not across the wrap.
const rows = [contactRoutes.slice(0, 3), contactRoutes.slice(3, 6)];

export default function ContactRouting() {
  return (
    <section className="bg-brand-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-brand-teal">
            Contact routing
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-brand-deep sm:text-4xl">
            Find the right Zoiko team.
          </h2>
        </Reveal>

        <div className="mt-10 overflow-hidden rounded-2xl border border-brand-divider bg-white">
          {rows.map((row, rowIndex) => (
            <ul
              key={rowIndex}
              className={`grid sm:grid-cols-2 lg:grid-cols-3 lg:divide-x lg:divide-brand-cream ${
                rowIndex > 0 ? "border-t border-brand-cream" : ""
              }`}
            >
              {row.map((route, index) => (
                <Reveal key={route.label} delay={(rowIndex * 3 + index) * 60}>
                  <li className="h-full p-7 transition-colors duration-300 hover:bg-brand-cream/40">
                    <h3 className="text-base font-bold text-brand-deep">
                      {route.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                      {route.description}
                    </p>
                    <Link
                      href={route.href}
                      className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal"
                    >
                      {route.ctaLabel}
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
