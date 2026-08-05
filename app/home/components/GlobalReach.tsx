import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import bookingOrbitIcon from "@/public/home/BookingOrbit.png";
import cardiffFlag from "@/public/home/Cardiff.png";
import driverXtraIcon from "@/public/home/DriverXtra.png";
import singaporeFlag from "@/public/home/Singapore.png";
import zoikoPayIcon from "@/public/home/Zoiko Pay.png";
import zoikoAssureIcon from "@/public/home/ZoikoAssure.png";
import zoikoNexIcon from "@/public/home/ZoikoNex.png";
import zoikoPalIcon from "@/public/home/ZoikoPal.png";
import zoikoShieldIcon from "@/public/home/ZoikoShield.png";
import zoikoSocialIcon from "@/public/home/ZoikoSocial.png";
import zoikoSuiteIcon from "@/public/home/ZoikoSuite.png";
import zoikoTimeIcon from "@/public/home/ZoikoTime.png";
import icon1 from "@/public/home/icon-1.png";
import icon10 from "@/public/home/icon-10.png";
import icon2 from "@/public/home/icon-2.png";
import icon3 from "@/public/home/icon-3.png";
import icon4 from "@/public/home/icon-4.png";
import icon5 from "@/public/home/icon-5.png";
import icon6 from "@/public/home/icon-6.png";
import icon7 from "@/public/home/icon-7.png";
import icon8 from "@/public/home/icon-8.png";
import icon9 from "@/public/home/icon-9.png";
import indiaFlag from "@/public/home/india.png";
import londonFlag from "@/public/home/london.png";
import mapImage from "@/public/home/map.png";
import usaFlag from "@/public/home/usa.png";

/** Decorative strip under the map, in the order supplied from Figma. */
const stripIcons: StaticImageData[] = [
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
];

type Location = {
  label: string;
  flag: StaticImageData;
  /**
   * Position of the teal marker already drawn into map.png, as a percentage of
   * the image box. Measured from the asset — re-measure if the map is redrawn.
   */
  left: string;
  top: string;
  /** Which side of the marker the label sits on, so labels don't collide. */
  placement: "above" | "below" | "left" | "right";
};

const locations: Location[] = [
  {
    label: "California, USA",
    flag: usaFlag,
    left: "8%",
    top: "48.4%",
    placement: "above",
  },
  {
    label: "Texas, USA",
    flag: usaFlag,
    left: "13.3%",
    top: "50%",
    placement: "below",
  },
  {
    label: "USA",
    flag: usaFlag,
    left: "19.2%",
    top: "41.2%",
    placement: "above",
  },
  {
    label: "London, UK",
    flag: londonFlag,
    left: "35.1%",
    top: "34.8%",
    placement: "above",
  },
  {
    label: "Cardiff, UK",
    flag: cardiffFlag,
    left: "35.1%",
    top: "37.9%",
    placement: "right",
  },
  {
    label: "India",
    flag: indiaFlag,
    left: "49%",
    top: "59.6%",
    placement: "above",
  },
  {
    label: "Singapore",
    flag: singaporeFlag,
    left: "55.6%",
    top: "70.8%",
    placement: "right",
  },
];

const placementClasses: Record<Location["placement"], string> = {
  above: "-translate-x-1/2 -translate-y-full -mt-2.5",
  below: "-translate-x-1/2 mt-2.5",
  left: "-translate-x-full -translate-y-1/2 -ml-2.5",
  right: "-translate-y-1/2 ml-2.5",
};

type Product = {
  name: string;
  tagline: string;
  /** Each brand's own site. Omitted where no site exists yet — that card
      renders as plain text rather than a link. */
  href?: string;
  icon: StaticImageData;
};

