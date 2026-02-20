import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import ChatbotWidget from "@/components/ChatbotWidget";
import NavigationMenu from "@/components/NavigationMenu";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["vietnamese", "latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "TRƯỜNG CAO ĐẲNG DU LỊCH ĐÀ NẴNG | Danang Vocational Tourism College",
  description:
    "Trường Cao Đẳng Du Lịch Đà Nẵng, Danang Vocational Tourism College",
  keywords:
    "Trường Cao Đẳng Du Lịch Đà Nẵng, Danang Vocational Tourism College",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi-vn">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body
        className={`${roboto.variable} antialiased min-h-screen flex flex-col font-roboto text-[#333]`}
      >
        {/* HEADER */}
        <header className="w-full bg-white z-50">
          {/* Header Top */}
          <section className="bg-[#401419] text-[#ccc] py-1 text-xs sm:text-sm">
            <div className="container mx-auto px-4 flex justify-between items-center">
              {/* Socials */}
              <div className="flex gap-3 text-white">
                <a
                  href="https://www.facebook.com/www.dvtc.edu.vn"
                  className="hover:text-primary"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="https://plus.google.com"
                  className="hover:text-primary"
                >
                  <i className="fa fa-google-plus"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCiqM6sFhr3QO-Ds356BCPfA"
                  className="hover:text-primary"
                >
                  <i className="fa fa-youtube"></i>
                </a>
              </div>

              {/* Top Menu & Language */}
              <div className="flex items-center gap-4">
                <ul className="hidden md:flex gap-4 text-[#ccc]">
                  <li className="hover:text-white">
                    <a href="/">Trang chủ</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="https://zalo.me/302741776451923122">
                      Zalo Official
                    </a>
                  </li>
                  <li className="hover:text-white">
                    <a href="#">Thời khóa biểu</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="#">Lịch thi</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="#">Biểu mẫu chung</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="#">Tra cứu văn bằng</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="#">Thư viện</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="#">Tuyển dụng</a>
                  </li>
                  <li className="hover:text-white">
                    <a href="#">Liên hệ</a>
                  </li>
                </ul>
                <div className="flex gap-2 font-bold uppercase text-xs">
                  <a href="/" className="text-white hover:text-primary">
                    VN
                  </a>
                  <span className="text-gray-500">|</span>
                  <a href="/en" className="text-gray-500 hover:text-white">
                    EN
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Header Banner */}
          <section className="py-4 border-b border-gray-100">
            <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
              <div className="flex items-center gap-4">
                <h1 className="m-0">
                  <a href="/">
                    <img
                      src="/logo-1760.png"
                      alt="logo"
                      className="h-16 md:h-20"
                    />
                  </a>
                </h1>
              </div>
              <div className="hidden md:block text-right">
                <h5 className="text-[#333] text-sm font-bold uppercase mb-1">
                  Bộ văn hóa, thể thao và du lịch
                </h5>
                <p className="text-primary font-bold text-lg uppercase m-0">
                  Trường cao đẳng du lịch Đà Nẵng
                </p>
              </div>
            </div>
          </section>

          {/* Main Menu */}
          <section className="bg-primary text-white shadow-md sticky top-0 z-40">
            <div className="container mx-auto px-4">
              <NavigationMenu />
            </div>
          </section>
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer className="bg-[#401419] text-[#ccc] py-10 mt-0 text-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              {/* Info Info */}
              <div className="w-full lg:w-5/12 px-4 mb-8 lg:mb-0">
                <h5 className="text-white font-bold uppercase mb-4">
                  Trường cao đẳng du lịch Đà Nẵng
                </h5>
                <ul className="space-y-2 mb-6">
                  <li>
                    <i className="fa fa-map-marker mr-2 w-4"></i> Địa chỉ: Nam
                    Kỳ Khởi Nghĩa, Tổ 43, Hòa Hải, Ngũ Hành Sơn, Đà Nẵng
                  </li>
                  <li>
                    <i className="fa fa-phone mr-2 w-4"></i> Điện thoại: (0236)3
                    957 957 (Phòng Đào Tạo)
                  </li>
                  <li>
                    <i className="fa fa-fax mr-2 w-4"></i> Fax: (0236)3 957 956
                    - Email: info@dvtc.edu.vn
                  </li>
                </ul>
                <div className="text-xs border-t border-white/20 pt-4 mt-4">
                  Bản quyền thuộc Trường Cao Đẳng Du Lịch Đà Nẵng
                </div>
              </div>

              {/* Map */}
              <div className="w-full md:w-1/2 lg:w-4/12 px-4 mb-8 md:mb-0">
                <iframe
                  allowFullScreen={true}
                  frameBorder="0"
                  height="180"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1076.358035845208!2d108.25718621221806!3d15.976822507479588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314211bf8fcbf719%3A0x404221bc9e450352!2zVHLGsOG7nW5nIGNhbyDEkeG6s25nIGR1IGzhu4tjaCDEkMOgIE7hurVuZw!5e0!3m2!1svi!2s!4v1578116283878!5m2!1svi!2s"
                  style={{ border: 0, width: "100%" }}
                  width="350"
                ></iframe>
              </div>

              {/* Stats & Social */}
              <div className="w-full md:w-1/2 lg:w-3/12 px-4">
                <div className="flex gap-3 text-white text-lg mb-6">
                  <a href="#" className="hover:text-primary">
                    <i className="fa fa-facebook bg-white/10 p-2 rounded"></i>
                  </a>
                  <a href="#" className="hover:text-primary">
                    <i className="fa fa-google-plus bg-white/10 p-2 rounded"></i>
                  </a>
                  <a href="#" className="hover:text-primary">
                    <i className="fa fa-youtube bg-white/10 p-2 rounded"></i>
                  </a>
                </div>

                <div className="bg-white/5 p-4 rounded text-xs">
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="flex items-center gap-2">
                        <i className="fa fa-user"></i> Trực tuyến
                      </span>
                      <span className="font-bold text-white">27</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="flex items-center gap-2">
                        <i className="fa fa-calendar"></i> Truy cập tháng
                      </span>
                      <span className="font-bold text-white">45,397</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="flex items-center gap-2">
                        <i className="fa fa-bar-chart"></i> Tổng lượt truy cập
                      </span>
                      <span className="font-bold text-white">7,299,241</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* FLOATING ACTION BUTTONS (Khảo sát, Đăng ký) */}
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-40 hidden md:flex flex-col gap-2 shadow-lg">
          <a
            href="#"
            className="bg-[#1687c5] text-white px-4 py-3 rounded-l-md hover:pr-8 transition-all flex items-center shadow-md whitespace-nowrap overflow-hidden group"
          >
            <i className="fa fa-edit text-xl w-6"></i>
            <span className="ml-2 hidden group-hover:inline-block transition-all">
              Khảo sát người học
            </span>
          </a>
          <a
            href="#"
            className="bg-[#d35400] text-white px-4 py-3 rounded-l-md hover:pr-8 transition-all flex items-center shadow-md whitespace-nowrap overflow-hidden group"
          >
            <i className="fa fa-pencil-square-o text-xl w-6"></i>
            <span className="ml-2 hidden group-hover:inline-block transition-all">
              Đăng ký tuyển sinh online
            </span>
          </a>
        </div>

        {/* CHATBOT */}
        <ChatbotWidget />
      </body>
    </html>
  );
}
