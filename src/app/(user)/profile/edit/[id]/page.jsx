"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import ButtonLoader from "@/app/components/user components/ButtonLoader";
import { client, notify } from "@/utils/helper";
import { userImageUrl } from "@/utils/mediaUrl";

export default function EditProfilePage() {
  const router = useRouter();
  const [loader, setLoader] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    image: null,
    currentImage: "",
  });

  useEffect(() => {
    let mounted = true;
    async function loadProfile() {
      try {
        const response = await client.get("user/get");
        const profile = response?.data?.data;
        if (!mounted || !profile) return;
        setFormData((prev) => ({
          ...prev,
          name: profile.name || "",
          email: profile.email || "",
          phone: profile.phone || "",
          currentImage: profile.image || "",
        }));
      } catch (error) {
        notify(error?.response?.data?.masg || "Unable to load profile", false);
      }
    }
    loadProfile();
    return () => {
      mounted = false;
    };
  }, []);

  const previewUrl = useMemo(() => {
    if (formData.image) return URL.createObjectURL(formData.image);
    return userImageUrl(formData.currentImage);
  }, [formData.image, formData.currentImage]);

  useEffect(() => {
    return () => {
      if (previewUrl?.startsWith("blob:")) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  function changeHandler(e) {

    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  }

  async function submitHandler(e) {
    e.preventDefault();

    try {
      setLoader(true);
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("phone", formData.phone);
      if (formData.image) payload.append("image", formData.image);

      const response = await client.put("user/profile", payload);
      notify(response?.data?.masg || "Profile updated", response?.data?.success);
      router.refresh();
      router.push("/profile");
    } catch (error) {
      notify(error?.response?.data?.masg || "Profile update is not available yet", false);
    } finally {
      setLoader(false);
    }
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
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={changeHandler}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 hover:border-cyan-300"
            />
          </div>

          <div>
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

          {/* Email */}
          <div className="md:col-span-2">
            <label className="text-sm text-gray-600 block mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
              className="w-full border border-gray-200 rounded-lg bg-gray-50 px-4 py-3 text-gray-500 outline-none"
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
          {previewUrl && (
            <div className="md:col-span-2 flex justify-center">

              <Image
                src={previewUrl}
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
              disabled={loader}
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:bg-cyan-600 hover:shadow-lg hover:scale-[1.02]"
            >
              {loader ? <ButtonLoader /> : "Save Changes"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}
