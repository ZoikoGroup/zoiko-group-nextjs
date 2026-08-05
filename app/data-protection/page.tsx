import type { Metadata } from "next";

import DataProtectionBanner from "./components/DataProtectionBanner";
import DataProtectionDocument from "./components/DataProtectionDocument";

export const metadata: Metadata = {
  title: "Data Protection & Compliance (GDPR / CCPA) — Zoiko Group",
  description:
    "How Zoiko Group aligns with GDPR, CCPA, CPRA and other global data protection standards — governance, cross-border transfers, data subject rights and AI data governance.",
};

export default function DataProtectionPage() {
  return (
    <>
      <DataProtectionBanner />
      <DataProtectionDocument />
    </>
  );
}
