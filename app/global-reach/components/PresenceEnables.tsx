import Image from "next/image";

import { presencePoints } from "./regions-data";

export default function PresenceEnables() {
  return (
    <section className="bg-brand-skybg py-14">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <h2 className="text-center text-3xl font-semibold text-brand-gradient-to capitalize lg:text-4xl lg:leading-13">
          Our global presence enables us to
        </h2>

        {/* Figma rules the grid with hairlines: verticals between the three
            columns and a horizontal between the two rows. */}
        <ul className="mx-auto mt-10 grid max-w-[927px] sm:grid-cols-2 lg:grid-cols-3">
          {presencePoints.map((point, index) => (
            <li
              key={point.label}
              className={`flex flex-col items-center gap-4 px-6 py-10 ${
                index % 3 !== 2 ? "lg:border-r lg:border-black/10" : ""
              } ${index < 3 ? "lg:border-b lg:border-black/10" : ""}`}
            >
              <Image
                src={point.icon}
                alt=""
                aria-hidden="true"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="max-w-56 text-center text-base leading-7 font-semibold text-brand-zinc800/60 capitalize">
                {point.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
