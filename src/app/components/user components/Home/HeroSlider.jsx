"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const heroImages = [
  { src: "/hero.png", alt: "Premium headphones" },
  { src: "/hero-slide-2.svg", alt: "Smart mobile devices" },
  { src: "/hero-slide-3.svg", alt: "Smart home entertainment" },
];

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      slidesPerView={1}
      loop
      effect="fade"
      speed={700}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className="hero-swiper !h-[320px] sm:!h-[360px] md:!h-full w-full rounded-2xl md:rounded-3xl !pb-10"
    >
      {heroImages.map((image) => (
        <SwiperSlide key={image.src} className="!h-full">
          <div className="relative h-full min-h-[320px] w-full sm:min-h-[360px] md:min-h-0">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={image.src === "/hero.png"}
              sizes="(max-width: 768px) 100vw, 70vw"
              className="object-cover rounded-2xl md:rounded-3xl"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent rounded-2xl md:rounded-3xl" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
