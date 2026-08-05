import { BulletList, ProseSection, proseBody, proseHeading } from "./Prose";

import { sharedCommitments } from "./suppliers-data";

export default function SuppliersIntro() {
  return (
    <ProseSection className="pt-12">
      <h2 className={proseHeading}>
        Building a World-Class Ecosystem of Innovation &amp; Integrity
      </h2>
      <p className={proseBody}>
        At Zoiko Group, partnerships are at the heart of how we deliver value to
        society and to markets around the world. We recognise that no
        organisation thrives in isolation - it is through collaboration with
        exceptional suppliers and partners that we advance our mission to
        engineer the future of business, technology, media, and ethical
        consumption.
      </p>

      <p className={`mt-4 ${proseBody}`}>
        As a diversified global conglomerate, we seek to cultivate an ecosystem
        of trusted suppliers, forward-thinking partners, and mission-aligned
        collaborators who share our unwavering commitment to:
      </p>
      <BulletList items={sharedCommitments} />
    </ProseSection>
  );
}
