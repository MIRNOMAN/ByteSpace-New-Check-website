"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, BarChart2 } from "lucide-react";
import { toast } from "sonner";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Required Fields", { description: "Please fill in all login fields." });
      return;
    }
    toast.success("Login Successfully!", { description: `Welcome back to ByteSpace!` });
  };

  return (
    <div className="relative w-full min-h-screen bg-[#0047FF] flex items-center justify-center p-6 sm:p-12 overflow-hidden select-none selection:bg-[#CBFC01]">
      
      {/* Fine Blueprint Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.18) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px'
        }}
      />

      {/* Top Left Logo Icon */}
      <div className="absolute top-6 sm:top-8 left-0 right-0 z-30 max-w-7xl mx-auto  pointer-events-none">
        <Link href="/" className="pointer-events-auto inline-block">
          <Image
            src="/images/banner/Groupsvg.png"
            alt="ByteSpace Logo"
            width={105}
            height={111}
            priority
            className="h-9 sm:h-11 w-auto object-contain transition-transform hover:scale-105"
          />
        </Link>
      </div>

      {/* Main Grid Container (2 Columns) */}
      <div className="relative z-20 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto pt-16 sm:pt-0">
        
        {/* Left Column: Text & 3D Visual Stack (Cols 1-6) */}
        <div className="lg:col-span-6 flex flex-col justify-center text-white">
          
          {/* Text Block */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl  font-extrabold tracking-tight leading-[1.15] mb-3">
            Sign in with ease
        
          </h1>
          <p className="text-white/85 text-xs sm:text-lg leading-relaxed max-w-lg font-light mb-8 sm:mb-12">
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
          </p>

          {/* Visual Composite Cards & 3D Icons Container */}
          <div className="relative w-full max-w-[520px] h-[400px] sm:h-[440px]">
            
            {/* 3D Shape 1: Top-Left Lime Torus Ring (Cone (5).png) */}
            <div className="absolute left-[30px] sm:left-[40px] -top-4 w-[90px] sm:w-[150px] h-[90px] sm:h-[150px] z-25 pointer-events-none drop-shadow-2xl">
              <Image
                src="/images/signup/Cone (5).png"
                alt="Lime Ring"
                fill
                priority
                sizes="110px"
                className="object-contain"
              />
            </div>

            {/* Back Card 1: Build Digital Asset (course2.png) */}
            <div className="absolute left-0 top-[50px] sm:top-[60px] w-[240px] sm:w-[270px] bg-white rounded-[26px] p-4 sm:p-4.5 shadow-xl border border-slate-100 z-10 pointer-events-none">
              <div className="relative w-full h-[110px] sm:h-[155px] rounded-[18px] overflow-hidden mb-3 bg-slate-100">
                <Image
                  src="/images/courses/course2.png"
                  alt="Build Digital Asset"
                  fill
                  priority
                  sizes="270px"
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-white/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] text-slate-800 font-semibold">
                  17 Lessons
                </span>
              </div>
              <h4 className="font-extrabold text-sm text-[#0F172A] truncate mb-0.5">
                Build Digital Asset
              </h4>
              <p className="text-[11px] text-slate-500 mb-2">
                by <span className="text-[#0047FF] font-medium">purepearl studio</span>
              </p>
              <div className="flex items-center justify-between pt-1">
                <span className="bg-[#F1F5F9] px-2.5 py-1 rounded-full text-[10px] font-medium text-slate-700 flex items-center gap-1">
                  <BarChart2 className="w-3 h-3 text-slate-500" />
                  Beginner
                </span>
                {/* Avatars Stack */}
                <div className="flex items-center -space-x-1.5">
                  <div className="w-5 h-5 rounded-full border border-white overflow-hidden relative shrink-0">
                    <Image src="/images/banner/avatar1.png" alt="User" fill sizes="20px" className="object-cover" />
                  </div>
                  <div className="w-5 h-5 rounded-full border border-white overflow-hidden relative shrink-0">
                    <Image src="/images/banner/avatar2.png" alt="User" fill sizes="20px" className="object-cover" />
                  </div>
                  <div className="w-5 h-5 rounded-full border border-white overflow-hidden relative shrink-0">
                    <Image src="/images/banner/avatar3.png" alt="User" fill sizes="20px" className="object-cover" />
                  </div>
                  <div className="w-5 h-5 rounded-full border border-white bg-black text-white flex items-center justify-center text-[8px] font-bold shrink-0">
                    26+
                  </div>
                </div>
              </div>
              <div className="mt-2 text-xs font-bold text-[#0047FF]">
                $25<span className="text-[10px] font-normal text-slate-400">/lifetime</span>
              </div>
            </div>

            {/* Front Card 2: the Power of Big Data (course3.png) */}
            <div className="absolute left-[90px] sm:left-[120px] top-0 w-[270px] sm:w-[310px] bg-white rounded-[28px] p-4.5 sm:p-5 shadow-2xl border border-slate-100 z-20">
              <div className="relative w-full h-[125px] sm:h-[145px] rounded-[20px] overflow-hidden mb-3 bg-slate-100">
                <Image
                  src="/images/courses/course3.png"
                  alt="the Power of Big Data"
                  fill
                  priority
                  sizes="310px"
                  className="object-cover"
                />
                {/* Pill Badges */}
                <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5 overflow-hidden">
                  <span className="bg-white/85 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] text-slate-800 font-semibold shrink-0">
                    17 Lessons
                  </span>
                  <span className="bg-white/85 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] text-slate-800 font-semibold shrink-0">
                    2 hours 16 mins
                  </span>
                  <span className="bg-white/85 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] text-slate-800 font-semibold truncate">
                    59 Comments
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-1 mb-0.5">
                <h4 className="font-extrabold text-sm sm:text-base text-[#0F172A] truncate">
                  the Power of Big Data
                </h4>
                <div className="flex items-center gap-0.5 text-slate-600 text-xs font-semibold shrink-0">
                  <span>4.5</span>
                  <Star className="w-3.5 h-3.5 fill-[#EAB308] text-[#EAB308]" />
                </div>
              </div>

              <p className="text-[11px] text-slate-500 mb-2">
                by <span className="text-[#0047FF] font-medium">purepearl studio</span>
              </p>

              <div className="flex items-center justify-between pt-1">
                <span className="bg-[#F1F5F9] px-2.5 py-1 rounded-full text-[10px] font-medium text-slate-700 flex items-center gap-1">
                  <BarChart2 className="w-3 h-3 text-slate-500" />
                  Beginner
                </span>
                
                {/* Avatars Stack */}
                <div className="flex items-center -space-x-1.5">
                  <div className="w-5 h-5 rounded-full border border-white overflow-hidden relative shrink-0">
                    <Image src="/images/banner/avatar1.png" alt="User" fill sizes="20px" className="object-cover" />
                  </div>
                  <div className="w-5 h-5 rounded-full border border-white overflow-hidden relative shrink-0">
                    <Image src="/images/banner/avatar2.png" alt="User" fill sizes="20px" className="object-cover" />
                  </div>
                  <div className="w-5 h-5 rounded-full border border-white overflow-hidden relative shrink-0">
                    <Image src="/images/banner/avatar3.png" alt="User" fill sizes="20px" className="object-cover" />
                  </div>
                  <div className="w-5 h-5 rounded-full border border-white bg-black text-white flex items-center justify-center text-[8px] font-bold shrink-0">
                    26+
                  </div>
                </div>
              </div>

              <div className="mt-2 text-xs font-bold text-[#0047FF]">
                $25<span className="text-[10px] font-normal text-slate-400">/lifetime</span>
              </div>
            </div>

            {/* 3D Shape 2: Bottom-Left Yellow Pyramid (Cone (6).png) */}
            <div className="absolute left-[-15px] sm:left-[-20px] bottom-[-10px] sm:bottom-[-25px] w-[150px] sm:w-[160px] h-[120px] sm:h-[160px] z-35 pointer-events-none drop-shadow-2xl">
              <Image
                src="/images/signup/Cone (6).png"
                alt="Yellow Pyramid"
                fill
                priority
                sizes="145px"
                className="object-contain"
              />
            </div>

            {/* 3D Shape 3: Bottom-Right White Wave (Frame (14).png) */}
            <div className="absolute right-[5px] sm:right-[100px] bottom-[80px] sm:bottom-[45px] w-[110px] sm:w-[140px] h-[110px] sm:h-[140px] z-40 pointer-events-none drop-shadow-2xl">
              <Image
                src="/images/signup/Frame (14).png"
                alt="White Wave"
                fill
                priority
                sizes="130px"
                className="object-contain"
              />
            </div>

            {/* Bottom Card 3: Lime Happy Students Badge (#CBFC01) */}
            <div className="absolute right-0 sm:right-30 bottom-0 bg-[#CBFC01] text-black rounded-[15px] p-4 sm:p-4.5 shadow-2xl z-30 w-[210px] sm:w-[235px]">
              <h5 className="text-xs font-bold text-[#0F172A] mb-0.5">
                Happy Students
              </h5>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-800 mb-2.5">
                <span>4.5</span>
                <span className="text-slate-600 font-normal">(240)</span>
                <Star className="w-3 h-3 fill-[#0047FF] text-[#0047FF] ml-0.5" />
              </div>

              {/* Avatars Stack (6 avatars + 2K+ badge) */}
              <div className="flex items-center -space-x-1.5">
                <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden relative shrink-0">
                  <Image src="/images/banner/avatar1.png" alt="User" fill sizes="24px" className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden relative shrink-0">
                  <Image src="/images/banner/avatar2.png" alt="User" fill sizes="24px" className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden relative shrink-0">
                  <Image src="/images/banner/avatar3.png" alt="User" fill sizes="24px" className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden relative shrink-0">
                  <Image src="/images/banner/avatar4.png" alt="User" fill sizes="24px" className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden relative shrink-0">
                  <Image src="/images/men/Ellipse.png" alt="User" fill sizes="24px" className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden relative shrink-0">
                  <Image src="/images/men/Ellipse (1).png" alt="User" fill sizes="24px" className="object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-white bg-black text-white flex items-center justify-center text-[9px] font-extrabold shrink-0">
                  2K+
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: White Sign Up Form Card (Cols 7-12) */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          
          <div className="bg-white rounded-[32px] p-7 sm:p-10 shadow-2xl w-full max-w-[460px] border border-slate-100 flex flex-col justify-between">
            
            <form onSubmit={handleSubmit}>
              {/* Card Header */}
              <span className="text-[#0047FF] font-medium text-xs sm:text-sm mb-1 block">
                Sign In 
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-7">
                Welcome Back
              </h2>

              {/* Input Fields */}
              <div className="space-y-4">
                
              
                   

                {/* Email */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="designer@example.com"
                    suppressHydrationWarning
                    className="w-full bg-white border border-slate-200/90 rounded-xl px-4.5 py-3 text-sm text-[#0F172A] placeholder:text-slate-400 outline-none focus:border-[#0047FF] transition-all shadow-xs"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                    suppressHydrationWarning
                    className="w-full bg-white border border-slate-200/90 rounded-xl px-4.5 py-3 text-sm text-[#0F172A] placeholder:text-slate-400 outline-none focus:border-[#0047FF] transition-all shadow-xs"
                  />
                </div>

              </div>

              {/* Submit Button */}
              <div className="flex justify-end mt-7">
                <button
                  type="submit"
                  className="bg-[#D2FF00] hover:bg-[#c2ef00] text-black font-semibold text-sm px-8 py-3 rounded-full shadow-md transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </form>

            {/* Card Footer Link */}
            <div className="mt-8 text-center pt-2 border-t border-slate-100">
              <p className="text-xs text-slate-500 font-normal">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-[#0047FF] font-semibold hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
