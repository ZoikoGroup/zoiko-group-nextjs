export type Country = {
  name: string;
  flag: string;
};

export type Region = {
  id: string;
  label: string;
  countries: Country[];
  focus: string[];
  /** Which side the flags sit on at lg — the layout alternates down the page. */
  flagsSide: "left" | "right";
};

export const regions: Region[] = [
  {
    id: "north-america",
    label: "North America",
    countries: [
      { name: "United States", flag: "/global-reach/flag-us.png" },
      { name: "Canada", flag: "/global-reach/flag-canada.png" },
    ],
    focus: [
      "Community & Lifestyle-Centric MVNO leadership",
      "Cross-border financial services and payments (ZoikoPay)",
      "Enterprise AI platforms (ZoikoTech)",
      "AI-driven booking and scheduling (BookingOrbit)",
      "Driver lifestyle & rewards platform (DriverXtra)",
      "Global social media platform for animal lovers (ZoikoSocial)",
      "Consumer brands growth (NoxxChicken, La Caribbean Taste)",
    ],
    flagsSide: "left",
  },
  {
    id: "uk-europe",
    label: "United Kingdom & Europe",
    countries: [
      { name: "United Kingdom", flag: "/global-reach/flag-uk.png" },
      { name: "Europe", flag: "/global-reach/flag-europe.png" },
    ],
    focus: [
      "Premium MVNO services",
      "AI platforms and cloud services (ZoikoTech)",
      "Media & content leadership (ZoikoTV)",
      "Global social community growth (ZoikoSocial)",
      "Consumer brands growth (NoxxChicken, La Caribbean Taste)",
      "ESG-driven business leadership",
    ],
    flagsSide: "right",
  },
  {
    id: "asia",
    label: "Asia",
    countries: [
      { name: "China", flag: "/global-reach/flag-china.png" },
      { name: "Singapore", flag: "/global-reach/flag-singapore.png" },
    ],
    focus: [
      "AI-first enterprise platforms (ZoikoTech)",
      "AI-driven booking and scheduling (BookingOrbit)",
      "Advanced manufacturing (La Caribbean Taste)",
      "Fintech expansion (ZoikoPay)",
      "Telecom and connectivity partnerships",
      "ZoikoSocial platform scaling across Asia",
    ],
    flagsSide: "left",
  },
  {
    id: "africa",
    label: "Africa",
    countries: [
      { name: "East Africa", flag: "/global-reach/flag-east-africa.png" },
      { name: "West Africa", flag: "/global-reach/flag-west-africa.png" },
      { name: "South Africa", flag: "/global-reach/flag-south-africa.png" },
    ],
    focus: [
      "Community & Lifestyle-Centric MVNOs",
      "Cross-border payments and fintech (ZoikoPay)",
      "AI platform deployment (ZoikoTech)",
      "Global social media community expansion (ZoikoSocial)",
      "Driver lifestyle platform (DriverXtra)",
      "ESG-led partnerships with telecom, fintech, and NGO partners",
    ],
    flagsSide: "right",
  },
];

export const presencePoints = [
  { label: "Scale technology", icon: "/global-reach/icon-1.png" },
  {
    label: "Deliver purpose-driven connectivity",
    icon: "/global-reach/icon-2.png",
  },
  {
    label: "Advance inclusive financial ecosystems",
    icon: "/global-reach/icon-3.png",
  },
  {
    label: "Drive positive social and environmental impact",
    icon: "/global-reach/icon-4.png",
  },
  {
    label: "Build world-class consumer experiences",
    icon: "/global-reach/icon-5.png",
  },
  {
    label: "Foster global content and community leadership",
    icon: "/global-reach/icon-6.png",
  },
];
