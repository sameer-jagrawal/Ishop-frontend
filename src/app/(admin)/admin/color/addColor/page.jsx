"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { client, notify } from "@/utils/helper";
export default function page() {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const nameRef = useRef(null);
  const slugRef = useRef(null);
  const colorCodeRef = useRef(null);
  // const selectColorRef = useRef(null)
  const [sleColor, setSetColor] = useState(null);

  function createSlug(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  function getSlug() {
    let value = nameRef.current.value;
    slugRef.current.value = createSlug(value);
  }

  function getSelColor() {
    let value = colorCodeRef.current.value;
    setSetColor(value);
  }
  // console.log(sleColor)

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      slug: slugRef.current.value,
      colorCode: colorCodeRef.current.value,
    };
    setLoader(true);
    client
      .post("/color/create", payload)
      .then((response) => {
        if (response.data.success) {
          notify(response.data.masg, response.data.success);
        }
        router.push("/admin/color");
      })
      .catch((error) => {
        const massage = error?.response?.data?.masg || "Internal server error";
        notify(massage, false);
        console.log(error);
      })
      .finally(() => {
        setLoader(false);
      });
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start p-4 md:p-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl border border-gray-200 p-5 md:p-8">
        {/* Header */}
        <div className="mb-6">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-1">
            Colors
          </p>
          <h2 className="text-2xl font-semibold text-gray-800">Add Color</h2>
          <p className="text-sm text-gray-400 mt-1">
            Fill in the details to create a new color.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={submitHandler} className="space-y-5">
          {/* Name + Slug */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-600">
                Color Name
              </label>
              <input
                onChange={getSlug}
                type="text"
                ref={nameRef}
                placeholder="e.g. Midnight Black"
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 hover:border-gray-300"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-600">Slug</label>
              <input
                type="text"
                ref={slugRef}
                placeholder="e.g. midnight-black"
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-500 placeholder-gray-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 hover:border-gray-300"
              />
              <p className="text-xs text-gray-400">Auto-generated from name</p>
            </div>
          </div>

          {/* Color Code */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-600">
              Color Code
            </label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                onChange={getSelColor}
                ref={colorCodeRef}
                placeholder="e.g. #000000"
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 hover:border-gray-300 font-mono"
              />
            </div>
            <p className={sleColor ? "hidden" : "block text-xs text-gray-400"}>
              Enter Hex Code
            </p>
          </div>
          <p
              className="w-6 h-6  rounded-full"
              style={{ backgroundColor: sleColor }}
            ></p>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-1">
            <button
              type="button"
              className="px-5 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 active:scale-95 transition-all duration-150"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-orange-500 text-sm font-medium text-white hover:bg-orange-600 active:scale-95 transition-all duration-150 shadow-sm"
            >
              {loader ? "Saving..." : "Save Color"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
