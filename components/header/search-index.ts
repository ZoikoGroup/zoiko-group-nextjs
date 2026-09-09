export type SearchEntry = {
  title: string;
  description: string;
  href: string;
};

/** Static index of site pages, searched client-side — no backend involved. */
export const searchIndex: SearchEntry[] = [
  { title: "Home", description: "Zoiko Group overview", href: "/" },
  {
    title: "About",
    description: "Vision & mission for global impact",
    href: "/about",
  },
  {
    title: "Divisions",
    description: "Powering progress with purpose",
    href: "/divisions",
  },
  {
    title: "Portfolio",
    description: "Discover our core ventures",
    href: "/portfolio",
  },
  {
    title: "Global Reach",
    description: "Connecting worldwide",
    href: "/global-reach",
  },
  {
    title: "Companies",
    description: "Meet our companies & brands",
    href: "/companies",
  },
  {
    title: "Leadership",
    description: "Leadership & governance",
    href: "/leadership",
  },
  {
    title: "Careers",
    description: "Build your future with us",
    href: "/careers",
  },
  {
    title: "Investor Relations",
    description: "Financial reporting & investor information",
    href: "/investor-relations",
  },
  {
    title: "Sustainability",
    description: "Corporate responsibility & sustainability",
    href: "/sustainability",
  },
  {
    title: "Corporate Governance",
    description: "Governance & leadership standards",
    href: "/corporate-governance",
  },
  {
    title: "Responsible AI",
    description: "Responsible AI use for business growth",
    href: "/responsible-ai",
  },
  {
    title: "Accessibility",
    description: "Accessibility support services",
    href: "/accessibility",
  },
  {
    title: "Suppliers",
    description: "Supplier collaboration & partnerships",
    href: "/suppliers",
  },
  {
    title: "Press",
    description: "Press & media requests",
    href: "/press",
  },
  {
    title: "Contact Us",
    description: "Support and inquiries",
    href: "/contact-us",
  },
  {
    title: "Privacy Policy",
    description: "Privacy policy & data protection",
    href: "/privacy-policy",
  },
  {
    title: "Data Protection",
    description: "GDPR & CCPA compliance",
    href: "/data-protection",
  },
  {
    title: "Terms of Use",
    description: "Terms of use and legal agreement",
    href: "/terms-of-use",
  },
];
