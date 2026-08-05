import { DashList, ProseSection, proseBody, proseHeading } from "./Prose";

import { impactAims } from "./sustainability-data";

export default function MeasuringImpact() {
  return (
    <ProseSection className="pt-8 pb-14">
      <h2 className={proseHeading}>Measuring What Truly Matters</h2>
      <p className={proseBody}>
        We do not define success solely by revenue or market share &mdash; but
        by the positive externalities we generate.
      </p>

      <p className={`mt-4 ${proseBody}`}>Across Zoiko Group, we aim to:</p>
      <DashList items={impactAims} />

      <p className={`mt-6 ${proseBody}`}>
        Through corporate responsibility and sustainability, we are not just
        fulfilling obligations &mdash; we are building a legacy of ethical
        enterprise that will endure for generations.
      </p>
    </ProseSection>
  );
}
