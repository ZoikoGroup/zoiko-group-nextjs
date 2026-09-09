import type { Metadata } from "next";

import BusinessGroups from "./home/components/BusinessGroups";
import CareersBanner from "./home/components/CareersBanner";
import ContactRouting from "./home/components/ContactRouting";
import GlobalPresence from "./home/components/GlobalPresence";
import Hero from "./home/components/Hero";
import HowItWorks from "./home/components/HowItWorks";
import InvestorsPartners from "./home/components/InvestorsPartners";
import NewsInsights from "./home/components/NewsInsights";
import ResearchFrontiers from "./home/components/ResearchFrontiers";
import TechnologyLayer from "./home/components/TechnologyLayer";
import TrustGovernance from "./home/components/TrustGovernance";

export const metadata: Metadata = {
  title: "Zoiko Group | Building the Intelligent Infrastructure of Everyday Life",
  description:
    "Zoiko Group is a technology-led venture and operating group building intelligent infrastructure, trusted platforms and category-defining businesses across technology, connectivity, financial services, healthcare, mobility, commerce, media and global trade.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <BusinessGroups />
      <TechnologyLayer />
      <ResearchFrontiers />
      <GlobalPresence />
      <TrustGovernance />
      <NewsInsights />
      <InvestorsPartners />
      <CareersBanner />
      <ContactRouting />
    </>
  );
}
