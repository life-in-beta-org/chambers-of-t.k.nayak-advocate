import { useEffect, useState, type ReactNode } from "react";
import { isDisclaimerAccepted, recordDisclaimerAcceptance } from "../utils/disclaimerStorage";
import DisclaimerModal from "./DisclaimerModal";
import AccessDenied from "./AccessDenied";
import "./DisclaimerModal.css";

export type GateStatus = "pending" | "accepted" | "denied";

export interface DisclaimerGateProps {
  children: ReactNode;
}

export default function DisclaimerGate({ children }: DisclaimerGateProps) {
  // Synchronous state initialization prevents any initial flash of un-gated website
  const [status, setStatus] = useState<GateStatus>(() => {
    return isDisclaimerAccepted() ? "accepted" : "pending";
  });

  // Lock body scroll whenever the disclaimer or access-denied screen is active
  useEffect(() => {
    if (status !== "accepted") {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [status]);

  // Handle "I AGREE"
  function handleAgree() {
    recordDisclaimerAcceptance();
    setStatus("accepted");
  }

  // Handle "I DISAGREE"
  function handleDisagree() {
    // Note: Do NOT record acceptance in localStorage
    setStatus("denied");
  }

  // Handle returning from Access Denied to Disclaimer
  function handleReturn() {
    setStatus("pending");
  }

  // State 1: Accepted - Render website normally
  if (status === "accepted") {
    return <>{children}</>;
  }

  // State 2: Denied - Strict lockdown, website content is NOT rendered or revealed
  if (status === "denied") {
    return (
      <AccessDenied onReturn={handleReturn} />
    );
  }

  // State 3: Pending - Render darkened inert background with centered disclaimer modal
  return (
    <>
      <div
        className="disclaimer-inert-background"
        aria-hidden="true"
        inert={true}
        tabIndex={-1}
      >
        {children}
      </div>

      <DisclaimerModal
        isOpen={true}
        onAgree={handleAgree}
        onDisagree={handleDisagree}
      />
    </>
  );
}
