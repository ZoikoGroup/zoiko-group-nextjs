import { engagementPrinciples } from "./press-data";
import { BulletList, ProseSection, proseBody, proseHeading } from "./Prose";

export default function PressIntro() {
  return (
    <ProseSection className="pt-12">
      <h2 className={proseHeading}>
        Communicating with Integrity, Sharing Our Global Story.
      </h2>
      <p className={proseBody}>
        At Zoiko Group, we recognize the essential role of media in informing
        the world. As one of the world&rsquo;s most forward-looking business
        groups, we are committed to engaging with journalists, editors,
        broadcasters, and content creators with the highest standards of
        accuracy, transparency, and respect.
      </p>

      <p className={`mt-4 ${proseBody}`}>
        We maintain an open and collaborative relationship with the media to
        share credible insights into our business, leadership, innovations,
        sustainability programs, and our impact on communities around the globe.
      </p>

      <p className={`mt-4 ${proseBody}`}>Our Media Engagement Principles:</p>
      <BulletList items={engagementPrinciples} />
    </ProseSection>
  );
}
