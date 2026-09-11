import type { ComponentType } from "react";

import {
  EnvelopeIcon,
  FacebookSocialIcon,
  HeadsetIcon,
  InstagramSocialIcon,
  LinkedInSocialIcon,
  MegaphoneIcon,
  PartnershipIcon,
  XSocialIcon,
  YouTubeSocialIcon,
} from "./footer-icons";

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

// "COMPANY · DIVISIONS · PORTFOLIO / GOVERNANCE · IMPACT · NEWS & INSIGHTS /
// INVESTORS · CAREERS · GLOBAL" — rendered as a 3x3 grid.
export const footerColumns: FooterColumn[] = [
  {
    heading: "Company",
    links: [
      { label: "About Zoiko Group", href: "/about" },
      { label: "Purpose & Strategy", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Group Structure", href: "/divisions" },
      { label: "Operating Model", href: "/divisions" },
      { label: "Our Story", href: "/about" },
    ],
  },
  {
    heading: "Divisions",
    links: [
      { label: "Technology", href: "/companies" },
      { label: "Communications", href: "/companies" },
      { label: "Financial Services", href: "/companies" },
      { label: "Healthcare", href: "/companies" },
      { label: "Media", href: "/companies" },
      { label: "Food & Consumer", href: "/companies" },
      { label: "Real Estate & Places", href: "/companies" },
    ],
  },
  {
    heading: "Portfolio",
    links: [
      { label: "Portfolio Overview", href: "/portfolio" },
      { label: "Companies & Brands A–Z", href: "/companies" },
      { label: "Platform & Products", href: "/portfolio" },
      { label: "Featured Businesses", href: "/portfolio" },
      { label: "Ventures & Frontier", href: "/portfolio" },
      { label: "Find Your Product Team", href: "/companies" },
    ],
  },
  {
    heading: "Governance",
    links: [
      { label: "Corporate Governance", href: "/corporate-governance" },
      { label: "Board & Committees", href: "/corporate-governance" },
      { label: "Ethics & Compliance", href: "/corporate-governance" },
      { label: "Risk & Resilience", href: "/corporate-governance" },
      { label: "Responsible Technology & AI", href: "/responsible-ai" },
      { label: "Policies & Standards", href: "/corporate-governance" },
    ],
  },
  {
    heading: "Impact",
    links: [
      { label: "Impact Overview", href: "/sustainability" },
      { label: "Corporate Responsibility", href: "/sustainability" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "People & Communities", href: "/sustainability" },
      { label: "Environmental Stewardship", href: "/sustainability" },
      { label: "Responsible Innovation", href: "/sustainability" },
    ],
  },
  {
    heading: "News & Insights",
    links: [
      { label: "Newsroom", href: "/press" },
      { label: "Press Releases", href: "/press" },
      { label: "Media Center", href: "/press" },
      { label: "Insights & Perspectives", href: "/press" },
      { label: "Research & Publications", href: "/press" },
      { label: "Events & Webinars", href: "/press" },
    ],
  },
  {
    heading: "Investors",
    links: [
      { label: "Investor Overview", href: "/investor-relations" },
      { label: "Reports & Presentations", href: "/investor-relations" },
      { label: "Shareholder Information", href: "/investor-relations" },
      { label: "Financial Information", href: "/investor-relations" },
      { label: "Governance for Investors", href: "/investor-relations" },
      { label: "Investor Contacts", href: "/investor-relations" },
    ],
  },
  {
    heading: "Careers",
    links: [
      { label: "Life at Zoiko", href: "/careers" },
      { label: "Teams & Functions", href: "/careers" },
      { label: "Locations", href: "/careers" },
      { label: "Early Careers", href: "/careers" },
      { label: "Search Jobs", href: "/careers" },
      { label: "Candidate Privacy", href: "/privacy-policy" },
    ],
  },
  {
    heading: "Global",
    links: [
      { label: "Global Reach", href: "/global-reach" },
      { label: "Our Locations", href: "/global-reach" },
      { label: "Regional Hubs", href: "/global-reach" },
      { label: "Map", href: "/global-reach" },
      { label: "Local Websites", href: "/global-reach" },
      { label: "In a Region", href: "/global-reach" },
    ],
  },
];

export const contactSupportLinks: FooterLink[] = [
  { label: "Contact Zoiko Group", href: "/contact-us" },
  { label: "Corporate Enquiries", href: "/contact-us" },
  { label: "Partnerships & Suppliers", href: "/suppliers" },
  { label: "Press & Media", href: "/press" },
  { label: "Product & Customer Support", href: "/contact-us" },
  { label: "Accessibility Support", href: "/accessibility" },
];

export const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Cookies", href: "/privacy-policy" },
  { label: "Privacy Choices", href: "/privacy-policy" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Sitemap", href: "/" },
];

export type Headquarters = {
  label: string;
  lines: string[];
};

export const headquarters: Headquarters[] = [
  {
    label: "Global Headquarters",
    lines: [
      "1401 21st Street",
      "Sacramento, California 95811",
      "United States",
    ],
  },
  {
    label: "European Headquarters",
    lines: [
      "1st–2nd Floor, Portland Street",
      "5th Floor, London W1B 1SW",
      "United Kingdom",
    ],
  },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/zoiko-group/",
    icon: LinkedInSocialIcon,
  },
  { label: "X", href: "https://x.com/ZoikoGroup", icon: XSocialIcon },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ZoikoGroup",
    icon: YouTubeSocialIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/zoikogroup/",
    icon: InstagramSocialIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ZoikoGroup/",
    icon: FacebookSocialIcon,
  },
];

export type ContactCtaLink = {
  title: string;
  subtitle: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

export const contactCtaLinks: ContactCtaLink[] = [
  {
    title: "Corporate Enquiries",
    subtitle: "General information",
    href: "/contact-us",
    icon: EnvelopeIcon,
  },
  {
    title: "Partnerships & Suppliers",
    subtitle: "Build with Zoiko",
    href: "/suppliers",
    icon: PartnershipIcon,
  },
  {
    title: "Press & Media",
    subtitle: "Media enquiries",
    href: "/press",
    icon: MegaphoneIcon,
  },
  {
    title: "Product & Customer Support",
    subtitle: "Get help",
    href: "/contact-us",
    icon: HeadsetIcon,
  },
];
