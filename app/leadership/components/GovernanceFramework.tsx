import { governanceMechanisms, governanceStandards } from "./leadership-data";
import { DashList, ProseSection, proseBody, proseHeading } from "./Prose";

export default function GovernanceFramework() {
  return (
    <ProseSection>
      <h2 className={proseHeading}>Governance Framework</h2>
      <p className={proseBody}>
        Zoiko Group operates under a world-class governance framework aligned
        to:
      </p>
      <DashList items={governanceStandards} />

      <h3 className={`mt-6 ${proseHeading}`}>
        Key governance mechanisms include:
      </h3>
      <DashList items={governanceMechanisms} />
    </ProseSection>
  );
}
