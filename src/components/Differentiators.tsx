import { Container } from "@/components/ui/Container";

export function Differentiators() {
  return (
    <section className="py-32">
      <Container>
        <div className="grid gap-16 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-3xl font-semibold text-text">
              Accessible by default.
            </h3>
            <p className="max-w-prose font-sans text-lg text-text-secondary">
              WCAG AAA contrast discipline and full keyboard support, built in
              from the first commit — not bolted on for compliance.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-display text-3xl font-semibold text-text">
              Built to be measured.
            </h3>
            <p className="max-w-prose font-sans text-lg text-text-secondary">
              A/B and multivariate testing instincts, backed by analytics
              that turn every ship into a data point.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
