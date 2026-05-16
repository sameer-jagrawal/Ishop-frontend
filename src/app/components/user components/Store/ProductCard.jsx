import React from "react";
import { Eye, Heart, ShieldCheck, Star, Truck } from "lucide-react";
import AddToCartButton from "./AddToCart";

export default function ProductCard({ items, user }) {
  const imageUrl = items?.thumbnail
    ? `http://localhost:5000/product/${items.thumbnail}`
    : "/headPhone.png";

  const brandName = items?.brandId?.name || items?.brand || "Premium";
  const productName = items?.name || "Wireless Noise Cancelling Headphones";
  const finalPrice = Number(items?.final_price || 0);
  const originalPrice = Number(items?.original_price || 0);
  const discount =
    Number(items?.discount_percentage) ||
    (originalPrice > finalPrice && finalPrice
      ? Math.round(((originalPrice - finalPrice) / originalPrice) * 100)
      : 0);
  const isInStock = true

  return (
    <article className="group relative flex h-full w-full flex-col overflow-hidden   bg-white transition-all duration-300 ">
      <div className="relative bg-gradient-to-b from-slate-50 to-white p-3">
        <div className="absolute left-3 top-3 z-10 flex flex-col gap-2">
          {discount > 0 && (
            <span className="w-fit rounded-md bg-red-500 px-2 py-1 text-[11px] font-bold text-white shadow-sm">
              {discount}% OFF
            </span>
          )}
          {isInStock && (
            <span className="w-fit rounded-md bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-100">
              In stock
            </span>
          )}
        </div>

        <div className="absolute right-3 top-3 z-10 flex flex-col gap-2 opacity-100 transition-all duration-300 md:translate-x-2 md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 transition-colors hover:text-[#01A49E]">
            <Heart size={17} strokeWidth={2.2} />
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-slate-600 shadow-sm ring-1 ring-slate-200 transition-colors hover:text-[#01A49E]">
            <Eye size={17} strokeWidth={2.2} />
          </span>
        </div>

        <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md bg-white">
          <img
            src={imageUrl}
            className="h-[78%] w-[78%] object-contain transition-transform duration-500 group-hover:scale-110"
            alt={productName}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-3 md:p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <p className="truncate text-[11px] font-bold uppercase tracking-wide text-[#01A49E]">
            {brandName}
          </p>
          <div className="flex shrink-0 items-center gap-1 rounded-md bg-amber-50 px-1.5 py-1 text-[11px] font-bold text-amber-700">
            <Star size={12} className="fill-amber-500 text-amber-500" />
            4.6
          </div>
        </div>

        <h3 className="line-clamp-2 min-h-[40px] text-sm font-semibold leading-5 text-slate-900 transition-colors group-hover:text-[#017d78] md:text-[15px]">
          {productName}
        </h3>

        <div className="mt-3 flex items-end gap-2">
          <span className="text-lg font-extrabold leading-none text-slate-950 md:text-xl">
            ${finalPrice || "0"}
          </span>
          {originalPrice > finalPrice && (
            <span className="text-xs font-medium text-slate-400 line-through md:text-sm">
              ${originalPrice}
            </span>
          )}
        </div>

        <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-600">
          <span className="inline-flex items-center gap-1 rounded-md bg-[#01A49E]/10 px-2 py-1 text-green-500">
            <Truck size={13} />
            Free shipping
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-slate-600">
            <ShieldCheck size={13} />
            Assured
          </span>
        </div>

        <div className="mt-4 border-t border-slate-100 pt-3">
          {/* <AddToCartButton user={user} product={items} /> */}
        </div>
      </div>
    </article>
  );
}
