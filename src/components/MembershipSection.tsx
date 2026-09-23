"use client";

import { useState } from "react";
import { Check, ArrowRight, Sparkles, Heart, ShieldCheck, Users, Target, Zap, Utensils, BookOpen, LineChart } from "lucide-react";
import CourseConsultationForm from "./CourseConsultationForm";

interface PlanTier {
  id: string;
  name: string;
  tag: string;
  icon: string;
  price: string;
  period: string;
  isFeatured?: boolean;
  features: string[];
}

const PACKAGES: PlanTier[] = [
  {
    id: "combo-1-duy-tri",
    name: "COMBO 1 – DUY TRÌ",
    tag: "ĐƯỢC YÊU THÍCH NHẤT",
    icon: "🥇",
    price: "2.520.000đ",
    period: "( 30 Buổi )",
    isFeatured: true,
    features: [
      "Tham gia 30 buổi tập",
      "Thời hạn sử dụng 45 ngày",
      "Bao gồm đầy đủ 06 quyền lợi vàng",
      "Hỗ trợ giảm mỡ, giảm cân khoa học",
      "Bổ sung dinh dưỡng sau tập, hỗ trợ duy trì cơ và phục hồi",
    ],
  },
  {
    id: "combo-2-co-ban",
    name: "COMBO 2 – CƠ BẢN",
    tag: "NỀN TẢNG VỮNG CHẮC",
    icon: "🥇",
    price: "4.170.000đ",
    period: "( 30 Buổi )",
    features: [
      "Tham gia 30 buổi tập",
      "Thời hạn sử dụng 05 tháng",
      "Bao gồm đầy đủ 06 quyền lợi vàng",
      "Hỗ trợ giảm mỡ, giảm cân khoa học",
      "Bổ sung dinh dưỡng sau tập, hỗ trợ duy trì cơ và phục hồi",
    ],
  },
  {
    id: "combo-3-nang-cao",
    name: "COMBO 3 – NÂNG CAO",
    tag: "SIẾT EO VÒNG BỤNG",
    icon: "🥈",
    price: "6.570.000đ",
    period: "( 30 Buổi )",
    features: [
      "Bao gồm toàn bộ quyền lợi của COMBO 2",
      "Tập trung cải thiện vòng eo, vùng bụng và vóc dáng",
      "Bổ sung bữa ăn dinh dưỡng tiện lợi",
      "Có thể sử dụng thay thế bữa sáng hoặc bữa phụ trong ngày",
    ],
  },
  {
    id: "combo-4-vip",
    name: "COMBO 4 – VIP",
    tag: "TĂNG CƠ & PHỤC HỒI",
    icon: "🥇",
    price: "7.770.000đ",
    period: "( 30 Buổi )",
    features: [
      "Bao gồm toàn bộ quyền lợi của COMBO 3",
      "Hỗ trợ tăng cơ và phục hồi cơ bắp sau tập",
      "Tối ưu quá trình giảm mỡ và định hình vóc dáng",
      "Hỗ trợ cải thiện các chỉ số chuyển hóa cơ thể",
    ],
  },
  {
    id: "combo-5-diamond",
    name: "COMBO 5 – DIAMOND",
    tag: "TOÀN DIỆN CAO CẤP",
    icon: "💎",
    price: "8.970.000đ",
    period: "( 30 Buổi )",
    features: [
      "Bao gồm toàn bộ quyền lợi của COMBO 4",
      "Chương trình tối ưu toàn diện về tập luyện và dinh dưỡng",
      "Theo dõi sát các chỉ số cơ thể",
      "Hỗ trợ đạt mục tiêu theo lộ trình cá nhân hóa",
      "Phù hợp với người muốn thay đổi vóc dáng và sức khỏe một cách nghiêm túc",
    ],
  },
];

