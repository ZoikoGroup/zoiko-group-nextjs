import { ProseSection, proseBody, proseHeading } from "./Prose";

export default function AccessibilityIntro() {
  return (
    <ProseSection className="pt-12">
      <h2 className={proseHeading}>
        Driving Inclusion &mdash; Designing for Everyone
      </h2>
      <p className={proseBody}>
        At Zoiko Group, we are committed to making technology, content, and
        experiences accessible to all. Accessibility is not just a compliance
        obligation &mdash; it is a reflection of our values: inclusion,
        innovation, and respect for human dignity.
      </p>

      <p className={`mt-4 ${proseBody}`}>
        We believe that every person, regardless of ability, should have equal
        access to information, services, and opportunities across our global
        digital ecosystem.
      </p>

      <p className={`mt-4 ${proseBody}`}>
        As a multinational enterprise serving diverse communities worldwide, we
        continuously strive to ensure that our digital presence &mdash;
        including our websites, applications, and online services &mdash; are
        usable and welcoming to everyone.
      </p>
    </ProseSection>
  );
}
