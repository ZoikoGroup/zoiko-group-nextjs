import { BulletList, ProseSection, proseBody, proseHeading } from "./Prose";
import { AI_EMAIL, responsibleAiSections } from "./responsible-ai-data";

/** The building blocks a policy section is made of, in source order. */
export type Block =
  | { type: "lead"; value: string }
  | { type: "text"; value: string }
  | { type: "list"; items: string[] }
  | { type: "contact" };

export type Section = {
  id: string;
  heading?: string;
  blocks: Block[];
};

/** Opening lines: bold black at body size, matching the Data Protection page. */
const leadClass = "text-lg leading-9 font-bold text-black lg:text-xl";

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
                Zoiko Group AI Governance Office
                <br />
                1401 21st Street, Sacramento, CA 95811, USA
                <br />
                Email:{" "}
                <a href={`mailto:${AI_EMAIL}`} className="underline">
                  {AI_EMAIL}
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

export default function ResponsibleAiDocument() {
  const lastIndex = responsibleAiSections.length - 1;

  return (
    <>
      {responsibleAiSections.map((section, index) => (
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
