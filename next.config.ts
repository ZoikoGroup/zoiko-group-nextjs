import type { NextConfig } from "next";

/** Legacy URLs from the previous site, mapped to their current pages. */
const legacyRedirects: { from: string; to: string }[] = [
  { from: "/data-protection-compliance-gdpr-ccpa", to: "/data-protection" },
  { from: "/responsible-ai-use", to: "/responsible-ai" },
  { from: "/supplier-partner-inquiries", to: "/suppliers" },
  { from: "/press-media-requests", to: "/press" },
  { from: "/accessibility-support", to: "/accessibility" },
  { from: "/our-companies-brands", to: "/companies" },
  { from: "/leadership-governance", to: "/leadership" },
  { from: "/corporate-responsibility-sustainability", to: "/sustainability" },
  { from: "/about-us", to: "/about" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects.map(({ from, to }) => ({
      source: from,
      destination: to,
      permanent: true,
    }));
  },
};

export default nextConfig;
