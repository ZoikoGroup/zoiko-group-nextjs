import Image from "next/image";

import leadershipImage from "@/public/about/leadership.png";

export default function Leadership() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto grid w-full max-w-310 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-2xl font-semibold text-black lg:text-3xl lg:leading-18">
            Leadership &amp; Board of Directors
          </h2>
          <p className="mt-4 max-w-[672px] text-lg lg:text-justify leading-8 font-normal text-brand-grey lg:text-xl">
            Zoiko Group is led by a distinguished team of global corporate
            leaders and innovation champions. Founder &amp; Executive Chairman
            Lennox McLeod — a global corporate strategist and architect of
            enterprise growth — leads the Group&apos;s vision of responsible
            innovation, Board stewardship, and human-centered enterprise
            leadership. The Board of Directors provides independent, diverse
            oversight, supported by dynamic Board committees: Audit &amp; Risk,
            Corporate Governance &amp; Nominating, Compensation &amp; Human
            Capital, ESG &amp; Sustainability, and AI Ethics.
          </p>
        </div>

        <Image
          src={leadershipImage}
          alt="Zoiko Group's board of directors in session"
          sizes="(max-width: 1024px) 100vw, 560px"
          className="h-auto w-full rounded-lg"
        />
      </div>
    </section>
  );
}
