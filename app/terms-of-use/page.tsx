import type { Metadata } from "next";

import TermsDocument from "./components/TermsDocument";
import TermsOfUseBanner from "./components/TermsOfUseBanner";

export const metadata: Metadata = {
  title: "Terms of Use and Legal Agreement | Zoiko Group",
  description:
    "Read about Zoiko Group’s Terms of Use covering user content, AI tools, payments, and legal responsibilities for safe and compliant use of their platforms.",
};

export default function TermsOfUsePage() {
  return (
    <>
      <TermsOfUseBanner />
      <TermsDocument />
    </>
  );
}
