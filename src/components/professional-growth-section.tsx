"use client";

import React from "react";
import Image from "next/image";
import { Star, BarChart2 } from "lucide-react";
import { PROFESSIONAL_GROWTH_DATA } from "@/data/mock-data";

export function ProfessionalGrowthSection() {
  return (
    <section 
      className="w-full pt-20 pb-10 px-6 sm:px-12 md:px-16 overflow-hidden selection:bg-[#CBFC01]"
      style={{
        background: `
          radial-gradient(circle at 35% 0%, rgba(207, 252, 14, 0.55) 0%, rgba(207, 252, 14, 0.18) 25%, transparent 60%),
          radial-gradient(circle at 0% 100%, rgba(210, 235, 255, 0.65) 0%, transparent 50%),
          radial-gradient(circle at 100% 100%, rgba(186, 215, 255, 0.65) 0%, transparent 50%),
          radial-gradient(circle at 95% 15%, rgba(220, 235, 255, 0.4) 0%, transparent 40%),
          #FFFFFF
        `
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Text & Metrics */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0F172A] tracking-tight leading-[1.18] mb-6">
            {PROFESSIONAL_GROWTH_DATA.title}
          </h2>
          <p className="text-[#475569] text-base lg:text-[17px] leading-[1.7] max-w-xl mb-12 font-normal">
            {PROFESSIONAL_GROWTH_DATA.description}
          </p>

          {/* 3 Metric Stats */}
          <div className="flex items-center gap-12 sm:gap-16 pt-2">
            {PROFESSIONAL_GROWTH_DATA.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl lg:text-[38px] font-extrabold text-[#0047FF] tracking-tight mb-1">
                  {stat.value}
                </span>
                <span className="text-[#475569] font-medium text-base">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Exact Figma Layer Arrangement (W: 577px, H: 560px) */}
        <div className="relative w-full max-w-[577px] mx-auto h-[540px] sm:h-[570px] flex items-center justify-center">
          
          {/* 1. Back Course Card (Positioned on the Left) */}
          <div className="absolute left-0 top-4 w-[330px] sm:w-[360px] bg-white rounded-[28px] border border-slate-200/90 p-5 shadow-lg opacity-95 select-none pointer-events-none z-10">
            <div className="relative w-full h-[155px] rounded-[20px] overflow-hidden mb-4 bg-slate-100">
              <Image
                src="/images/courses/course1.png"
                alt="Course background"
                fill
                sizes="360px"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs text-slate-800 font-semibold border border-white/50">
                <span>17 Lessons</span>
                <span className="text-slate-300">•</span>
                <span>2 hours 16 mins</span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 mb-1">
              <h4 className="font-extrabold text-base text-[#0F172A] truncate">
                Learn Figma from Basic
              </h4>
              <div className="flex items-center gap-1 text-slate-600 text-sm font-semibold shrink-0">
                <span>4.5</span>
                <Star className="w-4 h-4 fill-[#CBD5E1] text-[#CBD5E1]" />
              </div>
            </div>
            <p className="text-xs text-slate-500 mb-3">
              by <span className="text-[#0047FF] font-medium">purepearl studio</span>
            </p>
            <div className="flex items-center justify-between pt-1">
              <span className="bg-[#F1F5F9] px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <BarChart2 className="w-3.5 h-3.5 text-slate-500" />
                Beginner
              </span>
              <span className="text-base font-extrabold text-[#0047FF]">$25<span className="text-xs font-normal text-slate-400">/lifetime</span></span>
            </div>
          </div>

          {/* 2. Lime 3D Squiggle (Flipped Horizontally / Reversed) */}
          <div className="absolute -right-6  top-33 w-[160px] sm:w-[185px] h-[160px] sm:h-[185px] z-40 pointer-events-none">
            <Image
              src="/images/banner/frame-3.png"
              alt="Lime Squiggle"
              fill
              sizes="185px"
              className="object-contain drop-shadow-xl"
            />
          </div>

          {/* 3. Center Student Cutout (Larger Size & Scale) */}
          <div className="absolute -left-9 bottom-0  w-[765px]  h-[645px] z-25 pointer-events-none">
            <Image
              src="/images/banner/student.png"
              alt="ByteSpace Student"
              fill
              sizes="465px"
              className="object-contain object-bottom drop-shadow-2xl"
              priority
            />
          </div>

          {/* 4. Foreground Floating Badge (Learning Progress 55% on the Right) */}
          <div className="absolute right-0 sm:right-0 top-65 bg-white border border-slate-100 rounded-[24px] p-5 shadow-2xl z-30 w-[215px] sm:w-[235px] backdrop-blur-md">
            <p className="text-xs font-semibold text-slate-500 mb-1">
              Learning Progress
            </p>
            <h3 className="text-3xl sm:text-[38px] font-extrabold text-[#0F172A] tracking-tight mb-3">
              {PROFESSIONAL_GROWTH_DATA.progressValue}
            </h3>
            {/* Lime Progress Bar */}
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-[#D2FF00] h-full rounded-full transition-all duration-1000"
                style={{ width: PROFESSIONAL_GROWTH_DATA.progressValue }}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
