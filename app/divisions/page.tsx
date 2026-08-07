import type { Metadata } from "next";

import DivisionSection from "./components/DivisionSection";
import DivisionalStructure from "./components/DivisionalStructure";
import DivisionsBanner from "./components/DivisionsBanner";
import OperatingModel from "./components/OperatingModel";
import StructuredToLead from "./components/StructuredToLead";
import { divisions } from "./components/divisions-data";

export const metadata: Metadata = {
  title: "Zoiko Group Divisions | Powering Progress with Purpose",
  description:
    "Zoiko Group’s purpose-built divisions lead their fields with innovation, impact, and a commitment to global excellence, driving progress worldwide.",
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
