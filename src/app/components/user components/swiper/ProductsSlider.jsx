"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import ProductCard from "../Store/ProductCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductsSlider({ products }) {
  if (!products?.length) return null;

  return (
    <div className="products-swiper relative [&_.swiper-button-next]:text-[#01A49E] [&_.swiper-button-prev]:text-[#01A49E] [&_.swiper-pagination-bullet-active]:bg-[#01A49E]">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={1.15}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          480: { slidesPerView: 1.5 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="!pb-12"
      >
        {products.map((item) => (
          <SwiperSlide key={item._id} className="!h-auto">
            <Link
              href={`/singleProduct/${item?.slug}`}
              className="block h-full"
            >
              <ProductCard items={item} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
