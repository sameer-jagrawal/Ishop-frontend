import React from 'react'
import { productImageUrl } from '@/utils/mediaUrl';

export default function Dealsofthedayproduct({product}) {
  const item = product?.[0]

  if (!item) {
    return (
      <div className="grid min-h-64 place-items-center border border-t-0 border-gray-100 bg-white px-4 py-10 text-center">
        <div>
          <p className="text-base font-semibold text-gray-900">No active deal right now</p>
          <p className="mt-2 text-sm text-gray-500">Hot products will appear here as soon as they are enabled.</p>
        </div>
      </div>
    );
  }

  const finalPrice = Number(item?.final_price || 0);
  const originalPrice = Number(item?.original_price || 0);
  const discount =
    Number(item?.discount_percentage) ||
    (originalPrice > finalPrice && finalPrice
      ? Math.round(((originalPrice - finalPrice) / originalPrice) * 100)
      : 0);
  const images = [item?.thumbnail, ...(item?.images || [])].filter(Boolean).slice(0, 4);

  return (
    <div className="border border-t-0 border-gray-100 bg-white p-4 md:p-6">
      <div className="grid gap-5 lg:grid-cols-[120px_minmax(240px,380px)_1fr] lg:gap-8">
      
    <div className="hidden flex-col items-center gap-4 lg:flex">
      <div className="rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white md:text-sm">
        {discount > 0 ? `SAVE ${discount}%` : "TODAY DEAL"}
      </div>

      <div className="flex flex-col gap-2">
        {images.map((image) => (
          <div
            key={image}
            className="h-16 w-16 overflow-hidden rounded-md border border-gray-200 bg-gray-50"
          >
            <img
              src={productImageUrl(image)}
              alt={item?.name || "Deal product"}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>

    <div className="flex h-72 items-center justify-center rounded-md bg-gray-50 p-4 sm:h-80 lg:h-96">
      <img
        src={productImageUrl(item?.thumbnail)}
        alt={item?.name || "Deal product"}
        className="h-full w-full object-contain"
      />
    </div>

    <div className="flex flex-col gap-3 md:gap-4">
      <h2 className="text-base md:text-xl font-semibold">
        {item?.name}
      </h2>

      <div className="flex items-center gap-3">
        <span className="text-xl md:text-2xl font-bold text-green-600">
          ${finalPrice || 0}
        </span>
        {originalPrice > finalPrice && (
          <span className="line-through text-gray-400 text-sm">${originalPrice}</span>
        )}
      </div>

      <p className="text-sm leading-6 text-gray-600">
        {item?.short_description || "Limited-time offer on a selected product."}
      </p>

      <div className="flex gap-2 md:gap-3 flex-wrap">
        <button className="px-3 md:px-4 py-1.5 md:py-2 border rounded-md text-xs md:text-sm">
          FREE SHIPPING
        </button>
        <button className="px-3 md:px-4 py-1.5 md:py-2 border rounded-md text-xs md:text-sm">
          FREE GIFT
        </button>
      </div>

      <div className="mt-2 md:mt-4">
        <p className="text-xs md:text-sm font-medium mb-2">
          HURRY UP! PROMOTION WILL EXPIRES IN
        </p>
        <div className="flex gap-2 md:gap-3 flex-wrap">
          {["24 d", "9 h", "32 m", "34 s"].map((time, i) => (
            <div
              key={i}
              className="px-3 md:px-4 py-2 md:py-3 bg-gray-100 rounded-md text-center text-xs md:text-sm font-semibold"
            >
              {time}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 md:mt-4">
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div className="bg-green-500 h-2 rounded-full w-[35%]"></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">Sold: 26/75</p>
      </div>
    </div>
    </div>
  </div>
  )
}
