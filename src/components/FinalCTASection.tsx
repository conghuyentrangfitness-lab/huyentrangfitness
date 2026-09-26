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

        {/* Sub-caption */}
        <div className="mt-8 flex items-center gap-2 text-xs font-sans-clean text-[#877F75]">
          <Heart className="w-3.5 h-3.5 text-[#C58F78] fill-[#C58F78]" />
          <span>Lớp học giới hạn tối đa 8 thảm cá nhân để đảm bảo HLV nắn chỉnh từng tư thế tỉ mỉ</span>
        </div>
      </div>
    </section>
  );
}
