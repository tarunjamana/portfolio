import { Headphones } from "@/components/clp/Headphones";

export function ParallaxMoment() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-12 overflow-hidden bg-tb-surface px-6 py-24 text-center">
      <Headphones color="var(--tb-accent)" className="h-80 w-80" />
      <p className="max-w-2xl font-tb-display text-[clamp(1.5rem,3.5vw+1rem,3rem)] font-semibold text-tb-text">
        Engineered in silence, so every detail survives the noise.
      </p>
    </section>
  );
}
