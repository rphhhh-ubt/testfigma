"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { navigationItems } from "@/data/navigation";

interface HeaderProps {
  tone?: "dark" | "light";
}

function Logo() {
  return (
    <Link className="logo-wrap" href="/" aria-label="ArtConnection home">
      <span className="logo-mark" aria-hidden />
      <span className="logo-text">ArtConnection</span>
    </Link>
  );
}

export function Header({ tone = "dark" }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const activeItem = pathname === "/" ? "agenda" : null;
  const highlightedItem = hoveredItem ?? activeItem;

  return (
    <header className={`site-header ${tone === "light" ? "is-light" : ""}`}>
      <button
        className="menu-trigger"
        type="button"
        aria-label="Open menu"
        aria-expanded={mobileMenuOpen}
        onClick={() => setMobileMenuOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <Logo />

      <div className="header-meta">
        <span className="dot" aria-hidden />
        <span>Open 10-20</span>
      </div>

      <div className="header-language">language</div>

      <nav className="header-nav" aria-label="Main">
        {navigationItems.map((item) => {
          const isActive = activeItem === item.label;
          const isHighlighted = highlightedItem === item.label;

          return (
            <div
              key={item.label}
              className="header-nav-item"
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {isHighlighted ? (
                <motion.span
                  layoutId={`nav-indicator-${tone}`}
                  className={`header-nav-indicator ${tone === "light" ? "is-light" : ""}`}
                  transition={{ type: "spring", stiffness: 390, damping: 32, mass: 0.8 }}
                />
              ) : null}

              <Link href={item.href} className={isActive ? "nav-active" : undefined}>
                {item.label}
              </Link>
            </div>
          );
        })}
      </nav>

      <nav
        className={`mobile-nav ${mobileMenuOpen ? "is-open" : ""}`}
        aria-label="Mobile main"
      >
        {navigationItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
