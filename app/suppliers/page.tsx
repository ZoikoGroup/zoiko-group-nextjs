import type { Metadata } from "next";

import HowToEngage from "./components/HowToEngage";
import PartnerOpportunities from "./components/PartnerOpportunities";
import SupplierDiversity from "./components/SupplierDiversity";
import SuppliersBanner from "./components/SuppliersBanner";
import SuppliersIntro from "./components/SuppliersIntro";
import WhatWeLookFor from "./components/WhatWeLookFor";

export const metadata: Metadata = {
  title: "Supplier Collaboration & Partnerships — Zoiko Group",
  description:
    "Partner with Zoiko Group — what we look for in suppliers, the categories we invite interest in, our supplier diversity commitment, and how to submit an inquiry.",
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
