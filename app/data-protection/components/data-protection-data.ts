import type { Section } from "./DataProtectionDocument";

export const PRIVACY_EMAIL = "privacy@zoikogroup.com";

export const dataProtectionSections: Section[] = [
  {
    id: "intro",
    blocks: [
      {
        type: "lead",
        value: "Building Trust through Ethical Data Stewardship",
      },
      { type: "lead", value: "Effective Date: June 2025" },
      {
        type: "text",
        value:
          "At Zoiko Group, we recognize that in today’s digital economy, trust is paramount. We are deeply committed to respecting individual privacy and protecting personal information across all of our brands, platforms, and operations.",
      },
      {
        type: "text",
        value:
          "Our data protection practices are not driven by compliance alone — they reflect our core values of transparency, integrity, responsibility, and innovation.",
      },
      {
        type: "semibold",
        value:
          "This Data Protection & Compliance Policy outlines how Zoiko Group aligns with global data protection standards, including:",
      },
      {
        type: "list",
        items: [
          "The General Data Protection Regulation (GDPR)",
          "The California Consumer Privacy Act (CCPA)",
          "The California Privacy Rights Act (CPRA)",
          "Other applicable national and regional privacy laws",
        ],
      },
      {
        type: "text",
        value:
          "We also align our practices with industry-leading frameworks, including:",
      },
      {
        type: "list",
        items: [
          "ISO/IEC 27701 (Privacy Information Management System)",
          "NIST Privacy Framework",
          "APEC Cross-Border Privacy Rules (CBPR)",
        ],
      },
    ],
  },
  {
    id: "commitment",
    heading: "1. Our Commitment to Global Data Protection",
    blocks: [
      {
        type: "text",
        value:
          "Zoiko Group maintains a Global Privacy & Data Protection Program designed to:",
      },
      {
        type: "list",
        items: [
          "Embed privacy and data protection into the fabric of our organization",
          "Promote accountability and ethical stewardship of personal information",
          "Respect individual privacy rights across all jurisdictions where we operate",
          "Support responsible innovation and AI governance aligned with data ethics principles",
          "Foster a culture of privacy across all levels of the company",
        ],
      },
    ],
  },
  {
    id: "scope",
    heading: "2. Scope of This Policy",
    blocks: [
      {
        type: "text",
        value: "This Policy applies to all personal information processed by:",
      },
      {
        type: "list",
        items: [
          "Zoiko Group Inc. and its subsidiaries and affiliates",
          "All Zoiko Group brands and business units, including: ZoikoPay, ZoikoPal, ZoikoTime, ZoikoNex, ZoikoSocial, BookingOrbit, Zoiko Mobile, GoLite Mobile, DriverX Mobile, Zoiko Telecom, Zoiko TV, NoxxChicken, La Caribbean Taste, and others",
          "Employees, contractors, partners, vendors, and third parties processing data on behalf of Zoiko Group",
        ],
      },
    ],
  },
  {
    id: "roles",
    heading: "3. Roles & Responsibilities",
    blocks: [
      {
        type: "text",
        value:
          "Depending on the nature of the processing, Zoiko Group may act as:",
      },
      {
        type: "list",
        items: [
          "A Data Controller — determining the purposes and means of processing personal data",
          "A Data Processor — processing personal data on behalf of another controller",
        ],
      },
      {
        type: "text",
        value:
          "We ensure that appropriate contracts, Data Processing Agreements (DPAs), and privacy safeguards are in place with all business partners, vendors, and customers.",
      },
    ],
  },
  {
    id: "cross-border",
    heading: "4. Cross-Border Data Transfers",
    blocks: [
      {
        type: "text",
        value:
          "Given our global operations, personal information may be transferred across borders, including to countries without the same level of data protection.",
      },
      { type: "text", value: "To safeguard these transfers, Zoiko Group:" },
      {
        type: "list",
        items: [
          "Implements Standard Contractual Clauses (SCCs) approved by EU and UK authorities",
          "Conducts Data Transfer Impact Assessments (DTIAs) to assess potential risks",
          "Utilizes Adequacy Decisions where applicable",
          "Ensures contractual, organizational, and technical safeguards are in place",
          "Aligns with APEC CBPR principles where relevant",
        ],
      },
    ],
  },
  {
    id: "data-security",
    heading: "5. Data Security & Protection",
    blocks: [
      {
        type: "text",
        value:
          "Zoiko Group employs a defense-in-depth approach to securing personal data, including:",
      },
      {
        type: "list",
        items: [
          "Encryption of data in transit and at rest",
          "Identity and access management controls",
          "Multi-factor authentication and zero-trust principles",
          "Network segmentation and advanced threat protection",
          "Endpoint detection and response (EDR) systems",
          "Application security reviews and secure development practices",
          "Continuous monitoring, penetration testing, and incident response capabilities",
          "AI model governance and bias testing for AI-powered services (ZoikoPal, ZoikoTime, ZoikoNex)",
        ],
      },
    ],
  },
  {
    id: "data-subject-rights",
    heading: "6. Data Subject Rights",
    blocks: [
      {
        type: "text",
        value:
          "We respect and enable individuals to exercise their privacy rights, in accordance with GDPR, CCPA, CPRA, and other applicable laws.",
      },
      { type: "text", value: "Your rights may include:" },
      {
        type: "list",
        items: [
          "Right of Access — obtain a copy of your personal data",
          "Right to Rectification — correct inaccurate or incomplete data",
          "Right to Erasure (Right to be Forgotten)",
          "Right to Restriction of Processing",
          "Right to Object — to processing, including direct marketing",
          "Right to Data Portability",
          "Right not to be subject to automated decisions with legal or significant effects",
          "Right to Withdraw Consent",
          "Right to Non-Discrimination (CCPA/CPRA)",
        ],
      },
      {
        type: "text",
        value: `To exercise your rights, contact: ${PRIVACY_EMAIL}`,
      },
      {
        type: "text",
        value:
          "We will respond in accordance with applicable laws and regulatory timelines.",
      },
    ],
  },
  {
    id: "ai-governance",
    heading: "7. AI & Data Governance",
    blocks: [
      {
        type: "text",
        value:
          "As an innovator in AI-powered services, Zoiko Group is committed to Responsible AI Use aligned with data protection principles.",
      },
      { type: "text", value: "Our AI governance framework includes:" },
      {
        type: "list",
        items: [
          "Algorithmic Impact Assessments (AIAs) for high-risk AI uses",
          "Human oversight of automated decision-making",
          "Explainability and transparency in AI outputs",
          "Bias testing and mitigation",
          "Alignment with AI ethics principles and data protection laws",
        ],
      },
    ],
  },
  {
    id: "vendor-management",
    heading: "8. Vendor & Third-Party Management",
    blocks: [
      {
        type: "text",
        value: "Zoiko Group maintains a robust Vendor Risk Management Program.",
      },
      { type: "text", value: "We:" },
      {
        type: "list",
        items: [
          "Conduct privacy and security due diligence on all third parties processing personal data",
          "Require Data Processing Agreements (DPAs) that include GDPR Article 28 requirements",
          "Monitor and audit vendor compliance",
          "Require vendors to process personal data only under Zoiko Group’s documented instructions",
        ],
      },
    ],
  },
  {
    id: "childrens-data",
    heading: "9. Children’s Data",
    blocks: [
      {
        type: "text",
        value:
          "Zoiko Group does not knowingly collect personal data from children under 16 without appropriate parental consent.",
      },
      {
        type: "text",
        value: `If you believe we may have collected such data, please contact ${PRIVACY_EMAIL} and we will take prompt action.`,
      },
    ],
  },
  {
    id: "governance-audits",
    heading: "10. Governance, Accountability & Audits",
    blocks: [
      { type: "text", value: "Data protection governance is overseen by:" },
      {
        type: "list",
        items: [
          "Group Privacy Office",
          "Chief Legal & Governance Officer",
          "Corporate Governance and Nominating Committee (Board-level oversight)",
          "Appointed Data Protection Officers (DPOs) where required",
        ],
      },
      {
        type: "text",
        value:
          "The Board receives regular privacy reports to ensure accountability at the highest level.",
      },
      { type: "text", value: "We conduct:" },
      {
        type: "list",
        items: [
          "Privacy Impact Assessments (PIAs) for new processing activities",
          "Regular internal and external privacy audits",
          "Alignment with ISO/IEC 27701 Privacy Information Management standards",
          "Employee privacy training and awareness programs company-wide",
        ],
      },
      {
        type: "text",
        value:
          "We foster a culture of privacy through leadership, training, and transparent communication.",
      },
    ],
  },
  {
    id: "regulatory-cooperation",
    heading: "11. Regulatory Cooperation & Compliance",
    blocks: [
      { type: "text", value: "Zoiko Group cooperates fully with:" },
      {
        type: "list",
        items: [
          "European Data Protection Authorities (GDPR)",
          "California Privacy Protection Agency (CPPA)",
          "UK Information Commissioner’s Office (ICO)",
          "Other national privacy regulators",
        ],
      },
      {
        type: "text",
        value:
          "We actively monitor regulatory developments worldwide and continuously adapt our practices.",
      },
    ],
  },
  {
    id: "continuous-improvement",
    heading: "12. Continuous Improvement",
    blocks: [
      {
        type: "text",
        value:
          "We are committed to continuous improvement of our Data Protection & Privacy Program.",
      },
      { type: "text", value: "This includes:" },
      {
        type: "list",
        items: [
          "Regular policy and process reviews",
          "Benchmarking against Fortune 100 best practices",
          "Participation in global privacy and AI governance initiatives",
          "Engaging with stakeholders to ensure alignment with emerging privacy expectations",
        ],
      },
      {
        type: "text",
        value:
          "We view privacy as a strategic advantage and a core component of ethical business leadership.",
      },
    ],
  },
  {
    id: "contact",
    heading: "13. Contact Information",
    blocks: [
      {
        type: "text",
        value:
          "For questions or to exercise your data protection rights, contact:",
      },
      { type: "contact" },
      { type: "text", value: "Closing Statement" },
      {
        type: "text",
        value:
          "At Zoiko Group, we believe that privacy is a human right and that ethical data stewardship is foundational to building trust.",
      },
      {
        type: "text",
        value:
          "We will continue to uphold the highest standards of data protection, transparency, and accountability as we deliver world-class innovations to our customers and partners globally.",
      },
    ],
  },
];
