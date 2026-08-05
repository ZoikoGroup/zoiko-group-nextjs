import type { Metadata } from "next";

import ExecutiveInterviews from "./components/ExecutiveInterviews";
import HowToContact from "./components/HowToContact";
import MediaEthics from "./components/MediaEthics";
import MediaResources from "./components/MediaResources";
import PressBanner from "./components/PressBanner";
import PressIntro from "./components/PressIntro";

export const metadata: Metadata = {
  title: "Press & Media Requests — Zoiko Group",
  description:
    "Media enquiries, interview and speaking requests, and press resources for Zoiko Group — how to reach our Global Media Relations Office.",
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
