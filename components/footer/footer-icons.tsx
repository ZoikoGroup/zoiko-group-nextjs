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

export function EnvelopeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6.5 8 6.5 8-6.5" />
    </svg>
  );
}

export function PartnershipIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M2.5 19c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" />
      <path d="M14.5 14.2a4.5 4.5 0 0 1 6 4.8" />
    </svg>
  );
}

export function MegaphoneIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 11v2a2 2 0 0 0 2 2h1l2 5h2l-1-5h2l8 4V6l-8 4H6a2 2 0 0 0-2 2Z" />
    </svg>
  );
}

export function HeadsetIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M20 19v1a2 2 0 0 1-2 2h-3" />
    </svg>
  );
}

export function SunriseIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 18h18" />
      <path d="M6 18a6 6 0 0 1 12 0" />
      <path d="M12 8V4M4.5 10.5l1.4 1.4M19.5 10.5l-1.4 1.4" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14m0 0-6-6m6 6-6 6" />
    </svg>
  );
}

// Social glyphs — simple marks in currentColor, so they can be tinted to
// match the outline circle badge that wraps each one in the footer (unlike
// the pre-colored white SVG assets in public/footer, which can't be
// recolored for a light/outline treatment).

export function LinkedInSocialIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <circle cx="7" cy="7.2" r="1.3" />
      <path d="M6 10h2v8H6Z" />
      <path d="M10 10h1.9v1.1c.5-.75 1.3-1.3 2.5-1.3 1.9 0 3.1 1.25 3.1 3.55V18h-2v-4.2c0-1.1-.4-1.85-1.4-1.85-.8 0-1.35.55-1.55 1.2V18h-2Z" />
    </svg>
  );
}

export function XSocialIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function YouTubeSocialIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="6.5" width="18" height="11" rx="3" />
      <path d="M10.5 9.7v4.6l4.2-2.3Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function InstagramSocialIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={className}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.7" cy="7.3" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookSocialIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.5 20v-6.3h2.1l.32-2.45h-2.42V9.6c0-.7.2-1.18 1.2-1.18h1.28V6.23c-.22-.03-.98-.1-1.86-.1-1.84 0-3.1 1.12-3.1 3.18v1.78H9.4v2.45h2.12V20Z" />
    </svg>
  );
}
