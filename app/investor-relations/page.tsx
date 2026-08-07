import type { Metadata } from "next";

import FinancialReporting from "./components/FinancialReporting";
import InvestorBanner from "./components/InvestorBanner";
import InvestorContact from "./components/InvestorContact";
import InvestorIntro from "./components/InvestorIntro";
import InvestorStructure from "./components/InvestorStructure";
import JoinUs from "./components/JoinUs";
import WhyInvest from "./components/WhyInvest";

export const metadata: Metadata = {
  title: "Investor Relations & Financial Reporting | Zoiko Group",
  description:
    "Zoiko Group Investor Relations offers insights on corporate governance, financial transparency, & strategic growth across technology, AI, and global markets.",
};

export default function InvestorRelationsPage() {
  return (
    <>
      <InvestorBanner />
      <InvestorIntro />
      <WhyInvest />
      <InvestorStructure />
      <FinancialReporting />
      <InvestorContact />
      <JoinUs />
    </>
  );
}
