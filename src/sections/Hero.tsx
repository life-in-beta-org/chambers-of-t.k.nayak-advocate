import { useEffect, useRef, useState } from "react";
import heroBg from "../assets/bg/3.jpg";
import { heroPracticeAreas } from "../data/heroPracticeAreas";

export default function Hero() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tabsPaused, setTabsPaused] = useState(false);
  const [tagIndex, setTagIndex] = useState(0);
  const [tagPaused, setTagPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const heroRef = useRef<HTMLElement>(null);
  const activeArea = heroPracticeAreas[selectedIndex];
  const activeTag = activeArea.services[tagIndex % activeArea.services.length];

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(motionQuery.matches);
    motionQuery.addEventListener("change", updateMotionPreference);
    return () => motionQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (tabsPaused || reducedMotion) return;
    const interval = window.setInterval(() => {
      setSelectedIndex((currentIndex) => (currentIndex + 1) % heroPracticeAreas.length);
    }, 3500);
    return () => window.clearInterval(interval);
  }, [reducedMotion, tabsPaused]);

  useEffect(() => {
    if (tagPaused || reducedMotion) return;
    const interval = window.setInterval(() => {
      setTagIndex((currentIndex) => (currentIndex + 1) % activeArea.services.length);
    }, 3500);
    return () => window.clearInterval(interval);
  }, [activeArea.services.length, reducedMotion, tagPaused]);

  useEffect(() => {
    if (reducedMotion) {
      heroRef.current?.style.removeProperty("--hero-scroll-shift");
      return;
    }

    let frame = 0;
    const updateScrollShift = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const shift = Math.min(window.scrollY * 0.12, 72);
        heroRef.current?.style.setProperty("--hero-scroll-shift", `${shift}px`);
      });
    };

    updateScrollShift();
    window.addEventListener("scroll", updateScrollShift, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScrollShift);
    };
  }, [reducedMotion]);

  return (
    <section ref={heroRef} id="home" className="hero-section">
      {/* Hero Background Image from src/assets/bg */}
      <div className="hero-bg-wrapper" aria-hidden="true">
        <img src={heroBg} alt="" className="hero-bg-image" />
        <div className="hero-bg-overlay" />
      </div>

      <div className="hero-grid container-site">
        <div className="hero-copy">
          <h1>
            <span className="hero-line text-8xl">
              ROOTED IN <span className="hero-highlight">LAW</span>
            </span>
            <span className="hero-line">DRIVEN BY PRINCIPLE.</span>
          </h1>
          <p
            key={activeTag}
            className="hero-rotating-tag"
            aria-live="polite"
            onMouseEnter={() => setTagPaused(true)}
            onMouseLeave={() => setTagPaused(false)}
          >
            {activeTag}
          </p>
          <p className="hero-description">
            The chambers handle litigation and advisory work in 
            service, criminal, constitutional, civil, family, 
            corporate and intellectual property law, appearing 
            before the Supreme Court of India, High Courts across 
            the country, and the district courts.
          </p>
        </div>

        <aside
          className="hero-services"
          aria-label="Practice areas"
          onMouseEnter={() => setTabsPaused(true)}
          onMouseLeave={() => setTabsPaused(false)}
        >
          <div
            id="hero-practice-panel"
            className="hero-practice-panel"
            role="tabpanel"
            aria-live="polite"
            aria-labelledby={`hero-tab-${activeArea.id}`}
          >
            <div key={activeArea.id} className="hero-panel-content">
              <p className="service-intro">{activeArea.title}</p>
              <p className="service-detail">{activeArea.description}</p>
              <ul>
                {activeArea.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}