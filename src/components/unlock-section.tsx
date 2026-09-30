"use client";

import React from "react";
import Image from "next/image";

export function UnlockSection() {
  return (
    <section className="relative w-full bg-[#0047FF] min-h-[480px] sm:min-h-[540px]   overflow-hidden select-none flex items-center justify-center">
      {/* Fine Grid Pattern Overlay */}
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

      {/* Floating 3D Shapes (Exact Figma Positioning) */}

      {/* 1. Top-Left Outer: Lime 3D Helix / Spring */}
      <div className="absolute -top-8 -left-0  sm:left-0 w-[130px] sm:w-[350px] h-[130px] sm:h-[350px] pointer-events-none z-10 drop-shadow-xl">
        <Image
          src="/images/unlock/Frame (11).png"
          alt="Lime Helix"
          fill
          sizes="210px"
          className="object-contain"
        />
      </div>

      {/* 2. Top-Left Inner: White 3D Squiggle */}
      <div className="absolute top-4 left-[130px] sm:left-[210px] w-[90px] sm:w-[185px] h-[90px] sm:h-[185px] pointer-events-none z-10 drop-shadow-lg">
        <Image
          src="/images/unlock/Frame (12).png"
          alt="White Squiggle"
          fill
          sizes="135px"
          className="object-contain"
        />
      </div>

      {/* 3. Bottom-Left Outer: White 3D Pyramid / Cone */}
      <div className="absolute bottom-4 -left-6 sm:bottom-6  w-[110px] sm:w-[160px] h-[110px] sm:h-[160px] pointer-events-none z-10 drop-shadow-xl">
        <Image
          src="/images/unlock/Cone (1).png"
          alt="White Cone"
          fill
          sizes="160px"
          className="object-contain"
        />
      </div>

      {/* 4. Bottom-Left Inner: Large Lime 3D Torus Ring */}
      <div className="absolute -bottom-20 left-[40px] sm:left-[80px] w-[210px] sm:w-[310px] h-[210px] sm:h-[310px] pointer-events-none z-10 drop-shadow-2xl">
        <Image
          src="/images/unlock/Cone (2).png"
          alt="Lime Ring"
          fill
          sizes="310px"
          className="object-contain"
        />
      </div>

      {/* 5. Top-Right Inner: Yellow 3D Pyramid / Cone */}
      <div className="absolute top-4 right-[150px] sm:right-[240px] w-[110px] sm:w-[230px] h-[110px] sm:h-[230px] pointer-events-none z-10 drop-shadow-xl">
        <Image
          src="/images/unlock/Cone (3).png"
          alt="Yellow Pyramid"
          fill
          sizes="170px"
          className="object-contain"
        />
      </div>

      {/* 6. Top-Right Outer: Large White 3D Cylinder / Pill */}
      <div className="absolute -top-6 -right- sm:-top-8 sm:-right-16 w-[200px] sm:w-[310px] h-[200px] sm:h-[310px] pointer-events-none z-10 drop-shadow-2xl">
        <Image
          src="/images/unlock/Cone (4).png"
          alt="White Cylinder"
          fill
          sizes="310px"
          className="object-contain"
        />
      </div>

      {/* 7. Bottom-Right Corner: Lime 3D Spring Coil */}
      <div className="absolute -bottom-15 right-0 sm:right-[20px] w-[160px] sm:w-[280px] h-[160px] sm:h-[280px] pointer-events-none z-10 drop-shadow-2xl">
        <Image
          src="/images/unlock/Frame (13).png"
          alt="Lime Spring"
          fill
          sizes="240px"
          className="object-contain"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.2] mb-5 max-w-2xl">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="text-white/85 text-sm sm:text-base lg:text-[15px] leading-[1.7] max-w-3xl mb-8 font-normal">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <button className="bg-[#D2FF00] hover:bg-[#c2ef00] text-black font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-md transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer">
          Join as Creator
        </button>
      </div>
    </section>
  );
}
