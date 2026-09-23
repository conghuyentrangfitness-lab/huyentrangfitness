"use client";

import Image from "next/image";
import { ArrowRight, Flower2 } from "lucide-react";

const COACH = {
  id: "cong-huyen-trang",
  name: "CÔNG HUYỀN TRANG",
  role: "CO-FOUNDER & HEAD MASTER MAT RESISTANCE",
  image: "/images/coach_conghuyentrang.jpg",
  quote:
    "Kháng lực trên thảm là phương pháp tối ưu nhất cho phái đẹp: siết nhỏ rãnh bụng, nâng cao đỉnh mông quả đào mà không bao giờ lo to thô đùi hay đau khớp gối.",
  specs: [
    "CO-FOUNDER FITNESS x FIT CLUB",
    "KHÁNG LỰC BOOTY-BAND ĐIÊU KHẮC",
    "CƠ BỤNG NGANG TVA RÃNH 11",
    "MAT RESISTANCE NẮN CHỈNH DÁNG",
  ],
};

export default function TrainersSection() {
  return (
    <section
      id="trainers"
      className="relative w-full py-24 sm:py-36 bg-[#FAF7F2] border-b border-[#D4A373]/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#D4A373]/20 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 text-xs font-sans-clean text-[#C58F78] font-medium uppercase tracking-wider mb-3">
              <Flower2 className="w-3.5 h-3.5" />
              <span>CO-FOUNDER & MASTER HUẤN LUYỆN VIÊN</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[#24211D] font-medium leading-tight">
              Đội Ngũ Master Kháng Lực Thảm
            </h2>
          </div>

          <div className="flex items-center">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C58F78] to-[#D4A373] text-white font-semibold text-xs tracking-wider shadow-sm hover:scale-[1.02] transition-all"
            >
              <span>ĐĂNG KÝ TẬP CÙNG CO-FOUNDER</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Magazine Style Master Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Beautiful Coach Portrait */}
          <div
            className="lg:col-span-5 relative h-[480px] sm:h-[620px] rounded-3xl overflow-hidden shadow-[0_15px_45px_rgba(212,163,115,0.18)] border border-[#D4A373]/25 group"
            data-cursor-image
          >
            <Image
              src={COACH.image}
              alt={COACH.name}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/85 via-[#1C1A17]/20 to-transparent" />

            {/* Bottom Caption on Image */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="font-sans-clean text-xs tracking-widest text-[#EEDCD3] uppercase block font-medium">
                {COACH.role}
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-white mt-1">
                {COACH.name}
              </h3>
            </div>
          </div>

          {/* Right: Master Story & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              {/* Quote */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#C58F78] mb-8">
                <p className="font-serif-luxury text-2xl sm:text-3xl text-[#24211D] italic leading-snug">
                  &ldquo;{COACH.quote}&rdquo;
                </p>
                <span className="block mt-3 font-sans-clean text-xs tracking-wider text-[#877F75] uppercase">
                  TRIẾT LÝ HUẤN LUYỆN // CO-FOUNDER {COACH.name}
                </span>
              </div>

              {/* Specialization Tags */}
              <div className="mb-8">
                <span className="font-sans-clean text-xs tracking-wider text-[#C58F78] uppercase font-bold block mb-3">
                  CHUYÊN MÔN HÓA NỔI BẬT:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {COACH.specs.map((spec) => (
                    <div
                      key={spec}
                      className="px-4 py-2 rounded-full border border-[#D4A373]/30 bg-white text-xs font-sans-clean font-medium text-[#24211D] shadow-2xs"
                    >
                      {spec}
                    </div>
                  ))}
                </div>
              </div>

              {/* Exclusive Curriculum Card */}
              <div className="bg-white/80 rounded-3xl border border-[#D4A373]/25 p-7 sm:p-8 shadow-xs">
                <span className="font-sans-clean text-xs tracking-wider text-[#877F75] uppercase block font-semibold mb-2">
                  GIÁO TRÌNH ĐỘC BẢN
                </span>
                <h4 className="font-serif-luxury text-xl sm:text-2xl text-[#24211D] font-medium mb-3">
                  Kháng Lực Trên Thảm Đo Đạc Chuẩn Dáng
                </h4>
                <p className="font-sans-clean text-xs sm:text-sm text-[#59534B] leading-relaxed font-normal">
                  Trực tiếp đồng hành và thiết kế phác đồ tập luyện riêng biệt theo thể trạng, tỷ lệ xương khớp và mục tiêu vóc dáng của từng học viên cùng Co-Founder Công Huyền Trang.
                </p>
              </div>
            </div>

            {/* Bottom VIP CTA */}
            <div className="pt-8 mt-8 border-t border-[#D4A373]/20 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#877F75] font-sans-clean font-medium">
                Đồng hành và hướng dẫn trực tiếp cùng Co-Founder Công Huyền Trang
              </span>

              <a
                href="#pricing"
                className="inline-flex items-center gap-2 font-sans-clean text-xs tracking-wider text-[#C58F78] hover:text-[#24211D] font-bold transition-colors"
              >
                <span>ĐĂNG KÝ TẬP CÙNG MASTER CÔNG HUYỀN TRANG</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
