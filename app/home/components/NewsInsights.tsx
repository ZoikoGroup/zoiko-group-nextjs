import Image from "next/image";
import Link from "next/link";

import Reveal from "./Reveal";
import { featuredNews, secondaryNews } from "./data";

export default function NewsInsights() {
  return (
    <section className="bg-brand-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-brand-deep sm:text-4xl">
            Latest from Zoiko.
          </h2>
          <Link
            href="/press"
            className="text-sm font-semibold text-brand-teal underline underline-offset-4 transition-colors hover:text-brand-deep"
          >
            View All Newsroom
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <Link href="/press" className="group block">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-80">
                <Image
                  src={featuredNews.image}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-xs font-semibold tracking-wide text-brand-teal uppercase">
                {featuredNews.category}
              </p>
              <h3 className="mt-2 text-xl font-bold text-brand-deep transition-colors group-hover:text-brand-teal">
                {featuredNews.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-brand-muted">
                {featuredNews.description}
              </p>
              <p className="mt-3 text-xs text-brand-light">{featuredNews.date}</p>
            </Link>
          </Reveal>

          <ul className="flex flex-col gap-6">
            {secondaryNews.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <li>
                  <Link href="/press" className="group flex gap-3">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-20">
                      <Image
                        src={item.image}
                        alt=""
                        aria-hidden="true"
                        fill
                        sizes="80px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-brand-teal uppercase">
                        {item.category}
                      </p>
                      <h3 className="mt-1 text-base font-bold text-brand-deep transition-colors group-hover:text-brand-teal">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs text-brand-light">{item.date}</p>
                    </div>
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
