import { useState, useCallback, useEffect } from "react";
import { skillCategories } from "../data/skills";
import AnimatedSection from "./ui/AnimatedSection";
import SectionHeading from "./ui/SectionHeading";
import MagicBentoCard from "./MagicBentoCard";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const [isCardHovered, setIsCardHovered] = useState(false);

  const activeCategory =
    skillCategories.find((c) => c.id === activeTab) || skillCategories[0];

  const switchTab = useCallback((tabId: string) => {
    setActiveTab(tabId);
  }, []);

  // Auto-navigate through each category one by one with a precise 2s interval
  useEffect(() => {
    if (isCardHovered) return;

    const timer = setTimeout(() => {
      setActiveTab((prev) => {
        const currentIndex = skillCategories.findIndex((c) => c.id === prev);
        const nextIndex = (currentIndex + 1) % skillCategories.length;
        return skillCategories[nextIndex].id;
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [activeTab, isCardHovered]);

  return (
    <section id="skills" className="relative py-20 md:py-28 scroll-mt-20">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168, 85, 247, 0.06), transparent 60%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Tech Stack"
            subtitle="Technologies I work with to build modern applications."
          />
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {skillCategories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => switchTab(cat.id)}
                  className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive
                      ? "bg-purple-600/15 text-purple-400 border border-purple-600/30 shadow-[0_0_20px_rgba(124,58,237,0.1)] scale-[1.02]"
                      : "text-text-muted border border-transparent hover:text-text-secondary hover:bg-midnight-600/40"
                  }`}
                >
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Skills Grid — stable height to prevent layout jumps, smooth staggered entrance */}
        <AnimatedSection delay={200}>
          <div
            key={activeTab}
            className="flex flex-wrap justify-center items-center gap-5 md:gap-6 min-h-[220px] sm:min-h-[160px] md:min-h-[140px]"
          >
            {activeCategory.skills.map((skill, i) => (
              <MagicBentoCard
                key={skill.name}
                onMouseEnter={() => setIsCardHovered(true)}
                onMouseLeave={() => setIsCardHovered(false)}
                className="group skill-item-enter magic-bento-compact !min-h-0 !p-4 md:!p-5 border-border-dark/50 cursor-default"
                style={{ animationDelay: `${i * 45}ms` }}
                color="rgba(18, 15, 23, 0.55)"
                glowColor="168, 85, 247"
                particleCount={6}
                spotlightRadius={120}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                clickEffect={true}
              >
                <div className="flex flex-col items-center gap-3 w-full">
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs md:text-sm text-text-secondary font-medium group-hover:text-text-primary transition-colors text-center whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              </MagicBentoCard>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
