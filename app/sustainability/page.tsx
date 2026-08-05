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
  title: "Corporate Responsibility & Sustainability — Zoiko Group",
  description:
    "Zoiko Group's CR&S strategy — environmental stewardship, inclusive social progress, ethical innovation, and governance and transparency across every Group company.",
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
