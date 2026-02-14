export interface NavigationItem {
  label: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { label: "agenda", href: "/#agenda" },
  { label: "about", href: "/#about" },
  { label: "residents", href: "/#residents" },
  { label: "shop", href: "/#shop" },
  { label: "feed", href: "/#zine" },
  { label: "contact", href: "/#contact" },
];
