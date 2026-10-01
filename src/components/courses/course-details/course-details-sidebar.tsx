"use client";

import React from "react";
import Image from "next/image";
import { CourseCardData } from "@/components/common/course-card";

interface CourseDetailsSidebarProps {
  course: CourseCardData;
}

export function CourseDetailsSidebar({ course }: CourseDetailsSidebarProps) {
  const lessonPreviews = [
    { num: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
    { num: "02", title: "Design Principles for Impacts", duration: "21 mins" },
    { num: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
  ];

  const courseIncludes = [
    { icon: "/images/courseDetails/Style=Outlined.png", label: "Learning Resources" },
    { icon: "/images/courseDetails/Style=Outlined (1).png", label: "Quality Lesson Videos" },
    { icon: "/images/courseDetails/Style=Outlined (2).png", label: "Certificate of Completion" },
    { icon: "/images/courseDetails/Style=Outlined (3).png", label: "Private Consultation" },
  ];

  return (
    <aside className="w-full bg-white rounded-[28px] p-6 sm:p-8 border border-slate-200/80 shadow-xl text-slate-800">
      {/* 112 Lessons (24 hours) */}
      <h3 className="font-extrabold text-lg sm:text-[20px] text-[#0F172A] mb-5 leading-snug">
        112 Lessons <span className="font-bold text-slate-700">(24 hours)</span>
      </h3>

      {/* Lesson Previews List */}
      <div className="space-y-3.5 mb-4">
        {lessonPreviews.map((lesson) => (
          <div key={lesson.num} className="flex items-start justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-start gap-3 min-w-0">
              <span className="font-medium text-slate-500 shrink-0">{lesson.num}</span>
              <span className="font-medium text-[#334155] leading-snug truncate max-w-[190px]">
                {lesson.title}
              </span>
            </div>
            <span className="text-[#3B82F6] font-normal shrink-0">{lesson.duration}</span>
          </div>
        ))}
      </div>

      {/* 99 more videos */}
      <p className="text-xs text-slate-400 font-normal mb-6">99 more videos</p>

      {/* Callout Text 1 */}
      <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal mb-6">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      {/* Pricing & Enroll Now Button */}
      <div className="mb-6">
        <div className="flex items-baseline gap-0.5 mb-4">
          <span className="text-3xl sm:text-[34px] font-extrabold text-[#0047FF]">
            {course.price || "$25"}
          </span>
          <span className="text-xs font-normal text-slate-500">/lifetime</span>
        </div>

        <button
          type="button"
          className="w-full bg-[#CBFC01] hover:bg-[#b8e500] text-[#0F172A] font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-full shadow-xs cursor-pointer transition-all active:scale-98 text-center"
        >
          Enroll Now
        </button>
      </div>

      {/* This Course Include Section */}
      <div className="mb-6">
        <h4 className="font-extrabold text-base text-[#0F172A] mb-4">This course include</h4>
        <div className="space-y-3.5">
          {courseIncludes.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-xs sm:text-[13px] text-slate-600 font-normal">
              <div className="relative w-4 h-4 shrink-0 flex items-center justify-center">
                <Image src={item.icon} alt="" width={16} height={16} className="object-contain" />
              </div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-100 my-6" />

      {/* Creator Profile Card */}
      <div>
        <div className="flex items-center gap-3.5 mb-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-100 shadow-xs">
            <Image
              src="/images/courseDetails/Ellipse (3).png"
              alt={course.author || "PurePearl Studio"}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div>
            <h5 className="font-extrabold text-sm sm:text-base text-[#0F172A]">
              PurePearl Studio
            </h5>
            <p className="text-xs text-slate-400 font-normal">Professional Creator</p>
          </div>
        </div>

        <p className="text-xs text-slate-500 leading-relaxed lg:max-w-[250px] font-normal mb-4">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <button
          type="button"
          className="bg-white hover:bg-slate-50 text-slate-600 font-semibold text-xs py-2 px-5 rounded-full border border-slate-300 transition-colors cursor-pointer text-center"
        >
          See Full Profile
        </button>
      </div>
    </aside>
  );
}
