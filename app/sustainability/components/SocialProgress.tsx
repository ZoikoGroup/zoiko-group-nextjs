import { DashList, ProseSection, proseBody, proseHeading } from "./Prose";

import { socialFocusAreas } from "./sustainability-data";

export default function SocialProgress() {
  return (
    <ProseSection>
      <h2 className={proseHeading}>Inclusive Social Progress</h2>
      <p className={proseBody}>Creating Equity Through Innovation</p>
      <p className={proseBody}>
        Zoiko Group&rsquo;s growth is purposefully designed to include those
        left behind by conventional systems. Our brands, platforms, and
        partnerships are built to uplift and empower.
      </p>

      <p className={`mt-4 ${proseBody}`}>Our Focus Areas Include:</p>
      <DashList items={socialFocusAreas} />
    </ProseSection>
  );
}
