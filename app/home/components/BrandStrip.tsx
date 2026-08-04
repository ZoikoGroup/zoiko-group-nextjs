import Image, { type StaticImageData } from "next/image";

import zoikoAssure from "@/public/home/zoiko-assure.png";
import zoikoAxis from "@/public/home/zoiko-axis.png";
import zoikoEngineering from "@/public/home/zoiko-engineering.png";
import zoikoShield from "@/public/home/zoiko-shield.png";
import zoikoSocial from "@/public/home/zoiko-social.png";
import zoikoSuite from "@/public/home/zoiko-suite.png";
import zoikoTime from "@/public/home/zoiko-time.png";

const brands: { name: string; logo: StaticImageData }[] = [
  { name: "Zoiko Axis", logo: zoikoAxis },
  { name: "Zoiko Time", logo: zoikoTime },
  { name: "Zoiko Suite", logo: zoikoSuite },
  { name: "Zoiko Assure", logo: zoikoAssure },
  { name: "Zoiko Shield", logo: zoikoShield },
  { name: "Zoiko Social", logo: zoikoSocial },
  { name: "Zoiko Engineering", logo: zoikoEngineering },
];

export default function BrandStrip() {
  return (
    <section
      aria-label="Zoiko Group brands"
      className="overflow-hidden bg-white py-10"
    >
      {/* Two identical runs of the logos. Spacing comes from per-item padding
          rather than a flex gap, so translating by exactly -50% lands the
          second run where the first began and the loop is seamless. */}
      <ul className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
        {[0, 1].map((run) =>
          brands.map((brand) => (
            <li
              key={`${run}-${brand.name}`}
              className="shrink-0 px-8 sm:px-12"
              aria-hidden={run === 1}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                className="h-9 w-auto sm:h-10"
              />
            </li>
          )),
        )}
      </ul>
    </section>
  );
}
