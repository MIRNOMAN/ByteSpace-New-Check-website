"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative w-full min-h-screen bg-[#0047FF] flex flex-col justify-between overflow-hidden selection:bg-[#CBFC01]">
      
      {/* Fine Grid Line Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px'
        }}
      />

      {/* Header / Navbar */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 py-6 sm:py-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="inline-block">
          <Image
            src="/images/banner/logo.png"
            alt="ByteSpace"
            width={150}
            height={36}
            className="h-8 sm:h-9 w-auto object-contain brightness-0 invert"
          />
        </Link>

        {/* Center Menu Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-normal text-white/90">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Courses
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Creators
          </Link>
        </nav>

        {/* Right Action Menu */}
        <div className="flex items-center gap-6 text-sm font-normal text-white/90">
          <Link href="#" className="hover:text-white transition-colors">
            Sign In
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Join Us
          </Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">
            <ShoppingBag className="w-5 h-5 text-white" />
          </Link>
        </div>
      </header>

      {/* Main 404 Hero Content */}
      <main className="relative z-20 max-w-5xl mx-auto px-6 flex-1 flex flex-col items-center justify-center text-center my-auto py-12">
        
        {/* Massive 404 Number with Lime Vertical Gradient */}
        <h1 className="240px] md:text-[300px] lg:text-[400px] font-extrabold tracking-tight leading-none text-center select-none bg-gradient-to-b from-[#D2FF00] via-[#C5F500]/80 to-[#7CB300]/15 bg-clip-text text-transparent">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-3xl  md:text-5xl lg:text-[60px] font-extrabold text-white tracking-tight leading-[1.15] max-w-3xl mx-auto -mt-12 sm:-mt-20 md:-mt-24 mb-5">
          The page you are looking for doesn’t exist
        </h2>

        {/* Subtitle */}
        <p className="text-white/80 text-base font-normal max-w-xl mx-auto mb-9 leading-relaxed">
          Try to use a correct url or go back to homepage to start again
        </p>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="bg-[#D2FF00] hover:bg-[#c2ef00] text-black font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center justify-center"
        >
          Back to Home
        </Link>
      </main>

      {/* Empty Footer Spacer */}
      <div className="py-4" />
    </div>
  );
}
