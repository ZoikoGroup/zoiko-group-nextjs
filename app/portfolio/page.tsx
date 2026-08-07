import type { Metadata } from "next";

import PortfolioBanner from "./components/PortfolioBanner";
import PortfolioContact from "./components/PortfolioContact";
import PortfolioIntro from "./components/PortfolioIntro";

export const metadata: Metadata = {
  title: "Portfolio – Zoiko Group | Discover Our Core Ventures",
  description:
    "Zoiko Group’s portfolio features innovative global ventures in AI, fintech, telecom, and consumer brands built for scalable impact and sustainable growth.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioBanner />
      <PortfolioIntro />
      <PortfolioContact />
    </>
  );
}
