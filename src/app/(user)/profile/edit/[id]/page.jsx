"use client";

import Image from "next/image";
import { useState } from "react";

export default function EditProfilePage() {

  const [formData, setFormData] = useState({
    firstName: "Mark",
    lastName: "Cole",
    email: "swoo@gmail.com",
    phone: "+1 0231 4554 452",
    image: null,
  });

  function changeHandler(e) {

    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    console.log(formData);
  }

  return (
    <div className="max-w-4xl mx-auto p-6  min-h-screen">

      {/* Edit Form */}
      <div className="col-span-12 md:col-span-9 bg-white shadow rounded-2xl p-6 transition-all duration-300 hover:shadow-lg">

        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Edit Profile
        </h1>

        <form
          onSubmit={submitHandler}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >

          {/* First Name */}
          <div>
            <label className="text-sm text-gray-600 block mb-2">
              First Name
            </label>

            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 hover:border-cyan-300"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm text-gray-600 block mb-2">
              Last Name
            </label>

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 hover:border-cyan-300"
            />
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label className="text-sm text-gray-600 block mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 hover:border-cyan-300"
            />
          </div>

          {/* Phone */}
          <div className="md:col-span-2">
            <label className="text-sm text-gray-600 block mb-2">
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={changeHandler}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 hover:border-cyan-300"
            />
          </div>

          {/* Image Upload */}
          <div className="md:col-span-2">
            <label className="text-sm text-gray-600 block mb-2">
              Profile Image
            </label>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={changeHandler}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none transition-all duration-300 hover:border-cyan-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
            />
          </div>

          {/* Image Preview */}
          {formData.image && (
            <div className="md:col-span-2 flex justify-center">

              <Image
                src={URL.createObjectURL(formData.image)}
                alt="preview"
                width={140}
                height={140}
                className="rounded-xl object-cover border border-gray-200 shadow"
              />

            </div>
          )}

          {/* Submit Button */}
          <div className="md:col-span-2">

            <button
              type="submit"
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:bg-cyan-600 hover:shadow-lg hover:scale-[1.02]"
            >
              Save Changes
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}