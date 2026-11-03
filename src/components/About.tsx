import { personal } from "../data/personal";
import AnimatedSection from "./ui/AnimatedSection";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 scroll-mt-20">
      {/* Subtle background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124, 58, 237, 0.06), transparent 60%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading title="About Me" />
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatedSection delay={100}>
            <div className="space-y-6 text-center">
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                {personal.about.split(" ").map((word, idx) => (
                  <span
                    key={idx}
                    className="inline-block mr-[0.28em] transition-all duration-200 hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.7)] cursor-default"
                  >
                    {word}
                  </span>
                ))}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