// Ordered to read left-to-right across the two-column grid.
const products: Product[] = [
  {
    name: "ZoikoTime",
    tagline: "Smarter Workdays",
    href: "https://zoikotime.com/",
    icon: zoikoTimeIcon,
  },
  {
    name: "ZoikoSuite",
    tagline: "Cross-border Accounting",
    href: "https://zoikosuite.com/",
    icon: zoikoSuiteIcon,
  },
  {
    name: "ZoikoNex",
    tagline: "Intelligent Billing",
    href: "https://www.zoikonex.com/",
    icon: zoikoNexIcon,
  },
  {
    name: "ZoikoAssure",
    tagline: "Enterprise Compliance",
    href: "https://zoikoassure.com/",
    icon: zoikoAssureIcon,
  },
  {
    name: "ZoikoShield",
    tagline: "Cyber Prediction",
    href: "https://zoikoshield.com/",
    icon: zoikoShieldIcon,
  },
  {
    name: "BookingOrbit",
    tagline: "Booking, Reimagined",
    icon: bookingOrbitIcon,
  },
  {
    name: "ZoikoPal",
    tagline: "Care That Remembers",
    href: "https://zoikopal.com/",
    icon: zoikoPalIcon,
  },
  {
    name: "DriverXtra",
    tagline: "Everything for the Road",
    href: "https://driverxtra.com/",
    icon: driverXtraIcon,
  },
  {
    name: "ZoikoSocial",
    tagline: "Where Animal Lovers Belong",
    href: "https://zoikosocial.com/",
    icon: zoikoSocialIcon,
  },
  {
    name: "Zoiko Pay",
    tagline: "Powering Intelligent Global Commerce",
    href: "https://zoikopay.com/",
    icon: zoikoPayIcon,
  },
];

function LocationChip({ location }: { location: Location }) {
  return (
    <span className="flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-brand-navy shadow-md">
      <Image
        src={location.flag}
        alt=""
        aria-hidden="true"
        className="h-4 w-4"
      />
      {location.label}
    </span>
  );
}

export default function GlobalReach() {
  return (
    <section className="bg-[#f5f9fe] py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <h2 className="text-center text-2xl font-bold text-brand-navy lg:text-3xl">
          Local expertise with Global perspective
        </h2>

        {/* Map with labelled offices — replaced by a plain list on small screens.
            The markers are part of map.png, so the labels are positioned to sit
            beside them rather than drawing pins of their own. */}
        <div className="mt-4 hidden w-full overflow-hidden md:block">
          {/* map.png carries ~29% empty canvas on its right, which pushes the
              continents off-centre. Shifting by half of that recentres the
              artwork; the labels ride along so they stay on their markers. */}
          <div className="relative translate-x-[14.5%]">
            <Image
              src={mapImage}
              alt="Map of Zoiko Group office locations"
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="h-auto w-full"
            />
            {locations.map((location) => (
              <div
                key={location.label}
                className={`absolute ${placementClasses[location.placement]}`}
                style={{ left: location.left, top: location.top }}
              >
                <LocationChip location={location} />
              </div>
            ))}
          </div>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-3 md:hidden">
          {locations.map((location) => (
            <li key={location.label}>
              <LocationChip location={location} />
            </li>
          ))}
        </ul>

        <ul
          aria-hidden="true"
          className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          {stripIcons.map((icon, index) => (
            <li key={index}>
              <Image src={icon} alt="" className="h-7 w-auto" />
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-[#6B6F7F]">
          At Zoiko Group, our roots are firmly planted in regional insight—our
          teams understand local markets, laws, and cultures. But our reach is
          global, with operations and impact spanning North America, the UK, and
          Asia. This dual perspective enables us to deliver regionally
          compliant, globally scalable solutions. Whether you&apos;re expanding,
          transforming, or adapting—we bring a worldview to your doorstep.
        </p>

        {/* Capped at the Figma width — at the full container the cards stretch
            far past their text and read as empty bars. */}
        <ul className="mx-auto mt-10 grid max-w-3xl gap-x-8 gap-y-5 sm:grid-cols-2">
          {products.map((product) => {
            const card = (
              <>
                <Image
                  src={product.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 object-contain"
                />
                <span className="text-sm text-brand-body">
                  <span className="font-semibold text-brand-sky">
                    {product.name}
                  </span>{" "}
                  – {product.tagline}
                </span>
              </>
            );
            const cardClass =
              "flex h-full items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3";

            return (
              <li key={product.name}>
                {product.href ? (
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${cardClass} transition-colors hover:border-brand-teal`}
                  >
                    {card}
                  </a>
                ) : (
                  <div className={cardClass}>{card}</div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex justify-center">
          <Link
            href="/global-reach"
            className="rounded-full border border-brand-navy bg-white px-8 py-3 text-base font-semibold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
          >
            Explore Our Global Reach
          </Link>
        </div>
      </div>
    </section>
  );
}
