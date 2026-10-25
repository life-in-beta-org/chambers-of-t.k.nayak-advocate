import { useEffect, useRef, useState } from "react";
import { heroPracticeAreas } from "../data/heroPracticeAreas";

export default function Hero() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tabsPaused, setTabsPaused] = useState(false);
  const [tagIndex, setTagIndex] = useState(0);
  const [tagPaused, setTagPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const heroRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const activeArea = heroPracticeAreas[selectedIndex];
  const activeTag = activeArea.services[tagIndex % activeArea.services.length];
  void setTabsPaused;
  void setTagPaused;
  void activeTag;

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

  useEffect(() => {
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const h1 = h1Ref.current;
    if (!line1 || !line2 || !h1) return;

    const alignLines = () => {
      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        if (descRef.current) {
          descRef.current.style.width = "100%";
          descRef.current.style.maxWidth = "100%";
        }

        line2.style.fontSize = "";
        line1.style.fontSize = "";
        line1.style.removeProperty("--hero-line1-scale");

        const containerWidth = h1.parentElement?.clientWidth || h1.getBoundingClientRect().width;
        const w2 = line2.getBoundingClientRect().width;
        const w1 = line1.getBoundingClientRect().width;

        if (containerWidth > 0 && w2 > 0 && w1 > 0) {
          const comp2 = window.getComputedStyle(line2);
          const fs2 = parseFloat(comp2.fontSize) || 28;
          const targetW = containerWidth - 2;
          const scale2 = Math.min(Math.max(targetW / w2, 0.8), 1.55);
          const newFs2 = fs2 * scale2;
          line2.style.fontSize = `${newFs2}px`;

          const currentW2 = line2.getBoundingClientRect().width;
          const currentW1 = line1.getBoundingClientRect().width;
          if (currentW1 > 0 && currentW2 > 0) {
            const comp1 = window.getComputedStyle(line1);
            const fs1 = parseFloat(comp1.fontSize) || newFs2;
            const targetFs1 = (fs1 * currentW2) / currentW1;
            line1.style.fontSize = `${targetFs1}px`;
          }
        }
        return;
      }

      line2.style.fontSize = "";
      const w2 = line2.getBoundingClientRect().width;
      const w1 = line1.getBoundingClientRect().width;
      if (!w1 || !w2) return;

      const comp1 = window.getComputedStyle(line1);
      const comp2 = window.getComputedStyle(line2);
      const fs1 = parseFloat(comp1.fontSize);
      const fs2 = parseFloat(comp2.fontSize);
      if (!fs1 || !fs2) return;

      const targetFontSize = (fs1 * w2) / w1;
      const ratio = targetFontSize / fs2;
      line1.style.setProperty("--hero-line1-scale", `${ratio}`);
      line1.style.fontSize = `calc(${ratio} * 1em)`;

      if (descRef.current) {
        descRef.current.style.width = `${w2}px`;
        descRef.current.style.maxWidth = `${w2}px`;
      }

      requestAnimationFrame(() => {
        const updatedW1 = line1.getBoundingClientRect().width;
        if (updatedW1 > 0 && Math.abs(updatedW1 - w2) > 0.4) {
          const fineRatio = (ratio * w2) / updatedW1;
          line1.style.setProperty("--hero-line1-scale", `${fineRatio}`);
          line1.style.fontSize = `calc(${fineRatio} * 1em)`;
        }
        const spanWidth = line2.getBoundingClientRect().width;
        if (descRef.current && spanWidth > 0) {
          descRef.current.style.width = `${spanWidth}px`;
          descRef.current.style.maxWidth = `${spanWidth}px`;
        }
      });
    };

    alignLines();

    if (document.fonts?.ready) {
      document.fonts.ready.then(alignLines);
    }

    const resizeObserver = new ResizeObserver(() => {
      alignLines();
    });
    resizeObserver.observe(h1);
    window.addEventListener("resize", alignLines);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", alignLines);
    };
  }, []);

  return (
    <section ref={heroRef} id="home" className="hero-section">
      <div className="hero-grid container-site">
        <div className="hero-copy">
          <h1 ref={h1Ref}>
            <span ref={line1Ref} className="hero-line hero-line-top">
              Rooted in <span className="hero-highlight">Law.</span>
            </span>
            <span ref={line2Ref} className="hero-line hero-line-bottom">
              Driven by Principle.
            </span>
          </h1>
          <p ref={descRef} className="hero-description">
            Welcome to the Chambers of T. K. Nayak.
            <br /><br />
            We are a litigation and advisory practice based in New Delhi, with an active presence in Tripura, Meghalaya and West Bengal. We appear before the Supreme Court of India, High Courts across the country, district courts as well as tribunals and other quasi-judicial bodies.
            <br /><br />
            Our practice covers service, criminal, constitutional, civil, family, corporate, intellectual property, consumer and environmental law. Whether a matter calls for advice or for litigation, it is approached the same way: a thorough understanding of the facts, careful legal research, and clear communication with the client at every stage.
          </p>
        </div>
      </div>
    </section>
  );
}