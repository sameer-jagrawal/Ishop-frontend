"use client";
import { client, notify } from "@/utils/helper";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ButtonLoader from "@/app/components/user components/ButtonLoader";

export default function RegisterPage() {
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChanges = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoader(true);
    client
      .post("user/register", form)
      .then((response) => {
        notify(response.data.masg, response.data.success);
        console.log(response, "user response");

        if (response.data.success) {
          setForm({});
          router.push(`/otp-verify?email=${form.email}`);
        }
      })
      .catch((error) => {

        const message =
           error?.response?.data?.masg ||
           "Internal Server Error"
     
        notify(message, false)
     
     })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <div className="min-h-screen bg-[#f4f7f7] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-[28px] shadow-lg p-8 md:p-10 border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Create Account
          </h1>
          <p className="text-gray-500 mt-3 text-sm md:text-base">
            Create your IShop account and continue shopping
          </p>
        </div>

        <form onSubmit={submitHandler} className="space-y-5">
          <div className=" gap-5">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                onChange={handleChanges}
                name="name"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#01A49E] focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChanges}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#01A49E] focus:border-transparent transition"
              />
            </div>
          </div>

          <div className="">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChanges}
                placeholder="Create password"
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#01A49E] focus:border-transparent transition"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loader}
            className="w-full bg-[#01A49E] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loader ? <ButtonLoader /> : "Create Account"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <span className="text-[#01A49E] font-semibold cursor-pointer hover:underline">
            Login
          </span>
        </div>
      </div>
    </div>
  );
}
