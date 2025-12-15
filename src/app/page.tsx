'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Menu, X, GraduationCap, Users, Award, BookOpen, Phone, Mail, MapPin, Facebook, Youtube, Globe, Play, Quote, Calendar, Clock, ChevronRight, Hotel, Utensils, Plane, Languages, Camera, Users2, MessageCircle, Send, MapPin2, Building2, Star, MessageSquare } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([])
  const [currentMessage, setCurrentMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState('')

  useEffect(() => {
    setSessionId('user_session_' + Date.now())
  }, [])

  // Slider data from original website
  const slides = [
    {
      image: 'https://dvtc.edu.vn/uploads/05-2025/ts2025.jpg',
      title: 'Tuyển sinh 2025',
      link: 'https://dvtc.edu.vn/thong-bao-tuyen-sinh-nam-2025.html'
    },
    {
      image: 'https://dvtc.edu.vn/uploads/01-2025/nganh-huong-dan-du-lich.png',
      title: 'Ngành Hướng dẫn du lịch',
      link: '#'
    },
    {
      image: 'https://dvtc.edu.vn/uploads/01-2025/nganh-ky-thuat-che-bien-mon-an.png',
      title: 'Ngành Kỹ thuật chế biến món ăn',
      link: '#'
    },
    {
      image: 'https://dvtc.edu.vn/uploads/01-2025/nganh-phien-dich-tieng-anh-du-lich.png',
      title: 'Ngành Phiên dịch tiếng Anh du lịch',
      link: '#'
    },
    {
      image: 'https://dvtc.edu.vn/uploads/01-2025/nganh-quan-tri-du-lich-mice-to-chuc-su-kien.png',
      title: 'Ngành Quản trị Du lịch MICE',
      link: '#'
    },
    {
      image: 'https://dvtc.edu.vn/uploads/01-2025/nganh-quan-tri-khach-san.png',
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

    const userMessage = {
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
      
      const botMessage = {
        id: Date.now() + 1,
        text: data.success ? data.response : 'Xin lỗi, tôi không thể trả lời câu hỏi này lúc này.',
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('vi-VN')
      }

      setChatMessages(prev => [...prev, botMessage])
    } catch (error) {
      const errorMessage = {
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>Bộ văn hóa, thể thao và du lịch</span>
              <span>|</span>
              <span>Trường cao đẳng du lịch Đà Nẵng</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/www.dvtc.edu.vn" className="hover:text-blue-400">
                <Facebook size={16} />
              </a>
              <a href="https://www.youtube.com/channel/UCiqM6sFhr3QO-Ds356BCPfA" className="hover:text-red-400">
                <Youtube size={16} />
              </a>
              <a href="https://zalo.me/302741776451923122" className="hover:text-blue-400">
                <MessageSquare size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="https://dvtc.edu.vn/uploads/07-2024/logo-1760.png" 
                alt="Trường Cao Đẳng Du Lịch Đà Nẵng" 
                className="h-16 w-auto mr-4"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">TRƯỜNG CAO ĐẲNG DU LỊCH ĐÀ NẴNG</h1>
                <p className="text-sm text-gray-600">Danang Vocational Tourism College</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">Trang chủ</a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                  Giới thiệu <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
                </button>
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Thư ngỏ của Hiệu trưởng</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Giới thiệu chung</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Tầm nhìn và sứ mệnh</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Cơ sở vật chất</a>
                </div>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                  Tuyển sinh <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
                </button>
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Tuyển sinh Cao đẳng</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Tuyển sinh Trung cấp</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Liên kết quốc tế</a>
                </div>
              </div>
              <a href="#programs" className="text-gray-700 hover:text-blue-600 font-medium">Ngành đào tạo</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Hợp tác quốc tế</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Liên hệ</a>
              <Button className="bg-blue-600 hover:bg-blue-700">Đăng ký tư vấn</Button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t">
            <nav className="px-4 py-2 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-900 font-medium">Trang chủ</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Giới thiệu</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tuyển sinh</a>
              <a href="#programs" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Ngành đào tạo</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Hợp tác quốc tế</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Liên hệ</a>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Đăng ký tư vấn</Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Slider */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Tìm hiểu ngay
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Slider indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Student Testimonials & Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Video Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Video giới thiệu</h3>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cảm nhận sinh viên</h3>
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-blue-200" />
                <div className="bg-white rounded-lg shadow-lg p-8">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`transition-opacity duration-500 ${
                        index === currentTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'
                      }`}
                    >
                      <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                          <p className="text-sm text-gray-600">{testimonial.class}</p>
                          <p className="text-sm text-blue-600">{testimonial.department}</p>
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
                        index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
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
      <section id="programs" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ngành nghề đào tạo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center mb-2">
                      {program.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{program.name}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    Tìm hiểu thêm
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Tin tức sự kiện */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-600" />
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
                      <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{news.title}</h4>
                      <a href={news.link} className="text-blue-600 hover:text-blue-800 text-sm">
                        Đọc thêm →
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building2 className="w-5 h-5 mr-2 text-green-600" />
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
                      <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{news.title}</h4>
                      <a href={news.link} className="text-green-600 hover:text-green-800 text-sm">
                        Đọc thêm →
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-red-600" />
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
                      <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{news.title}</h4>
                      <a href={news.link} className="text-red-600 hover:text-red-800 text-sm">
                        Đọc thêm →
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Đối tác</h2>
            <p className="text-xl text-gray-600">
              Các doanh nghiệp uy tín hợp tác với trường
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sẵn sàng bắt đầu sự nghiệp du lịch?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Hãy cùng Trường Cao Đẳng Du Lịch Đà Nẵng xây dựng tương lai của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Đăng ký tuyển sinh
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Trường Cao Đẳng Du Lịch Đà Nẵng</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
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
                <a href="https://www.facebook.com/www.dvtc.edu.vn" className="text-gray-400 hover:text-white">
                  <Facebook size={20} />
                </a>
                <a href="https://www.youtube.com/channel/UCiqM6sFhr3QO-Ds356BCPfA" className="text-gray-400 hover:text-white">
                  <Youtube size={20} />
                </a>
                <a href="https://zalo.me/302741776451923122" className="text-gray-400 hover:text-white">
                  <MessageSquare size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Liên kết nhanh</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Giới thiệu</a></li>
                <li><a href="#" className="hover:text-white">Tuyển sinh</a></li>
                <li><a href="#" className="hover:text-white">Ngành đào tạo</a></li>
                <li><a href="#" className="hover:text-white">Hợp tác quốc tế</a></li>
                <li><a href="#" className="hover:text-white">Liên hệ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Hỗ trợ sinh viên</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Thời khóa biểu</a></li>
                <li><a href="#" className="hover:text-white">Lịch thi</a></li>
                <li><a href="#" className="hover:text-white">Biểu mẫu chung</a></li>
                <li><a href="#" className="hover:text-white">Tra cứu văn bằng</a></li>
                <li><a href="#" className="hover:text-white">Thư viện</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
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
            className="bg-blue-600 hover:bg-blue-700 rounded-full w-14 h-14 p-0 shadow-lg flex items-center justify-center"
          >
            <MessageSquare size={24} />
          </Button>
        )}

        {/* Chat Window */}
        {isChatOpen && (
          <div className="bg-white rounded-lg shadow-2xl w-80 h-96 flex flex-col border border-gray-200">
            {/* Chat Header */}
            <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center">
                <MessageCircle size={20} className="mr-2" />
                <div>
                  <h3 className="font-semibold">Chatbot DVTC</h3>
                  <p className="text-xs text-blue-100">Hỗ trợ trực tuyến 24/7</p>
                </div>
              </div>
              <Button
                onClick={() => setIsChatOpen(false)}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-blue-700 p-1 h-auto"
              >
                <X size={20} />
              </Button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatMessages.length === 0 && (
                <div className="text-center text-gray-500 py-8">
                  <MessageCircle size={48} className="mx-auto mb-4 text-gray-300" />
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
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 rounded-lg rounded-bl-none p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Nhập tin nhắn..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isLoading}
                />
                <Button
                  onClick={sendMessage}
                  disabled={isLoading || !currentMessage.trim()}
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2"
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