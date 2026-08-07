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
  title: "About Us Zoiko Group | Vision & Mission for Global Impact",
  description:
    "Discover Zoiko Group’s vision for global impact and our mission to lead with innovation, sustainability, and responsible growth across industries worldwide.",
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
