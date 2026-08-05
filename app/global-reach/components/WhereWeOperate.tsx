import Image from "next/image";

import { regions, type Region } from "./regions-data";

/**
 * One leg of the dashed serpentine that links the cards down the page. Each leg
 * runs from the card's vertical centre to the middle of the 64px gap, where it
 * meets the opposite leg on the neighbouring card. Decorative only.
 *
 * The dashes are drawn with repeating gradients rather than `border-dashed`,
 * because the browser ties border dash length to border width — far shorter
 * than the long dashes in the Figma.
 */
function Connector({
  side,
  direction,
}: {
  side: "left" | "right";
  direction: "up" | "down";
}) {
  const sideOffset = side === "left" ? "-left-16" : "-right-16";
  const run =
    direction === "down" ? "top-1/2 -bottom-8" : "-top-8 h-[calc(50%+2rem)]";

  return (
    <div aria-hidden="true" className="pointer-events-none hidden lg:block">
      <span
        className={`absolute w-0.5 bg-[repeating-linear-gradient(to_bottom,#ffffff66_0_20px,transparent_20px_34px)] ${sideOffset} ${run}`}
      />
      <span
        className={`absolute top-1/2 h-0.5 w-16 bg-[repeating-linear-gradient(to_right,#ffffff66_0_20px,transparent_20px_34px)] ${sideOffset}`}
      />
    </div>
  );
}

function RegionCard({
  region,
  connectUp,
  connectDown,
}: {
  region: Region;
  connectUp?: "left" | "right";
  connectDown?: "left" | "right";
}) {
  const flags = (
    <ul className="flex flex-wrap items-start justify-center gap-8 lg:gap-14">
      {region.countries.map((country) => (
        <li key={country.name} className="flex flex-col items-center gap-2">
          <Image
            src={country.flag}
            alt=""
            aria-hidden="true"
            width={128}
            height={128}
            className="h-32 w-32 rounded-full object-cover"
          />
          <span className="text-center text-lg leading-8 font-semibold text-white capitalize lg:text-xl">
            {country.name}
          </span>
        </li>
      ))}
    </ul>
  );

  const focus = (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg leading-8 font-semibold text-white/50 lg:text-xl">
        Strategic Focus:
      </h3>
      <ul className="list-disc space-y-1 pl-5 text-base leading-6 font-normal text-white">
        {region.focus.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="relative rounded-3xl border-2 border-white/40 px-6 pt-14 pb-8 lg:px-12">
      {connectUp && <Connector side={connectUp} direction="up" />}
      {connectDown && <Connector side={connectDown} direction="down" />}

      {/* Pill label straddles the top border */}
      <span className="absolute -top-6 left-1/2 flex h-12 -translate-x-1/2 items-center rounded-[34px] bg-white px-8 text-lg leading-8 font-semibold whitespace-nowrap text-brand-cyan800 uppercase lg:text-xl">
        {region.label}
      </span>

      <div className="grid items-center gap-10 lg:grid-cols-2">
        {region.flagsSide === "left" ? (
          <>
            {flags}
            {focus}
          </>
        ) : (
          <>
            {/* Focus reads first on mobile, then swaps to the left at lg. */}
            <div className="lg:order-2">{flags}</div>
            <div className="lg:order-1">{focus}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default function WhereWeOperate() {
  return (
    <section className="overflow-hidden bg-linear-to-br from-brand-cyan800 to-brand-gradient-to py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1240px] px-6">
        <h2 className="text-center text-3xl font-semibold text-white capitalize lg:text-4xl lg:leading-13">
          Where We Operate
        </h2>

        {/* lg:px-16 reserves the gutter the dashed connectors live in. */}
        <div className="mt-16 flex flex-col gap-16 lg:px-16">
          {regions.map((region, index) => {
            // The serpentine alternates sides: left, right, left down the page.
            const gapSide = (i: number) => (i % 2 === 0 ? "left" : "right");

            return (
              <RegionCard
                key={region.id}
                region={region}
                connectUp={index > 0 ? gapSide(index - 1) : undefined}
                connectDown={
                  index < regions.length - 1 ? gapSide(index) : undefined
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
