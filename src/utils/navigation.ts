/**
 * Client-side Navigation Helper
 * Handles pushState navigation, popstate dispatching, and page scroll management.
 */

export function navigateTo(href: string): void {
  if (typeof window === "undefined") return;

  // If already on the page and no hash
  if (window.location.pathname === href && !href.includes("#")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  window.history.pushState({}, "", href);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function handleNavClick(
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  onNavigate?: () => void
): void {
  // Allow external links, anchor-only links, or modifier-click (cmd/ctrl for new tab)
  if (
    !href.startsWith("/") ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  ) {
    return;
  }

  event.preventDefault();
  navigateTo(href);
  if (onNavigate) {
    onNavigate();
  }
}
