import { executiveRoles } from "./leadership-data";
import { ProseSection, proseBody, proseHeading } from "./Prose";

export default function ExecutiveTeam() {
  return (
    <ProseSection>
      <h2 className={proseHeading}>Executive Leadership Team</h2>
      <p className={proseBody}>
        Zoiko Group&rsquo;s Executive Leadership Team combines deep industry
        experience with future-facing vision. Our leaders drive operational
        excellence across an expanding global portfolio while maintaining a
        clear focus on governance, ethics, and sustainable growth.
      </p>

      <h3 className="mt-4 text-base leading-8 font-semibold text-brand-grey lg:text-xl">
        Founder &amp; Executive Chairman
        <br />
        Lennox McLeod
      </h3>
      <p className={`mt-4 ${proseBody}`}>
        A visionary tech entrepreneur and international business leader with
        over 30 years of experience across telecommunications, AI-driven
        technologies, international finance, corporate law and enterprise
        strategy. He is the architect of Zoiko Group&rsquo;s global vision and
        leads the Board in defining strategic priorities for long-term growth.
      </p>

      {executiveRoles.map((role) => (
        <div key={role.title} className="mt-6">
          <h3 className="text-base leading-8 font-semibold text-brand-slate lg:text-xl">
            {role.title}
          </h3>
          <p className={proseBody}>{role.remit}</p>
        </div>
      ))}
    </ProseSection>
  );
}
