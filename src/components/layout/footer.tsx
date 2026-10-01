"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");

  if (pathname === "/register") return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.info("Newsletter", { description: "Please enter your email address." });
      return;
    }
    toast.success("Subscribed!", { description: "Thank you for joining our newsletter." });
    setEmail("");
  };

  return (
    <footer className="w-full bg-white border-t border-slate-100 py-14 sm:py-16 px-6 sm:px-12 md:px-16 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Brand/Newsletter on Left, Nav Links on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-14">
          
          {/* Left Column: Logo, Tagline, Form & Disclaimer (Cols 1-5) */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Logo */}
            <Link href="/" className="inline-block w-fit">
              <Image
                src="/images/banner/logo.png"
                alt="ByteSpace Logo"
                width={150}
                height={36}
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>

            {/* Tagline */}
            <p className="text-[#475569] text-sm leading-[1.65] mt-4 mb-6 font-normal max-w-sm">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Input & Button */}
            <form onSubmit={handleSubscribe} className="flex items-center gap-3 max-w-md w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                suppressHydrationWarning
                className="flex-1 bg-white border border-slate-200/90 rounded-full px-5 py-3 text-sm text-[#0F172A] placeholder:text-slate-400 outline-none focus:border-[#0047FF] transition-all shadow-sm"
              />
              <button
                type="submit"
                className="bg-[#D2FF00] hover:bg-[#c2ef00] text-black font-semibold text-sm px-7 py-3 rounded-full shadow-sm transition-all shrink-0 cursor-pointer"
              >
                Search
              </button>
            </form>

            {/* Disclaimer */}
            <p className="text-[11px] text-slate-400 mt-3.5 leading-normal max-w-sm font-normal">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Column: 3 Nav Link Columns (Cols 6-12) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 pt-2 lg:pt-0">
            
            {/* Nav Column 1 */}
            <div className="flex flex-col space-y-3.5">
              <Link href="#" className="text-[#475569] hover:text-[#0F172A] text-sm font-normal transition-colors">
                Featured Courses
              </Link>
              <Link href="#" className="text-[#475569] hover:text-[#0F172A] text-sm font-normal transition-colors">
                Featured Categories
              </Link>
              <Link href="#" className="text-[#475569] hover:text-[#0F172A] text-sm font-normal transition-colors">
                Business
              </Link>
              <Link href="#" className="text-[#475569] hover:text-[#0F172A] text-sm font-normal transition-colors">
                IT
              </Link>
              <Link href="#" className="text-[#475569] hover:text-[#0F172A] text-sm font-normal transition-colors">
                Design
              </Link>
            </div>

            {/* Nav Column 2 */}
            <div className="flex flex-col space-y-3.5">
              <Link href="#" className="text-[#475569] hover:text-[#0F172A] text-sm font-normal transition-colors">
                Development
              </Link>
              <Link href="#" className="text-[#475569] hover:text-[#0F172A] text-sm font-normal transition-colors">
                Marketing
              </Link>
              <Link href="#" className="text-[#475569] hover:text-[#0F172A] text-sm font-normal transition-colors">
                Photography
              </Link>
              <Link href="#" className="text-[#475569] hover:text-[#0F172A] text-sm font-normal transition-colors">
                Finance
              </Link>
              <Link href="#" className="text-[#475569] hover:text-[#0F172A] text-sm font-normal transition-colors">
                Sport
              </Link>
            </div>

            {/* Nav Column 3 */}
            <div className="flex flex-col space-y-3.5">
              <Link href="#" className="text-[#475569] hover:text-[#0F172A] text-sm font-normal transition-colors">
                Become a Creator
              </Link>
              <Link href="#" className="text-[#475569] hover:text-[#0F172A] text-sm font-normal transition-colors">
                Affiliate Program
              </Link>
              <Link href="#" className="text-[#475569] hover:text-[#0F172A] text-sm font-normal transition-colors">
                Contact
              </Link>
              <Link href="#" className="text-[#475569] hover:text-[#0F172A] text-sm font-normal transition-colors">
                Help
              </Link>
              <Link href="#" className="text-[#475569] hover:text-[#0F172A] text-sm font-normal transition-colors">
                About
              </Link>
            </div>

          </div>

        </div>

        {/* Bottom Horizontal Line */}
        <div className="w-full border-t border-slate-200/80 mb-8" />

        {/* Bottom Rights & Policy Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p className="font-normal">
            @ 2023 ByteSpace. All rights reserved.
          </p>

          <div className="flex items-center gap-6 sm:gap-8 font-normal">
            <Link href="#" className="hover:text-[#0F172A] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#0F172A] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-[#0F172A] transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
