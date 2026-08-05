import { DashList, ProseSection, proseBody, proseHeadingAccent } from "./Prose";

import {
  INVESTOR_ADDRESS,
  INVESTOR_EMAIL,
  INVESTOR_PHONE,
  investorMaterials,
} from "./investor-data";

export default function InvestorContact() {
  return (
    <ProseSection>
      <h2 className={proseHeadingAccent}>Investor Contact &amp; Engagement</h2>
      <p className={proseBody}>
        We invite aligned capital partners to explore long-term investment
        opportunities with Zoiko Group.
      </p>

      <address className={`mt-4 not-italic ${proseHeadingAccent}`}>
        <a href={`mailto:${INVESTOR_EMAIL}`} className="underline">
          {INVESTOR_EMAIL}
        </a>
        <br />
        Investor Relations Office
        <br />
        {INVESTOR_ADDRESS}
        <br />
        <a href={`tel:${INVESTOR_PHONE.replace(/[^\d+]/g, "")}`}>
          {INVESTOR_PHONE}
        </a>{" "}
        (Option for &ndash; Investor Relations)
      </address>

      <h3 className={`mt-4 ${proseHeadingAccent}`}>
        Materials available to qualified investors:
      </h3>
      <DashList items={investorMaterials} />
    </ProseSection>
  );
}
