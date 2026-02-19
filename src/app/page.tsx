import Image from "next/image";

export default function Home() {
  const branches = [
    {
      name: "Truyền thông đa phương tiện",
      img: "https://dvtc.edu.vn/uploads/01-2025/truyen-thong-da-phuong-tien.png",
    },
    {
      name: "Hướng dẫn du lịch",
      img: "https://dvtc.edu.vn/uploads/01-2025/huong-dan-du-lich.png",
    },
    {
      name: "Quản trị lữ hành",
      img: "https://dvtc.edu.vn/uploads/01-2025/quan-tri-lu-hanh.png",
    },
    {
      name: "Phiên dịch tiếng anh du lịch",
      img: "https://dvtc.edu.vn/uploads/01-2025/phien-dich-tieng-anh-du-lich.png",
    },
    {
      name: "Quản trị khu resort",
      img: "https://dvtc.edu.vn/uploads/01-2025/quan-tri-khu-resort.png",
    },
    {
      name: "Quản trị nhà hàng",
      img: "https://dvtc.edu.vn/uploads/01-2025/quan-tri-nha-hang.png",
    },
    {
      name: "Quản trị Du lịch MICE (Tổ chức sự kiện)",
      img: "https://dvtc.edu.vn/uploads/01-2025/quan-tri-du-lich-mice-to-chuc-su-kien.png",
    },
    {
      name: "Đánh giá Kỹ năng nghề Quốc gia",
      img: "https://dvtc.edu.vn/uploads/03-2023/dvtc2377.jpg",
      count: 9,
    },
    {
      name: "Quản trị khách sạn",
      img: "https://dvtc.edu.vn/uploads/01-2025/quan-tri-khach-san.png",
      count: 3,
    },
    {
      name: "Kỹ thuật chế biến món ăn",
      img: "https://dvtc.edu.vn/uploads/01-2025/ky-thuat-che-bien-mon-an.png",
      count: 3,
    },
    {
      name: "Sơ cấp - Bồi dưỡng ngắn hạn",
      img: "https://dvtc.edu.vn/uploads/09-2019/img_471312.jpg",
      count: 17,
    },
    {
      name: "Chương trình liên kết quốc tế",
      img: "https://dvtc.edu.vn/uploads/09-2019/quoctethaibinhduong3.jpg",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. Header Slider (Hero) */}
      <section className="relative w-full overflow-hidden">
        {/* Simple single image representation for now, normally a carousel */}
        <div
          className="w-full h-[300px] md:h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
          style={{
            backgroundImage:
              "url('https://dvtc.edu.vn/uploads/05-2025/ts2025.jpg')",
          }}
        ></div>
      </section>

      {/* 2. Student (Video + Feedback) */}
      <section className="py-12 bg-gray-50 border-t-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-black">
                <video
                  controls
                  loop
                  autoPlay
                  muted
                  className="w-full h-[315px] object-cover"
                >
                  <source
                    src="https://dvtc.edu.vn/public/video/Van_hoa_ung_xu.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative h-full flex flex-col justify-center">
                <i className="fa fa-quote-left text-4xl text-gray-200 absolute top-4 left-4"></i>
                <p className="text-gray-600 italic text-lg mb-6 pt-4 relative z-10">
                  "Thư viện nhiều đầu sách và đa dạng về sách tham khảo, có chỗ
                  cho sinh viên nghỉ trưa sau những giờ học căng thẳng."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://dvtc.edu.vn/uploads/09-2019/anh-avatar-thao.png"
                    alt="Thao"
                    className="w-16 h-16 rounded-full border-2 border-primary object-cover"
                  />
                  <div>
                    <h6 className="font-bold text-gray-800 m-0">
                      Nguyễn Thị Thu Thảo Lớp 8CKS7
                    </h6>
                    <p className="text-sm text-gray-500 m-0">
                      Khoa Quản trị khách sạn, nhà hàng
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Branch (Ngành nghề đào tạo) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center uppercase mb-10 text-[#333]">
            Ngành nghề đào tạo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {branches.map((branch, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded shadow-sm border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                  <img
                    src={branch.img}
                    alt={branch.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay background for images that might need it */}
                </div>
                <div className="p-3 bg-gray-50 border-t border-gray-100">
                  <h3 className="font-bold text-sm text-[#333] group-hover:text-primary transition-colors flex justify-between items-center">
                    <span className="line-clamp-2 leading-tight">
                      {branch.name}
                    </span>
                    {branch.count && (
                      <i className="text-xs text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                        ({branch.count})
                      </i>
                    )}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. News Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tin tức sự kiện */}
            <div className="bg-white p-5 rounded border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
              <h4 className="text-sm font-bold uppercase mb-4 text-primary">
                <i className="fa fa-newspaper-o mr-2"></i> Tin tức sự kiện
              </h4>
              <div className="mb-4 group cursor-pointer block">
                <div className="aspect-[4/3] overflow-hidden rounded mb-3">
                  <img
                    src="https://dvtc.edu.vn/uploads/02-2026/6-1951.jpg"
                    alt="News"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="font-bold text-[#333] group-hover:text-primary transition-colors text-sm line-clamp-2">
                  🌸🎊 SUN WORLD BÀ NÀ HILLS ĐẾN THĂM VÀ CHÚC TẾT TRƯỜNG CAO
                  ĐẲNG DU LỊCH ĐÀ NẴNG (DVTC) 🎊🌸
                </h3>
              </div>
              <ul className="space-y-3 border-t border-gray-100 pt-3">
                <li className="text-sm text-gray-700 hover:text-primary cursor-pointer line-clamp-2 flex items-start gap-2">
                  <i className="fa fa-angle-right text-primary mt-1"></i>
                  <span>
                    🌟 DVTC - TIẾP NỐI CHUỖI HOẠT ĐỘNG TƯ VẤN HƯỚNG NGHIỆP 2026
                    🌟
                  </span>
                </li>
                <li className="text-sm text-gray-700 hover:text-primary cursor-pointer line-clamp-2 flex items-start gap-2">
                  <i className="fa fa-angle-right text-primary mt-1"></i>
                  <span>
                    🎉 HỘI NGHỊ CÁN BỘ, VIÊN CHỨC VÀ NGƯỜI LAO ĐỘNG NĂM HỌC 2025
                    – 2026
                  </span>
                </li>
              </ul>
              <div className="mt-5 text-center">
                <a
                  href="#"
                  className="inline-block border border-gray-300 text-gray-600 hover:border-primary hover:bg-primary hover:text-white px-4 py-1.5 rounded text-sm transition-colors"
                >
                  Xem tất cả
                </a>
              </div>
            </div>

            {/* Hợp tác doanh nghiệp */}
            <div className="bg-white p-5 rounded border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
              <h4 className="text-sm font-bold uppercase mb-4 text-primary">
                <i className="fa fa-building-o mr-2"></i> Hợp tác doanh nghiệp
              </h4>
              <div className="mb-4 group cursor-pointer block">
                <div className="aspect-[4/3] overflow-hidden rounded mb-3">
                  <img
                    src="https://dvtc.edu.vn/uploads/02-2025/6-1848.jpg"
                    alt="News"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="font-bold text-[#333] group-hover:text-primary transition-colors text-sm line-clamp-2">
                  🎉LỄ KÝ KẾT HỢP TÁC GIỮA TRƯỜNG CAO ĐẲNG DU LỊCH ĐÀ NẴNG VÀ
                  FUSION RESORT & VILLAS DA NANG
                </h3>
              </div>
              <ul className="space-y-3 border-t border-gray-100 pt-3">
                <li className="text-sm text-gray-700 hover:text-primary cursor-pointer line-clamp-2 flex items-start gap-2">
                  <i className="fa fa-angle-right text-primary mt-1"></i>
                  <span>
                    TRƯỜNG CAO ĐẲNG DU LỊCH ĐÀ NẴNG KÝ KẾT BIÊN BẢN GHI NHỚ HỢP
                    TÁC CHIẾN LƯỢC VỚI THE FIVE...
                  </span>
                </li>
                <li className="text-sm text-gray-700 hover:text-primary cursor-pointer line-clamp-2 flex items-start gap-2">
                  <i className="fa fa-angle-right text-primary mt-1"></i>
                  <span>
                    Nhật Bản hướng tới cho phép thực tập sinh nước ngoài đổi
                    việc sau một năm
                  </span>
                </li>
              </ul>
              <div className="mt-5 text-center">
                <a
                  href="#"
                  className="inline-block border border-gray-300 text-gray-600 hover:border-primary hover:bg-primary hover:text-white px-4 py-1.5 rounded text-sm transition-colors"
                >
                  Xem tất cả
                </a>
              </div>
            </div>

            {/* Thông báo chung */}
            <div className="bg-white p-5 rounded border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
              <h4 className="text-sm font-bold uppercase mb-4 text-primary">
                <i className="fa fa-bullhorn mr-2"></i> Thông báo chung
              </h4>
              <div className="mb-4 group cursor-pointer block">
                <div className="aspect-[4/3] overflow-hidden rounded mb-3 border border-gray-100">
                  <img
                    src="https://dvtc.edu.vn/uploads/10-2020/thong-bao-dvtc-edu-782-1094.jpg"
                    alt="News"
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="font-bold text-[#333] group-hover:text-primary transition-colors text-sm line-clamp-2">
                  Thời khóa biểu tuần 26 từ ngày 23/02/2026 đến ngày 01/3/2026 -
                  Cao đẳng khóa 14,15; Trung cấp khóa...
                </h3>
              </div>
              <ul className="space-y-3 border-t border-gray-100 pt-3">
                <li className="text-sm text-gray-700 hover:text-primary cursor-pointer line-clamp-2 flex items-start gap-2">
                  <i className="fa fa-angle-right text-primary mt-1"></i>
                  <span>
                    THÔNG BÁO LỊCH THI KTM HỌC LẠI KHÓA 12,13 (07/02/2026)
                  </span>
                </li>
                <li className="text-sm text-gray-700 hover:text-primary cursor-pointer line-clamp-2 flex items-start gap-2">
                  <i className="fa fa-angle-right text-primary mt-1"></i>
                  <span>
                    TB LỊCH THI KỲ THI PHỤ KHÓA 13. HKI 2025-2026
                    (04&05/02/2026)
                  </span>
                </li>
              </ul>
              <div className="mt-5 text-center">
                <a
                  href="#"
                  className="inline-block border border-gray-300 text-gray-600 hover:border-primary hover:bg-primary hover:text-white px-4 py-1.5 rounded text-sm transition-colors"
                >
                  Xem tất cả
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Partners Slider Placeholder */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center uppercase mb-8 text-[#333]">
            Đối tác
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            <img
              src="https://dvtc.edu.vn/uploads/10-2019/furama.jpg"
              alt="Furama"
              className="h-10 object-contain hover:opacity-100 transition-opacity"
            />
            <img
              src="https://dvtc.edu.vn/uploads/10-2019/sunworld.jpg"
              alt="Sunworld"
              className="h-10 object-contain hover:opacity-100 transition-opacity"
            />
            <img
              src="https://dvtc.edu.vn/uploads/10-2019/vinpearl.jpg"
              alt="Vinpearl"
              className="h-10 object-contain hover:opacity-100 transition-opacity"
            />
            <img
              src="https://dvtc.edu.vn/uploads/11-2023/nh-mb.jpg"
              alt="MB"
              className="h-8 object-contain hover:opacity-100 transition-opacity"
            />
            <img
              src="https://dvtc.edu.vn/uploads/11-2023/silk-sense.jpg"
              alt="Silk Sense"
              className="h-10 object-contain hover:opacity-100 transition-opacity"
            />
            <img
              src="https://dvtc.edu.vn/uploads/10-2019/vietnamtourism-vitours.jpg"
              alt="Vitours"
              className="h-10 object-contain hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
