"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import * as THREE from "three";
import { Sparkles, Heart, Activity, CheckCircle2, Zap } from "lucide-react";

interface MatZone {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  x: number;
  y: number;
  matExercises: string[];
  scientificBenefits: string[];
  metrics: {
    tension: string;
    jointSafety: string;
    sculptEffect: string;
  };
}

const MAT_ZONES: MatZone[] = [
  {
    id: "BOOTY",
    name: "NÂNG MÔNG QUẢ ĐÀO (KHÔNG TO ĐÙI)",
    subtitle: "CƠ MÔNG LỚN & MÔNG NHỠ TRÊN THẢM",
    category: "VÙNG MÔNG",
    x: 52,
    y: 56,
    matExercises: [
      "Banded Glute Bridge siết đỉnh trên thảm",
      "Clamshells mở khớp hông với dây Booty-Band",
      "Donkey Kicks đeo tạ cổ chân chống tay trên thảm",
      "Fire Hydrant thảm xóa hõm hai bên mông",
    ],
    scientificBenefits: [
      "Lực cản đa chiều từ dây vải kích hoạt sâu cơ mông mà không dồn lực vào đùi trước",
      "Nâng cao đỉnh mông tự nhiên thêm 3-4cm, tạo đường cong hông quyến rũ",
      "Hoàn toàn bảo vệ khớp gối vì tập ở tư thế nằm và quỳ trên thảm êm ái",
    ],
    metrics: { tension: "100% VÀO MÔNG", jointSafety: "KHÔNG ĐAU GỐI", sculptEffect: "TRÒN CAO SĂN" },
  },
  {
    id: "CORE_WAIST",
    name: "SIẾT EO CON KIẾN & RÃNH BỤNG 11",
    subtitle: "CƠ BỤNG SÂU TRANSVERSE ABDOMINIS",
    category: "VÒNG EO",
    x: 46,
    y: 40,
    matExercises: [
      "Plank kháng lực dây mini-band co gối chéo",
      "Deadbug kháng lực dây band giữ thắt lưng sát thảm",
      "Hollow Body kết hợp bóng mềm Pilates ép bụng",
      "Banded Bicycle Crunch nhịp đếm chậm trên thảm",
    ],
    scientificBenefits: [
      "Kéo sát hai bờ cơ bụng lại gần nhau, tạo rãnh bụng số 11 phẳng mịn",
      "Thu nhỏ chu vi vòng eo tự nhiên từ 5 – 8cm sau 8 tuần",
      "Cơ bụng sâu khỏe giúp nâng đỡ toàn bộ nội tạng và bảo vệ thắt lưng",
    ],
    metrics: { tension: "LỰC CĂNG SÂU", jointSafety: "BẢO VỆ CỘT SỐNG", sculptEffect: "GIẢM 5-8CM EO" },
  },
  {
    id: "UPPER_BODY",
    name: "LƯNG THON & THON GỌN BẮP TAY SAU",
    subtitle: "XÓA MỠ NÁCH & MỠ LƯNG ÁO NGỰC",
    category: "LƯNG & TAY",
    x: 48,
    y: 24,
    matExercises: [
      "Triceps Kickback với dây band quỳ trên thảm",
      "Chống đẩy thảm thu hẹp cùi chỏ (Narrow Push-up on Mat)",
      "Y-T-W nằm sấp trên thảm mở ngực vai",
      "Kéo dây band ngang ngực mở rộng khớp vai",
    ],
    scientificBenefits: [
      "Đốt sạch mỡ thừa tích tụ vùng nách và đai áo ngực phía sau",
      "Bắp tay sau săn chắc, thon nhỏ, không còn hiện tượng chùng nhão khi vẫy tay",
      "Chữa dứt điểm tật gù vai và cổ rùa, tạo bờ vai thanh mảnh",
    ],
    metrics: { tension: "CÔ LẬP BẮP TAY", jointSafety: "ÊM KHỚP VAI", sculptEffect: "THON MỀM MẠI" },
  },
  {
    id: "INNER_THIGH",
    name: "ĐÙI TRONG THON DÀI & KHỚP HÔNG",
    subtitle: "KÉO DÀI SỢI CƠ — XÓA MỠ ĐÙI TRONG",
    category: "ĐÙI TRONG",
    x: 44,
    y: 72,
    matExercises: [
      "Side Lying Leg Raise nằm nghiêng kéo dây band",
      "Kẹp bóng Pilates nâng xương chậu trên thảm",
      "Inner Thigh Pulse nằm nghiêng thảm siết đùi",
      "Kéo giãn khớp háng hình cánh bướm trên thảm",
    ],
    scientificBenefits: [
      "Thu hẹp khoảng cách mỡ đùi trong, giúp đùi không bị cọ xát khi mặc quần hoặc váy",
      "Sợi cơ đùi được kéo dài thanh mảnh chứ không bị phình to bề ngang",
      "Tăng cường lưu thông máu vùng xương chậu giúp da chân mịn màng",
    ],
    metrics: { tension: "ĐỐT MỠ ĐÙI", jointSafety: "KHÔNG CHẤN THƯƠNG", sculptEffect: "CHÂN THẲNG THON" },
  },
  {
    id: "PELVIC_FLOOR",
    name: "CÂN BẰNG KHUNG CHẬU & SÀN CHẬU",
    subtitle: "CƠ ĐÁY CHẬU & PHỤC HỒI SAU SINH",
    category: "XƯƠNG CHẬU",
    x: 50,
    y: 48,
    matExercises: [
      "Banded Pelvic Tilt nằm ngửa trên thảm",
      "Bird-Dog luân phiên tay chân kéo dây kháng lực",
      "Kegel kết hợp nhịp thở cơ hoành trên thảm",
      "Cầu mông đơn chân (Single-leg Bridge) trên thảm",
    ],
    scientificBenefits: [
      "Nắn chỉnh khung chậu về đúng vị trí trung tính, cân bằng hai bên hông",
      "Siết chặt cơ đáy chậu, giải quyết dứt điểm các vấn đề sau sinh",
      "Giảm hẳn các cơn đau lưng dưới do ngồi sai tư thế lâu ngày",
    ],
    metrics: { tension: "TRỊ LIỆU SÂU", jointSafety: "100% AN TOÀN", sculptEffect: "VỮNG VÀNG KHỎE" },
  },
];

