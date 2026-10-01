"use client";

import React, { useState, useMemo } from "react";
import { CoursesSearchHero } from "@/components/courses/courses-search-hero";
import { CoursesSearchContent } from "@/components/courses/courses-search-content";
import { SEARCH_PAGE_COURSES } from "@/data/mock-data";
import { toast } from "sonner";

const ITEMS_PER_PAGE = 18;

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryType, setSelectedCategoryType] = useState("Courses");
  const [selectedCategoryPill, setSelectedCategoryPill] = useState("Featured");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Most relevant");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategoryPillSelect = (cat: string) => {
    setSelectedCategoryPill(cat);
    setCurrentPage(1);
    toast.success(`Category: ${cat}`);
  };

  const handleFilterSelect = (val: string) => {
    setSelectedFilter(val);
    setCurrentPage(1);
    toast.success(`Filter: ${val}`);
  };

  const handleLevelSelect = (val: string) => {
    setSelectedLevel(val);
    setCurrentPage(1);
    toast.success(`Level: ${val}`);
  };

  const handleCategorySelect = (val: string) => {
    setSelectedCategory(val);
    setCurrentPage(1);
    toast.success(`Category: ${val}`);
  };

  const handleSortSelect = (val: string) => {
    setSortOption(val);
    toast.success(`Sorted by ${val}`);
  };

  // Filter courses live based on searchQuery, categoryPill, level, and category
  const filteredCourses = useMemo(() => {
    return SEARCH_PAGE_COURSES.filter((course) => {
      // Search query filter (matches title or author or level)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = course.title.toLowerCase().includes(q);
        const matchAuthor = course.author.toLowerCase().includes(q);
        const matchLevel = course.level.toLowerCase().includes(q);
        const matchCategory = course.category?.toLowerCase().includes(q);
        if (!matchTitle && !matchAuthor && !matchLevel && !matchCategory) return false;
      }

      // Category Pill filter
      if (selectedCategoryPill !== "Featured" && selectedCategoryPill !== "All") {
        if (course.category !== selectedCategoryPill) return false;
      }

      // Level Dropdown filter
      if (selectedLevel !== "All" && course.level !== selectedLevel) return false;

      // Category Dropdown filter
      if (selectedCategory !== "All" && course.category !== selectedCategory) return false;

      return true;
    });
  }, [searchQuery, selectedCategoryPill, selectedLevel, selectedCategory]);

  // Paginated Courses
  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / ITEMS_PER_PAGE));
  const displayedCourses = useMemo(() => {
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);

  return (
    <main className="w-full min-h-screen bg-white">
      {/* Search Hero Section */}
      <CoursesSearchHero
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        selectedCategoryType={selectedCategoryType}
        onCategoryTypeSelect={setSelectedCategoryType}
        liveSearchResults={filteredCourses.slice(0, 5)}
      />

      {/* Filter, Products & Pagination Content Section */}
      <CoursesSearchContent
        selectedCategoryPill={selectedCategoryPill}
        onCategoryPillSelect={handleCategoryPillSelect}
        selectedFilter={selectedFilter}
        selectedLevel={selectedLevel}
        selectedCategory={selectedCategory}
        sortOption={sortOption}
        onFilterSelect={handleFilterSelect}
        onLevelSelect={handleLevelSelect}
        onCategorySelect={handleCategorySelect}
        onSortSelect={handleSortSelect}
        displayedCourses={displayedCourses}
        currentPage={currentPage}
        totalPages={totalPages > 5 ? 5 : totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}
