"use client";

import { client, notify } from "@/utils/helper";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ButtonLoader from "@/app/components/user components/ButtonLoader";

export default function AdminLoginPage() {

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

      // ADMIN LOGIN
      const response = await client.post(
        "user/login",
        form
      );

      notify(
        response.data.masg,
        response.data.success
      );

      // LOGIN FAILED
      if (!response.data.success) {
        return;
      }

      // CHECK ADMIN ROLE
      if (response.data.data.role !== "admin") {

        notify(
          "Access denied. Admin only.",
          false
        );

        return;
      }

      // SAVE ADMIN DATA
      localStorage.setItem(
        "admin",
        JSON.stringify(response.data.data)
      );

      // REDIRECT ADMIN PANEL
      router.push("/admin");

    } catch (error) {

      console.log(error);

      const message =
        error?.response?.data?.masg ||
        "Internal Server Error";

      notify(message, false);

    } finally {

      setLoader(false);

    }
  };

  return (
    <div className="min-h-screen bg-[#fff7f2] flex items-center justify-center px-4 py-10">

    <div className="w-full max-w-xl bg-white rounded-[28px] shadow-lg p-8 md:p-10 border border-orange-100">
  
      {/* Heading */}
      <div className="text-center mb-8">
  
        <div className="w-20 h-20 bg-orange-50 border border-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm">
          <span className="text-4xl">🛡️</span>
        </div>
  
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Admin Portal
        </h1>
  
        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Login to access the admin dashboard
        </p>
  
      </div>
  
      {/* Form */}
      <form
        onSubmit={submitHandler}
        className="space-y-5"
      >
  
        {/* Email */}
        <div>
  
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
  
          <input
            type="email"
            onChange={handleChange}
            value={form.email}
            name="email"
            placeholder="Enter admin email"
            className="w-full border border-orange-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
          />
  
        </div>
  
        {/* Password */}
        <div>
  
          <div className="flex items-center justify-between mb-2">
  
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
  
            <button
              type="button"
              className="text-sm text-orange-400 hover:underline"
            >
              Forgot Password?
            </button>
  
          </div>
  
          <input
            type="password"
            onChange={handleChange}
            value={form.password}
            name="password"
            placeholder="Enter your password"
            className="w-full border border-orange-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
          />
  
        </div>
  
        {/* Submit */}
        <button
          type="submit"
          disabled={loader}
          className="w-full bg-orange-400 text-white py-3 rounded-xl font-semibold hover:bg-orange-500 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
  
          {loader ? <ButtonLoader /> : "Login as Admin"}
  
        </button>
  
      </form>
  
      {/* Footer */}
      <div className="mt-6 text-center text-sm text-gray-600">
  
        Authorized administrators only
  
      </div>
  
    </div>
  
  </div>
  );
}