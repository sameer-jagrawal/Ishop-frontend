"use client";
import { useState } from "react";
import ProductCard from "../Store/ProductCard";
import Link from "next/link";

export default function MultiTabsClient({ products, user }) {
  const [activeTab, setActiveTab] = useState("best");

  // Fake filtering using same products
  const filteredProducts =
    activeTab === "best"
      ? products?.product?.slice(0, 8)
      : activeTab === "new"
      ? [...products].reverse().slice(0, 8)
      : products.slice(4, 12);

  return (
    <div className="max-w-7xl mt-2 mx-auto bg-gray-100 rounded-2xl p-4 md:p-6 px-4 md:px-6">
      
      {/* Tabs Header */}
      <div className="flex items-center justify-between mb-4 md:mb-6">
        
        <div className="flex gap-4 md:gap-6 text-xs md:text-sm font-medium overflow-x-auto">
          
          <button
            onClick={() => setActiveTab("best")}
            className={`whitespace-nowrap transition-colors ${
              activeTab === "best"
                ? "text-black border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            BEST SELLER
          </button>

          <button
            onClick={() => setActiveTab("new")}
            className={`whitespace-nowrap transition-colors ${
              activeTab === "new"
                ? "text-black border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            NEW IN
          </button>

          <button
            onClick={() => setActiveTab("popular")}
            className={`whitespace-nowrap transition-colors ${
              activeTab === "popular"
                ? "text-black border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            POPULAR
          </button>
        </div>
            <Link href={"/products"}>
            <span className="text-xs text-gray-500 cursor-pointer whitespace-nowrap ml-4">
          View All
        </span>
            </Link>
        
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
        {filteredProducts.map((items) => (
           <Link key={items._id} href={`/singleProduct/${items?.slug}`}>
           <ProductCard items={items} user={user} />
         </Link>
        ))}
      </div>
    </div>
  );
}
