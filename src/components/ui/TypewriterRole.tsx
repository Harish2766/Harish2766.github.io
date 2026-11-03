import { useEffect, useState } from "react";

interface TypewriterRoleProps {
  roles: readonly string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypewriterRole({
  roles,
  typingSpeed = 75,
  deletingSpeed = 40,
  pauseDuration = 2000,
}: TypewriterRoleProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !roles || roles.length === 0) return;

    const currentFullText = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      // Typing phase: add characters from left to right
      if (text.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setText(currentFullText.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        // Pause at complete word before starting deletion
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Deleting phase
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentFullText.slice(0, text.length - 1));
        }, deletingSpeed);
      } else {
        // Complete deletion, move to next role
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    roleIndex,
    roles,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    prefersReducedMotion,
  ]);

  if (prefersReducedMotion) {
    return (
      <span className="text-gradient-purple">
        {roles[0] || "Full-Stack Developer"}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center" aria-live="polite">
      <span className="text-gradient-purple font-heading font-semibold">
        {text}
      </span>
      <span
        className="inline-block w-[2.5px] h-[1.15em] bg-purple-400 ml-1 rounded-full animate-cursor-blink shadow-[0_0_8px_rgba(168,85,247,0.8)]"
        aria-hidden="true"
      />
    </span>
  );
}
