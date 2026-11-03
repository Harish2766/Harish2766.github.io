import { useEffect, useRef, useState } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id={id} ref={ref} className="text-center mb-16 scroll-mt-24">
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {/* Animated purple divider */}
      <div className="mt-6 flex items-center justify-center gap-2">
        <span
          className={`h-px bg-gradient-to-r from-transparent to-purple-600/60 accent-line-animate ${isVisible ? "is-visible" : ""}`}
        />
        <span
          className={`h-1.5 w-1.5 rounded-full bg-purple-600 shadow-[0_0_8px_rgba(124,58,237,0.6)] accent-dot-animate ${isVisible ? "is-visible" : ""}`}
        />
        <span
          className={`h-px bg-gradient-to-l from-transparent to-purple-600/60 accent-line-animate ${isVisible ? "is-visible" : ""}`}
        />
      </div>
    </div>
  );
}
