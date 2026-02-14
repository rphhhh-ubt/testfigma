export interface NavigationItem {
  label: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { label: "agenda", href: "/#agenda" },
  { label: "about", href: "/about" },
  { label: "residents", href: "/about#residents" },
  { label: "shop", href: "/about#shop" },
  { label: "feed", href: "/#feed" },
  { label: "contact", href: "/#contact" },
];
