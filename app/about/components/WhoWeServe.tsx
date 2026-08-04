import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import communitiesImage from "@/public/about/communities.png";
import enterprisesImage from "@/public/about/enterprises.png";
import startupsImage from "@/public/about/serve-startups.png";

const audiences: {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
}[] = [
  {
    title: "Startups & Innovators",
    description: "Agile tools for fast growth",
    image: startupsImage,
    alt: "A startup team celebrating together",
  },
  {
    title: "Enterprises & Governments",
    description: "Scalable platforms with compliance at the core",
    image: enterprisesImage,
    alt: "Enterprise colleagues in a working session",
  },
  {
    title: "Communities & Creators",
    description: "Empowering people through access and opportunity",
    image: communitiesImage,
    alt: "A diverse group of community members",
  },
];

export default function WhoWeServe() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-310 px-6">
        <h2 className="text-center text-2xl font-semibold text-black lg:text-3xl lg:leading-18">
          Who We Serve
        </h2>

        <ul className="mt-10 grid justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <li
              key={audience.title}
              className="flex w-full max-w-72 flex-col items-center gap-6"
            >
              <div className="relative aspect-288/384 w-full overflow-hidden rounded-3xl">
                <Image
                  src={audience.image}
                  alt={audience.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 288px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col items-center gap-3">
                <h3 className="text-center text-lg leading-8 font-semibold text-black lg:text-xl">
                  {audience.title}
                </h3>
                <p className="text-center text-lg leading-8 font-normal text-brand-grey lg:text-xl">
                  {audience.description}
                </p>
              </div>

              <Link
                href="/contact-us"
                className="text-lg leading-7 font-bold text-brand-teal underline lg:text-xl"
              >
                Enquire now
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
