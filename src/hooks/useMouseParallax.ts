import { useEffect, useRef, useState, type CSSProperties } from "react";

interface UseMouseParallaxOptions {
  /** Maximum offset in pixels (default: 8) */
  maxOffset?: number;
  /** Multiplier for effect strength (default: 1) */
  factor?: number;
}

/**
 * Returns a style object with subtle translate3d based on mouse position.
 * Only active on desktop with pointer: fine and no reduced motion.
 * Movement is relative to viewport center.
 */
export function useMouseParallax(options: UseMouseParallaxOptions = {}) {
  const { maxOffset = 8, factor = 1 } = options;
  const [style, setStyle] = useState<CSSProperties>({});
  const enabled = useRef(false);

  useEffect(() => {
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isDesktop || prefersReducedMotion) return;

    enabled.current = true;
    let rafId: number;
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1..1 relative to viewport center
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const animate = () => {
      const x = mouseX * maxOffset * factor;
      const y = mouseY * maxOffset * factor;

      setStyle({
        transform: `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`,
        transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
      });

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [maxOffset, factor]);

  return style;
}
