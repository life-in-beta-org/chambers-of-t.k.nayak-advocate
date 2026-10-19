/**
 * Disclaimer storage and access control utility.
 * Handles persistence, version invalidation, and resilient access for
 * Bar Council of India disclaimer requirements.
 */

export const DISCLAIMER_STORAGE_KEY = "vaishDisclaimerAccepted";
export const CURRENT_DISCLAIMER_VERSION = "1.0";

export interface DisclaimerStorageRecord {
  accepted: boolean;
  version: string;
  timestamp: string;
}

/**
 * Check if the visitor has a valid, up-to-date disclaimer acceptance recorded.
 * Safely defaults to `false` if localStorage is missing, disabled, or corrupted.
 */
export function isDisclaimerAccepted(expectedVersion = CURRENT_DISCLAIMER_VERSION): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const raw = window.localStorage.getItem(DISCLAIMER_STORAGE_KEY);
    if (!raw) {
      return false;
    }

    // Try parsing as structured JSON
    try {
      const parsed = JSON.parse(raw);
      if (typeof parsed === "object" && parsed !== null) {
        return parsed.accepted === true && parsed.version === expectedVersion;
      }
      if (typeof parsed === "boolean") {
        return parsed === true;
      }
    } catch {
      // Fallback for simple string value (e.g. matching version or "true")
      return raw === expectedVersion || raw === "true";
    }
  } catch (err) {
    // Gracefully handle private browsing / SecurityError / QuotaExceededError
    console.warn("[DisclaimerGate] Unable to read localStorage:", err);
    return false;
  }

  return false;
}

/**
 * Record acceptance in localStorage with version and timestamp.
 * Returns true if successful, false otherwise.
 */
export function recordDisclaimerAcceptance(version = CURRENT_DISCLAIMER_VERSION): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const payload: DisclaimerStorageRecord = {
      accepted: true,
      version,
      timestamp: new Date().toISOString(),
    };
    window.localStorage.setItem(DISCLAIMER_STORAGE_KEY, JSON.stringify(payload));
    return true;
  } catch (err) {
    console.warn("[DisclaimerGate] Unable to write acceptance to localStorage:", err);
    return false;
  }
}

/**
 * Clear disclaimer acceptance. Useful for testing or manual policy invalidation.
 */
export function clearDisclaimerAcceptance(): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.removeItem(DISCLAIMER_STORAGE_KEY);
  } catch (err) {
    console.warn("[DisclaimerGate] Unable to clear localStorage:", err);
  }
}

// Attach helper to window for developer inspection / console testing if in browser
if (typeof window !== "undefined") {
  (window as unknown as { resetDisclaimerAcceptance?: () => void }).resetDisclaimerAcceptance = clearDisclaimerAcceptance;
}
