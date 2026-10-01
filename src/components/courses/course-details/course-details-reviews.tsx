"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { CourseCardData } from "@/components/common/course-card";

interface CourseDetailsReviewsProps {
  course: CourseCardData;
}

export function CourseDetailsReviews({ course }: CourseDetailsReviewsProps) {
  const ratingBreakdown = [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ];

  const studentReviews = [
    {
      id: "1",
      name: "Alex Rivera",
      avatar: "/images/men/Ellipse.png",
      date: "2 days ago",
      rating: 5,
      comment:
        "This course completely transformed my understanding of digital assets and design systems! The step-by-step guidance from PurePearl Studio is unmatched. Highly recommended to anyone looking to level up their portfolio.",
    },
    {
      id: "2",
      name: "Samantha Vance",
      avatar: "/images/men/Ellipse (1).png",
      date: "1 week ago",
      rating: 5,
      comment:
        "Extremely clear, structured, and easy to follow. The downloadable assets and practical exercises made the learning experience super engaging.",
    },
    {
      id: "3",
      name: "Marcus Chen",
      avatar: "/images/men/Ellipse (2).png",
      date: "2 weeks ago",
      rating: 4,
      comment:
        "Great quality videos and thorough coverage of design theory and digital workflows. Well worth every penny!",
    },
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-bold text-[#0F172A]">Student Feedback & Reviews</h3>

      {/* Summary Rating Box */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row items-center gap-8">
        <div className="text-center sm:border-r sm:border-slate-200 sm:pr-8 shrink-0">
          <div className="text-4xl font-black text-[#0F172A] mb-1">
            {course.rating || 4.8}
          </div>
          <div className="flex items-center justify-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-[#0047FF] text-[#0047FF]"
              />
            ))}
          </div>
          <p className="text-xs text-slate-500 font-medium">172 Total Ratings</p>
        </div>

        {/* Rating Bars */}
        <div className="flex-1 w-full space-y-2">
          {ratingBreakdown.map((item) => (
            <div key={item.stars} className="flex items-center gap-3 text-xs">
              <span className="w-12 font-semibold text-slate-600 shrink-0">
                {item.stars} Stars
              </span>
              <div className="flex-1 h-2.5 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0047FF] rounded-full"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <span className="w-10 text-right font-medium text-slate-500 shrink-0">
                {item.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {studentReviews.map((rev) => (
          <div
            key={rev.id}
            className="p-5 rounded-2xl border border-slate-200/80 bg-white space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                  <Image src={rev.avatar} alt={rev.name} fill sizes="40px" className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0F172A]">{rev.name}</h4>
                  <span className="text-[11px] text-slate-400 font-medium">{rev.date}</span>
                </div>
              </div>

              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < rev.rating
                        ? "fill-[#0047FF] text-[#0047FF]"
                        : "text-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {rev.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
