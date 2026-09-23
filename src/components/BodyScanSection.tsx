"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Sparkles, Heart, Flame, ShieldCheck, Dumbbell, Compass } from "lucide-react";

interface HarmonyMetric {
  id: string;
  label: string;
  value: number;
  unit: string;
  icon: typeof Sparkles;
  description: string;
}

const HARMONY_METRICS: HarmonyMetric[] = [
  {
    id: "GLUTE_ACTIVATION",
    label: "CÔ LẬP CƠ MÔNG NHỠ & MÔNG LỚN",
    value: 94,
    unit: "%",
    icon: Sparkles,
    description: "Dây Booty-Band trên thảm giúp triệt tiêu hoàn toàn lực vào đùi trước, tập trung 100% áp lực nâng cao đỉnh mông quả đào.",
  },
  {
    id: "CORE_TVA",
    label: "SIẾT CHẶT CƠ BỤNG NGANG (TVA)",
    value: 91,
    unit: "%",
    icon: Compass,
    description: "Các tư thế nằm thảm triệt tiêu võng lưng thắt lưng, ép sát cơ bụng sâu để thắt eo con kiến và tạo rãnh bụng số 11.",
  },
  {
    id: "JOINT_SAFETY",
    label: "AN TOÀN & ÊM ÁI TUYỆT ĐỐI KHỚP GỐI",
    value: 100,
    unit: "%",
    icon: ShieldCheck,
    description: "100% bài tập nằm & quỳ trên thảm TPE 8mm, không tạ nặng nén cột sống, không bật nhảy gây áp lực lên khớp gối.",
  },
  {
    id: "EPOC_BURN",
    label: "ĐỐT MỠ NGẦM SUỐT 24H (HIỆU ỨNG EPOC)",
    value: 88,
    unit: "%",
    icon: Flame,
    description: "Thời gian cơ chịu áp lực căng liên tục (TUT) kích hoạt quá trình trao đổi chất sâu, tiếp tục tiêu hao calo sau buổi tập.",
  },
  {
    id: "POSTURE_SPINE",
    label: "NẮN CHỈNH TƯ THẾ & HẾT ĐAU LƯNG",
    value: 95,
    unit: "%",
    icon: Heart,
    description: "Kháng lực đối kháng giúp mở rộng bờ vai, sửa gù lưng văn phòng và phục hồi hoàn toàn các chèn ép nơi thắt lưng.",
  },
];

export default function BodyScanSection() {
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    GLUTE_ACTIVATION: 94,
    CORE_TVA: 91,
    JOINT_SAFETY: 100,
    EPOC_BURN: 88,
    POSTURE_SPINE: 95,
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number | null = null;
    const duration = 1600;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const nextCounts: { [key: string]: number } = {};
      HARMONY_METRICS.forEach((m) => {
        nextCounts[m.id] = Math.round(m.value * easeProgress);
      });
      setCounts(nextCounts);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 bg-[#F3ECE2] border-b border-[#D4A373]/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 text-xs font-sans-clean text-[#C58F78] font-medium uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KHOA HỌC THỂ HÌNH NỮ TRÊN THẢM</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#24211D] font-medium leading-tight">
            Hiệu Quả Vượt Trội Của Kháng Lực Trên Thảm
          </h2>

          <p className="font-sans-clean text-sm sm:text-base text-[#59534B] mt-4 leading-relaxed font-light">
            Không cần nâng tạ sắt nặng nhọc. Phương pháp Kháng Lực Trên Thảm tại FITNESS x&nbsp;<span className="whitespace-nowrap">FIT&nbsp;CLUB</span> sử dụng lực cản liên tục (TUT) của dây đàn hồi để điêu khắc từng thớ cơ mảnh mai, tôn vinh đường cong tự nhiên.
          </p>
        </div>

        {/* Metrics Rows */}
        <div className="flex flex-col divide-y divide-[#D4A373]/20 border-y border-[#D4A373]/20">
          {HARMONY_METRICS.map((metric, index) => {
            const currentCount = counts[metric.id] || metric.value;
            const Icon = metric.icon;
            return (
              <div
                key={metric.id}
                className="py-7 sm:py-9 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group transition-colors hover:bg-white/40 px-4 rounded-2xl"
              >
                {/* Index & Name */}
                <div className="md:col-span-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#C58F78] shadow-xs shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#24211D] group-hover:text-[#C58F78] transition-colors">
                      {metric.label}
                    </h3>
                    <p className="font-sans-clean text-xs sm:text-sm text-[#59534B] mt-1 font-light">
                      {metric.description}
                    </p>
                  </div>
                </div>

                {/* Progress Bar Line */}
                <div className="md:col-span-4 relative w-full h-[8px] bg-white/70 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#D4A373] via-[#C58F78] to-[#C58F78] transition-all duration-1000 ease-out"
                    style={{
                      width: inView ? `${metric.value}%` : `${metric.value}%`,
                    }}
                  />
                </div>

                {/* Number Stat */}
                <div className="md:col-span-3 text-left md:text-right flex items-baseline justify-start md:justify-end gap-1">
                  <span className="font-serif-luxury text-4xl sm:text-5xl text-[#24211D] font-medium leading-none">
                    {currentCount}
                  </span>
                  <span className="font-sans-clean text-xl text-[#C58F78] font-semibold">
                    {metric.unit}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
