"use client";

import Image from "next/image";
import { Quote, Heart, Sparkles, Star } from "lucide-react";

export default function SocialProofSection() {
  return (
    <section className="relative w-full py-24 sm:py-36 bg-[#F3ECE2] border-b border-[#D4A373]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Identifier */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 text-xs font-sans-clean text-[#C58F78] font-medium uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TIẾNG NÓI TỪ TRÁI TIM HỌC VIÊN</span>
        </div>

        {/* Large Quote Headline */}
        <div className="mb-14">
          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[#24211D] font-medium max-w-4xl leading-snug">
            &ldquo;Kháng lực trên thảm đã thay đổi hoàn toàn vóc dáng và sự tự tin của mình.&rdquo;
          </h2>
        </div>

        {/* Editorial Member Story Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white rounded-3xl border border-[#D4A373]/25 p-8 sm:p-12 shadow-[0_15px_45px_rgba(212,163,115,0.1)]">
          {/* Left: Beautiful Portrait Image */}
          <div
            className="lg:col-span-5 relative h-[400px] sm:h-[480px] rounded-2xl overflow-hidden shadow-sm"
            data-cursor-image
          >
            <Image
              src="/images/member_thutrang.jpg"
              alt="Học viên Thu Trang rạng rỡ sau khóa học Kháng Lực Trên Thảm"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A17]/70 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="font-sans-clean text-xs text-[#EEDCD3] uppercase tracking-wider block font-light">
                HỌC VIÊN LỚP THẢM // 6 THÁNG ĐỒNG HÀNH
              </span>
              <div className="font-serif-luxury text-2xl sm:text-3xl text-white mt-1">
                CHỊ THU TRANG (34 TUỔI)
              </div>
              <span className="font-sans-clean text-xs text-white/80">
                Marketing Director & Mẹ 2 con
              </span>
            </div>
          </div>

          {/* Right: The Case Story */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-[#D4A373] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4A373]" />
                ))}
                <span className="text-xs font-sans-clean text-[#877F75] ml-2">
                  Trải nghiệm 5/5 sao
                </span>
              </div>

              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-[#EEDCD3] absolute -top-4 -left-2 -z-10" />
                <p className="font-sans-clean text-sm sm:text-base text-[#59534B] leading-relaxed font-light">
                  &ldquo;Trước đây mình từng sợ tập gym vì gánh tạ nặng làm đùi to và rất đau mỏi thắt lưng. Khi tham gia lớp Kháng Lực Trên Thảm với dây Booty-Band của Master Công Huyền Trang, mình thực sự bất ngờ: chỉ nằm và quỳ trên thảm mà cơ mông bỏng rát cực đã! Sau 3 tháng, eo mình giảm 6.5cm lộ rõ rãnh số 11, đỉnh mông nâng cao săn chắc và đặc biệt là khớp gối êm ru 100%. Đây là phương pháp tập luyện nữ tính và hiệu quả nhất mình từng biết!&rdquo;
                </p>
              </div>

              {/* Stats highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#D4A373]/20">
                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#D4A373]/20 text-center">
                  <span className="font-sans-clean text-[10px] tracking-wider text-[#877F75] uppercase block">
                    VÒNG EO
                  </span>
                  <span className="font-serif-luxury text-2xl text-[#C58F78] font-semibold">
                    -6.5 CM
                  </span>
                </div>

                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#D4A373]/20 text-center">
                  <span className="font-sans-clean text-[10px] tracking-wider text-[#877F75] uppercase block">
                    ĐỈNH MÔNG
                  </span>
                  <span className="font-serif-luxury text-2xl text-[#24211D] font-semibold">
                    +3.8 CM
                  </span>
                </div>

                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#D4A373]/20 text-center">
                  <span className="font-sans-clean text-[10px] tracking-wider text-[#877F75] uppercase block">
                    KHỚP GỐI
                  </span>
                  <span className="font-serif-luxury text-2xl text-[#8A9A78] font-semibold">
                    100% ÊM
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#D4A373]/20 flex items-center justify-between text-xs font-sans-clean text-[#877F75]">
              <span className="whitespace-nowrap">HUẤN LUYỆN BỞI FITNESS x&nbsp;<span className="whitespace-nowrap">FIT&nbsp;CLUB</span></span>
              <span className="text-[#C58F78] font-medium flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 fill-[#C58F78]" /> LAN TỎA YÊU THƯƠNG
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
