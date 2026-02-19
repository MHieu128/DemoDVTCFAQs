"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Trang chủ", href: "/" },
    { name: "Giới thiệu", href: "#" },
    { name: "Tuyển sinh", href: "#" },
    { name: "Ngành đào tạo", href: "#" },
    { name: "Đào tạo", href: "#" },
    { name: "Hoạt động sinh viên", href: "#" },
    { name: "Hợp tác quốc tế", href: "#" },
    { name: "Hộp thư góp ý", href: "#" },
    { name: "Media", href: "#" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden flex justify-between items-center py-3">
        <span className="font-bold uppercase text-sm">Danh mục</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-gray-200 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation List */}
      <ul
        className={`
        md:flex md:flex-wrap md:items-center text-sm font-bold uppercase
        ${isOpen ? "block pb-4" : "hidden"}
      `}
      >
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="px-4 py-3 hover:bg-[#b84b00] cursor-pointer border-b border-primary-dark/20 md:border-none"
          >
            <a href={item.href} className="block w-full">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
