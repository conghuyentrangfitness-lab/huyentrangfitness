import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MatEquipmentSection from "@/components/MatEquipmentSection";
import BodyScanSection from "@/components/BodyScanSection";
import MachineSection from "@/components/MachineSection";
import TrainersSection from "@/components/TrainersSection";
import TransformationSection from "@/components/TransformationSection";
import PerformanceLabSection from "@/components/PerformanceLabSection";
import MembershipSection from "@/components/MembershipSection";
import SocialProofSection from "@/components/SocialProofSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#FAF7F2] text-[#24211D] selection:bg-[#EEDCD3] selection:text-[#1C1A17] overflow-x-hidden">
      {/* Soft Rose-Gold Custom Cursor */}
      <CustomCursor />

      {/* Translucent Luxury Navbar */}
      <Navbar />

      {/* 01. Hero Section: Kháng Lực Trên Thảm */}
      <HeroSection />

      {/* 02. Bộ Dụng Cụ Kháng Lực Trên Thảm (Thảm tập chuyên dụng, Dây Booty-Bands, Tạ tay 1-2kg) */}
      <MatEquipmentSection />

      {/* 05. Đo Lường Hiệu Quả Kháng Lực Trên Thảm */}
      <BodyScanSection />

      {/* 06. Cấu Trúc 60 Phút Của Buổi Tập Kháng Lực Trên Thảm */}
      <MachineSection />

      {/* 07. Master Trainers: Huyen Trang, Mai Anh, Linh Dan */}
      <TrainersSection />

      {/* 08. Transformation: Before / After Posture Alignment */}
      <TransformationSection />

      {/* 09. Sanctuary Wellness Lab: Vitals & Deep Sleep */}
      <PerformanceLabSection />

      {/* 10. Membership: Discovery, Harmony & Inner Sanctuary VIP */}
      <MembershipSection />

      {/* 11. Social Proof: Inspiring Member Story */}
      <SocialProofSection />

      {/* 12. Final Gentle CTA: Gift to Yourself */}
      <FinalCTASection />

      {/* 13. Sanctuary Minimal Footer */}
      <FooterSection />
    </main>
  );
}
