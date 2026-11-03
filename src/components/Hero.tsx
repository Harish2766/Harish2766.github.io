import { personal } from "../data/personal";
import { useMouseParallax } from "../hooks/useMouseParallax";
import HeroWaves from "./HeroWaves";
import TrainRoles from "./ui/TrainRoles";

export default function Hero() {
  const bgParallax = useMouseParallax({ factor: 0.3 });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradients — animated drift */}
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 bg-drift-1"
          style={{
            background: "radial-gradient(circle, rgba(124, 58, 237, 0.18), transparent 60%)",
            ...bgParallax,
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 bg-drift-2"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.10), transparent 55%)",
            ...bgParallax,
          }}
        />

        {/* Dynamic animated & interactive waves */}
        <HeroWaves />

        {/* Floating particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-500/40 hero-enter"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${5 + i}s ease-in-out infinite`,
              animationDelay: `${900 + i * 200}ms`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-16 pb-12 md:pt-20 md:pb-16 -translate-y-8 sm:-translate-y-12 md:-translate-y-18">
        <div className="max-w-3xl">
          {/* Greeting */}
          <p
            className="text-purple-400 font-mono text-lg sm:text-xl md:text-2xl font-medium mb-3 md:mb-4 tracking-wide hero-enter"
            style={{ animationDelay: "150ms" }}
          >
            {personal.greeting}
          </p>

          {/* Name — with letter-spacing settle */}
          <h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 leading-tight hero-name-enter"
            style={{ animationDelay: "300ms" }}
          >
            {personal.name}
          </h1>

          {/* Role — Train carousel loop in signature violet */}
          <div
            className="hero-role-enter"
            style={{ animationDelay: "450ms" }}
          >
            <TrainRoles roles={personal.roles} />
          </div>
        </div>
      </div>
    </section>
  );
}
