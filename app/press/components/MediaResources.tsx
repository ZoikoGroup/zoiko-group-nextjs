import { mediaResources } from "./press-data";
import { BulletList, ProseSection, proseBody, proseHeading } from "./Prose";

export default function MediaResources() {
  return (
    <ProseSection>
      <h2 className={proseHeading}>Available Media Resources</h2>
      <p className={proseBody}>
        We provide an extensive library of curated and approved resources for
        the press, including:
      </p>
      <BulletList items={mediaResources} />

      <p className={`mt-4 ${proseBody}`}>
        Visit our <span className="font-bold text-brand-teal">Press Room</span>{" "}
        for access to these materials.
      </p>
    </ProseSection>
  );
}
