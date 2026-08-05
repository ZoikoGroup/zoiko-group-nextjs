import { companyGroups } from "./companies-data";

const bodyText = "text-base leading-8 font-normal text-brand-grey lg:text-xl";

export default function CompanyGroups() {
  return (
    <section className="bg-brand-skybg pt-10">
      <div className="mx-auto w-full max-w-[1055px] px-6">
        {companyGroups.map((group) => (
          <div key={group.id} className="mt-8 first:mt-0">
            <h2
              className={
                group.subduedTitle
                  ? bodyText
                  : "text-lg leading-8 font-bold text-black lg:text-xl"
              }
            >
              {group.title}
            </h2>
            <p className={bodyText}>{group.tagline}</p>

            {group.intro && <p className={`mt-2 ${bodyText}`}>{group.intro}</p>}

            {group.listLabel && (
              <p className={`mt-4 ${bodyText}`}>{group.listLabel}</p>
            )}

            <ul className="mt-2 list-disc pl-6">
              {group.brands.map((brand) => (
                <li key={brand.name ?? brand.description} className={bodyText}>
                  {brand.name && <>{brand.name} &mdash; </>}
                  {brand.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
