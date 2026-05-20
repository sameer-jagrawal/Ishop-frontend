"use client";
import { client, notify } from "@/utils/helper";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ButtonLoader from "@/app/components/user components/ButtonLoader";
import Link from "next/link";

export default function LoginPage() {
  // const next = searchParams.get("next");
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoader(true);

      // LOGIN
      const response = await client.post("user/login", form);

      notify(response.data.masg, response.data.success);
      
      if (!response.data.success) {
        setLoader(false)
        return
     }

      // GET LATEST LOCAL CART DIRECTLY
      const localCartData = JSON.parse(localStorage.getItem("cart"));

      console.log(localCartData,"sameer frontend")
      const localCart = localCartData?.items || [];
      console.log(localCart,"frontend local cart")  

      // SYNC CART
      const cartRes = await client.post("cart/sync", {
        localCart: JSON.stringify(localCart),
      });

      const cartData = cartRes?.data?.data?.cart || [];
  

      let finalTotal = 0;
      let originalTotal = 0;

      const items = cartData
        .filter((item) => item?.productId)
        .map((item) => {
          const {
            name,
            _id,
            original_price,
            final_price,
            discount_percentage,
            price,
            thumbnail,
            stock,
          } = item.productId;

          finalTotal += final_price * item.qty;

          originalTotal += original_price * item.qty;

          return {
            _id,
            name,
            original_price,
            final_price,
            discount_percentage,
            price,
            thumbnail: cartRes.data.data.imageBaseUrl + thumbnail,
            stock,
            qty: item.qty,
          };
        });

        console.log(items,"sameer")

      // REPLACE LOCAL CART WITH SERVER CART
      localStorage.setItem(
        "cart",
        JSON.stringify({
          items,
          finalTotal,
          originalTotal,
        }),
      );

      // RESET FORM
      setForm({
        email: "",
        password: "",
      });

      // REDIRECT
      router.push("/");
    } catch (error) {
      console.log(error);

      const message = error?.response?.data?.masg || "Internal Server Error";

      notify(message, false);
    } finally {
      setLoader(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#f4f7f7] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white rounded-[28px] shadow-lg p-8 md:p-10 border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-gray-500 mt-3 text-sm md:text-base">
            Login to continue shopping on IShop
          </p>
        </div>

        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#01A49E] focus:border-transparent transition"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>

              <button
                type="button"
                className="text-sm text-[#01A49E] hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <input
              type="password"
              onChange={handleChange}
              name="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#01A49E] focus:border-transparent transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#01A49E] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loader ? <ButtonLoader /> : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/register">
          <span className="text-[#01A49E] font-semibold cursor-pointer hover:underline">
            Register
          </span>
          </Link>

        </div>
      </div>
    </div>
  );
}
