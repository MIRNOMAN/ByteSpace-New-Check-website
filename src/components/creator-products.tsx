"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { CourseCard } from "@/components/common/course-card";
import { FilterBar } from "@/components/creators/filter-bar";
import { ALL_CREATOR_PRODUCTS } from "@/data/mock-data";

export function CreatorProducts() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Most relevant");

  const handleFilterSelect = (val: string) => {
    setSelectedFilter(val);
    toast.success(`Filtered by ${val}`);
  };

  const handleLevelSelect = (val: string) => {
    setSelectedLevel(val);
    toast.success(`Level set to ${val}`);
  };

  const handleCategorySelect = (val: string) => {
    setSelectedCategory(val);
    toast.success(`Category set to ${val}`);
  };

  const handleSortSelect = (val: string) => {
    setSortOption(val);
    toast.success(`Sorted by ${val}`);
  };

  const filteredProducts = ALL_CREATOR_PRODUCTS.filter((product) => {
    if (selectedLevel !== "All" && product.level !== selectedLevel) return false;
    if (selectedCategory !== "All" && product.category !== selectedCategory) return false;
    return true;
  });

  return (
    <section className="w-full bg-white py-12 sm:py-16 px-6 sm:px-12 md:px-16 text-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        {/* Modular Filter Controls Bar */}
        <FilterBar
          selectedFilter={selectedFilter}
          selectedLevel={selectedLevel}
          selectedCategory={selectedCategory}
          sortOption={sortOption}
          onFilterSelect={handleFilterSelect}
          onLevelSelect={handleLevelSelect}
          onCategorySelect={handleCategorySelect}
          onSortSelect={handleSortSelect}
        />

        {/* 6-Card Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
