import type { Metadata } from "next";

import PrivacyDocument from "./components/PrivacyDocument";
import PrivacyPolicyBanner from "./components/PrivacyPolicyBanner";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Protection | Zoiko Group",
  description:
    "Learn how Zoiko Group protects your personal data through our transparent privacy policy, ensuring confidentiality, compliance, and responsible use.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyPolicyBanner />
      <PrivacyDocument />
    </>
  );
}
