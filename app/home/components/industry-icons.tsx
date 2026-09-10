type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function TechnologyIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.5 5.5l2.5 2.5M18.5 18.5l-2.5-2.5M18.5 5.5 16 8M5.5 18.5 8 16" />
    </svg>
  );
}

export function ConnectivityIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 9.5a11 11 0 0 1 15 0" />
      <path d="M7.5 12.8a6.8 6.8 0 0 1 9 0" />
      <path d="M10.6 16a2.6 2.6 0 0 1 2.8 0" />
      <circle cx="12" cy="19.2" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FinancialIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="9" r="5.5" />
      <circle cx="15" cy="15" r="5.5" />
    </svg>
  );
}

export function HealthcareIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 20s-7-4.35-9-9A5 5 0 0 1 12 6a5 5 0 0 1 9 5c-2 4.65-9 9-9 9Z" />
      <path d="M9 11h2l1-2 2 4 1-2h2" />
    </svg>
  );
}

export function MobilityIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 16h15l2-4-3-4H8L3 12Z" />
      <circle cx="8" cy="16" r="1.6" />
      <circle cx="16" cy="16" r="1.6" />
    </svg>
  );
}

export function RealEstateIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </svg>
  );
}

export function CommerceMediaIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export function SustainabilityIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21c-4.5-1-8-4.5-8-10 5.5 0 9 3.5 10 8" />
      <path d="M12 21c4.5-1 8-5.5 8-12-6 0-9.5 4-10 9.5" />
    </svg>
  );
}
