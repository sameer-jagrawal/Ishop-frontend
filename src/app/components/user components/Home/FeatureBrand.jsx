import { getBrand } from "@/api_call/api";
import React from "react";
import Link from "next/link";
export default async function FeatureBrand() {
const brand_res = await getBrand();
const brand = brand_res?.data;
const imagePath = brand_res?.data?.meta?.imagebaseurl;

return (
  <div className=" hidden md:block flex-1 max-h-fit bg-white md:rounded-xl shadow-md p-4 md:p-6">
    <h1 className="text-md font-semibold text-slate-950 mb-4 md:mb-6">
      FEATURED BRANDS
    </h1>

    <div className="grid max-h-fit  grid-cols-3 sm:grid-cols-4 gap-4 md:gap-6">
      {brand?.map((item, index) => {
        return (
          <div
            key={index}
            className="flex   flex-col items-center text-center"
          >
            <Link href="/">
              <img
                src={`http://localhost:5000/brand/${item.image}`}
                alt="brand"
                className="w-full md:w-14 md:h-14 object-contain rounded-xl"
              />
            </Link>
          </div>
        );
      })}
    </div>
  </div>
);
}
