"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useState } from "react";

function getCategoryCount(category) {
  return (
    category?.product_count ||
    category?.products_count ||
    category?.productCount ||
    category?.count ||
    0
  );
}

function ProductCard({ product }) {
  const imageUrl = product?.thumbnail
    ? `https://ishop-backend-2mld.onrender.com/product/${product.thumbnail}`
    : "/headPhone.png";
  const productName = product?.name || "Premium Laptop";
  const finalPrice = Number(product?.final_price || product?.price || 0);
  const originalPrice = Number(product?.original_price || 0);
  const discount =
    Number(product?.discount_percentage) ||
    (originalPrice > finalPrice && finalPrice
      ? Math.round(((originalPrice - finalPrice) / originalPrice) * 100)
      : 0);

  return (
    <div className="relative flex min-h-[260px] flex-col gap-2 rounded-xl bg-white p-3 shadow-sm">
      {discount > 0 && (
        <div className="absolute left-2 top-2 rounded bg-slate-900 px-2 py-1 text-[10px] font-bold text-white">
          {discount}% OFF
        </div>
      )}

      <button
        type="button"
        className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-slate-600"
        aria-label="Add to wishlist"
      >
        <Heart size={14} />
      </button>

      <div className="flex h-28 items-center justify-center pt-4">
        <img
          src={imageUrl}
          className="max-h-[110px] object-contain"
          alt={productName}
        />
      </div>

      <div className="text-[11px] font-bold uppercase tracking-wide text-[#01A49E]">
        {product?.brandId?.name || product?.brand || "Premium"}
      </div>

      <div className="line-clamp-2 min-h-[40px] text-sm font-semibold text-slate-900">
        {productName}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-base font-bold">${finalPrice || "0"}</span>
        {originalPrice > finalPrice && (
          <span className="text-xs text-gray-400 line-through">
            ${originalPrice}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-1">
        <span className="rounded bg-green-100 px-2 py-1 text-[10px] font-bold text-green-700">
          FREE SHIPPING
        </span>
      </div>

      <div className="text-xs font-medium text-green-700">In stock</div>
    </div>
  );
}

export default function LaptopsSectionClient({ categories = [], products = [] }) {
  const [scrollIndex, setScrollIndex] = useState(0);
  const visibleCount = 4;
  const maxIndex = Math.max(0, products.length - visibleCount);
  const visibleProducts = products.slice(scrollIndex, scrollIndex + visibleCount);

  const moveBack = () => setScrollIndex((current) => Math.max(0, current - 1));
  const moveNext = () =>
    setScrollIndex((current) => Math.min(maxIndex, current + 1));

  return (
    <section className="mx-auto mt-2 max-w-7xl rounded-2xl bg-gray-100 p-4 px-4 font-sans shadow-lg md:p-6 md:px-6">
      <div className="mb-4 flex justify-between">
        <span className="text-xs font-bold uppercase md:text-sm">
          Best Laptops & Computers
        </span>
        <Link href="/products" className="text-xs text-gray-500">
          View All
        </Link>
      </div>

      <div className="mb-6 flex flex-col gap-4 md:flex-row">
        <div className="relative flex min-h-[140px] w-full flex-col justify-between overflow-hidden rounded-xl bg-slate-900 p-5 text-white md:w-[320px] lg:w-[400px]">
          <div>
            <div className="text-lg font-extrabold md:text-xl">
              Latest Laptop Deals
            </div>
            <div className="mt-1 text-sm text-gray-400">
              Explore top computer picks
            </div>
          </div>
          <img
            src="/headPhone.png"
            className="absolute bottom-0 right-0 w-28 opacity-80 md:w-36"
            alt="featured product"
          />
        </div>

        <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category?._id || category?.slug || category?.name}
              href={`/products?category_slug=${category?.slug || ""}`}
              className="flex items-center gap-2 rounded-lg bg-white p-2 shadow-sm"
            >
              <img
                src={
                  category?.image
                    ? `https://ishop-backend-2mld.onrender.com/category/${category.image}`
                    : "/headPhone.png"
                }
                className="h-8 w-10 rounded object-cover md:h-9 md:w-12"
                alt={category?.name || "category"}
              />
              <div>
                <div className="text-xs font-semibold md:text-sm">
                  {category?.name}
                </div>
                <div className="text-xs text-gray-400">
                  {getCategoryCount(category)} Items
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-5 border-t" />

      <div className="relative">
        <button
          type="button"
          onClick={moveBack}
          disabled={scrollIndex === 0}
          className="absolute -left-3 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow disabled:opacity-40 md:h-8 md:w-8"
          aria-label="Previous products"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {visibleProducts.map((product) => (
            <Link
              key={product?._id || product?.slug}
              href={`/singleProduct/${product?.slug}`}
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={moveNext}
          disabled={scrollIndex >= maxIndex}
          className="absolute -right-3 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow disabled:opacity-40 md:h-8 md:w-8"
          aria-label="Next products"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}
