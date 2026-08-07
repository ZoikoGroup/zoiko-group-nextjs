import type { Metadata } from "next";

import CorporateGovernanceBanner from "./components/CorporateGovernanceBanner";
import GovernanceDocument from "./components/GovernanceDocument";

export const metadata: Metadata = {
  title: "Corporate Governance & Leadership | Zoiko Group",
  description:
    "Zoiko Group upholds strong corporate governance with ethical leadership, board oversight, transparency, and responsible practices, driving long-term success.",
};

export default function CorporateGovernancePage() {
  return (
    <>
      <CorporateGovernanceBanner />
      <GovernanceDocument />
    </>
  );
}
