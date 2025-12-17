'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import ReactMarkdown from 'react-markdown'
import { Menu, X, GraduationCap, Users, Award, BookOpen, Phone, Mail, MapPin, Facebook, Youtube, Globe, Play, Quote, Calendar, Clock, ChevronRight, ChevronLeft, Hotel, Utensils, Plane, Languages, Camera, Users2, MessageCircle, Send, Building2, Star, MessageSquare } from 'lucide-react'

interface ChatMessage {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: string
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [currentMessage, setCurrentMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState('')

  useEffect(() => {
    setSessionId('user_session_' + Date.now())
  }, [])

  // Slider data from original website
  const slides = [
    {
      image: '/images/slides/ts2026.png',
      title: 'Tuyển sinh 2026',
      link: 'https://dvtc.edu.vn/thong-bao-tuyen-sinh-nam-2025.html'
    },
    {
      image: '/images/slides/nganh-huong-dan-du-lich.png',
      title: 'Ngành Hướng dẫn du lịch',
      link: '#'
    },
    {
      image: '/images/slides/nganh-ky-thuat-che-bien-mon-an.png',
      title: 'Ngành Kỹ thuật chế biến món ăn',
      link: '#'
    },
    {
      image: '/images/slides/nganh-phien-dich-tieng-anh-du-lich.png',
      title: 'Ngành Phiên dịch tiếng Anh du lịch',
      link: '#'
    },
    {
      image: '/images/slides/nganh-quan-tri-du-lich-mice-to-chuc-su-kien.png',
      title: 'Ngành Quản trị Du lịch MICE',
      link: '#'
    },
    {
      image: '/images/slides/nganh-quan-tri-khach-san.png',
      title: 'Ngành Quản trị khách sạn',
      link: '#'
    }
  ]

  // Testimonials from original website
  const testimonials = [
    {
      content: 'Thư viện nhiều đầu sách và đa dạng về sách tham khảo, có chỗ cho sinh viên nghỉ trưa sau những giờ học căng thẳng.',
      author: 'Nguyễn Thị Thu Thảo',
      class: 'Lớp 8CKS7',
      department: 'Khoa Quản trị khách sạn, nhà hàng',
      avatar: 'https://dvtc.edu.vn/uploads/09-2019/anh-avatar-thao.png'
    },
    {
      content: 'Phòng thực hành của Trường rất hiện đại với đầy đủ trang thiết bị giống như tại các khách sạn 5 sao mà em đã từng đi thực tập.',
      author: 'Lê Thị Thúy Ngân',
      class: 'Lớp 8CKS7',
      department: 'Khoa Quản trị khách sạn, nhà hàng',
      avatar: 'https://dvtc.edu.vn/uploads/09-2019/anh-avatar_ngan.png'
    },
    {
      content: 'Khuôn viên Trường mình đẹp và sạch sẽ nhất so với những Trường khác mà mình đã ghé qua. Thật tuyệt khi đi bộ hay ngồi đọc sách dưới tán cây xanh trong sân Trường.',
      author: 'Phạm Thị Thục Quỳnh',
      class: 'Lớp 8CKS7',
      department: 'Khoa Quản trị khách sạn, nhà hàng',
      avatar: 'https://dvtc.edu.vn/uploads/09-2019/anh-avatar_quynh.png'
    }
  ]

  // Training programs from original website
  const trainingPrograms = [
    {
      name: 'Truyền thông đa phương tiện',
      icon: <Camera className="w-8 h-8" />,
      image: 'https://dvtc.edu.vn/uploads/01-2025/truyen-thong-da-phuong-tien.png',
      link: 'http://dvtc.edu.vn/truyen-thong-da-phuong-tien.html'
    },
    {
      name: 'Hướng dẫn du lịch',
      icon: <Users2 className="w-8 h-8" />,
      image: 'https://dvtc.edu.vn/uploads/01-2025/huong-dan-du-lich.png',
      link: 'http://dvtc.edu.vn/huong-dan-du-lich.html'
    },
    {
      name: 'Quản trị lữ hành',
      icon: <Plane className="w-8 h-8" />,
      image: 'https://dvtc.edu.vn/uploads/01-2025/quan-tri-lu-hanh.png',
      link: 'http://dvtc.edu.vn/quan-tri-lu-hanh.html'
    },
    {
      name: 'Phiên dịch tiếng Anh du lịch',
      icon: <Languages className="w-8 h-8" />,
      image: 'https://dvtc.edu.vn/uploads/01-2025/phien-dich-tieng-anh-du-lich.png',
      link: 'http://dvtc.edu.vn/phien-dich-tieng-anh-du-lich.html'
    },
    {
      name: 'Quản trị khu resort',
      icon: <Hotel className="w-8 h-8" />,
      image: 'https://dvtc.edu.vn/uploads/01-2025/quan-tri-khu-resort.png',
      link: 'http://dvtc.edu.vn/quan-tri-khu-resort.html'
    },
    {
      name: 'Quản trị nhà hàng',
      icon: <Utensils className="w-8 h-8" />,
      image: 'https://dvtc.edu.vn/uploads/01-2025/quan-tri-nha-hang.png',
      link: 'http://dvtc.edu.vn/quan-tri-nha-hang.html'
    },
    {
      name: 'Quản trị Du lịch MICE',
      icon: <MessageSquare className="w-8 h-8" />,
      image: 'https://dvtc.edu.vn/uploads/01-2025/quan-tri-du-lich-mic-to-chuc-su-kien.png',
      link: 'http://dvtc.edu.vn/quan-tri-du-lich-mice-to-chuc-su-kien.html'
    },
    {
      name: 'Quản trị khách sạn',
      icon: <Building2 className="w-8 h-8" />,
      image: 'https://dvtc.edu.vn/uploads/01-2025/quan-tri-khach-san.png',
      link: 'http://dvtc.edu.vn/nganh-nghe-dao-tao/quan-tri-khach-san/'
    },
    {
      name: 'Kỹ thuật chế biến món ăn',
      icon: <Utensils className="w-8 h-8" />,
      image: 'https://dvtc.edu.vn/uploads/01-2025/ky-thuat-che-bien-mon-an.png',
      link: 'http://dvtc.edu.vn/nganh-nghe-dao-tao/ky-thuat-che-bien-mon-an/'
    }
  ]

  // News data from original website
  const newsData = {
    events: [
      {
        title: '🌟 CHƯƠNG TRÌNH GIAO LƯU ẨM THỰC VỚI HIỆP HỘI XUẤT KHẨU TRỨNG & GIA CẦM HOA KỲ – LẦN THỨ 4.',
        image: 'https://dvtc.edu.vn/uploads/12-2025/am-thuc.jpg',
        link: 'http://dvtc.edu.vn/-chuong-trinh-giao-luu-am-thuc-voi-hiep-hoi-xuat-khau-trung-gia-cam-hoa-ky-lan-thu-4..html'
      },
      {
        title: 'CHÚC MỪNG ĐẠI HỘI CÔNG ĐOÀN TRƯỜNG CĐ DU LỊCH ĐÀ NẴNG THÀNH CÔNG TỐT ĐẸP 💐💐',
        link: 'http://dvtc.edu.vn/chuc-mung-dai-hoi-cong-doan-truong-cd-du-lich-da-nang-thanh-cong-tot-dep-.html'
      },
      {
        title: '🎉 KỶ NIỆM 43 NĂM NGÀY NHÀ GIÁO VIỆT NAM 20/11',
        link: 'http://dvtc.edu.vn/-ky-niem-43-nam-ngay-nha-giao-viet-nam-2011.html'
      }
    ],
    partnerships: [
      {
        title: '🎉LỄ KÝ KẾT HỢP TÁC GIỮA TRƯỜNG CAO ĐẲNG DU LỊCH ĐÀ NẴNG VÀ FUSION RESORT & VILLAS DA NANG',
        image: 'https://dvtc.edu.vn/uploads/02-2025/6-1848.jpg',
        link: 'http://dvtc.edu.vn/le-ky-ket-hop-tac-giua-truong-cao-dang-du-lich-da-nang-va-fusion-resort-villas-da-nang.html'
      },
      {
        title: 'TRƯỜNG CAO ĐẲNG DU LỊCHĐÀ NẴNG KÝ KẾT BIÊN BẢN GHI NHỚ HỢP TÁC CHIẾN LƯỢC VỚI THE FIVE – THƯƠNG HIỆU NGHĨ DƯỠNG ...',
        link: 'http://dvtc.edu.vn/truong-cao-dang-du-lich-da-nang-ky-ket-bien-ban-ghi-nho-hop-tac-chien-luoc-voi-the-five-thuong-hieu-nghi-duong-cao-cap-cua-tap-doan-thanh-cong.html'
      }
    ],
    announcements: [
      {
        title: 'THÔNG BÁO LỊCH THI KTM KHÓA 13, HKI 2025-2026 (15/12/2025-02/01/2026)',
        image: 'https://dvtc.edu.vn/public/images/thongbao.jpg',
        link: 'http://dvtc.edu.vn/thong-bao-lich-thi-ktm-khoa-13-hki-2025-2026-15122025-02012026.html'
      },
      {
        title: 'Thời khóa biểu tuần 16 từ ngày 15/12 đến ngày 21/12/2025 - Cao đẳng khóa 13,14,15; Trung cấp khóa 8,9',
        link: 'http://dvtc.edu.vn/thoi-khoa-bieu-tuan-16-tu-ngay-1512-den-ngay-21122025-cao-dang-khoa-131415-trung-cap-khoa-89.html'
      }
    ]
  }

  // Partners from original website
  const partners = [
    'https://dvtc.edu.vn/uploads/09-2020/logo1-1048.jpg',
    'https://dvtc.edu.vn/uploads/09-2020/logo21.jpg',
    'https://dvtc.edu.vn/uploads/09-2020/logo31.jpg',
    'https://dvtc.edu.vn/uploads/09-2020/logo41.jpg',
    'https://dvtc.edu.vn/uploads/05-2020/logo1.jpg',
    'https://dvtc.edu.vn/uploads/10-2019/furama.jpg',
    'https://dvtc.edu.vn/uploads/10-2019/fusionmaia.jpg',
    'https://dvtc.edu.vn/uploads/10-2019/petrolimex.jpg',
    'https://dvtc.edu.vn/uploads/10-2019/sunworld.jpg',
    'https://dvtc.edu.vn/uploads/10-2019/vietnamtourism-vitours.jpg',
    'https://dvtc.edu.vn/uploads/10-2019/vinpearl.jpg'
  ]

  // Auto-advance slides
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(slideInterval)
  }, [slides.length])

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(testimonialInterval)
  }, [testimonials.length])

  // Chat function
  const sendMessage = async () => {
    if (!currentMessage.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now(),
      text: currentMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('vi-VN')
    }

    setChatMessages(prev => [...prev, userMessage])
    setCurrentMessage('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentMessage,
          sessionId: sessionId
        })
      })

      const data = await response.json()
      
      const botMessage: ChatMessage = {
        id: Date.now() + 1,
        text: data.success ? data.response : 'Xin lỗi, tôi không thể trả lời câu hỏi này lúc này.',
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('vi-VN')
      }

      setChatMessages(prev => [...prev, botMessage])
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: Date.now() + 1,
        text: 'Xin lỗi, có lỗi xảy ra khi kết nối với chatbot. Vui lòng thử lại sau.',
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('vi-VN')
      }
      setChatMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>Bộ văn hóa, thể thao và du lịch</span>
              <span>|</span>
              <span>Trường cao đẳng du lịch Đà Nẵng</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/www.dvtc.edu.vn" className="hover:text-primary-foreground/80">
                <Facebook size={16} />
              </a>
              <a href="https://www.youtube.com/channel/UCiqM6sFhr3QO-Ds356BCPfA" className="hover:text-primary-foreground/80">
                <Youtube size={16} />
              </a>
              <a href="https://zalo.me/302741776451923122" className="hover:text-primary-foreground/80">
                <MessageSquare size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo and Title Row */}
          <div className="relative flex items-center justify-center py-3 sm:py-4 border-b border-border">
            <div className="flex items-center justify-center gap-3 sm:gap-4 min-w-0 mx-auto">
              <img 
                src="https://dvtc.edu.vn/uploads/07-2024/logo-1760.png" 
                alt="Trường Cao Đẳng Du Lịch Đà Nẵng" 
                className="h-14 sm:h-16 lg:h-20 w-auto shrink-0"
              />
              <div className="min-w-0 flex flex-col justify-center">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight leading-none sm:leading-tight text-foreground">
                  TRƯỜNG CAO ĐẲNG DU LỊCH ĐÀ NẴNG
                </h1>
                <p className="mt-0.5 text-xs sm:text-sm lg:text-base font-medium leading-snug text-muted-foreground">
                  Danang Vocational Tourism College
                </p>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Navigation Row - Separate line */}
          <div className="hidden lg:block">
            <nav className="flex items-center justify-center space-x-8 py-4">
              <a href="#" className="text-foreground hover:text-primary font-medium transition-colors">Trang chủ</a>
              <div className="relative group">
                <button className="text-muted-foreground hover:text-primary font-medium flex items-center transition-colors">
                  Giới thiệu <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-56 rounded-lg border border-border bg-popover text-popover-foreground shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="#" className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground first:rounded-t-lg">Thư ngỏ của Hiệu trưởng</a>
                  <a href="#" className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Giới thiệu chung</a>
                  <a href="#" className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Tầm nhìn và sứ mệnh</a>
                  <a href="#" className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground last:rounded-b-lg">Cơ sở vật chất</a>
                </div>
              </div>
              <div className="relative group">
                <button className="text-muted-foreground hover:text-primary font-medium flex items-center transition-colors">
                  Tuyển sinh <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-56 rounded-lg border border-border bg-popover text-popover-foreground shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="#" className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground first:rounded-t-lg">Tuyển sinh Cao đẳng</a>
                  <a href="#" className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">Tuyển sinh Trung cấp</a>
                  <a href="#" className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground last:rounded-b-lg">Liên kết quốc tế</a>
                </div>
              </div>
              <a href="#programs" className="text-muted-foreground hover:text-primary font-medium transition-colors">Ngành đào tạo</a>
              <a href="#" className="text-muted-foreground hover:text-primary font-medium transition-colors">Hợp tác quốc tế</a>
              <a href="#" className="text-muted-foreground hover:text-primary font-medium transition-colors">Liên hệ</a>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t">
            <nav className="px-4 py-2 space-y-1">
              <a href="#" className="block rounded-md px-3 py-2 font-medium text-foreground hover:bg-accent hover:text-accent-foreground">Trang chủ</a>
              <a href="#" className="block rounded-md px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground">Giới thiệu</a>
              <a href="#" className="block rounded-md px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground">Tuyển sinh</a>
              <a href="#programs" className="block rounded-md px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground">Ngành đào tạo</a>
              <a href="#" className="block rounded-md px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground">Hợp tác quốc tế</a>
              <a href="#" className="block rounded-md px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground">Liên hệ</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Slider */}
      <section className="relative h-125 overflow-hidden group bg-muted">
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
                onError={(e) => {
                  console.error('Image failed to load:', slide.image);
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-linear-to-b from-foreground/70 via-foreground/50 to-foreground/80 flex items-center justify-center">
                <div className="text-center text-primary-foreground px-4 max-w-4xl">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">{slide.title}</h2>
                  <Button size="lg" className="h-12 px-8 text-base md:text-lg">
                    Tìm hiểu ngay
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-foreground opacity-0 backdrop-blur transition-opacity hover:bg-background group-hover:opacity-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/80 p-2 text-foreground opacity-0 backdrop-blur transition-opacity hover:bg-background group-hover:opacity-100"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Slider indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-background' : 'bg-background/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Student Testimonials & Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trải nghiệm thực tế</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Khám phá môi trường học tập và cảm nhận từ sinh viên của chúng tôi
            </p>
          </div>
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
                  <source src="https://dvtc.edu.vn/public/video/Van_hoa_ung_xu.mp4" type="video/mp4" />
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
                        index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'
                      }`}
                    >
                      <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.class}</p>
                          <p className="text-sm text-primary">{testimonial.department}</p>
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
                        index === currentTestimonial ? 'bg-primary' : 'bg-border'
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
      <section id="programs" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-4 text-sm font-semibold text-secondary-foreground bg-secondary rounded-full">
              <GraduationCap className="w-4 h-4 mr-2" />
              Đào tạo chất lượng cao
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ngành nghề đào tạo</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Các ngành đào tạo đa dạng, đáp ứng nhu cầu phát triển của ngành du lịch và dịch vụ
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-foreground/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-primary-foreground">
                    <div className="flex items-center mb-2">
                      {program.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{program.name}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Tìm hiểu thêm
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tin tức & Thông báo</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cập nhật thông tin mới nhất từ nhà trường
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Tin tức sự kiện */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Calendar className="w-5 h-5 mr-2" />
                  Tin tức sự kiện
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {newsData.events.map((news, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      {news.image && (
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-32 object-cover rounded mb-2"
                        />
                      )}
                      <h4 className="font-semibold text-foreground mb-2 line-clamp-2">{news.title}</h4>
                      <a href={news.link} className="inline-flex items-center text-primary hover:underline text-sm font-semibold">
                        Đọc thêm
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline" size="sm">Xem tất cả</Button>
                </div>
              </CardContent>
            </Card>

            {/* Hợp tác doanh nghiệp */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Building2 className="w-5 h-5 mr-2" />
                  Hợp tác doanh nghiệp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {newsData.partnerships.map((news, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      {news.image && (
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-32 object-cover rounded mb-2"
                        />
                      )}
                      <h4 className="font-semibold text-foreground mb-2 line-clamp-2">{news.title}</h4>
                      <a href={news.link} className="inline-flex items-center text-primary hover:underline text-sm font-semibold">
                        Đọc thêm
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline" size="sm">Xem tất cả</Button>
                </div>
              </CardContent>
            </Card>

            {/* Thông báo chung */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Clock className="w-5 h-5 mr-2" />
                  Thông báo chung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {newsData.announcements.map((news, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      {news.image && (
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-32 object-cover rounded mb-2"
                        />
                      )}
                      <h4 className="font-semibold text-foreground mb-2 line-clamp-2">{news.title}</h4>
                      <a href={news.link} className="inline-flex items-center text-primary hover:underline text-sm font-semibold">
                        Đọc thêm
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="outline" size="sm">Xem tất cả</Button>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Đối tác</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Các doanh nghiệp uy tín hợp tác với trường
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center rounded-lg border border-border bg-card p-4 transition-all duration-300 group hover:bg-accent hover:shadow-sm">
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 mb-6 text-sm font-semibold">
            <Star className="w-4 h-4 mr-2" />
            Cơ hội nghề nghiệp tương lai
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Sẵn sàng bắt đầu sự nghiệp du lịch?
          </h2>

          <p className="text-lg md:text-xl mb-10 text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Hãy cùng Trường Cao Đẳng Du Lịch Đà Nẵng xây dựng tương lai của bạn với đào tạo chất lượng cao và cơ hội việc làm hấp dẫn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
              Đăng ký tuyển sinh
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Tìm hiểu thêm
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">20+</div>
              <div className="text-sm text-primary-foreground/80">Năm kinh nghiệm</div>
            </div>
            <div className="text-center border-x border-primary-foreground/20">
              <div className="text-3xl md:text-4xl font-bold mb-2">5000+</div>
              <div className="text-sm text-primary-foreground/80">Sinh viên</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-sm text-primary-foreground/80">Có việc làm</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Trường Cao Đẳng Du Lịch Đà Nẵng</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1 shrink-0" />
                  <span>Nam Kỳ Khởi Nghĩa, Tổ 43, Hòa Hải, Ngũ Hành Sơn, Đà Nẵng</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(0236)3 957 957 (Phòng Đào Tạo)</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@dvtc.edu.vn</span>
                </li>
              </ul>
              <div className="flex space-x-4 mt-6">
                <a href="https://www.facebook.com/www.dvtc.edu.vn" className="text-primary-foreground/70 hover:text-primary-foreground">
                  <Facebook size={20} />
                </a>
                <a href="https://www.youtube.com/channel/UCiqM6sFhr3QO-Ds356BCPfA" className="text-primary-foreground/70 hover:text-primary-foreground">
                  <Youtube size={20} />
                </a>
                <a href="https://zalo.me/302741776451923122" className="text-primary-foreground/70 hover:text-primary-foreground">
                  <MessageSquare size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Liên kết nhanh</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li><a href="#" className="hover:text-primary-foreground">Giới thiệu</a></li>
                <li><a href="#" className="hover:text-primary-foreground">Tuyển sinh</a></li>
                <li><a href="#" className="hover:text-primary-foreground">Ngành đào tạo</a></li>
                <li><a href="#" className="hover:text-primary-foreground">Hợp tác quốc tế</a></li>
                <li><a href="#" className="hover:text-primary-foreground">Liên hệ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Hỗ trợ sinh viên</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li><a href="#" className="hover:text-primary-foreground">Thời khóa biểu</a></li>
                <li><a href="#" className="hover:text-primary-foreground">Lịch thi</a></li>
                <li><a href="#" className="hover:text-primary-foreground">Biểu mẫu chung</a></li>
                <li><a href="#" className="hover:text-primary-foreground">Tra cứu văn bằng</a></li>
                <li><a href="#" className="hover:text-primary-foreground">Thư viện</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/70">
            <p>&copy; 2024 Trường Cao Đẳng Du Lịch Đà Nẵng. Bản quyền thuộc về Trường Cao Đẳng Du Lịch Đà Nẵng</p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4 z-50">


        {/* Chat Button */}
        {!isChatOpen && (
          <Button
            onClick={() => setIsChatOpen(true)}
            size="icon"
            className="size-14 rounded-full shadow-lg"
          >
            <MessageSquare size={24} />
          </Button>
        )}

        {/* Chat Window */}
        {isChatOpen && (
          <div className="bg-background rounded-lg shadow-xl w-104 sm:w-md h-140 flex flex-col border border-border">
            {/* Chat Header */}
            <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center">
                <MessageCircle size={20} className="mr-2" />
                <div>
                  <h3 className="font-semibold">Chatbot DVTC</h3>
                  <p className="text-xs text-primary-foreground/80">Hỗ trợ trực tuyến 24/7</p>
                </div>
              </div>
              <Button
                onClick={() => setIsChatOpen(false)}
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground p-1 h-auto"
              >
                <X size={20} />
              </Button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatMessages.length === 0 && (
                <div className="text-center text-muted-foreground py-8">
                  <MessageCircle size={48} className="mx-auto mb-4 text-muted-foreground/40" />
                  <p>Xin chào! Tôi là chatbot của Trường Cao Đẳng Du Lịch Đà Nẵng.</p>
                  <p className="text-sm mt-2">Tôi có thể giúp gì cho bạn?</p>
                </div>
              )}
              
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-none'
                        : 'bg-muted text-foreground rounded-bl-none'
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
                            const isBlock = typeof className === 'string' && className.includes('language-')
                            if (isBlock) {
                              return (
                                <code
                                  {...props}
                                  className="block whitespace-pre overflow-x-auto rounded-md bg-background/60 p-3 text-xs"
                                >
                                  {children}
                                </code>
                              )
                            }

                            return (
                              <code
                                {...props}
                                className="rounded bg-background/60 px-1 py-0.5 text-[0.8125rem]"
                              >
                                {children}
                              </code>
                            )
                          },
                          pre: ({ children }) => (
                            <pre className="my-2 overflow-x-auto rounded-md bg-background/60 p-3 text-xs">
                              {children}
                            </pre>
                          ),
                          ul: ({ children }) => (
                            <ul className="my-2 list-disc pl-5">{children}</ul>
                          ),
                          ol: ({ children }) => (
                            <ol className="my-2 list-decimal pl-5">{children}</ol>
                          ),
                          li: ({ children }) => <li className="my-1">{children}</li>,
                          p: ({ children }) => <p className="my-1">{children}</p>,
                        }}
                      >
                        {message.text}
                      </ReactMarkdown>
                    </div>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                    }`}>
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
                      <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Nhập tin nhắn..."
                  disabled={isLoading}
                />
                <Button
                  onClick={sendMessage}
                  disabled={isLoading || !currentMessage.trim()}
                  size="icon"
                >
                  <Send size={16} />
                </Button>
              </div>
              
              {/* Quick Actions */}
              <div className="mt-2 flex flex-wrap gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs h-6 px-2 py-0"
                  onClick={() => setCurrentMessage('Tuyển sinh 2025')}
                  disabled={isLoading}
                >
                  Tuyển sinh 2025
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs h-6 px-2 py-0"
                  onClick={() => setCurrentMessage('Các ngành đào tạo')}
                  disabled={isLoading}
                >
                  Ngành đào tạo
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs h-6 px-2 py-0"
                  onClick={() => setCurrentMessage('Học phí')}
                  disabled={isLoading}
                >
                  Học phí
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}