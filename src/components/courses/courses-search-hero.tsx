/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CourseCardData } from "@/components/common/course-card";

interface CoursesSearchHeroProps {
  searchInput: string;
  onSearchInputChange: (val: string) => void;
  onSearchSubmit: () => void;
  selectedCategoryType: string;
  onCategoryTypeSelect: (type: string) => void;
  liveSearchResults: CourseCardData[];
  onSelectSuggestedCourse: (course: CourseCardData) => void;
}

export function CoursesSearchHero({
  searchInput,
  onSearchInputChange,
  onSearchSubmit,
  selectedCategoryType,
  onCategoryTypeSelect,
  liveSearchResults,
  onSelectSuggestedCourse,
}: CoursesSearchHeroProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Show suggestions popup when searchInput is typed
  useEffect(() => {
    if (searchInput.trim().length > 0) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchInput]);

  // Close suggestions popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(false);
    onSearchSubmit();
  };

  return (
    <section className="relative z-30 w-full bg-[#0047FF] text-white py-16 sm:py-20 px-6 sm:px-12 md:px-16 selection:bg-[#CBFC01] selection:text-black">
      {/* Background Blueprint Grid (80px x 80px) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Hero Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight text-white mb-8 sm:mb-10 leading-[1.12]">
          Find Your Next Course
        </h1>

        {/* Search Form + Type Dropdown */}
        <div ref={containerRef} className="w-full max-w-2xl relative">
          <form onSubmit={handleFormSubmit} className="flex items-center gap-3">
            {/* White Search Input Field */}
            <div className="relative flex-1 bg-white rounded-full px-5 py-3 sm:py-3.5 flex items-center shadow-lg border border-white/20 transition-all focus-within:ring-4 focus-within:ring-white/30">
              <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => onSearchInputChange(e.target.value)}
                onFocus={() => searchInput.trim().length > 0 && setShowSuggestions(true)}
                placeholder="Search courses, topics, or creators..."
                suppressHydrationWarning
                className="w-full bg-transparent text-sm sm:text-base text-[#0F172A] placeholder:text-slate-400 font-medium outline-none"
              />
            </div>

            {/* Lime Green Pill Container + Dropdown */}
            <div className="flex items-center gap-1">
              <div className="bg-[#CBFC01] hover:bg-[#b8e500] text-black font-bold text-xs sm:text-sm px-6 py-3.5 sm:py-4 rounded-full flex items-center gap-2 shadow-md shrink-0 transition-all">
                <button
                  type="submit"
                  onClick={() => {
                    setShowSuggestions(false);
                    onSearchSubmit();
                  }}
                  className="bg-transparent border-0 outline-none font-bold text-xs sm:text-sm text-black cursor-pointer p-0"
                >
                  {selectedCategoryType}
                </button>
                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer hover:opacity-80 p-0.5 outline-none flex items-center justify-center">
                    <ChevronDown className="w-4 h-4 text-black" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 bg-white border border-slate-200 rounded-xl p-1.5 shadow-xl z-50">
                    <DropdownMenuLabel className="text-xs font-semibold text-slate-400 px-2 py-1">Search Type</DropdownMenuLabel>
                    <DropdownMenuSeparator className="my-1 border-slate-100" />
                    <DropdownMenuItem onClick={() => onCategoryTypeSelect("Courses")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-800 hover:bg-slate-100 font-medium">Courses</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onCategoryTypeSelect("Creators")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-800 hover:bg-slate-100 font-medium">Creators</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onCategoryTypeSelect("Categories")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-800 hover:bg-slate-100 font-medium">Categories</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </form>

          {/* Interactive Live Search Dropdown Popup Results */}
          {showSuggestions && searchInput.trim().length > 0 && (
            <div className="absolute top-full left-0 right-0 sm:right-32 mt-2 bg-white rounded-2xl p-3 shadow-2xl border border-slate-200 z-50 text-left max-h-80 overflow-y-auto">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1 mb-1">
                Found {liveSearchResults.length} result{liveSearchResults.length !== 1 ? "s" : ""}
              </div>
              {liveSearchResults.length > 0 ? (
                liveSearchResults.map((course) => (
                  <Link
                    key={course.id}
                    href={`/courses/${course.id}`}
                    onClick={() => {
                      setShowSuggestions(false);
                      onSelectSuggestedCourse(course);
                    }}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
                  >
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-extrabold text-sm text-[#0F172A] truncate group-hover:text-[#0047FF]">
                        {course.title}
                      </h4>
                      <p className="text-xs text-slate-500">
                        by <span className="text-[#0047FF] font-medium">{course.author}</span> • {course.level}
                      </p>
                    </div>
                    <span className="font-extrabold text-sm text-[#0047FF] shrink-0">
                      {course.price}
                    </span>
                  </Link>
                ))
              ) : (
                <div className="text-xs text-slate-500 p-4 text-center">
                  No courses matching &quot;{searchInput}&quot;
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
