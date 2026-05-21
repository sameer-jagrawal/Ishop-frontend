"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/utils/helper";
import { useParams } from "next/navigation";
import Status from "@/app/components/admin components/Status";
import { ProductDetailsSkeleton } from "@/app/components/user components/LoadingSkeletons";
import {
  Package,
  Tag,
  BadgeIndianRupee,
  Palette,
  Layers3,
} from "lucide-react";

export default function ProductDetails() {
  const [data, setData] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    if (!id) return;

    client
      .get(`product/${id}`)
      .then((response) => {
        const formdata = response.data.data;

        setData(formdata);

        // Default Thumbnail
        setSelectedImage(
          `https://ishop-backend-2mld.onrender.com/product/${formdata?.thumbnail}`
        );
      })
      .catch((error) => {
        console.log(error, "error is coming");
      });
  }, [id]);

  if (!data) {
    return <ProductDetailsSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 md:p-10">
          {/* ================= LEFT SIDE ================= */}
          <div>
            {/* Main Thumbnail */}
            <div className="bg-gray-100 rounded-3xl border border-gray-200 overflow-hidden flex items-center justify-center h-[450px] shadow-sm">
              <img
                src={selectedImage}
                alt={data?.name}
                className="w-full h-full object-contain transition-all duration-300 hover:scale-105"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-4 mt-5 overflow-x-auto pb-2">
              {/* Main Thumbnail */}
              {data?.thumbnail && (
                <div
                  onClick={() =>
                    setSelectedImage(
                      `https://ishop-backend-2mld.onrender.com/product/${data?.thumbnail}`
                    )
                  }
                  className={`min-w-[90px] h-[90px] rounded-2xl border-2 cursor-pointer overflow-hidden bg-white transition-all ${
                    selectedImage ===
                    `https://ishop-backend-2mld.onrender.com/product/${data?.thumbnail}`
                      ? "border-black"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={`https://ishop-backend-2mld.onrender.com/product/${data?.thumbnail}`}
                    alt="thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Other Images */}
              {data?.images?.map((img, index) => {
                const imageUrl = `https://ishop-backend-2mld.onrender.com/product/${img}`;

                return (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(imageUrl)}
                    className={`min-w-[90px] h-[90px] rounded-2xl border-2 cursor-pointer overflow-hidden bg-white transition-all ${
                      selectedImage === imageUrl
                        ? "border-black"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={imageUrl}
                      alt={`product-${index}`}
                      className="w-full h-full object-cover hover:scale-105 transition-all"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex flex-col gap-6">
            {/* Product Title */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {data?.name}
              </h1>

              <div className="flex items-center gap-2 mt-3">
                <Package size={18} className="text-gray-400" />
                <p className="text-sm text-gray-500">
                  Product ID : {data?._id}
                </p>
              </div>
            </div>

            {/* Price Section */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-5 rounded-2xl border">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <BadgeIndianRupee className="text-green-600" size={28} />

                  <span className="text-3xl font-bold text-green-600">
                    ₹{data?.final_price}
                  </span>
                </div>

                <span className="line-through text-gray-400 text-lg">
                  ₹{data?.original_price}
                </span>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {data?.discount_percentage}% OFF
                </span>
              </div>
            </div>

            {/* Product Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Category */}
              <div className="bg-indigo-50 rounded-2xl p-4 border border-indigo-100">
                <div className="flex items-center gap-2 mb-2">
                  <Layers3 size={18} className="text-indigo-500" />
                  <h3 className="font-semibold text-gray-700">Category</h3>
                </div>

                <p className="text-indigo-700 font-medium">
                  {data?.categoryId?.name}
                </p>
              </div>

              {/* Brand */}
              <div className="bg-purple-50 rounded-2xl p-4 border border-purple-100">
                <div className="flex items-center gap-2 mb-2">
                  <Tag size={18} className="text-purple-500" />
                  <h3 className="font-semibold text-gray-700">Brand</h3>
                </div>

                <p className="text-purple-700 font-medium">
                  {data?.brandId?.name}
                </p>
              </div>
            </div>

            {/* Colors */}
            <div className="bg-gray-50 border rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Palette size={18} className="text-gray-600" />
                <h3 className="font-semibold text-gray-800">
                  Available Colors
                </h3>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                {data?.colorId?.map((color) => (
                  <div
                    key={color?._id}
                    title={color?.name}
                    className="w-10 h-10 rounded-full border-4 border-white shadow-md"
                    style={{ backgroundColor: color?.colorCode }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="flex flex-wrap gap-3">
              <Status
                value={data?.status}
                id={data?._id}
                feild="status"
                type="product"
              />

              <Status
                value={data?.stock}
                type="product"
                id={data?._id}
                feild="stock"
              />
            </div>

            {/* Short Description */}
            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Short Description
              </h2>

              <div className="w-14 h-1 bg-black rounded-full mb-4"></div>

              <p className="text-gray-600 leading-relaxed text-[15px]">
                {data?.short_description}
              </p>
            </div>

            {/* Long Description */}
            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Long Description
              </h2>

              <div className="w-14 h-1 bg-black rounded-full mb-4"></div>

              <p className="text-gray-600 leading-8 text-[15px] whitespace-pre-line">
                {data?.long_description}
              </p>
            </div>

            {/* Slug */}
            <div className="bg-gray-50 border rounded-2xl p-4">
              <p className="text-gray-500 text-sm mb-1">Slug</p>

              <p className="text-gray-800 font-medium break-all">
                {data?.slug}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
