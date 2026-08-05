import type { Section } from "./ResponsibleAiDocument";

export const AI_EMAIL = "ai-governance@zoikogroup.com";

export const responsibleAiSections: Section[] = [
  {
    id: "intro",
    blocks: [
      {
        type: "lead",
        value: "Empowering Innovation with Integrity and Humanity",
      },
      { type: "lead", value: "Effective Date: June 2025" },
      {
        type: "text",
        value:
          "At Zoiko Group, we view Artificial Intelligence (AI) as one of the most powerful tools shaping the future of business, society, and the planet.",
      },
      { type: "text", value: "With this power comes profound responsibility." },
      {
        type: "text",
        value:
          "We are committed to ensuring that our development and use of AI technologies:",
      },
      {
        type: "list",
        items: [
          "Advance human well-being",
          "Respect fundamental rights and freedoms",
          "Align with democratic values",
          "Are safe, secure, transparent, and trustworthy",
        ],
      },
      {
        type: "text",
        value:
          "This Responsible AI Use Policy guides how we build and deploy AI across all Zoiko Group brands — and signals our determination to lead with integrity.",
      },
    ],
  },
  {
    id: "vision",
    heading: "1. Our Vision for AI at Zoiko Group",
    blocks: [
      {
        type: "text",
        value: "We aim to harness AI as a force for human good, guided by:",
      },
      {
        type: "list",
        items: [
          "Our corporate values of ethics, accountability, diversity, and trust",
          "Our mission to build world-class, human-centered technologies",
          "Our belief that AI must serve humanity, not the reverse",
        ],
      },
      {
        type: "text",
        value:
          "AI at Zoiko Group is built to empower people, not replace them — to amplify human potential while respecting dignity and freedom.",
      },
    ],
  },
  {
    id: "scope",
    heading: "2. Scope of This Policy",
    blocks: [
      { type: "text", value: "This Policy applies to:" },
      {
        type: "list",
        items: [
          "All AI systems and capabilities used, developed, or deployed by Zoiko Group Inc., its subsidiaries, and affiliates",
          // The design breaks this brand list across two bullets.
          "AI used in products and services across: ZoikoPay, ZoikoPal, ZoikoTime, ZoikoNex, ZoikoSocial, BookingOrbit,",
          "Zoiko Mobile, GoLite Mobile, DriverX Mobile, Zoiko Telecom, Zoiko TV, and others",
          "All employees, contractors, and third-party partners involved in AI activities for Zoiko Group",
        ],
      },
    ],
  },
  {
    id: "principles",
    heading: "3. Responsible AI Principles",
    blocks: [
      { type: "text", value: "Fairness & Non-Discrimination" },
      { type: "text", value: "We strive to ensure AI systems:" },
      {
        type: "list",
        items: [
          "Treat all people fairly",
          "Do not create or reinforce unfair bias",
          "Are tested for fairness, accuracy, and inclusiveness",
          "Are regularly reviewed to identify and mitigate unintended harms",
        ],
      },
      { type: "text", value: "Transparency & Explainability" },
      { type: "text", value: "We commit to:" },
      {
        type: "list",
        items: [
          "Disclose when people are interacting with AI vs. a human",
          "Provide meaningful explanations of how AI-driven decisions are made, where possible",
          "Communicate clearly about the intended uses and limitations of AI systems",
        ],
      },
      { type: "text", value: "Accountability & Human Oversight" },
      { type: "text", value: "We ensure that:" },
      {
        type: "list",
        items: [
          "Humans remain accountable for AI outcomes",
          "AI is never deployed in a fully autonomous manner where life-altering decisions are involved without human-in-the-loop oversight",
          "The Board of Directors reviews AI risk reports at least annually",
          "The AI Ethics Committee provides independent oversight and guidance on AI deployments",
        ],
      },
      {
        type: "text",
        value: "Human oversight is mandatory for AI systems involved in:",
      },
      {
        type: "list",
        items: [
          "Healthcare",
          "Financial services",
          "Legal services",
          "Employment decisions",
          "Public sector services",
          "Safety-critical applications",
        ],
      },
      { type: "text", value: "Privacy, Security & Data Protection" },
      { type: "text", value: "AI systems at Zoiko Group comply with:" },
      {
        type: "list",
        items: [
          "Our Data Protection & Compliance Policy (GDPR / CCPA / global laws)",
          "Privacy by Design and Security by Design principles",
          "Rigorous Privacy Impact Assessments (PIAs) for AI involving personal data",
          "Strong controls to prevent AI misuse",
        ],
      },
      { type: "text", value: "Human-Centered Design & Societal Benefit" },
      { type: "text", value: "We commit to:" },
      {
        type: "list",
        items: [
          "Develop AI that augments, not replaces, human intelligence",
          "Prioritize AI innovation that drives positive social impact, such as:",
          "Accessibility",
          "Environmental sustainability",
          "Health and well-being",
          "Ethical business",
          "Avoid AI use cases that undermine human rights, democratic values, or social cohesion",
        ],
      },
      { type: "text", value: "Transparency About Limitations" },
      { type: "text", value: "We openly acknowledge that:" },
      {
        type: "list",
        items: [
          "No AI system is perfect or infallible",
          "AI outputs are probabilistic and may reflect limitations in training data",
          "We will strive to communicate limitations clearly to users and stakeholders",
        ],
      },
    ],
  },
  {
    id: "governance",
    heading: "4. AI Governance & Oversight",
    blocks: [
      { type: "text", value: "Board of Directors" },
      {
        type: "list",
        items: [
          "Receives formal AI risk reports at least annually. Ensures Board-level accountability.",
        ],
      },
      { type: "text", value: "Corporate Governance and Nominating Committee" },
      {
        type: "list",
        items: [
          "Provides dedicated Board oversight of AI ethics and governance.",
        ],
      },
      { type: "text", value: "AI Ethics Committee" },
      {
        type: "list",
        items: [
          "A cross-functional committee responsible for:",
          "Reviewing high-risk AI use cases",
          "Conducting and approving Algorithmic Impact Assessments (AIAs)",
          "Advising on AI policies and practices",
          "Monitoring regulatory developments",
          "Recommending public disclosures on AI use",
        ],
      },
      {
        type: "text",
        value: "Group Privacy Office & Data Protection Officers (DPOs)",
      },
      {
        type: "list",
        items: ["Ensure AI systems comply with global privacy laws."],
      },
      { type: "text", value: "Chief Legal & Governance Officer" },
      {
        type: "list",
        items: [
          "Chairs the AI Ethics Committee. Ensures legal and ethical integrity of AI across the Group.",
        ],
      },
    ],
  },
  {
    id: "aias",
    heading: "5. Algorithmic Impact Assessments (AIAs)",
    blocks: [
      { type: "text", value: "AI As are required for any AI system that may:" },
      {
        type: "list",
        items: [
          "Affect individual rights, opportunities, or outcomes",
          "Make or inform significant decisions about people",
          "Process sensitive personal data",
          "Involve automated decision-making in high-risk sectors",
        ],
      },
      { type: "text", value: "AIAs cover:" },
      {
        type: "list",
        items: [
          "Fairness, accuracy, and non-discrimination",
          "Data privacy and security",
          "Explainability and transparency",
          "Human oversight mechanisms",
          "Social and ethical impacts",
          "Regulatory compliance",
        ],
      },
    ],
  },
  {
    id: "vendors",
    heading: "6. Vendor & Third-Party AI Requirements",
    blocks: [
      {
        type: "text",
        value: "We require all third-party AI vendors and partners to:",
      },
      {
        type: "list",
        items: [
          "Adhere to Zoiko Group’s Responsible AI Principles",
          "Demonstrate robust AI ethics, fairness, and privacy practices",
          "Undergo vendor AI risk assessments",
          "Enter into contractual commitments on AI ethics and data protection",
          "Be subject to ongoing monitoring where appropriate",
        ],
      },
      {
        type: "text",
        value:
          "We do not allow vendors to use AI in ways that violate human rights or Zoiko Group’s standards.",
      },
    ],
  },
  {
    id: "training",
    heading: "7. Employee Training & Culture of Responsible AI",
    blocks: [
      {
        type: "text",
        value: "Zoiko Group promotes a Culture of Responsible AI through:",
      },
      {
        type: "list",
        items: [
          "Mandatory training on AI ethics for relevant roles",
          "Leadership communications emphasizing ethical AI use",
          "AI governance integrated into product development lifecycles",
          "Cross-functional collaboration between technology, legal, privacy, and governance teams",
        ],
      },
      {
        type: "text",
        value:
          "Responsible AI is part of our identity — and a key driver of our trustworthiness.",
      },
    ],
  },
  {
    id: "transparency",
    heading: "8. Public Transparency & Engagement",
    blocks: [
      { type: "text", value: "Zoiko Group commits to:" },
      {
        type: "list",
        items: [
          "Communicate openly about our use of AI in products and services",
          "Publish clear Responsible AI commitments on our corporate website",
          "Engage with external stakeholders, including civil society, academia, and regulatory bodies",
          "Participate in global multi-stakeholder forums to advance AI governance",
        ],
      },
    ],
  },
  {
    id: "continuous-improvement",
    heading: "9. Continuous Improvement & Regulatory Readiness",
    blocks: [
      {
        type: "text",
        value: "We are dedicated to continuous improvement of AI governance.",
      },
      { type: "text", value: "Zoiko Group actively:" },
      {
        type: "list",
        items: [
          "Benchmarks against global best practices (ISO, NIST AI RMF, OECD AI Principles, EU AI Act)",
          "Prepares for compliance with emerging AI laws globally",
          "Monitors AI impacts and iteratively improves policies",
          "Shares learnings internally and externally where appropriate",
        ],
      },
    ],
  },
  {
    id: "contact",
    heading: "10. Contact Us",
    blocks: [
      {
        type: "text",
        value: "For questions about this Responsible AI Use Policy, contact:",
      },
      { type: "contact" },
      { type: "text", value: "Closing Statement" },
      {
        type: "text",
        value:
          "At Zoiko Group, we believe that trustworthy AI is foundational to our future.",
      },
      {
        type: "text",
        value:
          "We are committed to leading with responsibility, transparency, and humanity — ensuring that AI remains a tool to empower individuals, strengthen society, and build a better world.",
      },
    ],
  },
];
