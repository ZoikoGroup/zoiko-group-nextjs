import { DashList, ProseSection, proseHeadingAccent } from "./Prose";

import { capitalStructure } from "./investor-data";

export default function InvestorStructure() {
  return (
    <ProseSection>
      <h2 className={proseHeadingAccent}>
        Investor Structure &amp; Strategic Capital
      </h2>
      <DashList items={capitalStructure} />
    </ProseSection>
  );
}
