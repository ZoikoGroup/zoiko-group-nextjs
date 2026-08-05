import Image from "next/image";

import { whyWorkReasons } from "./careers-data";

export default function WhyWorkWithUs() {
  return (
    <section className="bg-linear-41 from-brand-gradient-from to-brand-gradient-to py-12 lg:py-16">
      <div className="mx-auto w-full max-w-310 px-6">
        <h2 className="text-center text-3xl font-semibold text-brand-skybg lg:text-4xl">
          Why Work With Us?
        </h2>

        {/* Hairlines sit between the columns, so every item but the first
            carries the divider on its leading edge. */}
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {whyWorkReasons.map(({ label, icon }, index) => (
            <li
              key={label}
              className={`flex flex-col items-center gap-5 px-6 ${
                index > 0 ? "lg:border-l lg:border-white/20" : ""
              }`}
            >
              <Image
                src={icon}
                alt=""
                aria-hidden="true"
                className="h-12 w-12 object-contain"
              />
              <span className="max-w-56 text-center text-base font-semibold text-white lg:text-lg">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
