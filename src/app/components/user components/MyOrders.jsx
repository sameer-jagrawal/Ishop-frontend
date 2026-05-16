import { getAllOrders } from "@/api_call/api";
import { client } from "@/utils/helper";
import React from "react";

export default async function MyOrdersPage() {
  const ordersRes = await getAllOrders();
  console.log(ordersRes);

  const products = ordersRes?.data?.orders.flatMap((order) => order.items);
  console.log(products)

  // console.log(products)

  // return;
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Orders</h1>

          <p className="text-gray-500 mt-2">View and track all your orders</p>
        </div>

        {/* ORDERS */}
        <div className="space-y-6">
          {ordersRes?.data?.orders?.map((order, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden"
            >
              {/* TOP */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b p-6 bg-gray-50">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    Order {order._id}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Placed on {order.date}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 items-center">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.status}
                  </span>

                  <span className="bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {order?.paymentMethod}
                  </span>

                  <span className="text-xl font-bold text-[#01A49E]">
                    ${order?.totalAmount}
                  </span>
                </div>
              </div>

              {/* PRODUCTS */}
              <div className="p-6 space-y-5">
                {products.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row gap-5 sm:items-center justify-between border border-gray-100 rounded-2xl p-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={`
                          http://localhost:5000/product/${item?.product_id?.thumbnail}
                        `}
                        alt={item?.product_id?.name}
                        className="w-24 h-24 object-cover rounded-2xl border"
                      />

                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">
                          {item?.product_id?.name}
                        </h3>

                        <p className="text-gray-500 text-sm mt-1">
                          Quantity: {item?.qty}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-xl font-bold text-[#01A49E]">
                        ${item?.price}
                      </p>

                      <button className="mt-3 px-5 py-2 rounded-xl border border-[#01A49E] text-[#01A49E] hover:bg-[#01A49E] hover:text-white transition-all">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* FOOTER */}
              <div className="border-t p-6 flex flex-col sm:flex-row gap-4 justify-between items-center bg-white">
                <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#01A49E] text-white font-semibold hover:opacity-90 transition-all">
                  Track Order
                </button>

                <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-red-500 text-red-500 font-semibold hover:bg-red-500 hover:text-white transition-all">
                  Cancel Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
