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
  title: "Zoiko Group — Redefining Enterprise, Empowering Society",
  description:
    "Global innovation rooted in integrity, built to transform industries and uplift communities at scale.",
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
