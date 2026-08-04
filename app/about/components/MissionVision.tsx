import Image from "next/image";
import Link from "next/link";

import missionImage from "@/public/about/mission.png";

export default function MissionVision() {
  return (
    <section className="bg-linear-46 from-brand-gradient-from to-brand-gradient-to">
      <div className="mx-auto grid w-full max-w-310 items-center gap-10 px-6 py-14 lg:grid-cols-[452px_1fr] lg:gap-20">
        <div>
          <h2 className="text-2xl font-semibold text-white capitalize lg:text-3xl lg:leading-13">
            Our Mission &amp; Vision
          </h2>
          <p className="mt-4 text-lg leading-10 font-normal text-white lg:text-xl">
            To deliver world-class solutions that balance economic performance
            with social progress and digital transformation. A future where
            human potential is amplified by responsible enterprise, global
            collaboration, and breakthrough technologies.
          </p>
          <Link
            href="/contact-us"
            className="mt-10 inline-flex h-14 items-center rounded-[56px] bg-white px-14 py-4 text-lg leading-7 font-semibold text-brand-deep outline outline-2 outline-brand-deep/10 lg:text-xl"
          >
            Contact Us
          </Link>
        </div>

        <Image
          src={missionImage}
          alt="An upward growth arrow representing Zoiko Group's mission"
          sizes="(max-width: 1024px) 100vw, 758px"
          className="h-auto w-full rounded-lg bg-white"
        />
      </div>
    </section>
  );
}
