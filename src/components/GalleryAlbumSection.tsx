"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Images,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  Camera,
  Heart,
  Layers,
  Award,
} from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: "lop-hoc" | "khang-luc" | "gian-co";
  tag: string;
}

const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 1,
    src: "/images/gallery/fitness_gallery_01.jpg",
    title: "Plank kháng lực trên thảm siết cơ bụng rãnh 11",
    category: "khang-luc",
    tag: "Kháng lực thảm",
  },
  {
    id: 2,
    src: "/images/gallery/fitness_gallery_02.jpg",
    title: "Kích hoạt cơ mông quả đào với kỹ thuật chuyên sâu",
    category: "khang-luc",
    tag: "Độ mông quả đào",
  },
  {
    id: 3,
    src: "/images/gallery/fitness_gallery_03.jpg",
    title: "Buổi tập nâng cơ vòng 3 tràn đầy năng lượng",
    category: "lop-hoc",
    tag: "Lớp học nhóm",
  },
  {
    id: 4,
    src: "/images/gallery/fitness_gallery_04.jpg",
    title: "Tạ tay 1-2kg thon gọn bắp tay và mở rộng bờ vai",
    category: "khang-luc",
    tag: "Tạ tay nữ 1-2kg",
  },
  {
    id: 5,
    src: "/images/gallery/fitness_gallery_05.jpg",
    title: "Rèn luyện sức bền & sự dẻo dai toàn diện cho phái đẹp",
    category: "lop-hoc",
    tag: "Lớp học nhóm",
  },
  {
    id: 6,
    src: "/images/gallery/fitness_gallery_06.jpg",
    title: "Động tác siết eo thon định hình dáng đồng hồ cát",
    category: "khang-luc",
    tag: "Siết eo thon",
  },
  {
    id: 7,
    src: "/images/gallery/fitness_gallery_07.jpg",
    title: "Không gian lớp học kháng lực thảm ánh sáng tự nhiên",
    category: "lop-hoc",
    tag: "Phòng tập chuẩn",
  },
  {
    id: 8,
    src: "/images/gallery/fitness_gallery_08.jpg",
    title: "Chỉnh sửa form dáng tỉ mỉ chuẩn xác từng động tác",
    category: "lop-hoc",
    tag: "Chỉnh form chuẩn",
  },
  {
    id: 9,
    src: "/images/gallery/fitness_gallery_09.jpg",
    title: "Huấn luyện viên theo sát hỗ trợ học viên tận tâm",
    category: "lop-hoc",
    tag: "HLV đồng hành",
  },
  {
    id: 10,
    src: "/images/gallery/fitness_gallery_10.jpg",
    title: "Bài tập Donkey Kicks cùng dây vải Booty Bands",
    category: "khang-luc",
    tag: "Dây Booty Bands",
  },
  {
    id: 11,
    src: "/images/gallery/fitness_gallery_11.jpg",
    title: "Tinh thần tập luyện bền bỉ và tích cực mỗi ngày",
    category: "lop-hoc",
    tag: "Lớp học nhóm",
  },
  {
    id: 12,
    src: "/images/gallery/fitness_gallery_12.jpg",
    title: "Siết cơ core và cải thiện sức mạnh bảo vệ cột sống",
    category: "khang-luc",
    tag: "Bảo vệ cột sống",
  },
  {
    id: 13,
    src: "/images/gallery/fitness_gallery_13.jpg",
    title: "Nâng cao thể lực với chuỗi bài kháng lực nhịp nhàng",
    category: "khang-luc",
    tag: "Kháng lực thảm",
  },
  {
    id: 14,
    src: "/images/gallery/fitness_gallery_14.jpg",
    title: "Giãn cơ phục hồi sâu sau buổi tập hiệu quả",
    category: "gian-co",
    tag: "Giãn cơ phục hồi",
  },
  {
    id: 15,
    src: "/images/gallery/fitness_gallery_15.jpg",
    title: "Thời khắc thả lỏng cơ thể & giải tỏa căng thẳng",
    category: "gian-co",
    tag: "Thư giãn tâm trí",
  },
  {
    id: 16,
    src: "/images/gallery/fitness_gallery_16.jpg",
    title: "Không khí phòng tập gắn kết, năng lượng tràn đầy",
    category: "lop-hoc",
    tag: "Lớp học nhóm",
  },
  {
    id: 17,
    src: "/images/gallery/fitness_gallery_17.jpg",
    title: "Xây dựng lối sống năng động, khỏe đẹp từ bên trong",
    category: "lop-hoc",
    tag: "Lối sống khỏe",
  },
  {
    id: 18,
    src: "/images/gallery/fitness_gallery_18.jpg",
    title: "Luyện tập cơ chân đùi săn chắc không lo to cơ",
    category: "khang-luc",
    tag: "Chân đùi thon gọn",
  },
  {
    id: 19,
    src: "/images/gallery/fitness_gallery_19.jpg",
    title: "Giữ thăng bằng và định hình khung xương cân đối",
    category: "khang-luc",
    tag: "Cân chỉnh tư thế",
  },
  {
    id: 20,
    src: "/images/gallery/fitness_gallery_20.jpg",
    title: "Khởi động kỹ lưỡng êm ái bảo vệ khớp gối tối đa",
    category: "gian-co",
    tag: "Bảo vệ khớp",
  },
  {
    id: 21,
    src: "/images/gallery/fitness_gallery_21.jpg",
    title: "Kích hoạt quá trình đốt mỡ tự nhiên của cơ thể",
    category: "khang-luc",
    tag: "Đốt mỡ tự nhiên",
  },
  {
    id: 22,
    src: "/images/gallery/fitness_gallery_22.jpg",
    title: "Từng bước cảm nhận sự chuyển hóa vóc dáng mỗi tuần",
    category: "lop-hoc",
    tag: "Chuyển hóa dáng",
  },
  {
    id: 23,
    src: "/images/gallery/fitness_gallery_23.jpg",
    title: "Lớp tập đông vui với tinh thần quyết tâm cao độ",
    category: "lop-hoc",
    tag: "Năng lượng tích cực",
  },
  {
    id: 24,
    src: "/images/gallery/fitness_gallery_24.jpg",
    title: "Nụ cười rạng rỡ và sự hài lòng sau mỗi ca tập",
    category: "gian-co",
    tag: "Hạnh phúc khỏe đẹp",
  },
];

