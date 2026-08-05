import { BulletList, ProseSection, proseBody, proseHeading } from "./Prose";

import { diverseOwnership } from "./suppliers-data";

export default function SupplierDiversity() {
  return (
    <ProseSection>
      <h2 className={proseHeading}>Our Commitment to Supplier Diversity</h2>
      <p className={proseBody}>
        Zoiko Group is dedicated to advancing supplier diversity across our
        global footprint. We actively seek opportunities to partner with
        businesses owned by:
      </p>
      <BulletList items={diverseOwnership} />

      {/* Indented pull-quote, as the source copy sets it. */}
      <p className={`mt-6 pl-6 ${proseHeading}`}>
        We believe that fostering an inclusive supply chain is essential to
        driving both innovation and positive social impact.
      </p>
    </ProseSection>
  );
}
