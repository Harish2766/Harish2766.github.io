import { stats } from "../data/personal";
import { FolderIcon, CodeIcon, LayersIcon, TrendingIcon } from "./ui/Icons";
import AnimatedSection from "./ui/AnimatedSection";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  folder: FolderIcon,
  code: CodeIcon,
  layers: LayersIcon,
  trending: TrendingIcon,
};

export default function HeroStats() {
  return (
    <section className="relative py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon] || FolderIcon;
            return (
              <AnimatedSection key={stat.label} delay={i * 100}>
                <div
                  className="group relative rounded-xl border border-border-dark/60 bg-midnight-800/50 backdrop-blur-sm p-5 md:p-6 text-center hover:border-purple-600/30 hover:bg-midnight-600/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon
                    size={20}
                    className="mx-auto mb-3 text-purple-500 group-hover:text-purple-400 transition-colors"
                  />
                  <p className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-text-muted font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
