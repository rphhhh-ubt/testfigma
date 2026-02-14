"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return navigationItems.map((item) => {
    const isActive = pathname === "/" && item.label === "agenda";

    return (
      <Link
        key={item.label}
        href={item.href}
        className={isActive ? "nav-active" : undefined}
        onClick={onNavigate}
      >
        {item.label}
      </Link>
    );
  });
}

export function Header({ tone = "dark" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <NavLinks />
      </nav>

      <nav
        className={`mobile-nav ${mobileMenuOpen ? "is-open" : ""}`}
        aria-label="Mobile main"
      >
        <NavLinks onNavigate={() => setMobileMenuOpen(false)} />
      </nav>
    </header>
  );
}
