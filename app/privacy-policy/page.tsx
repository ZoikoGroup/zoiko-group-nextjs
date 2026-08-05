import type { Metadata } from "next";

import PrivacyDocument from "./components/PrivacyDocument";
import PrivacyPolicyBanner from "./components/PrivacyPolicyBanner";

export const metadata: Metadata = {
  title: "Privacy Policy — Zoiko Group",
  description:
    "How Zoiko Group collects, uses, shares and safeguards personal information across its companies, brands, services and digital platforms.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyPolicyBanner />
      <PrivacyDocument />
    </>
  );
}
