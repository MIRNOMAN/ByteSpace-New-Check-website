"use client";

import React from "react";
import Image from "next/image";

export function CreatorHero() {
  return (
    <section className="relative w-full bg-[#0047FF] text-white overflow-hidden py-12 sm:py-16 px-6 sm:px-12 md:px-16 selection:bg-[#CBFC01] selection:text-black">
      {/* 1. Full-bleed Background Blueprint Grid (80px grid) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Creator Profile Top Row: Avatar & Title Block */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 mb-6">
          {/* Avatar Image */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-4xl overflow-hidden shadow-xl border-2 ">
            <Image
              src="/images/banner/avatar5.png"
              alt="PurePearl Studio"
              fill
              sizes="96px"
              className="object-cover"
              priority
            />
          </div>

          {/* Name & Creator Badge */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                PurePearl Studio
              </h1>
              <span className="bg-[#CBFC01] text-black text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                Creator
              </span>
            </div>
            <p className="text-white/80 text-sm font-normal mt-1.5">
              Passionate UI/UX, Web designer
            </p>
          </div>
        </div>

        {/* Bio Text Paragraphs */}
        <div className="max-w-4xl text-white/90 text-sm sm:text-[15px] leading-relaxed font-normal space-y-3 mb-8">
          <p>
            Welcome to the creative world of [Creator&apos;s Name]. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
          </p>
          <p>
            Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
          </p>
        </div>

        {/* Bottom Actions: Stats Pills Left, Follow Button Right */}
        <div className="flex items-center justify-between gap-4 flex-wrap pt-2">
          {/* Left Stats Pills */}
          <div className="flex items-center gap-3">
            <div className="bg-white text-[#0F172A] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-sm">
              3 <span className="font-normal text-slate-700">Products</span>
            </div>
            <div className="bg-white text-[#0F172A] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-sm">
              12 <span className="font-normal text-slate-700">Followers</span>
            </div>
          </div>

          {/* Right Follow Button */}
          <button className="bg-[#CBFC01] hover:bg-[#b8e500] active:scale-95 text-black font-bold text-xs sm:text-sm px-8 py-2.5 rounded-full shadow-md transition-all cursor-pointer">
            Follow
          </button>
        </div>
      </div>
    </section>
  );
}
