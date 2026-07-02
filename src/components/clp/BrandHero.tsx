import { Headphones } from "@/components/clp/Headphones";

export function BrandHero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-24 text-center">
      <div className="flex flex-col gap-4">
        <h1 className="font-tb-display text-[clamp(2.5rem,6vw+1rem,5.5rem)] font-bold leading-[1.05] tracking-tight text-tb-text">
          Hear the whole picture.
        </h1>
        <p className="mx-auto max-w-md font-tb-body text-lg text-tb-text-dim">
          Studio One — wireless over-ear headphones, tuned for people who
          listen closely.
        </p>
      </div>

      <Headphones color="var(--tb-accent)" className="h-64 w-64" />

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
