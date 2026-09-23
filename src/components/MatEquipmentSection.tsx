"use client";

import Image from "next/image";
import { Sparkles, Shield, CheckCircle2, Layers, Award } from "lucide-react";

const EQUIPMENT_ITEMS = [
  {
    id: "mat",
    num: "01",
    name: "THẢM TẬP CHUYÊN DỤNG",
    badge: "BẢO VỆ XƯƠNG KHỚP",
    description: "Chất liệu cao su non cao cấp với độ êm vượt trội, chống trơn trượt 100%. Nâng đỡ hoàn hảo xương bánh chè, khuỷu tay và khớp háng trong suốt buổi tập.",
    features: ["Độ êm tối ưu giảm áp lực gối", "Bề mặt vân chống trượt an toàn", "Kháng khuẩn & chống thấm mồ hôi"],
  },
  {
    id: "booty-bands",
    num: "02",
    name: "BỘ DÂY KHÁNG LỰC VẢI BOOTY-BANDS",
    badge: "KÍCH HOẠT CƠ MÔNG TỐI ĐA",
    description: "Dây dệt cotton đàn hồi cao cấp hoàn toàn KHÔNG cuộn xoắn, KHÔNG kẹp da như dây cao su rẻ tiền. Đem lại lực căng liên tục để nâng cao đỉnh mông quả đào.",
    features: ["3 cấp độ: Light, Medium, Heavy", "Lớp cao su bám dính chống tuột bên trong", "Độ bền lực căng trên 10.000 lần co giãn"],
  },
  {
    id: "hand-weights",
    num: "03",
    name: "TẠ TAY ( 1 - 2 KG )",
    badge: "ĐIÊU KHẮC VÓC DÁNG",
    description: "Tạ tay nhỏ gọn 1 - 2 kg thiết kế riêng cho phái đẹp, tạo lực cản vừa vặn giúp siết cơ bắp tay thon gọn, tạo rãnh lưng nuột nà và hỗ trợ tăng cơ giảm mỡ tối đa.",
    features: ["Trọng lượng 1 - 2 kg chuẩn dáng nữ", "Lớp bọc silicone êm ái chống trơn", "Tác động sâu bắp tay, vai và lưng"],
  },
];

export default function MatEquipmentSection() {
  return (
    <section id="equipment" className="relative w-full py-24 sm:py-32 bg-[#F3ECE2] border-b border-[#D4A373]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#D4A373]/20 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 text-xs font-semibold text-[#C58F78] uppercase tracking-wider mb-3 shadow-xs">
              <Layers className="w-3.5 h-3.5" />
              <span>TRANG THIẾT BỊ ĐẠT CHUẨN QUỐC TẾ</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl text-[#24211D] font-bold tracking-tight">
              Bộ Dụng Cụ Kháng Lực Trên Thảm
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#59534B] leading-relaxed font-normal">
            Studio trang bị đồng bộ 100% thảm và phụ kiện kháng lực cao cấp nhập khẩu, mang đến trải nghiệm êm ái và an toàn tuyệt đối cho người phụ nữ.
          </p>
        </div>

        {/* 3 Equipment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {EQUIPMENT_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white/90 rounded-3xl p-7 sm:p-8 border border-[#D4A373]/25 flex flex-col justify-between shadow-xs hover:shadow-[0_15px_35px_rgba(197,143,120,0.18)] hover:border-[#C58F78] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-[#D4A373]">
                    {item.num}
                  </span>
                  <span className="text-[10px] font-bold tracking-wider text-[#C58F78] uppercase px-2.5 py-1 rounded-full bg-[#EEDCD3]/60">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#24211D] mb-3 leading-snug">
                  {item.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#59534B] leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Checklist */}
              <div className="pt-4 border-t border-[#D4A373]/15 space-y-2">
                {item.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-xs text-[#24211D]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8A9A78] shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Guarantee */}
        <div className="mt-10 p-6 rounded-3xl bg-white/70 border border-[#D4A373]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#59534B]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#EEDCD3] flex items-center justify-center text-[#C58F78] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-[#24211D] block">VỆ SINH TIỆT TRÙNG SAU MỖI CA TẬP</span>
              <span>100% thảm tập và dây kháng lực được khử khuẩn bằng tinh dầu thảo mộc tự nhiên thơm mát.</span>
            </div>
          </div>
          <span className="text-[#C58F78] font-bold whitespace-nowrap">AN TOÀN TUYỆT ĐỐI CHO LÀN DA</span>
        </div>
      </div>
    </section>
  );
}
