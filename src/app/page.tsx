import { ByteSpaceHero } from "@/components/bytespace-hero";
import { BrandLogos } from "@/components/brand-logos";
import { DiversePathsSection } from "@/components/diverse-paths-section";
import { CoursesSection } from "@/components/courses-section";

export default function Home() {
  return (
    <main className="w-full">
      <ByteSpaceHero />
      <BrandLogos />
      <CoursesSection />
      <DiversePathsSection />
    </main>
  );
}
