import Image from "next/image";

import structureImage from "@/public/divisions/structure.png";

const enablers = [
  "Technology-first leadership",
  "Cross-industry innovation",
  "Global scalability",
  "Responsible, sustainable growth",
];

export default function DivisionalStructure() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto grid w-full max-w-310 items-center gap-14 px-6 lg:grid-cols-2">
        <div className="relative aspect-[590/506] w-full overflow-hidden rounded-[30px]">
          <Image
            src={structureImage}
            alt="A leadership team reviewing the divisional structure"
            fill
            sizes="(max-width: 1024px) 100vw, 590px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold text-black capitalize lg:text-3xl lg:leading-[59px]">
              Our divisional structure enables
            </h2>
            <p className="text-base leading-6 font-normal text-brand-light">
              Each division operates with dedicated leadership and P&amp;L
              responsibility — empowered to drive innovation, customer impact,
              and long-term value while benefiting from Zoiko Group&apos;s
              shared services, governance, and strategic resources.
            </p>
          </div>

          <ul className="grid gap-7 sm:grid-cols-2">
            {enablers.map((enabler) => (
              <li
                key={enabler}
                className="flex items-center justify-center rounded-[30px] bg-brand-skybg p-9 text-center text-lg leading-7 font-semibold text-brand-teal lg:text-xl"
              >
                {enabler}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
