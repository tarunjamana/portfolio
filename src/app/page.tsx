import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <SelectedWork />
    </main>
  );
}
