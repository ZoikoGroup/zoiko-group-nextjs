import type { Metadata } from "next";

import DivisionSection from "./components/DivisionSection";
import DivisionalStructure from "./components/DivisionalStructure";
import DivisionsBanner from "./components/DivisionsBanner";
import OperatingModel from "./components/OperatingModel";
import StructuredToLead from "./components/StructuredToLead";
import { divisions } from "./components/divisions-data";

export const metadata: Metadata = {
  title: "Divisions — Powering Progress Through Purpose-Built Divisions",
  description:
    "Zoiko Group is organized into a portfolio of strategic divisions, each purpose-built to deliver leadership across technology, telecommunications, financial services, media and consumer brands.",
};

export default function DivisionsPage() {
  return (
    <>
      <DivisionsBanner />
      <StructuredToLead />
      <DivisionalStructure />
      {divisions.map((division) => (
        <DivisionSection key={division.id} division={division} />
      ))}
      <OperatingModel />
    </>
  );
}
