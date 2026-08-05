import { BulletList, ProseSection, proseBody, proseHeading } from "./Prose";
import { PRIVACY_EMAIL, dataProtectionSections } from "./data-protection-data";

/** The building blocks a policy section is made of, in source order. */
export type Block =
  | { type: "lead"; value: string }
  | { type: "text"; value: string }
  | { type: "semibold"; value: string }
  | { type: "list"; items: string[] }
  | { type: "contact" };

export type Section = {
  id: string;
  heading?: string;
  blocks: Block[];
};

/** This page's opening lines are bold black at body size, not the larger
    extrabold treatment the other legal pages use. */
const leadClass = "text-lg leading-9 font-bold text-black lg:text-xl";

/** Grey semibold — used once, for the standards lead-in. */
const semiboldClass =
  "text-base leading-8 font-semibold text-brand-grey lg:text-xl";

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
          case "semibold":
            return (
              <p key={index} className={`${spacing}${semiboldClass}`}>
                {block.value}
              </p>
            );
          case "contact":
            return (
              <address key={index} className={`mt-4 not-italic ${proseBody}`}>
                Zoiko Group Privacy Office
                <br />
                1401 21st Street, Sacramento, CA 95811, USA
                <br />
                Email:{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`} className="underline">
                  {PRIVACY_EMAIL}
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

export default function DataProtectionDocument() {
  const lastIndex = dataProtectionSections.length - 1;

  return (
    <>
      {dataProtectionSections.map((section, index) => (
        <ProseSection
          key={section.id}
          className={
            index === 0 ? "pt-12" : index === lastIndex ? "pt-8 pb-14" : "pt-8"
          }
        >
          {section.heading && (
            <h2 className={proseHeading}>{section.heading}</h2>
          )}
          <Blocks blocks={section.blocks} />
        </ProseSection>
      ))}
    </>
  );
}
