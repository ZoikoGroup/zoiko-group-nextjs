import type { ComponentType } from "react";

import {
  BuildingIcon,
  CameraIcon,
  ChartIcon,
  CompassIcon,
  LeafIcon,
  MegaphoneIcon,
  PeopleIcon,
  ShieldIcon,
} from "./mega-menu-icons";

export type MegaMenuLink = { label: string; href: string };

export type MegaMenuColumn = {
  heading: string;
  icon?: ComponentType<{ className?: string }>;
  links: MegaMenuLink[];
};

/** The grey introduction block used on the "What We Do" dropdown. */
export type CtaPanel = {
  kind: "cta";
  eyebrow: string;
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  footnote: string;
};

/** The plain grey quote block used on the "Who We Are" dropdown. */
export type QuotePanel = {
  kind: "quote";
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

/** The background-photo block used on Governance / Impact / News & Insights. */
export type ImagePanel = {
  kind: "image";
  image: string;
  eyebrow: string;
  heading: string;
  body: string;
  caption: string;
};

export type MegaMenuPanel = CtaPanel | QuotePanel | ImagePanel;

export type MegaMenuItem = {
  label: string;
  href: string;
  columns: MegaMenuColumn[];
  /** Side panel and which side it renders on — omitted for the plain Portfolio menu. */
  panel?: MegaMenuPanel;
  panelPosition?: "left" | "right";
  /** The "View all…" link under the columns — omitted where a column already ends in one. */
  footerLink?: MegaMenuLink;
};

export const megaMenuItems: MegaMenuItem[] = [
  {
    label: "Who We Are",
    href: "/about",
    columns: [
      {
        heading: "Overview",
        links: [
          { label: "Who We Are Overview", href: "/about" },
          { label: "Purpose & Strategy", href: "/about" },
          { label: "Our Story / History", href: "/about" },
        ],
      },
      {
        heading: "Leadership & Structure",
        links: [
          { label: "Leadership", href: "/leadership" },
          { label: "Group Structure", href: "/divisions" },
          { label: "Operating Model", href: "/divisions" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "Zoiko at a Glance", href: "/about" },
          { label: "Global Reach", href: "/global-reach" },
          { label: "Contact Zoiko Group", href: "/contact-us" },
        ],
      },
    ],
    panel: {
      kind: "quote",
      body: "Building locally relevant businesses on globally scalable foundations.",
      ctaLabel: "Explore Zoiko Group",
      ctaHref: "/about",
    },
    panelPosition: "right",
  },
  {
    label: "What We Do",
    href: "/companies",
    columns: [
      {
        heading: "Technology",
        links: [
          { label: "Zoiko Tech Inc.", href: "/companies" },
          { label: "AI & Intelligent Infrastructure", href: "/companies" },
          { label: "Enterprise Platforms", href: "/companies" },
        ],
      },
      {
        heading: "Connectivity & Finance",
        links: [
          { label: "Zoiko Communications Group Inc.", href: "/companies" },
          { label: "Zoiko Financial Group Inc.", href: "/companies" },
          { label: "View all businesses", href: "/companies" },
        ],
      },
      {
        heading: "Healthcare & Media",
        links: [
          { label: "Zoiko Healthcare Inc.", href: "/companies" },
          { label: "Zoiko Media Corp.", href: "/companies" },
        ],
      },
      {
        heading: "Consumer & Places",
        links: [
          { label: "Zoiko Foods Corp.", href: "/companies" },
          { label: "Zoiko Realty Group Inc.", href: "/companies" },
        ],
      },
    ],
    panel: {
      kind: "cta",
      eyebrow: "What We Do",
      heading: "Our businesses",
      body: "Seven operating groups, connected by shared technology, governance and capital discipline.",
      ctaLabel: "Explore overview",
      ctaHref: "/companies",
      footnote: "How Zoiko Group operates.",
    },
    panelPosition: "left",
    footerLink: { label: "View all businesses", href: "/companies" },
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    columns: [
      {
        heading: "Discover",
        links: [
          { label: "Portfolio Overview", href: "/portfolio" },
          { label: "Companies & Brands A–Z", href: "/companies" },
          { label: "Featured Businesses", href: "/portfolio" },
        ],
      },
      {
        heading: "By sector",
        links: [
          { label: "Technology", href: "/portfolio" },
          { label: "Communications", href: "/portfolio" },
          { label: "Financial Services", href: "/portfolio" },
        ],
      },
      {
        heading: "By sector",
        links: [
          { label: "Healthcare", href: "/portfolio" },
          { label: "Media", href: "/portfolio" },
          { label: "Food & Consumer", href: "/portfolio" },
        ],
      },
      {
        heading: "By sector",
        links: [
          { label: "Real Estate & Places", href: "/portfolio" },
          { label: "View All Portfolio", href: "/portfolio" },
        ],
      },
    ],
  },
  {
    label: "Governance",
    href: "/corporate-governance",
    columns: [
      {
        heading: "Corporate governance",
        icon: BuildingIcon,
        links: [
          { label: "Governance Overview", href: "/corporate-governance" },
          { label: "Leadership & Board", href: "/leadership" },
          { label: "Group Policies & Standards", href: "/corporate-governance" },
          { label: "Committees", href: "/corporate-governance" },
          { label: "Governance Documents", href: "/corporate-governance" },
          { label: "Performance & Oversight", href: "/corporate-governance" },
        ],
      },
      {
        heading: "Trust & compliance",
        icon: ShieldIcon,
        links: [
          { label: "Risk & Compliance", href: "/corporate-governance" },
          { label: "Privacy & Data Protection", href: "/data-protection" },
          { label: "Security & Trust", href: "/data-protection" },
          { label: "Regulatory Compliance", href: "/corporate-governance" },
          { label: "Ethics & Integrity", href: "/corporate-governance" },
          { label: "Audit & Assurance", href: "/corporate-governance" },
        ],
      },
      {
        heading: "Responsible technology",
        icon: LeafIcon,
        links: [
          { label: "Responsible AI", href: "/responsible-ai" },
          { label: "AI Governance", href: "/responsible-ai" },
          { label: "Data Ethics", href: "/responsible-ai" },
          { label: "Technology Risk Management", href: "/responsible-ai" },
          { label: "Innovation with Responsibility", href: "/responsible-ai" },
          { label: "Accessibility", href: "/accessibility" },
        ],
      },
      {
        heading: "Integrity",
        icon: PeopleIcon,
        links: [
          { label: "Ethics & Conduct", href: "/corporate-governance" },
          { label: "Speak Up / Reporting", href: "/corporate-governance" },
          { label: "Investigations & Resolution", href: "/corporate-governance" },
          { label: "Whistleblower Protection", href: "/corporate-governance" },
          { label: "Governance Contact", href: "/contact-us" },
        ],
      },
    ],
    panel: {
      kind: "image",
      image: "/header/governance-panel.png",
      eyebrow: "Governance",
      heading: "Built on trust for a stronger tomorrow",
      body: "Our governance framework ensures ethical leadership, accountability and responsible growth across the group.",
      caption: "Integrity guides progress",
    },
    panelPosition: "left",
    footerLink: { label: "View all governance resources", href: "/corporate-governance" },
  },
  {
    label: "Impact",
    href: "/sustainability",
    columns: [
      {
        heading: "Impact overview",
        icon: PeopleIcon,
        links: [
          { label: "Corporate Responsibility", href: "/sustainability" },
          { label: "Our Approach", href: "/sustainability" },
          { label: "Sustainability", href: "/sustainability" },
          { label: "Responsible Innovation", href: "/sustainability" },
          { label: "Impact at a Glance", href: "/sustainability" },
          { label: "Goals & Commitments", href: "/sustainability" },
        ],
      },
      {
        heading: "People & society",
        icon: PeopleIcon,
        links: [
          { label: "People & Communities", href: "/sustainability" },
          { label: "Access & Inclusion", href: "/accessibility" },
          { label: "Education & Skills", href: "/sustainability" },
          { label: "Diversity, Equity & Inclusion", href: "/sustainability" },
          { label: "Health & Wellbeing", href: "/sustainability" },
          { label: "Skills & Opportunity", href: "/sustainability" },
        ],
      },
      {
        heading: "Environment",
        icon: LeafIcon,
        links: [
          { label: "Environmental Stewardship", href: "/sustainability" },
          { label: "Climate Action", href: "/sustainability" },
          { label: "Resource Efficiency", href: "/sustainability" },
          { label: "Circular Economy", href: "/sustainability" },
          { label: "Biodiversity", href: "/sustainability" },
          { label: "Operational Responsibility", href: "/sustainability" },
        ],
      },
      {
        heading: "Evidence",
        icon: ChartIcon,
        links: [
          { label: "Reports & Commitments", href: "/sustainability" },
          { label: "Impact News", href: "/press" },
          { label: "Case Studies", href: "/sustainability" },
          { label: "Ratings & Recognitions", href: "/sustainability" },
          { label: "Policies & Frameworks", href: "/sustainability" },
          { label: "Contact Responsibility Team", href: "/contact-us" },
        ],
      },
    ],
    panel: {
      kind: "image",
      image: "/header/impact-panel.png",
      eyebrow: "Impact",
      heading: "A more sustainable and inclusive tomorrow",
      body: "We create long-term value by advancing people, planet and responsible innovation across our businesses and communities.",
      caption: "People. Planet. Progress.",
    },
    panelPosition: "left",
    footerLink: { label: "View all impact resources", href: "/sustainability" },
  },
  {
    label: "News & Insights",
    href: "/press",
    columns: [
      {
        heading: "Newsroom",
        icon: CameraIcon,
        links: [
          { label: "Latest News", href: "/press" },
          { label: "Press Releases", href: "/press" },
          { label: "Announcements", href: "/press" },
          { label: "Media Statements", href: "/press" },
          { label: "Group News", href: "/press" },
          { label: "Subscribe for Updates", href: "/press" },
        ],
      },
      {
        heading: "Media",
        icon: MegaphoneIcon,
        links: [
          { label: "Media Centre", href: "/press" },
          { label: "Press & Media Contacts", href: "/press" },
          { label: "Brand / Media Assets", href: "/press" },
          { label: "Executive Interviews", href: "/press" },
          { label: "Media Library", href: "/press" },
          { label: "Media Enquiries", href: "/press" },
        ],
      },
      {
        heading: "Insights",
        icon: ChartIcon,
        links: [
          { label: "Insights & Perspectives", href: "/press" },
          { label: "Research & Publications", href: "/press" },
          { label: "Thought Leadership", href: "/press" },
          { label: "Industry Trends", href: "/press" },
          { label: "Executive Viewpoints", href: "/press" },
          { label: "Events & Webinars", href: "/press" },
        ],
      },
      {
        heading: "Explore",
        icon: CompassIcon,
        links: [
          { label: "All News & Insights", href: "/press" },
          { label: "Featured Story", href: "/press" },
          { label: "Case Studies", href: "/press" },
          { label: "In the Spotlight", href: "/press" },
          { label: "Search News", href: "/press" },
          { label: "Contact Media Team", href: "/contact-us" },
        ],
      },
    ],
    panel: {
      kind: "image",
      image: "/header/news-panel.png",
      eyebrow: "News & Insights",
      heading: "Ideas, stories and progress that shape what's next",
      body: "Explore the latest news, insights and perspectives from across the Zoiko Group.",
      caption: "Real stories. Bigger perspectives.",
    },
    panelPosition: "left",
    footerLink: { label: "View all news & insights", href: "/press" },
  },
];

export type UtilityLink = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};
