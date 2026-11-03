import { useEffect, useState } from "react";

export default function HeroWaves() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      // Normalize mouse to -1..1 relative to center
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const animate = () => {
      // Smooth lerp easing for organic liquid feel
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      setMouseOffset({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none select-none h-32 sm:h-40 md:h-48 lg:h-56 z-0"
      aria-hidden="true"
    >
      {/* ── Layer 1: Deep Background Swell (Slow, deep purple) ── */}
      <div
        className="absolute bottom-0 -left-[5%] w-[210%] h-full"
        style={{
          transform: `translate3d(${(mouseOffset.x * 16).toFixed(2)}px, ${(
            mouseOffset.y * 6
          ).toFixed(2)}px, 0)`,
          willChange: "transform",
        }}
      >
        <div className="w-full h-full hero-wave-bob-1">
          <svg
            viewBox="0 0 2400 160"
            preserveAspectRatio="none"
            className="w-full h-full hero-wave-slide-1 opacity-25"
          >
            <defs>
              <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#4C1D95" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#08090D" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <path
              d="M 0,80 Q 300,30 600,80 T 1200,80 Q 1500,30 1800,80 T 2400,80 L 2400,160 L 0,160 Z"
              fill="url(#wave-grad-1)"
            />
          </svg>
        </div>
      </div>

      {/* ── Layer 2: Middle Counter-Flow Wave (Medium speed, reverse direction, neon violet) ── */}
      <div
        className="absolute bottom-0 -left-[5%] w-[210%] h-full"
        style={{
          transform: `translate3d(${(mouseOffset.x * -26).toFixed(2)}px, ${(
            mouseOffset.y * 10
          ).toFixed(2)}px, 0)`,
          willChange: "transform",
        }}
      >
        <div className="w-full h-full hero-wave-bob-2">
          <svg
            viewBox="0 0 2400 160"
            preserveAspectRatio="none"
            className="w-full h-full hero-wave-slide-2 opacity-35"
          >
            <defs>
              <linearGradient id="wave-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.85" />
                <stop offset="35%" stopColor="#6D28D9" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#08090D" stopOpacity="0.95" />
              </linearGradient>
            </defs>
            <path
              d="M 0,90 Q 150,50 300,90 T 600,90 Q 750,50 900,90 T 1200,90 Q 1350,50 1500,90 T 1800,90 Q 1950,50 2100,90 T 2400,90 L 2400,160 L 0,160 Z"
              fill="url(#wave-grad-2)"
            />
          </svg>
        </div>
      </div>

      {/* ── Layer 3: Foreground Luminous Crest Wave (Fastest, glowing edge, vibrant accent) ── */}
      <div
        className="absolute bottom-0 -left-[5%] w-[210%] h-full"
        style={{
          transform: `translate3d(${(mouseOffset.x * 40).toFixed(2)}px, ${(
            mouseOffset.y * 14
          ).toFixed(2)}px, 0)`,
          willChange: "transform",
        }}
      >
        <div className="w-full h-full hero-wave-bob-3">
          <svg
            viewBox="0 0 2400 160"
            preserveAspectRatio="none"
            className="w-full h-full hero-wave-slide-3 opacity-45"
          >
            <defs>
              <linearGradient id="wave-grad-3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" stopOpacity="0.95" />
                <stop offset="25%" stopColor="#9333EA" stopOpacity="0.6" />
                <stop offset="70%" stopColor="#581C87" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#08090D" stopOpacity="0.98" />
              </linearGradient>
              <filter id="wave-glow" x="-10%" y="-20%" width="120%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <path
              d="M 0,105 Q 300,60 600,105 T 1200,105 Q 1500,60 1800,105 T 2400,105 L 2400,160 L 0,160 Z"
              fill="url(#wave-grad-3)"
              filter="url(#wave-glow)"
            />
          </svg>
        </div>
      </div>

      {/* Bottom fade into section background */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-midnight-900 via-midnight-900/60 to-transparent pointer-events-none" />
    </div>
  );
}
