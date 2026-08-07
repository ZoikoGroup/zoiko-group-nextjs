import type { Metadata } from "next";

import ResponsibleAiBanner from "./components/ResponsibleAiBanner";
import ResponsibleAiDocument from "./components/ResponsibleAiDocument";

export const metadata: Metadata = {
  title: "Responsible AI Use for Business Growth | Zoiko Group",
  description:
    "Learn how Zoiko Group integrates responsible AI into business growth, promoting ethics, fairness, transparency, and long-term trust.",
};

export default function ResponsibleAiPage() {
  return (
    <>
      <ResponsibleAiBanner />
      <ResponsibleAiDocument />
    </>
  );
}
