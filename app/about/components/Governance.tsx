import Image, { type StaticImageData } from "next/image";

import gov1 from "@/public/about/gov-1.png";
import gov2 from "@/public/about/gov-2.png";
import gov3 from "@/public/about/gov-3.png";
import gov4 from "@/public/about/gov-4.png";
import gov5 from "@/public/about/gov-5.png";
import zoikoLogo from "@/public/about/logo.png";

const principles: { text: string; icon: StaticImageData }[] = [
  { text: "Strong and independent Board oversight", icon: gov1 },
  { text: "Responsible innovation and AI governance", icon: gov2 },
  { text: "Sustainable value creation and ESG leadership", icon: gov3 },
  {
    text: "Transparent engagement with shareholders and stakeholders",
    icon: gov4,
  },
  { text: "Active Board refreshment and succession planning", icon: gov5 },
];

function PrincipleCard({
  text,
  icon,
}: {
  text: string;
  icon: StaticImageData;
}) {
  return (
    <li className="flex flex-col items-center justify-center gap-4 rounded-2xl outline outline-1 outline-brand-teal/60 px-6 py-8 text-center">
      <Image
        src={icon}
        alt=""
        aria-hidden="true"
        className="h-16 w-auto object-contain"
      />
      <span className="text-center text-xl leading-10 font-semibold text-brand-slate lg:text-2xl">
        {text}
      </span>
    </li>
  );
}

export default function Governance() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto w-full max-w-310 px-6">
        <h2 className="text-center text-2xl font-semibold text-black lg:text-3xl lg:leading-18">
          Corporate Governance
        </h2>
        <p className="mx-auto mt-3 max-w-[1190px] text-center text-lg leading-8 font-normal text-brand-grey lg:text-xl">
          Zoiko Group&apos;s governance framework aligns with the OECD
          Principles of Corporate Governance and is continuously benchmarked
          against global best practices. Governance is a dynamic commitment –
          enabling Zoiko Group to operate with integrity, accountability, and
          global enterprise leadership.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.slice(0, 3).map((principle) => (
            <PrincipleCard key={principle.text} {...principle} />
          ))}

          <PrincipleCard {...principles[3]} />

          {/* Watermark sits between the two cards on the second row */}
          <li
            aria-hidden="true"
            className="hidden items-center justify-center lg:flex"
          >
            <Image
              src={zoikoLogo}
              alt=""
              className="h-auto w-full max-w-[359px] opacity-15"
            />
          </li>

          <PrincipleCard {...principles[4]} />
        </ul>
      </div>
    </section>
  );
}
