import type { Metadata } from "next";

import PortfolioBanner from "./components/PortfolioBanner";
import PortfolioContact from "./components/PortfolioContact";
import PortfolioIntro from "./components/PortfolioIntro";

export const metadata: Metadata = {
  title: "Portfolio — A World-Class Portfolio Engineering Innovation & Growth",
  description:
    "Zoiko Group operates a world-class portfolio of businesses and platforms across technology, connectivity, financial services, media and consumer brands.",
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
