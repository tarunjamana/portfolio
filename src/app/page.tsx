import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { Differentiators } from "@/components/Differentiators";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <SelectedWork />
      <Differentiators />
    </main>
  );
}
