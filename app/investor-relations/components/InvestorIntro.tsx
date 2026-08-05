import { ProseSection, proseBody, proseHeadingAccent } from "./Prose";

export default function InvestorIntro() {
  return (
    <ProseSection className="pt-12">
      <h2 className={proseHeadingAccent}>
        Building Enduring Value. Creating Shared Prosperity.
      </h2>
      <p className={proseBody}>
        At Zoiko Group, we are committed to delivering sustainable, long-term
        value to our investors, partners, and society. As a fast-growing,
        innovation-led global conglomerate, we maintain a transparent,
        disciplined, and stakeholder-aligned approach to investment and capital
        stewardship.
      </p>
      <p className={`mt-4 ${proseBody}`}>
        While currently privately held, Zoiko Group actively engages with
        institutional investors, private equity firms, sovereign capital, and
        family offices &mdash; in preparation for selective public offerings,
        strategic co-investments, and subsidiary-level capitalization events.
      </p>
    </ProseSection>
  );
}
