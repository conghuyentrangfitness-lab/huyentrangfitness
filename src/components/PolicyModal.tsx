"use client";

import { useEffect } from "react";
import { X, Shield, FileText, RefreshCw, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

export type PolicyTab = "privacy" | "terms" | "refund";

interface PolicyModalProps {
  isOpen: boolean;
  activeTab: PolicyTab;
  onClose: () => void;
  onTabChange: (tab: PolicyTab) => void;
}

export default function PolicyModal({
  isOpen,
  activeTab,
  onClose,
  onTabChange,
}: PolicyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#1C1A17]/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#FAF7F2] rounded-3xl shadow-2xl border border-[#D4A373]/30 overflow-hidden flex flex-col z-10">
        {/* Top Header */}
        <div className="px-6 sm:px-8 py-5 bg-white border-b border-[#D4A373]/20 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-sans-clean font-bold tracking-widest text-[#C58F78] uppercase">
              FITNESS x FIT CLUB // QUY ĐỊNH & CHÍNH SÁCH
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Đóng cửa sổ"
            className="w-9 h-9 rounded-full bg-[#FAF7F2] hover:bg-[#EEDCD3] text-[#24211D] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#D4A373]/20 bg-[#FAF8F5] shrink-0 overflow-x-auto no-scrollbar">
          <button
            onClick={() => onTabChange("privacy")}
            className={`flex-1 min-w-[200px] py-4 px-4 text-xs font-sans-clean font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 border-b-2 cursor-pointer ${
              activeTab === "privacy"
                ? "border-[#C58F78] text-[#C58F78] bg-white"
                : "border-transparent text-[#877F75] hover:text-[#24211D]"
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>CHÍNH SÁCH BẢO MẬT</span>
          </button>

          <button
            onClick={() => onTabChange("terms")}
            className={`flex-1 min-w-[200px] py-4 px-4 text-xs font-sans-clean font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 border-b-2 cursor-pointer ${
              activeTab === "terms"
                ? "border-[#C58F78] text-[#C58F78] bg-white"
                : "border-transparent text-[#877F75] hover:text-[#24211D]"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>ĐIỀU KHOẢN SỬ DỤNG</span>
          </button>

          <button
            onClick={() => onTabChange("refund")}
            className={`flex-1 min-w-[240px] py-4 px-4 text-xs font-sans-clean font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 border-b-2 cursor-pointer ${
              activeTab === "refund"
                ? "border-[#C58F78] text-[#C58F78] bg-white"
                : "border-transparent text-[#877F75] hover:text-[#24211D]"
            }`}
          >
            <RefreshCw className="w-4 h-4" />
            <span>ĐĂNG KÝ, HUỶ & HOÀN TIỀN</span>
          </button>
        </div>

        {/* Tab Content Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 font-sans-clean text-[#59534B] text-sm leading-relaxed space-y-6">
          {activeTab === "privacy" && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#24211D] font-bold mb-2">
                  CHÍNH SÁCH BẢO MẬT THÔNG TIN
                </h3>
                <p className="text-xs text-[#877F75]">
                  Cập nhật lần cuối: Năm 2026 // Áp dụng tại hệ thống FITNESS x FIT CLUB
                </p>
              </div>

              <p>
                <strong>FITNESS x FIT CLUB</strong> (do Co-Founder Công Huyền Trang đồng sáng lập) cam kết bảo mật 100% thông tin cá nhân của học viên và khách hàng khi đăng ký tư vấn, tham gia các khóa học Kháng Lực Trên Thảm và sử dụng dịch vụ tại website.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-[#D4A373]/20 shadow-2xs">
                  <h4 className="font-bold text-[#24211D] text-base mb-2">
                    1. Mục Đích Thu Thập Thông Tin
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li>Hỗ trợ tư vấn gói tập, xếp lịch tập trên thảm và đo chỉ số cơ thể InBody miễn phí.</li>
                    <li>Xây dựng phác đồ luyện tập và dinh dưỡng cá nhân hóa theo thể trạng từng học viên.</li>
                    <li>Thông báo lịch tập, nhắc nhở lịch học bù và cập nhật các ưu đãi đặc quyền của hội viên FIT CLUB.</li>
                    <li>Giải đáp thắc mắc, chăm sóc và theo dõi tiến độ giảm mỡ, siết cơ trong suốt khóa học.</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#D4A373]/20 shadow-2xs">
                  <h4 className="font-bold text-[#24211D] text-base mb-2">
                    2. Phạm Vi Thu Thập Thông Tin
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li>Thông tin liên hệ: Họ và tên, số điện thoại, khu vực đang sinh sống.</li>
                    <li>Thông tin thể trạng (khi học viên đồng ý đo InBody): Cân nặng, tỷ lệ mỡ, cơ bắp, mục tiêu vóc dáng (vòng eo, mông, khớp gối...).</li>
                    <li>Không bao giờ thu thập thông tin tài khoản ngân hàng, mật khẩu hoặc dữ liệu cá nhân nhạy cảm khác trên website.</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#D4A373]/20 shadow-2xs">
                  <h4 className="font-bold text-[#24211D] text-base mb-2">
                    3. Cam Kết Bảo Mật Tuyệt Đối & Không Chia Sẻ Dữ Liệu
                  </h4>
                  <p className="text-xs sm:text-sm">
                    Thông tin của học viên chỉ được sử dụng trong phạm vi quản lý và phục vụ chuyên môn tại FITNESS x FIT CLUB. Chúng tôi <strong>cam kết 100% không bán, trao đổi, chia sẻ hoặc tiết lộ</strong> thông tin cá nhân cho bất kỳ bên thứ ba nào vì mục đích thương mại hoặc quảng cáo ngoài hệ thống.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#D4A373]/20 shadow-2xs">
                  <h4 className="font-bold text-[#24211D] text-base mb-2">
                    4. Thời Gian Lưu Trữ & Quyền Của Học Viên
                  </h4>
                  <p className="text-xs sm:text-sm">
                    Dữ liệu được lưu trữ trong suốt thời gian học viên đồng hành cùng FIT CLUB. Học viên có toàn quyền yêu cầu kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ thông tin cá nhân bất kỳ lúc nào bằng cách liên hệ với chúng tôi qua Hotline hoặc Email chính thức.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "terms" && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#24211D] font-bold mb-2">
                  ĐIỀU KHOẢN SỬ DỤNG & NỘI QUY LỚP TẬP
                </h3>
                <p className="text-xs text-[#877F75]">
                  Quy định tham gia lớp Kháng Lực Trên Thảm tại FITNESS x FIT CLUB
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-[#D4A373]/20 shadow-2xs">
                  <h4 className="font-bold text-[#24211D] text-base mb-2">
                    1. Quy Định Lớp Học Giới Hạn Tối Đa 6 – 8 Học Viên
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li>Nhằm đảm bảo chất lượng giảng dạy cao nhất, mỗi ca tập chỉ nhận tối đa 6 đến 8 học viên trên các thảm tập riêng biệt.</li>
                    <li>Huấn luyện viên theo sát trực tiếp, nắn chỉnh từng góc nghiêng xương chậu, lưng và khớp gối để đảm bảo học viên tập đúng kỹ thuật, an toàn tuyệt đối.</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#D4A373]/20 shadow-2xs">
                  <h4 className="font-bold text-[#24211D] text-base mb-2">
                    2. Thời Gian & Chuẩn Bị Trước Buổi Tập
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li>Học viên vui lòng có mặt trước giờ tập 5 – 10 phút để tham gia trọn vẹn 10 phút khởi động bôi trơn dịch khớp (tránh chấn thương).</li>
                    <li>Trang phục: Quần áo thể thao ôm sát, co giãn thấm hút mồ hôi tốt.</li>
                    <li>Studio trang bị sẵn 100% thảm tập TPE cao cấp 8mm khử khuẩn, dây kháng lực Booty-Bands và tạ tay (1-2kg) cho từng học viên.</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#D4A373]/20 shadow-2xs">
                  <h4 className="font-bold text-[#24211D] text-base mb-2">
                    3. Lưu Ý Tình Trạng Sức Khỏe & Thể Lực
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    Học viên có tiền sử chấn thương cột sống, thoát vị đĩa đệm, đau khớp gối mãn tính hoặc đang mang thai cần thông báo chi tiết cho Huấn luyện viên trước buổi học để được thiết kế biến thể bài tập cô lập an toàn, êm ru 100% cho khớp.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#D4A373]/20 shadow-2xs">
                  <h4 className="font-bold text-[#24211D] text-base mb-2">
                    4. Bản Quyền Giáo Trình & Sở Hữu Trí Tuệ
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    Toàn bộ giáo trình bài tập Kháng Lực Trên Thảm, phác đồ dinh dưỡng, hình ảnh và tài liệu hướng dẫn thuộc quyền sở hữu trí tuệ của Co-Founder Công Huyền Trang và thương hiệu FITNESS x FIT CLUB. Mọi hành vi sao chép nhằm mục đích thương mại khi chưa có sự đồng ý đều bị nghiêm cấm.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "refund" && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#24211D] font-bold mb-2">
                  CHÍNH SÁCH ĐĂNG KÝ, HUỶ & HOÀN TIỀN
                </h3>
                <p className="text-xs text-[#877F75]">
                  Chính sách bảo vệ quyền lợi hội viên và cam kết hoàn tiền 100%
                </p>
              </div>

              {/* Special Guarantee Alert Box */}
              <div className="bg-gradient-to-r from-[#24211D] to-[#36312B] text-white p-6 rounded-2xl border border-[#C58F78]/50 shadow-md">
                <div className="flex items-center gap-2 text-[#D4A373] text-xs font-bold uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>CAM KẾT KẾT QUẢ 30 NGÀY</span>
                </div>
                <h4 className="font-serif-luxury text-xl sm:text-2xl text-white font-bold mb-2">
                  KHÔNG CÓ KẾT QUẢ – HOÀN TIỀN 100%
                </h4>
                <p className="text-xs sm:text-sm text-[#D4CFC9] leading-relaxed font-light">
                  Chúng tôi cam kết hoàn lại 100% học phí nếu sau 30 ngày tham gia nghiêm túc theo giáo trình mà học viên không đạt được bất kỳ sự cải thiện nào về chỉ số vòng eo, độ săn chắc cơ mông hoặc sức khỏe thể chất.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-[#D4A373]/20 shadow-2xs">
                  <h4 className="font-bold text-[#24211D] text-base mb-2">
                    1. Quy Định Đăng Ký Khóa Học
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li>Học viên có thể đăng ký trực tuyến qua website, hotline hoặc trực tiếp tại cơ sở.</li>
                    <li><strong>3 buổi học thử:</strong> Miễn phí 100% cho khách hàng mới trải nghiệm lần đầu tại studio.</li>
                    <li><strong>Thời hạn sử dụng các gói tập:</strong>
                      <ul className="list-circle pl-5 mt-1 space-y-1 text-xs text-[#59534B]">
                        <li>Combo 1 – Duy Trì: 30 buổi (thời hạn 45 ngày).</li>
                        <li>Combo 2 – Cơ Bản: 30 buổi (thời hạn 05 tháng).</li>
                        <li>Combo 3, 4, 5: 30 buổi (thời hạn theo từng hợp đồng đăng ký).</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#D4A373]/20 shadow-2xs">
                  <h4 className="font-bold text-[#24211D] text-base mb-2">
                    2. Chính Sách Huỷ Buổi Tập & Đổi Lịch Học
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li><strong>Hủy lịch tập trong ngày:</strong> Học viên vui lòng báo trước ít nhất <strong>02 tiếng</strong> so với giờ bắt đầu buổi tập để được bảo lưu và xếp lịch học bù miễn phí.</li>
                    <li>Nếu báo hủy muộn hơn 02 tiếng hoặc vắng mặt không báo trước, buổi tập đó sẽ được tính là đã sử dụng nhằm đảm bảo quyền lợi chỗ thảm cho các học viên khác.</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#D4A373]/20 shadow-2xs">
                  <h4 className="font-bold text-[#24211D] text-base mb-2">
                    3. Chính Sách Bảo Lưu Gói Học
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    Hỗ trợ bảo lưu gói tập miễn phí trong trường hợp công tác xa, đi du lịch dài ngày, ốm đau hoặc lý do sức khỏe có xác nhận. Thời gian bảo lưu tối đa từ 30 – 60 ngày tùy theo quy mô combo đã đăng ký.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#D4A373]/20 shadow-2xs">
                  <h4 className="font-bold text-[#24211D] text-base mb-2">
                    4. Điều Kiện & Quy Trình Hoàn Tiền 100%
                  </h4>
                  <div className="text-xs sm:text-sm space-y-2">
                    <p>
                      <strong>Điều kiện áp dụng hoàn tiền 100%:</strong>
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-xs">
                      <li>Học viên tham gia tối thiểu 80% số buổi theo lộ trình được thiết kế trong 30 ngày.</li>
                      <li>Thực hiện đầy đủ hướng dẫn dinh dưỡng và vận động đã được chuyên viên FIT CLUB hướng dẫn.</li>
                      <li>Được đo lường và theo dõi chỉ số cơ thể định kỳ cùng đội ngũ FIT CLUB.</li>
                    </ul>
                    <p className="pt-2">
                      <strong>Quy trình xử lý hoàn tiền:</strong> Học viên gửi yêu cầu qua Hotline <strong>0913.234.323</strong> hoặc Email <strong>conghuyentrangfitness@gmail.com</strong>. Khoản tiền hoàn lại sẽ được chuyển khoản trực tiếp vào tài khoản ngân hàng của học viên trong vòng <strong>03 – 05 ngày làm việc</strong> kể từ khi tiếp nhận.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Support Footer in Modal */}
          <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#D4A373]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
            <div>
              <span className="font-bold text-[#24211D] block">
                CẦN HỖ TRỢ TRỰC TIẾP VỀ QUY ĐỊNH & QUYỀN LỢI?
              </span>
              <span className="text-[#877F75] font-light">
                Chuyên viên FITNESS x FIT CLUB luôn sẵn sàng giải đáp mọi thắc mắc của bạn.
              </span>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:0913234323"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-[#C58F78] to-[#D4A373] text-white font-bold tracking-wider hover:opacity-90 transition-opacity"
              >
                Hotline: 0913.234.323
              </a>
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 sm:px-8 py-4 bg-white border-t border-[#D4A373]/20 flex items-center justify-between shrink-0 text-xs">
          <span className="text-[#877F75] hidden sm:inline">
            © 2026 FITNESS x FIT CLUB. Đã đăng ký bản quyền.
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-[#FAF7F2] hover:bg-[#EEDCD3] text-[#24211D] font-bold tracking-wider transition-colors ml-auto cursor-pointer"
          >
            ĐÓNG
          </button>
        </div>
      </div>
    </div>
  );
}
