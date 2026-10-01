"use client";

import React from "react";
import Image from "next/image";
import { Star, BarChart2 } from "lucide-react";

export interface CourseCardData {
  id: string;
  title: string;
  author: string;
  rating: number;
  lessons: string;
  duration: string;
  comments: string;
  level: string;
  category?: string;
  price: string;
  period: string;
  image: string;
}

export function CourseCard({ course }: { course: CourseCardData }) {
  return (
    <div className="bg-white rounded-[24px] p-4.5 sm:p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow group flex flex-col justify-between">
      <div>
        {/* Course Thumbnail Image */}
        <div className="relative w-full h-[160px] sm:h-[185px] rounded-[18px] overflow-hidden mb-4 bg-slate-100">
          <Image
            src={course.image}
            alt={course.title}
            fill
            priority={course.id === "1" || course.id === "2" || course.id === "3"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Pill Badges Stacked over Thumbnail */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5 overflow-hidden">
            <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-slate-800 font-semibold shrink-0">
              {course.lessons}
            </span>
            <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-slate-800 font-semibold shrink-0">
              {course.duration}
            </span>
            <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-slate-800 font-semibold truncate">
              {course.comments}
            </span>
          </div>
        </div>

        {/* Title & Star Rating */}
        <div className="flex items-center justify-between gap-2 mb-1">
          <h3 className="font-extrabold text-base sm:text-lg text-[#0F172A] truncate">
            {course.title}
          </h3>
          <div className="flex items-center gap-1 text-slate-600 text-xs font-semibold shrink-0">
            <span>{course.rating}</span>
            <Star className="w-3.5 h-3.5 fill-[#EAB308] text-[#EAB308]" />
          </div>
        </div>

        {/* Author */}
        <p className="text-xs text-slate-500 mb-3.5">
          by <span className="text-[#0047FF] font-medium">{course.author}</span>
        </p>

        {/* Level Pill & Avatars */}
        <div className="flex items-center  pt-1 mb-3">
          <span className="bg-[#F1F5F9] px-3 py-1 rounded-full text-[11px] font-medium text-slate-700 flex items-center gap-1.5">
            <BarChart2 className="w-3.5 h-3.5 text-slate-500" />
            {course.level}
          </span>

          {/* Avatars Stack */}
          <div className="flex items-center -space-x-1.5">
             <div className="w-5.5 h-5.5 rounded-full border border-white overflow-hidden relative shrink-0">
              <Image src="/images/banner/avatar2.png" alt="User" fill sizes="22px" className="object-cover" />
            </div>
            <div className="w-5.5 h-5.5 rounded-full border border-white overflow-hidden relative shrink-0">
              <Image src="/images/banner/avatar1.png" alt="User" fill sizes="22px" className="object-cover" />
            </div>
            <div className="w-5.5 h-5.5 rounded-full border border-white overflow-hidden relative shrink-0">
              <Image src="/images/banner/avatar2.png" alt="User" fill sizes="22px" className="object-cover" />
            </div>
            <div className="w-5.5 h-5.5 rounded-full border border-white overflow-hidden relative shrink-0">
              <Image src="/images/banner/avatar3.png" alt="User" fill sizes="22px" className="object-cover" />
            </div>
             <div className="w-5.5 h-5.5 rounded-full border border-white overflow-hidden relative shrink-0">
              <Image src="/images/banner/avatar2.png" alt="User" fill sizes="22px" className="object-cover" />
            </div>
            <div className="w-5.5 h-5.5 rounded-full border border-white bg-black text-white flex items-center justify-center text-[8px] font-bold shrink-0">
              26+
            </div>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="text-sm font-extrabold text-[#0047FF]">
        {course.price}
        <span className="text-xs font-normal text-slate-400">{course.period}</span>
      </div>
    </div>
  );
}
