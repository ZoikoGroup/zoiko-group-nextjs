export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Divisions", href: "/divisions" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Global Reach", href: "/global-reach" },
];

export const contactItem: NavItem = { label: "Contact", href: "/contact-us" };
