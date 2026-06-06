"use client";

import Link from "next/link";
import { useState } from "react";
import { categoryImageUrl } from "@/utils/mediaUrl";

function CategoryItem({ item, onClick }) {
  return (
    <Link
      href={`/products?category_slug=${item?.slug || ""}`}
      onClick={onClick}
      className="flex items-center justify-between border border-gray-100 bg-white px-3 py-3 transition hover:border-[#01A49E] hover:bg-gray-50"
    >
      <div className="min-w-0">
        <div className="truncate text-sm font-medium leading-tight text-gray-900">
          {item?.name}
        </div>
        <div className="mt-1 text-xs text-gray-400">
          View products
        </div>
      </div>

      <img
        src={categoryImageUrl(item?.image)}
        alt={item?.name || "Category"}
        className="ml-3 h-10 w-10 flex-shrink-0 rounded-md object-cover"
      />
    </Link>
  );
}

export default function PopularCategoriesClient({ categories = [] }) {
  const [open, setOpen] = useState(false);
  const mobileCategories = categories.slice(0, 2);

  if (!categories.length) {
    return null;
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:hidden">
        {mobileCategories.map((item) => (
          <CategoryItem key={item?._id || item?.slug} item={item} />
        ))}

        {categories.length > 2 && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="col-span-2 border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            More Categories
          </button>
        )}
      </div>

      <div className="hidden grid-cols-3 gap-3 md:grid lg:grid-cols-5">
        {categories.map((item) => (
          <CategoryItem key={item?._id || item?.slug} item={item} />
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/40 px-4 pb-4 md:hidden">
          <div className="max-h-[80vh] w-full overflow-hidden bg-white">
            <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
              <h3 className="text-base font-medium text-gray-900">
                Popular Categories
              </h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="border border-gray-200 px-3 py-1.5 text-sm text-gray-700"
              >
                Close
              </button>
            </div>

            <div className="max-h-[65vh] overflow-y-auto p-4">
              <div className="grid grid-cols-1 gap-3">
                {categories.map((item) => (
                  <CategoryItem
                    key={item?._id || item?.slug}
                    item={item}
                    onClick={() => setOpen(false)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
