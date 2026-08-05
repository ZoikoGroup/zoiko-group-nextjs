import type { StaticImageData } from "next/image";

import accelerateGrowthIcon from "@/public/careers/Accelerate-Growth.png";
import belongCommunityIcon from "@/public/careers/Belong-Global-Community.png";
import innovatePurposeIcon from "@/public/careers/Innovate-Purpose.png";
import leadValuesIcon from "@/public/careers/Lead-Values.png";
import shapeImpactIcon from "@/public/careers/Shape-Global-Impact.png";
import deiGoalsIcon from "@/public/careers/goals.png";
import diversityCouncilIcon from "@/public/careers/group.png";
import payEquityIcon from "@/public/careers/pay.png";
import why1Icon from "@/public/careers/why-1.png";
import why2Icon from "@/public/careers/why-2.png";
import why3Icon from "@/public/careers/why-3.png";
import why4Icon from "@/public/careers/why-4.png";

export const whyWorkReasons: { label: string; icon: StaticImageData }[] = [
  { label: "Build industry-leading innovations", icon: why1Icon },
  {
    label: "Grow their careers while growing as leaders and global citizens",
    icon: why2Icon,
  },
  {
    label: "Create meaningful social and environmental impact",
    icon: why3Icon,
  },
  {
    label: "Work in diverse, inclusive, and globally connected teams",
    icon: why4Icon,
  },
];

export const journeyBenefits: {
  title: string;
  description: string;
  icon: StaticImageData;
}[] = [
  {
    title: "Shape a Global Impact",
    description:
      "Work on projects and platforms that serve millions across the United States, United Kingdom, Europe, Africa, and Asia (Shenzhen & Singapore).",
    icon: shapeImpactIcon,
  },
  {
    title: "Innovate with Purpose",
    description:
      "Advance technologies and business models designed to empower underserved communities and drive ethical innovation.",
    icon: innovatePurposeIcon,
  },
  {
    title: "Accelerate Your Growth",
    description:
      "Develop through world-class learning programs, cross-business mobility, and personalized leadership pathways.",
    icon: accelerateGrowthIcon,
  },
  {
    title: "Lead with Values",
    description:
      "Be part of an enterprise where sustainability, diversity, equity, and integrity are non-negotiable principles.",
    icon: leadValuesIcon,
  },
  {
    title: "Belong to a Global Community",
    description:
      "Collaborate with talented colleagues from around the world who share a passion for shaping the future.",
    icon: belongCommunityIcon,
  },
];

export const deiCommitments: { label: string; icon: StaticImageData }[] = [
  {
    label:
      "A Group-wide Diversity Council reporting to the Group CEO and Board",
    icon: diversityCouncilIcon,
  },
  {
    label:
      "DEI goals embedded in leadership scorecards and talent acquisition strategies",
    icon: deiGoalsIcon,
  },
  {
    label: "Transparent pay equity analysis and promotion criteria",
    icon: payEquityIcon,
  },
];

export type Opening = {
  id: string;
  title: string;
  company: string;
  location: string;
};

/** No roles are open yet — the board renders its empty state until this fills. */
export const openings: Opening[] = [];

/** Locations offered in the filter, derived so the list can never drift. */
export const openingLocations: string[] = [
  ...new Set(openings.map((opening) => opening.location)),
].sort();
