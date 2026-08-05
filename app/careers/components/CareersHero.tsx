import Image from "next/image";

import heroImage from "@/public/careers/hero.png";

export default function CareersHero() {
  return (
    <section className="bg-brand-skybg py-14 lg:py-20">
      <div className="mx-auto grid w-full max-w-310 items-center gap-10 px-6 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <h2 className="text-2xl font-semibold text-brand-zinc800 lg:text-3xl lg:leading-[51px]">
            Engineer the Future | Empower the World | Grow with Zoiko Group
          </h2>
          <p className="mt-6 text-base leading-8 font-light text-brand-charcoal lg:text-xl">
            At Zoiko Group, we believe that business can be a force for good
            &mdash; and that talented people are the heart of that
            transformation. Across our portfolio of companies &mdash; spanning
            AI, technology, telecommunications, digital media, financial
            services, consumer goods and social impact brands.
          </p>
        </div>

        <div className="relative aspect-[478/345] w-full overflow-hidden rounded-[10px]">
          <Image
            src={heroImage}
            alt="Zoiko Group colleagues standing together in an office"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 478px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
