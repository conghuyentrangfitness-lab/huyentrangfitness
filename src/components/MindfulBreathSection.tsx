"use client";

import { useState, useEffect } from "react";
import { Sparkles, Wind, HeartHandshake } from "lucide-react";

type BreathPhase = "INHALE" | "HOLD" | "EXHALE";

export default function MindfulBreathSection() {
  const [phase, setPhase] = useState<BreathPhase>("INHALE");
  const [timer, setTimer] = useState(4);

  useEffect(() => {
    let currentPhase: BreathPhase = "INHALE";
    let timeLeft = 4;

    const interval = setInterval(() => {
      timeLeft -= 1;

      if (timeLeft <= 0) {
        if (currentPhase === "INHALE") {
          currentPhase = "HOLD";
          timeLeft = 4;
        } else if (currentPhase === "HOLD") {
          currentPhase = "EXHALE";
          timeLeft = 6;
        } else {
          currentPhase = "INHALE";
          timeLeft = 4;
        }
        setPhase(currentPhase);
      }

      setTimer(timeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getPhaseText = () => {
    switch (phase) {
      case "INHALE":
        return "Hít mở rộng khung sườn (Lateral Inhale)...";
      case "HOLD":
        return "Gồng chắc cơ bụng ngang TVA (Core Brace)...";
      case "EXHALE":
        return "Thở ép sườn & Siết căng cơ mục tiêu (Power Exhale)...";
    }
  };

  const getPhaseAdvice = () => {
    switch (phase) {
      case "INHALE":
        return "Mở rộng 2 bên lồng ngực, giữ bụng dưới phẳng, thả lỏng vai và cổ hoàn toàn.";
      case "HOLD":
        return "Khóa chặt áp lực ổ bụng để bảo vệ tuyệt đối đốt sống thắt lưng khi kéo dây kháng lực.";
      case "EXHALE":
        return "Thở ra bằng miệng, kéo hai dải sườn sát lại, siết căng cơ mông và rãnh bụng số 11.";
    }
  };

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#F3ECE2] border-y border-[#D4A373]/20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-[#D4A373]/30 text-xs font-sans-clean font-medium text-[#C58F78] uppercase tracking-wider mb-4 shadow-xs">
          <Wind className="w-3.5 h-3.5" />
          <span>KỸ THUẬT NỀN TẢNG // HƠI THỞ SIẾT CƠ LÕI TRÊN THẢM</span>
        </div>

        <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#24211D] tracking-tight">
          Hơi Thở Kích Hoạt Cơ Lõi Sâu (TVA)
        </h2>
        <p className="mt-3 text-sm sm:text-base font-sans-clean text-[#59534B] max-w-lg font-light leading-relaxed">
          Trong các bài tập kháng lực trên thảm, nhịp thở đúng chiếm 70% hiệu quả định hình vòng eo con kiến và bảo vệ thắt lưng không bị đau mỏi.
        </p>

        {/* The Animated Breathing Sphere */}
        <div className="relative my-14 w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
          {/* Outer expanding halo */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-1000 ease-in-out ${
              phase === "INHALE"
                ? "scale-110 bg-[#EEDCD3]/60 shadow-[0_0_50px_rgba(212,163,115,0.3)]"
                : phase === "HOLD"
                ? "scale-105 bg-[#EEDCD3]/40"
                : "scale-90 bg-[#F3ECE2]/50"
            }`}
          />

          {/* Middle glow ring */}
          <div
            className={`absolute w-52 h-52 sm:w-56 sm:h-56 rounded-full border border-[#D4A373]/40 transition-all duration-1000 ${
              phase === "INHALE"
                ? "scale-105 border-[#C58F78]"
                : phase === "HOLD"
                ? "scale-100 border-[#D4A373]"
                : "scale-95 border-[#D4A373]/20"
            }`}
          />

          {/* Central Inner Pill Container */}
          <div className="relative z-10 w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-white/90 backdrop-blur-md shadow-[0_10px_30px_rgba(197,143,120,0.2)] flex flex-col items-center justify-center p-4 border border-[#D4A373]/30">
            <span className="font-serif-luxury text-2xl sm:text-3xl text-[#24211D] font-medium">
              {timer}s
            </span>
            <span className="font-sans-clean text-xs font-semibold text-[#C58F78] uppercase tracking-wider mt-1">
              {phase}
            </span>
          </div>
        </div>

        {/* Phase Guidance text */}
        <div className="min-h-[60px] flex flex-col items-center justify-center">
          <div className="font-serif-luxury text-xl sm:text-2xl text-[#24211D] italic">
            &ldquo;{getPhaseText()}&rdquo;
          </div>
          <p className="font-sans-clean text-xs sm:text-sm text-[#877F75] mt-1 max-w-md">
            {getPhaseAdvice()}
          </p>
        </div>
      </div>
    </section>
  );
}
