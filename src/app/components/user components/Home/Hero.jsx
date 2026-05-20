import React from "react";
import { IoMdShareAlt } from "react-icons/io";
import Link from "next/link";
import { getCategories } from "@/api_call/api";
import Image from "next/image";

export default async function Hero() {
  const catRes = await getCategories({ limit: 5, is_home: true, status: true });
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
                <Link
                  key={index}
                  href={`/products?category_slug=${items?.slug || ""}`}
                >
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
        <div className="relative w-full h-[220px] sm:h-[280px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-2xl md:rounded-3xl isolate">
  {/* Background Image */}
  <Image
    src="/hero.png"
    alt="Premium headphones"
    fill
    priority
    className="object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

  {/* Glow */}
  <div className="pointer-events-none absolute top-10 left-10 z-[1] h-40 w-40 rounded-full bg-amber-400/20 blur-3xl" />

  {/* Content */}
  <div className="absolute inset-0 z-10 flex flex-col justify-end md:justify-center px-5 py-6 sm:px-8 md:px-14 lg:px-20">
    
    {/* Tag */}
    <span className="inline-block w-full px-3 py-1 mb-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#01a49e] text-[6px] sm:text-xs tracking-widest uppercase font-semibold">
      Premium Audio Experience
    </span>

    {/* Heading */}
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight drop-shadow-xl max-w-[90%] sm:max-w-xl">
      Feel Every
      <br />
      Beat in Style
    </h1>

    {/* Subtitle */}
    <p className="mt-1 text-xs sm:text-base md:text-lg text-gray-200 max-w-full sm:max-w-lg leading-relaxed">
      Discover crystal-clear sound, deep bass, and luxurious comfort
      with our next-generation wireless headphones.
    </p>

    {/* CTA */}
    <div className="mt-3 md:mt-5 pointer-events-auto flex  sm:flex-nowrap w-full sm:w-fit items-center overflow-hidden rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl">
      
      <div className="flex items-center gap-2 px-4 py-3 text-white">
        <div className="text-lg text-[#01a49e]">
          <IoMdShareAlt />
        </div>

        <div className="text-sm text-gray-200 whitespace-nowrap">
          Enter your email
        </div>
      </div>

      <button className="w-full sm:w-auto px-6 py-3 bg-[#01a49e] text-white font-semibold text-sm hover:scale-105 transition-all duration-300">
        Explore Now
      </button>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}
