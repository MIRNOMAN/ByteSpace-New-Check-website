"use client";

import React from "react";
import Image from "next/image";
import { Check, Star } from "lucide-react";
import { CREATOR_SECTION_DATA } from "@/data/mock-data";

export function CreatorSection() {
  const { features, revenueStats, studentFeedback } = CREATOR_SECTION_DATA;

  return (
    <section 
      className="w-full pt-10 pb-20 sm:pb-24 px-6 sm:px-12 md:px-16 overflow-hidden selection:bg-[#CBFC01]"
      style={{
        background: `
          radial-gradient(circle at 0% 0%, rgba(210, 235, 255, 0.65) 0%, transparent 50%),
          radial-gradient(circle at 100% 0%, rgba(186, 215, 255, 0.65) 0%, transparent 50%),
          radial-gradient(circle at 0% 100%, rgba(207, 252, 14, 0.7) 0%, rgba(207, 252, 14, 0.2) 35%, transparent 65%),
          radial-gradient(circle at 100% 90%, rgba(186, 215, 255, 0.65) 0%, rgba(186, 215, 255, 0.2) 20%, transparent 60%),
          radial-gradient(circle at 85% 0%, rgba(15, 23, 42, 0.12) 0%, transparent 35%),
          #FFFFFF
        `
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Visual Composite Cards & Woman Cutout */}
        <div className="relative w-full max-w-[540px] mx-auto h-[480px] sm:h-[530px] flex items-center justify-center order-2 lg:order-1">
          
          {/* 1. Top-Left Floating Blue Revenue Card */}
          <div className="absolute left-0 sm:left-2 top-2 sm:top-4 w-[185px] sm:w-[200px] bg-[#0047FF] text-white rounded-[22px] p-4 sm:p-4.5 shadow-[0_14px_30px_rgba(0,71,255,0.28)] z-10">
            <p className="text-xs text-white/90 font-medium">Total Revenue</p>
            <p className="text-[10px] text-white/60 mb-1">{revenueStats.period}</p>
            <h4 className="text-2xl font-bold text-white mb-2 tracking-tight">
              {revenueStats.totalRevenue}
            </h4>
            {/* Lime Progress Line */}
            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#D2FF00] h-full w-[68%] rounded-full" />
            </div>
          </div>

          {/* 2. Bottom-Left Floating Blue Year to Date Card */}
          <div className="absolute left-0 sm:left-0 top-[185px] sm:top-[200px] w-[170px] sm:w-[125px] bg-[#0047FF] text-white rounded-[22px] p-4 sm:p-4.5 shadow-[0_14px_30px_rgba(0,71,255,0.28)] z-10">
            <p className="text-xs text-white/90 font-medium">Year to Date</p>
            <p className="text-[10px] text-white/60 mb-1">{revenueStats.year}</p>
            <h4 className="text-xl font-bold text-white mb-2 tracking-tight">
              {revenueStats.yearToDate}
            </h4>
            <span className="bg-[#D2FF00] text-black text-[11px] font-bold px-2.5 py-0.5 rounded-full inline-block shadow-sm">
              {revenueStats.ytdGrowth}
            </span>
          </div>

          {/* 3. Center-Right 3D Lime Helix / Spring */}
          <div className="absolute right-[40px] sm:right-[70px] top-[70px] sm:top-[80px] w-[130px] sm:w-[200px] h-[130px] sm:h-[200px] z-30 pointer-events-none">
            <Image
              src="/images/banner/frame-4.png"
              alt="3D Lime Helix"
              fill
              sizes="200px"
              className="object-contain drop-shadow-lg"
            />
          </div>

          {/* 4. Center Instructor Woman Cutout */}
          <div className="absolute left-[50%] -translate-x-[50%] bottom-0 w-[360px] sm:w-[560px] h-[450px] sm:h-[540px] z-20 pointer-events-none">
            <Image
              src="/images/banner/women.png"
              alt="ByteSpace Creator"
              fill
              sizes="460px"
              className="object-contain object-bottom drop-shadow-xl"
              priority
            />
          </div>

          {/* 5. Bottom-Right Floating White Happy Students Badge */}
          <div className="absolute right-0 sm:right-2 bottom-[30px] sm:bottom-[40px] bg-white rounded-[22px] p-4 shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-slate-100 z-30 w-[210px] sm:w-[230px]">
            <h5 className="text-sm font-bold text-[#0F172A] mb-0.5">
              {studentFeedback.title}
            </h5>
            <div className="flex items-center gap-1 text-xs font-semibold text-slate-600 mb-2.5">
              <span>{studentFeedback.rating}</span>
              <span className="text-slate-400 font-normal">{studentFeedback.count}</span>
              <Star className="w-3.5 h-3.5 fill-[#EAB308] text-[#EAB308] ml-0.5" />
            </div>

            {/* Avatars Stack */}
            <div className="flex items-center -space-x-2">
              <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden relative shadow-sm shrink-0">
                <Image src="/images/banner/avatar1.png" alt="User" fill sizes="28px" className="object-cover" />
              </div>
              <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden relative shadow-sm shrink-0">
                <Image src="/images/banner/avatar2.png" alt="User" fill sizes="28px" className="object-cover" />
              </div>
              <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden relative shadow-sm shrink-0">
                <Image src="/images/banner/avatar3.png" alt="User" fill sizes="28px" className="object-cover" />
              </div>
              <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden relative shadow-sm shrink-0">
                <Image src="/images/banner/avatar4.png" alt="User" fill sizes="28px" className="object-cover" />
              </div>
              <div className="w-7 h-7 rounded-full border-2 border-white bg-[#D2FF00] flex items-center justify-center text-[10px] font-extrabold text-black shadow-sm shrink-0">
                {studentFeedback.avatarsBadge}
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Title, Description & Checklist */}
        <div className="flex flex-col justify-center order-1 lg:order-2">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F172A] tracking-tight leading-[1.18] mb-5">
            Create & Manage <br className="hidden sm:inline" />
            Courses Easily.
          </h2>
          
          <p className="text-[#475569] text-base lg:text-[16px] leading-[1.65] mb-8 max-w-lg font-normal">
            <strong className="font-bold text-[#0F172A]">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
          </p>

          {/* 4 Feature Checklist Items */}
          <div className="space-y-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0047FF] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-[#0F172A] font-semibold text-base lg:text-[17px]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

