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
  /** Column span out of 6 on large screens, matching the Figma grid. */
  span: string;
  /**
   * Tailwind height class. Every card in the same grid row (spans that sum
   * to 6) must share the same value so the row lines up — Figma renders each
   * row at one uniform height and lets object-cover crop each image to fit
   * its own column width, rather than sizing every card off its own image.
   */
  height: string;
};

export const businessGroups: BusinessGroup[] = [
  {
    name: "Zoiko Tech",
    description:
      "AI, cloud, enterprise software, communications technology, cybersecurity and industry platforms.",
    image: "/home/business-tech.png",
    href: "/companies",
    span: "lg:col-span-4",
    height: "h-64",
  },
  {
    name: "Zoiko Communications Group",
    description: "Telecommunications, connectivity and network-led services.",
    image: "/home/business-communications.png",
    href: "/companies",
    span: "lg:col-span-2",
    height: "h-64",
  },
  {
    name: "Zoiko Financial Group",
    description:
      "Financial technology, payments, market intelligence and financial infrastructure.",
    image: "/home/business-financial.png",
    href: "/companies",
    span: "lg:col-span-2",
    height: "h-64",
  },
  {
    name: "Zoiko Realty Group",
    description: "Property technology, housing platforms and real-estate services.",
    image: "/home/business-realty.png",
    href: "/companies",
    span: "lg:col-span-2",
    height: "h-64",
  },
  {
    name: "Zoiko Media",
    description: "Media, live experiences, culture and digital storytelling.",
    image: "/home/business-media.png",
    href: "/companies",
    span: "lg:col-span-2",
    height: "h-64",
  },
  {
    name: "Zoiko Healthcare",
    description: "Healthcare platforms and healthcare technology.",
    image: "/home/business-healthcare.png",
    href: "/companies",
    span: "lg:col-span-3",
    height: "h-80",
  },
  {
    name: "Zoiko Supply Group",
    description: "Global trade, supply-chain infrastructure and commerce operations.",
    image: "/home/business-supply.png",
    href: "/companies",
    span: "lg:col-span-3",
    height: "h-80",
  },
];

export const technologyPillars: string[] = [
  "AI & Agentic Systems",
  "Cloud & Digital Infrastructure",
  "Enterprise & Financial Operations",
  "Communications & Media Infrastructure",
  "Security, Identity & Assurance",
  "Industry Technology",
];

export type ResearchCard = {
  name: string;
  description: string;
  ctaLabel: string;
  href: string;
};

export const researchCards: ResearchCard[] = [
  {
    name: "Zoiko Research",
    description:
      "Build scientific and technical authority through research, benchmarks, datasets, university collaboration and substantive technical output.",
    ctaLabel: "Explore Zoiko Research",
    href: "/companies",
  },
  {
    name: "Frontier Labs",
    description:
      "Explore future control points through knowledge assets, rapid prototyping and design-partner evidence — graduating only when defensibility and market pull are real.",
    ctaLabel: "Explore Frontier Labs",
    href: "/companies",
  },
];

export type GlobalHub = {
  name: string;
  role: string;
};

export const globalHubs: GlobalHub[] = [
  { name: "Sacramento, USA", role: "Global headquarters" },
  { name: "United Kingdom", role: "Regional hub" },
  { name: "India", role: "Engineering hub" },
  { name: "Singapore", role: "Regional office" },
];

export const globalPresenceBullets: string[] = [
  "Local operating leadership, informed by regional law, culture and market structure.",
  "Shared technology and governance foundations that travel across every market.",
  "Engineering and research hubs positioned close to talent, not just headquarters.",
];

export type TrustLink = {
  label: string;
  href: string;
};

export const trustLinks: TrustLink[] = [
  { label: "Corporate Governance", href: "/corporate-governance" },
  { label: "Responsible AI", href: "/responsible-ai" },
  { label: "Risk & Compliance", href: "/corporate-governance" },
  { label: "Data Protection & Security", href: "/data-protection" },
  { label: "Sustainability & Impact", href: "/sustainability" },
  { label: "Accessibility", href: "/accessibility" },
];

export type NewsItem = {
  category: string;
  title: string;
  description: string;
  date: string;
  image: string;
};

export const featuredNews: NewsItem = {
  category: "Press Release",
  title: "Zoiko Group outlines its operating architecture for the year ahead",
  description:
    "A statement from the Office of the Chairman on how the Group is centralizing shared technology while keeping operating businesses independently accountable.",
  date: "September 2026",
  image: "/home/news-featured.webp",
};

export const secondaryNews: NewsItem[] = [
  {
    category: "Zoiko Insight",
    title: "Why we separate research from commercialization",
    description:
      "A corporate perspective on the discipline behind Zoiko Research and Frontier Labs.",
    date: "August 2026",
    image: "/home/news-thumb-1.png",
  },
  {
    category: "Research Update",
    title: "New benchmark work from Zoiko Research",
    description:
      "A short technical update on recent published methods and evaluation results.",
    date: "August 2026",
    image: "/home/news-thumb-2.png",
  },
];

export type PartnerCard = {
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
};

export const partnerCards: PartnerCard[] = [
  {
    title: "For investors",
    description:
      "Company information, governance and a controlled path to engage with Zoiko as a long-term institutional partner.",
    ctaLabel: "Investor Centre",
    href: "/investor-relations",
  },
  {
    title: "For strategic partners",
    description:
      "Routes for enterprises, institutions and ecosystem partners exploring a strategic relationship with a Zoiko business.",
    ctaLabel: "Strategic Partnerships",
    href: "/suppliers",
  },
];

export type ContactRoute = {
  label: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
};

export const contactRoutes: ContactRoute[] = [
  {
    label: "Corporate inquiries",
    title: "Corporate inquiries",
    description:
      "General questions about Zoiko Group, its structure or public information.",
    ctaLabel: "Contact Corporate",
    href: "/contact-us",
  },
  {
    label: "Investor Relations",
    title: "Investor Relations",
    description: "For institutional investors and long-term capital partners.",
    ctaLabel: "Contact Investor Relations",
    href: "/investor-relations",
  },
  {
    label: "Press & Media",
    title: "Press & Media",
    description: "Media inquiries, interview requests and press resources.",
    ctaLabel: "Contact Press Office",
    href: "/press",
  },
  {
    label: "Suppliers & Strategic Partners",
    title: "Suppliers & Strategic Partners",
    description: "For prospective suppliers, universities and ecosystem partners.",
    ctaLabel: "Contact Partnerships",
    href: "/suppliers",
  },
  {
    label: "Careers",
    title: "Careers",
    description: "For candidates and recruiting-related questions.",
    ctaLabel: "Visit Careers",
    href: "/careers",
  },
  {
    label: "Product / Platform Support",
    title: "Product / Platform Support",
    description: "Routed to the operating company that owns your product.",
    ctaLabel: "Find Your Product Team",
    href: "/companies",
  },
];
