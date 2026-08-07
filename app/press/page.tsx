import type { Metadata } from "next";

import ExecutiveInterviews from "./components/ExecutiveInterviews";
import HowToContact from "./components/HowToContact";
import MediaEthics from "./components/MediaEthics";
import MediaResources from "./components/MediaResources";
import PressBanner from "./components/PressBanner";
import PressIntro from "./components/PressIntro";

export const metadata: Metadata = {
  title: "Zoiko Group Press & Media Requests - Reach Our Team",
  description:
    "Submit your press and media inquiries to Zoiko Group. Our team is available for interviews, features, and official company information upon request.",
};

export default function PressPage() {
  return (
    <>
      <PressBanner />
      <PressIntro />
      <HowToContact />
      <MediaResources />
      <ExecutiveInterviews />
      <MediaEthics />
    </>
  );
}
