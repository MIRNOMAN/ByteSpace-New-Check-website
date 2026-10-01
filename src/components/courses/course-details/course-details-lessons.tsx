"use client";

import React, { useState } from "react";
import { PlayCircle, ChevronDown, ChevronUp, Lock } from "lucide-react";
import { CourseCardData } from "@/components/common/course-card";

interface CourseDetailsLessonsProps {
  course: CourseCardData;
}

export function CourseDetailsLessons({ course }: CourseDetailsLessonsProps) {
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  const modules = [
    {
      id: 0,
      title: "Module 1: Introduction to Digital Assets",
      count: "8 Lessons",
      duration: "1 hour 15 mins",
      lessons: [
        { title: "01. Welcome & Course Overview", duration: "12:00", free: true },
        { title: "02. Design Principles for Impact", duration: "21:00", free: true },
        { title: "03. Advanced Techniques in Digital Creation", duration: "16:00", free: false },
        { title: "04. Understanding Color Theory & Contrast", duration: "14:30", free: false },
        { title: "05. Layout Strategies & Grid Systems", duration: "11:45", free: false },
      ],
    },
    {
      id: 1,
      title: "Module 2: Practical Projects & Asset Workflow",
      count: "12 Lessons",
      duration: "2 hours 40 mins",
      lessons: [
        { title: "06. Setting Up Your Digital Workspace", duration: "18:20", free: false },
        { title: "07. Vector Asset Creation in Detail", duration: "25:10", free: false },
        { title: "08. Exporting Assets for Multi-Platform", duration: "15:00", free: false },
        { title: "09. Organizing Design Tokens & Components", duration: "22:15", free: false },
      ],
    },
    {
      id: 2,
      title: "Module 3: Advanced Optimization & Portfolio Capstone",
      count: "10 Lessons",
      duration: "2 hours 10 mins",
      lessons: [
        { title: "10. Monetization Strategies for Digital Products", duration: "30:00", free: false },
        { title: "11. Capstone Project: Final Showcase", duration: "45:00", free: false },
        { title: "12. Course Wrap-Up & Next Steps", duration: "15:00", free: false },
      ],
    },
  ];

  const toggleModule = (id: number) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-[#0F172A]">Course Curriculum</h3>
        <span className="text-xs text-slate-500 font-semibold bg-slate-100 px-3 py-1.5 rounded-full">
          30 Lessons Total • {course.duration || "5 hours 45 mins"}
        </span>
      </div>

      {modules.map((mod) => {
        const isOpen = expandedModule === mod.id;
        return (
          <div
            key={mod.id}
            className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-xs"
          >
            {/* Module Header Toggle */}
            <button
              type="button"
              onClick={() => toggleModule(mod.id)}
              className="w-full flex items-center justify-between p-4 sm:p-5 bg-slate-50/70 hover:bg-slate-100/70 transition-colors text-left cursor-pointer"
            >
              <div>
                <h4 className="font-extrabold text-sm sm:text-base text-[#0F172A]">{mod.title}</h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {mod.count} • {mod.duration}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            {/* Lessons List */}
            {isOpen && (
              <div className="p-3 sm:p-4 space-y-2 border-t border-slate-100 bg-white">
                {mod.lessons.map((lesson, lIdx) => (
                  <div
                    key={lIdx}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors border border-slate-100"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {lesson.free ? (
                        <PlayCircle className="w-4 h-4 text-[#0047FF] shrink-0" />
                      ) : (
                        <Lock className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
                        {lesson.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {lesson.free && (
                        <span className="bg-[#CBFC01] text-black font-bold text-[10px] px-2.5 py-0.5 rounded-full">
                          Preview
                        </span>
                      )}
                      <span className="text-xs text-slate-500 font-medium">{lesson.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
