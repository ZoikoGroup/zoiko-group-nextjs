import Image, { type StaticImageData } from "next/image";

import singaporeFlag from "@/public/about/Singapore.png";
import ukFlag from "@/public/about/london.png";
import usaFlag from "@/public/about/usa.png";

type Office = {
  city: string;
  region: string;
  kind: string;
  flag: StaticImageData;
};

const offices: Office[] = [
  {
    city: "Sacramento",
    region: "California, USA",
    kind: "GLOBAL HEADQUARTERS",
    flag: usaFlag,
  },
  { city: "Dover", region: "USA", kind: "GLOBAL HUBS", flag: usaFlag },
  { city: "Orlando", region: "USA", kind: "GLOBAL HUBS", flag: usaFlag },
  {
    city: "Mayfair London",
    region: "UK",
    kind: "GLOBAL HUBS",
    flag: ukFlag,
  },
  {
    city: "Marina Bay",
    region: "SINGAPORE",
    kind: "GLOBAL HUBS",
    flag: singaporeFlag,
  },
];

export default function GlobalOffices() {
  return (
    <section className="bg-brand-skybg py-14">
      <div className="mx-auto w-full max-w-310 px-6">
        <h2 className="text-center text-3xl font-semibold text-brand-charcoal capitalize lg:text-4xl lg:leading-13">
          Global Headquarters &amp; Key Offices
        </h2>

        {/* Items are sized by their own text rather than a fixed width, so the
            longest label ("GLOBAL HEADQUARTERS") stays on one line as in Figma. */}
        <ul className="mt-12 flex flex-wrap items-start justify-center gap-x-10 gap-y-10">
          {offices.map((office) => (
            <li
              key={`${office.city}-${office.region}`}
              className="text-center text-brand-charcoal/60 lg:whitespace-nowrap"
            >
              <Image
                src={office.flag}
                alt=""
                aria-hidden="true"
                className="mx-auto h-24 w-24 rounded-full border border-black/10 object-cover lg:h-36 lg:w-36"
              />
              <p className="mt-5 text-lg leading-9 font-normal lg:text-2xl">
                {office.city}
              </p>
              <p className="text-lg leading-9 font-normal lg:text-2xl">
                {office.region}
              </p>
              <p className="text-lg leading-9 font-semibold lg:text-2xl">
                {office.kind}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
