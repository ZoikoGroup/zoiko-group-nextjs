import { ProseSection, proseBody, proseHeading } from "./Prose";

export default function SustainabilityIntro() {
  return (
    <ProseSection className="pt-12">
      <h2 className={proseHeading}>
        Engineering Impact. Scaling Ethics. Leading with Purpose.
      </h2>
      <p className={proseBody}>
        At Zoiko Group, Corporate Responsibility &amp; Sustainability (CR&amp;S)
        is not an initiative &mdash; it is a defining pillar of how we lead,
        operate, and grow. As a global enterprise spanning technology,
        telecommunications, consumer goods, and finance, we recognize that our
        scale brings both opportunity and obligation.
      </p>
      <p className={`mt-4 ${proseBody}`}>
        We are building an enterprise that is inclusive by design, ethical by
        leadership, and sustainable by strategy. Every company within Zoiko
        Group is held to the same high standard of environmental stewardship,
        social equity, and corporate governance.
      </p>
    </ProseSection>
  );
}
