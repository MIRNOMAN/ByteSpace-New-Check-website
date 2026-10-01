"use client";

import React from "react";
import { FilterBar } from "@/components/creators/filter-bar";
import { CourseCard, CourseCardData } from "@/components/common/course-card";
import { Pagination } from "@/components/common/pagination";

const SEARCH_CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

interface CoursesSearchContentProps {
  selectedCategoryPill: string;
  onCategoryPillSelect: (category: string) => void;
  selectedFilter: string;
  selectedLevel: string;
  selectedCategory: string;
  sortOption: string;
  onFilterSelect: (val: string) => void;
  onLevelSelect: (val: string) => void;
  onCategorySelect: (val: string) => void;
  onSortSelect: (val: string) => void;
  displayedCourses: CourseCardData[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function CoursesSearchContent({
  selectedCategoryPill,
  onCategoryPillSelect,
  selectedFilter,
  selectedLevel,
  selectedCategory,
  sortOption,
  onFilterSelect,
  onLevelSelect,
  onCategorySelect,
  onSortSelect,
  displayedCourses,
  currentPage,
  totalPages,
  onPageChange,
}: CoursesSearchContentProps) {
  return (
    <section className="w-full bg-white py-10 sm:py-14 px-6 sm:px-12 md:px-16 text-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        {/* Top Control Filter Bar (Dropdowns) */}
        <FilterBar
          selectedFilter={selectedFilter}
          selectedLevel={selectedLevel}
          selectedCategory={selectedCategory}
          sortOption={sortOption}
          onFilterSelect={onFilterSelect}
          onLevelSelect={onLevelSelect}
          onCategorySelect={onCategorySelect}
          onSortSelect={onSortSelect}
        />

        {/* Category Pill Buttons Row */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10">
          {SEARCH_CATEGORIES.map((cat) => {
            const isActive = selectedCategoryPill === cat;
            return (
              <button
                key={cat}
                onClick={() => onCategoryPillSelect(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#CBFC01] text-black shadow-xs hover:brightness-105"
                    : "bg-[#F1F5F9] text-slate-600 hover:bg-slate-200/80 hover:text-slate-900 font-medium"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Course Grid */}
        {displayedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {displayedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-100 mb-12">
            <h3 className="text-lg font-bold text-slate-800 mb-1">No courses found</h3>
            <p className="text-xs text-slate-500">Try adjusting your search or filters to find what you&apos;re looking for.</p>
          </div>
        )}

        {/* Pagination Controls */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </section>
  );
}
