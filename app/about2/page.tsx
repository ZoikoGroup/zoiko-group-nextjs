import type { Metadata } from "next";

import BusinessGroups from "./components/BusinessGroups";
import CapabilitiesTable from "./components/CapabilitiesTable";
import ClosingBanner from "./components/ClosingBanner";
import GlobalPresence from "./components/GlobalPresence";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Leadership from "./components/Leadership";
import TechnologyLayer from "./components/TechnologyLayer";
import TrustInfrastructure from "./components/TrustInfrastructure";

export const metadata: Metadata = {
  title: "About Zoiko Group | Redefining Enterprise, Empowering Society",
  description:
    "Zoiko Group Inc. is a U.S.-headquartered, technology-led multinational holding company building and operating businesses across artificial intelligence, telecommunications, financial services, healthcare, media, consumer markets and global trade.",
};

export default function About2Page() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <BusinessGroups />
      <TechnologyLayer />
      <CapabilitiesTable />
      <GlobalPresence />
      <TrustInfrastructure />
      <Leadership />
      <ClosingBanner />
    </>
  );
}
