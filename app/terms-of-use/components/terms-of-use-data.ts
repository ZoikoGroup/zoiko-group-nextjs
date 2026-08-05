import type { Section } from "./TermsDocument";

export const LEGAL_EMAIL = "legal@zoikogroup.com";

export const termsSections: Section[] = [
  {
    id: "intro",
    blocks: [
      { type: "lead", value: "Welcome to Zoiko Group Online." },
      { type: "lead", value: "Effective Date: June 2025." },
      {
        type: "text",
        value:
          "These Terms of Use (“Terms”) govern your access to and use of websites, applications, online services, and digital platforms operated by Zoiko Group Inc. and its subsidiaries and affiliates (“Zoiko Group,” “we,” “us,” or “our”).",
      },
      {
        type: "text",
        value:
          "By accessing or using any Zoiko Group service, you agree to be bound by these Terms, as well as our Privacy Policy, Responsible AI Use Policy, and Data Protection & Compliance Policy, which are incorporated herein by reference.",
      },
      {
        type: "text",
        value:
          "If you do not agree to these Terms, you must not use our services.",
      },
    ],
  },
  {
    id: "scope",
    heading: "1. Scope of These Terms",
    blocks: [
      { type: "text", value: "These Terms apply to:" },
      {
        type: "list",
        items: [
          "All websites, applications, platforms, and online services operated by Zoiko Group and its subsidiaries and affiliates",
          "AI-powered services (e.g., ZoikoPal, ZoikoTime, ZoikoNex), mobile apps, BookingOrbit services, and community features",
          "ZoikoPay payment processing services, subject to Section 7 below",
          "Consumer and business portals operated by Zoiko Group companies",
        ],
      },
      { type: "text", value: "These Terms do not apply to:" },
      {
        type: "list",
        items: [
          "Products or services governed by a separate license agreement, product-specific Terms of Service, or End User License Agreement (EULA)",
          "Third-party websites or services linked from Zoiko Group sites",
        ],
      },
      {
        type: "text",
        value:
          "Global Audience: Zoiko Group services are accessible globally. However, we make no representation that content or services are appropriate or available for use in every country. You are responsible for compliance with your local laws and regulations.",
      },
    ],
  },
  {
    id: "acceptable-use",
    heading: "2. Acceptable Use of Our Services",
    blocks: [
      {
        type: "text",
        value:
          "You agree to use Zoiko Group services only for lawful purposes and in accordance with these Terms.",
      },
      { type: "text", value: "You may not:" },
      {
        type: "list",
        items: [
          "Violate any applicable local, national, or international law",
          "Infringe intellectual property, privacy, or publicity rights",
          "Upload or distribute illegal, harmful, harassing, defamatory, obscene, or otherwise objectionable content",
          "Misuse AI services (e.g., generate misleading, harmful, or deepfake content)",
          "Attempt to gain unauthorized access to Zoiko Group systems, networks, or data",
          "Use automated scripts, bots, or scraping tools without written authorization",
          "Interfere with or disrupt the security or operation of our services",
          "Use ZoikoPay or any Zoiko Group payment services for fraudulent or unlawful transactions",
        ],
      },
    ],
  },
  {
    id: "registration",
    heading: "3. Registration and Account Security",
    blocks: [
      {
        type: "text",
        value:
          "Certain Zoiko Group services, including ZoikoPay and subscription-based services, may require you to register for an account and provide accurate information.",
      },
      {
        type: "text",
        value:
          "You are responsible for maintaining the confidentiality of your credentials and for all activity under your account.",
      },
      {
        type: "text",
        value:
          "You agree to promptly notify us of any unauthorized access to your account.",
      },
      {
        type: "text",
        value:
          "Zoiko Group is not liable for any losses arising from your failure to safeguard your account.",
      },
    ],
  },
  {
    id: "intellectual-property",
    heading: "4. Intellectual Property",
    blocks: [
      {
        type: "text",
        value:
          "All content and materials on Zoiko Group services — including text, graphics, images, logos, trademarks, videos, software, and AI models — are owned by or licensed to Zoiko Group and protected by intellectual property laws.",
      },
      { type: "text", value: "You may not:" },
      {
        type: "list",
        items: [
          "Copy, reproduce, modify, distribute, transmit, display, perform, or create derivative works from any content without prior written permission",
          "Use any Zoiko Group trademarks or service marks without express written authorization",
        ],
      },
      {
        type: "text",
        value:
          "Limited personal, non-commercial use of publicly available content is permitted with all copyright and proprietary notices retained.",
      },
    ],
  },
  {
    id: "user-content",
    heading: "5. User-Generated Content",
    blocks: [
      {
        type: "text",
        value:
          "Some Zoiko Group services may allow you to submit, upload, or share content (“User Content”).",
      },
      {
        type: "text",
        value:
          "By submitting User Content, you grant Zoiko Group a worldwide, royalty-free, non-exclusive, transferable, sublicensable license to use, reproduce, distribute, modify, adapt, publish, and display such content to operate and improve our services.",
      },
      { type: "text", value: "You represent and warrant that:" },
      {
        type: "list",
        items: [
          "You have all necessary rights to the User Content",
          "Your User Content does not violate applicable law or third-party rights",
        ],
      },
      {
        type: "text",
        value:
          "Zoiko Group reserves the right (but is not obligated) to monitor, review, edit, or remove User Content at its discretion.",
      },
    ],
  },
  {
    id: "third-party-links",
    heading: "6. Third-Party Links and Services",
    blocks: [
      {
        type: "text",
        value:
          "Zoiko Group services may contain links to third-party websites or services. Zoiko Group does not control and is not responsible for third-party content, privacy practices, or terms.",
      },
      {
        type: "text",
        value:
          "Use of third-party services is at your own risk. Inclusion of such links does not imply endorsement.",
      },
    ],
  },
  {
    id: "zoikopay",
    heading: "7. Use of ZoikoPay and Payment Services",
    blocks: [
      {
        type: "text",
        value:
          "ZoikoPay is Zoiko Group’s proprietary payment processing service.",
      },
      { type: "text", value: "Use of ZoikoPay is subject to:" },
      {
        type: "list",
        items: [
          "These Terms of Use",
          "Applicable ZoikoPay Terms of Service (where applicable)",
          "Relevant laws, including anti-money laundering (AML) and sanctions regulations",
        ],
      },
      { type: "text", value: "You agree not to use ZoikoPay for:" },
      {
        type: "list",
        items: [
          "Illegal or unauthorized transactions",
          "Transactions involving prohibited goods or services",
          "Money laundering, terrorist financing, or other unlawful purposes",
        ],
      },
      {
        type: "text",
        value:
          "Zoiko Group reserves the right to suspend, limit, or terminate access to ZoikoPay in cases of suspected fraud, regulatory risk, or non-compliance.",
      },
      {
        type: "text",
        value:
          "Zoiko Group partners with licensed third-party payment processors. You acknowledge that processing of payments is subject to the terms and conditions of those third-party services, which Zoiko Group does not control.",
      },
    ],
  },
  {
    id: "ai-services",
    heading: "8. AI Services and Disclaimers",
    blocks: [
      {
        type: "text",
        value:
          "Zoiko Group services may incorporate AI-powered tools (including ZoikoPal, ZoikoTime, ZoikoNex, and others).",
      },
      {
        type: "text",
        value: "These services are governed by our Responsible AI Use Policy.",
      },
      { type: "text", value: "You acknowledge that:" },
      {
        type: "list",
        items: [
          "AI-generated outputs may not always be accurate, complete, or free from bias",
          "You must not rely solely on AI outputs for medical, legal, financial, or life-critical decisions",
          "AI services are intended to augment human decision-making",
        ],
      },
      {
        type: "text",
        value:
          "Zoiko Group disclaims liability arising from reliance on AI-generated content.",
      },
    ],
  },
  {
    id: "warranties",
    heading: "9. Disclaimer of Warranties",
    blocks: [
      {
        type: "text",
        value:
          "Zoiko Group services are provided “as is” and “as available” without warranties of any kind.",
      },
      {
        type: "text",
        value:
          "To the fullest extent permitted by law, Zoiko Group disclaims all warranties, express or implied, including:",
      },
      // The design leaves this first item outside the bulleted list.
      { type: "text", value: "Merchantability" },
      {
        type: "list",
        items: [
          "Fitness for a particular purpose",
          "Non-infringement",
          "Security or availability of services",
        ],
      },
      {
        type: "text",
        value:
          "We do not guarantee that services will be error-free or uninterrupted.",
      },
    ],
  },
  {
    id: "liability",
    heading: "10. Limitation of Liability",
    blocks: [
      { type: "text", value: "To the maximum extent permitted by law:" },
      {
        type: "list",
        items: [
          "Zoiko Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our services.",
          "Our total liability for direct damages will not exceed (i) amounts you paid in the prior 12 months for the service, or (ii) USD $100.",
        ],
      },
      {
        type: "text",
        value:
          "Some jurisdictions do not permit certain limitations; in such cases, these limitations shall apply to the fullest extent permitted.",
      },
    ],
  },
  {
    id: "indemnification",
    heading: "11. Indemnification",
    blocks: [
      {
        type: "text",
        value:
          "You agree to indemnify, defend, and hold harmless Zoiko Group, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, costs, or expenses (including reasonable legal fees) arising from:",
      },
      {
        type: "list",
        items: [
          "Your use of our services, including ZoikoPay",
          "Your violation of these Terms",
          "Your violation of applicable laws or third-party rights",
          "Your User Content",
        ],
      },
    ],
  },
  {
    id: "termination",
    heading: "12. Termination of Use",
    blocks: [
      {
        type: "text",
        value:
          "Zoiko Group may suspend or terminate your access to any service, in its sole discretion, without notice, for:",
      },
      {
        type: "list",
        items: [
          "Violation of these Terms",
          "Conduct harmful to Zoiko Group or its customers",
          "Regulatory or legal compliance",
        ],
      },
      {
        type: "text",
        value:
          "Upon termination, sections that by their nature should survive will continue to apply, including IP, limitations, disclaimers, and indemnification.",
      },
    ],
  },
  {
    id: "accessibility",
    heading: "13. Accessibility",
    blocks: [
      {
        type: "text",
        value: "Zoiko Group is committed to providing accessible services.",
      },
      {
        type: "text",
        value:
          "If you require assistance accessing any part of our services or Terms, contact: accessibility@zoikogroup.com.",
      },
    ],
  },
  {
    id: "export-compliance",
    heading: "14. Export Compliance",
    blocks: [
      {
        type: "text",
        value:
          "You may not use, export, or re-export Zoiko Group services in violation of applicable export laws or regulations, including U.S. Export Administration Regulations (EAR), sanctions laws, or the laws of other jurisdictions.",
      },
      {
        type: "text",
        value:
          "By using Zoiko Group services, you represent that you are not subject to any governmental embargo or sanctions prohibiting your use of such services.",
      },
    ],
  },
  {
    id: "changes",
    heading: "15. Changes to These Terms",
    blocks: [
      {
        type: "text",
        value:
          "We may update these Terms periodically. Updates will take effect upon posting with an updated Effective Date.",
      },
      {
        type: "text",
        value:
          "Your continued use of Zoiko Group services constitutes acceptance of the revised Terms.",
      },
    ],
  },
  {
    id: "governing-law",
    heading: "16. Governing Law and Jurisdiction",
    greyHeading: true,
    blocks: [
      {
        type: "text",
        value:
          "These Terms are governed by the laws of the State of California, USA.",
      },
      {
        type: "text",
        value:
          "You consent to the exclusive jurisdiction of courts in Sacramento County, California for all disputes related to these Terms.",
      },
    ],
  },
  {
    id: "contact",
    heading: "17. Contact Us",
    blocks: [
      { type: "text", value: "For questions regarding these Terms, contact:" },
      { type: "contact" },
      { type: "text", value: "Closing Statement" },
      {
        type: "text",
        value:
          "At Zoiko Group, we are committed to providing innovative, secure, and ethical services across industries and geographies. Thank you for your trust in engaging with Zoiko Group companies, platforms, and brands.",
      },
    ],
  },
];
