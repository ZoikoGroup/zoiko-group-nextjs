import { BulletList, ProseSection, proseBody, proseHeading } from "./Prose";

import { partnerCategories } from "./suppliers-data";

export default function PartnerOpportunities() {
  return (
    <ProseSection>
      <h2 className={proseHeading}>
        Strategic Partner &amp; Supplier Opportunities
      </h2>
      <p className={proseBody}>
        We invite interest from both established enterprises and emerging
        innovators in areas such as:
      </p>
      <BulletList items={partnerCategories} />
    </ProseSection>
  );
}
