"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, BarChart2, Filter, ChevronDown, ArrowUpDown, LayoutGrid } from "lucide-react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ALL_PRODUCTS = [
  {
    id: "1",
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    category: "UI/UX Design",
    price: "$25",
    period: "/lifetime",
    image: "/images/courses/course1.png",
  },
  {
    id: "2",
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    category: "Development",
    price: "$25",
    period: "/lifetime",
    image: "/images/courses/course2.png",
  },
  {
    id: "3",
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    category: "Data Science",
    price: "$25",
    period: "/lifetime",
    image: "/images/courses/course3.png",
  },
  {
    id: "4",
    title: "Balancing Productivity and Life",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    category: "Productivity",
    price: "$25",
    period: "/lifetime",
    image: "/images/courses/course4.png",
  },
  {
    id: "5",
    title: "Mastering Money Management",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    category: "Finance",
    price: "$25",
    period: "/lifetime",
    image: "/images/courses/course5.png",
  },
  {
    id: "6",
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    category: "Business",
    price: "$25",
    period: "/lifetime",
    image: "/images/courses/course6.png",
  },
];

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

  // Filter products based on selections
  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    if (selectedLevel !== "All" && product.level !== selectedLevel) return false;
    if (selectedCategory !== "All" && product.category !== selectedCategory) return false;
    return true;
  });

  return (
    <section className="w-full bg-white py-12 sm:py-16 px-6 sm:px-12 md:px-16 text-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        {/* Top Control Filter Bar using Shadcn Dropdowns */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10">
          {/* Left Filters */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* 1. Filter Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-white border border-slate-200/90 hover:border-slate-300 rounded-full px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 flex items-center gap-2 transition-all shadow-2xs cursor-pointer outline-none">
                <Filter className="w-3.5 h-3.5 text-slate-500" />
                <span>{selectedFilter === "All" ? "Filter" : `Filter: ${selectedFilter}`}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 bg-white border border-slate-200 rounded-xl p-1.5 shadow-lg">
                <DropdownMenuLabel className="text-xs font-semibold text-slate-400 px-2 py-1">Filter Products</DropdownMenuLabel>
                <DropdownMenuSeparator className="my-1 border-slate-100" />
                <DropdownMenuItem onClick={() => handleFilterSelect("All")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">All Products</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFilterSelect("Featured")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Featured Only</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleFilterSelect("Popular")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Popular Courses</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 2. Level Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-white border border-slate-200/90 hover:border-slate-300 rounded-full px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 flex items-center gap-2 transition-all shadow-2xs cursor-pointer outline-none">
                <BarChart2 className="w-3.5 h-3.5 text-slate-500" />
                <span>{selectedLevel === "All" ? "Level" : selectedLevel}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-44 bg-white border border-slate-200 rounded-xl p-1.5 shadow-lg">
                <DropdownMenuLabel className="text-xs font-semibold text-slate-400 px-2 py-1">Course Level</DropdownMenuLabel>
                <DropdownMenuSeparator className="my-1 border-slate-100" />
                <DropdownMenuItem onClick={() => handleLevelSelect("All")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">All Levels</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLevelSelect("Beginner")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Beginner</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLevelSelect("Intermediate")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Intermediate</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLevelSelect("Advanced")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Advanced</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 3. Category Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-white border border-slate-200/90 hover:border-slate-300 rounded-full px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 flex items-center gap-2 transition-all shadow-2xs cursor-pointer outline-none">
                <LayoutGrid className="w-3.5 h-3.5 text-slate-500" />
                <span>{selectedCategory === "All" ? "Category" : selectedCategory}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 bg-white border border-slate-200 rounded-xl p-1.5 shadow-lg">
                <DropdownMenuLabel className="text-xs font-semibold text-slate-400 px-2 py-1 font-sans">Categories</DropdownMenuLabel>
                <DropdownMenuSeparator className="my-1 border-slate-100" />
                <DropdownMenuItem onClick={() => handleCategorySelect("All")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">All Categories</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleCategorySelect("UI/UX Design")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">UI/UX Design</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleCategorySelect("Development")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Development</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleCategorySelect("Data Science")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Data Science</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleCategorySelect("Productivity")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Productivity</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Sort Dropdown ("Most relevant") */}
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-white border border-slate-200/90 hover:border-slate-300 rounded-full px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 flex items-center gap-2 transition-all shadow-2xs cursor-pointer outline-none self-start sm:self-auto">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
              <span>{sortOption}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-white border border-slate-200 rounded-xl p-1.5 shadow-lg">
              <DropdownMenuLabel className="text-xs font-semibold text-slate-400 px-2 py-1">Sort By</DropdownMenuLabel>
              <DropdownMenuSeparator className="my-1 border-slate-100" />
              <DropdownMenuItem onClick={() => handleSortSelect("Most relevant")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Most relevant</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSortSelect("Newest")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Newest</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSortSelect("Highest Rated")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Highest Rated</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleSortSelect("Price: Low to High")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Price: Low to High</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* 6-Card Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-[24px] p-4.5 sm:p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              <div>
                {/* Course Thumbnail Image */}
                <div className="relative w-full h-[160px] sm:h-[185px] rounded-[18px] overflow-hidden mb-4 bg-slate-100">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
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
                <div className="flex items-center pt-1 mb-3">
                  <span className="bg-[#F1F5F9] px-3 py-1 rounded-full text-[11px] font-medium text-slate-700 flex items-center gap-1.5">
                    <BarChart2 className="w-3.5 h-3.5 text-slate-500" />
                    {course.level}
                  </span>

                  {/* Avatars Stack */}
                  <div className="flex items-center -space-x-1.5">\
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
          ))}
        </div>
      </div>
    </section>
  );
}
