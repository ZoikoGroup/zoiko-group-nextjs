import type { Metadata } from "next";

import ContactBanner from "./components/ContactBanner";
import ContactDetails from "./components/ContactDetails";

export const metadata: Metadata = {
  title: "Contact Us Zoiko Group | Support and Inquiries",
  description:
    "Reach Zoiko Group for customer support, partnerships, demos, and inquiries. Contact us via phone, email, or our online form for a fast response.",
};

export default function ContactUsPage() {
  return (
    <>
      <ContactBanner />
      <ContactDetails />
    </>
  );
}
