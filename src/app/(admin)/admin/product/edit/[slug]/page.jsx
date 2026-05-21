"use client";
import { useParams, useRouter } from "next/navigation";
import React, { use, useEffect, useRef, useState } from "react";
import Select from "react-select";
import { client, notify } from "@/utils/helper";
import { getSelectData } from "@/api_call/api";
import { CiCircleRemove } from "react-icons/ci";
import { Editor } from 'primereact/editor';
import ButtonLoader from "@/app/components/user components/ButtonLoader";


export default function page() {
  const { slug } = useParams();
  const router = useRouter();
  const nameRef = useRef(null);
  const slugRef = useRef(null);
  const originalPriceRef = useRef(null);
  const discount = useRef(null);
  const short_discription = useRef(null);
  const [loader, setLoader] = useState(false);

  // --- Data from API ---
  const [categoryList, setCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [data, setData] = useState(null);

  // --- Selected IDs (FIXED) ---
  const [categoryId, setCategoryId] = useState(null); // single ID
  const [selectedBrand, setSelectedBrand] = useState(null); // single ID
  const [selectedColors, setSelectedColors] = useState([]); // array of IDs

  // --- Image handling ---
  const [fileName, setFileName] = useState("");
  const [preview, setPreview] = useState(null);
  const [existingImages, setExistingImages] = useState([]); // from DB
const [newImages, setNewImages] = useState([]); // uploaded files

  // --- Price states ---
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");
  const [finalPrice, setFinalPrice] = useState("");

  // pre select
  const [preselcategories, setPreselcategories] = useState(null);

  // descripition
  const [text,setText] = useState("")


  function categorySelect(cat) {
    setPreselcategories(cat); // UI
    setCategoryId(cat ? cat.value : null); // backend
  }

  useEffect(() => {
    if (data && categoryList.length) {
      const selected = categoryList
        .map((cat) => ({
          value: cat._id,
          label: cat.name,
        }))
        .find((opt) => opt.value === data.categoryId);

      setPreselcategories(selected);
      setCategoryId(selected?.value || null);
    }
  }, [data, categoryList]);

  // get data by slug
  useEffect(() => {
    if (!slug) return;
    client
      .get(`product/slug/${slug}`)
      .then((response) => {
        const formdata = response.data.data;
        console.log(formdata);
        setData(formdata);
        setExistingImages(formdata.images);
        // const formatted = formdata.categoryId.map((item) => ({
        //   value: item._id,
        //   label: item.name,
        // }));

        // setPreselcategories(formatted); // for Select UI
        // setCategoryId(formatted.map((item) => item.value)); // for submit
      })
      .catch((error) => {
        // console.log(error);
      });
  }, [slug]);
  console.log(data);
  // Helper: slug generation
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

  function getOriginalPrice() {
    setOriginalPrice(originalPriceRef?.current?.value || "");
  }

  function getDiscount() {
    setDiscountPercent(discount?.current?.value || "");
  }

  // Calculate final price
  useEffect(() => {
    if (originalPrice && discountPercent) {
      const price = parseFloat(originalPrice);
      const disc = parseFloat(discountPercent);
      if (disc < 0 || disc > 100) {
        notify("Discount percent must be between 0 and 100", false);
        return;
      }
      const final = price - (disc / 100) * price;
      setFinalPrice(final.toFixed(2));
    } else if (originalPrice) {
      setFinalPrice(originalPrice);
    } else {
      setFinalPrice("");
    }
  }, [originalPrice, discountPercent]);

  // --- Fetch dropdown data ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryRes = await getSelectData("category");
        setCategoryList(categoryRes.data);
        const brandRes = await getSelectData("brand");
        setBrandList(brandRes.data);
        const colorRes = await getSelectData("color");
        setColorList(colorRes.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // delet image
 

  function handleRemove(image_name) {
    client
      .put(`/product/image_delete/${slug}`, { image_name })
      .then((response) => {
        if (response.data.success) {
          notify("Image deleted successfully", true);
  
          setExistingImages((prev) =>
            prev.filter((img) => img !== image_name)
          );
        }
      })
      .catch(() => {
        notify("Delete failed", false);
      });
  }


  // --- Submit handler (FIXED) ---
  const submitHandler = (e) => {
    e.preventDefault();

    // Validation
    // if (!selectedCategory) {
    //   notify("Please select a category", false);
    //   return;
    // }
    if (!selectedBrand) {
      notify("Please select a brand", false);
      return;
    }

    const payload = new FormData();
    // Thumbnail
    if (e.target.thumbnail.files[0]) {
      payload.append("thumbnail", e.target.thumbnail.files[0]);
    }
    // Multiple images
    for (const file of newImages) {
      payload.append("images", file);
    }
    // Basic fields
    payload.append("name", nameRef?.current?.value || "");
    payload.append("slug", slugRef?.current?.value || "");
    payload.append(
      "short_description",
      short_discription?.current?.value || "",
    );
    payload.append("long_description", text || "");
    // IDs (FIXED)
    payload.append("categoryId", categoryId);
    payload.append("brandId", selectedBrand);
    payload.append("colorId", JSON.stringify(selectedColors));
    // Price
    payload.append("original_price", originalPrice);
    payload.append("discount_percentage", discountPercent);
    payload.append("final_price", finalPrice);

    setLoader(true);
    client
      .put(`/product/edit/${slug}`, payload)
      .then((response) => {
        if (response.data.success) {
          notify(response.data.masg || "Product created", true);
          router.push("/admin/product");
        } else {
          notify(response.data.masg || "Something went wrong", false);
        }
      })
      .catch((error) => {
        const message = error?.response?.data?.masg || "Internal server error";
        notify(message, false);
        console.log(error);
      })
      .finally(() => {
        setLoader(false);
      });
  };


  // Thumbnail preview
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setPreview(URL.createObjectURL(file));
    }
  };
  console.log("pre select categories", preselcategories);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start p-4 md:p-8">
      <div className="w-full bg-white rounded-2xl border border-gray-200 p-5 md:p-8">
        {/* Header */}
        <div className="mb-6">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-1">
             Product
          </p>
          <h2 className="text-2xl font-semibold text-gray-800">Edit Product</h2>
          
        </div>

        <form onSubmit={submitHandler} className="space-y-8">
          {/* ── BASIC INFO ── */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
              <div className="flex-1 space-y-1.5">
                <label className="text-sm font-medium text-gray-600">
                  Product Name
                </label>
                <input
                  onChange={getSlug}
                  defaultValue={data?.name}
                  type="text"
                  ref={nameRef}
                  placeholder="e.g. Nike Air Max"
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 hover:border-gray-300"
                />
              </div>
              <div className="flex-1 space-y-1.5">
                <label className="text-sm font-medium text-gray-600">
                  Slug
                </label>
                <input
                  type="text"
                  ref={slugRef}
                  defaultValue={data?.slug}
                  placeholder="e.g. nike-air-max"
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-500 placeholder-gray-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  readOnly
                />
                <p className="text-xs text-gray-400">
                  Auto-generated from name
                </p>
              </div>
            </div>

            {/* ── CATEGORY, BRAND, COLOR (FIXED) ── */}
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
              {/* Category - single select */}
              <div className="flex-1 space-y-1.5">
                <label className="text-sm font-medium text-gray-600">
                  Category <span className="text-red-500">*</span>
                </label>
                <Select
                  options={categoryList.map((cat) => ({
                    value: cat._id,
                    label: cat.name,
                  }))}
                  onChange={categorySelect}
                  value={preselcategories}
                  isClearable
                  placeholder="Select a category..."
                  styles={selectStyles}
                />
              </div>

              {/* Brand - single select */}
              <div className="flex-1 space-y-1.5">
                <label className="text-sm font-medium text-gray-600">
                  Brand <span className="text-red-500">*</span>
                </label>
                <Select
                  options={brandList.map((b) => ({
                    value: b._id,
                    label: b.name,
                  }))}
                  onChange={(option) => setSelectedBrand(option?.value || null)}
                  value={
                    selectedBrand
                      ? {
                          value: selectedBrand,
                          label: brandList.find((b) => b._id === selectedBrand)
                            ?.name,
                        }
                      : null
                  }
                  isClearable
                  placeholder="Select a brand..."
                  styles={selectStyles}
                />
              </div>

              {/* Color - multi select */}
              <div className="flex-1 space-y-1.5">
                <label className="text-sm font-medium text-gray-600">
                  Colors
                </label>
                <Select
                  options={colorList.map((col) => ({
                    value: col._id,
                    label: col.name,
                  }))}
                  isMulti
                  onChange={(options) => {
                    const ids = options.map((opt) => opt.value);
                    setSelectedColors(ids);
                  }}
                  value={selectedColors.map((id) => ({
                    value: id,
                    label: colorList.find((c) => c._id === id)?.name,
                  }))}
                  placeholder="Select colors..."
                  styles={multiSelectStyles}
                />
              </div>
            </div>
          </div>

          {/* ── PRICING ── */}
          <div className="space-y-4 mt-4">
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex-1 space-y-1.5">
                <label className="text-sm font-medium text-gray-600">
                  Original Price
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  onChange={getOriginalPrice}
                  ref={originalPriceRef}
                  min="0"
                  step="0.01"
                  defaultValue={data?.original_price}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                />
              </div>
              <div className="flex-1 space-y-1.5">
                <label className="text-sm font-medium text-gray-600">
                  Discount %
                </label>
                <input
                  type="number"
                  placeholder="0"
                  min="0"
                  max="100"
                  defaultValue={data?.discount_percentage}
                  ref={discount}
                  onChange={getDiscount}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                />
              </div>
              <div className="flex-1 space-y-1.5">
                <label className="text-sm font-medium text-gray-600">
                  Final Price
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  value={finalPrice}
                  defaultValue={data?.final_price}
                  readOnly
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-600"
                />
                <p className="text-xs text-gray-400">Shown to customers</p>
              </div>
            </div>
          </div>

          {/* ── DESCRIPTION ── */}
          <div className="space-y-4 mt-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-600">
                Short Description
              </label>
              <textarea
                rows={2}
                ref={short_discription}
                defaultValue={data?.short_description}
                placeholder="Brief summary shown in listings..."
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100 resize-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-600">
                Long Description
              </label>
              <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
              
            </div>
          </div>

          {/* ── MEDIA ── */}
          <div className="space-y-4 mt-4">
            <div className="flex flex-col sm:flex-row gap-5">
              {/* Thumbnail */}
              <div className="flex-1 space-y-1.5">
                <label className="text-sm font-medium text-gray-600">
                  Thumbnail
                </label>
                <label className="group w-full h-32 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 bg-gray-50 cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400 group-hover:text-orange-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-500 group-hover:text-orange-500">
                    {fileName || "Click to upload thumbnail"}
                  </span>
                  <span className="text-xs text-gray-400">
                    PNG, JPG, WEBP up to 5MB
                  </span>
                  <input
                    type="file"
                    name="thumbnail"
                    className="hidden"
                    onChange={handleThumbnailChange}
                  />
                </label>

                <div className=" w-auto items-center gap-3 mt-2 p-3 border rounded-lg bg-gray-50">
                  <img
                    src={`https://ishop-backend-2mld.onrender.com/product/${data?.thumbnail}`}
                    alt="preview"
                    className=" rounded-md object-cover"
                    width={200}
                    height={200}
                  />
                  <span className="text-sm text-gray-600 truncate">
                    {data?.thumbnail}
                  </span>
                </div>
              </div>

              {/* Multiple Images */}
              <div className="flex-1 space-y-1.5">
                <label className="text-sm font-medium text-gray-600">
                  Gallery Images
                </label>
                <label className="group w-full h-32 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 bg-gray-50 cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400 group-hover:text-orange-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 9.75h18M3 6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 17.25V6.75z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-500 group-hover:text-orange-500">
                    Click to upload images
                  </span>
                  <span className="text-xs text-gray-400">
                    Multiple allowed · up to 5MB each
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) =>
                      setNewImages(
                        e.target.files ? Array.from(e.target.files) : []
                      )
                    }
                    className="hidden"
                  />
                </label>
                <div className="grid grid-cols-4 gap-3 mt-2 p-3 bg-gray-50 border border-gray-200 rounded-xl">

