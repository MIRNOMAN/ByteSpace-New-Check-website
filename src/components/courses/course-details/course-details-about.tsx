"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { CourseCardData } from "@/components/common/course-card";

interface CourseDetailsAboutProps {
  course: CourseCardData;
}

export function CourseDetailsAbout({ course }: CourseDetailsAboutProps) {
  const sneakPeakImages = [
    "/images/courseDetails/Rectangle.png",
    "/images/courseDetails/Rectangle (1).png",
    "/images/courseDetails/Rectangle (2).png",
    "/images/courseDetails/Rectangle (3).png",
  ];

  const keyPoints = [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ];

  return (
    <div className="space-y-8 text-slate-700">
      {/* Description Section */}
      <div>
        <h3 className="text-xl font-bold text-[#0F172A] mb-4">Description</h3>
        <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
          <p>
            Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &quot;{course.title}: A Comprehensive Guide.&quot; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
          </p>
          <p>
            In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
          </p>
          <p>
            As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
          </p>
        </div>
      </div>

      {/* Sneak Peak Section */}
      <div>
        <h3 className="text-lg font-bold text-[#0F172A] mb-4">Sneak Peak</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {sneakPeakImages.map((img, idx) => (
            <div
              key={idx}
              className="relative w-full h-24 sm:h-28 rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs hover:scale-102 transition-transform cursor-pointer"
            >
              <Image
                src={img}
                alt={`Sneak Peak ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Key Points Section */}
      <div>
        <h3 className="text-lg font-bold text-[#0F172A] mb-4">Key Points</h3>
        <div className="space-y-2.5">
          {keyPoints.map((point, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#0047FF] fill-[#0047FF] text-white shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-slate-800">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