export default function Athlete3DExperience() {
  const [activeZone, setActiveZone] = useState<MatZone>(MAT_ZONES[0]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: true,
      });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 65;

    // Geometric golden resistance ring representation
    const geometry = new THREE.TorusGeometry(19, 0.5, 16, 100);
    const material = new THREE.MeshBasicMaterial({
      color: 0xd4a373,
      transparent: true,
      opacity: 0.18,
      wireframe: true,
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 90;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 2,
      color: 0xc58f78,
      transparent: true,
      opacity: 0.35,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    let animationFrameId: number;

    const resize = () => {
      if (!canvasRef.current) return;
      const width = canvasRef.current.parentElement?.clientWidth || 400;
      const height = canvasRef.current.parentElement?.clientHeight || 600;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      torus.rotation.x += 0.002;
      torus.rotation.y += 0.003;
      particles.rotation.y -= 0.0015;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      renderer.dispose();
    };
  }, []);

  return (
    <section id="mat-zones" className="relative w-full py-24 sm:py-32 bg-[#FAF7F2] border-b border-[#D4A373]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#D4A373]/20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEDCD3]/60 text-xs text-[#C58F78] font-bold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5 fill-[#C58F78]" />
              <span>BẢN ĐỒ TÁC ĐỘNG CƠ HỌC TRÊN THẢM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl text-[#24211D] font-bold leading-tight tracking-tight">
              Kháng Lực Tập Trung Từng Vùng
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#59534B] leading-relaxed font-normal">
            Chọn từng nhóm cơ dưới đây để xem chi tiết các bài tập kháng lực với dây band trên thảm giúp điêu khắc vóc dáng chính xác nhất.
          </p>
        </div>

        {/* Quick Selector Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-6">
          {MAT_ZONES.map((zone) => {
            const isActive = activeZone.id === zone.id;
            return (
              <button
                key={zone.id}
                onClick={() => setActiveZone(zone)}
                data-cursor-muscle={zone.name}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 border flex items-center gap-2 ${
                  isActive
                    ? "border-[#C58F78] bg-gradient-to-r from-[#C58F78] to-[#D4A373] text-white shadow-md"
                    : "border-[#D4A373]/30 bg-white/80 text-[#59534B] hover:border-[#C58F78] hover:text-[#C58F78]"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                {zone.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Visual Model on Mat */}
        <div className="lg:col-span-6 relative h-[550px] sm:h-[650px] w-full rounded-3xl bg-white/70 border border-[#D4A373]/25 flex items-center justify-center overflow-hidden shadow-[0_15px_40px_rgba(212,163,115,0.1)]">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none opacity-45 z-0"
          />

          <div className="relative z-10 w-[90%] max-w-[390px] h-[92%] flex items-center justify-center">
            <Image
              src="/images/mat_booty_band.jpg"
              alt="Bài tập kháng lực trên thảm cùng dây mini band"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain filter contrast-105 rounded-2xl"
            />

            {/* Interactive Hotspot Nodes */}
            {MAT_ZONES.map((zone) => {
              const isSelected = activeZone.id === zone.id;
              return (
                <button
                  key={zone.id}
                  onClick={() => setActiveZone(zone)}
                  data-cursor-muscle={zone.name}
                  aria-label={`Chọn ${zone.name}`}
                  className="absolute z-20 group transform -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                  style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
                >
                  <span
                    className={`absolute inset-0 w-8 h-8 -top-2 -left-2 rounded-full transition-opacity duration-300 ${
                      isSelected
                        ? "bg-[#C58F78]/40 animate-ping opacity-100"
                        : "opacity-0 group-hover:opacity-100 group-hover:bg-[#D4A373]/25"
                    }`}
                  />
                  <span
                    className={`block w-4 h-4 rounded-full transition-all duration-300 ${
                      isSelected
                        ? "bg-[#C58F78] shadow-[0_0_15px_#C58F78] scale-125 border-2 border-white"
                        : "bg-white border-2 border-[#D4A373] group-hover:bg-[#C58F78] group-hover:scale-110"
                    }`}
                  />
                  <span
                    className={`hidden sm:block absolute left-6 top-1/2 -translate-y-1/2 text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap transition-all duration-300 shadow-sm ${
                      isSelected
                        ? "bg-[#C58F78] text-white"
                        : "bg-white/95 text-[#59534B] border border-[#D4A373]/30 group-hover:text-[#C58F78]"
                    }`}
                  >
                    {zone.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Mat Exercises & Detailed Benefits */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          {/* Active Target Card */}
          <div className="card-soft-glow rounded-3xl p-8 sm:p-9 relative overflow-hidden">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C58F78] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VÙNG KHÁNG LỰC ƯU TIÊN // {activeZone.category}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl text-[#24211D] font-bold tracking-tight">
              {activeZone.name}
            </h3>
            <p className="text-xs tracking-wider text-[#877F75] uppercase mt-1 font-semibold">
              {activeZone.subtitle}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-5 mt-5 border-t border-[#D4A373]/20 text-center">
              <div>
                <div className="text-[10px] tracking-wider text-[#877F75] uppercase font-semibold">
                  TẬP TRUNG LỰC
                </div>
                <div className="text-base sm:text-lg text-[#C58F78] font-bold mt-1">
                  {activeZone.metrics.tension}
                </div>
              </div>
              <div>
                <div className="text-[10px] tracking-wider text-[#877F75] uppercase font-semibold">
                  KHỚP GỐI
                </div>
                <div className="text-base sm:text-lg text-[#24211D] font-bold mt-1">
                  {activeZone.metrics.jointSafety}
                </div>
              </div>
              <div>
                <div className="text-[10px] tracking-wider text-[#877F75] uppercase font-semibold">
                  HIỆU QUẢ FORM
                </div>
                <div className="text-base sm:text-lg text-[#24211D] font-bold mt-1">
                  {activeZone.metrics.sculptEffect}
                </div>
              </div>
            </div>
          </div>

          {/* Prescribed Mat Exercises */}
          <div className="bg-white/85 rounded-3xl border border-[#D4A373]/25 p-7 shadow-xs">
            <div className="text-xs font-bold tracking-wider text-[#C58F78] uppercase mb-4 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 fill-[#C58F78]" />
              <span>CHUỖI BÀI TẬP KHÁNG LỰC TRÊN THẢM CHUYÊN SÂU</span>
            </div>
            <div className="space-y-2.5">
              {activeZone.matExercises.map((ex, i) => (
                <div key={ex} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#FAF8F5] border border-[#D4A373]/15">
                  <span className="w-5 h-5 rounded-full bg-[#EEDCD3] text-[#C58F78] text-xs font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#24211D]">
                    {ex}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Scientific Benefits Checklist */}
          <div className="bg-white/80 rounded-3xl border border-[#D4A373]/25 p-6 shadow-xs">
            <div className="text-xs font-semibold text-[#877F75] uppercase tracking-wider mb-3">
              HIỆU QUẢ ĐÃ ĐƯỢC CHỨNG MINH KHOA HỌC:
            </div>
            <div className="space-y-2">
              {activeZone.scientificBenefits.map((b) => (
                <div key={b} className="flex items-start gap-2.5 text-xs text-[#59534B]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8A9A78] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
