import type { Metadata } from "next";

import BrandStrip from "./components/BrandStrip";
import ContactSection from "./components/ContactSection";

import CareersBanner from "./components/CareersBanner";
import CareersHero from "./components/CareersHero";
import DeiCommitments from "./components/DeiCommitments";
import OpenPositions from "./components/OpenPositions";
import PurposeJourney from "./components/PurposeJourney";
import WhyWorkWithUs from "./components/WhyWorkWithUs";

export const metadata: Metadata = {
  title: "Careers at Zoiko Group | Build Your Future with Us",
  description:
    "Build your career at Zoiko Group, where innovation meets purpose. Join a diverse team working across AI, telecommunications, media, and financial services.",
};

export default function CareersPage() {
  return (
    <>
      <CareersBanner />
      <CareersHero />
      <WhyWorkWithUs />
      <PurposeJourney />
      <OpenPositions />
      <DeiCommitments />
      <BrandStrip />
      <ContactSection />
    </>
  );
}
