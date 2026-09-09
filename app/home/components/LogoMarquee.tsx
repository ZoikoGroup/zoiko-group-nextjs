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

/**
 * Renders as a plain, transparent marquee — no section wrapper or background
 * of its own. It's meant to sit absolutely inside Hero, directly over the
 * cream band already baked into the bottom of hero-bg.webp, so there's no
 * seam between the two.
 */
export default function LogoMarquee() {
  return (
    <ul
      aria-label="Zoiko Group brands"
      className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]"
    >
      {[0, 1].map((run) =>
        brands.map((brand) => (
          <li
            key={`${run}-${brand.name}`}
            className="shrink-0 px-6 sm:px-10"
            aria-hidden={run === 1}
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              className="h-7 w-auto sm:h-8"
            />
          </li>
        )),
      )}
    </ul>
  );
}
