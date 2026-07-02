"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { Headphones } from "@/components/clp/Headphones";
import { ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/reduced-motion";

const features = [
  {
    title: "Silence on demand",
    description: "Hybrid ANC that adapts to the room.",
  },
  {
    title: "All day, and then some",
    description: "40 hours, 10-minute quick charge.",
  },
  {
    title: "Made to be worn",
    description: "Memory foam, 250g, balanced clamp.",
  },
];

function SimpleStack() {
  return (
    <div className="flex flex-col gap-24 px-6 py-24">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 text-center md:flex-row md:text-left"
        >
          <Headphones
            color="var(--tb-accent)"
            className="h-40 w-40 shrink-0"
          />
          <div className="flex flex-col gap-2">
            <h3 className="font-tb-display text-2xl font-semibold text-tb-text">
              {feature.title}
            </h3>
            <p className="font-tb-body text-base text-tb-text-dim">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function StickyFeatures() {
  const visualRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useGSAP(() => {
    const triggers = visualRefs.current.map((el, i) => {
      if (!el) return null;
      return ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActive(i),
        onEnterBack: () => setActive(i),
      });
    });
    return () => triggers.forEach((t) => t?.kill());
  }, []);

  return (
    <div className="hidden px-6 md:grid md:grid-cols-2 md:gap-12">
      <div className="sticky top-1/3 h-fit">
        <div className="relative h-40">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="absolute inset-0 flex flex-col justify-center gap-2 transition-opacity ease-tb-house duration-500"
              style={{ opacity: active === i ? 1 : 0 }}
            >
              <h3 className="font-tb-display text-3xl font-semibold text-tb-text">
                {feature.title}
              </h3>
              <p className="font-tb-body text-base text-tb-text-dim">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        {features.map((feature, i) => (
          <div
            key={feature.title}
            ref={(el) => {
              visualRefs.current[i] = el;
            }}
            className="flex min-h-screen items-center justify-center"
          >
            <Headphones color="var(--tb-accent)" className="h-64 w-64" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Features() {
  const { reducedMotion } = useReducedMotion();

  if (reducedMotion) {
    return (
      <section>
        <SimpleStack />
      </section>
    );
  }

  return (
    <section>
      <div className="md:hidden">
        <SimpleStack />
      </div>
      <StickyFeatures />
    </section>
  );
}
