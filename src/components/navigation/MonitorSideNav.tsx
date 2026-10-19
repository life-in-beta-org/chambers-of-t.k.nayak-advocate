import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo-black.png";
import { handleNavClick } from "../../utils/navigation";
import "./MonitorSideNav.css";

export interface MonitorSideNavProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export default function MonitorSideNav({
  isOpen,
  onClose,
  currentPath,
}: MonitorSideNavProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Accordion state for expandable sections with [+]
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    capabilities: false,
    insights: false,
    ethos: false,
  });

  function toggleSection(key: string, event: React.MouseEvent) {
    event.stopPropagation();
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  // Focus close button on open
  useEffect(() => {
    if (isOpen) {
      closeBtnRef.current?.focus();
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        event.preventDefault();
        onClose();
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div className="monitor-side-nav-wrapper">
      {/* Background Overlay */}
      <div
        className={`monitor-side-nav-overlay ${isOpen ? "is-open" : ""}`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      {/* Sliding Drawer */}
      <aside
        ref={drawerRef}
        id="monitor-side-nav-drawer"
        className={`monitor-side-nav-drawer ${isOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Desktop site navigation"
        aria-hidden={!isOpen}
      >
        {/* Top Header: Logo on the left, [X] Close button on the right */}
        <div className="monitor-side-nav-header">
          <a
            href="/"
            onClick={(e) => handleNavClick(e, "/", onClose)}
            className="monitor-side-nav-logo-link"
            aria-label="Chambers of T. K. Nayak home"
          >
            <img
              src={logo}
              alt="Chambers of T. K. Nayak"
              className="monitor-side-nav-logo"
            />
          </a>

          <button
            ref={closeBtnRef}
            type="button"
            className="monitor-side-nav-close-btn"
            onClick={onClose}
            aria-label="Close navigation panel"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Primary Navigation Items: About, People, PRACTICE AREAS, Achievements, Media */}
        <nav className="monitor-side-nav-primary" aria-label="Main menu">
          {/* 1. ABOUT */}
          <div className="monitor-nav-item">
            <div className="monitor-nav-item-row">
              <a
                href="/about"
                onClick={(e) => handleNavClick(e, "/about", onClose)}
                className={`monitor-nav-link ${
                  currentPath === "/about" ? "is-active" : ""
                }`}
              >
                ABOUT
              </a>
            </div>
          </div>

          {/* 2. PEOPLE */}
          <div className="monitor-nav-item">
            <div className="monitor-nav-item-row">
              <a
                href="/people"
                onClick={(e) => handleNavClick(e, "/people", onClose)}
                className={`monitor-nav-link is-featured ${
                  currentPath === "/people" || currentPath === "/our-team" ? "is-active" : ""
                }`}
              >
                PEOPLE
              </a>
            </div>
          </div>

          {/* 3. PRACTICE AREAS [+] */}
          <div className="monitor-nav-item">
            <div className="monitor-nav-item-row">
              <a
                href="/practice-areas"
                onClick={(e) => handleNavClick(e, "/practice-areas", onClose)}
                className={`monitor-nav-link ${
                  currentPath === "/practice-areas" ? "is-active" : ""
                }`}
              >
                PRACTICE AREAS
              </a>
              <button
                type="button"
                className={`monitor-nav-expand-btn ${
                  expandedSections.capabilities ? "is-expanded" : ""
                }`}
                onClick={(e) => toggleSection("capabilities", e)}
                aria-expanded={expandedSections.capabilities}
                aria-label="Expand practice areas sub-menu"
              >
                +
              </button>
            </div>
            {expandedSections.capabilities && (
              <ul className="monitor-nav-submenu">
                <li>
                  <a
                    href="/practice-areas#practice-01"
                    onClick={(e) => handleNavClick(e, "/practice-areas", onClose)}
                    className="monitor-nav-sublink"
                  >
                    Corporate &amp; Commercial Law
                  </a>
                </li>
                <li>
                  <a
                    href="/practice-areas#practice-02"
                    onClick={(e) => handleNavClick(e, "/practice-areas", onClose)}
                    className="monitor-nav-sublink"
                  >
                    Civil Litigation &amp; Dispute Resolution
                  </a>
                </li>
                <li>
                  <a
                    href="/practice-areas#practice-03"
                    onClick={(e) => handleNavClick(e, "/practice-areas", onClose)}
                    className="monitor-nav-sublink"
                  >
                    Family &amp; Matrimonial Law
                  </a>
                </li>
                <li>
                  <a
                    href="/practice-areas#practice-04"
                    onClick={(e) => handleNavClick(e, "/practice-areas", onClose)}
                    className="monitor-nav-sublink"
                  >
                    Intellectual Property
                  </a>
                </li>
                <li>
                  <a
                    href="/practice-areas#practice-05"
                    onClick={(e) => handleNavClick(e, "/practice-areas", onClose)}
                    className="monitor-nav-sublink"
                  >
                    Criminal Defense &amp; White Collar
                  </a>
                </li>
                <li>
                  <a
                    href="/practice-areas#practice-06"
                    onClick={(e) => handleNavClick(e, "/practice-areas", onClose)}
                    className="monitor-nav-sublink"
                  >
                    Constitutional &amp; Administrative Law
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* 4. ACHIEVEMENTS */}
          <div className="monitor-nav-item">
            <div className="monitor-nav-item-row">
              <a
                href="/achievements"
                onClick={(e) => handleNavClick(e, "/achievements", onClose)}
                className={`monitor-nav-link ${
                  currentPath === "/achievements" || currentPath === "/awards" ? "is-active" : ""
                }`}
              >
                ACHIEVEMENTS
              </a>
            </div>
          </div>

          {/* 5. MEDIA */}
          <div className="monitor-nav-item">
            <div className="monitor-nav-item-row">
              <a
                href="/media"
                onClick={(e) => handleNavClick(e, "/media", onClose)}
                className={`monitor-nav-link ${
                  currentPath === "/media" ? "is-active" : ""
                }`}
              >
                MEDIA
              </a>
            </div>
          </div>
        </nav>

        {/* Solid Horizontal Rule Divider */}
        <hr className="monitor-side-nav-divider" />

        {/* Secondary Navigation Below Divider: Office, Contact */}
        <div className="monitor-side-nav-secondary">
          <a
            href="/offices"
            onClick={(e) => handleNavClick(e, "/offices", onClose)}
            className={`monitor-secondary-link ${
              currentPath === "/offices" || currentPath === "/office" ? "is-active" : ""
            }`}
          >
            OFFICE
          </a>
          <a
            href="/contact"
            onClick={(e) => handleNavClick(e, "/contact", onClose)}
            className={`monitor-secondary-link ${
              currentPath === "/contact" ? "is-active" : ""
            }`}
          >
            CONTACT
          </a>
        </div>

        {/* Social Media Row at Bottom */}
        <div className="monitor-side-nav-socials">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/chambers-of-t-k-nayak"
            target="_blank"
            rel="noopener noreferrer"
            className="monitor-social-btn"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8v-8.37M7.86 6.75a1.63 1.63 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63Z" />
            </svg>
          </a>

          {/* X */}
          <a
            href="https://x.com/tknayakchambers"
            target="_blank"
            rel="noopener noreferrer"
            className="monitor-social-btn"
            aria-label="X"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="monitor-social-btn"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@chambersoftknayak"
            target="_blank"
            rel="noopener noreferrer"
            className="monitor-social-btn"
            aria-label="YouTube"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/chambersoftknayak"
            target="_blank"
            rel="noopener noreferrer"
            className="monitor-social-btn"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
        </div>
      </aside>
    </div>
  );
}
