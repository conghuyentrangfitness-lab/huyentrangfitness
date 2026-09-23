"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Shield,
  FileText,
  RefreshCw,
  CheckCircle2,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
} from "lucide-react";
import { PolicyTab } from "@/components/PolicyModal";

function PolicyContent() {
  const searchParams = useSearchParams();
  const initialTab = (searchParams.get("tab") as PolicyTab) || "privacy";
  const [activeTab, setActiveTab] = useState<PolicyTab>(initialTab);

  useEffect(() => {
    const tabParam = searchParams.get("tab") as PolicyTab;
    if (tabParam && ["privacy", "terms", "refund"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-10 py-12">
      {/* Tab Navigation */}
      <div className="flex border-b border-[#D4A373]/25 bg-white rounded-2xl p-1.5 shadow-xs mb-10 overflow-x-auto no-scrollbar">
        <button
          onClick={() => setActiveTab("privacy")}
          className={`flex-1 min-w-[200px] py-3.5 px-4 rounded-xl text-xs font-sans-clean font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === "privacy"
              ? "bg-[#FAF7F2] text-[#C58F78] shadow-xs border border-[#D4A373]/30"
              : "text-[#877F75] hover:text-[#24211D]"
          }`}
        >
          <Shield className="w-4 h-4" />
          <span>CHÍNH SÁCH BẢO MẬT</span>
        </button>

        <button
          onClick={() => setActiveTab("terms")}
          className={`flex-1 min-w-[200px] py-3.5 px-4 rounded-xl text-xs font-sans-clean font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === "terms"
              ? "bg-[#FAF7F2] text-[#C58F78] shadow-xs border border-[#D4A373]/30"
              : "text-[#877F75] hover:text-[#24211D]"
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>ĐIỀU KHOẢN SỬ DỤNG</span>
        </button>

        <button
          onClick={() => setActiveTab("refund")}
          className={`flex-1 min-w-[240px] py-3.5 px-4 rounded-xl text-xs font-sans-clean font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === "refund"
              ? "bg-[#FAF7F2] text-[#C58F78] shadow-xs border border-[#D4A373]/30"
              : "text-[#877F75] hover:text-[#24211D]"
          }`}
        >
          <RefreshCw className="w-4 h-4" />
          <span>ĐĂNG KÝ, HUỶ & HOÀN TIỀN</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-3xl border border-[#D4A373]/30 p-8 sm:p-12 shadow-sm font-sans-clean text-[#59534B] text-sm leading-relaxed space-y-6">
        {activeTab === "privacy" && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-[#D4A373]/20 pb-4">
              <span className="text-xs font-bold text-[#C58F78] uppercase tracking-wider block mb-1">
                FITNESS x FIT CLUB // BẢO MẬT THÔNG TIN
              </span>
              <h1 className="font-serif-luxury text-3xl sm:text-4xl text-[#24211D] font-bold">
                Chính Sách Bảo Mật Thông Tin
              </h1>
              <p className="text-xs text-[#877F75] mt-1">
                Áp dụng đối với học viên và khách hàng quan tâm đến chương trình Kháng Lực Trên Thảm
              </p>
            </div>

            <p>
              <strong>FITNESS x FIT CLUB</strong> (do Co-Founder Công Huyền Trang đồng sáng lập) luôn đặt quyền riêng tư và sự an tâm của học viên lên hàng đầu. Bản chính sách bảo mật này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ dữ liệu cá nhân của bạn.
            </p>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D4A373]/20">
                <h3 className="font-bold text-[#24211D] text-base mb-2">
                  1. Mục Đích Thu Thập Dữ Liệu
                </h3>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                  <li>Tư vấn chi tiết về giáo trình kháng lực trên thảm và xếp lịch tập phù hợp theo thể trạng.</li>
                  <li>Tặng và thực hiện buổi đo chỉ số cơ thể InBody (tỷ lệ mỡ, cơ, độ vẹo cột sống) miễn phí.</li>
                  <li>Lên kế hoạch dinh dưỡng và theo dõi lộ trình siết eo, nâng đỉnh mông 30 ngày.</li>
                  <li>Thông báo lịch tập, gửi lời nhắc chăm sóc cơ bắp và hỗ trợ giải đáp kỹ thuật 24/7.</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D4A373]/20">
                <h3 className="font-bold text-[#24211D] text-base mb-2">
                  2. Dữ Liệu Thu Thập
                </h3>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                  <li><strong>Họ và tên:</strong> Để tiện liên hệ xưng hô và chuẩn bị hồ sơ học viên.</li>
                  <li><strong>Số điện thoại:</strong> Để chuyên viên gọi điện tư vấn và xếp lịch hẹn tập thử.</li>
                  <li><strong>Khu vực đang sinh sống:</strong> Để phân bổ phòng tập và sắp xếp ca học thuận tiện nhất.</li>
                  <li><strong>Mục tiêu vóc dáng & lưu ý sức khỏe:</strong> Giúp HLV thiết kế bài tập an toàn cho khớp gối và cột sống.</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D4A373]/20">
                <h3 className="font-bold text-[#24211D] text-base mb-2">
                  3. Cam Kết Tuyệt Đối Không Bán / Chia Sẻ Dữ Liệu
                </h3>
                <p className="text-xs sm:text-sm">
                  Dữ liệu của học viên chỉ được sử dụng nội bộ bởi đội ngũ chuyên môn tại FITNESS x FIT CLUB. Chúng tôi <strong>cam kết 100% không bán, chia sẻ hoặc chuyển giao thông tin cá nhân cho bất kỳ bên thứ ba nào</strong> vì mục đích tiếp thị ngoài hệ thống.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D4A373]/20">
                <h3 className="font-bold text-[#24211D] text-base mb-2">
                  4. Quyền Lợi Của Học Viên
                </h3>
                <p className="text-xs sm:text-sm">
                  Học viên có quyền yêu cầu tra cứu, điều chỉnh hoặc hủy bỏ thông tin cá nhân trong hệ thống lưu trữ bất cứ lúc nào bằng cách liên hệ Hotline: <strong>0913.234.323</strong> hoặc gửi thư đến Email: <strong>conghuyentrangfitness@gmail.com</strong>.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "terms" && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-[#D4A373]/20 pb-4">
              <span className="text-xs font-bold text-[#C58F78] uppercase tracking-wider block mb-1">
                FITNESS x FIT CLUB // QUY ĐỊNH LỚP HỌC
              </span>
              <h1 className="font-serif-luxury text-3xl sm:text-4xl text-[#24211D] font-bold">
                Điều Khoản Sử Dụng & Nội Quy
              </h1>
              <p className="text-xs text-[#877F75] mt-1">
                Quy định đảm bảo an toàn và trải nghiệm tập luyện tiêu chuẩn cho phái đẹp
              </p>
            </div>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D4A373]/20">
                <h3 className="font-bold text-[#24211D] text-base mb-2">
                  1. Giới Hạn Tối Đa 6 – 8 Học Viên / Thảm Riêng
                </h3>
                <p className="text-xs sm:text-sm">
                  Mỗi ca tập tại studio chỉ nhận tối đa 6 đến 8 học viên. Mỗi học viên sở hữu một thảm tập TPE 8mm êm ái riêng biệt, bộ dây kháng lực Booty-Bands và tạ tay (1-2kg) đã được khử khuẩn 100%. Huấn luyện viên luôn túc trực quan sát và chỉnh sửa từng góc nghiêng xương chậu.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D4A373]/20">
                <h3 className="font-bold text-[#24211D] text-base mb-2">
                  2. Khởi Động Đầy Đủ & Đúng Giờ
                </h3>
                <p className="text-xs sm:text-sm">
                  10 phút đầu mỗi buổi tập là chuỗi động tác Cat-Cow, Bird-Dog bôi trơn dịch khớp trên thảm. Học viên vui lòng có mặt đúng giờ để tham gia trọn vẹn phần này nhằm bảo vệ tối đa đĩa đệm và khớp gối trước khi vào bài kháng lực chính.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D4A373]/20">
                <h3 className="font-bold text-[#24211D] text-base mb-2">
                  3. Thông Báo Tiền Sử Y Khoa
                </h3>
                <p className="text-xs sm:text-sm">
                  Học viên có tiền sử chấn thương, đau lưng, thoát vị đĩa đệm hoặc đang trong giai đoạn nhạy cảm cần thông báo trước cho Master Huấn Luyện Viên để được tùy chỉnh biến thể động tác riêng biệt.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D4A373]/20">
                <h3 className="font-bold text-[#24211D] text-base mb-2">
                  4. Quyền Sở Hữu Trí Tuệ
                </h3>
                <p className="text-xs sm:text-sm">
                  Tất cả các tài liệu giáo trình, phác đồ dinh dưỡng và video động tác Kháng Lực Trên Thảm thuộc bản quyền của Co-Founder Công Huyền Trang và thương hiệu FITNESS x FIT CLUB. Mọi hành vi quay phim thương mại hoặc sao chép khi chưa được chấp thuận đều vi phạm quy định.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "refund" && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-[#D4A373]/20 pb-4">
              <span className="text-xs font-bold text-[#C58F78] uppercase tracking-wider block mb-1">
                FITNESS x FIT CLUB // QUYỀN LỢI HỘI VIÊN
              </span>
              <h1 className="font-serif-luxury text-3xl sm:text-4xl text-[#24211D] font-bold">
                Chính Sách Đăng Ký, Huỷ & Hoàn Tiền
              </h1>
              <p className="text-xs text-[#877F75] mt-1">
                Bảo vệ 100% quyền lợi tài chính và cam kết kết quả tập luyện
              </p>
            </div>

            {/* Special Guarantee Alert Box */}
            <div className="bg-gradient-to-r from-[#24211D] to-[#36312B] text-white p-6 rounded-2xl border border-[#C58F78]/50 shadow-md">
              <div className="flex items-center gap-2 text-[#D4A373] text-xs font-bold uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>CHÍNH SÁCH BẢO HÀNH KẾT QUẢ</span>
              </div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-bold mb-2">
                CAM KẾT 30 NGÀY — HOÀN TIỀN 100% NẾU KHÔNG CÓ KẾT QUẢ
              </h3>
              <p className="text-xs sm:text-sm text-[#D4CFC9] leading-relaxed font-light">
                FIT CLUB cam kết hoàn trả 100% học phí nếu học viên tham gia đúng lộ trình, thực hiện hướng dẫn dinh dưỡng mà không có sự cải thiện rõ rệt về vóc dáng sau 30 ngày.
              </p>
            </div>

            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D4A373]/20">
                <h3 className="font-bold text-[#24211D] text-base mb-2">
                  1. Quy Định Đăng Ký Gói Tập
                </h3>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                  <li><strong>Học thử 3 buổi miễn phí:</strong> Áp dụng cho học viên mới trải nghiệm phương pháp Kháng Lực Trên Thảm.</li>
                  <li><strong>Hệ thống 5 combo gói tập (30 buổi/gói):</strong>
                    <ul className="list-circle pl-5 mt-1 space-y-1 text-xs">
                      <li>Combo 1 – Duy Trì: 2.520.000đ (thời hạn 45 ngày).</li>
                      <li>Combo 2 – Cơ Bản: 4.170.000đ (thời hạn 05 tháng).</li>
                      <li>Combo 3 – Nâng Cao: 6.570.000đ (thời hạn theo hợp đồng).</li>
                      <li>Combo 4 – VIP: 7.770.000đ (thời hạn theo hợp đồng).</li>
                      <li>Combo 5 – Diamond: 8.970.000đ (thời hạn theo hợp đồng).</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D4A373]/20">
                <h3 className="font-bold text-[#24211D] text-base mb-2">
                  2. Quy Định Huỷ & Xếp Lịch Bù Buổi Tập
                </h3>
                <p className="text-xs sm:text-sm">
                  Để đảm bảo studio sắp xếp thảm tập công bằng cho tất cả học viên:
                </p>
                <ul className="list-disc pl-5 mt-1 space-y-1 text-xs sm:text-sm">
                  <li>Học viên báo hoãn hoặc đổi lịch trước <strong>ít nhất 02 tiếng</strong> so với giờ tập: Buổi tập được bảo lưu nguyên vẹn và xếp lịch học bù miễn phí.</li>
                  <li>Trường hợp vắng mặt không báo trước hoặc báo dưới 02 tiếng: Buổi tập sẽ tính là đã sử dụng.</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D4A373]/20">
                <h3 className="font-bold text-[#24211D] text-base mb-2">
                  3. Chính Sách Bảo Lưu Khóa Học
                </h3>
                <p className="text-xs sm:text-sm">
                  Hỗ trợ bảo lưu thẻ tập hoàn toàn miễn phí khi học viên bận công tác xa, du lịch dài ngày, ốm đau có xác nhận y tế. Thời gian bảo lưu tối đa 30 – 60 ngày tùy combo gói tập.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#D4A373]/20">
                <h3 className="font-bold text-[#24211D] text-base mb-2">
                  4. Điều Kiện & Quy Trình Hoàn Tiền 100%
                </h3>
                <div className="text-xs sm:text-sm space-y-2">
                  <p>
                    <strong>Điều kiện hoàn tiền 100%:</strong>
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>Học viên đi tập tối thiểu 80% số buổi theo lộ trình quy định trong 30 ngày đầu tiên.</li>
                    <li>Thực hiện đúng hướng dẫn ăn uống và bổ sung dinh dưỡng cân bằng của FIT CLUB.</li>
                    <li>Có kết quả đo chỉ số định kỳ so sánh ngày 1 và ngày 30.</li>
                  </ul>
                  <p className="pt-2">
                    <strong>Thời gian xử lý:</strong> Sau khi xác nhận điều kiện, phòng kế toán FITNESS x FIT CLUB sẽ chuyển hoàn 100% học phí vào tài khoản ngân hàng của học viên trong vòng <strong>03 – 05 ngày làm việc</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Studio Contact Assistance Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-[#FAF7F2] border border-[#D4A373]/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-bold text-[#24211D] text-sm block">
              TRUNG TÂM HỖ TRỢ HỌC VIÊN FITNESS x FIT CLUB
            </span>
            <span className="text-xs text-[#877F75] font-light">
              Mọi thắc mắc về chính sách bảo mật, điều khoản hoặc hoàn tiền, xin vui lòng liên hệ:
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:0913234323"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C58F78] to-[#D4A373] text-white text-xs font-bold tracking-wider hover:shadow-md transition-all"
            >
              Hotline: 0913.234.323
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#24211D] py-12">
      {/* Top Header Bar */}
      <header className="max-w-4xl mx-auto px-6 sm:px-10 flex items-center justify-between pb-8 border-b border-[#D4A373]/20 mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-sans-clean font-semibold text-[#877F75] hover:text-[#C58F78] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>VỀ TRANG CHỦ FITNESS x FIT CLUB</span>
        </Link>

        <span className="text-sm font-serif-luxury font-bold text-[#24211D]">
          FITNESS x&nbsp;<span className="whitespace-nowrap">FIT&nbsp;CLUB</span>
        </span>
      </header>

      <Suspense fallback={<div className="text-center py-20 text-xs text-[#877F75]">Đang tải chính sách...</div>}>
        <PolicyContent />
      </Suspense>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 sm:px-10 pt-10 text-center text-xs font-sans-clean text-[#877F75] border-t border-[#D4A373]/20 mt-12">
        <p>© 2026 FITNESS x FIT CLUB. Chung Cư Greend Pearl (378 Minh Khai, Hà Nội). Hotline: 0913.234.323</p>
      </footer>
    </main>
  );
}
