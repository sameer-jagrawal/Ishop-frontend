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
  const fileRef = useRef(null);
  const [fileName,setFileName] = useState(null)
  const[preview,setPreview] = useState(null)

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

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log()
    const payload = new FormData();
    payload.append("image", e.target.image.files[0]);
    payload.append("name", nameRef.current.value);
    payload.append("slug", slugRef.current.value);
    console.log(payload);
    setLoader(true);
    client
      .post("/category/create", payload)
      .then((response) => {
        if (response.data.success) {
          notify(response.data.masg, response.data.success);
          nameRef.current.value = "";
          slugRef.current.value = "";
        }
        router.push("/admin/category");
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

  const fetchFilenName = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start p-4 md:p-8">
    <div className="w-full max-w-2xl bg-white rounded-2xl border border-gray-200 p-5 md:p-8">
  
      {/* Header */}
      <div className="mb-6">
        <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-1">
          Categories
        </p>
        <h2 className="text-2xl font-semibold text-gray-800">
          Add Category
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Fill in the details to create a new category.
        </p>
      </div>
  
     
  
      {/* Form */}
      <form onSubmit={submitHandler} className="space-y-5">
  
        {/* Name + Slug */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-600">
              Category Name
            </label>
            <input
              onChange={getSlug}
              type="text"
              ref={nameRef}
              placeholder="e.g. Electronics"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 hover:border-gray-300"
            />
          </div>
  
          {/* Slug */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-600">
              Slug
            </label>
            <input
              type="text"
              ref={slugRef}
              placeholder="e.g. electronics"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-500 placeholder-gray-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 hover:border-gray-300"
            />
            <p className="text-xs text-gray-400">Auto-generated from name</p>
          </div>
        </div>
  
        {/* Image Upload */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-600">
            Category Image
          </label>
  
          <label className="w-full h-32 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 bg-gray-50 cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            <span className="text-sm font-medium text-gray-500">
              {fileName || "Click to upload image"}
            </span>
            <span className="text-xs text-gray-400">PNG, JPG, WEBP up to 5MB</span>
            <input
              type="file"
              ref={fileRef}
              onChange={fetchFilenName}
              name="image"
              className="hidden"
            />
          </label>
  
          {preview && (
            <div className="flex items-center gap-3 mt-2 px-3 py-2.5 rounded-lg  bg-gray-50">
              <img
                width={100}
                src={preview}
                alt="preview"
                className="rounded-md object-cover border border-gray-200"
              />
              <span className="text-sm text-gray-600 truncate">{fileName}</span>
            </div>
          )}
        </div>
  
        
  
        {/* Actions */}
        <div className="flex justify-end gap-3 pt-1">
          <button
            type="button"
            className="px-5 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-600 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2.5 rounded-lg bg-orange-500 text-sm font-medium text-white hover:bg-orange-600 transition shadow-sm"
          >
            {loader ? "Saving..." : "Save Category"}
          </button>
        </div>
  
      </form>
    </div>
  </div>
  );
}
