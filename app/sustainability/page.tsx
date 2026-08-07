import type { Metadata } from "next";

import GovernanceReporting from "./components/GovernanceReporting";
import GreenTransition from "./components/GreenTransition";
import MeasuringImpact from "./components/MeasuringImpact";
import ResponsibleFramework from "./components/ResponsibleFramework";
import ResponsibleInnovation from "./components/ResponsibleInnovation";
import SocialProgress from "./components/SocialProgress";
import SustainabilityBanner from "./components/SustainabilityBanner";
import SustainabilityIntro from "./components/SustainabilityIntro";

export const metadata: Metadata = {
  title: "Corporate Responsibility & Sustainability | Zoiko Group",
  description:
    "Zoiko Group advances sustainability, ethical AI, and strong governance—driving responsible innovation with long-term social and environmental impact.",
};

export default function SustainabilityPage() {
  return (
    <>
      <SustainabilityBanner />
      <SustainabilityIntro />
      <ResponsibleFramework />
      <GreenTransition />
      <SocialProgress />
      <ResponsibleInnovation />
      <GovernanceReporting />
      <MeasuringImpact />
    </>
  );
}
