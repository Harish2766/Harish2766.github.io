import type { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlowCard({
  children,
  className = "",
  hover = true,
}: GlowCardProps) {
  return (
    <div
      className={`
        relative rounded-2xl border border-border-dark
        bg-midnight-700
        transition-all duration-300
        ${hover ? "hover:border-border-glow hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] hover:-translate-y-1" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
