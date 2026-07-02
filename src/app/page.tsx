import { Container } from "@/components/ui/Container";
import { Button, LinkButton } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex-1 py-16">
      <Container>
        <div className="flex flex-col gap-8">
          <h1 className="font-display text-4xl font-semibold text-text">
            Web experiences that resonate.
          </h1>
          <p className="max-w-prose font-sans text-base text-text-secondary">
            Engineered to be fast, accessible, and measured.
          </p>
          <p className="font-mono text-xs text-text-muted">
            Phase 1 test — tokens, fonts, container, button
          </p>
          <div className="flex gap-4">
            <Button>Button element</Button>
            <LinkButton href="#">Link button</LinkButton>
          </div>
        </div>
      </Container>
    </main>
  );
}
