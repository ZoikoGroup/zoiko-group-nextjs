import Link from "next/link";

import {
  ACCESSIBILITY_ADDRESS,
  ACCESSIBILITY_EMAIL,
  ACCESSIBILITY_PHONE,
} from "./accessibility-data";
import {
  ProseSection,
  proseBody,
  proseHeading,
  proseHeadingAccent,
} from "./Prose";

export default function FeedbackSupport() {
  return (
    <ProseSection>
      <h2 className={proseHeading}>Feedback &amp; Support</h2>
      <p className={proseBody}>
        We recognize that accessibility is an ongoing journey, and we value the
        insights of our users.
      </p>

      <p className={`mt-4 ${proseBody}`}>
        If you encounter an accessibility barrier while using any of our
        websites or digital platforms &mdash; or if you require assistance
        accessing content or services &mdash; please contact our Accessibility
        Support Team:
      </p>

      <address className={`mt-6 not-italic ${proseHeading}`}>
        <a href={`mailto:${ACCESSIBILITY_EMAIL}`}>{ACCESSIBILITY_EMAIL}</a>
        <br />
        <a href={`tel:${ACCESSIBILITY_PHONE.replace(/[^\d+]/g, "")}`}>
          {ACCESSIBILITY_PHONE}
        </a>{" "}
        (Option 4 - Accessibility Services)
        <br />
        Zoiko Group Accessibility Office
        <br />
        {ACCESSIBILITY_ADDRESS}
      </address>

      <p className={`mt-6 ${proseHeadingAccent}`}>
        <Link
          href="/contact-us"
          className="underline decoration-1 underline-offset-4"
        >
          Submit Accessibility Feedback Form - Click Here
        </Link>
      </p>

      <p className={`mt-6 ${proseBody}`}>
        We will make every reasonable effort to respond promptly and ensure that
        the requested information or functionality is made accessible to you.
      </p>
    </ProseSection>
  );
}
