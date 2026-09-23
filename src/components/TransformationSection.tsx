"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal, Sparkles, CheckCircle2, Heart } from "lucide-react";

export default function TransformationSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging, handleMove]);

  return (
    <section
      id="transformation"
      className="relative w-full py-24 sm:py-36 bg-[#F3ECE2] border-b border-[#D4A373]/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 text-xs font-sans-clean text-[#C58F78] font-medium uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KẾT QUẢ THỰC CHỨNG TỪ HỌC VIÊN</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[#24211D] font-medium leading-tight">
            Chuyển Hóa Vóc Dáng Cùng Kháng Lực Thảm
          </h2>

          <p className="font-sans-clean text-sm sm:text-base text-[#59534B] mt-4 leading-relaxed font-light">
            Không cần gánh tạ nặng gây to thô cơ bắp. Lộ trình Kháng Lực Trên Thảm (Mat Resistance) với dây Booty-Band và tạ chân giúp phái đẹp siết rãnh bụng số 11, nâng cao đỉnh mông quả đào và mở rộng bờ vai thon thả.
          </p>
        </div>

        {/* Main Transformation Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Interactive Before / After Slider */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onTouchMove={handleTouchMove}
              className="relative h-[480px] sm:h-[600px] w-full bg-white rounded-3xl border border-[#D4A373]/30 select-none overflow-hidden cursor-ew-resize group shadow-[0_15px_45px_rgba(212,163,115,0.15)]"
            >
              {/* After Image (Full background) */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/transform_posture_after.jpg"
                  alt="Sau 12 tuần tập luyện Kháng Lực Trên Thảm - FITNESS x FIT CLUB"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover object-center filter contrast-105"
                />
                <div className="absolute top-6 right-6 z-10 bg-white/90 backdrop-blur-md border border-[#C58F78]/40 px-3.5 py-1.5 rounded-full text-xs font-sans-clean tracking-wide text-[#C58F78] uppercase font-semibold shadow-xs">
                  SAU 12 TUẦN // RÃNH EO 11 & MÔNG CAO
                </div>
              </div>

              {/* Before Image (Clipped overlay) */}
              <div
                className="absolute inset-0 z-10"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src="/images/transform_posture_before.jpg"
                  alt="Trước khi tập luyện - FITNESS x FIT CLUB"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover object-center filter contrast-100 brightness-95"
                />
                <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md border border-[#877F75]/30 px-3.5 py-1.5 rounded-full text-xs font-sans-clean tracking-wide text-[#59534B] uppercase font-semibold shadow-xs">
                  BAN ĐẦU // VÒNG EO CHÙNG, VÕNG LƯNG
                </div>
              </div>

              {/* Dividing Slider Handle Line */}
              <div
                className="absolute top-0 bottom-0 z-30 w-[3px] bg-white cursor-ew-resize shadow-md"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Central Drag Handle Pill */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-2 border-[#C58F78] text-[#C58F78] flex items-center justify-center shadow-md">
                  <MoveHorizontal className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Instruction Under Slider */}
            <div className="flex items-center justify-between text-xs font-sans-clean text-[#877F75] px-2">
              <span>← KÉO THANH TRƯỢT ĐỂ SO SÁNH ĐƯỜNG CONG →</span>
              <span>HỌC VIÊN LỚP KHÁNG LỰC TRÊN THẢM</span>
            </div>
          </div>

          {/* Right: Key Verified Performance Metrics */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="p-7 bg-white rounded-3xl border border-[#D4A373]/25 shadow-xs">
              <div className="font-sans-clean text-xs tracking-wider text-[#C58F78] uppercase font-semibold mb-2 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 fill-[#C58F78]" />
                <span>THỜI GIAN LỘ TRÌNH THẢM</span>
              </div>
              <div className="font-serif-luxury text-4xl sm:text-5xl text-[#24211D] font-medium">
                12 TUẦN
              </div>
              <p className="font-sans-clean text-xs text-[#59534B] mt-2 leading-relaxed">
                Tập đều đặn 3 buổi/tuần trên thảm. Dây Booty-Band tăng tải nhịp nhàng giúp siết săn cơ bắp mà không áp lực.
              </p>
            </div>

            <div className="p-7 bg-white rounded-3xl border border-[#D4A373]/25 shadow-xs">
              <div className="font-sans-clean text-xs tracking-wider text-[#C58F78] uppercase font-semibold mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>THẮT NHỎ VÒNG EO</span>
              </div>
              <div className="font-serif-luxury text-4xl sm:text-5xl text-[#C58F78] font-medium">
                -6.8 CM
              </div>
              <p className="font-sans-clean text-xs text-[#59534B] mt-2 leading-relaxed">
                Kích hoạt cơ bụng ngang TVA qua chuỗi bài Deadbug và Banded Plank ép phẳng bụng dưới và thon nhỏ vòng eo.
              </p>
            </div>

            <div className="p-7 bg-white rounded-3xl border border-[#D4A373]/25 shadow-xs">
              <div className="font-sans-clean text-xs tracking-wider text-[#C58F78] uppercase font-semibold mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8A9A78]" />
                <span>AN TOÀN KHỚP GỐI</span>
              </div>
              <div className="font-serif-luxury text-4xl sm:text-5xl text-[#24211D] font-medium">
                100% ÊM ÁI
              </div>
              <p className="font-sans-clean text-xs text-[#59534B] mt-2 leading-relaxed">
                Hoàn toàn không gánh tạ nén cột sống lưng hay khớp gối. Êm ái tuyệt đối cho dân văn phòng và mẹ sau sinh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
