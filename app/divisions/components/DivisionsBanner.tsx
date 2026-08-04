import Image from "next/image";

import heroImage from "@/public/divisions/hero.png";

export default function DivisionsBanner() {
  return (
    <section className="bg-white">
      {/* 320px banner; the hero image starts 89px before it ends. */}
      <div className="bg-linear-46 from-brand-gradient-from to-brand-gradient-to pt-16 pb-32">
        <div className="mx-auto w-full max-w-310 px-6 text-center">
          <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl lg:leading-13">
            Powering Progress Through Purpose-Built Divisions
          </h1>
          <p className="mx-auto mt-4 max-w-[1100px] text-base leading-9 font-normal text-white lg:text-lg">
            Each division of Zoiko Group is engineered to lead in its field —
            united by innovation, driven by impact, and committed to global
            excellence.
          </p>
        </div>
      </div>

      <div className="mx-auto -mt-[89px] w-full max-w-310 px-6">
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-[19px] sm:aspect-[1240/508] outline outline-[6px] outline-white">
          <Image
            src={heroImage}
            alt="A connected world map representing Zoiko Group's global divisions"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1240px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
