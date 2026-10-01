"use client";

import React from "react";
import { Video } from "lucide-react";
import { CourseCardData } from "@/components/common/course-card";

interface CourseDetailsLessonsProps {
  course: CourseCardData;
}

export function CourseDetailsLessons({ course }: CourseDetailsLessonsProps) {
  const lessonList = [
    {
      id: "1",
      title: "Module 1: Introduction to Digital Assets",
      description:
        "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      id: "2",
      title: "Module 2: Design Principles for Impact",
      description:
        "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      id: "4",
      title: "Module 4: User-Centric Design Strategies",
      description:
        "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      id: "5",
      title: "Module 5: Interactive Media and Engagement",
      description:
        "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      id: "6",
      title: "Module 6: Project Showcase and Critique",
      description:
        "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      id: "7",
      title: "Module 7: Optimizing Digital Assets for Various Platforms",
      description:
        "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ];

  return (
    <div className="space-y-8 text-slate-800">
      {/* Explore the Modules Section */}
      <div>
        <h3 className="text-xl font-extrabold text-[#0F172A] mb-2">Explore the Modules</h3>
        <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-3xl">
          Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
        </p>
      </div>

      {/* Lesson List Section */}
      <div>
        <h3 className="text-lg font-extrabold text-[#0F172A] mb-6">Lesson List</h3>

        <div className="space-y-6">
          {lessonList.map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              {/* Lime Green Squircle Video Icon Container */}
              <div className="w-12 h-12 rounded-[16px] bg-[#CBFC01] flex items-center justify-center shrink-0 shadow-xs">
                <Video className="w-5 h-5 text-black" />
              </div>

              {/* Module Info */}
              <div className="min-w-0 flex-1">
                <h4 className="font-extrabold text-sm sm:text-base text-[#0F172A] leading-snug mb-1">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lesson Content Section */}
      <div className="pt-2">
        <h3 className="text-lg font-extrabold text-[#0F172A] mb-2">Lesson Content</h3>
        <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-3xl">
          Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
        </p>
      </div>

      {/* Lesson Progress Tracking Section */}
      <div className="pt-2">
        <h3 className="text-lg font-extrabold text-[#0F172A] mb-2">Lesson Progress Tracking</h3>
        <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-3xl mb-6">
          Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
        </p>

        {/* Learning Progress Card */}
        <div className="border border-slate-200/80 rounded-[20px] p-6 bg-white shadow-xs">
          <p className="text-xs text-slate-500 font-medium mb-1.5">Learning Progress</p>
          <div className="text-3xl font-extrabold text-[#0F172A] mb-4">55%</div>

          {/* Lime Green Progress Bar */}
          <div className="h-3 bg-[#E2E8F0] rounded-full overflow-hidden w-full">
            <div className="h-full bg-[#CBFC01] rounded-full w-[55%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
