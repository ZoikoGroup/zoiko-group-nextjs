import {
  DashList,
  ProseSection,
  proseBody,
  proseHeadingAccentStrong,
} from "./Prose";

import { investorCriteria } from "./investor-data";

export default function JoinUs() {
  return (
    <ProseSection className="pt-8 pb-14">
      <h2 className={proseHeadingAccentStrong}>
        Join Us in Engineering the Future
      </h2>
      <p className={proseBody}>
        Zoiko Group is building an ecosystem of companies designed to lead in
        the 21st century &mdash; responsibly, transparently, and inclusively. We
        are looking for investors who:
      </p>
      <DashList items={investorCriteria} />

      <p className={`mt-6 ${proseBody}`}>
        We invite you to grow with us &mdash; and to help shape a legacy of
        purpose-driven enterprise.
      </p>
    </ProseSection>
  );
}
