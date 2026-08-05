import { globalCommitments } from "./accessibility-data";
import { BulletList, ProseSection, proseBody, proseHeading } from "./Prose";

export default function GlobalCommitment() {
  return (
    <ProseSection>
      <h2 className={proseHeading}>Our Commitment to Global Accessibility</h2>
      <p className={proseBody}>Zoiko Group is dedicated to:</p>
      <BulletList items={globalCommitments} />
    </ProseSection>
  );
}
