"use client";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { MdOutlineSentimentVeryDissatisfied } from "react-icons/md";
import { HiArrowLongLeft } from "react-icons/hi2";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f4fffe] to-[#dff8f7] flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* Background Blur Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#01a49e]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-200/30 blur-3xl rounded-full"></div>

      <div className="relative z-10 text-center max-w-2xl">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-[#01a49e]/30 blur-2xl rounded-full"></div>

            <div className="relative bg-[#01a49e] p-6 rounded-full shadow-2xl">
              <FaShoppingBag className="text-white text-5xl" />
            </div>
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-[90px] sm:text-[120px] md:text-[150px] font-extrabold text-[#01a49e] leading-none drop-shadow-sm">
          404
        </h1>

        {/* Main Heading */}
        <div className="flex items-center justify-center gap-3 mt-2">
          <MdOutlineSentimentVeryDissatisfied className="text-[#01a49e] text-3xl" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Oops!
          </h2>
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed px-2">
          Looks like this page went on a shopping spree and never came back.
          <br className="hidden sm:block" />
          The page you’re looking for doesn’t exist on{" "}
          <span className="font-bold text-[#01a49e]">Ishop</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          
          <Link
            href="/"
            className="group flex items-center gap-2 bg-[#01a49e] hover:bg-[#018b86] text-white px-8 py-4 rounded-full font-semibold shadow-xl transition-all duration-300 hover:scale-105"
          >
            <HiArrowLongLeft className="text-xl group-hover:-translate-x-1 transition-all duration-300" />
            Back To Home
          </Link>

          <Link
            href="/shop"
            className="border-2 border-[#01a49e] text-[#01a49e] hover:bg-[#01a49e] hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
          >
            Continue Shopping
          </Link>
        </div>

        {/* Bottom Text */}
        <p className="mt-10 text-sm text-gray-400">
          Error Code: ISHOP_404_NOT_FOUND
        </p>
      </div>
    </div>
  );
}