const pillars = [
  "Technology and Enterprise Innovation",
  "Global Digital Connectivity",
  "Financial Services and Commerce",
  "Media and Content Ecosystems",
  "Consumer Brands and Experiential Living",
];

export default function PortfolioIntro() {
  return (
    <section className="bg-white py-10">
      {/* Figma: 1440 frame with px-32, so the text block measures 1184px. */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-7 px-6 lg:px-16 xl:px-32">
        <p className="text-center text-lg leading-10 font-normal text-brand-nearblack lg:text-xl">
          Zoiko Group operates a world-class portfolio of businesses and
          platforms designed to lead across various industries
        </p>

        <p className="text-center text-xl leading-10 font-normal text-brand-tealdark lg:text-2xl">
          {pillars.map((pillar, index) => (
            <span key={pillar}>
              {index > 0 && <span className="font-bold"> | </span>}
              {pillar}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
