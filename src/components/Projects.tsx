import { projects } from "../data/projects";
import AnimatedSection from "./ui/AnimatedSection";
import SectionHeading from "./ui/SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28 scroll-mt-20">
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(109, 40, 217, 0.06), transparent 60%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Featured Projects"
            subtitle="Explore some of the technical research, full-stack applications, and ML solutions I've engineered."
          />
        </AnimatedSection>

        {/* Projects Grid — Balanced 2x2 with 3D Pin Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-2 sm:gap-y-4 md:gap-y-6 max-w-7xl mx-auto pt-2">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 120} className="w-full">
              <ProjectCard project={project} index={i} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
