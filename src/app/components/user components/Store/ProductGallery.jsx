"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Heart, Share2 } from "lucide-react";

export default function ProductGallery({ product }) {
  const images = useMemo(() => {
    const allImages = [product?.thumbnail, ...(product?.images || [])].filter(
      Boolean,
    );
    const uniqueImages = [...new Set(allImages)];

    if (uniqueImages.length > 0) {
      return uniqueImages.map(
        (image) => `http://localhost:5000/product/${image}`,
      );
    }

    return ["/headPhone.png", "/hero.png", "/dealsoftheday/mainImage.png"];
  }, [product]);

  const [activeImage, setActiveImage] = useState(images[0]);

  useEffect(() => {
    setActiveImage(images[0]);
  }, [images]);

  return (
    <div className="lg:sticky lg:top-[140px]">
      <div className="relative grid overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm sm:grid-cols-[76px_minmax(0,1fr)]">
        <div className="order-2 flex gap-2 overflow-x-auto border-t border-slate-200 bg-white p-2 sm:order-1 sm:h-[560px] sm:flex-col sm:overflow-y-auto sm:overflow-x-hidden sm:border-r sm:border-t-0">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveImage(image)}
              className={`grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-sm border bg-white p-1.5 transition-all sm:h-[68px] sm:w-full ${
                activeImage === image
                  ? "border-[#01A49E] ring-1 ring-[#01A49E]"
                  : "border-slate-200 hover:border-slate-400"
              }`}
            >
              <img
                src={image}
                alt={`Product thumbnail ${index + 1}`}
                className="h-full w-full object-contain"
              />
            </button>
          ))}
        </div>

        <div className="relative order-1 flex min-h-[360px] items-center justify-center bg-white p-4 sm:order-2 sm:h-[560px] sm:p-8">
          <div className="absolute left-4 top-4 z-10 rounded-sm bg-green-700 px-3 py-1.5 text-xs font-extrabold text-white shadow-sm">
            Best Deal
          </div>

          <div className="absolute right-4 top-4 z-10 flex gap-2">
            <button className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 transition hover:text-[#01A49E]">
            <Heart size={18} />
            </button>
            <button className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 transition hover:text-[#01A49E]">
            <Share2 size={18} />
            </button>
          </div>

          <img
            src={activeImage}
            alt={product?.name || "Product image"}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
