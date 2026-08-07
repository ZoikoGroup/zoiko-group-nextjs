import type { Metadata } from "next";

import HowToEngage from "./components/HowToEngage";
import PartnerOpportunities from "./components/PartnerOpportunities";
import SupplierDiversity from "./components/SupplierDiversity";
import SuppliersBanner from "./components/SuppliersBanner";
import SuppliersIntro from "./components/SuppliersIntro";
import WhatWeLookFor from "./components/WhatWeLookFor";

export const metadata: Metadata = {
  title: "Zoiko Group Supplier Collaboration & Partnerships",
  description:
    "Partner with Zoiko Group to explore supplier collaboration, drive innovation, and achieve long-term growth through strategic and reliable partnerships.",
};

export default function SuppliersPage() {
  return (
    <>
      <SuppliersBanner />
      <SuppliersIntro />
      <WhatWeLookFor />
      <PartnerOpportunities />
      <SupplierDiversity />
      <HowToEngage />
    </>
  );
}
