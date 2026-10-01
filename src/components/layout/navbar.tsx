"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  if (pathname === "/register") return null;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0047FF] border-b border-white/10 backdrop-blur-md select-none">
      <div className="max-w-7xl mx-auto h-[76px] px-6 sm:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group transition-transform hover:scale-105">
          <div className="relative w-[150px] h-[34px]">
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
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-white/90">
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
          <Link
           href="/login"
            className="text-white/90 hover:text-white transition-colors cursor-pointer"
          >
            Sign In
          </Link>
          <button
            onClick={() => toast.success("Join Us", { description: "Welcome to ByteSpace community!" })}
            className="text-white hover:text-white transition-colors cursor-pointer"
          >
            Join Us
          </button>
          <button
            onClick={() => toast.info("Cart", { description: "Your shopping bag is empty." })}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
