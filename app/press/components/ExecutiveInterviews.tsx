import { SPEAKERS_EMAIL, speakingOpportunities } from "./press-data";
import {
  BulletList,
  ProseSection,
  proseBody,
  proseHeading,
  proseHeadingAccent,
} from "./Prose";

export default function ExecutiveInterviews() {
  return (
    <ProseSection>
      {/* Set at body weight in the design, unlike the bold headings that open
          the other sections. */}
      <h2 className={proseBody}>
        Executive Interviews &amp; Speaking Engagements
      </h2>

      <h3 className={proseHeading}>
        We welcome opportunities for Zoiko Group executives to share insights
        through:
      </h3>
      <BulletList items={speakingOpportunities} />

      <p className={`mt-4 ${proseBody}`}>
        All requests will be evaluated for strategic alignment, timing, and
        availability.
      </p>
      <p className={proseBody}>For speaking engagement inquiries, contact:</p>
      <p className={proseHeadingAccent}>
        Email: <a href={`mailto:${SPEAKERS_EMAIL}`}>{SPEAKERS_EMAIL}</a>
      </p>
    </ProseSection>
  );
}
