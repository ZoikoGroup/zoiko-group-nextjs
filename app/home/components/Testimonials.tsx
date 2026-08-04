"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";

import josephAvatar from "@/public/home/Joseph.png";
import rachelAvatar from "@/public/home/Rachel.png";
import roniAvatar from "@/public/home/Roni.png";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: StaticImageData;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Zoiko's deep understanding of both UK compliance and U.S. regulations made our cross-border launch seamless.",
    name: "Rachel",
    role: "CFO, OrionTech Europe",
    avatar: rachelAvatar,
  },
  {
    quote:
      "Their local insights helped us navigate regional tax laws, while their global structure enabled real-time expansion.",
    name: "Roni",
    role: "Managing Director, Terra Link Asia",
    avatar: roniAvatar,
  },
  {
    quote:
      "From London to Shenzhen, Zoiko offered consistent support with impressive cultural and commercial sensitivity.",
    name: "Joseph",
    role: "COO, Horizon Supply Group",
    avatar: josephAvatar,
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null);

  // Scroll by exactly one card so the snap points always line up.
  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild;
    if (!track || !card) return;

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * (card.clientWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-linear-to-br from-[#247780] to-[#134E6A] py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="flex items-center justify-between gap-6">
          <h2 className="text-2xl font-bold text-white lg:text-3xl">
            Trusted Worldwide
          </h2>

          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-teal transition-opacity hover:opacity-80"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-teal transition-opacity hover:opacity-80"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.name}
              className="w-full shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            >
              <figure className="flex h-full flex-col justify-between rounded-2xl bg-white p-7">
                <blockquote className="text-base leading-relaxed text-brand-ink">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <Image
                    src={testimonial.avatar}
                    alt=""
                    aria-hidden="true"
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold text-brand-navy">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-brand-muted">
                      {testimonial.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
