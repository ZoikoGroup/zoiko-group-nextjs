import Image from "next/image";

import cultureImage from "@/public/careers/zoiko-group-manager.png";

import { journeyBenefits } from "./careers-data";

export default function PurposeJourney() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto grid w-full max-w-310 gap-12 px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div>
          <h2 className="max-w-[619px] text-2xl font-semibold text-black lg:text-3xl">
            This is more than a career. It is a purpose-driven journey to
            engineer the future.
          </h2>

          <ul className="mt-10 space-y-7">
            {journeyBenefits.map(({ title, description, icon }) => (
              <li key={title} className="flex items-start gap-5">
                <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-brand-surface lg:size-24">
                  <Image
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    className="size-7 object-contain lg:size-9"
                  />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-brand-teal">
                    {title}
                  </h3>
                  <p className="mt-1 text-base leading-6 font-light text-black">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[468/674] w-full overflow-hidden rounded-xl">
          <Image
            src={cultureImage}
            alt="A Zoiko Group manager reviewing notes with a colleague in a shared workspace"
            fill
            sizes="(max-width: 1024px) 100vw, 468px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
