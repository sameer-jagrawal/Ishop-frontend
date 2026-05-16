'use client'
import {useRouter, useSearchParams } from "next/navigation";

export default function SortFilterUI() {
  const search_params = useSearchParams()
  const router = useRouter()

  const sort = search_params.get("sort") || "latest"

  const handleChange = (e) =>{
    const value = e.target.value;
    const query = new URLSearchParams(search_params.toString())
    query.delete("sort")

    query.set("sort",value)
    
    router.replace(`?${query.toString()}`,{scroll:false})
  }

  return (
    <div className="w-full   border-r border-gray-300 border-b  p-3 pt-6 flex flex-col gap-2 px-5">
    <label className="   px-2 font-semibold  text-gray-800">
      Sort By 
    </label>

    <select
      value={sort}
      onChange={handleChange}
      className="px-3 py-2 rounded-md text-xs bg-white border border-gray-400 text-gray-700 cursor-pointer outline-none"
    >
      <option value="latest">Latest</option>
      <option value="asc">Price: Low to High</option>
      <option value="desc">Price: High to Low</option>
    </select>
  </div>

  );
}
