import Image from "next/image";
import Link from "next/link";

import Reveal from "./Reveal";
import { businessGroups } from "./data";

export default function BusinessGroups() {
  return (
    <section className="bg-brand-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight text-brand-deep sm:text-4xl">
            Independent businesses. Shared standards. Long-term ownership.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-brand-muted">
            The Group currently presents five principal operating divisions,
            supported by specialist healthcare and supply-chain companies —
            broad by sector, unified by a common technology foundation.
          </p>
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
                <div className="absolute inset-0 bg-linear-to-t from-brand-deep/90 via-brand-deep/30 to-transparent" />

                <Link
                  href={group.href}
                  className="absolute inset-0 flex flex-col justify-end p-6"
                >
                  <h3 className="text-lg font-bold text-white">{group.name}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/85">
                    {group.description}
                  </p>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
