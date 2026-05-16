import React from "react";
import Link from "next/link";
import { getCategories } from "@/api_call/api";
export default async function Topcategories() {
  const category_res = await getCategories({is_top:true,status:true})
  const categories = category_res?.data;
  const imagePath = category_res?.meta?.imagebaseurl;
  console.log(category_res)
  return (
    <div className="flex-1 max-h-fit bg-white md:rounded-xl shadow-md p-4 md:p-6">
      <h1 className="text-md font-semibold text-slate-950 mb-4 md:mb-6">
        TOP CATEGORIES
      </h1>
  
      <div className="grid max-h-fit  grid-cols-3 sm:grid-cols-4 gap-4 md:gap-6">
        {categories.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
                <img
                  src={`http://localhost:5000/category/${item.image}`}
                  alt="category"
                  className="w-10 h-10 md:w-14 md:h-14 object-contain rounded-xl"
                />
            </div>
          );
        })}
      </div>
    </div>
  );
}
