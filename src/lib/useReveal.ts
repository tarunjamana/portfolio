"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/reduced-motion";

export function useReveal<T extends HTMLElement>(order = 0) {
  const ref = useRef<T>(null);
  const { reducedMotion } = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !ref.current) return;

      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "house",
          delay: order * 0.08,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { dependencies: [reducedMotion] },
  );

  return ref;
}
