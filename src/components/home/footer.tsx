import Link from "next/link";
import { navigationItems } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-brand">ArtConnection inclusive space</div>

      <div className="footer-line" />

      <div className="footer-links">
        <a href="tel:+74998579267">7 (499) 857 92 67</a>
        <a href="mailto:rent@artconnection.com">rent@artconnection.com</a>
        <span>105120 Nizhnyaya Syromyatnicheskaya, 10</span>
      </div>

      <div className="footer-bottom">
        <nav aria-label="Footer navigation">
          {navigationItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <p>Uprock studio 2024 / Site credits / Privacy / UP</p>
      </div>
    </footer>
  );
}
