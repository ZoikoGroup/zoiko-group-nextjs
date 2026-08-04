import Image, { type StaticImageData } from "next/image";

import financialIcon from "@/public/home/Financial-Intelligence -Governance.png";
import technologyIcon from "@/public/home/Intelligent-Technology-Platforms.png";
import mobilityIcon from "@/public/home/Life Booking -Human-Mobility.png";
import mediaIcon from "@/public/home/Media-Impact-Storytelling.png";
import consumerIcon from "@/public/home/Sustainable-Consumer-Brands.png";
import telecomIcon from "@/public/home/Telecommunications-Connectivity.png";

type Solution = {
  title: string;
  brands: string[];
  icon: StaticImageData;
  /** The first card is highlighted on a white surface in the design. */
  featured?: boolean;
};

const solutions: Solution[] = [
  {
    title: "Intelligent Technology & Platforms",
    brands: [
      "ZoikoTime",
      "ZoikoNex",
      "ZoikoShield",
      "ZoikoPal",
      "ZoikoSocial",
      "DriverXtra",
    ],
    icon: technologyIcon,
    featured: true,
  },
  {
    title: "Telecommunications & Connectivity",
    brands: [
      "Zoiko Mobile USA",
      "Zoiko Mobile UK",
      "GoLite Mobile",
      "DriverX Mobile",
      "Zoiko Telecom",
    ],
    icon: telecomIcon,
  },
  {
    title: "Financial Intelligence & Governance",
    brands: ["Noxx & Co", "ZoikoSuite", "ZoikoAssure"],
    icon: financialIcon,
  },
  {
    title: "Life Booking & Human Mobility",
    brands: ["BookingOrbit"],
    icon: mobilityIcon,
  },
  {
    title: "Sustainable Consumer Brands",
    brands: ["NoxxChicken", "La Caribbean Taste"],
    icon: consumerIcon,
  },
  {
    title: "Media & Impact Storytelling",
    brands: ["Zoiko TV"],
    icon: mediaIcon,
  },
];

export default function Solutions() {
  return (
    <section className="bg-white py-12 lg:py-0">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="rounded-3xl bg-linear-to-br from-[#247780] to-[#124869] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <h2 className="text-center text-2xl font-semibold text-white lg:text-3xl">
            Our Solutions
          </h2>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <li
                key={solution.title}
                className={`flex flex-col items-center rounded-2xl px-6 py-8 text-center ${
                  solution.featured
                    ? "bg-white shadow-lg"
                    : "border border-white/30 bg-white/5"
                }`}
              >
                <Image
                  src={solution.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-14 w-auto"
                />
                <h3
                  className={`mt-5 text-lg font-semibold ${
                    solution.featured ? "text-brand-navy" : "text-white"
                  }`}
                >
                  {solution.title}
                </h3>
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    solution.featured ? "text-brand-muted" : "text-white/80"
                  }`}
                >
                  {solution.brands.join(" | ")}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
