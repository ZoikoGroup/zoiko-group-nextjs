import type { Metadata } from "next";

import FinancialReporting from "./components/FinancialReporting";
import InvestorBanner from "./components/InvestorBanner";
import InvestorContact from "./components/InvestorContact";
import InvestorIntro from "./components/InvestorIntro";
import InvestorStructure from "./components/InvestorStructure";
import JoinUs from "./components/JoinUs";
import WhyInvest from "./components/WhyInvest";

export const metadata: Metadata = {
  title: "Investor Relations — Zoiko Group",
  description:
    "Building enduring value and creating shared prosperity — Zoiko Group's investment case, capital structure, financial reporting standards and investor contact details.",
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
