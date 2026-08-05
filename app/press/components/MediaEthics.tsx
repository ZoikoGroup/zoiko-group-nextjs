import { ProseSection, proseBody, proseHeading } from "./Prose";

export default function MediaEthics() {
  return (
    <ProseSection className="pt-8 pb-14">
      <h2 className={proseHeading}>Media Ethics &amp; Brand Protection</h2>
      <p className={proseBody}>
        We are committed to responsible media relations. Zoiko Group does not
        tolerate the unauthorized use of its trademarks, copyrighted materials,
        or brand assets. We reserve the right to issue clarifications,
        corrections, or take legal action where necessary to protect our
        reputation and intellectual property.
      </p>

      <p className={`mt-4 ${proseBody}`}>
        We also reserve the right to decline participation in requests that do
        not align with our corporate values or standards of journalistic
        integrity.
      </p>

      {/* Body weight in the design, like the other in-flow sub-headings. */}
      <h3 className={`mt-4 ${proseBody}`}>Response Commitment</h3>
      <p className={proseBody}>
        Our Corporate Communications &amp; Media Relations team reviews all
        inquiries and strives to respond to qualified media requests within 48
        business hours.
      </p>

      <p className={`mt-6 ${proseHeading}`}>
        We value your interest in Zoiko Group and look forward to working with
        professional media representatives to share your story in a responsible,
        engaging, and globally relevant manner.
      </p>
    </ProseSection>
  );
}
