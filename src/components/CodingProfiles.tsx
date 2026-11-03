import { socialLinks } from "../data/personal";
import { LeetCodeIcon, HackerRankIcon, ExternalLinkIcon } from "./ui/Icons";
import AnimatedSection from "./ui/AnimatedSection";
import SectionHeading from "./ui/SectionHeading";
import MagicBentoCard from "./MagicBentoCard";

const profiles = [
  {
    name: "LeetCode",
    icon: LeetCodeIcon,
    description:
      "Practicing data structures, algorithms and problem solving to sharpen logical thinking and coding skills.",
    url: socialLinks.leetcode,
    iconColor: "text-[#FFA116]",
    glowColorRgb: "255, 161, 22",
  },
  {
    name: "HackerRank",
    icon: HackerRankIcon,
    description:
      "Building proficiency in various programming domains through structured challenges and certifications.",
    url: socialLinks.hackerrank,
    iconColor: "text-[#00EA64]",
    glowColorRgb: "0, 234, 100",
  },
];

export default function CodingProfiles() {
  return (
    <section id="profiles" className="relative py-20 md:py-28 scroll-mt-20">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Problem Solving"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          {profiles.map((profile, i) => {
            const Icon = profile.icon;
            return (
              <AnimatedSection key={profile.name} delay={i * 120}>
                <MagicBentoCard
                  className="h-full !p-6 md:!p-8 border-border-dark transition-all duration-300"
                  color="rgba(18, 15, 23, 0.75)"
                  glowColor={profile.glowColorRgb}
                  spotlightRadius={220}
                  particleCount={12}
                  enableStars={true}
                  enableSpotlight={true}
                  enableBorderGlow={true}
                  enableTilt={true}
                  clickEffect={true}
                >
                  <div className="flex flex-col items-center text-center h-full justify-between">
                    <div className="flex flex-col items-center">
                      <div className={`mb-4 ${profile.iconColor}`}>
                        <Icon size={48} />
                      </div>

                      <h3 className="font-heading text-xl font-bold text-text-primary mb-2">
                        {profile.name}
                      </h3>

                      <p className="text-text-muted text-sm leading-relaxed mb-6">
                        {profile.description}
                      </p>
                    </div>

                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border-dark text-text-secondary text-sm font-medium hover:border-purple-600/40 hover:text-text-primary hover:bg-midnight-600/40 active:scale-[0.97] transition-all duration-300"
                    >
                      Visit Profile
                      <ExternalLinkIcon size={14} className="group-hover:translate-x-0.5 transition-transform duration-250" />
                    </a>
                  </div>
                </MagicBentoCard>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
