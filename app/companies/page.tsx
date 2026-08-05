import type { Metadata } from "next";

import BrandPhilosophy from "./components/BrandPhilosophy";
import CompaniesBanner from "./components/CompaniesBanner";
import CompaniesIntro from "./components/CompaniesIntro";
import CompanyGroups from "./components/CompanyGroups";

export const metadata: Metadata = {
  title: "Our Companies & Brands — Zoiko Group",
  description:
    "A portfolio of industry-defining companies and purpose-driven brands across AI platforms, telecommunications, media, consumer products, financial services and community-first mobile networks.",
};

export default function CompaniesPage() {
  return (
    <>
      <CompaniesBanner />
      <CompaniesIntro />
      <CompanyGroups />
      <BrandPhilosophy />
    </>
  );
}
