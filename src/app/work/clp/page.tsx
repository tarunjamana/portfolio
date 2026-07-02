import { BrandHero } from "@/components/clp/BrandHero";
import { BrandPromise } from "@/components/clp/BrandPromise";
import { ParallaxMoment } from "@/components/clp/ParallaxMoment";
import { Features } from "@/components/clp/Features";
import { VariantCarousel } from "@/components/clp/VariantCarousel";

export default function ClpPage() {
  return (
    <main id="main-content">
      <BrandHero />
      <BrandPromise />
      <ParallaxMoment />
      <Features />
      <VariantCarousel />
    </main>
  );
}
