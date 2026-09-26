"use client";

import React from "react";

export interface SocialChannel {
  id: "tiktok" | "facebook" | "fanpage" | "instagram";
  name: string;
  badge: string;
  handle: string;
  url: string;
  desc: string;
  bgGradient: string;
  textColor: string;
  borderColor: string;
}

export const SOCIAL_CHANNELS: SocialChannel[] = [
  {
    id: "tiktok",
    name: "TikTok",
    badge: "KÊNH VIDEO",
    handle: "@conghuyentrangfitness",
    url: "https://www.tiktok.com/@conghuyentrangfitness?_r=1&_t=ZS-9A3VM3SucaO",
    desc: "Video hướng dẫn bài tập kháng lực thảm & thắt eo rãnh 11",
    bgGradient: "hover:bg-black hover:text-white hover:border-black",
    textColor: "text-[#24211D] group-hover:text-black",
    borderColor: "border-[#24211D]/30",
  },
  {
    id: "facebook",
    name: "Facebook Cá Nhân",
    badge: "HLV HUYỀN TRANG",
    handle: "Amy Cương (Huyền Trang)",
    url: "https://www.facebook.com/Amycog",
    desc: "Kết nối & trao đổi trực tiếp cùng Master Trainer",
    bgGradient: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
    textColor: "text-[#1877F2]",
    borderColor: "border-[#1877F2]/40",
  },
  {
    id: "fanpage",
    name: "Facebook Fanpage",
    badge: "TRANG CHÍNH THỨC",
    handle: "Fit Club - Tăng Cơ Giảm Mỡ",
    url: "https://www.facebook.com/profile.php?id=61594530699329&mibextid=wwXIfr&rdid=HtLNd9BdYmxqfA96&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AjUTeADVy%2F%3Fmibextid%3DwwXIfr#",
    desc: "Lịch tập, hình ảnh học viên & thông báo lớp học Fit Club",
    bgGradient: "hover:bg-[#0866FF] hover:text-white hover:border-[#0866FF]",
    textColor: "text-[#0866FF]",
    borderColor: "border-[#0866FF]/40",
  },
  {
    id: "instagram",
    name: "Instagram",
    badge: "HÌNH ẢNH & STORY",
    handle: "@huyentrang0807",
    url: "https://www.instagram.com/huyentrang0807?stkn=MW9oMW51bHh4ZnFubg%3D%3D&utm_source=qr",
    desc: "Hình ảnh vóc dáng, lối sống năng động & hậu trường tập luyện",
    bgGradient: "hover:bg-gradient-to-tr hover:from-[#FD1D1D] hover:via-[#E1306C] hover:to-[#833AB4] hover:text-white hover:border-transparent",
    textColor: "text-[#E1306C]",
    borderColor: "border-[#E1306C]/40",
  },
];

export function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.84 3.48 2.67 1.34-.04 2.53-.94 2.87-2.23.15-.55.18-1.13.18-1.7V4.54c0-1.5.01-3.02 0-4.52z" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function FanpageIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Facebook page flag + badge composition */}
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.02 11.48 5.7 13.75 5.7c1.09 0 2.25.2 2.25.2v2.47h-1.27c-1.23 0-1.61.76-1.61 1.54V12h2.78l-.44 3h-2.34v6.8c4.56-.93 8-4.96 8-9.8 0-5.52-4.48-10-10-10z" />
      <path d="M18.5 2.5a.5.5 0 0 0-.5.5v5.5a.5.5 0 0 0 .8.4l1.2-.9 1.2.9a.5.5 0 0 0 .8-.4V3a.5.5 0 0 0-.5-.5h-3z" fill="#D4A373" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function RenderSocialIcon({
  id,
  className = "w-5 h-5",
}: {
  id: string;
  className?: string;
}) {
  switch (id) {
    case "tiktok":
      return <TikTokIcon className={className} />;
    case "facebook":
      return <FacebookIcon className={className} />;
    case "fanpage":
      return <FanpageIcon className={className} />;
    case "instagram":
      return <InstagramIcon className={className} />;
    default:
      return null;
  }
}
