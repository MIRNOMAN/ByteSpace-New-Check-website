"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { CourseCardData } from "@/components/common/course-card";

interface CourseDetailsReviewsProps {
  course: CourseCardData;
}

export function CourseDetailsReviews({ course }: CourseDetailsReviewsProps) {
  const [selectedRatingFilter, setSelectedRatingFilter] = useState<string>("All rating");

  const ratingBreakdown = [
    { stars: 5, fillPercent: 85, count: 720 },
    { stars: 4, fillPercent: 35, count: 120 },
    { stars: 3, fillPercent: 10, count: 21 },
    { stars: 2, fillPercent: 6, count: 12 },
    { stars: 1, fillPercent: 8, count: 16 },
  ];

  const filterOptions = ["All rating", "★ 5", "★ 4", "★ 3", "★ 2", "★ 1"];

  const studentReviews = [
    {
      id: "1",
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      avatar: "/images/courseDetails/Ellipse (3).png",
      date: "a year ago",
      rating: 5,
      comment:
        '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
    },
    {
      id: "2",
      name: "Albert Flores",
      role: "UI/UX Designer",
      avatar: "/images/men/Ellipse.png",
      date: "a year ago",
      rating: 5,
      comment:
        "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
      id: "3",
      name: "Cody Fisher",
      role: "UI/UX Designer",
      avatar: "/images/men/Ellipse (1).png",
      date: "a year ago",
      rating: 5,
      comment:
        "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
    {
      id: "4",
      name: "Brooklyn Simmons",
      role: "UI/UX Designer",
      avatar: "/images/men/Ellipse (2).png",
      date: "a year ago",
      rating: 5,
      comment:
        "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    },
  ];

  const filteredReviews = studentReviews.filter((rev) => {
    if (selectedRatingFilter === "All rating") return true;
    const ratingNum = parseInt(selectedRatingFilter.replace("★ ", ""), 10);
    return rev.rating === ratingNum;
  });

  return (
    <div className="space-y-8 text-slate-800">
      {/* What Learners Are Saying Section */}
      <div>
        <h3 className="text-xl font-extrabold text-[#0F172A] mb-2">What Learners Are Saying</h3>
        <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-3xl">
          Discover what our learners have to say about their experience with &apos;{course.title}: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
        </p>
      </div>

      {/* Ratings Summary Card */}
      <div className="border border-slate-200/80 rounded-[20px] p-6 sm:p-7 bg-white shadow-xs flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
        {/* Lime Green Squircle Rating Score Box */}
        <div className="bg-[#CBFC01] rounded-[20px] p-6 w-32 h-32 flex flex-col items-center justify-center text-center shrink-0 shadow-xs">
          <span className="text-[11px] font-bold text-black uppercase tracking-wider mb-0.5">
            Ratings
          </span>
          <span className="text-4xl font-extrabold text-black leading-none">4.7</span>
        </div>

        {/* 5 Rating Bars & Star Icons */}
        <div className="flex-1 w-full space-y-3">
          {ratingBreakdown.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 text-xs">
              {/* Lime Green Progress Bar */}
              <div className="flex-1 h-2.5 bg-[#E2E8F0] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#CBFC01] rounded-full"
                  style={{ width: `${item.fillPercent}%` }}
                />
              </div>

              {/* 5 Star Icons */}
              <div className="flex items-center gap-1 shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-[#334155] text-[#334155]"
                  />
                ))}
              </div>

              {/* Rating Count */}
              <span className="w-10 text-right font-normal text-slate-500 shrink-0">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Reviews Section */}
      <div>
        <h3 className="text-lg font-extrabold text-[#0F172A] mb-4">Individual Reviews:</h3>

        {/* Rating Filter Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {filterOptions.map((opt) => {
            const isActive = selectedRatingFilter === opt;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => setSelectedRatingFilter(opt)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-[#CBFC01] text-black font-extrabold shadow-xs"
                    : "bg-[#F1F5F9] text-slate-700 hover:bg-slate-200/80 font-semibold"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {/* Individual Review Cards */}
        <div className="space-y-4">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="border border-slate-200/80 rounded-[20px] p-6 bg-white shadow-xs space-y-3.5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-slate-100 shadow-xs">
                      <Image
                        src={rev.avatar}
                        alt={rev.name}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base text-[#0F172A]">
                        {rev.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-normal">{rev.role}</p>
                    </div>
                  </div>

                  <span className="text-xs text-slate-400 font-normal">{rev.date}</span>
                </div>

                {/* 5 Star Rating */}
                <div className="flex items-center gap-1 pt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-[#334155] text-[#334155]"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  {rev.comment}
                </p>
              </div>
            ))
          ) : (
            <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-500 font-normal">
              No reviews found for this rating.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
