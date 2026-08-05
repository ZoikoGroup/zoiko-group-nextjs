import { philosophyPrinciples } from "./companies-data";

export default function BrandPhilosophy() {
  return (
    <section className="bg-brand-skybg pt-8 pb-14">
      <div className="mx-auto w-full max-w-[1055px] px-6">
        <h2 className="text-lg leading-8 font-bold text-black lg:text-xl">
          Brand Philosophy
        </h2>
        <p className="text-base leading-8 font-normal text-brand-grey lg:text-xl">
          Connected by Purpose. Driven by Innovation.
        </p>

        <p className="mt-2 text-base leading-8 font-normal text-brand-grey lg:text-xl">
          Zoiko Group&rsquo;s companies operate independently but are connected
          by a shared vision:
        </p>

        {/* Dash markers, not discs — the source copy sets these apart from the
            bulleted brand lists above. */}
        <ul className="mt-2 list-none">
          {philosophyPrinciples.map((principle) => (
            <li
              key={principle}
              className="text-base leading-8 font-normal text-brand-grey lg:text-xl"
            >
              {`- ${principle}`}
            </li>
          ))}
        </ul>

        <p className="mt-4 text-base leading-8 font-normal text-brand-grey lg:text-xl">
          Together, our ecosystem is more than a business portfolio &mdash; it
          is a blueprint for building a better world through enterprise.
        </p>
      </div>
    </section>
  );
}
