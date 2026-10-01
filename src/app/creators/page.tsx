import React from "react";
import { CreatorHero } from "@/components/creator-hero";
import { CreatorProducts } from "@/components/creator-products";

export const metadata = {
  title: "PurePearl Studio • ByteSpace Creator Profile",
  description: "Discover courses and creative projects by PurePearl Studio on ByteSpace.",
};

export default function CreatorsPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <CreatorHero />
      <CreatorProducts />
    </main>
  );
}
