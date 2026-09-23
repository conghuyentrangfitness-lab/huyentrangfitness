"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { label: "VỀ KHÁNG LỰC THẢM", href: "#about-mat" },
  { label: "DỤNG CỤ TẬP", href: "#equipment" },
  { label: "CÁC GÓI TẬP", href: "#pricing" },
  { label: "HIỆU QUẢ VÓC DÁNG", href: "#transformation" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#D4A373]/20 py-3.5 shadow-[0_4px_25px_rgba(212,163,115,0.08)]"
            : "bg-transparent py-5 sm:py-7"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between gap-6">
          {/* Brand Logo with Image */}
          <Link
            href="#"
            className="group flex items-center gap-2.5 sm:gap-3 tracking-wide transition-transform duration-300 shrink-0 mr-4 xl:mr-8 hover:scale-[1.01]"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#D4A373]/35 shadow-xs shrink-0 bg-white">
              <Image
                src="/images/logo.jpg"
                alt="FITNESS x FIT CLUB Logo"
                fill
                sizes="40px"
                className="object-cover object-center"
              />
            </div>
            <span className="text-xl sm:text-2xl text-[#24211D] tracking-tight font-bold flex items-center gap-1.5 whitespace-nowrap">
              FITNESS x&nbsp;<span className="whitespace-nowrap">FIT&nbsp;CLUB</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C58F78] ml-0.5" />
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center gap-5 xl:gap-8 flex-1 mx-2">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] xl:text-xs font-semibold tracking-wider text-[#59534B] hover:text-[#C58F78] transition-colors relative py-1 group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#C58F78] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center shrink-0 ml-4 xl:ml-8">
            <a
              href="#consultation-form"
              className="inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C58F78] to-[#D4A373] text-white font-semibold text-[11px] xl:text-xs tracking-wider shadow-[0_4px_18px_rgba(197,143,120,0.35)] hover:shadow-[0_6px_25px_rgba(197,143,120,0.5)] transition-all duration-300 hover:scale-[1.02] whitespace-nowrap"
            >
              <span>ĐĂNG KÝ 3 BUỔI HỌC THỬ MIỄN PHÍ ( LIÊN HỆ )</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Mở menu"
            className="lg:hidden p-2 text-[#24211D] hover:text-[#C58F78] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#FAF7F2] z-40 lg:hidden flex flex-col justify-between px-8 py-24 transition-all duration-500 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-8"
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#D4A373]/35 shadow-xs shrink-0 bg-white">
              <Image
                src="/images/logo.jpg"
                alt="FITNESS x FIT CLUB Logo"
                fill
                sizes="32px"
                className="object-cover object-center"
              />
            </div>
            <span className="text-base font-bold text-[#24211D] tracking-tight whitespace-nowrap">
              FITNESS x&nbsp;<span className="whitespace-nowrap">FIT&nbsp;CLUB</span>
            </span>
          </div>
          {NAV_LINKS.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl sm:text-3xl text-[#24211D] hover:text-[#C58F78] transition-colors font-semibold flex items-baseline gap-3"
            >
              <span className="text-xs text-[#877F75] font-normal">0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-6 border-t border-[#D4A373]/20">
          <a
            href="#consultation-form"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-3 w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#C58F78] to-[#D4A373] text-white font-bold tracking-wider text-xs shadow-md text-center"
          >
            <span>ĐĂNG KÝ 3 BUỔI HỌC THỬ MIỄN PHÍ ( LIÊN HỆ )</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <div className="text-center text-xs text-[#877F75] whitespace-nowrap">
            FITNESS x&nbsp;<span className="whitespace-nowrap">FIT&nbsp;CLUB</span>
          </div>
        </div>
      </div>
    </>
  );
}
