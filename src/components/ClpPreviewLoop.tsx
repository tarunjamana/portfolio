"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Headphones } from "@/components/clp/Headphones";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/reduced-motion";

export function ClpPreviewLoop() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const { reducedMotion } = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) return;

      gsap.fromTo(
        productRef.current,
        { rotate: -6, scale: 0.96 },
        {
          rotate: 6,
          scale: 1,
          duration: 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 90%",
            once: true,
          },
        },
      );
    },
    { dependencies: [reducedMotion], scope: wrapperRef, revertOnUpdate: true },
  );

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className="flex h-full w-full items-center justify-center"
    >
      <div ref={productRef} className="opacity-70">
        <Headphones color="var(--tb-accent)" className="h-32 w-32" />
      </div>
    </div>
  );
}
