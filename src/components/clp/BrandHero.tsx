"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Headphones } from "@/components/clp/Headphones";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/reduced-motion";

export function BrandHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const { reducedMotion } = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) return;

      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, ease: "tb-house" },
      );

      gsap.fromTo(
        productRef.current,
        { rotate: -12, scale: 0.85 },
        {
          rotate: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
    { dependencies: [reducedMotion], scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-24 text-center"
    >
      <div ref={textRef} className="flex flex-col gap-4">
        <h1 className="font-tb-display text-[clamp(2.5rem,6vw+1rem,5.5rem)] font-bold leading-[1.05] tracking-tight text-tb-text">
          Hear the whole picture.
        </h1>
        <p className="mx-auto max-w-md font-tb-body text-lg text-tb-text-dim">
          Studio One — wireless over-ear headphones, tuned for people who
          listen closely.
        </p>
      </div>

      <div ref={productRef}>
        <Headphones color="var(--tb-accent)" className="h-64 w-64" />
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="var(--tb-text-dim)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
