'use client'
import {useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ColorFilter({colors}) {

  const router = useRouter()
  const search_params = useSearchParams()
  const [selected, setSelected] = useState(() => search_params.getAll("color_slug"))
  const colorOptions = Array.isArray(colors) ? colors : []

  const handelchange = (slug)=>{
    setSelected((prev) =>
      prev.includes(slug) 
      ? prev.filter((item)=> item !== slug)
      : [...prev,slug]
  )
  }

  const handelApply = () =>{
    const query = new URLSearchParams(search_params.toString())
    query.delete("color_slug")

    selected.forEach(slug => {
      query.append("color_slug",slug)
    });
    router.replace(`?${query.toString()}`, { scroll: false });
  }
  
  
  const handelClear = () =>{
    const query = new URLSearchParams(search_params.toString())

    query.delete("color_slug")
    setSelected([])

    router.replace(`?${query.toString()}`, { scroll: false });
  }

  console.log(selected,"selected array")

 
    return (
      <div className="w-full  border-r border-gray-300   px-5 p-4">
        
        {/* Title */}
        <h2 className="text-sm font-semibold text-gray-800 mb-4">
          By Color
        </h2>
  
        {/* Search Input (optional, keep if needed) */}
        <input
          type="text"
          placeholder=""
          className="w-full mb-4 px-3 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-1 focus:ring-gray-300"
        />
  
        {/* Color List */}
        <div className="space-y-2">
          {colorOptions.map((color, i) => (
            <label
              key={i}
              className="flex items-center px-2 py-1.5 rounded-md cursor-pointer hover:bg-white transition group"
            >
              <div className="flex items-center gap-2">
                
                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={selected?.includes(color.slug)}
                  onChange={()=>handelchange(color?.slug)}
                  className="w-4 h-4 accent-gray-700 cursor-pointer"
                />
  
                {/* Color Circle */}
                <div
                  className="w-5 h-5 rounded-full border border-gray-300"
                  style={{ backgroundColor: color?.colorCode }}
                />
  
                {/* Color Name */}
                <span className="text-sm text-gray-700 group-hover:text-black capitalize">
                  {color?.name}
                </span>
              </div>
            </label>
          ))}
        </div>

        {selected && selected.length > 0 && (
  <button
    onClick={handelApply}
    className="mt-4 w-full py-2 bg-black text-white text-sm rounded-lg"
  >
    Apply Filter
  </button>
)}

      {search_params.getAll("color_slug").length > 0 && (
        <button
          onClick={handelClear}
          className="mt-2 w-full py-2 bg-white border text-sm rounded-lg hover:bg-gray-100"
        >
          Clear Filter
        </button>
      )}
      </div>
    );
  }
