import { useEffect, useState } from "react";

interface TrainRolesProps {
  roles: readonly string[];
  displayDuration?: number;
}

export default function TrainRoles({
  roles,
  displayDuration = 1500,
}: TrainRolesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!roles || roles.length <= 1) return;

    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % roles.length);

      const timeout = setTimeout(() => {
        setPrevIndex(null);
      }, 500);

      return () => clearTimeout(timeout);
    }, displayDuration + 500);

    return () => clearInterval(interval);
  }, [currentIndex, roles, displayDuration]);

  if (!roles || roles.length === 0) return null;

  return (
    <div
      className="relative h-10 sm:h-12 md:h-14 overflow-hidden flex items-center select-none"
      aria-live="polite"
    >
      {/* Exiting Role — moves out to left like a train carriage */}
      {prevIndex !== null && (
        <span
          key={`prev-${prevIndex}`}
          className="absolute left-0 train-coach-exit text-gradient-purple font-heading text-2xl sm:text-3xl md:text-4xl font-bold whitespace-nowrap"
        >
          {roles[prevIndex]}
        </span>
      )}

      {/* Current / Entering Role — moves in from right like the next train carriage */}
      <span
        key={`curr-${currentIndex}`}
        className={`text-gradient-purple font-heading text-2xl sm:text-3xl md:text-4xl font-bold whitespace-nowrap ${
          prevIndex !== null ? "absolute left-0 train-coach-enter" : "relative"
        }`}
      >
        {roles[currentIndex]}
      </span>
    </div>
  );
}
