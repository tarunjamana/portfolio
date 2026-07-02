import { Headphones } from "@/components/clp/Headphones";

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

export function Features() {
  return (
    <section className="flex flex-col gap-24 px-6 py-24">
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
    </section>
  );
}
