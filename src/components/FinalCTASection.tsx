"use client";

import Image from "next/image";
import { ArrowRight, Heart, Flower2, Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section
      id="contact"
      className="relative w-full py-28 sm:py-36 bg-[#FAF7F2] flex flex-col justify-center items-center overflow-hidden border-b border-[#D4A373]/20"
    >
      {/* Background Soft Studio Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25 mix-blend-multiply">
        <Image
          src="/images/sanctuary_studio.jpg"
          alt="Huyen Trang Yoga Sanctuary Studio"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-[#FAF7F2]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 text-center flex flex-col items-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#D4A373]/30 text-[#C58F78] font-sans-clean text-xs tracking-wider uppercase font-medium mb-6 shadow-xs">
          <Flower2 className="w-3.5 h-3.5" />
          <span>TRẢI NGHIỆM BUỔI ĐẦU TIÊN MIỄN PHÍ</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-[#24211D] font-medium leading-tight mb-6">
          Khám Phá Sức Mạnh Của{" "}
          <span className="italic text-[#C58F78]">Kháng Lực Trên Thảm</span>.
        </h2>

        <p className="font-sans-clean text-sm sm:text-base text-[#59534B] max-w-xl mb-8 leading-relaxed font-light">
          Chỉ 60 phút trên thảm TPE êm ái cùng hệ thống dây Booty-Band kháng lực để cảm nhận cơ mông căng tràn, vòng eo thắt nhỏ và cơ thể nhẹ bẫng không áp lực khớp gối.
        </p>

        {/* The CTA Button */}
        <a
          href="tel:0913234323"
          className="group inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-[#C58F78] to-[#D4A373] text-white font-sans-clean font-medium text-sm sm:text-base tracking-wide shadow-[0_8px_30px_rgba(197,143,120,0.45)] hover:shadow-[0_12px_40px_rgba(197,143,120,0.6)] hover:scale-[1.03] transition-all duration-300 text-center"
        >
          <span>ĐĂNG KÝ 3 BUỔI HỌC THỬ MIỄN PHÍ ( LIÊN HỆ )</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
        </a>

        {/* 🛡️ Cam Kết Hoàn Tiền 100% */}
        <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm font-sans-clean text-[#59534B]">
          <div className="w-5 h-5 rounded-full bg-[#8A9A78]/15 border border-[#8A9A78]/40 flex items-center justify-center text-[#8A9A78] shrink-0">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <span className="font-medium">
            <strong className="text-[#24211D] font-bold">Hoàn Tiền 100% Nếu Không Đạt Kết Quả</strong>
          </span>
        </div>

        {/* Contact Info Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full text-left">
          <a
            href="tel:0913234323"
            className="group p-5 rounded-2xl bg-white/90 border border-[#D4A373]/25 shadow-[0_4px_20px_rgba(212,163,115,0.08)] hover:shadow-md hover:border-[#C58F78] transition-all flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 text-[#C58F78] mb-2">
              <Phone className="w-4 h-4" />
              <span className="text-[11px] font-sans-clean font-bold tracking-wider uppercase">HOTLINE</span>
            </div>
            <span className="font-sans-clean font-bold text-[#24211D] text-base group-hover:text-[#C58F78] transition-colors">
              0913.234.323
            </span>
          </a>

          <a
            href="mailto:conghuyentrangfitness@gmail.com"
            className="group p-5 rounded-2xl bg-white/90 border border-[#D4A373]/25 shadow-[0_4px_20px_rgba(212,163,115,0.08)] hover:shadow-md hover:border-[#C58F78] transition-all flex flex-col justify-between"
          >
            <div className="flex items-center gap-2 text-[#C58F78] mb-2">
              <Mail className="w-4 h-4" />
              <span className="text-[11px] font-sans-clean font-bold tracking-wider uppercase">EMAIL</span>
            </div>
            <span className="font-sans-clean font-semibold text-[#24211D] text-xs group-hover:text-[#C58F78] transition-colors break-all">
              conghuyentrangfitness@gmail.com
            </span>
          </a>

          <div className="p-5 rounded-2xl bg-white/90 border border-[#D4A373]/25 shadow-[0_4px_20px_rgba(212,163,115,0.08)] flex flex-col justify-between">
            <div className="flex items-center gap-2 text-[#C58F78] mb-2">
              <MapPin className="w-4 h-4 shrink-0" />
              <span className="text-[11px] font-sans-clean font-bold tracking-wider uppercase">ĐỊA CHỈ</span>
            </div>
            <span className="font-sans-clean font-medium text-[#24211D] text-xs leading-snug">
              Hà Nội : Chung Cư Greend Pearl ( 378 Minh Khai )
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-white/90 border border-[#D4A373]/25 shadow-[0_4px_20px_rgba(212,163,115,0.08)] flex flex-col justify-between">
            <div className="flex items-center gap-2 text-[#C58F78] mb-2">
              <Clock className="w-4 h-4 shrink-0" />
              <span className="text-[11px] font-sans-clean font-bold tracking-wider uppercase">GIỜ MỞ CỬA</span>
            </div>
            <span className="font-sans-clean font-medium text-[#24211D] text-xs leading-snug">
              Thứ 2 – Thứ 7 (05:30 – 20:00)
            </span>
          </div>
        </div>

        {/* 🌐 4 Kênh Mạng Xã Hội Trực Tiếp */}
        <div className="mt-8 w-full p-6 sm:p-8 rounded-3xl bg-white/80 border border-[#D4A373]/25 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-[#D4A373]/15">
            <div className="text-center sm:text-left">
              <span className="text-[11px] font-bold text-[#C58F78] uppercase tracking-wider block">
                KÊNH TRUYỀN THÔNG CHÍNH THỨC
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#24211D]">
                Kết Nối & Nhắn Tin Trực Tiếp Với Huấn Luyện Viên
              </h3>
            </div>
            <span className="text-xs text-[#7A7369]">
              Nhấp vào biểu tượng để mở trang tương ứng
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@conghuyentrangfitness?_r=1&_t=ZS-9A3VM3SucaO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-white hover:bg-black text-[#24211D] hover:text-white border border-[#D4A373]/25 hover:border-black transition-all duration-300 group shadow-2xs hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shrink-0 shadow-xs">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.84 3.48 2.67 1.34-.04 2.53-.94 2.87-2.23.15-.55.18-1.13.18-1.7V4.54c0-1.5.01-3.02 0-4.52z" />
                </svg>
              </div>
              <div className="text-left overflow-hidden">
                <span className="text-[10px] font-bold text-[#C58F78] group-hover:text-white/80 block uppercase tracking-wider">
                  TIKTOK
                </span>
                <span className="text-xs font-bold block truncate">
                  @conghuyentrangfitness
                </span>
              </div>
            </a>

            {/* Facebook Cá Nhân */}
            <a
              href="https://www.facebook.com/Amycog"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-white hover:bg-[#1877F2] text-[#24211D] hover:text-white border border-[#D4A373]/25 hover:border-[#1877F2] transition-all duration-300 group shadow-2xs hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow-xs">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div className="text-left overflow-hidden">
                <span className="text-[10px] font-bold text-[#C58F78] group-hover:text-white/80 block uppercase tracking-wider">
                  FACEBOOK CÁ NHÂN
                </span>
                <span className="text-xs font-bold block truncate">
                  Amy Cương (Huyền Trang)
                </span>
              </div>
            </a>

            {/* Fanpage Fit Club */}
            <a
              href="https://www.facebook.com/profile.php?id=61594530699329&mibextid=wwXIfr&rdid=HtLNd9BdYmxqfA96&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AjUTeADVy%2F%3Fmibextid%3DwwXIfr#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-white hover:bg-[#0866FF] text-[#24211D] hover:text-white border border-[#D4A373]/25 hover:border-[#0866FF] transition-all duration-300 group shadow-2xs hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0866FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.02 11.48 5.7 13.75 5.7c1.09 0 2.25.2 2.25.2v2.47h-1.27c-1.23 0-1.61.76-1.61 1.54V12h2.78l-.44 3h-2.34v6.8c4.56-.93 8-4.96 8-9.8 0-5.52-4.48-10-10-10z" />
                </svg>
              </div>
              <div className="text-left overflow-hidden">
                <span className="text-[10px] font-bold text-[#C58F78] group-hover:text-white/80 block uppercase tracking-wider">
                  FANPAGE FIT CLUB
                </span>
                <span className="text-xs font-bold block truncate">
                  Fit Club - Tăng Cơ Giảm Mỡ
                </span>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/huyentrang0807?stkn=MW9oMW51bHh4ZnFubg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-white hover:bg-gradient-to-tr hover:from-[#FD1D1D] hover:via-[#E1306C] hover:to-[#833AB4] text-[#24211D] hover:text-white border border-[#D4A373]/25 hover:border-transparent transition-all duration-300 group shadow-2xs hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] text-white flex items-center justify-center shrink-0 shadow-xs">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div className="text-left overflow-hidden">
                <span className="text-[10px] font-bold text-[#C58F78] group-hover:text-white/80 block uppercase tracking-wider">
                  INSTAGRAM
                </span>
                <span className="text-xs font-bold block truncate">
                  @huyentrang0807
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Sub-caption */}
        <div className="mt-8 flex items-center gap-2 text-xs font-sans-clean text-[#877F75]">
          <Heart className="w-3.5 h-3.5 text-[#C58F78] fill-[#C58F78]" />
          <span>Lớp học giới hạn tối đa 8 thảm cá nhân để đảm bảo HLV nắn chỉnh từng tư thế tỉ mỉ</span>
        </div>
      </div>
    </section>
  );
}
