import { useEffect, useRef, useState } from "react";
import { educationTimeline } from "../data/personal";
import AnimatedSection from "./ui/AnimatedSection";
import SectionHeading from "./ui/SectionHeading";
import MagicBentoCard from "./MagicBentoCard";

export default function Education() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate line fill when section enters viewport
          let start: number | null = null;
          const duration = 1200;
          const step = (ts: number) => {
            if (!start) start = ts;
            const pct = Math.min((ts - start) / duration, 1);
            setLineProgress(pct);
            if (pct < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="relative py-20 md:py-28 scroll-mt-20">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading title="Education" />
        </AnimatedSection>

        {/* ── Timeline Container ── */}
        <div className="relative" ref={lineRef}>
          {/* ── Cards Row ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pb-12">
            {educationTimeline.map((item, idx) => (
              <AnimatedSection key={item.id} delay={idx * 180} direction="up">
                <MagicBentoCard
                  className={`h-full !p-6 transition-all duration-300 ${
                    item.isCurrent
                      ? "border-purple-500/50 shadow-[0_0_25px_rgba(168,85,247,0.15)]"
                      : "border-border-dark"
                  }`}
                  color={item.isCurrent ? "rgba(18, 15, 23, 0.9)" : "rgba(18, 15, 23, 0.7)"}
                  glowColor="168, 85, 247"
                  enableStars={true}
                  enableSpotlight={true}
                  enableBorderGlow={true}
                  enableTilt={true}
                  clickEffect={true}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      {/* Level badge */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-xs font-mono font-semibold tracking-widest px-3 py-1 rounded-full border text-purple-300 border-purple-500/40 bg-purple-600/15">
                          {item.level}
                        </span>
                        {item.isCurrent && (
                          <span className="flex items-center gap-1.5 text-xs font-semibold text-purple-300 bg-purple-600/20 border border-purple-500/40 rounded-full px-3 py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                            CURRENT
                          </span>
                        )}
                      </div>

                      {/* Logo + Name */}
                      <div className="flex items-center gap-4 mb-4">
                        {/* Logo container */}
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl border border-purple-500/40 bg-white p-1.5 flex items-center justify-center overflow-hidden">
                          {item.logo ? (
                            <img
                              src={item.logo}
                              alt={item.institution}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <svg
                              viewBox="0 0 24 24"
                              className="w-7 h-7 text-purple-600"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={1.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3L2 8l10 5 10-5-10-5zM2 13l10 5 10-5M2 18l10 5 10-5"
                              />
                            </svg>
                          )}
                        </div>
                        <h3 className="font-heading font-bold text-base md:text-lg leading-snug text-text-primary">
                          {item.institution}
                        </h3>
                      </div>

                      {/* Purple separator */}
                      <div className="h-px mb-4 bg-gradient-to-r from-purple-600/60 via-purple-400/30 to-transparent" />
                    </div>

                    {/* Description */}
                    <p className="text-text-muted text-sm leading-relaxed flex-1">
                      {item.description}
                    </p>
                  </div>
                </MagicBentoCard>
              </AnimatedSection>
            ))}
          </div>

          {/* ── Horizontal Junction Rail (desktop only) ── */}
          <div className="hidden md:block relative h-10 -mt-4">
            {/* Background rail track */}
            <div className="absolute top-1/2 left-[16.67%] right-[16.67%] h-[2px] -translate-y-1/2 bg-border-dark/60 rounded-full" />

            {/* Animated fill */}
            <div
              className="absolute top-1/2 left-[16.67%] h-[2px] -translate-y-1/2 rounded-full transition-none"
              style={{
                width: `calc(${lineProgress * 100}% * 0.667)`,
                background:
                  "linear-gradient(90deg, #7C3AED, #A855F7, #C084FC)",
              }}
            />

            {/* Junction dots — one per card (positioned at card centres: 1/6, 3/6, 5/6) */}
            {[1, 3, 5].map((pos, idx) => {
              const threshold = idx / 2;
              const active = lineProgress >= threshold;
              const isCurrent = idx === 2;
              return (
                <div
                  key={pos}
                  className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                  style={{ left: `${(pos / 6) * 100}%` }}
                >
                  {/* Clean dot without glow */}
                  <div
                    className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-500 ${active
                        ? isCurrent
                          ? "border-purple-400 bg-purple-500"
                          : "border-purple-500 bg-purple-600"
                        : "border-border-dark bg-midnight-800"
                      }`}
                  />
                </div>
              );
            })}
          </div>

          {/* ── Mobile: vertical connector lines between cards ── */}
          <div className="md:hidden flex flex-col items-center gap-0 -mt-2 mb-2">
            {[0, 1].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-[2px] h-6 bg-border-dark" />
                <div className="w-3 h-3 rounded-full border-2 border-purple-500 bg-purple-600" />
                <div className="w-[2px] h-6 bg-border-dark" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
