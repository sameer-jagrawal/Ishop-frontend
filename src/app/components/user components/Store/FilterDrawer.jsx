"use client";

import { useState } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

export default function FilterDrawer({ children }) {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <>
      <div className="md:hidden flex justify-end px-4 mt-3">
        <button
          type="button"
          onClick={() => setFiltersOpen(true)}
          className="flex items-center gap-2 bg-[#01A49E] text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          <FaFilter />
          Filters
        </button>
      </div>

      {filtersOpen && (
        <button
          type="button"
          aria-label="Close filters"
          onClick={() => setFiltersOpen(false)}
          className="fixed inset-x-0 bottom-0 top-[80px] z-30 bg-black/40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed md:sticky top-[80px] left-0 z-40 md:z-10
          h-[calc(100dvh-80px)] md:h-fit md:max-h-[calc(100vh-140px)]
          w-[85vw] max-w-80 md:w-56 lg:w-64
          bg-white shadow-xl md:shadow-none
          overflow-y-auto md:top-[92px]
          transition-transform duration-300
          ${filtersOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4 md:hidden">
          <h2 className="text-sm font-semibold text-gray-800">Filters</h2>
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setFiltersOpen(false)}
            className="grid h-9 w-9 place-items-center rounded-full border border-gray-200 text-gray-700"
          >
            <FaTimes />
          </button>
        </div>

        {children}
      </aside>
    </>
  );
}
