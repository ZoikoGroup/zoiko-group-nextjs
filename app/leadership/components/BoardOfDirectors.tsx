import { boardCommittees, boardResponsibilities } from "./leadership-data";
import { DashList, ProseSection, proseBody, proseHeading } from "./Prose";

export default function BoardOfDirectors() {
  return (
    <ProseSection className="pt-2">
      {/* The design sets this title in body grey, unlike the bold black
          headings that open every other section. */}
      <h2 className={proseBody}>Board of Directors</h2>
      <p className={`mt-4 ${proseBody}`}>
        Zoiko Group&rsquo;s Board of Directors is the ultimate governing body of
        the Group, providing independent oversight of strategy, executive
        performance, risk management, and stakeholder value creation.
      </p>

      <h3 className={`mt-6 ${proseHeading}`}>Key Board Responsibilities:</h3>
      <DashList items={boardResponsibilities} />

      <h3 className={`mt-6 ${proseHeading}`}>
        Board Composition and Diversity:
      </h3>
      <p className={proseBody}>
        Our Board reflects diverse expertise, international experience, and
        broad industry knowledge. We are committed to maintaining a Board where
        no less than 40% of directors represent gender, ethnic, or other forms
        of underrepresented diversity.
      </p>

      <h3 className={`mt-6 ${proseHeading}`}>Board Committees Include:</h3>
      <DashList items={boardCommittees} />
    </ProseSection>
  );
}
