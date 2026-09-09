import Image from "next/image";
import Link from "next/link";

import Reveal from "./Reveal";
import { trustLinks } from "./data";

export default function TrustGovernance() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep py-20 sm:py-24 lg:py-50">
      <Image
        src="/home/trust-governance-bg.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-[#fff]">
            Governance &amp; trust
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Trust is infrastructure.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/80">
            Zoiko combines business-unit accountability with Group-level
            oversight of governance, risk, security, responsible AI, capital
            allocation and corporate standards.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/corporate-governance"
              className="rounded-full bg-brand-teal px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deepteal"
            >
              Governance &amp; Responsibility
            </Link>
            <Link
              href="/leadership"
              className="text-sm font-semibold text-white underline underline-offset-4 transition-colors hover:text-brand-teal"
            >
              Leadership
            </Link>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <ul className="grid gap-x-8 divide-y divide-white/15 sm:grid-cols-2 sm:divide-y-0">
            {trustLinks.map((link) => (
              <li key={link.label} className="border-t border-white/15 py-4 sm:py-5">
                <Link
                  href={link.href}
                  className="group flex items-center justify-between gap-3 text-sm font-semibold text-white transition-colors hover:text-brand-teal"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
