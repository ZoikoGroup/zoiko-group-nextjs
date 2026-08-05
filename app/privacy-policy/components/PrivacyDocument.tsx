import {
  DashList,
  ProseSection,
  proseBody,
  proseHeading,
  type DashItem,
} from "./Prose";
import { PRIVACY_EMAIL, privacySections } from "./privacy-policy-data";

/** The building blocks a policy section is made of, in source order. */
export type Block =
  | { type: "lead"; value: string }
  | { type: "text"; value: string }
  | { type: "strong"; value: string }
  | { type: "list"; items: DashItem[] }
  | { type: "contact" };

export type Section = {
  id: string;
  heading?: string;
  /** Section 1 alone is set heavier than the bold used by the rest. */
  extrabold?: boolean;
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
            return <DashList key={index} items={block.items} />;
          case "lead":
            return (
              <p key={index} className={leadClass}>
                {block.value}
              </p>
            );
          case "strong":
            return (
              <p key={index} className={`${spacing}${proseHeading}`}>
                {block.value}
              </p>
            );
          case "contact":
            return (
              <address
                key={index}
                className={`mt-4 not-italic ${proseHeading}`}
              >
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

export default function PrivacyDocument() {
  const lastIndex = privacySections.length - 1;

  return (
    <>
      {privacySections.map((section, index) => (
        <ProseSection
          key={section.id}
          className={
            index === 0 ? "pt-12" : index === lastIndex ? "pt-8 pb-14" : "pt-8"
          }
        >
          {section.heading && (
            <h2
              className={
                section.extrabold
                  ? "text-lg leading-8 font-extrabold text-black lg:text-xl"
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
