import Link from "next/link";

import { ProseSection, proseBody, proseHeading } from "./Prose";

import {
  PARTNERS_ADDRESS,
  PARTNERS_EMAIL,
  PARTNERS_PHONE,
} from "./suppliers-data";

export default function HowToEngage() {
  return (
    <ProseSection className="pt-8 pb-14">
      <h2 className={proseHeading}>How to Engage with Zoiko Group</h2>
      <p className={proseBody}>
        If your organisation is interested in exploring partnership or supplier
        opportunities with Zoiko Group or any of our subsidiaries, we invite you
        to submit an initial inquiry through the channels below.
      </p>

      <address className={`mt-4 not-italic ${proseHeading}`}>
        <a href={`mailto:${PARTNERS_EMAIL}`} className="underline">
          {PARTNERS_EMAIL}
        </a>
        <br />
        Zoiko Group Headquarters
        <br />
        {PARTNERS_ADDRESS}
        <br />
        <a href={`tel:${PARTNERS_PHONE.replace(/[^\d+]/g, "")}`}>
          {PARTNERS_PHONE}
        </a>
      </address>

      {/* Set verbatim, brackets and parenthetical included, as the design has
          it. The bracketed label is the live link. */}
      <p className={`mt-4 ${proseHeading}`}>
        <Link href="/contact-us">
          [Submit Supplier &amp; Partner Inquiry Form]
        </Link>{" "}
        (Link to online form)
      </p>

      <h2 className={`mt-6 ${proseHeading}`}>
        Evaluation &amp; Selection Process
      </h2>
      <p className={proseBody}>
        All submissions are reviewed by Zoiko Group&rsquo;s Global Procurement
        &amp; Strategic Partnerships Office. Due to the high volume of inquiries
        we receive, we may only contact selected organisations for further
        dialogue and qualification.
      </p>

      <p className={`mt-6 ${proseHeading}`}>
        We value your interest in joining our global ecosystem and look forward
        to exploring opportunities to collaborate.
      </p>
    </ProseSection>
  );
}
