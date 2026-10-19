import { useEffect, useRef } from "react";
import logo from "../assets/logo-black.png";
import { defaultDisclaimerContent, type DisclaimerData } from "../data/disclaimerContent";
import "./DisclaimerModal.css";

export interface DisclaimerModalProps {
  isOpen?: boolean;
  onAgree: () => void;
  onDisagree: () => void;
  content?: DisclaimerData;
  logoSrc?: string;
}

export default function DisclaimerModal({
  isOpen = true,
  onAgree,
  onDisagree,
  content = defaultDisclaimerContent,
  logoSrc = logo,
}: DisclaimerModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const agreeBtnRef = useRef<HTMLButtonElement>(null);

  // Focus the "I Agree" button on mount for immediate keyboard accessibility
  useEffect(() => {
    if (isOpen) {
      agreeBtnRef.current?.focus();
    }
  }, [isOpen]);

  // Trap Escape key and prevent it from dismissing the access gate
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown, true);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="disclaimer-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-heading"
      aria-describedby="disclaimer-body-content"
      // Intentionally do NOT close on backdrop click
      onClick={(e) => {
        // Prevent accidental clicks on the backdrop from doing anything
        if (e.target === e.currentTarget) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
    >
      <div
        ref={panelRef}
        className="disclaimer-panel"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="disclaimer-header">
          {logoSrc && (
            <div className="disclaimer-logo-link">
              <img
                src={logoSrc}
                alt={content.firmName}
                className="disclaimer-logo"
              />
            </div>
          )}
          <h2 id="disclaimer-heading" className="disclaimer-title">
            {content.title}
          </h2>
          <span className="disclaimer-divider" aria-hidden="true" />
        </div>

        {/* Content Body */}
        <div id="disclaimer-body-content" className="disclaimer-content">
          <p className="disclaimer-paragraph">{content.intro}</p>

          <ul className="disclaimer-list">
            {content.acknowledgements.map((item, index) => (
              <li key={index} className="disclaimer-list-item">
                {item}
              </li>
            ))}
          </ul>

          <p className="disclaimer-paragraph">{content.notice}</p>

          <p className="disclaimer-paragraph">{content.liabilityDisclaimer}</p>
        </div>

        {/* Action Buttons */}
        <div className="disclaimer-actions">
          <button
            ref={agreeBtnRef}
            id="disclaimer-agree-btn"
            type="button"
            className="disclaimer-btn disclaimer-btn-agree"
            onClick={onAgree}
          >
            {content.agreeLabel}
          </button>
          <button
            id="disclaimer-disagree-btn"
            type="button"
            className="disclaimer-btn disclaimer-btn-disagree"
            onClick={onDisagree}
          >
            {content.disagreeLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export { DisclaimerModal };
