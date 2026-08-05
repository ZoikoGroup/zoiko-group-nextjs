import { BulletList, ProseSection, proseBody, proseHeading } from "./Prose";
import { LEGAL_EMAIL, termsSections } from "./terms-of-use-data";

/** The building blocks a terms section is made of, in source order. */
export type Block =
  | { type: "lead"; value: string }
  | { type: "text"; value: string }
  | { type: "list"; items: string[] }
  | { type: "contact" };

export type Section = {
  id: string;
  heading?: string;
  /** Section 16 alone is set in grey rather than the black used elsewhere. */
  greyHeading?: boolean;
  blocks: Block[];
};

const leadClass = "text-xl leading-9 font-extrabold text-black lg:text-2xl";

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        const spacing = index === 0 ? "" : "mt-4 ";

        switch (block.type) {
          case "list":
            return <BulletList key={index} items={block.items} />;
          case "lead":
            return (
              <p key={index} className={leadClass}>
                {block.value}
              </p>
            );
          case "contact":
            return (
              <address key={index} className={`mt-4 not-italic ${proseBody}`}>
                Zoiko Group Legal Department
                <br />
                1401 21st Street, Sacramento, CA 95811, USA
                <br />
                Email:{" "}
                <a href={`mailto:${LEGAL_EMAIL}`} className="underline">
                  {LEGAL_EMAIL}
                </a>
              </address>
            );
          default:
            return (
              <p key={index} className={`${spacing}${proseBody}`}>
                {block.value}
              </p>
            );
        }
      })}
    </>
  );
}

export default function TermsDocument() {
  const lastIndex = termsSections.length - 1;

  return (
    <>
      {termsSections.map((section, index) => (
        <ProseSection
          key={section.id}
          className={
            index === 0 ? "pt-12" : index === lastIndex ? "pt-8 pb-14" : "pt-8"
          }
        >
          {section.heading && (
            <h2
              className={
                section.greyHeading
                  ? "text-lg leading-8 font-bold text-brand-grey lg:text-xl"
                  : proseHeading
              }
            >
              {section.heading}
            </h2>
          )}
          <Blocks blocks={section.blocks} />
        </ProseSection>
      ))}
    </>
  );
}
