"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, Star, LayoutGrid, X } from "lucide-react";
import { TaskDashboard } from "@/features/tasks/components/task-dashboard";
import { useAppDispatch } from "@/store/hooks";
import { setFilters } from "@/store/slices/task-slice";
import { toast } from "sonner";

export function ByteSpaceHero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showWorkspace, setShowWorkspace] = useState(false);
  const [scale, setScale] = useState(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Proportional scale for viewports smaller than 1440px
      if (width < 1440) {
        setScale(Math.max(0.6, width / 1440));
      } else {
        setScale(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      toast.info("Search", { description: "Please enter a course, topic, or creator." });
      return;
    }
    dispatch(setFilters({ search: searchQuery.trim() }));
    toast.success("Courses Filtered", {
      description: `Showing results for "${searchQuery.trim()}".`,
    });
  };

  return (
    <div className="relative w-full min-h-screen bg-[#0047FF] text-white overflow-hidden flex flex-col items-center justify-start font-sans selection:bg-[#CBFC01] selection:text-black">
      {/* 1. Full-bleed Background Blueprint Grid (Figma 80px grid) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* 2. Scaled Exact 1440 x 1024 Figma Canvas Frame */}
      <div
        className="relative shrink-0 transition-transform duration-75 ease-out"
        style={{
          width: "1440px",
          height: "1024px",
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          marginBottom: scale < 1 ? `-${1024 * (1 - scale)}px` : "0px",
        }}
      >
     
        {/* TOP NAVBAR*/}
        
        <header className="absolute top-0 left-0 w-full h-[88px] px-20 flex items-center justify-between z-40">
          {/* Header_Logo.png (w: 155px, h: 34px) */}
          <Link href="/" className="flex items-center group transition-transform hover:scale-105">
            <div className="relative w-[155px] h-[34px]">
              <Image
                src="/images/banner/header-logo.png"
                alt="ByteSpace Logo"
                width={513}
                height={111}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </Link>

          {/* Center Links */}
          <nav className="flex items-center gap-10 text-[15px] font-medium text-white/90">
            <Link
              href="/"
              className="hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white"
            >
              Home
            </Link>
            <Link
              href="#courses"
              className="hover:text-white text-white/80 transition-colors py-1"
            >
              Courses
            </Link>
            <Link
              href="#creators"
              className="hover:text-white text-white/80 transition-colors py-1"
            >
              Creators
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-7 text-[15px] font-medium">
            <button
              onClick={() => toast.info("Sign In", { description: "Authentication modal opened." })}
              className="text-white/90 hover:text-white transition-colors cursor-pointer"
            >
              Sign In
            </button>
            <button
              onClick={() => toast.success("Join Us", { description: "Welcome to ByteSpace community!" })}
              className="text-white hover:text-white transition-colors cursor-pointer"
            >
              Join Us
            </button>
            <button
              onClick={() => toast.info("Cart", { description: "Your course cart is empty." })}
              className="text-white/90 hover:text-white transition-colors p-1 relative cursor-pointer"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
            </button>
          </div>
        </header>

      
        {/* HEADINGS & SEARCH BAR }
       

        {/* Main Title: Exact Figma top: 175px */}
        <div className="absolute top-[175px] left-1/2 -translate-x-1/2 w-[850px] text-center z-30 pointer-events-none">
          <h1 className="text-[64px] font-extrabold text-white tracking-tight leading-[1.12]">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>
        </div>

        {/* Subtitle: Exact Figma top: 345px */}
        <div className="absolute top-[345px] left-1/2 -translate-x-1/2 w-auto text-center z-30 pointer-events-none">
          <p className="text-white/85 text-[14px] font-normal leading-relaxed">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>

        {/* Search Bar: Exact Figma top: 460px */}
        <div className="absolute top-[460px] left-1/2 -translate-x-1/2 w-[580px] z-30">
          <form
            onSubmit={handleSearch}
            className="w-full bg-white rounded-full p-1.5 pl-6 flex items-center shadow-[0_15px_35px_rgba(0,0,0,0.22)] border border-white/20 transition-all focus-within:ring-4 focus-within:ring-white/30"
          >
            <Search className="w-4 h-4 text-gray-400 shrink-0 mr-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none font-medium"
            />
            <button
              type="submit"
              className="bg-[#CBFC01] hover:bg-[#b8e500] active:scale-95 transition-all text-black font-semibold text-sm px-6 py-2.5 rounded-full cursor-pointer shrink-0"
            >
              Search
            </button>
          </form>
        </div>

  
        {/* 3D FLOATING ICONS }
       

        {/* 1. Top-Left: Frame (1).png (Lime Squiggle) -> X: -118, Y: 221, W: 385, H: 385 */}
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            left: "-100px",
            top: "221px",
            width: "385px",
            height: "385px",
          }}
        >
          <Image
            src="/images/banner/frame-1.png"
            alt="3D Lime Squiggle"
            width={534}
            height={774}
            className="w-full h-full object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* 2. Middle-Left: Frame.png (White Wave) -> X: 183, Y: 477, W: 175, H: 175, 180° */}
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            left: "183px",
            top: "477px",
            width: "175px",
            height: "175px",
            transform: "rotate(180deg)",
          }}
        >
          <Image
            src="/images/banner/frame.png"
            alt="3D White Wave"
            width={354}
            height={352}
            className="w-full h-full object-contain drop-shadow-xl"
            priority
          />
        </div>

        {/* 3. Bottom-Left: Mask Group.png (White Donut) -> X: 18, Y: 682, W: 342, H: 342 */}
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            left: "15px",
            top: "682px",
            width: "342px",
            height: "342px",
          }}
        >
          <Image
            src="/images/banner/mask-group.png"
            alt="3D White Donut"
            width={688}
            height={686}
            className="w-full h-full object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* 4. Top-Right: Mask Group (1).png (Lime Cylinder) -> X: 1205, Y: 195, W: 250, H: 350 */}
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            left: "1262px",
            top: "195px",
            width: "250px",
            height: "350px",
          }}
        >
          <Image
            src="/images/banner/mask-group-1.png"
            alt="3D Lime Cylinder"
            width={426}
            height={744}
            className="w-full h-full object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* 5. Middle-Right: Cone.png (White Pyramid / Cone) -> X: 1126, Y: 480, W: 165, H: 165 */}
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            left: "1126px",
            top: "480px",
            width: "165px",
            height: "165px",
          }}
        >
          <Image
            src="/images/banner/cone.png"
            alt="3D White Pyramid Cone"
            width={380}
            height={378}
            className="w-full h-full object-contain drop-shadow-xl"
            priority
          />
        </div>

        {/* 6. Bottom-Right: Frame (2).png (White Spring) -> X: 1127, Y: 672, W: 330, H: 330 */}
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            left: "1127px",
            top: "672px",
            width: "330px",
            height: "330px",
          }}
        >
          <Image
            src="/images/banner/frame-2.png"
            alt="3D White Spring Helix"
            width={633}
            height={664}
            className="w-full h-full object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* ============================================================== */}
        {/* CENTER ELLIPSE ARC & STUDENT IMAGE                             */}
        {/* ============================================================== */}

        {/* 7. Center Arc: Ellipse 7.png -> X: 145, Y: 582, W: 1149, H: 442 */}
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            left: "145px",
            top: "582px",
            width: "1149px",
            height: "442px",
          }}
        >
          <Image
            src="/images/banner/ellipse-7.png"
            alt="Center Lime Arc"
            width={3447}
            height={1326}
            className="w-full h-full object-contain object-bottom drop-shadow-2xl"
            priority
          />
        </div>

        {/* 8. Student: Image.png -> Centered horizontally, top: 540px, W: 720px, H: 484px */}
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            left: "360px",
            top: "540px",
            width: "720px",
            height: "484px",
          }}
        >
          <Image
            src="/images/banner/student.png"
            alt="ByteSpace Student"
            width={2166}
            height={1545}
            className="w-full h-full object-contain object-bottom select-none drop-shadow-2xl"
            priority
          />
        </div>

        {/* ============================================================== */}
        {/* 3 FLOATING CARDS (Exact Figma Coordinates)                     */}
        {/* ============================================================== */}

        {/* Card 1: UI/UX Design -> X: 395, Y: 630 */}
        <div
          className="absolute z-30 bg-white text-gray-900 rounded-2xl px-4 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.18)] border border-white/40 flex flex-col items-start text-left min-w-[195px] transition-transform hover:scale-105"
          style={{
            left: "375px",
            top: "630px",
          }}
        >
          <span className="font-bold text-sm tracking-tight text-gray-900">
            UI/UX Design
          </span>
          <span className="text-[11px] text-gray-500 font-medium">
            200 Courses • 1000+ Students
          </span>
        </div>

        {/* Card 2: Learning Progress 55% -> X: 835, Y: 645 */}
        <div
          className="absolute z-30 bg-white text-gray-900 rounded-2xl p-4 shadow-[0_15px_35px_rgba(0,0,0,0.18)] border border-white/40 flex flex-col items-start text-left w-[175px] transition-transform hover:scale-105"
          style={{
            left: "855px",
            top: "645px",
          }}
        >
          <span className="text-[11px] text-gray-500 font-medium">
            Learning Progress
          </span>
          <span className="text-2xl font-black tracking-tight text-gray-900 leading-none my-1">
            55%
          </span>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-1">
            <div className="bg-[#CBFC01] h-full w-[55%] rounded-full shadow-xs" />
          </div>
        </div>

        {/* Card 3: Happy Students -> X: 295, Y: 825 */}
        <div
          className="absolute z-30 bg-white text-gray-900 rounded-2xl px-4 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.18)] border border-white/40 flex flex-col items-start text-left transition-transform hover:scale-105"
          style={{
            left: "345px",
            top: "825px",
          }}
        >
          <div className="flex items-center justify-between w-full gap-3">
            <span className="font-bold text-sm text-gray-900">
              Happy Students
            </span>
            <div className="flex items-center gap-1 text-xs font-semibold text-gray-600">
              <span>4.5 (240)</span>
              <Star className="w-3 h-3 fill-amber-400 text-amber-400 inline -mt-0.5" />
            </div>
          </div>

          {/* Avatars Stack (Local 56x56 PNGs, zero external network issues) */}
          <div className="flex items-center -space-x-1.5 pt-2">
            <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-blue-500 relative">
              <Image
                src="/images/banner/avatar1.png"
                alt="Student 1"
                width={28}
                height={28}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-pink-500 relative">
              <Image
                src="/images/banner/avatar2.png"
                alt="Student 2"
                width={28}
                height={28}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-purple-500 relative">
              <Image
                src="/images/banner/avatar3.png"
                alt="Student 3"
                width={28}
                height={28}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-amber-500 relative">
              <Image
                src="/images/banner/avatar4.png"
                alt="Student 4"
                width={28}
                height={28}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-7 h-7 rounded-full border-2 border-white bg-[#CBFC01] flex items-center justify-center text-[10px] font-extrabold text-black">
              2K+
            </div>
          </div>
        </div>
      </div>

      {/* Floating Toggle Button for Architecture & Redux Workspace */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowWorkspace(!showWorkspace)}
          className="bg-black/90 hover:bg-black text-white px-4 py-2.5 rounded-full shadow-2xl border border-white/20 flex items-center gap-2 text-xs font-semibold backdrop-blur-md cursor-pointer transition-all hover:scale-105"
        >
          {showWorkspace ? (
            <>
              <X className="w-4 h-4 text-rose-400" />
              <span>Close Workspace</span>
            </>
          ) : (
            <>
              <LayoutGrid className="w-4 h-4 text-[#CBFC01]" />
              <span>Redux & Architecture Demo</span>
            </>
          )}
        </button>
      </div>

      {/* Slide-over / Modal for Enterprise Redux & Error Handling Workspace */}
      {showWorkspace && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md overflow-y-auto p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="max-w-7xl mx-auto bg-background text-foreground rounded-3xl p-6 sm:p-10 shadow-2xl border border-border relative mt-8 mb-16">
            <div className="flex items-center justify-between pb-6 border-b border-border/80">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Enterprise Redux & Error Architecture</h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Connected live state, RTK Query cache, and Error Boundary testing lab.
                </p>
              </div>
              <button
                onClick={() => setShowWorkspace(false)}
                className="p-2 rounded-xl bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="pt-6">
              <TaskDashboard />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
