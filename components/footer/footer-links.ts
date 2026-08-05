import type { StaticImageData } from "next/image";

import instagramIcon from "@/public/footer/Instagram.svg";
import facebookIcon from "@/public/footer/facebook.svg";
import linkedinIcon from "@/public/footer/Linkedin.svg";
import xIcon from "@/public/footer/X.svg";
import pinterestIcon from "@/public/footer/pinterest.svg";
import threadsIcon from "@/public/footer/thread.svg";
import youtubeIcon from "@/public/footer/youtube.svg";

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

export const footerColumns: FooterColumn[] = [
  {
    heading: "Zoiko Group",
    links: [
      { label: "Our Companies & Brands", href: "/companies" },
      { label: "Leadership & Governance", href: "/leadership" },
      {
        label: "Corporate Responsibility & Sustainability",
        href: "/sustainability",
      },
      { label: "Investor Relations", href: "/investor-relations" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Contact Us",
    links: [
      { label: "Contact Zoiko Group", href: "/contact-us" },
      { label: "Supplier & Partner Inquiries", href: "/suppliers" },
      { label: "Press & Media Requests", href: "/press" },
      { label: "Accessibility Support", href: "/accessibility" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Corporate Governance", href: "/corporate-governance" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms-of-use" },
      {
        label: "Data Protection & Compliance (GDPR / CCPA)",
        href: "/data-protection",
      },
      { label: "Responsible AI Use", href: "/responsible-ai" },
    ],
  },
];

export type SocialLink = {
  label: string;
  href: string;
  /**
   * 36x36 badge from public/footer — white glyph inside a white ring, so it
   * needs a dark chip behind it.
   */
  icon: StaticImageData;
};

export const socialLinks: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/ZoikoGroup/",
    icon: facebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/zoikogroup/",
    icon: instagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/zoiko-group/",
    icon: linkedinIcon,
  },
  { label: "X", href: "https://x.com/ZoikoGroup", icon: xIcon },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/zoikogroup/",
    icon: pinterestIcon,
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@zoikogroup",
    icon: threadsIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ZoikoGroup",
    icon: youtubeIcon,
  },
];
