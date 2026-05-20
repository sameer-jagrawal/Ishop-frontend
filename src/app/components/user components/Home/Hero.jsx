import React from "react";
import { IoMdShareAlt } from "react-icons/io";
import Link from "next/link";
import { getCategories } from "@/api_call/api";
import HeroSlider from "./HeroSlider";

export default async function Hero() {
 const catRes = await getCategories({limit:5,is_home:true,status:true})
 const categories = catRes?.data;
  return (
    <div className="bg-gray-200">
      <div className="flex flex-col md:flex-row gap-4 md:gap-5 py-4 md:py-5 px-4 md:px-0 max-w-7xl mx-auto">
        {/* Category sidebar - hidden on mobile, shown on md+ */}
        <div className="hidden md:block max-h-fit bg-white p-4 md:p-6 md:w-56 lg:w-64 shadow-xl rounded-2xl flex-shrink-0">
          <h1 className="text-[#253D4E] text-xl md:text-2xl">Category</h1>
          <ul className="mt-2">
            {categories.map((items, index) => {
              return (
                <Link key={index}   href={`/products?category_slug=${items?.slug || ""}`}>
                  <li className="flex border border-gray-300 py-2 px-2 rounded-xl justify-between my-4 md:my-5 items-center gap-4">
                    <div className="flex justify-between items-center gap-3">
                      <img
                        src={`https://ishop-backend-2mld.onrender.com/category/${items.image}`}
                        width={20}
                        height={20}
                        alt={items.name}
                      />
                      <span className="text-sm">{items.name}</span>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>

        {/* Hero banner */}
<div className="relative w-full h-[320px] sm:h-[360px] md:h-[360px] lg:h-[400px] flex-1 overflow-hidden rounded-2xl md:rounded-3xl">
  <HeroSlider />

  {/* Glow effect */}
  <div className="absolute top-10 left-10 w-40 h-40 bg-amber-400/20 blur-3xl rounded-full"></div>

  <div className="absolute top-0 left-0 px-5 sm:px-10 md:px-14 lg:px-20 py-5 md:py-8 lg:py-10 leading-tight z-10 max-w-full">
    
    {/* Small tag */}
    <span className="inline-block px-3 sm:px-4 py-1 mb-3 sm:mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#01a49e] text-[10px] sm:text-xs md:text-sm tracking-widest uppercase font-semibold">
      Premium Audio Experience
    </span>

    {/* Main heading */}
    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[50px] font-bold text-white drop-shadow-xl leading-[1.1]">
      Feel Every <br className="hidden sm:block" />
      Beat in Style
    </div>

    {/* Subtitle */}
    <p className="text-sm sm:text-base md:text-lg lg:text-xl py-4 md:py-6 lg:py-8 font-medium text-gray-200 max-w-[280px] sm:max-w-xl leading-relaxed">
      Discover crystal-clear sound, deep bass, and luxurious comfort
      with our next-generation wireless headphones.
    </p>

    {/* Subscribe box */}
    <div className="flex border border-white/20 w-fit items-center rounded-full text-white bg-white/10 backdrop-blur-md shadow-2xl ps-3 md:ps-4 overflow-hidden">
      
      <div className="flex items-center gap-2 md:gap-3 pe-3 md:pe-5">
        <div className="text-base md:text-xl text-[#01a49e]">
          <IoMdShareAlt />
        </div>

        <div className="text-xs md:text-sm text-gray-200">
          Enter your email
        </div>
      </div>

      <div className="py-2 md:py-4 px-5 md:px-8 rounded-full bg-[#01a49e] text-white font-semibold text-xs md:text-sm hover:scale-105 transition-all duration-300 cursor-pointer">
        Explore Now
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}
