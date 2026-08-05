import { DashList, ProseSection, proseBody, proseHeading } from "./Prose";

import { governanceOversight, transparencyTools } from "./sustainability-data";

export default function GovernanceReporting() {
  return (
    <ProseSection>
      <h2 className={proseHeading}>Governance, Transparency &amp; Reporting</h2>
      <p className={proseBody}>
        From Policy to Practice &mdash; With Oversight
      </p>
      <p className={proseBody}>
        Zoiko Group&rsquo;s CR&amp;S agenda is governed at the highest level:
      </p>
      <DashList items={governanceOversight} />

      <h3 className={`mt-6 ${proseHeading}`}>Transparency Tools:</h3>
      <DashList items={transparencyTools} />
    </ProseSection>
  );
}
