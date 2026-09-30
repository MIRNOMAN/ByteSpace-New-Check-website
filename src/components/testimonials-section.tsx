"use client";

import React from "react";
import Image from "next/image";
import { TESTIMONIALS_DATA } from "@/data/mock-data";

export function TestimonialsSection() {
  return (
    <section 
      className="w-full py-20 px-6 sm:px-12 md:px-16 overflow-hidden selection:bg-[#CBFC01]"
      style={{
        background: `
          radial-gradient(circle at 52% 30%, rgba(207, 252, 14, 0.65) 0%, rgba(207, 252, 14, 0.2) 15%, transparent 25%),
          radial-gradient(circle at 100% 40%, rgba(207, 252, 14, 0.55) 0%, rgba(207, 252, 14, 0.18) 12%, transparent 20%),
          radial-gradient(circle at 0% 100%, rgba(195, 220, 255, 0.65) 0%, transparent 50%),
          radial-gradient(circle at 0% 15%, rgba(215, 235, 255, 0.5) 0%, transparent 45%),
          #FFFFFF
        `
      }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Grid: Title on Left, Description on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F172A] tracking-tight leading-[1.18] max-w-lg">
            {TESTIMONIALS_DATA.title}
          </h2>

          <p className="text-[#475569] text-sm sm:text-base leading-[1.65] max-w-xl font-normal lg:pt-1">
            {TESTIMONIALS_DATA.description}
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.testimonials.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-100/90 shadow-[0_15px_35px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] flex flex-col"
            >
              {/* Avatar Circle */}
              <div className="w-16 h-16 rounded-full overflow-hidden relative mb-5 shrink-0 border border-slate-100">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>

              {/* Name & Role */}
              <h4 className="text-lg font-bold text-[#0F172A] mb-0.5">
                {item.name}
              </h4>
              <p className="text-sm font-medium text-[#0047FF] mb-5">
                {item.role}
              </p>

              {/* Quote Text */}
              <p className="text-[#475569] text-sm leading-[1.65] font-normal">
                {item.quote}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
