"use client";

import { useState } from "react";
import { Phone, MessageCircle, Share2, X, ChevronRight } from "lucide-react";
import { SOCIAL_CHANNELS, TikTokIcon, FacebookIcon, FanpageIcon, InstagramIcon } from "./SocialLinks";

export default function FloatingSocialWidget() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      aria-label="Kênh liên hệ nhanh mạng xã hội"
      className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5"
    >
      {/* Expanded list of social channels */}
      {isOpen && (
        <div className="flex flex-col gap-2 animate-fadeIn">
          {/* Hotline Quick Call */}
          <a
            href="tel:0913234323"
            aria-label="Gọi hotline: 0913.234.323"
            className="group flex items-center justify-end gap-2.5 py-1.5 px-3 rounded-full bg-white/95 text-[#24211D] border border-[#D4A373]/35 shadow-[0_4px_20px_rgba(212,163,115,0.22)] hover:border-[#C58F78] hover:shadow-lg transition-all duration-300"
          >
            <span className="hidden sm:inline-block text-[11px] font-bold text-[#C58F78] group-hover:underline">
              Hotline: 0913.234.323
            </span>
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#C58F78] to-[#D4A373] text-white flex items-center justify-center shadow-xs group-hover:scale-108 transition-transform">
              <Phone className="w-4 h-4 animate-pulse" />
            </div>
          </a>

          {/* Social Icons List */}
          {SOCIAL_CHANNELS.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Mở trang ${item.name} (${item.handle})`}
              className="group flex items-center justify-end gap-2.5 py-1.5 px-3 rounded-full bg-white/95 text-[#24211D] border border-[#D4A373]/35 shadow-[0_4px_20px_rgba(212,163,115,0.2)] hover:border-[#C58F78] hover:shadow-lg transition-all duration-300"
            >
              <div className="hidden sm:flex flex-col items-end leading-tight">
                <span className="text-[11px] font-bold text-[#24211D] group-hover:text-[#C58F78] transition-colors">
                  {item.name}
                </span>
                <span className="text-[9px] text-[#7A7369] font-medium">
                  {item.handle}
                </span>
              </div>
              <div
                className={`w-9 h-9 rounded-full bg-[#FAF7F2] text-[#24211D] border border-[#D4A373]/30 flex items-center justify-center shadow-xs transition-all duration-300 group-hover:scale-110 ${item.bgGradient}`}
              >
                {item.id === "tiktok" && <TikTokIcon className="w-4 h-4" />}
                {item.id === "facebook" && <FacebookIcon className="w-4 h-4" />}
                {item.id === "fanpage" && <FanpageIcon className="w-4 h-4" />}
                {item.id === "instagram" && <InstagramIcon className="w-4 h-4" />}
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Main Toggle / Hub Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Thu nhỏ menu liên hệ" : "Mở menu liên hệ mạng xã hội"}
        className="group relative flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[#24211D] to-[#3B362F] text-white shadow-[0_6px_25px_rgba(0,0,0,0.35)] border border-[#D4A373]/40 hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C58F78] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C58F78]" />
        </span>
        <span className="text-xs font-bold tracking-wider uppercase text-[#E8D4C8] group-hover:text-white transition-colors">
          {isOpen ? "Thu Gọn" : "Liên Hệ & Mạng Xã Hội"}
        </span>
        {isOpen ? (
          <X className="w-3.5 h-3.5 text-[#E8D4C8]" />
        ) : (
          <MessageCircle className="w-3.5 h-3.5 text-[#E8D4C8]" />
        )}
      </button>
    </aside>
  );
}
