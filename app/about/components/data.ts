export type SystemPillar = {
  label: string;
  title: string;
  description: string;
};

export const systemPillars: SystemPillar[] = [
  {
    label: "Scale",
    title: "Grow proven platforms into recognized flagships",
    description:
      "We invest further in the businesses that have already demonstrated real operating traction, helping them reach category-defining scale.",
  },
  {
    label: "Integrate",
    title: "Reuse shared intelligence, infrastructure and trust",
    description:
      "Operating businesses draw on common technology, security and operating capabilities so each one moves faster than it could alone.",
  },
  {
    label: "Invent",
    title: "Develop future control points",
    description:
      "Zoiko Research and Frontier Labs explore what comes next, graduating ideas into businesses only once they earn it.",
  },
];

export type BusinessGroup = {
  name: string;
  description: string;
  image: string;
  href: string;
  /** Column span out of 6 on large screens. */
  span: string;
  /** Tailwind height class — shared across every card in the same row. */
  height: string;
};

export const businessGroups: BusinessGroup[] = [
  {
    name: "ZoikoTech",
    description:
      "Advanced Technology & AI Platforms — enterprise software, cloud, AI, cybersecurity, communications and media infrastructure.",
    image: "/about/business-tech.png",
    href: "/companies",
    span: "lg:col-span-3",
    height: "h-64",
  },
  {
    name: "Zoiko Communications Group",
    description:
      "Community and lifestyle MVNOs, travel connectivity, wholesale telecom and carrier-grade infrastructure.",
    image: "/about/business-communications.png",
    href: "/companies",
    span: "lg:col-span-3",
    height: "h-64",
  },
  {
    name: "Financial Services & Fintech",
    description:
      "Payments, digital wallets, embedded finance and financial infrastructure.",
    image: "/about/business-financial.png",
    href: "/companies",
    span: "lg:col-span-2",
    height: "h-64",
  },
  {
    name: "Zoiko Healthcare",
    description: "Pharmaceuticals, medtech, nutrition and AI-enabled digital health.",
    image: "/about/business-healthcare.png",
    href: "/companies",
    span: "lg:col-span-2",
    height: "h-64",
  },
  {
    name: "Zoiko TV & Studios",
    description: "Purpose-led OTT, original programming and branded content.",
    image: "/about/business-tv.png",
    href: "/companies",
    span: "lg:col-span-2",
    height: "h-64",
  },
  {
    name: "Consumer Brands & Food Innovation",
    description: "NoxxChicken, La Caribbean Taste and shared operating capabilities.",
    image: "/about/business-consumer.png",
    href: "/companies",
    span: "lg:col-span-3",
    height: "h-64",
  },
  {
    name: "Zoiko Supply Group",
    description: "AI-enabled global trade, sourcing and distribution infrastructure.",
    image: "/about/business-supply.png",
    href: "/companies",
    span: "lg:col-span-3",
    height: "h-64",
  },
];

export const technologyPillars: string[] = [
  "Artificial intelligence",
  "Cloud & infrastructure",
  "Communications",
  "Security & identity",
];

export type Capability = {
  name: string;
  leverage: string;
};

export const capabilities: Capability[] = [
  {
    name: "Artificial intelligence",
    leverage: "Domain-specific models, agentic systems, automation and governed AI.",
  },
  {
    name: "Cloud & infrastructure",
    leverage: "Secure, scalable infrastructure for internal and external applications.",
  },
  {
    name: "Data & evidence",
    leverage: "Provenance, auditability, regulatory intelligence and decision infrastructure.",
  },
  {
    name: "Communications",
    leverage: "Telecom, messaging, collaboration, voice and connectivity.",
  },
  {
    name: "Security & trust",
    leverage: "Cybersecurity, identity, assurance, privacy and responsible technology controls.",
  },
  {
    name: "Financial infrastructure",
    leverage: "Billing, accounting, payroll, payments and reconciliation.",
  },
  {
    name: "Digital experience",
    leverage: "Consumer platforms, marketplaces, streaming, healthcare access and other digital services.",
  },
];

export type GlobalHub = {
  name: string;
  role: string;
};

export const globalHubs: GlobalHub[] = [
  { name: "Sacramento, USA", role: "Global headquarters" },
  { name: "United Kingdom", role: "Mayfair, London & Cardiff — regional hub" },
  { name: "India", role: "100+ engineers — engineering hub" },
  { name: "Singapore", role: "Marina Bay — regional office" },
];

export const trustPoints: string[] = [
  "Governance and risk controls by design",
  "Privacy, security and accessibility built into product development",
  "Jurisdiction-aware architecture for global deployment",
  "Auditability and evidence for material decisions",
  "Responsible AI governance and human oversight",
  "Capital allocation based on strategic fit and evidence",
];

export type LeadershipMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

export const leadershipMembers: LeadershipMember[] = [
  {
    name: "Lennox McLeod",
    role: "Founder & Executive Chairman",
    bio: "His professional background spans accounting, law, corporate strategy and cross-border enterprise building — a multidisciplinary foundation that continues to shape the Group's operating model: technological ambition supported by financial discipline, legal foresight and accountable execution.",
    photo: "/about/LennoxMcleod.webp",
  },
];
