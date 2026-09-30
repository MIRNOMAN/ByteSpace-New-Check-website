import { ByteSpaceHero } from "@/components/bytespace-hero";
import { BrandLogos } from "@/components/brand-logos";
import { DiversePathsSection } from "@/components/diverse-paths-section";
import { CoursesSection } from "@/components/courses-section";
import { ProfessionalGrowthSection } from "@/components/professional-growth-section";
import { CreatorSection } from "@/components/creator-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { UnlockSection } from "@/components/unlock-section";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <ByteSpaceHero />
      <BrandLogos />
      <DiversePathsSection />
      <CoursesSection />
      <ProfessionalGrowthSection />
      <CreatorSection />
      <UnlockSection />
       <TestimonialsSection />
    </main>
  );
}
