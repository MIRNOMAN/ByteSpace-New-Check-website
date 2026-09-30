import React from "react";

export function BrandLogos() {
  return (
    <section className="w-full bg-[#F3F4F6] py-12 px-6 sm:px-12 md:px-16 border-b border-slate-200/80 selection:bg-[#CBFC01]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-8 md:gap-10">
        
        {/* Logo 1: Waves Circle */}
        <div className="flex items-center gap-2.5 text-[#5F6B7C] hover:text-[#1E293B] transition-colors select-none">
          <svg className="w-8 h-8 fill-current shrink-0" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm-11 12.5c3 0 5 1.8 8 1.8s5-1.8 8-1.8 5 1.8 8 1.8v2.8c-3 0-5-1.8-8-1.8s-5 1.8-8 1.8-5-1.8-8-1.8v-2.8zm0 6.5c3 0 5 1.8 8 1.8s5-1.8 8-1.8 5 1.8 8 1.8v2.8c-3 0-5-1.8-8-1.8s-5 1.8-8 1.8-5-1.8-8-1.8v-2.8zm0 6.5c3 0 5 1.8 8 1.8s5-1.8 8-1.8 5 1.8 8 1.8v2.8c-3 0-5-1.8-8-1.8s-5 1.8-8 1.8-5-1.8-8-1.8v-2.8z" />
          </svg>
          <span className="text-[22px] font-extrabold tracking-tight text-[#5F6B7C] leading-none">
            Logoipsum
          </span>
        </div>

        {/* Logo 2: Sunburst Icon (12 spokes) */}
        <div className="flex items-center gap-2.5 text-[#5F6B7C] hover:text-[#1E293B] transition-colors select-none">
          <svg className="w-8 h-8 fill-current shrink-0" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <mask id="sunburst-mask">
              <rect width="40" height="40" fill="white" />
              <circle cx="20" cy="20" r="7.5" fill="black" />
            </mask>
            <g mask="url(#sunburst-mask)">
              <rect x="18" y="0" width="4" height="40" />
              <rect x="18" y="0" width="4" height="40" transform="rotate(30 20 20)" />
              <rect x="18" y="0" width="4" height="40" transform="rotate(60 20 20)" />
              <rect x="18" y="0" width="4" height="40" transform="rotate(90 20 20)" />
              <rect x="18" y="0" width="4" height="40" transform="rotate(120 20 20)" />
              <rect x="18" y="0" width="4" height="40" transform="rotate(150 20 20)" />
            </g>
          </svg>
          <span className="text-[22px] font-extrabold tracking-tight text-[#5F6B7C] leading-none">
            Logoipsum
          </span>
        </div>

        {/* Logo 3: Lightning Bolt Circle */}
        <div className="flex items-center gap-2.5 text-[#5F6B7C] hover:text-[#1E293B] transition-colors select-none">
          <svg className="w-8 h-8 fill-current shrink-0" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm2 8l-12 15h9.5l-2.5 11L29 19h-9.5l2.5-11z" />
          </svg>
          <span className="text-[22px] font-extrabold tracking-tight text-[#5F6B7C] leading-none">
            Logoipsum
          </span>
        </div>

        {/* Logo 4: Four-Petal Flower Circle */}
        <div className="flex items-center gap-2.5 text-[#5F6B7C] hover:text-[#1E293B] transition-colors select-none">
          <svg className="w-8 h-8 fill-current shrink-0" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 7.5c2.485 0 4.5 2.015 4.5 4.5S22.485 16.5 20 16.5s-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5zm-8 12.5c0-2.485-2.015-4.5-4.5-4.5S3 17.515 3 20s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5zm16 0c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5zm-8 8c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5z" />
          </svg>
          <span className="text-[22px] font-extrabold tracking-tight text-[#5F6B7C] leading-none">
            Logoipsum
          </span>
        </div>

        {/* Logo 5: Concentric Ripple Sphere */}
        <div className="flex items-center gap-2.5 text-[#5F6B7C] hover:text-[#1E293B] transition-colors select-none">
          <svg className="w-8 h-8 stroke-current fill-none shrink-0" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.6">
            <circle cx="20" cy="20" r="19" />
            <circle cx="17" cy="18" r="15" />
            <circle cx="14.5" cy="16.5" r="12" />
            <circle cx="12.5" cy="15" r="9.5" />
            <circle cx="11" cy="13.5" r="7" />
            <circle cx="10" cy="12" r="4.5" />
            <circle cx="9" cy="11" r="2.5" fill="currentColor" />
          </svg>
          <span className="text-[22px] font-extrabold tracking-tight text-[#5F6B7C] leading-none">
            Logoipsum
          </span>
        </div>

      </div>
    </section>
  );
}
