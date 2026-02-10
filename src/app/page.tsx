"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import ReactMarkdown from "react-markdown";
import {
  Menu,
  X,
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Youtube,
  Globe,
  Play,
  Quote,
  Calendar,
  Clock,
  ChevronRight,
  ChevronLeft,
  Hotel,
  Utensils,
  Plane,
  Languages,
  Camera,
  Users2,
  MessageCircle,
  Send,
  Building2,
  Star,
  MessageSquare,
  Sparkles,
} from "lucide-react";

interface ChatMessage {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: string;
}

// ===== Dữ liệu tĩnh khai báo NGOÀI component để tránh tạo lại mỗi render =====

const slides = [
  {
    image: "/images/slides/ts2026.png",
    title: "Tuyển sinh 2026",
    link: "https://dvtc.edu.vn/thong-bao-tuyen-sinh-nam-2025.html",
  },
  {
    image: "/images/slides/nganh-huong-dan-du-lich.png",
    title: "Ngành Hướng dẫn du lịch",
    link: "#",
  },
  {
    image: "/images/slides/nganh-ky-thuat-che-bien-mon-an.png",
    title: "Ngành Kỹ thuật chế biến món ăn",
    link: "#",
  },
  {
    image: "/images/slides/nganh-phien-dich-tieng-anh-du-lich.png",
    title: "Ngành Phiên dịch tiếng Anh du lịch",
    link: "#",
  },
  {
    image: "/images/slides/nganh-quan-tri-du-lich-mice-to-chuc-su-kien.png",
    title: "Ngành Quản trị Du lịch MICE",
    link: "#",
  },
  {
    image: "/images/slides/nganh-quan-tri-khach-san.png",
    title: "Ngành Quản trị khách sạn",
    link: "#",
  },
];

const testimonials = [
  {
    content:
      "Thư viện nhiều đầu sách và đa dạng về sách tham khảo, có chỗ cho sinh viên nghỉ trưa sau những giờ học căng thẳng.",
    author: "Nguyễn Thị Thu Thảo",
    class: "Lớp 8CKS7",
    department: "Khoa Quản trị khách sạn, nhà hàng",
    avatar: "https://dvtc.edu.vn/uploads/09-2019/anh-avatar-thao.png",
  },
  {
    content:
      "Phòng thực hành của Trường rất hiện đại với đầy đủ trang thiết bị giống như tại các khách sạn 5 sao mà em đã từng đi thực tập.",
    author: "Lê Thị Thúy Ngân",
    class: "Lớp 8CKS7",
    department: "Khoa Quản trị khách sạn, nhà hàng",
    avatar: "https://dvtc.edu.vn/uploads/09-2019/anh-avatar_ngan.png",
  },
  {
    content:
      "Khuôn viên Trường mình đẹp và sạch sẽ nhất so với những Trường khác mà mình đã ghé qua. Thật tuyệt khi đi bộ hay ngồi đọc sách dưới tán cây xanh trong sân Trường.",
    author: "Phạm Thị Thục Quỳnh",
    class: "Lớp 8CKS7",
    department: "Khoa Quản trị khách sạn, nhà hàng",
    avatar: "https://dvtc.edu.vn/uploads/09-2019/anh-avatar_quynh.png",
  },
];

