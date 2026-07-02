import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { Differentiators } from "@/components/Differentiators";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <div id="top" />
      <Nav />
      <main id="main-content" className="flex-1">
        <Hero />
        <SelectedWork />
        <Differentiators />
      </main>
      <Footer />
    </>
  );
}
