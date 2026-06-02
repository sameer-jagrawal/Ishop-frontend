import React from "react";
import { FiSearch, FiBell } from "react-icons/fi";
import Link from "next/link"
import Logout from "@/app/components/user components/Logout";

export default function Header() {
  return (
    <header className="w-full h-16 md:h-20 bg-white shadow-md rounded-xl mb-4 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center sticky top-0 z-100">

      {/* LEFT: Search Bar */}
      <div className="flex items-center bg-gray-100 px-3 md:px-4 py-2 rounded-lg w-40 sm:w-64 md:w-100">
        <FiSearch className="text-gray-400 mr-2 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search here..."
          className="bg-transparent outline-none w-full text-xs md:text-sm"
        />
      </div>

      {/* RIGHT: Notification + Login */}
      <div className="flex items-center gap-3 md:gap-6">

        {/* Notification */}
        <Link href="/admin/notification">
        <div className="relative cursor-pointer">
          <FiBell className="text-xl md:text-2xl text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            2
          </span>
        </div>
        </Link>


        <div className="rounded-lg bg-[#ff7b00] px-2 py-1.5 text-white transition hover:bg-orange-600 md:px-3 md:py-2">
          <Logout className="m-0 p-0 text-xs font-semibold text-white md:text-sm" />
        </div>

      </div>
    </header>
  );
}
