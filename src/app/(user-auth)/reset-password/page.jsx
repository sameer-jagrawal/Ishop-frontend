"use client";

import { Suspense, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

import ButtonLoader from "@/app/components/user components/ButtonLoader";
import { client, notify } from "@/utils/helper";

function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const [loader, setLoader] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const inputsRef = useRef([]);

  const handleOtpChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const nextOtp = [...otp];
    nextOtp[index] = value;
    setOtp(nextOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!email) {
      notify("Email is missing. Please request a new reset OTP.", false);
      return;
    }

    if (form.password !== form.confirmPassword) {
      notify("Passwords do not match", false);
      return;
    }

    try {
      setLoader(true);
      const response = await client.post("user/reset-password", {
        email,
        otp: otp.join(""),
        password: form.password,
      });

      notify(response.data.masg, response.data.success);

      if (response.data.success) {
        router.push("/login");
      }
    } catch (error) {
      const message =
        error?.response?.data?.masg ||
        "Unable to reset password";

      notify(message, false);
    } finally {
      setLoader(false);
    }
  };

  const resendResetOtp = async () => {
    if (!email) {
      notify("Email is missing. Please request a new reset OTP.", false);
      return;
    }

    try {
      setLoader(true);
      const response = await client.post("user/forgot-password", { email });
      notify(response.data.masg, response.data.success);
    } catch (error) {
      const message =
        error?.response?.data?.masg ||
        "Unable to resend reset OTP";

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
            Reset Password
          </h1>
          <p className="text-gray-500 mt-3 text-sm md:text-base">
            Enter the OTP sent to
          </p>
          <p className="text-[#01A49E] font-medium mt-1 break-all">
            {email || "your email"}
          </p>
        </div>

        <form onSubmit={submitHandler} className="space-y-6">
          <div className="flex items-center justify-center gap-3 md:gap-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                ref={(el) => (inputsRef.current[index] = el)}
                value={digit}
                onChange={(e) => handleOtpChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                maxLength={1}
                className="w-12 h-14 md:w-14 md:h-16 text-center text-xl md:text-2xl font-semibold border border-gray-300 rounded-2xl outline-none focus:ring-2 focus:ring-[#01A49E] focus:border-transparent transition"
              />
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter new password"
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#01A49E] focus:border-transparent transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm new password"
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#01A49E] focus:border-transparent transition"
            />
          </div>

          <button
            type="submit"
            disabled={loader}
            className="w-full bg-[#01A49E] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loader ? <ButtonLoader /> : "Reset Password"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Didn&apos;t receive OTP?
          <button
            type="button"
            onClick={resendResetOtp}
            disabled={loader}
            className="ml-2 text-[#01A49E] font-semibold hover:underline disabled:opacity-60"
          >
            Resend
          </button>
        </div>

        <div className="mt-3 text-center text-sm text-gray-600">
          <Link href="/login">
            <span className="text-[#01A49E] font-semibold cursor-pointer hover:underline">
              Back to Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
