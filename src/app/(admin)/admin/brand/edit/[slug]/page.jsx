"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { client, notify } from "@/utils/helper";
import { getCategories } from "@/api_call/api";
import Select from "react-select";
export default function page() {
  const { slug } = useParams();
  //   console.log(slug);
  //   return
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const nameRef = useRef(null);
  const slugRef = useRef(null);
  const fileRef = useRef(null);
  const [data, setData] = useState({});
  const [image, setImage] = useState("");
  const [category, setCategory] = useState([]);
  const [slecategories, setCategoryId] = useState([]);
  const [preselcategories, setPreselcategories] = useState([]);

  function categorySelect(cat) {
    setPreselcategories(cat); // UI
    const ids = cat.map((item) => item.value);
    setCategoryId(ids); // backend
  }

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

  useEffect(() => {
    if (!slug) return;
    client
      .get(`brand/${slug}`)
      .then((response) => {
        const formdata = response?.data?.data;
        console.log(response.data);
        // console.log(formdata)
        const imagename = response?.data?.data?.image;
        setImage(imagename);
        setData(formdata);
        const formatted = formdata.categoryId.map((item) => ({
          value: item?._id,
          label: item?.name,
        }));

        setPreselcategories(formatted); // for Select UI
        setCategoryId(formatted.map((item) => item.value)); // for submit
      })
      .catch((error) => {
        console.log(error);
      });
  }, [slug]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategories();
        setCategory(data?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  //   return
  const submitHandler = (e) => {
    e.preventDefault();
    const image = e.target.image.files[0];
    // console.log()
    const payload = new FormData();
    if (e.target.image.files[0]) {
      payload.append("image", e.target.image.files[0]);
    }
    payload.append("name", nameRef.current.value);
    payload.append("slug", slugRef.current.value);
    payload.append("categoryId", JSON.stringify(slecategories));
    console.log(payload);
    setLoader(true);
    client
      .put(`/brand/edit/${slug}`, payload)
      .then((response) => {
        if (response.data.success) {
          notify(response.data.masg, response.data.success);
        }
        router.push("/admin/brand");
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
          Brands
        </p>
        <h2 className="text-2xl font-semibold text-gray-800">
          Edit Brand
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Update your brand details below.
        </p>
      </div>
  
      {/* Form */}
      <form onSubmit={submitHandler} className="space-y-5">
  
        {/* Name + Slug */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-600">
              Brand Name
            </label>
            <input
              onChange={getSlug}
              type="text"
              defaultValue={data.name}
              ref={nameRef}
              placeholder="e.g. Nike"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 hover:border-gray-300"
            />
          </div>
  
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-600">
              Slug
            </label>
            <input
              type="text"
              ref={slugRef}
              readOnly
              defaultValue={data.slug}
              placeholder="e.g. nike"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-500 placeholder-gray-400 outline-none cursor-not-allowed"
            />
            <p className="text-xs text-gray-400">Auto-generated from name</p>
          </div>
        </div>
  
        {/* Category Select */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-600">
            Categories
          </label>
          <Select
            value={preselcategories}
            onChange={categorySelect}
            isMulti
            closeMenuOnSelect={false}
            options={category.map((cat) => ({
              value: cat._id,
              label: cat.name,
            }))}
            styles={{
              control: (base, state) => ({
                ...base,
                borderRadius: "8px",
                borderColor: state.isFocused ? "#fb923c" : "#e5e7eb",
                boxShadow: state.isFocused ? "0 0 0 2px rgba(251,146,60,0.15)" : "none",
                backgroundColor: "#fff",
                fontSize: "14px",
                padding: "1px",
                "&:hover": { borderColor: "#d1d5db" },
              }),
              multiValue: (base) => ({
                ...base,
                backgroundColor: "#fff7ed",
                borderRadius: "6px",
                border: "1px solid #fed7aa",
              }),
              multiValueLabel: (base) => ({
                ...base,
                color: "#ea580c",
                fontSize: "12px",
                fontWeight: "500",
              }),
              multiValueRemove: (base) => ({
                ...base,
                color: "#fb923c",
                borderRadius: "0 6px 6px 0",
                "&:hover": { backgroundColor: "#fed7aa", color: "#c2410c" },
              }),
              option: (base, state) => ({
                ...base,
                fontSize: "14px",
                backgroundColor: state.isSelected ? "#fff7ed" : state.isFocused ? "#f9fafb" : "#fff",
                color: state.isSelected ? "#ea580c" : "#374151",
                "&:active": { backgroundColor: "#ffedd5" },
              }),
              menu: (base) => ({
                ...base,
                borderRadius: "10px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                overflow: "hidden",
              }),
            }}
            placeholder="Select categories..."
          />
        </div>
  
        {/* Image Upload */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-600">
            Brand Image
          </label>
  
          <label className="group w-full h-32 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 bg-gray-50 cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            <span className="text-sm font-medium text-gray-500 group-hover:text-orange-500 transition-colors duration-200">
              Click to replace image
            </span>
            <span className="text-xs text-gray-400">PNG, JPG, WEBP up to 5MB</span>
            <input
              type="file"
              ref={fileRef}
              name="image"
              className="hidden"
            />
          </label>
  
          {/* Existing image preview */}
          <div className="flex items-center gap-3 mt-2 px-3 py-2.5 rounded-lg bg-gray-50">
            <img
              src={`https://ishop-backend-2mld.onrender.com/brand/${data.image}`}
              alt="preview"
              width={100}
              className=" rounded-md object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-600">Current image</p>
              <p className="text-xs text-gray-400">{data.image}</p>
            </div>
          </div>
        </div>
  
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
            {loader ? "Updating..." : "Update Brand"}
          </button>
        </div>
  
      </form>
    </div>
  </div>
  );
}
