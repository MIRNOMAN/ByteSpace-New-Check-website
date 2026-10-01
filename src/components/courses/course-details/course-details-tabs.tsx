"use client";

import React, { useState } from "react";
import { CourseCardData } from "@/components/common/course-card";
import { CourseDetailsAbout } from "./course-details-about";
import { CourseDetailsLessons } from "./course-details-lessons";
import { CourseDetailsReviews } from "./course-details-reviews";

interface CourseDetailsTabsProps {
  course: CourseCardData;
}

export type CourseTabType = "about" | "lessons" | "reviews";

export function CourseDetailsTabs({ course }: CourseDetailsTabsProps) {
  const [activeTab, setActiveTab] = useState<CourseTabType>("about");

  const tabs: { id: CourseTabType; label: string }[] = [
    { id: "about", label: "About" },
    { id: "lessons", label: "Lesson" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <div className="space-y-6">
      {/* Dynamic Tab Navigation Buttons */}
      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#CBFC01] text-black shadow-xs hover:brightness-105"
                  : "bg-[#F1F5F9] text-slate-600 hover:bg-slate-200/80 hover:text-slate-900 font-semibold"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="pt-2">
        {activeTab === "about" && <CourseDetailsAbout course={course} />}
        {activeTab === "lessons" && <CourseDetailsLessons course={course} />}
        {activeTab === "reviews" && <CourseDetailsReviews course={course} />}
      </div>
    </div>
  );
}