{/* Existing images (from backend) */}
{existingImages.map((img, index) => (
  <div key={index} className="relative border rounded-md">
    <img
      src={`https://ishop-backend-2mld.onrender.com/product/${img}`}
      className="object-cover w-full h-full rounded-md"
    />

    <CiCircleRemove
      size={20}
      className="absolute top-0 right-0 z-20 text-white bg-red-500 rounded-full cursor-pointer"
      onClick={() => handleRemove(img)}
    />
  </div>
))}

{/* Newly uploaded images */}
{newImages.map((file, index) => (
  <div key={index} className="relative border rounded-md">
    <img
      src={URL.createObjectURL(file)}
      className="object-cover w-full h-full rounded-md"
    />
  </div>
))}

</div>
              </div>
            </div>
          </div>

          {/* ── ACTIONS ── */}
          <div className="flex justify-end gap-3 pt-1">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-5 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-300 active:scale-95 transition-all duration-150"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-orange-500 text-sm font-medium text-white hover:bg-orange-600 active:scale-95 transition-all duration-150 shadow-sm"
              disabled={loader}
            >
              {loader ? <ButtonLoader /> : "Save Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Reusable styles for react-select (single)
const selectStyles = {
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
  option: (base, state) => ({
    ...base,
    fontSize: "14px",
    backgroundColor: state.isSelected
      ? "#fff7ed"
      : state.isFocused
        ? "#f9fafb"
        : "#fff",
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
};

// Styles for multi-select (colors)
const multiSelectStyles = {
  ...selectStyles,
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
    "&:hover": {
      backgroundColor: "#fed7aa",
      color: "#c2410c",
    },
  }),
};
