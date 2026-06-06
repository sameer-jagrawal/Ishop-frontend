"use client";

import { client, notify } from "@/utils/helper";
import ButtonLoader from "@/app/components/user components/ButtonLoader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoader(true);
      const response = await client.post("user/forgot-password", { email });

      notify(response.data.masg, response.data.success);

      if (response.data.success) {
        router.push(`/reset-password?email=${encodeURIComponent(email)}`);
      }
    } catch (error) {
      const message =
        error?.response?.data?.masg ||
        "Unable to send password reset OTP";

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
            Forgot Password
          </h1>
          <p className="text-gray-500 mt-3 text-sm md:text-base">
            Enter your account email to receive a reset OTP
          </p>
        </div>

        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#01A49E] focus:border-transparent transition"
            />
          </div>

          <button
            type="submit"
            disabled={loader}
            className="w-full bg-[#01A49E] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loader ? <ButtonLoader /> : "Send Reset OTP"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Remember your password?{" "}
          <Link href="/login">
            <span className="text-[#01A49E] font-semibold cursor-pointer hover:underline">
              Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