const GOLDEN_BENEFITS = [
  {
    icon: Users,
    num: "01",
    title: "1. Hướng dẫn trực tiếp 1:1 trong mỗi buổi tập",
    desc: "Luôn có huấn luyện viên theo sát, chỉnh kỹ thuật, động tác và cường độ phù hợp với thể trạng.",
  },
  {
    icon: Target,
    num: "02",
    title: "2. Thiết kế lộ trình cá nhân hóa",
    desc: "Đo chỉ số cơ thể định kỳ, xây dựng kế hoạch tập luyện và dinh dưỡng theo mục tiêu riêng, đồng hành từ ngày đầu đến khi hoàn thành mục tiêu.",
  },
  {
    icon: Zap,
    num: "03",
    title: "3. Hỗ trợ tăng chuyển hóa và tiêu hóa",
    desc: "Được sử dụng trà hỗ trợ trong quá trình tập luyện, hỗ trợ tiêu hóa và duy trì năng lượng.",
  },
  {
    icon: Utensils,
    num: "04",
    title: "4. Bữa ăn dinh dưỡng cân bằng",
    desc: "Bổ sung đạm, khoáng chất và vi chất, ít calo, giàu dinh dưỡng, giúp no lâu và hỗ trợ kiểm soát cân nặng.",
  },
  {
    icon: BookOpen,
    num: "05",
    title: "5. Khóa học dinh dưỡng thực hành",
    desc: "Hướng dẫn cách xây dựng bữa ăn khoa học cho bản thân và gia đình, kiểm soát cân nặng và chăm sóc sức khỏe lâu dài.",
  },
  {
    icon: LineChart,
    num: "06",
    title: "6. Theo dõi kết quả định kỳ",
    desc: "Đo các chỉ số cơ thể thường xuyên và điều chỉnh lộ trình tập luyện, dinh dưỡng phù hợp với từng giai đoạn.",
  },
];

