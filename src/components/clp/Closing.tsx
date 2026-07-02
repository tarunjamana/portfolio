export function Closing() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <p className="max-w-xl font-tb-display text-[clamp(1.75rem,4vw+1rem,3rem)] font-semibold text-tb-text">
        Studio One. Built to disappear, so the music doesn&apos;t.
      </p>

      <button
        type="button"
        disabled
        aria-label="Discover — concept only, not a working store"
        className="rounded-full bg-tb-accent px-8 py-3 font-tb-body text-sm font-medium text-tb-bg disabled:cursor-not-allowed disabled:opacity-90"
      >
        Discover
      </button>

      <p className="font-tb-body text-xs text-tb-text-dim">
        Concept / spec build — fictional brand, by Tarun.
      </p>

      <a
        href="/"
        className="font-tb-body text-sm text-tb-text-dim underline decoration-tb-line underline-offset-4 transition-colors ease-tb-house duration-150 hover:text-tb-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tb-accent-hi"
      >
        ← Back to portfolio
      </a>
    </section>
  );
}
