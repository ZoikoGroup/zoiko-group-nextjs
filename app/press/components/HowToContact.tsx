import Link from "next/link";

import {
  MEDIA_ADDRESS,
  MEDIA_EMAIL,
  MEDIA_PHONE,
  inquiryDetails,
} from "./press-data";
import {
  BulletList,
  ProseSection,
  proseBody,
  proseHeading,
  proseHeadingAccent,
} from "./Prose";

export default function HowToContact() {
  return (
    <ProseSection>
      <h2 className={proseHeading}>How to Contact Us</h2>
      <p className={proseBody}>
        All press and media inquiries should be directed to our dedicated Global
        Media Relations Office.
      </p>

      <h3 className={`mt-6 ${proseHeading}`}>
        To enable an efficient response, please include:
      </h3>
      <BulletList items={inquiryDetails} />

      <address className={`mt-6 not-italic ${proseHeading}`}>
        <a href={`mailto:${MEDIA_EMAIL}`}>{MEDIA_EMAIL}</a>
        <br />
        Zoiko Group Media Relations
        <br />
        {MEDIA_ADDRESS}
        <br />
        <a href={`tel:${MEDIA_PHONE.replace(/[^\d+]/g, "")}`}>
          {MEDIA_PHONE}
        </a>{" "}
        (Option for Media &amp; Corporate Affairs)
      </address>

      <p className={`mt-6 ${proseHeadingAccent}`}>
        <Link
          href="/contact-us"
          className="underline decoration-1 underline-offset-4"
        >
          Submit Media Inquiry Form - Click Here
        </Link>
      </p>
    </ProseSection>
  );
}