const trainingPrograms = [
  {
    name: "Truyền thông đa phương tiện",
    icon: <Camera className="w-8 h-8" />,
    image:
      "https://dvtc.edu.vn/uploads/01-2025/truyen-thong-da-phuong-tien.png",
    link: "http://dvtc.edu.vn/truyen-thong-da-phuong-tien.html",
  },
  {
    name: "Hướng dẫn du lịch",
    icon: <Users2 className="w-8 h-8" />,
    image: "https://dvtc.edu.vn/uploads/01-2025/huong-dan-du-lich.png",
    link: "http://dvtc.edu.vn/huong-dan-du-lich.html",
  },
  {
    name: "Quản trị lữ hành",
    icon: <Plane className="w-8 h-8" />,
    image: "https://dvtc.edu.vn/uploads/01-2025/quan-tri-lu-hanh.png",
    link: "http://dvtc.edu.vn/quan-tri-lu-hanh.html",
  },
  {
    name: "Phiên dịch tiếng Anh du lịch",
    icon: <Languages className="w-8 h-8" />,
    image:
      "https://dvtc.edu.vn/uploads/01-2025/phien-dich-tieng-anh-du-lich.png",
    link: "http://dvtc.edu.vn/phien-dich-tieng-anh-du-lich.html",
  },
  {
    name: "Quản trị khu resort",
    icon: <Hotel className="w-8 h-8" />,
    image: "https://dvtc.edu.vn/uploads/01-2025/quan-tri-khu-resort.png",
    link: "http://dvtc.edu.vn/quan-tri-khu-resort.html",
  },
  {
    name: "Quản trị nhà hàng",
    icon: <Utensils className="w-8 h-8" />,
    image: "https://dvtc.edu.vn/uploads/01-2025/quan-tri-nha-hang.png",
    link: "http://dvtc.edu.vn/quan-tri-nha-hang.html",
  },
  {
    name: "Quản trị Du lịch MICE",
    icon: <MessageSquare className="w-8 h-8" />,
    image:
      "https://dvtc.edu.vn/uploads/01-2025/quan-tri-du-lich-mic-to-chuc-su-kien.png",
    link: "http://dvtc.edu.vn/quan-tri-du-lich-mice-to-chuc-su-kien.html",
  },
  {
    name: "Quản trị khách sạn",
    icon: <Building2 className="w-8 h-8" />,
    image: "https://dvtc.edu.vn/uploads/01-2025/quan-tri-khach-san.png",
    link: "http://dvtc.edu.vn/nganh-nghe-dao-tao/quan-tri-khach-san/",
  },
  {
    name: "Kỹ thuật chế biến món ăn",
    icon: <Utensils className="w-8 h-8" />,
    image: "https://dvtc.edu.vn/uploads/01-2025/ky-thuat-che-bien-mon-an.png",
    link: "http://dvtc.edu.vn/nganh-nghe-dao-tao/ky-thuat-che-bien-mon-an/",
  },
];

const newsData = {
  events: [
    {
      title:
        "🌟 CHƯƠNG TRÌNH GIAO LƯU ẨM THỰC VỚI HIỆP HỘI XUẤT KHẨU TRỨNG & GIA CẦM HOA KỲ – LẦN THỨ 4.",
      image: "https://dvtc.edu.vn/uploads/12-2025/am-thuc.jpg",
      link: "http://dvtc.edu.vn/-chuong-trinh-giao-luu-am-thuc-voi-hiep-hoi-xuat-khau-trung-gia-cam-hoa-ky-lan-thu-4..html",
    },
    {
      title:
        "CHÚC MỪNG ĐẠI HỘI CÔNG ĐOÀN TRƯỜNG CĐ DU LỊCH ĐÀ NẴNG THÀNH CÔNG TỐT ĐẸP 💐💐",
      link: "http://dvtc.edu.vn/chuc-mung-dai-hoi-cong-doan-truong-cd-du-lich-da-nang-thanh-cong-tot-dep-.html",
    },
    {
      title: "🎉 KỶ NIỆM 43 NĂM NGÀY NHÀ GIÁO VIỆT NAM 20/11",
      link: "http://dvtc.edu.vn/-ky-niem-43-nam-ngay-nha-giao-viet-nam-2011.html",
    },
  ],
  partnerships: [
    {
      title:
        "🎉LỄ KÝ KẾT HỢP TÁC GIỮA TRƯỜNG CAO ĐẲNG DU LỊCH ĐÀ NẴNG VÀ FUSION RESORT & VILLAS DA NANG",
      image: "https://dvtc.edu.vn/uploads/02-2025/6-1848.jpg",
      link: "http://dvtc.edu.vn/le-ky-ket-hop-tac-giua-truong-cao-dang-du-lich-da-nang-va-fusion-resort-villas-da-nang.html",
    },
    {
      title:
        "TRƯỜNG CAO ĐẲNG DU LỊCHĐÀ NẴNG KÝ KẾT BIÊN BẢN GHI NHỚ HỢP TÁC CHIẾN LƯỢC VỚI THE FIVE – THƯƠNG HIỆU NGHĨ DƯỠNG ...",
      link: "http://dvtc.edu.vn/truong-cao-dang-du-lich-da-nang-ky-ket-bien-ban-ghi-nho-hop-tac-chien-luoc-voi-the-five-thuong-hieu-nghi-duong-cao-cap-cua-tap-doan-thanh-cong.html",
    },
  ],
  announcements: [
    {
      title:
        "THÔNG BÁO LỊCH THI KTM KHÓA 13, HKI 2025-2026 (15/12/2025-02/01/2026)",
      image: "https://dvtc.edu.vn/public/images/thongbao.jpg",
      link: "http://dvtc.edu.vn/thong-bao-lich-thi-ktm-khoa-13-hki-2025-2026-15122025-02012026.html",
    },
    {
      title:
        "Thời khóa biểu tuần 16 từ ngày 15/12 đến ngày 21/12/2025 - Cao đẳng khóa 13,14,15; Trung cấp khóa 8,9",
      link: "http://dvtc.edu.vn/thoi-khoa-bieu-tuan-16-tu-ngay-1512-den-ngay-21122025-cao-dang-khoa-131415-trung-cap-khoa-89.html",
    },
  ],
};

