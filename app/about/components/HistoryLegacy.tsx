import Image from "next/image";

import legacyBackdrop from "@/public/about/legency-bg.png";
import zoikoLogo from "@/public/about/logo.png";

const legacyPoints = [
  "Strong corporate governance and ethical leadership",
  "Responsible, human-centered innovation",
  "Sustainable value creation for shareholders and stakeholders",
  "Global citizenship and cross-cultural leadership",
];

export default function HistoryLegacy() {
  return (
    <section className="relative bg-[#6b5544] py-14">
      {/* Textured backdrop behind the card */}
      <Image
        src={legacyBackdrop}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative mx-auto w-full max-w-310 px-6">
        <div className="rounded-3xl bg-white/95 px-8 py-10 sm:px-12">
          <h2 className="text-center text-2xl font-semibold text-brand-charcoal capitalize lg:text-3xl lg:leading-13">
            Our History &amp; Legacy
          </h2>
          <p className="mt-6 text-lg leading-10 font-normal text-brand-grey lg:text-2xl">
            Founded by Lennox McLeod, Zoiko Group has evolved from
            entrepreneurial roots into an innovation-led, platform-based global
            enterprise with corporate governance and responsible leadership at
            its core. Zoiko Group remains committed to multi-generational enterprise leadership —
            with governance excellence and responsible innovation at the heart
            of its vision for sustainable global impact.
          </p>

          <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h3 className="text-2xl leading-12 font-semibold text-black lg:text-3xl">
                Our legacy is built on:
              </h3>
              <ul className="mt-2">
                {legacyPoints.map((point) => (
                  <li
                    key={point}
                    className="text-lg leading-12 font-normal text-brand-grey lg:text-xl"
                  >
                    - {point}
                  </li>
                ))}
              </ul>
            </div>

            <Image
              src={zoikoLogo}
              alt="Zoiko Group"
              className="h-auto w-full max-w-[359px] justify-self-center lg:justify-self-end"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
