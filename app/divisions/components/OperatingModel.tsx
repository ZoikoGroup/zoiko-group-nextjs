import Image from "next/image";

import operatingImage from "@/public/divisions/operating-model.png";

import { operatingModel } from "./divisions-data";

export default function OperatingModel() {
  return (
    <section className="bg-brand-deepteal py-16">
      <div className="mx-auto flex w-full max-w-310 flex-col gap-12 px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="relative aspect-[604/307] w-full overflow-hidden rounded-[30px]">
            <Image
              src={operatingImage}
              alt="Zoiko Group leaders collaborating across divisions"
              fill
              sizes="(max-width: 1024px) 100vw, 604px"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-5 py-7">
            <h2 className="text-3xl font-extrabold text-white capitalize lg:text-5xl lg:leading-[59px]">
              Our Operating Model
            </h2>
            <p className="text-lg leading-6 font-normal tracking-wide text-white capitalize lg:text-xl">
              Zoiko Group&apos;s divisions operate with:
            </p>
          </div>
        </div>

        <ol className="grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
          {operatingModel.map((item, index) => (
            <li
              key={item}
              className="flex flex-col gap-6 rounded-[30px] bg-white p-9"
            >
              <span className="text-3xl leading-10 font-extrabold text-brand-light capitalize lg:text-4xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-lg leading-7 font-normal text-brand-charcoal lg:text-xl">
                {item}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
