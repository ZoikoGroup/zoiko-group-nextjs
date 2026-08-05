import { improvementPractices } from "./accessibility-data";
import { BulletList, ProseSection, proseBody, proseHeading } from "./Prose";

export default function ContinuousImprovement() {
  return (
    <ProseSection className="pt-8 pb-14">
      <h2 className={proseHeading}>Continuous Improvement</h2>
      <p className={proseBody}>
        Accessibility is not a static goal &mdash; it is a process of continuous
        innovation and leadership.
      </p>

      <h3 className={`mt-4 ${proseHeading}`}>To this end, Zoiko Group:</h3>
      <BulletList items={improvementPractices} />

      {/* Body weight in the design, unlike the bold section headings. */}
      <h3 className={`mt-4 ${proseBody}`}>
        Our Vision: Inclusion Through Innovation
      </h3>
      <p className={proseBody}>
        We view accessibility as a fundamental enabler of digital inclusion and
        a driver of corporate responsibility.
      </p>

      <p className={`mt-4 ${proseBody}`}>
        By building experiences that are usable by everyone, we honor our values
        and advance our mission to create positive impact across the communities
        we serve.
      </p>

      <p className={`mt-4 ${proseBody}`}>
        We thank you for your partnership in this important endeavor &mdash; and
        for helping us make Zoiko Group&rsquo;s digital platforms accessible to
        all.
      </p>
    </ProseSection>
  );
}
