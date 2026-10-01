"use client";

import React, { useState, useMemo } from "react";
import { CoursesSearchHero } from "@/components/courses/courses-search-hero";
import { CoursesSearchContent } from "@/components/courses/courses-search-content";
import { SEARCH_PAGE_COURSES } from "@/data/mock-data";
import { CourseCardData } from "@/components/common/course-card";


const ITEMS_PER_PAGE = 18;

export default function CoursesPage() {
  const [searchInput, setSearchInput] = useState("");
  const [submittedSearchQuery, setSubmittedSearchQuery] = useState("");
  const [selectedCategoryType, setSelectedCategoryType] = useState("Courses");
  const [selectedCategoryPill, setSelectedCategoryPill] = useState("Featured");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Most relevant");
  const [currentPage, setCurrentPage] = useState(1);

  // Called when user types in the search input
  const handleSearchInputChange = (query: string) => {
    setSearchInput(query);
  };

  // Called when user clicks the Courses button or presses Enter
  const handleSearchSubmit = () => {
    setSubmittedSearchQuery(searchInput.trim());
    setCurrentPage(1);
   
  };

  // Called when user clicks a suggested course item in the live search dropdown popup
  const handleSelectSuggestedCourse = (course: CourseCardData) => {
    setSearchInput(course.title);
    setSubmittedSearchQuery(course.title);
    setCurrentPage(1);
   
  };

  const handleCategoryPillSelect = (cat: string) => {
    setSelectedCategoryPill(cat);
    setCurrentPage(1);
    
  };

  const handleFilterSelect = (val: string) => {
    setSelectedFilter(val);
    setCurrentPage(1);
    
  };

  const handleLevelSelect = (val: string) => {
    setSelectedLevel(val);
    setCurrentPage(1);
    
  };

  const handleCategorySelect = (val: string) => {
    setSelectedCategory(val);
    setCurrentPage(1);
    
  };

  const handleSortSelect = (val: string) => {
    setSortOption(val);
   
  };

  // Live search suggestions matches (matches searchInput for live popup)
  const liveSearchResults = useMemo(() => {
    if (!searchInput.trim()) return [];
    const q = searchInput.toLowerCase().trim();
    return SEARCH_PAGE_COURSES.filter(
      (course) =>
        course.title.toLowerCase().includes(q) ||
        course.author.toLowerCase().includes(q) ||
        course.level.toLowerCase().includes(q) ||
        (course.category && course.category.toLowerCase().includes(q))
    );
  }, [searchInput]);

  // Main grid courses filtering (filtered ONLY by submittedSearchQuery or filters)
  const filteredCourses = useMemo(() => {
    return SEARCH_PAGE_COURSES.filter((course) => {
      // Submitted search query filter
      if (submittedSearchQuery.trim()) {
        const q = submittedSearchQuery.toLowerCase().trim();
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
  }, [submittedSearchQuery, selectedCategoryPill, selectedLevel, selectedCategory]);

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
        searchInput={searchInput}
        onSearchInputChange={handleSearchInputChange}
        onSearchSubmit={handleSearchSubmit}
        selectedCategoryType={selectedCategoryType}
        onCategoryTypeSelect={setSelectedCategoryType}
        liveSearchResults={liveSearchResults.slice(0, 5)}
        onSelectSuggestedCourse={handleSelectSuggestedCourse}
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
