"use client";

import { useReducedMotion } from "@/lib/reduced-motion";

export function ReducedMotionToggle() {
  const { reducedMotion, osForced, toggle } = useReducedMotion();

  return (
    <button
      type="button"
      aria-pressed={reducedMotion}
      disabled={osForced}
      onClick={toggle}
      className="font-mono text-xs text-text-muted transition-colors ease-house duration-150 hover:text-text-secondary disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      reduced motion · {reducedMotion ? "on" : "off"}
      {osForced ? " (system)" : ""}
    </button>
  );
}
