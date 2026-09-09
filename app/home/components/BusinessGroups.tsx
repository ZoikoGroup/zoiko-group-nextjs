import Image from "next/image";
import Link from "next/link";

import Reveal from "./Reveal";
import { businessGroups } from "./data";

export default function BusinessGroups() {
  return (
    <section className="bg-brand-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <Reveal className="flex flex-nowrap items-start justify-between gap-4">
          <h2 className="max-w-2xl font-serif text-3xl font-semibold leading-tight text-brand-deep sm:text-4xl">
            Independent businesses. Shared standards. Long-term ownership.
          </h2>
          <Link
            href="/companies"
            className="shrink-0 text-sm font-semibold text-brand-teal underline underline-offset-4 transition-colors hover:text-brand-deep"
          >
            View All Businesses
          </Link>
        </Reveal>

        <ul className="mt-10 grid gap-6 lg:grid-cols-6">
          {businessGroups.map((group, index) => (
            <Reveal key={group.name} delay={index * 80} className={group.span}>
              <li
                className={`group relative overflow-hidden rounded-2xl shadow-card ${group.height}`}
              >
                <Image
                  src={group.image}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div />

                <Link
                  href={group.href}
                  className="absolute inset-0 flex flex-col justify-end p-6"
                >
                  <h3 className="text-lg font-bold text-white">{group.name}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/85">
                    {group.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-transform duration-300 group-hover:translate-x-1">
                    Learn more <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
