import { DashList, ProseSection, proseBody, proseHeading } from "./Prose";

import { coreCommitments } from "./sustainability-data";

export default function ResponsibleInnovation() {
  return (
    <ProseSection>
      <h2 className={proseHeading}>Ethical &amp; Responsible Innovation</h2>
      <p className={proseBody}>
        Embedding Ethics at the Core of Every Platform
      </p>
      <p className={proseBody}>
        As a creator of advanced technologies, Zoiko Group leads on tech ethics
        and accountability.
      </p>

      <p className={`mt-4 ${proseBody}`}>Core Commitments:</p>
      <DashList items={coreCommitments} />
    </ProseSection>
  );
}
