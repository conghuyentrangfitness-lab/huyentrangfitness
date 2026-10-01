"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { SOCIAL_CHANNELS, TikTokIcon, FacebookIcon, FanpageIcon, InstagramIcon } from "./SocialLinks";

const NAV_LINKS = [
  { label: "VỀ KHÁNG LỰC THẢM", href: "#about-mat" },
  { label: "THƯ VIỆN ẢNH", href: "#album" },
  { label: "DỤNG CỤ TẬP", href: "#equipment" },
  { label: "CÁC GÓI TẬP", href: "#pricing" },
  { label: "HIỆU QUẢ VÓC DÁNG", href: "#transformation" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollYRef = useRef<number>(0);
  const targetAnchorRef = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!mobileMenuOpen) {
        setScrolled(window.scrollY > 40);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  // Khóa cứng thanh cuộn của trang web phía sau khi mở menu 3 gạch trên mobile (tương thích 100% iOS Safari & Android)
  useEffect(() => {
    if (mobileMenuOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.overscrollBehavior = "none";
    } else {
      const top = document.body.style.top;
      const targetAnchor = targetAnchorRef.current;
      targetAnchorRef.current = null;

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.overscrollBehavior = "";

      if (targetAnchor) {
        const targetId = targetAnchor.replace("#", "");
        requestAnimationFrame(() => {
          if (targetId && targetId !== "top") {
            const el = document.getElementById(targetId);
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
              return;
            }
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      } else if (top) {
        const y = parseInt(top, 10) * -1;
        window.scrollTo(0, y);
      }
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.overscrollBehavior = "";
    };
  }, [mobileMenuOpen]);

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    targetAnchorRef.current = href;
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#D4A373]/20 py-3 shadow-[0_4px_25px_rgba(212,163,115,0.08)]"
            : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
          {/* Brand Logo with Image */}
          <Link
            href="#"
            className="group flex items-center gap-2.5 sm:gap-3 tracking-wide transition-transform duration-300 shrink-0 hover:scale-[1.01]"
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
            <span className="text-lg sm:text-xl xl:text-2xl text-[#24211D] tracking-tight font-bold flex items-center gap-1.5 whitespace-nowrap">
              FITNESS x&nbsp;<span className="whitespace-nowrap">FIT&nbsp;CLUB</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C58F78] ml-0.5" />
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center justify-center gap-4 2xl:gap-6 flex-1 mx-2">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] 2xl:text-xs font-semibold tracking-wider text-[#59534B] hover:text-[#C58F78] transition-colors relative py-1 group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#C58F78] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Social Icons & CTA Button */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* 4 Social Quick Links */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/70 border border-[#D4A373]/25 shadow-2xs">
              {SOCIAL_CHANNELS.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${item.name}: ${item.handle}`}
                  aria-label={item.name}
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[#59534B] hover:text-white transition-all duration-300 hover:scale-110 ${item.bgGradient}`}
                >
                  {item.id === "tiktok" && <TikTokIcon className="w-3.5 h-3.5" />}
                  {item.id === "facebook" && <FacebookIcon className="w-3.5 h-3.5" />}
                  {item.id === "fanpage" && <FanpageIcon className="w-3.5 h-3.5" />}
                  {item.id === "instagram" && <InstagramIcon className="w-3.5 h-3.5" />}
                </a>
              ))}
            </div>

            <a
              href="#consultation-form"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#C58F78] to-[#D4A373] text-white font-semibold text-[11px] xl:text-xs tracking-wider shadow-[0_4px_18px_rgba(197,143,120,0.35)] hover:shadow-[0_6px_25px_rgba(197,143,120,0.5)] transition-all duration-300 hover:scale-[1.02] whitespace-nowrap"
            >
              <span>ĐĂNG KÝ 3 BUỔI HỌC THỬ MIỄN PHÍ</span>
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
        className={`fixed inset-0 bg-[#FAF7F2] z-40 lg:hidden flex flex-col justify-between px-6 sm:px-8 py-20 overflow-y-auto overscroll-contain touch-pan-y transition-all duration-500 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-8"
        }`}
        style={{
          overscrollBehavior: "contain",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex flex-col gap-6">
          <a
            href="#"
            onClick={(e) => handleMobileNavClick(e, "#top")}
            className="flex items-center gap-2.5 cursor-pointer"
          >
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
          </a>

          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleMobileNavClick(e, item.href)}
                className="text-xl sm:text-2xl text-[#24211D] hover:text-[#C58F78] transition-colors font-semibold flex items-baseline gap-3 cursor-pointer"
              >
                <span className="text-xs text-[#877F75] font-normal">0{index + 1}</span>
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Social Links Grid */}
          <div className="pt-4 border-t border-[#D4A373]/20">
            <span className="text-[11px] font-bold text-[#C58F78] uppercase tracking-wider block mb-3">
              KẾT NỐI MẠNG XÃ HỘI
            </span>
            <div className="grid grid-cols-2 gap-2">
              {SOCIAL_CHANNELS.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#D4A373]/25 shadow-2xs"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#FAF7F2] flex items-center justify-center shrink-0">
                    {item.id === "tiktok" && <TikTokIcon className="w-4 h-4 text-black" />}
                    {item.id === "facebook" && <FacebookIcon className="w-4 h-4 text-[#1877F2]" />}
                    {item.id === "fanpage" && <FanpageIcon className="w-4 h-4 text-[#0866FF]" />}
                    {item.id === "instagram" && <InstagramIcon className="w-4 h-4 text-[#E1306C]" />}
                  </div>
                  <div className="leading-tight overflow-hidden">
                    <span className="text-xs font-bold text-[#24211D] block truncate">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-[#7A7369] block truncate">
                      {item.handle}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 border-t border-[#D4A373]/20 mt-6">
          <a
            href="#consultation-form"
            onClick={(e) => handleMobileNavClick(e, "#consultation-form")}
            className="flex items-center justify-center gap-2 w-full py-3.5 px-3 rounded-full bg-gradient-to-r from-[#C58F78] to-[#D4A373] text-white font-bold tracking-normal sm:tracking-wider text-[11px] min-[390px]:text-xs shadow-md text-center cursor-pointer"
          >
            <span className="whitespace-nowrap">ĐĂNG KÝ 3 BUỔI HỌC THỬ MIỄN PHÍ</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
          </a>
          <div className="text-center text-xs text-[#877F75] whitespace-nowrap">
            FITNESS x&nbsp;<span className="whitespace-nowrap">FIT&nbsp;CLUB</span>
          </div>
        </div>
      </div>
    </>
  );
}
