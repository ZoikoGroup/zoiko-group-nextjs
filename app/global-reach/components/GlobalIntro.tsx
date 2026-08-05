const regionNames = [
  "North America",
  "United Kingdom & Europe",
  "Asia",
  "Africa",
];

export default function GlobalIntro() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-7 px-6 lg:px-16 xl:px-32">
        <p className="text-center text-lg leading-10 font-normal text-brand-nearblack lg:text-xl">
          We operate globally with a local mindset and purpose-driven values
          ensuring every market benefits from trusted, relevant, and sustainable
          innovation.
        </p>

        <p className="text-center text-xl leading-8 font-semibold text-brand-cyan800 lg:text-2xl">
          {regionNames.map((name, index) => (
            <span key={name}>
              {index > 0 && <span> | </span>}
              {name}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
