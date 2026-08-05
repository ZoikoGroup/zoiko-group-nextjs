import { DashList, ProseSection, proseBody, proseHeading } from "./Prose";

import { greenInitiatives } from "./sustainability-data";

export default function GreenTransition() {
  return (
    <ProseSection className="pt-2">
      <h2 className={proseHeading}>Accelerating the Green Transition</h2>
      <p className={proseBody}>
        As a technology-led conglomerate, Zoiko Group is committed to reducing
        its environmental footprint through innovation, operations, and supply
        chain transformation.
      </p>

      <p className={`mt-4 ${proseBody}`}>Key Initiatives:</p>
      <DashList items={greenInitiatives} />
    </ProseSection>
  );
}
