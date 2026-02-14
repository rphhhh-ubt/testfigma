import { navigationItems } from "@/data/events";

function Logo() {
  return (
    <div className="logo-wrap" aria-label="ArtConnection">
      <span className="logo-mark" />
      <span className="logo-text">ArtConnection</span>
    </div>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <button className="menu-trigger" type="button" aria-label="Open menu">
        <span />
        <span />
      </button>

      <Logo />

      <div className="header-meta">
        <span className="dot" />
        <span>Open 10-20</span>
      </div>

      <div className="header-language">language</div>

      <nav className="header-nav" aria-label="Main">
        {navigationItems.map((item, index) => (
          <a
            key={item}
            href="#"
            className={index === 0 ? "nav-active" : undefined}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
