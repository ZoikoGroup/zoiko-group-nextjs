import Image from "next/image";

export default function OperateGlobally() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-6 lg:grid-cols-[616px_1fr]">
        <p className="max-w-[580px]">
          <span className="text-3xl leading-9 font-semibold text-brand-nearblack lg:text-5xl">
            We operate globally
          </span>{" "}
          <span className="text-lg leading-9 font-semibold text-brand-nearblack/60 lg:text-xl">
            with a local mindset and purpose-driven values ensuring every market
            benefits from trusted, relevant, and sustainable innovation.
          </span>
        </p>

        {/* The globe overlapping the team photo is baked into this export. */}
        <Image
          src="/global-reach/operate-globally.png"
          alt="A globe resting on a mossy surface beside Zoiko Group colleagues holding a world map"
          width={577}
          height={288}
          className="h-auto w-full max-w-[577px]"
        />
      </div>
    </section>
  );
}
