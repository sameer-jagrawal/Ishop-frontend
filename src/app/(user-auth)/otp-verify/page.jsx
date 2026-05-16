'use client'

import { Suspense, useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { client, notify } from "@/utils/helper";
import ButtonLoader from "@/app/components/user components/ButtonLoader";

function OTPContent() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [loader, setLoader] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setLoader(true);

    const finalOtp = otp.join("");

    client
      .post("user/verify-otp", {
        otp: finalOtp,
        email: email,
      })
      .then((response) => {
        notify(response.data.masg, response.data.success);

        if (response.data.success) {
          router.push("/login");
        }
      })
      .catch((error) => {
        const message =
          error?.response?.data?.masg ||
          "Internal Server Error";

        notify(message, false);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <div className="min-h-screen bg-[#f4f7f7] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white rounded-[28px] shadow-lg p-8 md:p-10 border border-gray-100">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            OTP Verification
          </h1>

          <p className="text-gray-500 mt-3 text-sm md:text-base">
            Enter the 6 digit OTP sent to
          </p>

          <p className="text-[#01A49E] font-medium mt-1 break-all">
            {email}
          </p>
        </div>

        <form onSubmit={submitHandler} className="space-y-8">

          <div className="flex items-center justify-center gap-3 md:gap-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                ref={(el) => (inputsRef.current[index] = el)}
                value={digit}
                onChange={(e) =>
                  handleChange(e.target.value, index)
                }
                onKeyDown={(e) =>
                  handleKeyDown(e, index)
                }
                maxLength={1}
                className="
                  w-12 h-14 md:w-14 md:h-16
                  text-center text-xl md:text-2xl
                  font-semibold border border-gray-300
                  rounded-2xl outline-none
                  focus:ring-2 focus:ring-[#01A49E]
                  focus:border-transparent transition
                "
              />
            ))}
          </div>

          <button
            type="submit"
            className="
              w-full bg-[#01A49E]
              text-white py-3 rounded-xl
              font-semibold hover:opacity-90
              transition-all duration-300
              disabled:opacity-70 disabled:cursor-not-allowed
            "
            disabled={loader}
          >
            {loader ? <ButtonLoader /> : "Verify OTP"}
          </button>

        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Didn't receive OTP?

          <button
            className="
              ml-2 text-[#01A49E]
              font-semibold hover:underline
            "
          >
            Resend
          </button>
        </div>

      </div>
    </div>
  );
}

export default function OTPVerificationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OTPContent />
    </Suspense>
  );
}