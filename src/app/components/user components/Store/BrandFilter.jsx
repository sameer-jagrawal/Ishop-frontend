"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function BrandFilter({ brand }) {
  const router = useRouter();
  const search_params = useSearchParams();

  const [selected, setSelected] = useState(() => search_params.getAll("brand_slug"));
  const brands = Array.isArray(brand) ? brand : [];

  const handleChange = (slug) => {
    setSelected((prev) =>
      prev.includes(slug)
        ? prev.filter((item) => item !== slug)
        : [...prev, slug]
    );
  };

  const handleApply = () => {
    const query = new URLSearchParams(search_params.toString());

    query.delete("brand_slug");

    selected.forEach((slug) => {
      query.append("brand_slug", slug);
    });

    router.replace(`?${query.toString()}`, { scroll: false });
  };

  const handleClear = () => {
    const query = new URLSearchParams(search_params.toString());
    query.delete("brand_slug");
    setSelected([]);

    router.replace(`?${query.toString()}`, { scroll: false });
  };

  //  console.log(selected)
  return (
    <div className="w-full border-r border-gray-300 border-b px-5 p-4 ">
      <h2 className="text-sm font-semibold text-gray-800 mb-4">
        By Brands
      </h2>

      <div className="space-y-2">
        {brands.map((item) => (
          <label
            key={item.slug}
            className="flex items-center justify-between px-2 py-1.5 rounded-md cursor-pointer hover:bg-white"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selected.includes(item.slug)}
                onChange={() => handleChange(item.slug)}
                className="w-4 h-4 accent-gray-700 cursor-pointer"
              />

              <span className="text-sm text-gray-700 capitalize">
                {item.name}
              </span>
            </div>

            <span className="text-sm text-gray-400">
              ({item.count})
            </span>
          </label>
        ))}
      </div>

      {selected && selected.length > 0 &&
        <button
        onClick={handleApply}
        className="mt-4 w-full py-2 bg-black text-white text-sm rounded-lg"
      >
        Apply Filter
      </button>
    }
      

      {search_params.getAll("brand_slug").length > 0 && (
        <button
          onClick={handleClear}
          className="mt-2 w-full py-2 bg-white border text-sm rounded-lg hover:bg-gray-100"
        >
          Clear Filter
        </button>
      )}
    </div>
  );
}
