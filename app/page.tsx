import type { Metadata } from "next";

import BrandStrip from "./home/components/BrandStrip";
import ContactSection from "./home/components/ContactSection";
import GlobalReach from "./home/components/GlobalReach";
import Hero from "./home/components/Hero";
import InvestorCentre from "./home/components/InvestorCentre";
import MediaInsights from "./home/components/MediaInsights";
import Solutions from "./home/components/Solutions";
import Testimonials from "./home/components/Testimonials";

export const metadata: Metadata = {
  title: "Zoiko Group | Global AI, Telecom, Fintech & Healthcare",
  description:
    "Zoiko Group builds intelligent platforms in AI, telecom, fintech, healthcare, MedTech, food, media, and tech—driving ESG-led transformation globally.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStrip />
      <Solutions />
      <GlobalReach />
      <InvestorCentre />
      <MediaInsights />
      <Testimonials />
      <ContactSection />
    </>
  );
}
