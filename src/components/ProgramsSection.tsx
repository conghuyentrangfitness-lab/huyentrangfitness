"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Heart, Flower2 } from "lucide-react";

interface Program {
  id: string;
  num: string;
  title: string;
  category: string;
  image: string;
  description: string;
  benefits: string;
  level: string;
  duration: string;
}

const PROGRAMS: Program[] = [
  {
    id: "mat-booty",
    num: "01",
    title: "MAT BOOTY & PEACH GLUTES",
    category: "CÔ LẬP MÔNG QUẢ ĐÀO",
    image: "/images/mat_booty_band.jpg",
    description: "Sử dụng dây Booty-Band kháng lực dệt cao cấp và tạ đeo chân 1.5kg để cô lập nhóm cơ mông lớn và mông nhỡ trên thảm, nâng cao đỉnh mông tròn đầy mà không lo to đùi trước.",
    benefits: "Nâng mông quả đào, đầy hõm hông, thon gọn đùi sau",
    level: "MỌI CẤP ĐỘ NỮ",
    duration: "60 PHÚT / BUỔI",
  },
  {
    id: "mat-core-waist",
    num: "02",
    title: "MAT DEEP CORE & WAIST SCULPT",
    category: "THẮT EO CON KIẾN",
    image: "/images/mat_core_plank.jpg",
    description: "Tập trung vào cơ bụng ngang (Transverse Abdominis) và cơ liên sườn với chuỗi Banded Plank, Deadbug kháng lực và bóng mềm Pilates để thu nhỏ vòng eo và tạo rãnh bụng số 11.",
    benefits: "Rãnh bụng số 11, thắt eo đồng hồ cát, phẳng bụng dưới",
    level: "CƠ BẢN ĐẾN NÂNG CAO",
    duration: "55 PHÚT / BUỔI",
  },
  {
    id: "mat-fullbody-band",
    num: "03",
    title: "FULL-BODY MAT BAND BURN",
    category: "ĐỐT MỠ TOÀN THÂN",
    image: "/images/mat_resistance_hero.jpg",
    description: "Tập luyện sức bền kháng lực toàn thân liên tục với hệ thống dây mini-band. Kích hoạt hiệu ứng tiêu hao oxy sau tập (EPOC) giúp cơ thể tiếp tục đốt mỡ ngầm suốt 24 giờ sau buổi tập.",
    benefits: "Săn chắc bắp tay, thon lưng sau, đốt mỡ thừa toàn thân",
    level: "NĂNG LƯỢNG CAO",
    duration: "60 PHÚT / BUỔI",
  },
  {
    id: "mat-posture",
    num: "04",
    title: "MAT POSTURE REALIGNMENT",
    category: "NẮN CHỈNH DÁNG & CỘT SỐNG",
    image: "/images/athlete_anatomy.jpg",
    description: "Ứng dụng dây kháng lực bản dẹt để tăng cường sức mạnh nhóm cơ lưng trên, cơ vai sau và ổn định vùng thắt lưng, nắn chỉnh gù lưng, mở khớp vai và tạo phong thái đứng kiêu sa.",
    benefits: "Sửa dáng gù lưng, mở rộng bờ vai thon, hết đau cổ gáy",
    level: "PHÙ HỢP DÂN VĂN PHÒNG",
    duration: "60 PHÚT / BUỔI",
  },
  {
    id: "mat-lowimpact-recover",
    num: "05",
    title: "LOW-IMPACT MAT RECOVERY",
    category: "AN TOÀN KHỚP & MẸ SAU SINH",
    image: "/images/mat_equipment.jpg",
    description: "Giáo trình 100% thực hiện trên thảm TPE 8mm êm ái, hoàn toàn không nhảy hay dằn xóc, bảo vệ tuyệt đối khớp gối và cổ chân, hỗ trợ mẹ sau sinh phục hồi khép cơ bụng tách.",
    benefits: "100% êm ái khớp gối, khép cơ bụng tách sau sinh",
    level: "NHẸ NHÀNG DỊU ÊM",
    duration: "50 PHÚT / BUỔI",
  },
];

