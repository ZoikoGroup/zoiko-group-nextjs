import type { Metadata } from "next";

import BoardOfDirectors from "./components/BoardOfDirectors";
import EthicsIntegrity from "./components/EthicsIntegrity";
import ExecutiveTeam from "./components/ExecutiveTeam";
import GenerationalImpact from "./components/GenerationalImpact";
import GovernanceFramework from "./components/GovernanceFramework";
import LeadershipBanner from "./components/LeadershipBanner";
import LeadershipIntro from "./components/LeadershipIntro";
import LeadershipPhilosophy from "./components/LeadershipPhilosophy";

export const metadata: Metadata = {
  title: "Leadership & Governance | Zoiko Group",
  description:
    "Discover Zoiko Group’s leadership team and governance framework guiding ethical practices, transparency, and strategic growth across global operations.",
};

export default function LeadershipPage() {
  return (
    <>
      <LeadershipBanner />
      <LeadershipIntro />
      <LeadershipPhilosophy />
      <ExecutiveTeam />
      <BoardOfDirectors />
      <GovernanceFramework />
      <EthicsIntegrity />
      <GenerationalImpact />
    </>
  );
}
