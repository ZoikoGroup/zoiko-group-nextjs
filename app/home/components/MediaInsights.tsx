import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import interviewsIcon from "@/public/home/Executive-Interviews.png";
import pressIcon from "@/public/home/Press-Centre.png";
import socialFeedIcon from "@/public/home/Social-Feed.png";
import insightsIcon from "@/public/home/Zoiko-Insights.png";
import mediaImage from "@/public/home/media-insights.png";

/* Listed but not linked — these channels have no page yet. Give each one an
   href once its page exists. */
const channels: {
  label: string;
  icon: StaticImageData;
}[] = [
  { label: "Press Centre", icon: pressIcon },
  { label: "Zoiko Insights", icon: insightsIcon },
  { label: "Executive Interviews", icon: interviewsIcon },
  { label: "Social Feed", icon: socialFeedIcon },
];

export default function MediaInsights() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-2xl font-bold text-black lg:text-3xl">
            Media &amp; Insights
          </h2>

          <ul className="mt-8 space-y-4">
            {channels.map(({ label, icon }) => (
              <li
                key={label}
                className="flex items-center gap-4 rounded-xl bg-white px-5 py-4 shadow-card"
              >
                <Image
                  src={icon}
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 object-contain"
                />
                <span className="text-base text-brand-muted">{label}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/press"
            className="mt-10 inline-block rounded-full border border-brand-navy px-8 py-3 text-base font-semibold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
          >
            Stay Informed
          </Link>
        </div>

        <Image
          src={mediaImage}
          alt="A collage of Zoiko Group people, events and workplaces"
          sizes="(max-width: 1024px) 100vw, 560px"
          className="h-auto w-full rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}
