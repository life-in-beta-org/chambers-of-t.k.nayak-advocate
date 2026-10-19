import { ShieldAlert } from "lucide-react";
import logo from "../assets/logo-black.png";
import "./DisclaimerModal.css";

export interface AccessDeniedProps {
  onReturn: () => void;
  onLeave?: () => void;
}

export default function AccessDenied({ onReturn, onLeave }: AccessDeniedProps) {
  function handleLeave() {
    if (onLeave) {
      onLeave();
    } else if (typeof window !== "undefined") {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = "https://www.google.com";
      }
    }
  }

  return (
    <div
      className="access-denied-wrapper"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="access-denied-title"
      aria-describedby="access-denied-desc"
    >
      <div className="access-denied-card">
        <div className="disclaimer-header">
          <img
            src={logo}
            alt="Chambers of T. K. Nayak — Advocate"
            className="disclaimer-logo"
          />
        </div>

        <div className="access-denied-icon-wrap" aria-hidden="true">
          <ShieldAlert size={36} strokeWidth={1.75} />
        </div>

        <h2 id="access-denied-title" className="access-denied-title">
          Access Restricted
        </h2>
        <p className="access-denied-subtitle">
          Bar Council of India Compliance Notice
        </p>

        <div className="disclaimer-divider" style={{ marginBottom: "1.25rem" }} aria-hidden="true" />

        <div id="access-denied-desc" className="access-denied-text">
          <p style={{ marginBottom: "0.75rem" }}>
            Under the rules of the Bar Council of India, advocates and legal chambers
            are strictly prohibited from soliciting work or advertising in any manner.
          </p>
          <p>
            Because you selected <strong>&ldquo;I Disagree&rdquo;</strong>, access to the website of Chambers
            of T. K. Nayak cannot be granted. If you wish to review the statutory
            disclaimer and voluntary information confirmation, please return below.
          </p>
        </div>

        <div className="access-denied-actions">
          <button
            id="disclaimer-return-btn"
            type="button"
            className="disclaimer-btn disclaimer-btn-agree access-denied-btn-return"
            onClick={onReturn}
            autoFocus
          >
            Return to Disclaimer
          </button>
          <button
            id="disclaimer-leave-btn"
            type="button"
            className="disclaimer-btn disclaimer-btn-disagree access-denied-btn-leave"
            onClick={handleLeave}
          >
            Leave Website
          </button>
        </div>
      </div>
    </div>
  );
}
