import { useEffect, useRef, useState } from "react";
import GhostFibers from "./GhostFibers";

export default function HeroAboutBackground() {
  const [rotation, setRotation] = useState(18);
  const rotationRef = useRef(18);

  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) return;

    let frame = 0;

    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset || 0;
        const aboutEl = document.getElementById("about");

        let maxScrollDistance = window.innerHeight * 0.85;
        if (aboutEl) {
          const aboutTop = aboutEl.offsetTop;
          if (aboutTop > 0) {
            maxScrollDistance = Math.max(aboutTop - 80, 100);
          }
        }

        const rawProgress = Math.min(Math.max(scrollY / maxScrollDistance, 0), 1);
        // Smoothstep interpolation for a natural ease-in-out rotation feel
        const smoothProgress = rawProgress * rawProgress * (3 - 2 * rawProgress);

        // At progress 0 (Hero): 18deg (left-bottom to right-top)
        // At progress 1 (About): -18deg (left-top to right-bottom)
        const targetRotation = 18 - 36 * smoothProgress;

        if (Math.abs(targetRotation - rotationRef.current) >= 0.08) {
          rotationRef.current = targetRotation;
          setRotation(Number(targetRotation.toFixed(2)));
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="hero-about-fibers-bg" aria-hidden="true">
      <GhostFibers
        rotation={rotation}
        glowColor="#315D91"
        lineColor="#24476D"
        secondaryColor="#527BA6"
        gradient="depth"
        layers={1}
        twist={1.5}
        threads={90}
        fiberStyle="lines"
        speed={0.25}
        rollSpeed={0.08}
        volume={0.5}
        spread={1.3}
        density={1.2}
        thickness={1.6}
        depthOfField={0}
        focusDepth={0}
        foldGlow={0.8}
        particles={0}
        sparkle={0.1}
        glow={0}
        brightness={1.6}
        vignette={0}
        grain={0}
        lightMode={true}
        hoverEffect="none"
        mouseInteraction={false}
        intro={true}
      />
    </div>
  );
}
