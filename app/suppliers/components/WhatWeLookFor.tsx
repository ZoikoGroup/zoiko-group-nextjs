import { BulletList, ProseSection, proseBody, proseHeading } from "./Prose";

import { selectionCriteria } from "./suppliers-data";

export default function WhatWeLookFor() {
  return (
    <ProseSection>
      <h2 className={proseHeading}>What We Look For</h2>
      <p className={proseBody}>
        We welcome engagement from organisations that demonstrate:
      </p>
      <BulletList items={selectionCriteria} />
    </ProseSection>
  );
}
