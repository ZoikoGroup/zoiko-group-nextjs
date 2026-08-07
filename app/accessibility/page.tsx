import type { Metadata } from "next";

import AccessibilityBanner from "./components/AccessibilityBanner";
import AccessibilityFeatures from "./components/AccessibilityFeatures";
import AccessibilityIntro from "./components/AccessibilityIntro";
import ContinuousImprovement from "./components/ContinuousImprovement";
import FeedbackSupport from "./components/FeedbackSupport";
import GlobalCommitment from "./components/GlobalCommitment";

export const metadata: Metadata = {
  title: "Accessibility Support Services | Zoiko Group",
  description:
    "Need accessibility help? Zoiko Group offers inclusive support and resources to ensure everyone can access our services. Contact us for assistance today.",
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
