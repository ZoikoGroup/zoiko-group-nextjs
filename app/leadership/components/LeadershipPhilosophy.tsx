import { philosophyTraits } from "./leadership-data";
import { DashList, ProseSection, proseBody, proseHeading } from "./Prose";

export default function LeadershipPhilosophy() {
  return (
    <ProseSection>
      <h2 className={proseHeading}>Our Leadership Philosophy</h2>
      <p className={proseBody}>
        At Zoiko Group, leadership is not confined to title or tenure. It is
        defined by:
      </p>
      <DashList items={philosophyTraits} />
    </ProseSection>
  );
}
