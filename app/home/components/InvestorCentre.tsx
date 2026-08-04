import Image from "next/image";
import Link from "next/link";

import investorImage from "@/public/home/investor-center.png";
import { CheckCircleIcon } from "./icons";

const highlights = [
  "Quarterly & Annual Reports",
  "Corporate Governance Framework",
  "ESG & Sustainability Disclosures",
  "Strategic Roadmaps",
];

export default function InvestorCentre() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Image
          src={investorImage}
          alt="Zoiko Group leadership team meeting in a boardroom"
          sizes="(max-width: 1024px) 100vw, 560px"
          className="h-auto w-full rounded-2xl object-cover"
        />

        <div>
          <h2 className="text-2xl font-bold text-black lg:text-3xl">
            Investor Centre
          </h2>

          <ul className="mt-8 space-y-5">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-4">
                <CheckCircleIcon className="h-6 w-6 shrink-0 text-brand-deep" />
                <span className="text-base text-brand-muted">{highlight}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/investor-relations"
            className="mt-10 inline-block rounded-full border border-brand-navy px-8 py-3 text-base font-semibold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
          >
            Partner with Us
          </Link>
        </div>
      </div>
    </section>
  );
}