export default function ProgramsSection() {
  const [activeId, setActiveId] = useState<string>("mat-booty");

  return (
    <section
      id="programs"
      className="relative w-full py-24 sm:py-36 bg-[#F3ECE2] border-b border-[#D4A373]/20 overflow-hidden"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#D4A373]/20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 text-xs font-sans-clean text-[#C58F78] font-medium uppercase tracking-wider mb-3">
              <Flower2 className="w-3.5 h-3.5" />
              <span>LỘ TRÌNH RÈN LUYỆN CHUYÊN BIỆT</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[#24211D] font-medium leading-tight">
              CÁC GÓI TẬP
            </h2>
          </div>
          <p className="max-w-md font-sans-clean text-sm text-[#59534B] leading-relaxed font-light">
            100% giáo trình được thiết kế trên thảm tập với dây Booty-Band và tạ chân. Tối ưu kích hoạt mông nhỡ và thắt eo con kiến, tăng cơ, giảm mỡ, độ body chuẩn tỷ lệ vàng.
          </p>
        </div>
      </div>

      {/* Program Panels Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col lg:flex-row gap-5 h-auto lg:h-[620px] w-full">
          {PROGRAMS.map((prog) => {
            const isActive = activeId === prog.id;
            return (
              <div
                key={prog.id}
                onMouseEnter={() => setActiveId(prog.id)}
                onClick={() => setActiveId(prog.id)}
                data-cursor-image
                className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-out rounded-3xl border ${
                  isActive
                    ? "lg:flex-[2.4] bg-[#FAF8F5] border-[#C58F78] shadow-[0_15px_40px_rgba(197,143,120,0.22)]"
                    : "lg:flex-1 bg-white/70 border-[#D4A373]/20 hover:border-[#D4A373]/50"
                } min-h-[420px] lg:min-h-0 flex flex-col justify-between p-7 sm:p-8`}
              >
                {/* Background Image with Soft Vignette */}
                <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className={`object-cover object-center transition-all duration-700 ease-out ${
                      isActive
                        ? "scale-105 brightness-[0.88] contrast-[1.05]"
                        : "scale-100 brightness-[0.65] contrast-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/90 via-[#1C1A17]/40 to-transparent" />
                </div>

                {/* Top Row: Number & Category */}
                <div className="relative z-10 flex items-start justify-between">
                  <span
                    className={`font-serif-luxury text-3xl sm:text-4xl font-normal transition-colors duration-500 ${
                      isActive ? "text-[#EEDCD3]" : "text-white/60"
                    }`}
                  >
                    {prog.num}
                  </span>
                  <div className="text-right">
                    <span className="font-sans-clean text-[11px] tracking-wider text-white/90 uppercase px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/20">
                      {prog.category}
                    </span>
                  </div>
                </div>

                {/* Bottom Panel Content */}
                <div className="relative z-10 mt-auto">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white tracking-wide font-medium">
                      {prog.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0 ml-2">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isActive
                        ? "max-h-60 opacity-100 pt-3"
                        : "max-h-60 lg:max-h-0 opacity-100 lg:opacity-0 pt-3 lg:pt-0"
                    }`}
                  >
                    <p className="font-sans-clean text-xs sm:text-sm text-white/85 leading-relaxed mb-4 font-light">
                      {prog.description}
                    </p>

                    <div className="pt-3 border-t border-white/20 flex flex-col gap-1 text-xs font-sans-clean">
                      <div className="text-[#EEDCD3] flex items-center gap-1.5 font-medium">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{prog.benefits}</span>
                      </div>
                      <div className="text-white/70 flex items-center justify-between text-[11px] mt-1">
                        <span>{prog.level}</span>
                        <span>{prog.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
