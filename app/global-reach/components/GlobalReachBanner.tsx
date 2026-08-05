import Image from "next/image";

export default function GlobalReachBanner() {
  return (
    <section className="bg-white">
      {/* 320px banner; the photo starts 89px before it ends. */}
      <div className="bg-linear-46 from-brand-gradient-from to-brand-gradient-to pt-16 pb-32">
        <div className="mx-auto w-full max-w-[1200px] px-6 text-center">
          <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl lg:leading-13">
            Our Global Reach
          </h1>
          <p className="mx-auto mt-4 max-w-[1100px] text-base leading-9 font-normal text-white lg:text-lg">
            Impacting locally, Zoiko Group is a diversified global enterprise
            building businesses, platforms, and brands that serve diverse
            markets, cultures, and communities across North America, Europe,
            Asia, and Africa.
          </p>
        </div>
      </div>

      {/* Padding on the outer wrapper so the photo itself measures 1182px. */}
      <div className="-mt-[89px] px-6">
        <div className="relative mx-auto aspect-4/3 w-full max-w-[1182px] overflow-hidden rounded-[1px] outline outline-[6px] outline-white sm:aspect-[1182/546]">
          <Image
            src="/global-reach/hero.png"
            alt="A globe criss-crossed with glowing network connections"
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