const partners = [
  "https://dvtc.edu.vn/uploads/09-2020/logo1-1048.jpg",
  "https://dvtc.edu.vn/uploads/09-2020/logo21.jpg",
  "https://dvtc.edu.vn/uploads/09-2020/logo31.jpg",
  "https://dvtc.edu.vn/uploads/09-2020/logo41.jpg",
  "https://dvtc.edu.vn/uploads/05-2020/logo1.jpg",
  "https://dvtc.edu.vn/uploads/10-2019/furama.jpg",
  "https://dvtc.edu.vn/uploads/10-2019/fusionmaia.jpg",
  "https://dvtc.edu.vn/uploads/10-2019/petrolimex.jpg",
  "https://dvtc.edu.vn/uploads/10-2019/sunworld.jpg",
  "https://dvtc.edu.vn/uploads/10-2019/vietnamtourism-vitours.jpg",
  "https://dvtc.edu.vn/uploads/10-2019/vinpearl.jpg",
];

// ===== Component chính =====

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    setSessionId("user_session_" + Date.now());
  }, []);

  // Auto-advance slides - empty deps vì slides/testimonials là constant ngoài component
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(testimonialInterval);
  }, []);

  // Chat function
  const sendMessage = async () => {
    if (!currentMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      text: currentMessage,
      sender: "user",
      timestamp: new Date().toLocaleTimeString("vi-VN"),
    };

    setChatMessages((prev) => [...prev, userMessage]);
    setCurrentMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentMessage,
          sessionId: sessionId,
        }),
      });

      const data = await response.json();

      const botMessage: ChatMessage = {
        id: Date.now() + 1,
        text: data.success
          ? data.response
          : "Xin lỗi, tôi không thể trả lời câu hỏi này lúc này.",
        sender: "bot",
        timestamp: new Date().toLocaleTimeString("vi-VN"),
      };

      setChatMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: Date.now() + 1,
        text: "Xin lỗi, có lỗi xảy ra khi kết nối với chatbot. Vui lòng thử lại sau.",
        sender: "bot",
        timestamp: new Date().toLocaleTimeString("vi-VN"),
      };
      setChatMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Top Bar */}
      <div className="bg-gradient-primary text-primary-foreground py-2.5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-3 text-primary-foreground/90">
              <span className="font-medium">
                Bộ văn hóa, thể thao và du lịch
              </span>
              <span className="text-primary-foreground/40">|</span>
              <span className="font-medium">
                Trường cao đẳng du lịch Đà Nẵng
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <a
                href="https://www.facebook.com/www.dvtc.edu.vn"
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCiqM6sFhr3QO-Ds356BCPfA"
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://zalo.me/302741776451923122"
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Zalo"
              >
                <MessageSquare size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo and Title Row */}
          <div className="relative flex items-center justify-center py-3 sm:py-4 border-b border-border/50">
            <motion.div
              className="flex items-center justify-center gap-3 sm:gap-4 min-w-0 mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.img
                src="https://dvtc.edu.vn/uploads/07-2024/logo-1760.png"
                alt="Trường Cao Đẳng Du Lịch Đà Nẵng"
                className="h-14 sm:h-16 lg:h-20 w-auto shrink-0"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className="min-w-0 flex flex-col justify-center">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight leading-none sm:leading-tight text-foreground">
                  TRƯỜNG CAO ĐẲNG DU LỊCH ĐÀ NẴNG
                </h1>
                <p className="mt-0.5 text-xs sm:text-sm lg:text-base font-medium leading-snug text-muted-foreground">
                  Danang Vocational Tourism College
                </p>
              </div>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 rounded-lg p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Navigation Row - Separate line */}
          <div className="hidden lg:block">
            <nav className="flex items-center justify-center space-x-8 py-4">
              <a
                href="#"
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                Trang chủ
              </a>
              <div className="relative group">
                <button className="text-muted-foreground hover:text-primary font-medium flex items-center transition-colors">
                  Giới thiệu <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-56 rounded-lg border border-border bg-popover text-popover-foreground shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground first:rounded-t-lg"
                  >
                    Thư ngỏ của Hiệu trưởng
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    Giới thiệu chung
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    Tầm nhìn và sứ mệnh
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground last:rounded-b-lg"
                  >
                    Cơ sở vật chất
                  </a>
                </div>
              </div>
              <div className="relative group">
                <button className="text-muted-foreground hover:text-primary font-medium flex items-center transition-colors">
                  Tuyển sinh <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-56 rounded-lg border border-border bg-popover text-popover-foreground shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground first:rounded-t-lg"
                  >
                    Tuyển sinh Cao đẳng
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  >
                    Tuyển sinh Trung cấp
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground last:rounded-b-lg"
                  >
                    Liên kết quốc tế
                  </a>
                </div>
              </div>
              <a
                href="#programs"
                className="text-muted-foreground hover:text-primary font-medium transition-colors"
              >
                Ngành đào tạo
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary font-medium transition-colors"
              >
                Hợp tác quốc tế
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary font-medium transition-colors"
              >
                Liên hệ
              </a>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t">
            <nav className="px-4 py-2 space-y-1">
              <a
                href="#"
                className="block rounded-md px-3 py-2 font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                Trang chủ
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                Giới thiệu
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                Tuyển sinh
              </a>
              <a
                href="#programs"
                className="block rounded-md px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                Ngành đào tạo
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                Hợp tác quốc tế
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                Liên hệ
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Slider */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden group bg-black">
        {/* Tất cả slides render cùng lúc, crossfade bằng CSS transition */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: index === currentSlide ? 1 : 0,
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <motion.div
                  key={`badge-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    index === currentSlide
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Chào mừng đến với DVTC
                  </span>
                </motion.div>
                <motion.h2
                  key={`title-${index}`}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    index === currentSlide
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {slide.title}
                </motion.h2>
                <motion.div
                  key={`cta-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    index === currentSlide
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Button
                    size="lg"
                    className="h-12 px-8 text-base md:text-lg bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Tìm hiểu ngay
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <motion.button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + slides.length) % slides.length,
            )
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 p-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20"
          aria-label="Previous slide"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 p-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20"
          aria-label="Next slide"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        {/* Slider indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                index === currentSlide
                  ? "w-10 h-3 rounded-full bg-white"
                  : "w-3 h-3 rounded-full bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Student Testimonials & Video Section */}
      <section className="py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                <Play className="w-4 h-4" />
                Trải nghiệm thực tế
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Khám phá môi trường học tập
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Video và cảm nhận từ sinh viên của chúng tôi
              </p>
            </div>
          </ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Video Section */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Play className="w-5 h-5 mr-2 text-primary" />
                Video giới thiệu
              </h3>
              <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <video
                  className="w-full h-auto"
                  controls
                  autoPlay
                  loop
                  muted
                  poster="https://dvtc.edu.vn/public/video/Van_hoa_ung_xu.mp4"
                >
                  <source
                    src="https://dvtc.edu.vn/public/video/Van_hoa_ung_xu.mp4"
                    type="video/mp4"
                  />
                  Trình duyệt của bạn không hỗ trợ video.
                </video>
              </div>
            </div>

            {/* Testimonials Section */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Quote className="w-5 h-5 mr-2 text-primary" />
                Cảm nhận sinh viên
              </h3>
              <div className="relative">
                <div className="rounded-xl border border-border bg-card text-card-foreground p-8 shadow-sm">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`transition-opacity duration-500 ${
                        index === currentTestimonial
                          ? "opacity-100"
                          : "opacity-0 absolute inset-0"
                      }`}
                    >
                      <p className="text-muted-foreground mb-6 italic">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {testimonial.author}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.class}
                          </p>
                          <p className="text-sm text-primary">
                            {testimonial.department}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonial
                          ? "bg-primary"
                          : "bg-border"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section
        id="programs"
        className="py-24 bg-background relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                <GraduationCap className="w-4 h-4" />
                Đào tạo chất lượng cao
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ngành nghề đào tạo
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Các ngành đào tạo đa dạng, đáp ứng nhu cầu phát triển của ngành
                du lịch và dịch vụ
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            staggerDelay={0.1}
          >
            {trainingPrograms.map((program, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{
                    y: -8,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="h-full"
                >
                  <Card className="group h-full overflow-hidden shadow-smooth border-0 bg-card">
                    <div className="relative h-52 overflow-hidden">
                      <motion.img
                        src={program.image}
                        alt={program.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-xl bg-primary/20 backdrop-blur-sm text-white">
                          {program.icon}
                        </div>
                        <h3 className="text-lg font-bold text-white leading-tight">
                          {program.name}
                        </h3>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                      >
                        Tìm hiểu thêm
                        <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gradient-to-b from-muted/40 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-sm">
              <Calendar className="w-4 h-4 mr-2 text-primary" />
              Bản tin mới nhất
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-3">
              Tin tức & Thông báo
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Cập nhật hoạt động, hợp tác và thông báo quan trọng từ nhà trường.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Tin tức sự kiện */}
            <Card className="group relative overflow-hidden border-border/60 bg-card/80 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-primary">
                    <Calendar className="w-5 h-5" />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      Tin tức sự kiện
                    </span>
                  </div>
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    Mới nhất
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                {newsData.events.map((news, index) => (
                  <article
                    key={index}
                    className="flex gap-4 border-b border-border/60 pb-4 last:border-b-0 last:pb-0"
                  >
                    {news.image && (
                      <img
                        src={news.image}
                        alt={news.title}
                        className="h-16 w-20 rounded-md object-cover ring-1 ring-border/50"
                      />
                    )}
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-foreground leading-snug line-clamp-2">
                        {news.title}
                      </h4>
                      <a
                        href={news.link}
                        className="mt-2 inline-flex items-center text-sm font-medium text-primary hover:underline"
                      >
                        Đọc thêm
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </article>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  Xem tất cả
                </Button>
              </CardContent>
            </Card>

            {/* Hợp tác doanh nghiệp */}
            <Card className="group relative overflow-hidden border-border/60 bg-card/80 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-primary">
                    <Building2 className="w-5 h-5" />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      Hợp tác doanh nghiệp
                    </span>
                  </div>
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
                    Đối tác
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                {newsData.partnerships.map((news, index) => (
                  <article
                    key={index}
                    className="flex gap-4 border-b border-border/60 pb-4 last:border-b-0 last:pb-0"
                  >
                    {news.image && (
                      <img
                        src={news.image}
                        alt={news.title}
                        className="h-16 w-20 rounded-md object-cover ring-1 ring-border/50"
                      />
                    )}
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-foreground leading-snug line-clamp-2">
                        {news.title}
                      </h4>
                      <a
                        href={news.link}
                        className="mt-2 inline-flex items-center text-sm font-medium text-primary hover:underline"
                      >
                        Đọc thêm
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </article>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  Xem tất cả
                </Button>
              </CardContent>
            </Card>

            {/* Thông báo chung */}
            <Card className="group relative overflow-hidden border-border/60 bg-card/80 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-primary">
                    <Clock className="w-5 h-5" />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      Thông báo chung
                    </span>
                  </div>
                  <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                    Lịch học
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                {newsData.announcements.map((news, index) => (
                  <article
                    key={index}
                    className="flex gap-4 border-b border-border/60 pb-4 last:border-b-0 last:pb-0"
                  >
                    {news.image && (
                      <img
                        src={news.image}
                        alt={news.title}
                        className="h-16 w-20 rounded-md object-cover ring-1 ring-border/50"
                      />
                    )}
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-foreground leading-snug line-clamp-2">
                        {news.title}
                      </h4>
                      <a
                        href={news.link}
                        className="mt-2 inline-flex items-center text-sm font-medium text-primary hover:underline"
                      >
                        Đọc thêm
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </article>
                ))}
                <Button variant="outline" size="sm" className="w-full">
                  Xem tất cả
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-4 text-sm font-semibold text-secondary-foreground bg-secondary rounded-full">
              <Users className="w-4 h-4 mr-2" />
              Đối tác chiến lược
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Đối tác
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Các doanh nghiệp uy tín hợp tác với trường
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg border border-border bg-card p-4 transition-all duration-300 group hover:bg-accent hover:shadow-sm"
              >
                <img
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  className="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Star className="w-4 h-4" />
              Cơ hội nghề nghiệp tương lai
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Sẵn sàng bắt đầu sự nghiệp du lịch?
            </h2>

            <p className="text-lg md:text-xl mb-10 text-white/80 max-w-3xl mx-auto leading-relaxed">
              Hãy cùng Trường Cao Đẳng Du Lịch Đà Nẵng xây dựng tương lai của
              bạn với đào tạo chất lượng cao và cơ hội việc làm hấp dẫn.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="h-14 px-8 text-base bg-white text-gray-900 hover:bg-gray-100 shadow-lg"
                >
                  Đăng ký tuyển sinh
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="ghost"
                  className="h-14 px-8 text-base text-white hover:bg-white/10 border border-white/20"
                >
                  Tìm hiểu thêm
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter value={20} suffix="+" />
                </div>
                <div className="text-sm text-white/70">Năm kinh nghiệm</div>
              </div>
              <div className="text-center border-x border-white/20 px-4">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter value={5000} suffix="+" />
                </div>
                <div className="text-sm text-white/70">Sinh viên</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter value={95} suffix="%" />
                </div>
                <div className="text-sm text-white/70">Có việc làm</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <GraduationCap className="w-4 h-4" />
                Trường Cao Đẳng Du Lịch Đà Nẵng
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground">
                Chắp cánh nghề nghiệp du lịch
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Kết nối đào tạo, trải nghiệm thực tế và cơ hội việc làm với hệ
                sinh thái doanh nghiệp du lịch - dịch vụ.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                  <span>
                    Nam Kỳ Khởi Nghĩa, Tổ 43, Hòa Hải, Ngũ Hành Sơn, Đà Nẵng
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>(0236)3 957 957 (Phòng Đào Tạo)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>info@dvtc.edu.vn</span>
                </li>
              </ul>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://www.facebook.com/www.dvtc.edu.vn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCiqM6sFhr3QO-Ds356BCPfA"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  aria-label="YouTube"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="https://zalo.me/302741776451923122"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  aria-label="Zalo"
                >
                  <MessageSquare size={18} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                  Liên kết nhanh
                </h4>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-primary">
                      Giới thiệu
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Tuyển sinh
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Ngành đào tạo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Hợp tác quốc tế
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                  Hỗ trợ sinh viên
                </h4>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-primary">
                      Thời khóa biểu
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Lịch thi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Biểu mẫu chung
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Tra cứu văn bằng
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Thư viện
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                  Thông tin tuyển sinh
                </h4>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-primary">
                      Hồ sơ nhập học
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Học phí & học bổng
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Lịch tư vấn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Câu hỏi thường gặp
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary">
                      Tư vấn trực tuyến
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>
              &copy; 2024 Trường Cao Đẳng Du Lịch Đà Nẵng. Bản quyền thuộc về
              Trường Cao Đẳng Du Lịch Đà Nẵng
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary">
                Chính sách bảo mật
              </a>
              <a href="#" className="hover:text-primary">
                Điều khoản sử dụng
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-end sm:left-auto sm:right-6 sm:bottom-6">
        {/* Chat Button */}
        <AnimatePresence>
          {!isChatOpen && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <motion.button
                onClick={() => setIsChatOpen(true)}
                className="size-16 rounded-full bg-gradient-primary text-white shadow-lg flex items-center justify-center animate-pulse-glow"
                aria-label="Mở chatbot"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                }}
              >
                <MessageSquare size={28} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Window */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-background rounded-2xl shadow-2xl w-full sm:w-[400px] h-[70dvh] sm:h-[600px] max-h-[calc(100dvh-2rem)] flex flex-col border border-border overflow-hidden"
            >
              {/* Chat Header */}
              <div className="bg-gradient-primary text-white p-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Chatbot DVTC</h3>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <p className="text-xs text-white/80">
                        Hỗ trợ trực tuyến 24/7
                      </p>
                    </div>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsChatOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Đóng chatbot"
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {chatMessages.length === 0 && (
                  <div className="text-center text-muted-foreground py-8">
                    <MessageCircle
                      size={48}
                      className="mx-auto mb-4 text-muted-foreground/40"
                    />
                    <p>
                      Xin chào! Tôi là chatbot của Trường Cao Đẳng Du Lịch Đà
                      Nẵng.
                    </p>
                    <p className="text-sm mt-2">Tôi có thể giúp gì cho bạn?</p>
                  </div>
                )}

                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] sm:max-w-[70%] p-3 rounded-lg ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground rounded-br-none"
                          : "bg-muted text-foreground rounded-bl-none"
                      }`}
                    >
                      <div className="text-sm leading-relaxed">
                        <ReactMarkdown
                          components={{
                            a: ({ children, ...props }) => (
                              <a
                                {...props}
                                target="_blank"
                                rel="noreferrer"
                                className="underline underline-offset-4 hover:opacity-80"
                              >
                                {children}
                              </a>
                            ),
                            code: ({ children, className, ...props }) => {
                              const isBlock =
                                typeof className === "string" &&
                                className.includes("language-");
                              if (isBlock) {
                                return (
                                  <code
                                    {...props}
                                    className="block whitespace-pre overflow-x-auto rounded-md bg-background/60 p-3 text-xs"
                                  >
                                    {children}
                                  </code>
                                );
                              }

                              return (
                                <code
                                  {...props}
                                  className="rounded bg-background/60 px-1 py-0.5 text-[0.8125rem]"
                                >
                                  {children}
                                </code>
                              );
                            },
                            pre: ({ children }) => (
                              <pre className="my-2 overflow-x-auto rounded-md bg-background/60 p-3 text-xs">
                                {children}
                              </pre>
                            ),
                            ul: ({ children }) => (
                              <ul className="my-2 list-disc pl-5">
                                {children}
                              </ul>
                            ),
                            ol: ({ children }) => (
                              <ol className="my-2 list-decimal pl-5">
                                {children}
                              </ol>
                            ),
                            li: ({ children }) => (
                              <li className="my-1">{children}</li>
                            ),
                            p: ({ children }) => (
                              <p className="my-1">{children}</p>
                            ),
                          }}
                        >
                          {message.text}
                        </ReactMarkdown>
                      </div>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "user"
                            ? "text-primary-foreground/70"
                            : "text-muted-foreground"
                        }`}
                      >
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-lg rounded-bl-none p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-border pb-[calc(env(safe-area-inset-bottom)+1rem)]">
                <div className="flex space-x-2">
                  <Input
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Nhập tin nhắn..."
                    disabled={isLoading}
                    className="h-11 sm:h-9"
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={isLoading || !currentMessage.trim()}
                    size="icon"
                    className="size-11 sm:size-9"
                    aria-label="Gửi tin nhắn"
                  >
                    <Send size={16} />
                  </Button>
                </div>

                {/* Quick Actions */}
                <div className="mt-2 flex flex-wrap gap-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs h-8 px-3 py-0 sm:h-6 sm:px-2"
                    onClick={() => setCurrentMessage("Tuyển sinh 2026")}
                    disabled={isLoading}
                  >
                    Tuyển sinh 2026
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs h-8 px-3 py-0 sm:h-6 sm:px-2"
                    onClick={() => setCurrentMessage("Các ngành đào tạo")}
                    disabled={isLoading}
                  >
                    Ngành đào tạo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs h-8 px-3 py-0 sm:h-6 sm:px-2"
                    onClick={() => setCurrentMessage("Học phí")}
                    disabled={isLoading}
                  >
                    Học phí
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
