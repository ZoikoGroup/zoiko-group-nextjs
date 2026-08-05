import type { Metadata } from "next";

import ResponsibleAiBanner from "./components/ResponsibleAiBanner";
import ResponsibleAiDocument from "./components/ResponsibleAiDocument";

export const metadata: Metadata = {
  title: "Responsible AI Use — Zoiko Group",
  description:
    "How Zoiko Group builds and deploys AI — our Responsible AI principles, governance and oversight, algorithmic impact assessments, and vendor requirements.",
};

export default function ResponsibleAiPage() {
  return (
    <>
      <ResponsibleAiBanner />
      <ResponsibleAiDocument />
    </>
  );
}
