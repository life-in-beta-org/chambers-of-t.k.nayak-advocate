import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo-black.png";
import contact from "../../data/contact.json";
import MonitorSideNav from "../navigation/MonitorSideNav";
import { handleNavClick } from "../../utils/navigation";

const navigation = [
  { label: "ABOUT", href: "/about" },
  { label: "PRACTICE AREAS", href: "/practice-areas" },
  { label: "MEDIA", href: "/media" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [monitorNavOpen, setMonitorNavOpen] = useState(false);
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";
  const whatsappHref = `https://wa.me/${contact.whatsappNumber}`;

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  function handleMobileNav(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    handleNavClick(event, href, closeMobileMenu);
  }

  return (
    <>
      <header className="site-header sticky top-0 z-50">
        <div className="container-site">
          <div className="header-row flex min-h-20 items-center justify-between gap-6">
            {/* Logo */}
            <a
              href="/"
              onClick={(e) => handleNavClick(e, "/")}
              aria-label="Chambers of T. K. Nayak home"
              className="flex-shrink-0"
            >
              <img className="site-logo" src={logo} alt="Chambers of T. K. Nayak" />
            </a>

            {/* Desktop Navigation Links (Monitor view) */}
            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-8 md:flex"
            >
              {navigation.map((item) => {
                const isActive = currentPath === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                    className={`header-link text-xs font-semibold tracking-wider transition-colors ${
                      isActive ? "text-[#0b1f37] font-bold" : ""
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Action Group: Contact CTA & Monitor Side Nav Slider Trigger */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="/contact"
                onClick={(e) => handleNavClick(e, "/contact")}
                className="header-cta px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Contact Us
              </a>

              {/* Monitor-only Side Nav Slider Button (3 lines) */}
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center text-[#0b1f37] hover:text-[#800020] transition-colors cursor-pointer"
                aria-label="Open desktop side navigation panel"
                aria-expanded={monitorNavOpen}
                aria-controls="monitor-side-nav-drawer"
                onClick={() => setMonitorNavOpen(true)}
              >
                <Menu size={24} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>

            {/* Mobile / Tablet Menu Button (Existing mobile behavior) */}
            <button
              type="button"
              className="header-menu inline-flex size-11 items-center justify-center md:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Existing Mobile Navigation Dropdown (For mobile/tablet only) */}
          {mobileMenuOpen && (
            <nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="mobile-navigation border-t py-4 md:hidden"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleMobileNav(event, item.href)}
                  className="header-link block py-3 text-sm"
                >
                  {item.label}
                </a>
              ))}

              <div className="mobile-contact-actions">
                <a
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="header-cta inline-flex px-5 py-3 text-xs font-semibold uppercase tracking-wider"
                >
                  Contact Us
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="header-whatsapp inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider"
                >
                  <WhatsAppIcon /> WhatsApp
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Monitor Side Nav Slider (Only renders / displays on monitor/desktop) */}
      <MonitorSideNav
        isOpen={monitorNavOpen}
        onClose={() => setMonitorNavOpen(false)}
        currentPath={currentPath}
      />
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.52 3.48A11.84 11.84 0 0 0 12.08 0C5.55 0 .24 5.3.24 11.84c0 2.09.55 4.13 1.59 5.92L.14 24l6.38-1.67a11.83 11.83 0 0 0 5.56 1.4h.01c6.53 0 11.84-5.31 11.84-11.84 0-3.16-1.23-6.13-3.41-8.41Zm-8.44 18.2h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.85 9.85 0 0 1-1.5-5.18C2.19 6.41 6.61 2 12.08 2a9.8 9.8 0 0 1 6.98 2.89 9.82 9.82 0 0 1 2.89 6.99c0 5.47-4.44 9.8-9.87 9.8Zm5.39-7.35c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}
