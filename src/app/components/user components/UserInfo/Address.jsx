"use client";

import Link from "next/link";
import { MapPin, Plus, Check, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import DeleteBtn from "../../admin components/DeleteBtn";

export default function AddressPage({user}) {
  

  const handleEdit = (e, id) => {
    e.stopPropagation();
    window.location.href = `/profile/address/edit/${id}`;
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    // UI only (no logic)
    console.log("Delete address:", id);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-10 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Saved Addresses</h1>
        </div>

        <Link
          href={"/profile/address/add/"}
          className="flex items-center gap-2 bg-[#01A49E] text-white px-3 md:px-5 py-2 md:py-3 rounded-xl transition-all duration-300 hover:bg-[#01857f] hover:shadow-lg active:scale-[0.98] text-sm md:text-base"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Add Address</span>
          <span className="sm:hidden">Add</span>
        </Link>
      </div>

      {/* Address List */}
      <div className="space-y-4 md:space-y-5">
        {user?.addresses.map((item) => {
          return (
            <div
              key={item?._id}
              className="relative bg-white rounded-2xl p-4 md:p-5 border transition-all duration-300 cursor-pointer border-[#01A49E] shadow-[0_8px_25px_-8px_rgba(1,164,158,0.35)]"
            >
              {/* Content */}
              <div className="flex items-start justify-between gap-3 md:gap-4">
                <div className="flex items-start gap-3 md:gap-4 flex-1 min-w-0">
                  {/* Icon */}
                  <div className="min-w-10 h-10 md:min-w-12 md:h-12 rounded-full flex items-center justify-center bg-[#01A49E]/10 text-[#01A49E] flex-shrink-0">
                    <MapPin size={18} />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs md:text-sm font-medium bg-[#01A49E]/10 text-[#01A49E] px-3 py-1 rounded-full">
                        {item?.type}
                      </span>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-2xl p-3 md:p-5 shadow-sm hover:shadow-md transition">
                      {/* Name + Phone */}
                      <div className="flex flex-col gap-1 mb-3 md:mb-4">
                        <h2 className="text-base md:text-xl font-semibold text-gray-900 tracking-wide">
                          {item?.fullName}
                        </h2>
                        <p className="text-[#01A49E] font-medium text-xs md:text-sm">
                          +91 {item?.phone}
                        </p>
                      </div>

                      {/* Address */}
                      <div className="space-y-1 text-gray-600 leading-6 text-xs md:text-[15px]">
                        <p>{item?.addressLine1}</p>
                        {item?.addressLine2 && <p>{item?.addressLine2}</p>}
                        <p>{item?.city}, {item?.state}</p>
                        <p>
                          {item?.country} -{" "}
                          <span className="font-semibold text-gray-800">{item?.postalCode}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-start gap-2 flex-shrink-0">
                  <button
                    onClick={(e) => handleEdit(e, item?._id)}
                    className="inline-flex items-center gap-1.5 px-2 md:px-3 py-1.5 rounded-lg text-xs md:text-sm bg-gray-100 text-gray-700 hover:bg-[#01A49E]/10 hover:text-[#01A49E] transition"
                  >
                    <Pencil size={13} />
                    Edit
                  </button>
                  <DeleteBtn type={"user/address"} id={item?._id} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}






//  fullName: { type: String, required: true },
// phone: { type: String, required: true },

// addressLine1: { type: String, required: true },
// addressLine2: { type: String },

// city: { type: String, required: true },
// state: { type: String, required: true },
// postalCode: { type: String, required: true },
// country: { type: String, default: "India" },

// isDefault: { type: Boolean, default: false },
