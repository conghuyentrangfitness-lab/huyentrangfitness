"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Sparkles, Clock, Flame, Shield, Compass, HeartHandshake, CheckCircle } from "lucide-react";

const TEMPLE_PILLARS = [
  {
    icon: Clock,
    code: "01",
    label: "10 PHÚT ĐẦU TIÊN",
    value: "KHỞI ĐỘNG ĐỘNG TRÊN THẢM",
    detail: "Chuỗi bài Cat-Cow, Bird-Dog và mở khớp hông trên thảm TPE 8mm để bôi trơn dịch khớp, kích hoạt hệ thần kinh vận động mà không gây áp lực lên đĩa đệm.",
  },
  {
    icon: Flame,
    code: "02",
    label: "20 PHÚT CAO ĐIỂM",
    value: "CÔ LẬP MÔNG VỚI BOOTY-BAND",
    detail: "Duy trì lực căng cơ liên tục (TUT) bằng dây kháng lực dệt. Các bài Glute Bridge, Clamshells và Donkey Kicks đẩy đỉnh mông lên cao mà không to đùi trước.",
  },
  {
    icon: Compass,
    code: "03",
    label: "18 PHÚT SIẾT LÕI",
    value: "TẠ CHÂN & RÃNH BỤNG SỐ 11",
    detail: "Đeo tạ chân 1.5kg kết hợp bóng mềm Pilates, tập trung khóa chặt cơ ngang bụng TVA qua chuỗi Banded Plank và Deadbug, thắt nhỏ vòng eo con kiến.",
  },
  {
    icon: Shield,
    code: "04",
    label: "12 PHÚT PHỤC HỒI",
    value: "DEEP BURNOUT & GIÃN CƠ THẢM",
    detail: "Kéo giãn Myofascial Release toàn thân trên thảm, hạ nhịp tim nhẹ nhàng, đào thải axit lactic giúp hôm sau cơ thể săn chắc, nhẹ nhõm không đau nhức.",
  },
  {
    icon: CheckCircle,
    code: "05",
    label: "TIÊU CHUẨN STUDIO",
    value: "TỐI ĐA 8 THẢM / LỚP HỌC",
    detail: "Không gian riêng tư, mỗi học viên 1 thảm TPE cao cấp. Huấn luyện viên luôn túc trực quan sát và chỉnh sửa từng góc nghiêng xương chậu cho bạn.",
  },
];

export default function MachineSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDist = windowHeight + rect.height;
      const currentDist = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, currentDist / totalDist));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textTranslateX = (scrollProgress - 0.5) * -200;

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 sm:py-36 bg-[#FAF7F2] border-b border-[#D4A373]/20 overflow-hidden"
    >
      {/* Serene Sanctuary Background Image with Gentle Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-multiply transition-transform duration-700 ease-out"
        style={{
          transform: `scale(${1 + scrollProgress * 0.08})`,
        }}
      >
        <Image
          src="/images/sanctuary_studio.jpg"
          alt="Huyen Trang Yoga Studio Sanctuary"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-105"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#D4A373]/30 text-xs font-sans-clean text-[#C58F78] font-medium uppercase tracking-wider mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>GIÁO TRÌNH CHUẨN HÓA 60 PHÚT</span>
        </div>

        {/* Large Graceful Serif Headline Marquee */}
        <div className="overflow-hidden pb-4">
          <h2
            className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.08] text-[#24211D] font-medium tracking-tight will-change-transform"
            style={{
              transform: `translateX(${textTranslateX}px)`,
              transition: "transform 0.1s linear",
            }}
          >
            Cấu Trúc 60 Phút Tập <span className="italic text-[#C58F78]">Kháng Lực Trên Thảm</span>.
          </h2>
        </div>

        <p className="mt-6 max-w-2xl font-sans-clean text-base text-[#59534B] font-light leading-relaxed">
          Mỗi phút giây trên thảm đều được tính toán theo khoa học sinh cơ: khởi động êm ái, tăng tải lực căng liên tục (TUT) để cô lập cơ mông và siết cơ bụng sâu, kết thúc bằng phục hồi giải phóng căng thẳng.
        </p>

        {/* 5 Mindful Pillars Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEMPLE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.code}
                className="bg-white/85 backdrop-blur-md rounded-3xl border border-[#D4A373]/25 p-8 shadow-xs hover:shadow-[0_15px_35px_rgba(197,143,120,0.18)] hover:border-[#C58F78] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-full bg-[#FAF7F2] border border-[#D4A373]/25 flex items-center justify-center text-[#C58F78]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-serif-luxury text-lg text-[#D4A373]">
                    // {pillar.code}
                  </span>
                </div>

                <div className="font-sans-clean text-xs font-semibold text-[#877F75] uppercase tracking-wider mb-1">
                  {pillar.label}
                </div>

                <h3 className="font-serif-luxury text-2xl text-[#24211D] font-medium mb-3">
                  {pillar.value}
                </h3>

                <p className="font-sans-clean text-xs sm:text-sm text-[#59534B] leading-relaxed font-light">
                  {pillar.detail}
                </p>
              </div>
            );
          })}

          {/* Inspirational Final Card */}
          <div className="bg-gradient-to-br from-[#C58F78] to-[#D4A373] text-white rounded-3xl p-8 flex flex-col justify-between shadow-md">
            <div>
              <div className="text-xs font-sans-clean tracking-wider font-semibold uppercase opacity-90 mb-3">
                // ĐẶC QUYỀN HỌC VIÊN
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium leading-snug mb-3">
                Thảm Riêng Biệt & Dụng Cụ Khử Khuẩn
              </h3>
              <p className="font-sans-clean text-xs sm:text-sm opacity-90 leading-relaxed font-light">
                Mỗi học viên có thảm cá nhân 8mm, bộ 3 dây Booty-Band kháng lực và tạ chân riêng biệt. Không gian máy lạnh ion âm thơm ngát tinh dầu cam ngọt.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/20 text-xs font-sans-clean font-medium tracking-wider flex items-center justify-between">
              <span className="whitespace-nowrap">FITNESS x&nbsp;<span className="whitespace-nowrap">FIT&nbsp;CLUB</span></span>
              <span className="whitespace-nowrap">TĂNG CƠ — GIẢM MỠ — ĐỘ BODY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
