"use client";

import {
  useRouter,
  useSearchParams,
  usePathname,
} from "next/navigation";

import { useState } from "react";

export default function PriceFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const search_params = useSearchParams();

  const minLimit = 0;
  const maxLimit = 5000;

  const minQuery =
    Number(search_params.get("min_price")) || minLimit;

  const maxQuery =
    Number(search_params.get("max_price")) || maxLimit;

  const [min, setMin] = useState(minQuery);
  const [max, setMax] = useState(maxQuery);

  const handleMaxChange = (e) => {
    setMax(e.target.value);
  };

  const handleMinChange = (e) => {
    setMin(e.target.value);
  };
  function applyFilter() {
    const params = new URLSearchParams(window.location.search);
  
    params.set("min_price", String(min));
    params.set("max_price", String(max));
  
    router.push(`${pathname}?${params.toString()}`);
  }
  function clearFilter() {
    const params = new URLSearchParams(window.location.search);
  
    params.delete("min_price");
    params.delete("max_price");
  
    setMin(minLimit);
    setMax(maxLimit);
  
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="w-full  border-r border-gray-300 px-5  border-b py-4 flex flex-col gap-4">
      <h2 className="text-sm font-semibold text-gray-800">
        By Price
      </h2>

      <div className="flex items-center gap-2">
        <div className="relative flex-1 min-w-0">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
            $
          </span>

          <input
            type="number"
            value={min}
            onChange={handleMinChange}
            className="w-full pl-7 pr-2 py-2 rounded-lg border bg-white text-sm"
          />
        </div>

        <div className="relative flex-1 min-w-0">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
            $
          </span>

          <input
            type="number"
            value={max}
            onChange={handleMaxChange}
            className="w-full pl-7 pr-2 py-2 rounded-lg border bg-white text-sm"
          />
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <button
          type="button"
          onClick={applyFilter}
          className="flex-1 py-2 bg-black text-white text-sm rounded-lg"
        >
          Go
        </button>

        <button
          type="button"
          onClick={clearFilter}
          className="flex-1 py-2 bg-white border text-sm rounded-lg"
        >
          Clear
        </button>
      </div>
    </div>
  );
}