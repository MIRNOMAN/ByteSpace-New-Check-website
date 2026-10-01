import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Share2, BarChart2, Star, Users, Play } from "lucide-react";
import { SEARCH_PAGE_COURSES } from "@/data/mock-data";
import { CourseDetailsSidebar } from "@/components/courses/course-details/course-details-sidebar";
import { CourseDetailsTabs } from "@/components/courses/course-details/course-details-tabs";

interface CourseDetailsPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CourseDetailsPageProps) {
  const { id } = await params;
  const course = SEARCH_PAGE_COURSES.find((c) => c.id === id) || SEARCH_PAGE_COURSES[0];
  return {
    title: `${course.title} - ByteSpace Courses`,
    description: `Master ${course.title} by ${course.author}. Join thousands of learners on ByteSpace.`,
  };
}

export default async function CourseDetailsPage({ params }: CourseDetailsPageProps) {
  const { id } = await params;

  // Find course from mock data, fallback to first course if ID doesn't match
  const course = SEARCH_PAGE_COURSES.find((c) => c.id === id) || SEARCH_PAGE_COURSES[0];

  if (!course) {
    notFound();
  }

  return (
    <main className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Top Blue Blueprint Header Background */}
      <div className="absolute top-0 left-0 right-0 h-[640px] sm:h-[600px] md:h-[720px] bg-[#0047FF] z-0 overflow-hidden">
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
      </div>

      {/* Main Content Container Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto pt-8 sm:pt-12 pb-20">
        {/* Top Header Row with Title & Share Button */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-3xl sm:text-4xl md:text-[32px] font-extrabold tracking-tight text-white leading-[1.18] mb-2.5">
              {course.title}: A Comprehensive Guide
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-blue-100 font-medium mb-3">
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

        {/* Unified 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (Video Player Box + Dynamic Tabs) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Video Player Box */}
            <div className="relative w-full h-[280px] sm:h-[380px] md:h-[420px] rounded-[24px] overflow-hidden shadow-2xl ">
              <Image
                src="/images/courseDetails/Frame (16).png"
                alt={course.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover group-hover:scale-102 transition-transform duration-500"
              />
              {/* Glassmorphism Squircle Play Button Overlay */}
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-[28px] bg-black/40 backdrop-blur-md  flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-white flex items-center justify-center shadow-md">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-[#5C4D4D] text-[#5C4D4D] ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Tabs Section (About, Lessons, Reviews) */}
            <div className="pt-10 lg:pt-12 md:pt-8">
              <CourseDetailsTabs course={course} />
            </div>
          </div>

          {/* Right Column (Sidebar Card extending down onto white background) */}
          <div className="lg:col-span-4">
            <CourseDetailsSidebar course={course} />
          </div>
        </div>
      </div>
    </main>
  );
}
