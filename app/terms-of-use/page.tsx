import type { Metadata } from "next";

import TermsDocument from "./components/TermsDocument";
import TermsOfUseBanner from "./components/TermsOfUseBanner";

export const metadata: Metadata = {
  title: "Terms of Use — Zoiko Group",
  description:
    "The terms governing your access to and use of Zoiko Group websites, applications, online services and digital platforms, including ZoikoPay and AI-powered services.",
};

export default function TermsOfUsePage() {
  return (
    <>
      <TermsOfUseBanner />
      <TermsDocument />
    </>
  );
}
