import Image from "next/image";

import type { Division, FocusGroup } from "./divisions-data";

/** Whole class strings so Tailwind's scanner picks them up. */
const gridColumns: Record<FocusGroup["columns"], string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  5: "sm:grid-cols-3 lg:grid-cols-5",
};

export default function DivisionSection({ division }: { division: Division }) {
  const photo = (
    <div className="relative aspect-[590/403] w-full overflow-hidden rounded-[30px]">
      <Image
        src={division.image}
        alt={division.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 590px"
        className="object-cover"
      />
    </div>
  );

  const copy = (
    <div>
      {division.eyebrow && (
        <p className="text-sm leading-6 font-bold tracking-wide text-brand-light uppercase">
          {division.eyebrow}
        </p>
      )}
      <h2 className="text-xl font-semibold text-black capitalize lg:leading-[59px]">
        {division.title}
      </h2>
      <p className="text-base leading-9 font-normal text-brand-grey lg:text-lg">
        {division.president}
      </p>
      <p className="mt-1 text-base leading-9 font-normal text-brand-grey lg:text-lg">
        {division.intro}
      </p>

      <p className="mt-6 text-base leading-9 font-bold text-brand-dark lg:text-lg">
        Strategic Priorities:
      </p>
      <ul className="list-disc pl-5">
        {division.priorities.map((priority) => (
          <li
            key={priority}
            className="text-base leading-9 font-normal text-brand-grey lg:text-lg"
          >
            {priority}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="bg-white py-12">
      <div className="mx-auto w-full max-w-310 px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {division.imageSide === "left" ? (
            <>
              {photo}
              {copy}
            </>
          ) : (
            <>
              {/* Copy first in the DOM so it reads before the photo on mobile,
                  then swapped to the right-hand column at lg. */}
              <div className="lg:order-2">{photo}</div>
              <div className="lg:order-1">{copy}</div>
            </>
          )}
        </div>

        {division.focusGroups.map((group) => (
          <div key={group.label} className="mt-4">
            <h3 className="text-center text-lg leading-[59px] font-semibold text-black/60 uppercase lg:text-xl">
              {group.label}
            </h3>
            <ul className={`grid gap-7 ${gridColumns[group.columns]}`}>
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-center rounded-[30px] bg-brand-skybg p-9 text-center text-lg leading-7 font-extrabold text-brand-teal lg:text-xl"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
