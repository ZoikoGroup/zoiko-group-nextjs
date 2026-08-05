import { ethicsMandates } from "./leadership-data";
import { DashList, ProseSection, proseBody, proseHeading } from "./Prose";

export default function EthicsIntegrity() {
  return (
    <ProseSection>
      <h2 className={proseHeading}>Ethics &amp; Integrity</h2>
      <p className={proseBody}>
        We maintain an unwavering commitment to ethical business conduct. Across
        all jurisdictions, every leader and employee is accountable to Zoiko
        Group&rsquo;s Code of Ethics &amp; Conduct, which mandates:
      </p>
      <DashList items={ethicsMandates} />
    </ProseSection>
  );
}
