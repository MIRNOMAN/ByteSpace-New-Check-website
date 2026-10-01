import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Star,
  BarChart2,
  Clock,
  BookOpen,
  MessageSquare,
  CheckCircle2,
  PlayCircle,
  Share2,
  Heart,
  ChevronRight,
  UserCheck,
  ShieldCheck,
  Award,
} from "lucide-react";
import { SEARCH_PAGE_COURSES } from "@/data/mock-data";
import { CourseCard } from "@/components/common/course-card";

interface CourseDetailsPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CourseDetailsPageProps) {
  const { id } = await params;
  const course = SEARCH_PAGE_COURSES.find((c) => c.id === id) || SEARCH_PAGE_COURSES[0];
  return {
    title: `${course.title} - ByteSpace Courses`,
    description: `Master ${course.title} by ${course.author}. Join thousands of learners on ByteSpace.`,
  };
}

export default async function CourseDetailsPage({ params }: CourseDetailsPageProps) {
  const { id } = await params;

  // Find course from mock data, fallback to first course if ID doesn't match
  const course = SEARCH_PAGE_COURSES.find((c) => c.id === id) || SEARCH_PAGE_COURSES[0];

  if (!course) {
    notFound();
  }

  // Related courses (excluding current course)
  const relatedCourses = SEARCH_PAGE_COURSES.filter((c) => c.id !== course.id).slice(0, 3);

  const keyTakeaways = [
    "Comprehensive understanding of core concepts & workflow",
    "Hands-on real-world projects to add to your portfolio",
    "Industry best practices & modern design principles",
    "Step-by-step guidance from industry expert creators",
    "Interactive exercises and downloadable project assets",
    "Certificate of completion to showcase on LinkedIn",
  ];

  const curriculumModules = [
    {
      title: "Module 1: Introduction & Fundamentals",
      duration: "35 mins",
      lessons: [
        "Welcome & Course Overview",
        "Setting up your environment & tools",
        "Understanding core principles & concepts",
      ],
    },
    {
      title: "Module 2: Deep Dive into Core Techniques",
      duration: "55 mins",
      lessons: [
        "Mastering essential techniques & tools",
        "Building your first practical project",
        "Optimizing performance & workflow speed",
      ],
    },
    {
      title: "Module 3: Advanced Projects & Industry Workflow",
      duration: "46 mins",
      lessons: [
        "Advanced design systems & structure",
        "Real-world case studies & analysis",
        "Final project wrap-up & portfolio integration",
      ],
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#F8FAFC]">
      {/* Blueprint Grid Hero Section */}
      <section className="relative z-10 w-full bg-[#0047FF] text-white py-12 sm:py-16 px-6 sm:px-12 md:px-16 selection:bg-[#CBFC01] selection:text-black">
        {/* Background Blueprint Grid (80px x 80px) */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.18) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.18) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <Link href="/courses" className="hover:text-white transition-colors">
              Courses
            </Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#CBFC01] font-semibold truncate max-w-xs sm:max-w-md">
              {course.title}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Title & Stats */}
            <div className="lg:col-span-2">
              <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-[#CBFC01] text-xs font-bold px-3.5 py-1.5 rounded-full mb-4">
                {course.category || "Featured Course"}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
                {course.title}
              </h1>
              <p className="text-sm sm:text-base text-blue-100 max-w-2xl mb-6 leading-relaxed">
                Empower your skills with this complete step-by-step masterclass by {course.author}. Designed for professionals looking to excel in modern digital craft.
              </p>

              {/* Badges & Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/90">
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <span className="font-extrabold text-[#CBFC01]">{course.rating}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(course.rating)
                            ? "fill-[#EAB308] text-[#EAB308]"
                            : "text-blue-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <UserCheck className="w-4 h-4 text-[#CBFC01]" />
                  <span>Created by <strong className="text-white">{course.author}</strong></span>
                </div>

                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <BarChart2 className="w-4 h-4 text-[#CBFC01]" />
                  <span>{course.level}</span>
                </div>

                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <BookOpen className="w-4 h-4 text-[#CBFC01]" />
                  <span>{course.lessons}</span>
                </div>

                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <Clock className="w-4 h-4 text-[#CBFC01]" />
                  <span>{course.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Grid & Sticky Sidebar */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Course Details (Left 2 Columns) */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <h2 className="text-2xl font-extrabold text-[#0F172A] mb-4">Course Overview</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Welcome to <strong>{course.title}</strong>! This course has been carefully designed to take you step-by-step from foundational concepts to advanced techniques. Whether you&apos;re a beginner starting out or an experienced practitioner aiming to sharpen your edge, you will find practical knowledge and actionable takeaways.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Throughout the modules, you will engage in hands-on exercises, review industry standard workflows, and complete real-world projects that you can immediately showcase in your professional portfolio.
              </p>
            </div>

            {/* What You'll Learn Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <h2 className="text-2xl font-extrabold text-[#0F172A] mb-6">What You&apos;ll Learn</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyTakeaways.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0047FF] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Curriculum Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-extrabold text-[#0F172A]">Course Curriculum</h2>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
                  {course.lessons} • {course.duration}
                </span>
              </div>

              <div className="space-y-4">
                {curriculumModules.map((module, idx) => (
                  <div key={idx} className="border border-slate-200/80 rounded-2xl p-4 sm:p-5 bg-slate-50/50">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-extrabold text-base text-[#0F172A]">
                        {module.title}
                      </h3>
                      <span className="text-xs text-slate-500 font-medium">{module.duration}</span>
                    </div>
                    <ul className="space-y-2.5">
                      {module.lessons.map((lesson, lIdx) => (
                        <li key={lIdx} className="flex items-center justify-between text-xs sm:text-sm text-slate-600 bg-white p-2.5 rounded-xl border border-slate-100">
                          <div className="flex items-center gap-2.5">
                            <PlayCircle className="w-4 h-4 text-[#0047FF] shrink-0" />
                            <span className="font-medium">{lesson}</span>
                          </div>
                          <span className="text-[11px] text-slate-400">Preview</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <h2 className="text-2xl font-extrabold text-[#0F172A] mb-6">Meet Your Instructor</h2>
              <div className="flex items-center gap-5">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-slate-100 shrink-0 border-2 border-[#0047FF]">
                  <Image src="/images/banner/avatar1.png" alt={course.author} fill sizes="64px" className="object-cover" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-[#0F172A]">{course.author}</h3>
                  <p className="text-xs text-[#0047FF] font-semibold mb-1">Senior Digital Creator & Instructor</p>
                  <p className="text-xs text-slate-500">
                    Top-rated creator with 10+ years of industry experience empowering 20,000+ students worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar (Right Column) */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xl space-y-6">
              {/* Preview Image with Play Overlay */}
              <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden bg-slate-100 group cursor-pointer">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#0047FF] shadow-lg group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-8 h-8 fill-[#0047FF] text-white" />
                  </div>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-black text-[#0047FF]">{course.price}</span>
                  <span className="text-xs text-slate-400 font-medium">{course.period}</span>
                </div>

                <button
                  type="button"
                  className="w-full bg-[#CBFC01] hover:bg-[#b8e500] text-black font-extrabold text-base py-3.5 px-6 rounded-full shadow-md cursor-pointer transition-all active:scale-95 text-center mb-3"
                >
                  Enroll Now
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs py-2.5 rounded-full flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Heart className="w-4 h-4 text-slate-500" />
                    Wishlist
                  </button>
                  <button
                    type="button"
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs py-2.5 rounded-full flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Share2 className="w-4 h-4 text-slate-500" />
                    Share
                  </button>
                </div>
              </div>

              {/* Course Highlights Checklist */}
              <div className="border-t border-slate-100 pt-5 space-y-3.5 text-xs text-slate-700 font-medium">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-500">
                    <BookOpen className="w-4 h-4 text-[#0047FF]" /> Lessons
                  </span>
                  <span className="font-bold text-slate-900">{course.lessons}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-500">
                    <Clock className="w-4 h-4 text-[#0047FF]" /> Duration
                  </span>
                  <span className="font-bold text-slate-900">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-500">
                    <BarChart2 className="w-4 h-4 text-[#0047FF]" /> Skill Level
                  </span>
                  <span className="font-bold text-slate-900">{course.level}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-500">
                    <MessageSquare className="w-4 h-4 text-[#0047FF]" /> Discussions
                  </span>
                  <span className="font-bold text-slate-900">{course.comments}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-500">
                    <Award className="w-4 h-4 text-[#0047FF]" /> Certificate
                  </span>
                  <span className="font-bold text-slate-900">Included</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-[#0047FF]" /> Access
                  </span>
                  <span className="font-bold text-slate-900">Full Lifetime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Courses Section */}
        <div className="mt-20 border-t border-slate-200/80 pt-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                Related Courses
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Explore more top rated courses from our community</p>
            </div>
            <Link
              href="/courses"
              className="bg-[#0047FF] hover:bg-[#003ad6] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-colors"
            >
              View All Courses
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedCourses.map((rel) => (
              <CourseCard key={rel.id} course={rel} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
