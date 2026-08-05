import type { Metadata } from "next";

import AccessibilityBanner from "./components/AccessibilityBanner";
import AccessibilityFeatures from "./components/AccessibilityFeatures";
import AccessibilityIntro from "./components/AccessibilityIntro";
import ContinuousImprovement from "./components/ContinuousImprovement";
import FeedbackSupport from "./components/FeedbackSupport";
import GlobalCommitment from "./components/GlobalCommitment";

export const metadata: Metadata = {
  title: "Accessibility Support — Zoiko Group",
  description:
    "Zoiko Group's commitment to global accessibility — the standards we meet, the features we build in, and how to reach our Accessibility Support Team.",
};

export default function AccessibilityPage() {
  return (
    <>
      <AccessibilityBanner />
      <AccessibilityIntro />
      <GlobalCommitment />
      <AccessibilityFeatures />
      <FeedbackSupport />
      <ContinuousImprovement />
    </>
  );
}
