import Image from "next/image";

import { deiCommitments } from "./careers-data";

export default function DeiCommitments() {
  return (
    <section className="bg-white pb-14 lg:pb-20">
      <div className="mx-auto w-full max-w-[1319px] px-6">
        <div className="rounded-3xl bg-linear-46 from-brand-gradient-from to-brand-gradient-to px-6 py-12 lg:px-16">
          <h2 className="text-center text-2xl font-semibold text-white capitalize lg:text-4xl lg:leading-13">
            Our Global DEI Commitments Include
          </h2>

          <ul className="mt-10 grid gap-6 lg:grid-cols-3">
            {deiCommitments.map(({ label, icon }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-6 rounded-[20px] px-8 py-12 outline outline-white"
              >
                <Image
                  src={icon}
                  alt=""
                  aria-hidden="true"
                  className="size-14 object-contain"
                />
                <span className="text-center text-base font-normal text-white capitalize lg:text-xl lg:leading-8">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
