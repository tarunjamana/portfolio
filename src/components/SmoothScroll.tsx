"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useReducedMotion } from "@/lib/reduced-motion";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll() {
  const { reducedMotion } = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, [reducedMotion]);

  return null;
}
