"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, Sparkles, Heart, ShieldCheck, Zap, Phone } from "lucide-react";
import { TikTokIcon, FacebookIcon, FanpageIcon, InstagramIcon } from "./SocialLinks";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about-mat" className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#FAF7F2]">
      {/* Background Mat Resistance Image Container with Gentle Parallax */}
      <div
        className="absolute inset-0 z-0 pointer-events-none will-change-transform"
        style={{
          transform: `translateY(${scrollY * 0.18}px)`,
        }}
      >
        <Image
          src="/images/mat_resistance_hero.jpg"
          alt="Lớp học Kháng Lực Trên Thảm - FITNESS x FIT CLUB"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.9] contrast-[1.05]"
        />
        {/* Soft Warm Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/95 via-[#FAF7F2]/75 to-transparent lg:w-4/5" />
      </div>

      {/* Top Header Tag */}
      <div className="relative z-10 pt-28 sm:pt-32 px-6 sm:px-12 max-w-7xl mx-auto w-full flex items-center justify-start text-xs text-[#877F75]">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#D4A373]/30 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#C58F78]" />
          <span className="text-[#24211D] font-semibold tracking-wide whitespace-nowrap">
            FITNESS x&nbsp;<span className="whitespace-nowrap">FIT&nbsp;CLUB</span>
          </span>
          <span className="text-[#D4A373]">•</span>
          <span className="hidden sm:inline">100% BÀI TẬP TRÊN THẢM & DÂY KHÁNG LỰC</span>
        </div>
      </div>

      {/* Main Headline Content */}
      <div className="relative z-10 px-6 sm:px-12 max-w-7xl mx-auto w-full my-auto flex flex-col items-start justify-center select-none py-10">
        {/* Subtitle */}
        <div className="inline-flex items-center gap-2 mb-4 text-xs tracking-[0.2em] font-semibold text-[#C58F78] uppercase">
          <Zap className="w-3.5 h-3.5 fill-[#C58F78]" />
          <span>PHƯƠNG PHÁP RÈN LUYỆN ĐƯỢC PHÁI ĐẸP YÊU THÍCH NHẤT</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.08] text-[#24211D] font-bold max-w-3xl tracking-tight uppercase">
          Tăng Cơ — Giảm Mỡ — <span className="text-[#C58F78]">Độ Body</span>.
        </h1>

        {/* Description focused purely on Mat Resistance */}
        <p className="mt-5 sm:mt-7 max-w-xl text-sm sm:text-base text-[#59534B] leading-relaxed font-normal">
          Không cần máy móc phòng gym cồng kềnh. Chỉ với chiếc thảm tập êm ái và chuỗi bài tập dây kháng lực mini-bands, tạ cổ chân — tận dụng lực căng liên tục để siết chặt vòng eo rãnh bụng 11, nâng cao mông quả đào mà hoàn toàn êm ái cho khớp gối.
        </p>

        {/* Feature Pills */}
        <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3">
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#D4A373]/30 text-xs font-semibold text-[#24211D] shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#8A9A78]" />
            <span>100% Bảo vệ khớp gối & cột sống</span>
          </div>
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#D4A373]/30 text-xs font-semibold text-[#24211D] shadow-2xs">
            <Heart className="w-3.5 h-3.5 text-[#C58F78] fill-[#C58F78]" />
            <span>Nâng mông quả đào không to đùi</span>
          </div>
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#D4A373]/30 text-xs font-semibold text-[#24211D] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
            <span>Siết rãnh bụng 11 & eo con kiến</span>
          </div>
        </div>

        {/* Action CTA Buttons */}
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#consultation-form"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C58F78] to-[#D4A373] text-white text-sm font-bold tracking-wide shadow-[0_6px_25px_rgba(197,143,120,0.4)] hover:shadow-[0_8px_30px_rgba(197,143,120,0.55)] transition-all duration-300 hover:scale-[1.02]"
          >
            <span>ĐĂNG KÝ 3 BUỔI HỌC THỬ MIỄN PHÍ ( LIÊN HỆ )</span>
            <Sparkles className="w-4 h-4" />
          </a>

          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#D4A373]/35 text-[#24211D] text-sm font-semibold hover:border-[#C58F78] hover:text-[#C58F78] transition-all"
          >
            <span>XEM CÁC GÓI TẬP ↓</span>
          </a>
        </div>

        {/* 🛡️ Cam Kết Hoàn Tiền 100% Nếu Không Đạt Kết Quả */}
        <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm font-sans-clean text-[#59534B]">
          <div className="w-5 h-5 rounded-full bg-[#8A9A78]/15 border border-[#8A9A78]/40 flex items-center justify-center text-[#8A9A78] shrink-0">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <span className="font-medium">
            <strong className="text-[#24211D] font-bold">Hoàn Tiền 100% Nếu Không Đạt Kết Quả</strong>
          </span>
        </div>

        {/* 📲 KÊNH LIÊN HỆ & MẠNG XÃ HỘI CHÍNH THỨC */}
        <div className="mt-5 pt-4 border-t border-[#D4A373]/30 w-full max-w-2xl">
          <div className="flex items-center gap-2 text-[11px] font-bold text-[#C58F78] uppercase tracking-wider mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#C58F78] animate-pulse" />
            <span>KÊNH LIÊN HỆ & MẠNG XÃ HỘI CHÍNH THỨC:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {/* Hotline */}
            <a
              href="tel:0913234323"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 text-[#24211D] border border-[#D4A373]/35 shadow-2xs hover:border-[#C58F78] hover:shadow-xs transition-all group"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#C58F78] to-[#D4A373] text-white flex items-center justify-center shrink-0">
                <Phone className="w-3 h-3 animate-pulse" />
              </div>
              <div className="leading-tight text-left">
                <span className="block text-[9px] text-[#877F75] font-semibold">HOTLINE</span>
                <span className="block text-xs font-bold text-[#24211D] group-hover:text-[#C58F78] transition-colors">0913.234.323</span>
              </div>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@conghuyentrangfitness?_r=1&_t=ZS-9A3VM3SucaO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 text-[#24211D] border border-[#D4A373]/35 shadow-2xs hover:border-black hover:bg-black hover:text-white transition-all group"
            >
              <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                <TikTokIcon className="w-3.5 h-3.5" />
              </div>
              <div className="leading-tight text-left">
                <span className="block text-[9px] text-[#877F75] group-hover:text-white/80 font-semibold">TIKTOK</span>
                <span className="block text-xs font-bold">@conghuyentrangfitness</span>
              </div>
            </a>

            {/* Facebook Cá Nhân */}
            <a
              href="https://www.facebook.com/Amycog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 text-[#24211D] border border-[#D4A373]/35 shadow-2xs hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all group"
            >
              <div className="w-6 h-6 rounded-full bg-[#1877F2] text-white flex items-center justify-center shrink-0">
                <FacebookIcon className="w-3.5 h-3.5" />
              </div>
              <div className="leading-tight text-left">
                <span className="block text-[9px] text-[#877F75] group-hover:text-white/80 font-semibold">FACEBOOK</span>
                <span className="block text-xs font-bold">Amy Cương</span>
              </div>
            </a>

            {/* Fanpage */}
            <a
              href="https://www.facebook.com/profile.php?id=61594530699329&mibextid=wwXIfr&rdid=HtLNd9BdYmxqfA96&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AjUTeADVy%2F%3Fmibextid%3DwwXIfr#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 text-[#24211D] border border-[#D4A373]/35 shadow-2xs hover:border-[#0866FF] hover:bg-[#0866FF] hover:text-white transition-all group"
            >
              <div className="w-6 h-6 rounded-full bg-[#0866FF] text-white flex items-center justify-center shrink-0">
                <FanpageIcon className="w-3.5 h-3.5" />
              </div>
              <div className="leading-tight text-left">
                <span className="block text-[9px] text-[#877F75] group-hover:text-white/80 font-semibold">FANPAGE</span>
                <span className="block text-xs font-bold">Fit Club</span>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/huyentrang0807?stkn=MW9oMW51bHh4ZnFubg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 text-[#24211D] border border-[#D4A373]/35 shadow-2xs hover:border-transparent hover:bg-gradient-to-tr hover:from-[#FD1D1D] hover:via-[#E1306C] hover:to-[#833AB4] hover:text-white transition-all group"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] text-white flex items-center justify-center shrink-0">
                <InstagramIcon className="w-3.5 h-3.5" />
              </div>
              <div className="leading-tight text-left">
                <span className="block text-[9px] text-[#877F75] group-hover:text-white/80 font-semibold">INSTAGRAM</span>
                <span className="block text-xs font-bold">@huyentrang0807</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Exploration Anchor */}
      <div className="relative z-10 pb-8 sm:pb-12 px-6 sm:px-12 max-w-7xl mx-auto w-full flex items-end justify-between">
        <a
          href="#equipment"
          className="group inline-flex items-center gap-2 text-xs tracking-wider text-[#877F75] hover:text-[#C58F78] transition-colors font-medium"
        >
          <span>CUỘN ĐỂ KHÁM PHÁ DỤNG CỤ TẬP</span>
          <ChevronDown className="w-4 h-4 text-[#C58F78] animate-bounce" />
        </a>

        <div className="text-right hidden sm:block">
          <div className="text-[11px] tracking-widest text-[#877F75] uppercase font-semibold">
            ĐẶC QUYỀN LỚP HỌC
          </div>
          <div className="text-sm font-bold text-[#C58F78]">
            Tối đa 6 – 8 học viên / thảm tập riêng biệt
          </div>
        </div>
      </div>
    </section>
  );
}
