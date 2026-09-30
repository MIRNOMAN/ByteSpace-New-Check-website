"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

import { COURSE_CATEGORIES, COURSES_DATA } from "@/data/mock-data";

export function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  return (
    <section id="courses" className="w-full bg-white py-16 px-6 sm:px-12 md:px-16 selection:bg-[#CBFC01]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-[46px] font-extrabold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
            Discover Your Passion, <br className="hidden sm:inline" /> Build Your Skills
          </h2>
          <p className="text-slate-500 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-3xl mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-6xl mb-14">
          {COURSE_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#D2FF00] text-black font-semibold shadow-sm hover:brightness-105"
                    : "bg-[#F1F5F9] text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            );
          })}
          <button
            onClick={() => {}}
            className="px-4 py-2.5 text-sm font-bold text-[#0047FF] hover:underline cursor-pointer"
          >
            + More
          </button>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {COURSES_DATA.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-slate-200/90 rounded-[32px] p-5 flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Card Image Container with 3 Floating Stats Badges */}
              <div className="relative w-full h-[230px] sm:h-[245px] rounded-[24px] overflow-hidden mb-5 bg-slate-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* 3 Separate Floating Frosted Glass Pills (Figma Exact) */}
                <div className="absolute bottom-3.5 left-0 right-0 px-3 flex items-center justify-center gap-2 z-10">
                  <div className="bg-white/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-800 border border-white/40 shadow-sm whitespace-nowrap">
                    {course.lessons} Lessons
                  </div>
                  <div className="bg-white/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-800 border border-white/40 shadow-sm whitespace-nowrap">
                    {course.duration}
                  </div>
                  <div className="bg-white/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-800 border border-white/40 shadow-sm whitespace-nowrap">
                    {course.comments} Comments
                  </div>
                </div>
              </div>

              {/* Title & Rating */}
              <div className="flex items-center justify-between gap-3 mb-1">
                <h3 className="text-xl sm:text-[22px] font-extrabold text-[#0F172A] tracking-tight group-hover:text-[#0047FF] transition-colors truncate">
                  {course.title}
                </h3>
                <div className="flex items-center gap-1.5 text-slate-600 font-semibold text-lg shrink-0">
                  <span>{course.rating.toFixed(1)}</span>
                  <Star className="w-5 h-5 fill-[#CBD5E1] text-[#CBD5E1]" />
                </div>
              </div>

              {/* Instructor */}
              <p className="text-sm text-slate-500 mb-5">
                by <span className="text-[#0047FF] font-medium">{course.instructor}</span>
              </p>

              {/* Level Badge & Overlapping Avatars Row */}
              <div className="flex items-center justify-between gap-2 mb-6">
                {/* Level Badge */}
                <div className="bg-[#F1F5F9] px-4 py-2 rounded-full text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <svg className="w-4 h-4 fill-current text-slate-600" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="10" width="3" height="6" rx="0.8" />
                    <rect x="6.5" y="6" width="3" height="10" rx="0.8" />
                    <rect x="12" y="1" width="3" height="15" rx="0.8" />
                  </svg>
                  <span>{course.level}</span>
                </div>

                {/* Overlapping Avatars Stack (Figma exact size & borders) */}
                <div className="flex items-center -space-x-2">
                  <div className="w-9 h-9 rounded-full border-2 border-white overflow-hidden relative shadow-sm">
                    <Image src="/images/banner/avatar1.png" alt="User 1" fill sizes="36px" className="object-cover" />
                  </div>
                  <div className="w-9 h-9 rounded-full border-2 border-white overflow-hidden relative shadow-sm">
                    <Image src="/images/banner/avatar2.png" alt="User 2" fill sizes="36px" className="object-cover" />
                  </div>
                  <div className="w-9 h-9 rounded-full border-2 border-white overflow-hidden relative shadow-sm">
                    <Image src="/images/banner/avatar3.png" alt="User 3" fill sizes="36px" className="object-cover" />
                  </div>
                  <div className="w-9 h-9 rounded-full border-2 border-white overflow-hidden relative shadow-sm">
                    <Image src="/images/banner/avatar4.png" alt="User 4" fill sizes="36px" className="object-cover" />
                  </div>
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-[#D2FF00] flex items-center justify-center text-xs font-extrabold text-black shadow-sm">
                    26+
                  </div>
                </div>
              </div>

              {/* Price Line */}
              <div className="pt-2 flex items-baseline gap-1 mt-auto">
                <span className="text-2xl sm:text-[26px] font-extrabold text-[#0047FF]">${course.price}</span>
                <span className="text-sm text-slate-500 font-normal">/lifetime</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
