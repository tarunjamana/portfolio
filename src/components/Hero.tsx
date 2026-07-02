import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="flex min-h-[85svh] items-center">
      <Container>
        <div className="flex max-w-3xl flex-col gap-6">
          <h1 className="font-display text-[clamp(2rem,4vw+1rem,4rem)] font-semibold leading-[1.1] tracking-tight text-text">
            Web experiences that resonate. Engineered to be fast, accessible,
            and measured.
          </h1>
          <p className="max-w-prose font-sans text-lg text-text-secondary">
            I&apos;m Tarun — a full-stack engineer, front-end focused, who
            pairs motion-first design with production-grade code.
          </p>
        </div>
      </Container>
    </section>
  );
}
