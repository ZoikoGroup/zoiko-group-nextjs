import Reveal from "./Reveal";
import { industryHighlights } from "./data";
import {
  CommerceMediaIcon,
  ConnectivityIcon,
  FinancialIcon,
  HealthcareIcon,
  MobilityIcon,
  RealEstateIcon,
  SustainabilityIcon,
  TechnologyIcon,
} from "./industry-icons";

const icons = [
  TechnologyIcon,
  ConnectivityIcon,
  FinancialIcon,
  HealthcareIcon,
  MobilityIcon,
  RealEstateIcon,
  CommerceMediaIcon,
  SustainabilityIcon,
];

export default function IndustryHighlights() {
  return (
    <div className="relative bg-brand-navy-light/80 backdrop-blur-sm">
      <ul className="mx-auto grid w-full max-w-8xl grid-cols-2 gap-x-4 gap-y-6 px-6 py-8 sm:grid-cols-4 sm:divide-x-2 sm:divide-white/15 sm:px-8 lg:grid-cols-8 lg:gap-x-3 lg:py-3">
        {industryHighlights.map((item, index) => {
          const Icon = icons[index];
          return (
            <Reveal key={item.title} delay={index * 60}>
              <li className="group flex flex-col items-center gap-2 px-2 py-2 text-center transition-transform duration-300 hover:-translate-y-0.5">
                <Icon className="h-10 w-10 shrink-0 text-white transition-colors duration-300 group-hover:text-brand-teal" />
                <div>
                  <p className="font-highlight text-sm font-medium text-white">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-white/60 sm:text-xs">
                    {item.subtitle}
                  </p>
                </div>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </div>
  );
}
