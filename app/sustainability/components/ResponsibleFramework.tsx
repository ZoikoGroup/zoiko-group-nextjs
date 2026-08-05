import { NumberedList, ProseSection, proseBody, proseHeading } from "./Prose";

import { strategicPillars } from "./sustainability-data";

export default function ResponsibleFramework() {
  return (
    <ProseSection>
      <h2 className={proseHeading}>Our Framework for Responsible Enterprise</h2>
      <p className={proseBody}>
        Our CR&amp;S strategy is built upon four strategic pillars, fully
        embedded into Zoiko Group&rsquo;s governance model and long-term
        planning:
      </p>
      <NumberedList items={strategicPillars} />

      {/* The design sets this pillar title in body grey rather than as one of
          the bold black section headings. */}
      <h3 className={proseBody}>Environmental Stewardship</h3>
    </ProseSection>
  );
}
