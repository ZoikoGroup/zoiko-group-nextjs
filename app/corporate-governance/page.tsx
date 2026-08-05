import type { Metadata } from "next";

import CorporateGovernanceBanner from "./components/CorporateGovernanceBanner";
import GovernanceDocument from "./components/GovernanceDocument";

export const metadata: Metadata = {
  title: "Corporate Governance — Zoiko Group",
  description:
    "Integrity, accountability, leadership and long-term value — Zoiko Group's governance philosophy, Board structure, ethics and compliance programme, and AI governance.",
};

export default function CorporateGovernancePage() {
  return (
    <>
      <CorporateGovernanceBanner />
      <GovernanceDocument />
    </>
  );
}
