import { enablingOutcomes } from "./leadership-data";
import { DashList, ProseSection, proseBody, proseHeading } from "./Prose";

export default function LeadershipIntro() {
  return (
    <ProseSection className="pt-12">
      <h2 className={proseHeading}>
        Visionary Leadership. World-Class Governance. Sustainable Enterprise.
      </h2>
      <p className={proseBody}>
        At Zoiko Group, we are building a future-oriented business that balances
        innovation with accountability &mdash; driven by a leadership team of
        global experts and governed by robust frameworks designed to protect
        stakeholder interests and uphold the highest standards of corporate
        responsibility.
      </p>
      <p className={`mt-4 ${proseBody}`}>
        Our success is underpinned by a deep belief that effective governance is
        not static &mdash; it is a dynamic, evolving discipline that ensures the
        resilience, transparency, and long-term value of our enterprise.
      </p>

      <h3 className={`mt-6 ${proseHeading}`}>
        Leadership and governance at Zoiko Group enable us to:
      </h3>
      <DashList items={enablingOutcomes} />
    </ProseSection>
  );
}
