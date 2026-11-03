import type { Project } from "../data/projects";
import { PinContainer } from "./ui/3d-pin";
import { GithubIcon, ExternalLinkIcon } from "./ui/Icons";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // Format clean repository path or title for the pin badge
  const pinTitle = project.github
    ? project.github.replace("https://github.com/", "")
    : "View Project";

  return (
    <div className="h-[37rem] sm:h-[40rem] md:h-[42rem] w-full flex items-center justify-center">
      <PinContainer
        title={pinTitle}
        href={project.github}
        containerClassName="w-full flex items-center justify-center"
      >
        <div className="flex flex-col w-[21rem] xs:w-[23rem] sm:w-[28rem] md:w-[32rem] lg:w-[34rem] min-h-[33rem] sm:min-h-[35rem] md:min-h-[36.5rem] p-1.5 sm:p-2 tracking-tight text-text-primary rounded-xl justify-between">
          {/* Card Media Preview */}
          <div className="relative w-full h-44 sm:h-48 md:h-52 rounded-xl overflow-hidden bg-midnight-900 border border-white/[0.08] shadow-inner mb-3.5 sm:mb-4 group/image shrink-0">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover/pin:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-purple-700/30 via-midnight-800 to-purple-400/10 flex items-center justify-center">
                <div className="space-y-2 w-3/4 opacity-30">
                  <div className="h-2.5 w-3/4 rounded bg-purple-400" />
                  <div className="h-2 w-1/2 rounded bg-purple-300" />
                  <div className="h-2 w-2/3 rounded bg-purple-400" />
                </div>
              </div>
            )}

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

            {/* Index Badge */}
            <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-lg bg-midnight-900/90 backdrop-blur-md border border-purple-500/40 text-xs font-mono font-bold text-purple-400 shadow-md">
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>

          {/* Project Details */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-text-primary group-hover/pin:text-purple-400 transition-colors duration-300 line-clamp-2 mb-2 sm:mb-2.5 leading-snug">
                {project.title}
              </h3>

              <p className="text-text-secondary text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3 mb-3.5 sm:mb-4 font-normal">
                {project.description}
              </p>
            </div>

            <div className="mt-auto">
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3.5 sm:mb-4">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-[13px] font-mono font-medium rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="px-2.5 py-0.5 sm:px-2.5 sm:py-1 text-xs font-mono text-text-muted rounded-full bg-midnight-800 border border-border-dark">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>

              {/* Action Bar */}
              <div className="flex items-center justify-between pt-3 sm:pt-3.5 border-t border-white/[0.1] text-xs sm:text-sm md:text-base font-semibold text-text-secondary">
                <span className="flex items-center gap-2 sm:gap-2.5 text-text-secondary group-hover/pin:text-purple-400 transition-colors">
                  <GithubIcon size={18} />
                  <span>GitHub Repository</span>
                </span>
                <span className="flex items-center gap-1 sm:gap-1.5 text-purple-400 group-hover/pin:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ExternalLinkIcon size={16} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
