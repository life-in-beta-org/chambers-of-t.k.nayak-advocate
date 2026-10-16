
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo-black.png";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Updates", href: "/legal-updates" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header relative z-50">
      <div className="container-site">
        <div className="header-row flex min-h-20 items-center justify-between gap-6">
          <a href="/#home" aria-label="Chambers of T. K. Nayak home">
            <img className="site-logo" src={logo} alt="Chambers of T. K. Nayak" />
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 md:flex"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="header-link text-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="/#contact"
            className="header-cta hidden px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-colors md:inline-flex"
          >
            Contact Chambers
          </a>

          <button
            type="button"
            className="header-menu inline-flex size-11 items-center justify-center md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="mobile-navigation border-t py-4 md:hidden"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="header-link block py-3 text-sm"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/#contact"
              onClick={closeMenu}
              className="header-cta mt-3 inline-flex px-5 py-3 text-xs font-semibold uppercase tracking-wider"
            >
              Contact Chambers
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
