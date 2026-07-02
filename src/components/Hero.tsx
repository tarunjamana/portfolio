"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Container } from "@/components/ui/Container";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/reduced-motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const blobARef = useRef<HTMLDivElement>(null);
  const blobBRef = useRef<HTMLDivElement>(null);
  const { reducedMotion } = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) return;

      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.8, ease: "house" },
      );
      gsap.fromTo(
        sublineRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.8, ease: "house", delay: 0.15 },
      );

      gsap.to(blobARef.current, {
        x: 40,
        y: 30,
        duration: 22,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(blobBRef.current, {
        x: -50,
        y: -20,
        duration: 26,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    { dependencies: [reducedMotion], scope: containerRef, revertOnUpdate: true },
  );

  return (
    <section className="relative min-h-[55svh] overflow-hidden pt-16 pb-8 md:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div
          ref={blobARef}
          className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-accent/25 blur-3xl"
        />
        <div
          ref={blobBRef}
          className="absolute top-1/3 right-0 h-112 w-md rounded-full bg-accent/25 blur-3xl"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-bg/40"
      />

      <Container>
        <div
          ref={containerRef}
          className="relative z-[2] flex max-w-3xl flex-col gap-6"
        >
          <h1
            ref={headlineRef}
            className="font-display text-[clamp(2rem,4vw+1rem,4rem)] font-semibold leading-[1.1] tracking-tight text-text"
          >
            Web experiences that resonate. Engineered to be fast, accessible,
            and measured.
          </h1>
          <p
            ref={sublineRef}
            className="max-w-prose font-sans text-lg text-text-secondary"
          >
            I&apos;m Tarun — a full-stack engineer, front-end focused, who
            pairs motion-first design with production-grade code.
          </p>
        </div>
      </Container>
    </section>
  );
}
