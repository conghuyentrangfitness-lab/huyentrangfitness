"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Heart, Flower2, ShieldCheck } from "lucide-react";
import PolicyModal, { PolicyTab } from "./PolicyModal";
import { SOCIAL_CHANNELS, TikTokIcon, FacebookIcon, FanpageIcon, InstagramIcon } from "./SocialLinks";

export default function FooterSection() {
  const [policyModalOpen, setPolicyModalOpen] = useState(false);
  const [policyActiveTab, setPolicyActiveTab] = useState<PolicyTab>("privacy");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenPolicy = (tab: PolicyTab) => {
    setPolicyActiveTab(tab);
    setPolicyModalOpen(true);
  };

  return (
    <footer className="w-full bg-[#1C1A17] text-[#FAF7F2] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Top Brand & Back to top Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-14 border-b border-white/10 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-sans-clean text-[#D4A373] tracking-widest uppercase mb-3 whitespace-nowrap">
              <Flower2 className="w-3.5 h-3.5" />
              <span>FITNESS x&nbsp;<span className="whitespace-nowrap">FIT&nbsp;CLUB</span></span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-white font-medium whitespace-nowrap">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#D4A373]/40 shadow-sm shrink-0 bg-white">
                <Image
                  src="/images/logo.jpg"
                  alt="FITNESS x FIT CLUB Logo"
                  fill
                  sizes="48px"
                  className="object-cover object-center"
                />
              </div>
              <span>
                FITNESS x&nbsp;<span className="whitespace-nowrap">FIT&nbsp;CLUB</span><span className="text-[#C58F78]">.</span>
              </span>
            </div>
            <p className="font-sans-clean text-xs sm:text-sm text-[#A89F91] mt-2 font-light max-w-md">
              Hệ thống rèn luyện vóc dáng chuyên biệt cho phái đẹp: tăng cơ, giảm mỡ, độ body, thắt eo con kiến, nâng đỉnh mông quả đào.
            </p>

            {/* Quick Social Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5 mt-5">
              {SOCIAL_CHANNELS.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Mở trang ${item.name}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#D4A373] text-white hover:text-[#1C1A17] border border-white/15 hover:border-[#D4A373] text-xs font-medium transition-all duration-300 group shadow-2xs"
                >
                  {item.id === "tiktok" && <TikTokIcon className="w-3.5 h-3.5 text-[#FAF7F2] group-hover:text-[#1C1A17]" />}
                  {item.id === "facebook" && <FacebookIcon className="w-3.5 h-3.5 text-[#1877F2] group-hover:text-[#1C1A17]" />}
                  {item.id === "fanpage" && <FanpageIcon className="w-3.5 h-3.5 text-[#0866FF] group-hover:text-[#1C1A17]" />}
                  {item.id === "instagram" && <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C] group-hover:text-[#1C1A17]" />}
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start lg:self-end inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-xs font-sans-clean text-[#D8CCC0] hover:text-white hover:border-[#D4A373] transition-all group"
          >
            <span>VỀ ĐẦU TRANG</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D4A373] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* 3 Directory Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 py-14 border-b border-white/10 text-xs font-sans-clean">
          {/* Col 1: Các gói tập */}
          <div>
            <span className="text-[#D4A373] uppercase font-semibold tracking-wider block mb-4">
              // CÁC GÓI TẬP
            </span>
            <ul className="space-y-2.5 text-[#C4B9AA]">
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  COMBO 1 – DUY TRÌ
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  COMBO 2 – CƠ BẢN
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  COMBO 3 – NÂNG CAO
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  COMBO 4 – VIP
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  COMBO 5 – DIAMOND
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Liên kết */}
          <div>
            <span className="text-[#D4A373] uppercase font-semibold tracking-wider block mb-4">
              // TRẢI NGHIỆM STUDIO
            </span>
            <ul className="space-y-2.5 text-[#C4B9AA]">
              <li>
                <a href="#album" className="hover:text-white transition-colors font-semibold text-[#D4A373]">
                  Thư Viện Ảnh Lớp Học (24+ Ảnh)
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-white transition-colors">
                  Dụng Cụ Thảm & Dây Band
                </a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-white transition-colors">
                  Master Huấn Luyện Viên
                </a>
              </li>
              <li>
                <a href="#transformation" className="hover:text-white transition-colors">
                  Kết Quả Học Viên Lớp Thảm
                </a>
              </li>
              <li>
                <a href="#consultation-form" className="hover:text-white transition-colors">
                  Đăng Ký 3 Buổi Học Thử Miễn Phí
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Liên hệ Studio */}
          <div>
            <span className="text-[#D4A373] uppercase font-semibold tracking-wider block mb-4">
              // THÔNG TIN LIÊN HỆ
            </span>
            <div className="space-y-3 text-[#C4B9AA]">
              <p>
                <strong className="text-white">Hotline:</strong>{" "}
                <a href="tel:0913234323" className="hover:text-[#D4A373] transition-colors font-medium">
                  0913.234.323
                </a>
              </p>
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:conghuyentrangfitness@gmail.com" className="hover:text-[#D4A373] transition-colors break-all">
                  conghuyentrangfitness@gmail.com
                </a>
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">Địa chỉ:</strong>{" "}
                <span className="block mt-0.5 text-white/90">
                  Hà Nội : Chung Cư Greend Pearl ( 378 Minh Khai )
                </span>
              </p>
              <p className="pt-1 text-[11px] text-[#A89F91]">
                <strong className="text-white font-medium">Giờ mở cửa:</strong> Thứ 2 – Thứ 7 (05:30 – 20:00)
              </p>
            </div>
          </div>
        </div>

        {/* 3 Mục Chính Sách Hội Viên & Pháp Lý */}
        <div className="py-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-sans-clean">
          <div className="flex items-center gap-2 text-[#D4A373]">
            <ShieldCheck className="w-4 h-4 text-[#C58F78]" />
            <span className="font-bold uppercase tracking-wider">CHÍNH SÁCH & QUYỀN LỢI HỘI VIÊN:</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={() => handleOpenPolicy("privacy")}
              className="text-[#EEDCD3] hover:text-[#D4A373] font-medium tracking-wider uppercase transition-colors cursor-pointer"
            >
              CHÍNH SÁCH BẢO MẬT
            </button>
            <span className="text-white/20 hidden sm:inline">•</span>
            <button
              type="button"
              onClick={() => handleOpenPolicy("terms")}
              className="text-[#EEDCD3] hover:text-[#D4A373] font-medium tracking-wider uppercase transition-colors cursor-pointer"
            >
              ĐIỀU KHOẢN SỬ DỤNG
            </button>
            <span className="text-white/20 hidden sm:inline">•</span>
            <button
              type="button"
              onClick={() => handleOpenPolicy("refund")}
              className="text-[#EEDCD3] hover:text-[#D4A373] font-medium tracking-wider uppercase transition-colors cursor-pointer"
            >
              CHÍNH SÁCH ĐĂNG KÝ, HUỶ & HOÀN TIỀN
            </button>
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans-clean text-[#877F75]">
          <div>
            © 2026 FITNESS x&nbsp;<span className="whitespace-nowrap">FIT&nbsp;CLUB</span>. TẤT CẢ QUYỀN ĐƯỢC BẢO LƯU.
          </div>
          <div className="flex items-center gap-2">
            <span>KHÁNG LỰC TRÊN THẢM</span>
            <span>•</span>
            <span className="text-[#D4A373]">TĂNG CƠ — GIẢM MỠ — ĐỘ BODY</span>
            <Heart className="w-3.5 h-3.5 text-[#C58F78] fill-[#C58F78]" />
          </div>
        </div>
      </div>

      {/* Policy Modal Dialog */}
      <PolicyModal
        isOpen={policyModalOpen}
        activeTab={policyActiveTab}
        onClose={() => setPolicyModalOpen(false)}
        onTabChange={(tab) => setPolicyActiveTab(tab)}
      />
    </footer>
  );
}