export default function MembershipSection() {
  const [selectedPackageId, setSelectedPackageId] = useState("combo-1-duy-tri");

  const handleSelectPackageAndScroll = (pkgId: string) => {
    setSelectedPackageId(pkgId);
    const formElement = document.getElementById("consultation-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        const nameInput = document.getElementById("fullNameInput");
        if (nameInput) nameInput.focus();
      }, 500);
    }
  };

  return (
    <section
      id="pricing"
      className="relative w-full py-24 sm:py-36 bg-[#FAF7F2] border-b border-[#D4A373]/20 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#D4A373]/20 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/70 text-xs font-sans-clean text-[#C58F78] font-semibold uppercase tracking-wider mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>5 GÓI TẬP FIT CLUB // TĂNG CƠ GIẢM MỠ</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[#24211D] font-medium leading-tight">
              CÁC GÓI TẬP
            </h2>
          </div>

          <p className="max-w-md font-sans-clean text-sm text-[#59534B] leading-relaxed font-light">
            Lựa chọn gói tập phù hợp để bắt đầu hành trình tăng cơ, giảm mỡ, độ body cùng FITNESS x&nbsp;<span className="whitespace-nowrap">FIT&nbsp;CLUB</span>.
          </p>
        </div>

        {/* 5 Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 items-stretch mb-10">
          {PACKAGES.map((pkg) => {
            const isFeatured = !!pkg.isFeatured;
            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl transition-all duration-300 border ${
                  isFeatured
                    ? "bg-[#FAF8F5] border-[#C58F78] shadow-[0_20px_45px_rgba(197,143,120,0.22)] scale-[1.02] z-10"
                    : "bg-white/85 border-[#D4A373]/25 hover:border-[#C58F78]/50 shadow-xs hover:shadow-md"
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-r from-[#C58F78] to-[#D4A373] text-white font-sans-clean text-[10px] font-semibold tracking-wider px-3 py-1 rounded-full uppercase shadow-xs flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-white" />
                    ĐƯỢC YÊU THÍCH NHẤT
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl" role="img" aria-label="package-icon">
                      {pkg.icon}
                    </span>
                    <span className="font-sans-clean text-[10px] tracking-wider text-[#C58F78] uppercase font-bold px-2 py-0.5 rounded-full bg-[#EEDCD3]/60">
                      {pkg.tag}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-lg sm:text-xl text-[#24211D] font-bold min-h-[3rem] flex items-center leading-snug">
                    {pkg.name}
                  </h3>

                  {/* Price Tag */}
                  <div className="flex flex-col gap-0.5 py-4 my-4 border-y border-[#D4A373]/20">
                    <span className="font-serif-luxury text-3xl sm:text-4xl text-[#24211D] font-bold">
                      {pkg.price}
                    </span>
                    <span className="font-sans-clean text-xs text-[#877F75] font-medium">
                      {pkg.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-6">
                    {pkg.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5">
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            isFeatured ? "text-[#C58F78]" : "text-[#8A9A78]"
                          }`}
                        />
                        <span className="font-sans-clean text-xs text-[#59534B] leading-relaxed">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <a
                  href="#consultation-form"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelectPackageAndScroll(pkg.id);
                  }}
                  className={`w-full py-3 px-4 rounded-full font-sans-clean text-xs font-semibold tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 group text-center mt-2 cursor-pointer ${
                    isFeatured
                      ? "bg-gradient-to-r from-[#C58F78] to-[#D4A373] text-white shadow-md hover:shadow-lg hover:scale-[1.02]"
                      : "bg-white text-[#24211D] border border-[#D4A373]/40 hover:border-[#C58F78] hover:text-[#C58F78]"
                  }`}
                >
                  <span>ĐĂNG KÝ NGAY</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>

        {/* 📋 Form Tư Vấn Đăng Ký Khoá Học (Bắt buộc: Họ tên, Số điện thoại, Khu vực đang sinh sống) */}
        <CourseConsultationForm
          selectedPackage={selectedPackageId}
          onPackageChange={(id) => setSelectedPackageId(id)}
        />

        {/* 06 QUYỀN LỢI VÀNG CỦA HỘI VIÊN FIT CLUB */}
        <div className="mb-20 pt-14 border-t border-[#D4A373]/25">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EEDCD3]/60 text-xs font-sans-clean text-[#C58F78] font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ĐẶC QUYỀN ĐỒNG HÀNH TOÀN DIỆN</span>
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-4xl text-[#24211D] font-bold leading-tight">
              06 Quyền Lợi Vàng Của Hội Viên FIT CLUB
            </h3>
            <p className="font-sans-clean text-xs sm:text-sm text-[#59534B] mt-3 font-light leading-relaxed">
              Mỗi học viên tại FIT CLUB đều được thụ hưởng đầy đủ hệ thống hỗ trợ khoa học từ tập luyện, sinh cơ học vận động đến chế độ dinh dưỡng hàng ngày.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GOLDEN_BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.num}
                  className="bg-white/85 rounded-3xl p-7 border border-[#D4A373]/25 shadow-xs hover:border-[#C58F78] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-2xl bg-[#FAF7F2] border border-[#D4A373]/30 flex items-center justify-center text-[#C58F78]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-serif-luxury text-2xl font-bold text-[#D4A373]/70">
                        {b.num}
                      </span>
                    </div>

                    <h4 className="font-sans-clean text-base font-bold text-[#24211D] mb-3 leading-snug">
                      {b.title}
                    </h4>

                    <p className="font-sans-clean text-xs sm:text-sm text-[#59534B] leading-relaxed font-light">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 🛡️ CAM KẾT KẾT QUẢ 30 NGÀY */}
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 bg-gradient-to-br from-[#24211D] via-[#2F2B26] to-[#1C1A17] text-white shadow-[0_20px_50px_rgba(36,33,29,0.3)]">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            {/* Shield Icon */}
            <div className="w-14 h-14 rounded-full bg-white/10 border border-[#C58F78]/50 flex items-center justify-center text-[#C58F78] mb-5 shadow-sm">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-sans-clean text-[#D4A373] tracking-widest uppercase font-semibold mb-3">
              <span>BẢO HÀNH KẾT QUẢ TẬP LUYỆN</span>
            </div>

            <h3 className="font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-4">
              CAM KẾT KẾT QUẢ 30 NGÀY
            </h3>

            <p className="font-sans-clean text-xs sm:text-sm text-[#D4CFC9] leading-relaxed max-w-2xl font-light mb-8">
              Tham gia đúng số buổi theo lộ trình, thực hiện đầy đủ hướng dẫn về dinh dưỡng và vận động, đồng thời được đội ngũ FIT CLUB theo dõi và hỗ trợ xuyên suốt.
            </p>

            {/* Money-back Guarantee Highlight Box */}
            <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl border border-[#C58F78]/40 p-6 sm:p-8 mb-8">
              <span className="block font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-[#D4A373] font-bold tracking-wide">
                KHÔNG CÓ KẾT QUẢ – HOÀN TIỀN 100%
              </span>
              <span className="block font-sans-clean text-xs sm:text-sm text-[#A89F91] mt-2 font-light">
                Áp dụng khi thực hiện đúng chương trình và đáp ứng đầy đủ các điều kiện cam kết.
              </span>
            </div>

            {/* Action CTA Button */}
            <a
              href="#consultation-form"
              onClick={(e) => {
                e.preventDefault();
                handleSelectPackageAndScroll("trial-3-sessions");
              }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#C58F78] to-[#D4A373] text-white font-sans-clean font-bold text-xs sm:text-sm tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <span>ĐĂNG KÝ 3 BUỔI HỌC THỬ MIỄN PHÍ ( LIÊN HỆ )</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
