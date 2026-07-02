"use client";

import { useState, useRef, type TouchEvent } from "react";
import { Headphones } from "@/components/clp/Headphones";

const variants = [
  { name: "Midnight", color: "#2C3454" },
  { name: "Champagne", color: "#C9A96A" },
  { name: "Slate", color: "#7C848C" },
];

export function VariantCarousel() {
  const [selected, setSelected] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const select = (index: number) => {
    setSelected((index + variants.length) % variants.length);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      select(selected + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      select(selected - 1);
    }
  };

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      select(delta < 0 ? selected + 1 : selected - 1);
    }
    touchStartX.current = null;
  };

  const activeColor = variants[selected].color;

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden px-6 py-24 text-center"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-colors duration-500 ease-tb-house"
        style={{ backgroundColor: activeColor, opacity: 0.2 }}
      />

      <h2 className="relative font-tb-display text-2xl font-semibold text-tb-text">
        Choose your colorway
      </h2>

      <Headphones color={activeColor} className="relative h-72 w-72" />

      <div
        role="radiogroup"
        aria-label="Colorway"
        onKeyDown={onKeyDown}
        className="relative flex items-center gap-4"
      >
        {variants.map((variant, i) => (
          <button
            key={variant.name}
            type="button"
            role="radio"
            aria-checked={selected === i}
            tabIndex={selected === i ? 0 : -1}
            onClick={() => select(i)}
            className="flex flex-col items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tb-accent-hi"
          >
            <span
              className="block h-8 w-8 rounded-full border-2"
              style={{
                backgroundColor: variant.color,
                borderColor:
                  selected === i ? "var(--tb-accent-hi)" : "transparent",
              }}
            />
            <span className="font-tb-body text-xs text-tb-text-dim">
              {variant.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
