"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  // Always render at least 5 page numbers (1 2 3 4 5) to match Figma design
  const maxDisplayPages = Math.max(5, Math.min(5, totalPages));
  const pages = Array.from({ length: maxDisplayPages }, (_, i) => i + 1);

  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6 py-8 select-none">
      {/* Previous Button - Always visible */}
      <button
        onClick={() => hasPrev && onPageChange(currentPage - 1)}
        disabled={!hasPrev}
        aria-label="Previous Page"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-[#0F172A] hover:border-slate-400 hover:bg-slate-50 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
      </button>

      {/* Page Numbers (1 2 3 4 5) */}
      <div className="flex items-center gap-3 sm:gap-4 px-2">
        {pages.map((page) => {
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-base sm:text-lg transition-colors cursor-pointer ${
                isActive
                  ? "text-slate-300 font-bold cursor-default"
                  : "text-[#0F172A] font-extrabold hover:text-[#0047FF]"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Button - Always visible */}
      <button
        onClick={() => hasNext && onPageChange(currentPage + 1)}
        disabled={!hasNext}
        aria-label="Next Page"
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-slate-200/90 bg-white flex items-center justify-center text-[#0F172A] hover:border-slate-400 hover:bg-slate-50 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 stroke-[2.5]" />
      </button>
    </div>
  );
}
