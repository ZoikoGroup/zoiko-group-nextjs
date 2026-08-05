import Image from "next/image";

import co2Image from "@/public/about/co2.png";

export default function Responsibility() {
  return (
    <section className="bg-white py-16 lg:px-30">
      <div className="mx-auto grid w-full max-w-310 items-center gap-10 px-6 lg:grid-cols-[auto_1fr] lg:gap-20">
        <Image
          src={co2Image}
          alt="A CO2 mark drawn with a tree"
          sizes="343px"
          className="h-auto w-full max-w-[343px] shrink-0"
        />

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-brand-charcoal lg:text-3xl lg:leading-[61px]">
            We don&apos;t just do business we build responsibly
          </h2>
          <p className="mx-auto mt-2 max-w-[537px] text-lg leading-10 font-normal text-brand-grey lg:text-xl">
            From carbon-conscious operations to inclusive hiring, Zoiko embeds
            ESG into every layer of the company.
          </p>
        </div>
      </div>
    </section>
  );
}
