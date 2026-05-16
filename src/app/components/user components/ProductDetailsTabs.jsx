"use client";

import { useState } from "react";

export default function ProductDetailsTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "highlights", label: "Highlights" },
    { id: "specifications", label: "Specifications" },
  ];

  return (
    <div className=" rounded-2xl border border-gray-200 bg-white">
      
      {/* Tabs Header */}
      <div className="flex gap-6 border-b border-gray-200 px-5 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-4 text-sm whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? "border-b-2 border-black text-black font-medium"
                : "text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-5">
        
        {/* Description */}
        {activeTab === "description" && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Product Description
            </h2>

            <div
              className="text-sm leading-7 text-gray-600"
              dangerouslySetInnerHTML={{
                __html:
                  product?.description ||
                  "<p>No description available.</p>",
              }}
            />
          </div>
        )}

        {/* Highlights */}
        {activeTab === "highlights" && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Product Highlights
            </h2>

            <div className="grid gap-3">
              {product?.highlights?.length > 0 ? (
                product.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#01A49E]" />

                    <p className="text-sm text-gray-600">
                      {item}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">
                  No highlights available.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Specifications */}
        {activeTab === "specifications" && (
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Specifications
            </h2>

            <div className="divide-y divide-gray-200">
              {product?.specifications?.length > 0 ? (
                product.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 gap-4 py-3"
                  >
                    <span className="text-sm text-gray-500">
                      {spec.key}
                    </span>

                    <span className="text-sm text-gray-700">
                      {spec.value}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">
                  No specifications available.
                </p>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}