const CATEGORIES = [
  { id: "all", label: "Tất Cả Album (24 Ảnh)" },
  { id: "lop-hoc", label: "Lớp Học Nhóm Sôi Động" },
  { id: "khang-luc", label: "Kháng Lực Thảm & Booty Bands" },
  { id: "gian-co", label: "Giãn Cơ & Thư Giãn" },
];

export default function GalleryAlbumSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState(12);

  const filteredImages =
    activeCategory === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const currentVisibleImages = filteredImages.slice(0, displayCount);
  const hasMore = displayCount < filteredImages.length;

  const handleOpenLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev! > 0 ? prev! - 1 : filteredImages.length - 1
    );
  }, [selectedImageIndex, filteredImages.length]);

  const handleNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) =>
      prev! < filteredImages.length - 1 ? prev! + 1 : 0
    );
  }, [selectedImageIndex, filteredImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, handlePrev, handleNext]);

  // Lock background scroll when modal open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImageIndex]);

  return (
    <section
      id="album"
      className="relative w-full py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#D4A373]/20 overflow-hidden"
    >
      {/* Subtle ambient luxury backdrop glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#EEDCD3]/35 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#D4A373]/20 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 text-xs font-semibold text-[#C58F78] uppercase tracking-wider mb-3 shadow-xs border border-[#D4A373]/20">
              <Camera className="w-3.5 h-3.5" />
              <span>THƯ VIỆN HÌNH ẢNH THỰC TẾ // FIT CLUB</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl text-[#24211D] font-bold tracking-tight">
              Album Khoảnh Khắc Tập Luyện
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#59534B] leading-relaxed font-normal">
            Không gian rèn luyện tràn đầy năng lượng tích cực, hình ảnh 100% người thật việc thật của học viên và huấn luyện viên tại các ca tập mỗi ngày.
          </p>
        </div>

        {/* Feature Highlights Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
          <div className="bg-white/80 rounded-2xl p-4 border border-[#D4A373]/20 flex items-center gap-3 shadow-2xs">
            <div className="w-9 h-9 rounded-xl bg-[#EEDCD3]/70 flex items-center justify-center text-[#C58F78] shrink-0">
              <Images className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs font-bold text-[#24211D]">24+ Bức Ảnh Thực Tế</span>
              <span className="text-[11px] text-[#7A7369]">Góc chụp chân thực</span>
            </div>
          </div>

          <div className="bg-white/80 rounded-2xl p-4 border border-[#D4A373]/20 flex items-center gap-3 shadow-2xs">
            <div className="w-9 h-9 rounded-xl bg-[#EEDCD3]/70 flex items-center justify-center text-[#C58F78] shrink-0">
              <Heart className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs font-bold text-[#24211D]">100% Học Viên Thật</span>
              <span className="text-[11px] text-[#7A7369]">Năng lượng ngập tràn</span>
            </div>
          </div>

          <div className="bg-white/80 rounded-2xl p-4 border border-[#D4A373]/20 flex items-center gap-3 shadow-2xs">
            <div className="w-9 h-9 rounded-xl bg-[#EEDCD3]/70 flex items-center justify-center text-[#C58F78] shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs font-bold text-[#24211D]">Thảm Tập & Dụng Cụ</span>
              <span className="text-[11px] text-[#7A7369]">Tiêu chuẩn bảo vệ khớp</span>
            </div>
          </div>

          <div className="bg-white/80 rounded-2xl p-4 border border-[#D4A373]/20 flex items-center gap-3 shadow-2xs">
            <div className="w-9 h-9 rounded-xl bg-[#EEDCD3]/70 flex items-center justify-center text-[#C58F78] shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs font-bold text-[#24211D]">Huấn Luyện Tận Tâm</span>
              <span className="text-[11px] text-[#7A7369]">Chỉnh form từng học viên</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setDisplayCount(12);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#C58F78] text-white shadow-[0_4px_16px_rgba(197,143,120,0.35)] scale-102"
                  : "bg-white/85 text-[#59534B] hover:bg-white hover:text-[#24211D] border border-[#D4A373]/25"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {currentVisibleImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative h-56 sm:h-72 lg:h-80 rounded-2xl overflow-hidden cursor-pointer bg-[#F3ECE2] border border-[#D4A373]/25 shadow-2xs hover:shadow-[0_15px_30px_rgba(197,143,120,0.22)] hover:border-[#C58F78] transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                loading={index < 8 ? "eager" : "lazy"}
              />

              {/* Tag Badge Top Right */}
              <div className="absolute top-3 right-3 z-10">
                <span className="text-[10px] font-bold text-white bg-black/55 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  {image.tag}
                </span>
              </div>

              {/* Hover Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-10">
                <div className="flex items-center gap-1.5 text-white/80 text-[11px] font-semibold mb-1">
                  <ZoomIn className="w-3.5 h-3.5 text-[#E8D4C8]" />
                  <span>Chạm để phóng to</span>
                </div>
                <h4 className="text-white text-xs sm:text-sm font-bold line-clamp-2 leading-snug">
                  {image.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Show Less Button */}
        {filteredImages.length > 12 && (
          <div className="flex justify-center mt-10">
            {hasMore ? (
              <button
                onClick={() => setDisplayCount((prev) => prev + 12)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#FAF7F2] text-[#C58F78] font-bold text-xs uppercase tracking-wider border border-[#D4A373]/40 shadow-xs hover:shadow-md hover:border-[#C58F78] transition-all duration-300"
              >
                <Images className="w-4 h-4" />
                <span>Xem thêm {filteredImages.length - displayCount} ảnh khác</span>
              </button>
            ) : (
              <button
                onClick={() => setDisplayCount(12)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/70 hover:bg-white text-[#59534B] font-semibold text-xs border border-[#D4A373]/30 transition-all duration-300"
              >
                <span>Thu gọn danh sách ảnh</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-fadeIn"
          onClick={handleCloseLightbox}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-5 right-5 sm:top-7 sm:right-8 z-50 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors border border-white/20"
            aria-label="Đóng xem ảnh"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors border border-white/20"
            aria-label="Ảnh trước"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors border border-white/20"
            aria-label="Ảnh tiếp theo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] sm:h-[75vh] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black">
              <Image
                src={filteredImages[selectedImageIndex].src}
                alt={filteredImages[selectedImageIndex].title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Lightbox Bottom Info Bar */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between w-full px-2 gap-2 text-white">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold text-[#E8D4C8] bg-white/15 px-3 py-1 rounded-full border border-white/15">
                  {filteredImages[selectedImageIndex].tag}
                </span>
                <p className="text-xs sm:text-sm font-medium text-white/90">
                  {filteredImages[selectedImageIndex].title}
                </p>
              </div>

              <div className="text-xs font-semibold text-white/60 tracking-wider">
                {selectedImageIndex + 1} / {filteredImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
