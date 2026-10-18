
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo-black.png";
import contact from "../../data/contact.json";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Updates", href: "/legal-updates" },
  { label: "Media", href: "/media" },
  // { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappHref = `https://wa.me/${contact.whatsappNumber}`;

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleNavigation(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith("/") || href.includes("#")) return;
    event.preventDefault();
    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
    closeMenu();
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
                onClick={(event) => handleNavigation(event, item.href)}
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
                onClick={(event) => { handleNavigation(event, item.href); closeMenu(); }}
                className="header-link block py-3 text-sm"
              >
                {item.label}
              </a>
            ))}

            <div className="mobile-contact-actions">
              <a
                href="/#contact"
                onClick={closeMenu}
                className="header-cta inline-flex px-5 py-3 text-xs font-semibold uppercase tracking-wider"
              >
                Contact Chambers
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="header-whatsapp inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider"
              >
                <WhatsAppIcon /> WhatsApp
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.52 3.48A11.84 11.84 0 0 0 12.08 0C5.55 0 .24 5.3.24 11.84c0 2.09.55 4.13 1.59 5.92L.14 24l6.38-1.67a11.83 11.83 0 0 0 5.56 1.4h.01c6.53 0 11.84-5.31 11.84-11.84 0-3.16-1.23-6.13-3.41-8.41Zm-8.44 18.2h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.85 9.85 0 0 1-1.5-5.18C2.19 6.41 6.61 2 12.08 2a9.8 9.8 0 0 1 6.98 2.89 9.82 9.82 0 0 1 2.89 6.99c0 5.47-4.44 9.8-9.87 9.8Zm5.39-7.35c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}
