import Image from "next/image";

export default function PortfolioBanner() {
  return (
    <section className="bg-white">
      {/* 320px banner; the photo starts 109px before it ends. */}
      <div className="bg-linear-46 from-brand-gradient-from to-brand-gradient-to pt-16 pb-36">
        <div className="mx-auto w-full max-w-310 px-6 text-center">
          <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl lg:leading-13">
            Portfolio
          </h1>
          <p className="mx-auto mt-2 max-w-[1100px] text-lg leading-9 font-semibold text-white lg:text-2xl">
            A World-Class Portfolio — Engineering Innovation, Growth, and Global
            Impact
          </p>
        </div>
      </div>

      {/* Padding on the outer wrapper so the photo itself measures 1182px. */}
      <div className="-mt-[109px] px-6">
        <div className="relative mx-auto aspect-4/3 w-full max-w-[1182px] overflow-hidden rounded-[1px] outline outline-[6px] outline-white sm:aspect-[1182/546]">
          <Image
            src="/portfolio/hero.png"
            alt="The Zoiko Group team gathered in their workspace"
            fill
            priority
            sizes="(max-width: 1182px) 100vw, 1182px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
