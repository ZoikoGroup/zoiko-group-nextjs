import {
  DashList,
  ProseSection,
  proseHeadingAccentStrong,
  proseSubheading,
} from "./Prose";

import { investorReasons } from "./investor-data";

export default function WhyInvest() {
  return (
    <ProseSection>
      <h2 className={proseHeadingAccentStrong}>
        Why Investors Choose Zoiko Group
      </h2>

      {investorReasons.map((reason, index) => (
        <div key={reason.title} className="mt-4 first:mt-1">
          <h3 className={proseSubheading}>
            {index + 1}. {reason.title}
          </h3>
          <DashList items={reason.points} />
        </div>
      ))}
    </ProseSection>
  );
}
