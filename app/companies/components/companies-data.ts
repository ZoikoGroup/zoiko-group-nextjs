export type Brand = {
  /** Omitted on lead-in bullets that introduce the list rather than name a brand. */
  name?: string;
  description: string;
};

export type CompanyGroup = {
  id: string;
  title: string;
  /**
   * Renders the title at body weight instead of as a bold heading — the source
   * copy sets this one group's title in the same grey as its tagline.
   */
  subduedTitle?: boolean;
  /** The line under the title — the group's promise, in sentence form. */
  tagline: string;
  intro?: string;
  /** Label above the brand list, where the design calls one out. */
  listLabel?: string;
  brands: Brand[];
};

export const companyGroups: CompanyGroup[] = [
  {
    id: "technology",
    title: "Technology & Digital Platforms",
    tagline: "Inventing Tomorrow's Solutions — Today",
    intro:
      "ZoikoTech is the Group's advanced technology division, focused on building scalable, AI-powered platforms that address core business, social, and operational challenges across borders.",
    listLabel: "Flagship Products Include:",
    brands: [
      {
        name: "ZoikoTime",
        description:
          "AI-optimized time management for personal and workplace productivity",
      },
      {
        name: "ZoikoSuite",
        description:
          "Integrated accounting, business automation, and compliance platform",
      },
      {
        name: "ZoikoNex",
        description:
          "Advanced telecom billing and monetization engine for MVNOs and operators",
      },
      {
        name: "ZoikoShield",
        description:
          "AI-enhanced cybersecurity platform for proactive digital defense",
      },
      {
        name: "ZoikoPal",
        description:
          "Companion and care platform supporting the elderly and vulnerable with intelligent AI",
      },
      {
        name: "ZoikoSocial",
        description:
          "Global social media network for animal lovers and conservation advocates",
      },
      {
        name: "BookingOrbit",
        description:
          "All-in-one online booking, scheduling, and payment platform for service-based businesses across travel, health, beauty, and events",
      },
    ],
  },
  {
    id: "telecommunications",
    title: "Telecommunications & Connectivity",
    tagline: "Powering Global and Local Connectivity",
    brands: [
      {
        name: "Zoiko Mobile USA & Zoiko Mobile UK",
        description:
          "Premium MVNOs delivering seamless connectivity with a lifestyle-first approach — serving animal lovers, music fans, entrepreneurs, and veterans",
      },
      {
        name: "GoLite Mobile",
        description:
          "A marine-themed MVNO blending high-quality wireless service with marine conservation efforts",
      },
      {
        name: "DriverX Mobile",
        description:
          "A specialized mobile brand engineered for drivers, couriers, and logistics professionals",
      },
      {
        name: "Zoiko Telecom",
        description:
          "Offering travel SIMs, broadband access, and wholesale telecom services — including physical SIMs, eSIMs, and BT-authorized broadband distribution",
      },
    ],
  },
  {
    id: "media",
    title: "Media & Content",
    tagline: "Ethical Entertainment. Educational Impact.",
    brands: [
      {
        name: "Zoiko TV",
        description:
          "A next-generation OTT (over-the-top) content platform — delivering original programming focused on animals, sustainability, ethical technology, and global innovation stories.",
      },
    ],
  },
  {
    id: "consumer",
    title: "Consumer Products & Food Innovation",
    subduedTitle: true,
    tagline: "Bringing Flavor, Culture & Wellness to the World",
    brands: [
      {
        name: "NoxxChicken",
        description:
          "A culturally rich QSR brand revolutionizing fried chicken with authentic Caribbean herbs and spices",
      },
      {
        name: "La Caribbean Taste",
        description:
          "Premium condiments and food products crafted with heritage recipes and modern food science",
      },
    ],
  },
  {
    id: "financial",
    title: "Financial & Professional Services",
    tagline: "Enabling Business Prosperity Across Borders",
    brands: [
      {
        name: "ZoikoPay",
        description:
          "A modern business finance, HR, and payroll platform tailored for Caribbean enterprises and beyond — combining AI automation, real-time compliance, and cross-border payroll processing.",
      },
    ],
  },
  {
    id: "mvnos",
    title: "Community and Lifestyle-Centric MVNOs",
    tagline: "Creating Mobile Brands with Purpose and Identity",
    brands: [
      {
        description:
          "Zoiko Group leads the next wave of telecom innovation with a portfolio of mobile brands built around cultural connection, identity, and advocacy.",
      },
      {
        name: "Sable Mobile",
        description:
          "Empowering the African American community with authentic representation, reinvestment, and culturally rooted service",
      },
      {
        name: "Avivo Mobile",
        description:
          "Designed for LGBTQ+ individuals and families, with inclusive plans and wellness-driven community partnerships",
      },
      {
        name: "Raíces Mobile",
        description:
          "Celebrating Latino and Hispanic Americans with bilingual support, cultural pride, and family-first offerings",
      },
      {
        name: "EverGuard Mobile",
        description:
          "Built for military personnel, veterans, and their families — including scholarship contributions and veteran organization partnerships",
      },
      {
        name: "HavenZ Mobile",
        description:
          "Dedicated to seniors, offering dignity-first care, simplified digital plans, and senior-friendly customer support",
      },
    ],
  },
];

export const philosophyPrinciples: string[] = [
  "To innovate with purpose",
  "To lead with responsibility",
  "To empower underserved and emerging markets",
  "To create sustainable, long-term value",
  "To ensure every brand uplifts the communities it serves",
];
