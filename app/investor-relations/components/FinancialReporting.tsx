import { DashList, ProseSection, proseBody, proseHeadingAccent } from "./Prose";

import { financialDiscipline } from "./investor-data";

export default function FinancialReporting() {
  return (
    <ProseSection>
      <h2 className={proseHeadingAccent}>
        Financial Reporting &amp; Investor Governance
      </h2>
      <p className={proseBody}>
        Zoiko Group maintains enterprise-grade financial discipline across all
        business units:
      </p>
      <DashList items={financialDiscipline} />
    </ProseSection>
  );
}
