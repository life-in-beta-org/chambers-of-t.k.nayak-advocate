import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import justica from "../assets/justica-3.png";
import { heroPracticeAreas } from "../data/heroPracticeAreas";

export default function Hero() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [tabsPaused, setTabsPaused] = useState(false);
  const [tagIndex, setTagIndex] = useState(0);
  const [tagPaused, setTagPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const heroRef = useRef<HTMLElement>(null);
  const displayedIndex = previewIndex ?? selectedIndex;
  const activeArea = heroPracticeAreas[displayedIndex];
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
      setPreviewIndex(null);
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

  function selectArea(index: number) {
    setSelectedIndex(index);
    setPreviewIndex(index);
  }

  function moveTab(index: number) {
    const nextIndex = (index + heroPracticeAreas.length) % heroPracticeAreas.length;
    setSelectedIndex(nextIndex);
    setPreviewIndex(nextIndex);
    document.getElementById(`hero-tab-${heroPracticeAreas[nextIndex].id}`)?.focus();
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      moveTab(index + 1);
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      moveTab(index - 1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      moveTab(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      moveTab(heroPracticeAreas.length - 1);
    }
  }

  return (
    <section ref={heroRef} id="home" className="hero-section">
      <div className="hero-grid container-site">
        {/* <div className="hero-bottom-word mb-25" aria-hidden="true">CONSTITUTION</div> */}

        <div className="hero-copy">
          {/* <p className="hero-kicker">Chambers of T. K. Nayak</p> */}
          <h1>
            <span className="hero-line text-8xl">
              ROOTED IN  <span className="hero-highlight">LAW</span>
            </span>
            <span className="hero-line">DRIVEN BY PRINCIPLE</span>

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
              {/* <div className="hero-actions">
                <a className="hero-button" href="#contact">Consult Now</a>
                <a className="hero-text-link" href="#practice-areas">Explore <span aria-hidden="true">-&gt;</span></a>
              </div> */}
        </div>

            {/* <div className="hero-figure pt-16" aria-hidden="true">
              <img src={justica} alt="" />
            </div> */}

            <aside className="hero-services" aria-label="Practice areas">
              {/* <div
                className="service-icons"
                role="tablist"
                aria-label="Practice area categories"
                onPointerEnter={(event) => { if (event.pointerType === "mouse") setTabsPaused(true); }}
                onPointerLeave={(event) => { if (event.pointerType === "mouse") { setTabsPaused(false); setPreviewIndex(null); } }}
                onFocusCapture={() => setTabsPaused(true)}
                onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setTabsPaused(false); }}
              >
                {heroPracticeAreas.map((area, index) => {
                  const Icon = area.icon;
                  return (
                    <button
                      key={area.id}
                      id={`hero-tab-${area.id}`}
                      type="button"
                      role="tab"
                      aria-selected={displayedIndex === index}
                      aria-controls="hero-practice-panel"
                      aria-label={area.label}
                      className={`service-tab${displayedIndex === index ? " is-active" : ""}`}
                      onClick={() => selectArea(index)}
                      onPointerEnter={(event: PointerEvent<HTMLButtonElement>) => { if (event.pointerType === "mouse") setPreviewIndex(index); }}
                      onKeyDown={(event) => handleTabKeyDown(event, index)}
                    >
                      <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                    </button>
                  );
                })}
              </div> */}
              <div id="hero-practice-panel" className="hero-practice-panel" role="tabpanel" aria-live="polite" aria-labelledby={`hero-tab-${activeArea.id}`}>
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