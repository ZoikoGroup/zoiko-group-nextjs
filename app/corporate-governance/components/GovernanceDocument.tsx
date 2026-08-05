import { BulletList, ProseSection, proseBody, proseHeading } from "./Prose";
import { governanceSections } from "./corporate-governance-data";

/** The building blocks a governance section is made of, in source order. */
export type Block =
  | { type: "text"; value: string }
  | { type: "semibold"; value: string }
  | { type: "email"; value: string }
  | { type: "list"; items: string[] };

export type Section = {
  id: string;
  heading?: string;
  blocks: Block[];
};

const semiboldClass = "text-base leading-8 font-semibold text-black lg:text-xl";

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        const spacing = index === 0 ? "" : "mt-4 ";

        switch (block.type) {
          case "list":
            return <BulletList key={index} items={block.items} />;
          case "semibold":
            return (
              <p key={index} className={`${spacing}${semiboldClass}`}>
                {block.value}
              </p>
            );
          case "email":
            return (
              <p key={index} className={`${spacing}${semiboldClass}`}>
                <a href={`mailto:${block.value}`}>{block.value}</a>
              </p>
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

export default function GovernanceDocument() {
  const lastIndex = governanceSections.length - 1;

  return (
    <>
      {governanceSections.map((section, index) => (
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
