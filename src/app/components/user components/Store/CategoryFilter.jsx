"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";

export default function CategoryFilter({ category }) {
  const router = useRouter();
  const search_params = useSearchParams()
  const [selected, setSelected] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const fromUrl = search_params.get("category_slug");
    setSelected(fromUrl || "");
  }, [search_params]);


  // Handle checkbox toggle
const handleChange = (slug) => {
  setSelected((prev) => (prev === slug ? "" : slug));
};

  // Apply filter (on confirm)
  const handleApply = () => {
  const query = new URLSearchParams(search_params.toString());
  console.log(selected,"selected slug")

  if (!selected) {
    query.delete("category_slug");
  } else {
    query.set("category_slug", selected);
  }

  router.push(`${pathname}?${query.toString()}`, {
  scroll: false,
});
};
  // Handel clear 


// Apply filter (on confirm)
const handleClear = () => {
  const query = new URLSearchParams(search_params.toString());

    query.delete("category_slug"); 

  router.push(`${pathname}?${query.toString()}`, {
  scroll: false,
});
};

  return (
    <div className="w-full  border-r border-gray-300 border-b  px-5 p-4">
      
      
      {/* Section Title */}
      <h3 className="text-sm font-semibold text-gray-800 mb-2 ps-2">
        By Categories
      </h3>

      {/* Category List */}
      <div className="max-h-80 overflow-y-auto space-y-1 pr-1">
        {category.map((item) => (
          <label
            key={item._id}
            className="flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer hover:bg-white transition group"
          >
            <input
              type="checkbox"
              checked={selected === item.slug}
              onChange={() => handleChange(item.slug)}
              className="w-4 h-4 accent-black cursor-pointer"
            />

            <span className="text-sm text-gray-700 group-hover:text-black">
              {item.name}
            </span>
          </label>
        ))}
      </div>

      {/* Confirm Button (only shows if something selected) */}
      {selected   && (
        <button
          onClick={handleApply}
          className="mt-4 w-full py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition"
        >
          Apply Filter
        </button>
      )}

{/* Clear Button */}
      {search_params.get("category_slug") && (
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

