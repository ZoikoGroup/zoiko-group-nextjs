import type { Metadata } from "next";

import GlobalImpact from "./components/GlobalImpact";
import GlobalOffices from "./components/GlobalOffices";
import Governance from "./components/Governance";
import HistoryLegacy from "./components/HistoryLegacy";
import Leadership from "./components/Leadership";
import MissionVision from "./components/MissionVision";
import Responsibility from "./components/Responsibility";
import VisionHeader from "./components/VisionHeader";
import WhoWeServe from "./components/WhoWeServe";

export const metadata: Metadata = {
  title: "About Zoiko Group — The Zoiko Vision",
  description:
    "A diversified global enterprise driving AI-powered innovation across SaaS, telecommunications, financial services, mobility, OTT media and consumer markets.",
};

export default function AboutPage() {
  return (
    <>
      <VisionHeader />
      <GlobalImpact />
      <MissionVision />
      <WhoWeServe />
      <Leadership />
      <Governance />
      <GlobalOffices />
      <Responsibility />
      <HistoryLegacy />
    </>
  );
}
