import type { StaticImageData } from "next/image";

import consumerImage from "@/public/divisions/consumer.png";
import financialImage from "@/public/divisions/financial.png";
import mediaImage from "@/public/divisions/media.png";
import technologyImage from "@/public/divisions/technology.png";
import telecomImage from "@/public/divisions/telecom.png";

export type FocusGroup = {
  /** Heading above the pill grid. */
  label: string;
  items: string[];
  /** Pills per row at lg. Kept as whole class strings so Tailwind can see them. */
  columns: 2 | 3 | 5;
};

export type Division = {
  id: string;
  eyebrow?: string;
  title: string;
  president: string;
  intro: string;
  priorities: string[];
  focusGroups: FocusGroup[];
  image: StaticImageData;
  alt: string;
  /** Which side the photo sits on at lg — the layout alternates down the page. */
  imageSide: "left" | "right";
};

export const divisions: Division[] = [
  {
    id: "technology",
    eyebrow: "Our Divisions",
    title: "Advanced Technology & AI Platforms",
    president: "Division President: President, ZoikoTech",
    intro:
      "ZoikoTech is Zoiko Group's innovation core developing AI-powered enterprise platforms and digital solutions that drive global digital transformation.",
    priorities: [
      "Enable global businesses to operate with greater intelligence, compliance, and efficiency",
      "Lead in AI-driven enterprise solutions across key verticals",
      "Foster cross-division technology synergies across the Group",
    ],
    focusGroups: [
      {
        label: "Key Focus Areas:",
        columns: 5,
        items: [
          "ZoikoSuite",
          "ZoikoTime",
          "ZoikoNex",
          "Zoiko Web Services",
          "BookingOrbit",
          "ZoikoShield",
          "ZoikoPal",
          "DriverXtra",
          "ZoikoSocial",
          "ZoikoAxis",
        ],
      },
    ],
    image: technologyImage,
    alt: "An engineer working on an AI platform",
    imageSide: "left",
  },
  {
    id: "telecommunications",
    title: "Telecommunications & Connectivity",
    president:
      "Division President: President, Telecommunications & Connectivity",
    intro:
      "This division drives Zoiko Group's leadership in Community & Lifestyle-Centric connectivity — building one of the most innovative MVNO portfolios globally.",
    priorities: [
      "Lead in purpose-driven mobile services",
      "Expand connectivity solutions across underserved markets",
      "Scale global travel and wholesale connectivity offerings",
    ],
    focusGroups: [
      {
        label: "Key Focus Areas:",
        columns: 3,
        items: ["Zoiko Mobile", "GoLite Mobile", "DriverX Mobile"],
      },
      {
        label: "Community & Lifestyle MVNOs:",
        columns: 3,
        items: [
          "Sable Mobile",
          "Avivo Mobile",
          "Raíces Mobile",
          "EverGuard Mobile",
          "HavenZ Mobile",
          "Zoiko Mobile UK",
        ],
      },
    ],
    image: telecomImage,
    alt: "A technician working in a telecommunications facility",
    imageSide: "right",
  },
  {
    id: "financial-services",
    title: "Financial Services & Fintech",
    president: "Division President: President, Financial Services",
    intro:
      "ZoikoPay leads Zoiko Group's expansion in financial services, payments, and fintech innovation — building solutions that drive seamless commerce across borders.",
    priorities: [
      "Drive growth in digital payments and cross-border commerce",
      "Integrate payments seamlessly across Zoiko Group's ecosystem",
      "Expand merchant services and subscription billing solutions globally",
    ],
    focusGroups: [
      {
        label: "Key Focus Areas:",
        columns: 3,
        items: [
          "P2P payments",
          "Cross-border remittances and FX",
          "Merchant services and checkout",
          "Subscription billing and recurring payments",
          "Digital Wallets & Super App Integration",
          "Embedded Finance & API Banking",
        ],
      },
    ],
    image: financialImage,
    alt: "Coins and a model house representing financial services",
    imageSide: "left",
  },
  {
    id: "media",
    title: "Media & Content",
    president: "Division President: President, Media & Communication",
    intro:
      "ZoikoTV operates as Zoiko Group's dedicated media and content division — delivering global, purpose-driven content that aligns with the Group's values.",
    priorities: [
      "Become the global leader in purpose-driven OTT content",
      "Build trusted content ecosystems around sustainability, animal welfare, and ethical innovation",
      "Drive content partnerships and global digital community growth",
    ],
    focusGroups: [
      {
        label: "Key Focus Areas:",
        columns: 3,
        items: [
          "OTT content production and distribution",
          "Branded content partnerships",
          "Global media community building",
        ],
      },
    ],
    image: mediaImage,
    alt: "A media team reviewing content on screen",
    imageSide: "right",
  },
  {
    id: "consumer-brands",
    title: "Consumer Brands & Food Innovation",
    president: "Division President: President, Consumer Ventures",
    intro:
      "This division builds and scales globally resonant consumer brands combining cultural authenticity with modern innovation.",
    priorities: [
      "Lead in culturally authentic QSR and food experiences",
      "Expand premium consumer products in global markets",
      "Build digital-first consumer engagement and loyalty platforms",
    ],
    focusGroups: [
      {
        label: "Key Focus Areas:",
        columns: 2,
        items: ["NoxxChicken", "La Caribbean Taste"],
      },
    ],
    image: consumerImage,
    alt: "Fresh ingredients on a kitchen counter",
    imageSide: "left",
  },
];

export const operatingModel = [
  "Dedicated leadership and full P&L responsibility",
  "Global operating mandates with local relevance",
  "Group-wide technology, governance, and ESG alignment",
  "Cross-division collaboration and synergy frameworks",
];
