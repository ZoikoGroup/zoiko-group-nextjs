import Image, { type StaticImageData } from "next/image";

import vision1 from "@/public/about/vision-1.png";
import vision2 from "@/public/about/vision-2.png";
import vision3 from "@/public/about/vision-3.png";
import vision4 from "@/public/about/vision-4.png";
import vision5 from "@/public/about/vision-5.png";

/**
 * Left and right columns stack two 4:3 tiles (384x288 in Figma); the centre one
 * is portrait (384x600) and spans both rows. Grid auto-placement lands them at
 * (1,1) (1,2 spanning) (1,3) (2,1) (2,3).
 */
const collage: { src: StaticImageData; alt: string; tall?: boolean }[] = [
  { src: vision1, alt: "Zoiko Group colleagues at work" },
  { src: vision2, alt: "A Zoiko Group team member on a call", tall: true },
  { src: vision3, alt: "Volunteers planting trees" },
  { src: vision4, alt: "A Zoiko Group team meeting" },
  { src: vision5, alt: "A customer enjoying a Zoiko service" },
];

export default function VisionHeader() {
  return (
    <section className="bg-white">
      {/* Banner is 320px tall; the collage starts 89px before it ends. */}
      <div className="bg-linear-46 from-brand-gradient-from to-brand-gradient-to pt-16 pb-32">
        <div className="mx-auto w-full max-w-310 px-6 text-center">
          <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl lg:leading-13">
            The Zoiko Vision
          </h1>
          <p className="mt-4 text-xl font-normal text-white lg:text-3xl lg:leading-[59px]">
            Redefining Enterprise | Empowering Society | Engineering the Future
          </p>
        </div>
      </div>

      <div className="pb-14">
        <div className="mx-auto -mt-[89px] w-full max-w-310 px-6">
          <div className="grid grid-cols-2 gap-x-[42px] gap-y-[31px] sm:grid-cols-3 sm:grid-rows-2">
            {collage.map((item) => (
              <div
                key={item.alt}
                className={`relative overflow-hidden rounded-[19px] outline outline-1 outline-black/20 shadow-[8px_6px_18.5px_0px_rgba(0,0,0,0.13)] ${
                  item.tall
                    ? "aspect-384/600 sm:row-span-2 sm:aspect-auto"
                    : "aspect-4/3"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 384px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
