const lines = [
  "Forty-hour battery.",
  "Adaptive noise cancellation.",
  "Studio-tuned 40mm drivers.",
];

export function BrandPromise() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      {lines.map((line) => (
        <p
          key={line}
          className="font-tb-display text-[clamp(1.75rem,4vw+1rem,3.5rem)] font-semibold text-tb-text"
        >
          {line}
        </p>
      ))}
    </section>
  );
}
