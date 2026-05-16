'use client'
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { emptyCart, qtyChanges } from "@/redux/features/cartslice";
import { client } from "@/utils/helper";
import Link from "next/link";

export default function Cart() {
  const dispatcher = useDispatch()
  const cart = useSelector((store) => store.cart)

  const updateQtyInDb = async (flag, id) => {
    try {
      await client.put("cart/update-qty", { _id: id, flag });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div
        onClick={() => dispatcher(emptyCart())}
        className="ms-2 md:ms-3 mb-4 md:mb-6 shadow-lg cursor-pointer w-fit px-3 py-1 text-white rounded-md bg-[#01A49E] hover:scale-105 transition-all text-sm"
      >
        Clear Cart
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">

        {/* LEFT - CART ITEMS */}
        <div className="lg:col-span-2 space-y-4 md:space-y-5">
          {cart?.items?.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-4 md:p-5 flex gap-3 md:gap-5 shadow-sm"
            >
              {/* Image */}
              <div className="w-20 h-20 md:w-28 md:h-28 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <img
                  src={item?.thumbnail}
                  alt={item?.name}
                  className="h-16 md:h-20 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between min-w-0">
                {/* Top */}
                <div className="flex justify-between items-start gap-2">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-xs md:text-sm line-clamp-2">
                      {item?.name}
                    </h3>
                    <p className="text-[#01A49E] font-semibold mt-1 text-sm md:text-base">
                      ${item?.final_price}
                    </p>
                  </div>
                  {/* Color dots */}
                  <div className="flex gap-1 flex-shrink-0">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-red-200 rounded-full"></div>
                  </div>
                </div>

                {/* Middle */}
                <div className="flex items-center gap-3 md:gap-4 mt-2 md:mt-3 flex-wrap">
                  {/* Qty */}
                  <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden shadow-sm bg-white">
                    <button
                      onClick={() => {
                        dispatcher(qtyChanges({ _id: item._id, flag: "dec" }));
                        updateQtyInDb("dec", item?._id)
                      }}
                      className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-base md:text-lg font-semibold text-gray-700 hover:bg-red-500 hover:text-white transition-all duration-300 active:scale-95"
                    >
                      -
                    </button>
                    <span className="w-8 md:w-12 text-center font-semibold text-gray-800 select-none text-sm">
                      {item?.qty}
                    </span>
                    <button
                      onClick={() => {
                        dispatcher(qtyChanges({ _id: item._id, flag: "inc" }));
                        updateQtyInDb("inc", item?._id)
                      }}
                      className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-base md:text-lg font-semibold text-gray-700 hover:bg-[#01A49E] hover:text-white transition-all duration-300 active:scale-95"
                    >
                      +
                    </button>
                  </div>

                  {/* Shipping */}
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                    FREE SHIPPING
                  </span>
                </div>

                {/* Bottom */}
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mt-2">
                  <span className={item?.stock ? "text-green-500" : "text-red-500"}>●</span>
                  {item?.stock ? "In Stock" : "Not in stock"}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT - ORDER SUMMARY */}
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-[#01A49E] h-fit">
          <h2 className="font-semibold mb-4 text-base md:text-lg">Order Summary</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Original Total:</span>
              <span className="font-medium">${cart?.originalTotal}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Savings:</span>
              <span className="font-medium">${(cart?.originalTotal) - (cart?.finalTotal)}</span>
            </div>

            <div className="border-t pt-3 flex justify-between font-semibold">
              <span>ORDER TOTAL:</span>
              <span>${cart?.finalTotal}</span>
            </div>
          </div>

          <Link href={"/checkout"}>
            <button className="w-full mt-5 md:mt-6 bg-[#01A49E] text-white py-3 rounded-xl font-medium hover:opacity-90 text-sm md:text-base">
              CHECKOUT
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
