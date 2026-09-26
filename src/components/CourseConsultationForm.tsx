"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Send,
  Phone,
  MapPin,
  User,
  Mail,
  Sparkles,
  ShieldCheck,
  Clock,
  Heart,
  AlertCircle,
  MessageCircle,
} from "lucide-react";

interface CourseConsultationFormProps {
  selectedPackage?: string;
  onPackageChange?: (pkgId: string) => void;
}

const PACKAGE_OPTIONS = [
  { id: "combo-1-duy-tri", label: "COMBO 1 – DUY TRÌ (2.520.000đ // 30 Buổi) ★ Yêu thích nhất" },
  { id: "combo-2-co-ban", label: "COMBO 2 – CƠ BẢN (4.170.000đ // 30 Buổi)" },
  { id: "combo-3-nang-cao", label: "COMBO 3 – NÂNG CAO (6.570.000đ // 30 Buổi)" },
  { id: "combo-4-vip", label: "COMBO 4 – VIP (7.770.000đ // 30 Buổi)" },
  { id: "combo-5-diamond", label: "COMBO 5 – DIAMOND (8.970.000đ // 30 Buổi)" },
  { id: "trial-3-sessions", label: "Đăng ký 3 buổi học thử miễn phí (Trải nghiệm)" },
];

export default function CourseConsultationForm({
  selectedPackage = "combo-1-duy-tri",
  onPackageChange,
}: CourseConsultationFormProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<{
    fullName?: string;
    phone?: string;
    email?: string;
    location?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const currentPkgLabel =
    PACKAGE_OPTIONS.find((p) => p.id === selectedPackage)?.label ||
    PACKAGE_OPTIONS[0].label;

  const validate = () => {
    const newErrors: {
      fullName?: string;
      phone?: string;
      email?: string;
      location?: string;
    } = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Vui lòng nhập họ và tên của bạn";
    }

    if (!phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else {
      const cleanPhone = phone.replace(/[\s.-]/g, "");
      if (!/^(0|\+84)[0-9]{8,11}$/.test(cleanPhone)) {
        newErrors.phone = "Số điện thoại không hợp lệ (tối thiểu 10 chữ số)";
      }
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Email không hợp lệ (ví dụ: ban@gmail.com)";
    }

    if (!location.trim()) {
      newErrors.location = "Vui lòng nhập khu vực đang sinh sống";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: fullName.trim(),
          phone: phone.trim(),
          email: email.trim() || undefined,
          location: location.trim(),
          packageName: currentPkgLabel,
          notes: notes.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(
          data.error ||
            "Không thể gửi thông tin lúc này. Bạn có thể nhấn nút gửi qua Email hoặc liên hệ Hotline 0913.234.323."
        );
      }
    } catch (err) {
      console.error("Lỗi khi gửi yêu cầu:", err);
      setSubmitError(
        "Lỗi kết nối. Bạn có thể bấm gửi trực tiếp qua Email hoặc liên hệ Hotline 0913.234.323."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFullName("");
    setPhone("");
    setEmail("");
    setLocation("");
    setNotes("");
    setErrors({});
    setSubmitError(null);
    setIsSubmitted(false);
  };

  const mailtoFallbackUrl = `mailto:conghuyentrangfitness@gmail.com?subject=${encodeURIComponent(
    `[ĐĂNG KÝ HỌC] ${fullName || "Học viên mới"} - ${phone || ""}`
  )}&body=${encodeURIComponent(
    `Xin chào Huấn Luyện Viên Công Huyền Trang,\n\nTôi muốn đăng ký tư vấn tập luyện tại FITNESS x FIT CLUB:\n- Họ và tên: ${fullName}\n- Số điện thoại: ${phone}\n- Email: ${email || "Chưa cung cấp"}\n- Khu vực: ${location}\n- Gói tập quan tâm: ${currentPkgLabel}\n- Ghi chú / Mục tiêu: ${notes || "Không có"}\n\nXin cảm ơn!`
  )}`;

  return (
    <div
      id="consultation-form"
      className="relative scroll-mt-28 w-full bg-white rounded-3xl border border-[#D4A373]/30 shadow-[0_20px_50px_rgba(212,163,115,0.14)] overflow-hidden my-14"
    >
      {/* Decorative gradient top accent line */}
      <div className="h-2 w-full bg-gradient-to-r from-[#C58F78] via-[#D4A373] to-[#8A9A78]" />

      <div className="p-8 sm:p-12 lg:p-14">
        {isSubmitted ? (
          /* SUCCESS STATE */
          <div className="flex flex-col items-center justify-center text-center py-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#8A9A78]/15 border border-[#8A9A78]/30 flex items-center justify-center text-[#8A9A78] mb-5 animate-pulse">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EEDCD3]/60 text-xs font-sans-clean text-[#C58F78] font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ĐĂNG KÝ THÀNH CÔNG</span>
            </div>

            <h3 className="font-serif-luxury text-2xl sm:text-4xl text-[#24211D] font-bold mb-3">
              Cảm Ơn Bạn, {fullName}!
            </h3>

            {/* Email dispatch confirmed notice box */}
            <div className="w-full bg-[#FAF3EC] border border-[#D4A373]/35 rounded-2xl p-4 sm:p-5 text-left mb-6 flex items-start gap-3 shadow-2xs">
              <div className="w-8 h-8 rounded-full bg-[#C58F78] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm font-sans-clean">
                <strong className="text-[#24211D] block font-semibold mb-1">
                  Thông tin đăng ký đã được gửi thành công đến hòm thư:
                </strong>
                <span className="text-[#C58F78] font-bold break-all">conghuyentrangfitness@gmail.com</span>
                <p className="text-[11px] sm:text-xs text-[#73695E] mt-1 font-light">
                  Huấn luyện viên Công Huyền Trang và ban cố vấn chuyên môn đã nhận được thông tin đăng ký của bạn.
                </p>
              </div>
            </div>

            <p className="font-sans-clean text-xs sm:text-sm text-[#59534B] leading-relaxed mb-6 font-light">
              Chúng tôi sẽ liên hệ trực tiếp qua số điện thoại{" "}
              <strong className="text-[#24211D] font-bold">{phone}</strong>
              {email ? (
                <>
                  {" "}và phản hồi qua email <strong className="text-[#24211D] font-semibold">{email}</strong>
                </>
              ) : null}{" "}
              để xếp lịch kiểm tra thể trạng và sắp xếp lớp thảm phù hợp nhất tại khu vực{" "}
              <strong className="text-[#24211D]">{location}</strong> trong vòng 15 phút.
            </p>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full mb-8">
              <a
                href={mailtoFallbackUrl}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1C1A17] hover:bg-[#2E2924] text-white text-xs font-semibold font-sans-clean transition-all shadow-sm"
              >
                <Mail className="w-3.5 h-3.5 text-[#D4A373]" />
                <span>Gửi thư qua Email cá nhân</span>
              </a>

              <a
                href="https://zalo.me/0913234323"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0068FF] hover:bg-[#0054CC] text-white text-xs font-semibold font-sans-clean transition-all shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Nhắn tin Zalo HLV (0913.234.323)</span>
              </a>
            </div>

            <div className="bg-[#FAF7F2] rounded-2xl p-5 border border-[#D4A373]/25 w-full mb-8 text-left text-xs font-sans-clean space-y-2 text-[#59534B]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8A9A78] shrink-0" />
                <span>Thông tin cá nhân của bạn được bảo mật tuyệt đối 100%.</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C58F78] shrink-0" />
                <span>Giờ làm việc: Thứ 2 – Thứ 7 (05:30 – 20:00).</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4A373] shrink-0" />
                <span>
                  Hotline hỗ trợ trực tiếp:{" "}
                  <a href="tel:0913234323" className="font-bold text-[#24211D] hover:underline">
                    0913.234.323
                  </a>
                </span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-full border border-[#D4A373]/40 text-[#24211D] hover:text-[#C58F78] hover:border-[#C58F78] font-sans-clean text-xs font-semibold tracking-wider transition-all cursor-pointer"
            >
              GỬI THÊM YÊU CẦU TƯ VẤN KHÁC
            </button>
          </div>
        ) : (
          /* FORM STATE */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Introduction & Trust Badges */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEDCD3]/60 text-xs font-sans-clean text-[#C58F78] font-bold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>TƯ VẤN LỘ TRÌNH MIỄN PHÍ</span>
                </div>

                <h3 className="font-serif-luxury text-2xl sm:text-4xl text-[#24211D] font-bold leading-tight mb-4">
                  Đăng Ký Tư Vấn & Xếp Lịch Tập
                </h3>

                <p className="font-sans-clean text-xs sm:text-sm text-[#59534B] leading-relaxed font-light mb-8">
                  Điền thông tin bên dưới để đăng ký. Hệ thống sẽ tự động chuyển thông tin về Email ban huấn luyện FIT CLUB để xếp lịch và tư vấn gói tập kháng lực trên thảm phù hợp nhất.
                </p>

                {/* Trust Badges */}
                <div className="space-y-4 pt-4 border-t border-[#D4A373]/20">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#D4A373]/30 flex items-center justify-center text-[#C58F78] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-sans-clean text-xs font-bold text-[#24211D] block">
                        Phản Hồi Nhanh Trong 15 Phút
                      </span>
                      <span className="font-sans-clean text-[11px] text-[#877F75] font-light">
                        Chuyên viên chủ động liên hệ giải đáp toàn bộ thắc mắc về giáo trình & lịch học.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#D4A373]/30 flex items-center justify-center text-[#8A9A78] shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-sans-clean text-xs font-bold text-[#24211D] block">
                        Bảo Mật Thông Tin 100%
                      </span>
                      <span className="font-sans-clean text-[11px] text-[#877F75] font-light">
                        Thông tin của bạn chỉ được sử dụng cho mục đích tư vấn xếp lớp tại FIT CLUB.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#D4A373]/30 flex items-center justify-center text-[#D4A373] shrink-0 mt-0.5">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-sans-clean text-xs font-bold text-[#24211D] block">
                        Tặng 01 Buổi Đo InBody & Phân Tích Cơ Thể
                      </span>
                      <span className="font-sans-clean text-[11px] text-[#877F75] font-light">
                        Đo lường lượng cơ xương, tỷ lệ mỡ dưới da và góc vẹo cột sống hoàn toàn miễn phí.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Hotline support */}
              <div className="mt-8 pt-6 border-t border-[#D4A373]/20 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#C58F78] to-[#D4A373] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#877F75] tracking-wider block font-sans-clean">
                    CẦN TƯ VẤN GẤP?
                  </span>
                  <a
                    href="tel:0913234323"
                    className="font-sans-clean font-bold text-sm text-[#24211D] hover:text-[#C58F78] transition-colors"
                  >
                    Hotline: 0913.234.323
                  </a>
                </div>
              </div>
            </div>

            {/* Right: The Actual Interactive Form */}
            <div className="lg:col-span-7 bg-[#FAF7F2]/80 backdrop-blur-xs rounded-2xl p-6 sm:p-9 border border-[#D4A373]/30">
              {submitError && (
                <div className="mb-5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-sans-clean flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
                    <span>{submitError}</span>
                  </div>
                  <a
                    href={mailtoFallbackUrl}
                    className="self-start inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium text-[11px] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Gửi ngay bằng ứng dụng Email cá nhân</span>
                  </a>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                {/* Field 1: Họ và tên (Bắt buộc) */}
                <div>
                  <label className="block font-sans-clean text-xs font-bold text-[#24211D] mb-1.5 uppercase tracking-wide">
                    Họ và tên <span className="text-red-500 font-bold">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#877F75]">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="fullNameInput"
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="Ví dụ: Nguyễn Thu Trang"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-xs sm:text-sm font-sans-clean text-[#24211D] placeholder:text-[#A89F91] focus:outline-none transition-all ${
                        errors.fullName
                          ? "border-red-400 ring-2 ring-red-100"
                          : "border-[#D4A373]/40 focus:border-[#C58F78] focus:ring-2 focus:ring-[#C58F78]/15"
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <span className="text-[11px] font-sans-clean text-red-500 mt-1 block">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Field 2: Số điện thoại (Bắt buộc) */}
                <div>
                  <label className="block font-sans-clean text-xs font-bold text-[#24211D] mb-1.5 uppercase tracking-wide">
                    Số điện thoại <span className="text-red-500 font-bold">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#877F75]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="Ví dụ: 0913 234 323"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-xs sm:text-sm font-sans-clean text-[#24211D] placeholder:text-[#A89F91] focus:outline-none transition-all ${
                        errors.phone
                          ? "border-red-400 ring-2 ring-red-100"
                          : "border-[#D4A373]/40 focus:border-[#C58F78] focus:ring-2 focus:ring-[#C58F78]/15"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <span className="text-[11px] font-sans-clean text-red-500 mt-1 block">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Field 3: Địa chỉ Email (Tùy chọn - Nhận xác nhận & lịch học) */}
                <div>
                  <label className="block font-sans-clean text-xs font-bold text-[#24211D] mb-1.5 uppercase tracking-wide">
                    Địa chỉ Email của bạn{" "}
                    <span className="text-[#877F75] font-normal lowercase">(nhận phản hồi qua thư)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#877F75]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="Ví dụ: thutrang@gmail.com"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-xs sm:text-sm font-sans-clean text-[#24211D] placeholder:text-[#A89F91] focus:outline-none transition-all ${
                        errors.email
                          ? "border-red-400 ring-2 ring-red-100"
                          : "border-[#D4A373]/40 focus:border-[#C58F78] focus:ring-2 focus:ring-[#C58F78]/15"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <span className="text-[11px] font-sans-clean text-red-500 mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Field 4: Khu vực đang sinh sống (Bắt buộc) */}
                <div>
                  <label className="block font-sans-clean text-xs font-bold text-[#24211D] mb-1.5 uppercase tracking-wide">
                    Khu vực đang sinh sống <span className="text-red-500 font-bold">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#877F75]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => {
                        setLocation(e.target.value);
                        if (errors.location) setErrors({ ...errors, location: undefined });
                      }}
                      placeholder="Ví dụ: Chung Cư Green Pearl, Hai Bà Trưng, Hà Nội..."
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-xs sm:text-sm font-sans-clean text-[#24211D] placeholder:text-[#A89F91] focus:outline-none transition-all ${
                        errors.location
                          ? "border-red-400 ring-2 ring-red-100"
                          : "border-[#D4A373]/40 focus:border-[#C58F78] focus:ring-2 focus:ring-[#C58F78]/15"
                      }`}
                    />
                  </div>
                  {errors.location && (
                    <span className="text-[11px] font-sans-clean text-red-500 mt-1 block">
                      {errors.location}
                    </span>
                  )}
                </div>

                {/* Field 5: Gói học quan tâm */}
                <div>
                  <label className="block font-sans-clean text-xs font-bold text-[#24211D] mb-1.5 uppercase tracking-wide">
                    Gói học bạn quan tâm
                  </label>
                  <select
                    value={selectedPackage}
                    onChange={(e) => {
                      if (onPackageChange) onPackageChange(e.target.value);
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#D4A373]/40 text-xs sm:text-sm font-sans-clean text-[#24211D] focus:outline-none focus:border-[#C58F78] focus:ring-2 focus:ring-[#C58F78]/15 transition-all"
                  >
                    {PACKAGE_OPTIONS.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Field 6: Ghi chú thêm / Mục tiêu (Không bắt buộc) */}
                <div>
                  <label className="block font-sans-clean text-xs font-semibold text-[#59534B] mb-1.5 uppercase tracking-wide">
                    Mục tiêu hoặc thời gian tiện nghe điện thoại{" "}
                    <span className="text-[#877F75] font-normal lowercase">(không bắt buộc)</span>
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ví dụ: Muốn giảm mỡ bụng sau sinh, rảnh sau 17h chiều..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D4A373]/40 text-xs sm:text-sm font-sans-clean text-[#24211D] placeholder:text-[#A89F91] focus:outline-none focus:border-[#C58F78] focus:ring-2 focus:ring-[#C58F78]/15 transition-all resize-none"
                  />
                </div>

                {/* Submit CTA Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#C58F78] to-[#D4A373] text-white font-sans-clean font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_8px_25px_rgba(197,143,120,0.4)] hover:shadow-[0_10px_35px_rgba(197,143,120,0.55)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">ĐANG GỬI ĐẾN EMAIL HUẤN LUYỆN VIÊN...</span>
                  ) : (
                    <>
                      <span>GỬI ĐĂNG KÝ VỀ EMAIL HUẤN LUYỆN VIÊN</span>
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] font-sans-clean text-[#877F75] pt-1">
                  <Mail className="w-3.5 h-3.5 text-[#C58F78]" />
                  <span>Email tiếp nhận: <strong className="text-[#24211D]">conghuyentrangfitness@gmail.com</strong></span>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
