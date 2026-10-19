import test from "node:test";
import assert from "node:assert/strict";

// Mock localStorage environment
class MockLocalStorage {
  constructor() {
    this.store = {};
  }
  getItem(key) {
    return this.store[key] ?? null;
  }
  setItem(key, value) {
    this.store[key] = String(value);
  }
  removeItem(key) {
    delete this.store[key];
  }
  clear() {
    this.store = {};
  }
}

globalThis.window = {
  localStorage: new MockLocalStorage(),
};

// Import compiled or dynamically test functions
const DISCLAIMER_STORAGE_KEY = "vaishDisclaimerAccepted";
const CURRENT_DISCLAIMER_VERSION = "1.0";

function isDisclaimerAccepted(expectedVersion = CURRENT_DISCLAIMER_VERSION) {
  if (typeof window === "undefined") return false;
  try {
    const raw = window.localStorage.getItem(DISCLAIMER_STORAGE_KEY);
    if (!raw) return false;
    try {
      const parsed = JSON.parse(raw);
      if (typeof parsed === "object" && parsed !== null) {
        return parsed.accepted === true && parsed.version === expectedVersion;
      }
      if (typeof parsed === "boolean") {
        return parsed === true;
      }
    } catch {
      return raw === expectedVersion || raw === "true";
    }
  } catch {
    return false;
  }
  return false;
}

function recordDisclaimerAcceptance(version = CURRENT_DISCLAIMER_VERSION) {
  if (typeof window === "undefined") return false;
  try {
    const payload = {
      accepted: true,
      version,
      timestamp: new Date().toISOString(),
    };
    window.localStorage.setItem(DISCLAIMER_STORAGE_KEY, JSON.stringify(payload));
    return true;
  } catch {
    return false;
  }
}

function clearDisclaimerAcceptance() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(DISCLAIMER_STORAGE_KEY);
  } catch {}
}

test("Scenario 1: Initial visit - disclaimer not accepted", () => {
  window.localStorage.clear();
  assert.equal(isDisclaimerAccepted(), false, "Disclaimer should be false on first visit");
});

test("Scenario 2: Clicking I Agree records acceptance with version 1.0", () => {
  window.localStorage.clear();
  const ok = recordDisclaimerAcceptance();
  assert.equal(ok, true);
  assert.equal(isDisclaimerAccepted(), true, "Disclaimer should be accepted after recording");

  const stored = JSON.parse(window.localStorage.getItem(DISCLAIMER_STORAGE_KEY));
  assert.equal(stored.accepted, true);
  assert.equal(stored.version, "1.0");
  assert.ok(stored.timestamp);
});

test("Scenario 3: Subsequent visits and refreshes retain acceptance", () => {
  assert.equal(isDisclaimerAccepted(), true, "Should still be accepted on reload");
});

test("Scenario 4: Clicking I Disagree does not record acceptance", () => {
  window.localStorage.clear();
  // Simulated Disagree action (no write to localStorage)
  assert.equal(isDisclaimerAccepted(), false, "Disagree does not create an acceptance record");
  assert.equal(window.localStorage.getItem(DISCLAIMER_STORAGE_KEY), null);
});

test("Scenario 5: Returning to disclaimer preserves blocked state until agreement", () => {
  // State remains unaccepted
  assert.equal(isDisclaimerAccepted(), false);
  // User now agrees
  recordDisclaimerAcceptance();
  assert.equal(isDisclaimerAccepted(), true);
});

test("Scenario 6: Version invalidation when policy updates", () => {
  // User accepted version 1.0
  recordDisclaimerAcceptance("1.0");
  assert.equal(isDisclaimerAccepted("1.0"), true);
  // Policy changes to version 2.0
  assert.equal(isDisclaimerAccepted("2.0"), false, "Old version 1.0 must not satisfy version 2.0 policy");
});

test("Scenario 7: Malformed or corrupted localStorage gracefully defaults to unaccepted", () => {
  window.localStorage.setItem(DISCLAIMER_STORAGE_KEY, "invalid{json");
  assert.equal(isDisclaimerAccepted(), false, "Malformed JSON should safely return false");

  window.localStorage.setItem(DISCLAIMER_STORAGE_KEY, JSON.stringify({ accepted: false }));
  assert.equal(isDisclaimerAccepted(), false, "accepted: false should return false");
});

test("Scenario 8: Inaccessible or error-throwing localStorage gracefully handles failure", () => {
  const faultyStorage = {
    getItem() {
      throw new Error("QuotaExceeded or SecurityError in private browsing");
    },
    setItem() {
      throw new Error("Cannot set");
    },
    removeItem() {},
  };
  const original = window.localStorage;
  window.localStorage = faultyStorage;

  assert.equal(isDisclaimerAccepted(), false, "Should not throw, must return false");
  assert.equal(recordDisclaimerAcceptance(), false, "Should return false gracefully");

  window.localStorage = original;
});

test("Scenario 9: Clear acceptance resets state", () => {
  recordDisclaimerAcceptance();
  assert.equal(isDisclaimerAccepted(), true);
  clearDisclaimerAcceptance();
  assert.equal(isDisclaimerAccepted(), false);
});
