import { accessibilityFeatures } from "./accessibility-data";
import { BulletList, ProseSection, proseBody, proseHeading } from "./Prose";

export default function AccessibilityFeatures() {
  return (
    <ProseSection>
      <h2 className={proseHeading}>Features to Support Accessibility</h2>
      <p className={proseBody}>
        Our digital properties are built with a wide range of accessibility
        features designed to enhance usability, including:
      </p>
      <BulletList items={accessibilityFeatures} />
    </ProseSection>
  );
}
