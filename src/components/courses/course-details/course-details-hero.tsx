"use client";

import React from "react";
import Image from "next/image";
import { Share2, BarChart2, Star, Users, Play } from "lucide-react";
import { CourseCardData } from "@/components/common/course-card";

interface CourseDetailsHeroProps {
  course: CourseCardData;
}

export function CourseDetailsHero({ course }: CourseDetailsHeroProps) {
  return (
    <section className="relative z-10 w-full bg-[#0047FF] text-white pt-10 pb-16 px-6 sm:px-12 md:px-16 selection:bg-[#CBFC01] selection:text-black">
      {/* Background Blueprint Grid (80px x 80px) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Header Row with Title & Share Button */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold tracking-tight text-white leading-[1.18] mb-3">
              {course.title}: A Comprehensive Guide
            </h1>
            <p className="text-base sm:text-lg text-blue-100 font-medium mb-4">
              Unlock the Power of Digital Creation with Expert Guidance
            </p>
            <p className="text-xs sm:text-sm text-white/90">
              by <span className="text-[#CBFC01] font-bold cursor-pointer hover:underline">{course.author}</span>
            </p>
          </div>

          {/* Lime Green Share Button */}
          <button
            type="button"
            className="self-start bg-[#CBFC01] hover:bg-[#b8e500] text-black font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full flex items-center gap-2 shadow-md shrink-0 cursor-pointer transition-transform active:scale-95"
          >
            <Share2 className="w-4 h-4 text-black" />
            <span>Share</span>
          </button>
        </div>

        {/* Badges Pill Row */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="flex items-center gap-1.5 bg-white rounded-full px-4 py-1.5 text-xs text-slate-800 font-bold shadow-xs">
            <BarChart2 className="w-3.5 h-3.5 text-[#0047FF]" />
            <span>{course.level || "Intermediate"}</span>
          </div>

          <div className="flex items-center gap-1.5 bg-white rounded-full px-4 py-1.5 text-xs text-slate-800 font-bold shadow-xs">
            <Star className="w-3.5 h-3.5 text-[#0047FF] fill-[#0047FF]" />
            <span>{course.rating || 4.8} (172 reviews)</span>
          </div>

          <div className="flex items-center gap-1.5 bg-white rounded-full px-4 py-1.5 text-xs text-slate-800 font-bold shadow-xs">
            <Users className="w-3.5 h-3.5 text-[#0047FF]" />
            <span>199 Students</span>
          </div>
        </div>

        {/* Video Player Preview Box */}
        <div className="relative w-full max-w-3xl h-[260px] sm:h-[380px] md:h-[420px] rounded-[24px] overflow-hidden shadow-2xl border-4 border-white/10 bg-slate-900 group cursor-pointer">
          <Image
            src="/images/courseDetails/Frame (15).png"
            alt={course.title}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 800px"
            className="object-cover group-hover:scale-102 transition-transform duration-500"
          />
          {/* Circular Play Button Overlay */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-900 shadow-xl group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-slate-900 text-slate-900 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
