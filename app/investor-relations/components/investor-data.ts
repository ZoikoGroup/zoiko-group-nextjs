import type { DashItem } from "./Prose";

export type InvestorReason = {
  /** Rendered with its 1-based position, as the design numbers these. */
  title: string;
  points: DashItem[];
};

export const investorReasons: InvestorReason[] = [
  {
    title: "Visionary Leadership with Operational Discipline",
    points: [
      "Founded and led by Lennox McLeod, a globally respected entrepreneur and enterprise builder.",
      "Supported by a multi-disciplinary executive team with deep experience across technology, finance, law, and emerging markets.",
    ],
  },
  {
    title: "High-Growth, Diversified Portfolio",
    points: [
      {
        label: "Presence across multiple high-performing sectors:",
        items: [
          "AI & SaaS Platforms",
          "Telecommunications & MVNOs",
          "Media & Content Streaming",
          "Consumer Goods & QSR Innovation",
          "Financial & Professional Services",
        ],
      },
      "Cross-portfolio synergy drives shared innovation, platform reuse, and cost advantage.",
    ],
  },
  {
    title: "Global Footprint with Market Agility",
    points: [
      {
        label: "Active operations and investments across:",
        items: [
          "North America (USA, Canada)",
          "United Kingdom and broader Europe",
          "Asia (Shenzhen and Singapore)",
          "Africa (with expansion strategy in key technology hubs)",
        ],
      },
      "Positioned to scale across emerging and frontier markets with strong digital demand.",
    ],
  },
  {
    title: "Governance-Driven Growth",
    points: [
      {
        label:
          "Strong internal controls and corporate governance aligned with:",
        items: [
          "OECD Principles",
          "UK Corporate Governance Code",
          "Voluntary best practices under Sarbanes-Oxley (SOX)",
        ],
      },
      "Risk oversight led by independent Board committees, including Audit, Compensation, and ESG.",
    ],
  },
  {
    title: "Sustainability as a Core Driver of Value",
    points: [
      "ESG integrated into business unit KPIs and executive compensation",
      {
        label:
          "Annual Sustainability & Corporate Responsibility Report aligned to:",
        items: ["GRI, SASB, and TCFD standards"],
      },
      {
        label: "Social impact embedded through initiatives such as:",
        items: [
          "Community and Lifestyle-Centric MVNOs",
          "Education & scholarship reinvestment",
          "Digital inclusion, broadband equity, and ethical AI",
        ],
      },
    ],
  },
];

export const capitalStructure: DashItem[] = [
  "Privately held, with majority ownership by the Founder and Executive Chairman.",
  "Minority stakes held by select strategic institutional investors across technology, finance, and consumer segments.",
  {
    label: "Exploring structured capital raises, including:",
    items: [
      "Series-level growth funding",
      "Subsidiary-specific IPOs or SPAC pathways",
      "Cross-border joint ventures with infrastructure and impact funds",
    ],
  },
];

export const financialDiscipline: DashItem[] = [
  "Consolidated financial reporting to IFRS and US GAAP standards",
  "External audits by internationally recognized audit partners",
  "Group-wide Investor Communications & Engagement Policy",
  "Quarterly performance reviews and confidential data rooms available to qualified investors",
  {
    label: "Annual publication of:",
    items: [
      "Corporate Governance Summary",
      "ESG Metrics Report",
      "Group Strategic Outlook & Portfolio Review",
    ],
  },
];

export const investorMaterials: string[] = [
  "Group Portfolio Snapshot & Market Opportunity Overview",
  "Consolidated Financial Brief (subject to NDA)",
  "ESG Framework & Reporting Metrics",
  "Subsidiary-Level Performance Snapshots",
  "Board & Executive Governance Profiles",
];

export const investorCriteria: string[] = [
  "Believe in long-term value creation",
  "Align with our ethical innovation principles",
  "Recognize the future of connectivity, AI, and scalable platforms",
  "Value transparency, governance, and ESG integration",
];

export const INVESTOR_EMAIL = "investors@zoikogroup.com";
export const INVESTOR_ADDRESS = "1401 21st Street, Sacramento, CA 95811, USA";
export const INVESTOR_PHONE = "+1-800-484-5564";
