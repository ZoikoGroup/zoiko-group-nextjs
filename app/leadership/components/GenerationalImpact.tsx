import { leadershipDeliverables } from "./leadership-data";
import { DashList, ProseSection, proseBody, proseHeading } from "./Prose";

export default function GenerationalImpact() {
  return (
    <ProseSection className="pt-8 pb-14">
      <h2 className={proseHeading}>Leadership for Generational Impact</h2>
      <p className={proseBody}>
        As we scale our enterprise and expand into new markets, we view
        corporate leadership and governance not only as fiduciary duties &mdash;
        but as levers for creating generational impact.
      </p>

      <h3 className={`mt-6 ${proseHeading}`}>
        Our leadership model is designed to deliver:
      </h3>
      <DashList items={leadershipDeliverables} />

      <p className={`mt-6 ${proseBody}`}>
        At Zoiko Group, we govern boldly, lead responsibly, and act with
        conviction &mdash; ensuring our enterprise endures and thrives in
        service of a better future for all stakeholders.
      </p>
    </ProseSection>
  );
}
