"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Headphones } from "@/components/clp/Headphones";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/reduced-motion";

export function ParallaxMoment() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const { reducedMotion } = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) return;

      const scrollTrigger = {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      };

      gsap.fromTo(
        glowRef.current,
        { y: -40 },
        { y: 40, ease: "none", scrollTrigger },
      );
      gsap.fromTo(
        productRef.current,
        { y: 60 },
        { y: -60, ease: "none", scrollTrigger },
      );
      gsap.fromTo(
        textRef.current,
        { y: 20 },
        { y: -20, ease: "none", scrollTrigger },
      );
    },
    { dependencies: [reducedMotion], scope: sectionRef, revertOnUpdate: true },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center gap-12 overflow-hidden bg-tb-surface px-6 py-24 text-center"
    >
      <div
        ref={glowRef}
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-tb-accent/15 blur-3xl"
      />

      <div ref={productRef} className="relative">
        <Headphones color="var(--tb-accent)" className="h-80 w-80" />
      </div>

      <p
        ref={textRef}
        className="relative max-w-2xl font-tb-display text-[clamp(1.5rem,3.5vw+1rem,3rem)] font-semibold text-tb-text"
      >
        Engineered in silence, so every detail survives the noise.
      </p>
    </section>
  );
}
