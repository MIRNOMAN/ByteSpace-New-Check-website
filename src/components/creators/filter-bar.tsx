"use client";

import React from "react";
import { Filter, ChevronDown, BarChart2, LayoutGrid, ArrowUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FilterBarProps {
  selectedFilter: string;
  selectedLevel: string;
  selectedCategory: string;
  sortOption: string;
  onFilterSelect: (val: string) => void;
  onLevelSelect: (val: string) => void;
  onCategorySelect: (val: string) => void;
  onSortSelect: (val: string) => void;
}

export function FilterBar({
  selectedFilter,
  selectedLevel,
  selectedCategory,
  sortOption,
  onFilterSelect,
  onLevelSelect,
  onCategorySelect,
  onSortSelect,
}: FilterBarProps) {
  return (
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
            <DropdownMenuItem onClick={() => onFilterSelect("All")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">All Products</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onFilterSelect("Featured")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Featured Only</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onFilterSelect("Popular")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Popular Courses</DropdownMenuItem>
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
            <DropdownMenuItem onClick={() => onLevelSelect("All")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">All Levels</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onLevelSelect("Beginner")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Beginner</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onLevelSelect("Intermediate")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Intermediate</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onLevelSelect("Advanced")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Advanced</DropdownMenuItem>
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
            <DropdownMenuLabel className="text-xs font-semibold text-slate-400 px-2 py-1">Categories</DropdownMenuLabel>
            <DropdownMenuSeparator className="my-1 border-slate-100" />
            <DropdownMenuItem onClick={() => onCategorySelect("All")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">All Categories</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onCategorySelect("UI/UX Design")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">UI/UX Design</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onCategorySelect("Development")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Development</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onCategorySelect("Data Science")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Data Science</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onCategorySelect("Productivity")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Productivity</DropdownMenuItem>
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
          <DropdownMenuItem onClick={() => onSortSelect("Most relevant")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Most relevant</DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSortSelect("Newest")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Newest</DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSortSelect("Highest Rated")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Highest Rated</DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSortSelect("Price: Low to High")} className="cursor-pointer rounded-lg px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-100">Price: Low to High</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
