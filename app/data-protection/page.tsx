import type { Metadata } from "next";

import DataProtectionBanner from "./components/DataProtectionBanner";
import DataProtectionDocument from "./components/DataProtectionDocument";

export const metadata: Metadata = {
  title: "Data Protection Compliance: GDPR & CCPA | Zoiko Group",
  description:
    "Zoiko Group ensures compliance with GDPR, CCPA, and CPRA, prioritizing data privacy, security, and ethical management to protect your personal information.",
};

export default function DataProtectionPage() {
  return (
    <>
      <DataProtectionBanner />
      <DataProtectionDocument />
    </>
  );
}
