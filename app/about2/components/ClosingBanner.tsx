import Image from "next/image";

import Reveal from "./Reveal";

export default function ClosingBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      {/* Drop the skyline/globe silhouette photo into
          public/about2/closing-banner-bg.jpg to replace this placeholder. */}
      <Image
        src="/about2/closing-banner-bg.webp"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-deep/50" />

      <Reveal className="relative mx-auto flex min-h-[320px] max-w-4xl items-center justify-center px-6 py-50 text-center sm:px-8">
        <p className="text-lg font-bold leading-relaxed text-white sm:text-xl">
          Building technology for a more intelligent world.
          <br />
          From Sacramento to the world.
        </p>
      </Reveal>
    </section>
  );
}
