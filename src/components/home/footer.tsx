import Link from "next/link";
import { navigationItems } from "@/data/navigation";

export function Footer() {
  const footerLinks = [
    { label: "Home", href: "/" },
    ...navigationItems.map((item) => ({
      label: item.label.charAt(0).toUpperCase() + item.label.slice(1),
      href: item.href,
    })),
  ];

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-brand-row">
        <div className="footer-brand">Art connection inclusive space</div>
      </div>

      <div className="footer-contact-band">
        <span className="footer-address">105120 Nizhnyaya Syromyatnicheskaya, 10</span>

        <div className="footer-contact-right">
          <a href="tel:+74998579267">7 (499) 857 92 67</a>
          <a href="mailto:rent@artconnection.com">rent@artconnection.com</a>
        </div>
      </div>

      <nav className="footer-nav-band" aria-label="Footer navigation">
        {footerLinks.map((item, index) => (
          <Link key={item.label} href={item.href}>
            {item.label}
            {index < footerLinks.length - 1 ? " / " : ""}
          </Link>
        ))}
      </nav>

      <p className="footer-credits-band">Uprock studio 2024 / Site credits / Privacy / UP</p>
    </footer>
  );
}
