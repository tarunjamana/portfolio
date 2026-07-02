"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/reduced-motion";

const lines = [
  "Forty-hour battery.",
  "Adaptive noise cancellation.",
  "Studio-tuned 40mm drivers.",
];

export function BrandPromise() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const { reducedMotion } = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) return;

      const els = lineRefs.current.filter(Boolean) as HTMLParagraphElement[];
      gsap.set(els.slice(1), { opacity: 0, y: 20 });

      const isMobile = window.innerWidth < 768;
      const distance = isMobile ? "+=100%" : "+=200%";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: distance,
          pin: true,
          scrub: true,
        },
      });

      els.forEach((el, i) => {
        if (i > 0) {
          tl.to(els[i - 1], { opacity: 0, y: -20, ease: "tb-house" }, ">");
        }
        tl.to(el, { opacity: 1, y: 0, ease: "tb-house" }, i === 0 ? 0 : "<");
      });
    },
    { dependencies: [reducedMotion], scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 py-24 text-center"
    >
      {lines.map((line, i) => (
        <p
          key={line}
          ref={(el) => {
            lineRefs.current[i] = el;
          }}
          className="font-tb-display text-[clamp(1.75rem,4vw+1rem,3.5rem)] font-semibold text-tb-text"
        >
          {line}
        </p>
      ))}
    </section>
  );
}
