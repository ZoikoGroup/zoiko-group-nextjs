import type { Metadata } from "next";

import ContactBanner from "./components/ContactBanner";
import ContactDetails from "./components/ContactDetails";

export const metadata: Metadata = {
  title: "Contact Zoiko Group — Engage With Our Global Advisory Team",
  description:
    "For enterprise inquiries, partnership discussions or platform support, Zoiko Group's advisory and technical teams respond within 1 business day.",
};

export default function ContactUsPage() {
  return (
    <>
      <ContactBanner />
      <ContactDetails />
    </>
  );
}
