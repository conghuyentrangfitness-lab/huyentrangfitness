"use client";

import { useState, useEffect } from "react";
import { Sparkles, ShieldCheck, Flame, Flower2, Dumbbell, Compass, Activity } from "lucide-react";

export default function PerformanceLabSection() {
  const [pulse, setPulse] = useState(62);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => 60 + Math.floor(Math.random() * 5));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="lab"
      className="relative w-full py-24 sm:py-36 bg-[#FAF7F2] border-b border-[#D4A373]/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#D4A373]/20 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 text-xs font-sans-clean text-[#C58F78] font-medium uppercase tracking-wider mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>KHOA HỌC VẬN ĐỘNG NỮ TRÊN THẢM</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[#24211D] font-medium leading-tight">
              Khoa Học Kháng Lực Trên Thảm
            </h2>
          </div>

          <div className="text-xs font-sans-clean text-[#877F75] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8A9A78] animate-pulse" />
            <span>TỐI ƯU ĐƯỜNG CONG // BẢO VỆ KHỚP XƯƠNG HOÀN TOÀN</span>
          </div>
        </div>

        {/* 6 Feminine Vitals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 01. Áp Lực Căng Liên Tục (TUT) */}
          <div className="bg-white/80 rounded-3xl border border-[#D4A373]/25 p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between text-xs font-sans-clean text-[#877F75] mb-2">
                <span>LỰC CĂNG LIÊN TỤC // 01</span>
                <Activity className="w-4 h-4 text-[#C58F78]" />
              </div>
              <div className="font-sans-clean text-xs tracking-wider text-[#59534B] uppercase font-semibold">
                TIME UNDER TENSION (TUT)
              </div>
              <div className="font-serif-luxury text-4xl sm:text-5xl text-[#24211D] font-medium mt-2 flex items-baseline gap-2">
                100%
                <span className="font-sans-clean text-base text-[#C58F78] font-normal">CẢ 2 CHIỀU</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#D4A373]/15">
              <div className="h-8 w-full relative overflow-hidden flex items-center">
                <svg
                  className="w-full h-7 stroke-[#C58F78] fill-none"
                  viewBox="0 0 240 30"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0,15 Q 30,5 60,15 T 120,15 T 180,15 T 240,15"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex justify-between text-[11px] font-sans-clean text-[#877F75] mt-1">
                <span>DÂY KHÁNG LỰC DỆT ĐÀN HỒI</span>
                <span>SIẾT CƠ SÂU</span>
              </div>
            </div>
          </div>

          {/* 02. An Toàn Khớp Gối Tuyệt Đối */}
          <div className="bg-white/80 rounded-3xl border border-[#D4A373]/25 p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between text-xs font-sans-clean text-[#877F75] mb-2">
                <span>BẢO VỆ CỘT SỐNG & GỐI // 02</span>
                <ShieldCheck className="w-4 h-4 text-[#8A9A78]" />
              </div>
              <div className="font-sans-clean text-xs tracking-wider text-[#59534B] uppercase font-semibold">
                TẢI TRỌNG NÉN LÊN CỘT SỐNG
              </div>
              <div className="font-serif-luxury text-4xl sm:text-5xl text-[#8A9A78] font-medium mt-2 flex items-baseline gap-2">
                0 KG
                <span className="font-sans-clean text-base text-[#59534B] font-normal">KHÔNG ÁP LỰC NÉN</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#D4A373]/15">
              <div className="w-full bg-[#FAF7F2] h-2 rounded-full overflow-hidden">
                <div className="bg-[#8A9A78] h-full w-[100%] rounded-full" />
              </div>
              <div className="flex justify-between text-[11px] font-sans-clean text-[#877F75] mt-2">
                <span>100% NẰM VÀ QUỲ THẢM</span>
                <span>AN TOÀN ĐĨA ĐỆM</span>
              </div>
            </div>
          </div>

          {/* 03. Đốt Mỡ Ngầm EPOC 24h */}
          <div className="bg-white/80 rounded-3xl border border-[#D4A373]/25 p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between text-xs font-sans-clean text-[#877F75] mb-2">
                <span>ĐỐT MỠ NGẦM // 03</span>
                <Flame className="w-4 h-4 text-[#C58F78]" />
              </div>
              <div className="font-sans-clean text-xs tracking-wider text-[#59534B] uppercase font-semibold">
                HIỆU ỨNG TIÊU THỤ OXY (EPOC)
              </div>
              <div className="font-serif-luxury text-4xl sm:text-5xl text-[#24211D] font-medium mt-2 flex items-baseline gap-2">
                24
                <span className="font-sans-clean text-base text-[#C58F78] font-normal">GIỜ SAU TẬP</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#D4A373]/15">
              <div className="flex items-center justify-between text-xs font-sans-clean text-[#59534B]">
                <span>TĂNG TỐC ĐỘ TRAO ĐỔI CHẤT</span>
                <span className="text-[#C58F78] font-medium">TIÊU HAO CALO</span>
              </div>
            </div>
          </div>

          {/* 04. Cô Lập Mông Quả Đào Không To Đùi */}
          <div className="bg-white/80 rounded-3xl border border-[#D4A373]/25 p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between text-xs font-sans-clean text-[#877F75] mb-2">
                <span>CÔ LẬP CƠ ĐỈNH CAO // 04</span>
                <Sparkles className="w-4 h-4 text-[#D4A373]" />
              </div>
              <div className="font-sans-clean text-xs tracking-wider text-[#59534B] uppercase font-semibold">
                KÍCH HOẠT CƠ MÔNG NHỠ
              </div>
              <div className="font-serif-luxury text-4xl sm:text-5xl text-[#24211D] font-medium mt-2 flex items-baseline gap-2">
                +94%
                <span className="font-sans-clean text-base text-[#D4A373] font-normal">CÔ LẬP CAO</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#D4A373]/15">
              <div className="flex items-center justify-between text-xs font-sans-clean text-[#59534B]">
                <span>ĐẦY HÕM HÔNG // NÂNG CAO ĐỈNH</span>
                <span className="text-[#8A9A78] font-medium">KHÔNG TO ĐÙI</span>
              </div>
            </div>
          </div>

          {/* 05. Siết Cơ Bụng Sâu & Khép Cơ Bụng Tách */}
          <div className="bg-white/80 rounded-3xl border border-[#D4A373]/25 p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between text-xs font-sans-clean text-[#877F75] mb-2">
                <span>CƠ SÀN CHẬU & LÕI // 05</span>
                <Compass className="w-4 h-4 text-[#C58F78]" />
              </div>
              <div className="font-sans-clean text-xs tracking-wider text-[#59534B] uppercase font-semibold">
                KHÓA CHẶT CƠ BỤNG NGANG (TVA)
              </div>
              <div className="font-serif-luxury text-4xl sm:text-5xl text-[#24211D] font-medium mt-2 flex items-baseline gap-2">
                SÂU
                <span className="font-sans-clean text-base text-[#C58F78] font-normal">PHẲNG BỤNG DƯỚI</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#D4A373]/15">
              <div className="flex items-center justify-between text-xs font-sans-clean text-[#59534B]">
                <span>KHÉP CƠ BỤNG TÁCH SAU SINH</span>
                <span className="text-[#C58F78] font-medium">RÃNH SỐ 11</span>
              </div>
            </div>
          </div>

          {/* 06. Tỉ Lệ Vàng Đồng Hồ Cát */}
          <div className="bg-white/80 rounded-3xl border border-[#D4A373]/25 p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between text-xs font-sans-clean text-[#877F75] mb-2">
                <span>TỈ LỆ THÂN HÌNH NỮ // 06</span>
                <Flower2 className="w-4 h-4 text-[#C58F78]" />
              </div>
              <div className="font-sans-clean text-xs tracking-wider text-[#59534B] uppercase font-semibold">
                TỈ LỆ EO TRÊN HÔNG (WHR)
              </div>
              <div className="font-serif-luxury text-4xl sm:text-5xl text-[#C58F78] font-medium mt-2 flex items-baseline gap-2">
                0.68
                <span className="font-sans-clean text-base text-[#59534B] font-normal">ĐỒNG HỒ CÁT</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#D4A373]/15">
              <div className="flex items-center justify-between text-xs font-sans-clean text-[#59534B]">
                <span>THẮT EO - NỞ MÔNG - THON ĐÙI</span>
                <span className="text-[#C58F78] font-medium">NỮ TÍNH DỊU DÀNG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
