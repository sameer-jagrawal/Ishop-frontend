"use client";

import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Status from "./Status";

export const PRODUCT_STATUS_FIELDS = [
  { field: "status", label: "Visibility" },
  { field: "stock", label: "Stock" },
  { field: "is_home", label: "Home" },
  { field: "is_top", label: "Top" },
  { field: "is_popular", label: "Popular" },
  { field: "is_hot", label: "Hot" },
  { field: "is_best", label: "Best" },
  { field: "is_return", label: "Returns" },
];

export const CATEGORY_STATUS_FIELDS = [
  { field: "status", label: "Visibility" },
  { field: "is_home", label: "Home" },
  { field: "is_top", label: "Top" },
  { field: "is_popular", label: "Popular" },
];

export default function StatusDropdown({ item, type, fields }) {
  const activeCount = fields.filter(({ field }) => item?.[field]).length;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400">
        Status
        <span className="rounded-full bg-orange-100 px-1.5 py-0.5 text-[10px] font-bold text-orange-700">
          {activeCount}/{fields.length}
        </span>
        <ChevronDown size={14} className="text-gray-500" />
      </MenuButton>

      <MenuItems
        anchor="bottom start"
        className="z-20 mt-2 max-h-80 w-72 overflow-y-auto rounded-xl border border-gray-100 bg-white p-2 shadow-lg focus:outline-none"
      >
        {fields.map(({ field, label }) => (
          <div
            key={field}
            className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 hover:bg-gray-50"
          >
            <span className="text-xs font-semibold text-gray-600">{label}</span>
            <Status
              value={item?.[field]}
              type={type}
              id={item?._id}
              feild={field}
            />
          </div>
        ))}
      </MenuItems>
    </Menu>
  );
}
