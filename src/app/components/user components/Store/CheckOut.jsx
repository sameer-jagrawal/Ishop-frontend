'use client'

import { client, notify } from "@/utils/helper";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRazorpay } from "react-razorpay";
import { emptyCart } from "@/redux/features/cartslice";


export default function CheckoutPage({ user }) {
  const dispatcher = useDispatch()
  const { Razorpay, error, isLoading } = useRazorpay();
  const router = useRouter()
  const addresses = user?.data?.addresses || [];

  const [selectedAddress, setSelectedAddress] = useState(0)
  const cart = useSelector((store) => store.cart);

  const [paymentMethod, setPaymentMode] = useState("cod");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const totalItems = cart?.items?.reduce((acc, item) => acc + item.qty, 0);

  const handleOrder = async () => {
    if (isPlacingOrder) return;
    if (selectedAddress === null || selectedAddress === undefined) {
      return alert("select address please ")
    }
    if (!addresses[selectedAddress]) return alert("wrong address");
    if (!cart?.items?.length) return alert("Your cart is empty");

    const orderData = {
      address: addresses[selectedAddress],
      paymentMethod
    };

    try {
      setIsPlacingOrder(true);

      await client.post("cart/sync", {
        localCart: JSON.stringify(cart.items),
      });

      console.log(orderData,"order data")
      const response = await client.post('order/create', orderData)
      console.log(response,"order response")
      if (!response.data.success) {
        notify(response.data?.masg || "Unable to place order", false);
        return;
      }

      if (paymentMethod === 'cod') {
        try {
          const deleteCartRes = await client.delete('cart/delete')
          if (deleteCartRes.data.success) {
            dispatcher(emptyCart())
            
          }
        } catch (error) {
          console.log(error)
        }
        router.push(`/checkout/${response.data.data.orderId}`)
      } else {
        if (isLoading ) return;

        const options = {
          key: process.env.NEXT_PUBLIC_Test_Key_ID,
          amount: Math.round((cart?.finalTotal || 0) * 100),
          currency: "INR",
          name: "Ishop Company",
          description: "Test Transaction",
          order_id: response?.data?.data?.payment_order_Id,
          handler: async (response) => {
            try {
              const paymentRes = await client.post("order/verifyPayment", response);
              if (paymentRes?.data?.success) {
                try {
                  const deleteCartRes = await client.delete('cart/delete')
                  if (deleteCartRes.data.success) {
                    dispatcher(emptyCart())
                  }
                } catch (error) {
                  console.log(error)
                }
                router.push(`/checkout/${paymentRes?.data?.orderId}`)
              } else {
                notify(paymentRes?.data?.masg || "Payment verification failed", false);
              }
            } catch (error) {
              console.log(error)
              notify(error?.response?.data?.masg || "Payment verification failed", false);
            }
          },
          prefill: {
            name: "John Doe",
            email: "john.doe@example.com",
            contact: "9999999999",
          },
          theme: { color: "#F37254" },
        }
        const rzp = new Razorpay(options);
        rzp.open();
      }
    } catch (error) {
      console.log(error.response?.data);
      console.log(error.message);
      notify(error?.response?.data?.masg || error?.response?.data?.message || "Unable to place order", false);
    } finally {
      setIsPlacingOrder(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-4 md:space-y-6">

          {/* PRODUCTS */}
          <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-5 text-gray-800">
              Products
            </h2>
            <div className="space-y-3 md:space-y-4">
              {cart?.items?.map((item) => (
                <div
                  key={item?._id}
                  className="border border-gray-200 rounded-xl p-3 md:p-4 flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-800 text-sm md:text-base line-clamp-2">
                      {item?.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">
                      Qty: {item?.qty}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[#01A49E] font-bold text-base md:text-lg">
                      ${item?.final_price}
                    </p>
                    <p className="text-xs md:text-sm text-gray-400 line-through">
                      ${item?.original_price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ADDRESS SECTION */}
          <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-5 text-gray-800">
              Select Delivery Address
            </h2>
            <div className="space-y-3 md:space-y-4">
              {addresses.length > 0 ? addresses.map((item, index) => (
                <label
                  key={index}
                  className="border rounded-xl p-3 md:p-4 flex items-start gap-3 md:gap-4 cursor-pointer hover:border-[#01A49E] transition"
                >
                  <input
                    type="radio"
                    name="address"
                    checked={selectedAddress === index}
                    className="mt-1 accent-[#01A49E]"
                    onChange={() => setSelectedAddress(index)}
                  />
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm md:text-base">{item?.type}</h3>
                    <p className="text-sm font-semibold">{item?.fullName},</p>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">
                      {item?.addressLine1}, {item?.addressLine2}, {item?.city}, {item?.state}, {item?.country}
                    </p>
                    <p className="text-xs md:text-sm text-sky-500 font-semibold">{item?.postalCode}</p>
                    <p className="text-xs md:text-sm text-sky-500 font-semibold">Phone: {item?.phone}</p>
                  </div>
                </label>
              )) : (
                <p className="text-sm text-gray-500">Please add a delivery address before placing an order.</p>
              )}
            </div>
          </div>

          {/* PAYMENT MODE */}
          <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-5 text-gray-800">
              Payment Method
            </h2>
            <div className="space-y-3 md:space-y-4">
              <label className="border rounded-xl p-3 md:p-4 flex items-center gap-3 md:gap-4 cursor-pointer hover:border-[#01A49E] transition">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMode("cod")}
                  className="accent-[#01A49E]"
                />
                <div>
                  <h3 className="font-semibold text-sm md:text-base">Cash on Delivery</h3>
                  <p className="text-xs md:text-sm text-gray-500">Pay when your order arrives</p>
                </div>
              </label>

              <label className="border rounded-xl p-3 md:p-4 flex items-center gap-3 md:gap-4 cursor-pointer hover:border-[#01A49E] transition">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "online"}
                  onChange={() => setPaymentMode("online")}
                  className="accent-[#01A49E]"
                />
                <div>
                  <h3 className="font-semibold text-sm md:text-base">UPI Payment</h3>
                  <p className="text-xs md:text-sm text-gray-500">Pay instantly using any UPI app</p>
                </div>
              </label>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-[#01A49E] h-fit lg:sticky lg:top-6">
          <h2 className="font-semibold text-lg md:text-xl mb-4 md:mb-5">Order Summary</h2>

          <div className="bg-[#01A49E]/10 rounded-xl p-3 md:p-4 mb-4 md:mb-5">
            <p className="text-xs md:text-sm text-gray-600">Total Items</p>
            <h3 className="text-xl md:text-2xl font-bold text-[#01A49E]">{totalItems}</h3>
          </div>

          <div className="space-y-3 md:space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Original Total</span>
              <span className="font-semibold">${cart?.originalTotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Savings</span>
              <span className="font-semibold text-green-600">
                ${(cart?.originalTotal || 0) - (cart?.finalTotal || 0)}
              </span>
            </div>
            <div className="border-t pt-3 md:pt-4 flex justify-between text-base md:text-lg font-bold">
              <span>Final Total</span>
              <span className="text-[#01A49E]">${cart?.finalTotal}</span>
            </div>
          </div>

          <button
            onClick={handleOrder}
            disabled={addresses.length === 0 || !cart?.items?.length || isLoading || isPlacingOrder}
            className="w-full mt-5 md:mt-6 bg-[#01A49E] text-white py-3 rounded-xl font-semibold hover:opacity-90 active:scale-95 transition-all text-sm md:text-base disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPlacingOrder ? "PLACING ORDER..." : "PLACE ORDER"}
          </button>
          {error && (
            <p className="mt-3 text-sm text-red-500">
              Unable to load online payment. Please try again.
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
