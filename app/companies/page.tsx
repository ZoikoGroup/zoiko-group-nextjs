import type { Metadata } from "next";

import BrandPhilosophy from "./components/BrandPhilosophy";
import CompaniesBanner from "./components/CompaniesBanner";
import CompaniesIntro from "./components/CompaniesIntro";
import CompanyGroups from "./components/CompanyGroups";

export const metadata: Metadata = {
  title: "Meet Our Companies & Brands | Zoiko Group",
  description:
    "Discover Zoiko Group’s diverse companies and brands. Explore our portfolio of businesses delivering innovative solutions across industries and markets.",
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
