import type { Section } from "./PrivacyDocument";

export const PRIVACY_EMAIL = "privacy@zoikogroup.com";

export const privacySections: Section[] = [
  {
    id: "intro",
    blocks: [
      {
        type: "lead",
        value: "Your Privacy. Our Responsibility. Our Commitment.",
      },
      { type: "lead", value: "Effective Date: June 2025" },
      {
        type: "text",
        value:
          "At Zoiko Group, we believe that privacy is a fundamental human right. As an organization that spans industries, markets, and continents, we treat the protection of personal information as an essential component of our responsibility to our customers, partners, employees, and communities.",
      },
      {
        type: "text",
        value:
          "We are committed to earning and maintaining your trust through ethical data practices, robust privacy governance, and transparent communication.",
      },
      {
        type: "text",
        value:
          "This Privacy Policy explains how we collect, use, share, and safeguard your personal information when you interact with Zoiko Group companies, brands, services, websites, and digital platforms.",
      },
    ],
  },
  {
    id: "scope",
    heading: "1. Scope of This Policy",
    extrabold: true,
    blocks: [
      { type: "text", value: "This Privacy Policy applies to:" },
      {
        type: "list",
        items: [
          "Zoiko Group Inc. and its subsidiaries, affiliates, and brands",
          "All websites, applications, and online services operated by Zoiko Group",
          "Offline activities such as corporate events, customer support, and B2B engagements",
        ],
      },
      { type: "text", value: "This Policy does not apply to:" },
      {
        type: "list",
        items: [
          "Third-party websites or services linked from Zoiko Group websites",
          "Services governed by product-specific privacy notices",
        ],
      },
    ],
  },
  {
    id: "information-we-collect",
    heading: "2. Information We Collect",
    blocks: [
      { type: "text", value: "Information You Provide to Us" },
      {
        type: "list",
        items: [
          "Contact information (name, email address, phone number, mailing address)",
          "Professional information (job title, employer, industry)",
          "Payment information (processed via secure third-party providers)",
          "Preferences, feedback, and survey responses",
          "Event registration information",
          "Support requests and correspondence",
        ],
      },
      { type: "text", value: "Information Collected Automatically" },
      {
        type: "list",
        items: [
          "IP address and geolocation data",
          "Device identifiers and technical characteristics",
          "Browser type, operating system, and referring URLs",
          "Website/app interaction data (pages viewed, time spent, clickstream)",
          "Cookies, beacons, tags, and similar technologies",
        ],
      },
      { type: "text", value: "Information from Third Parties" },
      {
        type: "list",
        items: [
          "Business partners and affiliates",
          "Publicly available sources",
          "Social media platforms (in accordance with your privacy settings)",
          "Data enrichment providers for B2B services",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    heading: "3. How We Use Your Information",
    blocks: [
      { type: "text", value: "We use your personal information to:" },
      {
        type: "list",
        items: [
          "Provide, maintain, and improve Zoiko Group products and services",
          "Process transactions and fulfill contractual obligations",
          "Personalize content and experiences",
          "Conduct marketing, advertising, and promotional activities (where permitted)",
          "Perform analytics and business intelligence",
          "Develop and enhance AI-powered features and services",
          "Detect, prevent, and mitigate fraud and security risks",
          "Comply with legal obligations and regulatory requirements",
          "Exercise our legal rights and defend against claims",
        ],
      },
    ],
  },
  {
    id: "legal-basis",
    heading: "Legal Basis for Processing (GDPR)",
    blocks: [
      {
        type: "text",
        value:
          "Where required under GDPR or similar laws, we process personal data based on:",
      },
      {
        type: "list",
        items: [
          "Consent (for marketing, use of certain cookies)",
          "Performance of a contract (to provide services you request)",
          "Compliance with legal obligations",
          "Legitimate interests (including improving services, securing our systems, preventing fraud)",
        ],
      },
    ],
  },
  {
    id: "sharing",
    heading: "4. Sharing of Information",
    blocks: [
      { type: "text", value: "We do not sell your personal information." },
      { type: "text", value: "We may share information with:" },
      {
        type: "list",
        items: [
          "Zoiko Group subsidiaries and affiliates for operational and administrative purposes",
          {
            label:
              "Service providers and data processors, who support services such as:",
            items: [
              "Cloud hosting and data storage",
              "Payment processing",
              "Customer relationship management",
              "Marketing and communications",
              "Security and fraud prevention",
            ],
          },
          "Partners, where you provide consent or engage in joint offerings",
          "Regulators and government authorities, where required by law or to protect rights, safety, or property",
          "Third parties in connection with mergers, acquisitions, or other corporate restructuring, subject to applicable safeguards",
        ],
      },
      {
        type: "text",
        value: `A list of categories of processors and types of partners is available upon request at ${PRIVACY_EMAIL}.`,
      },
    ],
  },
  {
    id: "cookies",
    heading: "5. Cookies and Tracking Technologies",
    blocks: [
      { type: "text", value: "We use cookies and similar technologies to:" },
      {
        type: "list",
        items: [
          "Enable core site functionality",
          "Personalize your experience",
          "Analyze usage trends",
          "Support advertising and marketing activities",
        ],
      },
      {
        type: "text",
        value:
          "You may manage cookie preferences through our cookie management tools and browser settings.",
      },
      {
        type: "text",
        value: "For more details, please see our Cookie Policy [link].",
      },
    ],
  },
  {
    id: "international-transfers",
    heading: "6. International Data Transfers",
    blocks: [
      {
        type: "text",
        value:
          "Given our global operations, personal information may be transferred to, and processed in, countries other than your country of residence.",
      },
      {
        type: "text",
        value:
          "When transferring personal data internationally, we implement appropriate safeguards, such as:",
      },
      {
        type: "list",
        items: [
          "Standard Contractual Clauses (SCCs) approved by regulatory authorities",
          "Adequacy decisions issued by the European Commission or UK authorities",
          "Other applicable data transfer mechanisms recognized under GDPR and CCPA",
        ],
      },
    ],
  },
  {
    id: "automated-decisions",
    heading: "7. Automated Decision-Making and Profiling",
    blocks: [
      {
        type: "text",
        value:
          "Some Zoiko Group services may include automated decision-making or profiling, for example:",
      },
      {
        type: "list",
        items: [
          "Personalized content recommendations",
          "Risk scoring for fraud prevention",
          "Certain AI-driven service enhancements (ex: ZoikoPal, ZoikoTime)",
        ],
      },
      {
        type: "text",
        value:
          "Where legally required, we will provide meaningful information about the logic involved and allow you to request human intervention or object to such processing.",
      },
    ],
  },
  {
    id: "data-retention",
    heading: "8. Data Retention",
    blocks: [
      {
        type: "text",
        value: "We retain personal information only as long as necessary to:",
      },
      {
        type: "list",
        items: [
          "Fulfill the purposes outlined in this Policy",
          "Comply with applicable legal and regulatory obligations",
          "Resolve disputes and enforce our rights",
        ],
      },
      {
        type: "text",
        value:
          "We apply data minimization and periodic review practices to ensure that personal information is not retained longer than necessary.",
      },
    ],
  },
  {
    id: "data-security",
    heading: "9. Data Security",
    blocks: [
      {
        type: "text",
        value:
          "We implement industry-leading technical and organizational measures to safeguard personal information, including:",
      },
      {
        type: "list",
        items: [
          "Encryption of data in transit and at rest",
          "Access controls and authentication mechanisms",
          "Monitoring for unauthorized access and threats",
          "Regular security testing and vulnerability assessments",
          "Employee training on privacy and data protection",
        ],
      },
    ],
  },
  {
    id: "your-rights",
    heading: "10. Your Rights and Choices",
    blocks: [
      {
        type: "text",
        value:
          "Depending on your jurisdiction, you may have the following rights:",
      },
      {
        type: "list",
        items: [
          "Access to your personal data",
          "Correction of inaccurate data",
          "Erasure (right to be forgotten)",
          "Restriction of processing",
          "Objection to processing, including marketing",
          "Data portability",
          "Withdraw consent (where processing is based on consent)",
          "Lodge a complaint with a supervisory authority",
        ],
      },
      {
        type: "text",
        value: `You can exercise these rights by contacting: ${PRIVACY_EMAIL}.`,
      },
    ],
  },
  {
    id: "childrens-privacy",
    heading: "11. Children’s Privacy",
    blocks: [
      {
        type: "text",
        value:
          "Zoiko Group does not knowingly collect personal information from children under age 16 without verifiable parental consent.",
      },
      {
        type: "text",
        value:
          "If we discover that we have inadvertently collected such data, we will promptly delete it and take appropriate action.",
      },
    ],
  },
  {
    id: "privacy-governance",
    heading: "12. Privacy Governance and Accountability",
    blocks: [
      {
        type: "text",
        value:
          "We maintain an internal Privacy Governance Framework, overseen by:",
      },
      {
        type: "list",
        items: [
          "The Group Privacy Office",
          "The Office of the Chief Legal & Governance Officer",
          "Our Corporate Governance and Nominating Committee",
          "Business Unit Privacy Champions across Zoiko Group brands",
        ],
      },
      {
        type: "text",
        value:
          "We conduct regular privacy impact assessments, audits, and training to ensure ongoing compliance and accountability.",
      },
    ],
  },
  {
    id: "changes",
    heading: "13. Changes to This Privacy Policy",
    blocks: [
      {
        type: "text",
        value:
          "We may update this Privacy Policy periodically. Updates will be posted on this page with a revised Effective Date.",
      },
      {
        type: "text",
        value:
          "Significant changes will be communicated through appropriate channels.",
      },
    ],
  },
  {
    id: "contact",
    heading: "14. Contact Us",
    blocks: [
      {
        type: "text",
        value:
          "If you have any questions about this Privacy Policy or your personal data rights, please contact:",
      },
      { type: "contact" },
      { type: "text", value: "Closing Statement" },
      {
        type: "text",
        value:
          "At Zoiko Group, privacy is at the core of our commitment to ethical innovation and trusted relationships.",
      },
      {
        type: "text",
        value:
          "We remain dedicated to upholding the highest standards of privacy, transparency, and data protection as we serve our global community.",
      },
    ],
  },
];
