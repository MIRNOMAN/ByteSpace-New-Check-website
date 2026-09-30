"use client";

import React from "react";
import Image from "next/image";
import { DIVERSE_PATHS_DATA } from "@/data/mock-data";

export function DiversePathsSection() {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-12 md:px-16 border-b border-slate-100 selection:bg-[#CBFC01]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-slate-500 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-3xl mx-auto">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards (Figma Exact 1-Row Layout) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 sm:gap-6 w-full max-w-7xl">
          {DIVERSE_PATHS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/90 rounded-[28px] p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer aspect-square"
            >
              {/* Lime Circle with Icon Image */}
              <div className="w-16 h-16 rounded-full bg-[#D2FF00] flex items-center justify-center mb-4 relative overflow-hidden shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={40}
                  height={40}
                  sizes="40px"
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-slate-800 font-bold text-base md:text-[17px] text-center group-hover:text-[#0047FF] transition-colors leading-tight">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
