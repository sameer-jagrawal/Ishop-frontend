import { Pencil, Plus } from "lucide-react";
import React from "react";
import { getColor } from "@/api_call/api";
import Link from "next/link";
import DeleteBtn from "@/app/components/admin components/DeleteBtn";
import Status from "@/app/components/admin components/Status";

export default async function UserManagementTable() {
  const data = await getColor();

  const Brands = data.data;
  // console.log(Brands)
  const meta = data.meta;
  console.log(meta);
  return (
    <div className="p-2 md:p-4 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div>
          <h1 className="text-xl md:text-3xl font-semibold text-gray-800">Color</h1>
          <p className="text-xs md:text-sm text-gray-500 mt-1">Manage Colors</p>
        </div>

        <Link href={"color/addColor"}>
          <button className="flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-orange-500 text-white rounded-xl shadow hover:shadow-md hover:scale-105 transition text-sm">
            <Plus size={16} />
            <span className="hidden sm:inline">Add Color</span>
            <span className="sm:hidden">Add</span>
          </button>
        </Link>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            {/* Table Head */}
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Color
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Color Name
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Slug
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Color Code
                </th>
                <th className="px-2 py-4  text-center text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">
                  Actions
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y">
              {Brands.map((user) => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-50 transition duration-150"
                >
                  <td className="px-6 py-4">
                    <div
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: user.colorCode }}
                    ></div>
                  </td>
                  {/* Name */}
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                    {user.name}
                  </td>

                  {/* Slug */}
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded-md">
                      {user.slug}
                    </span>
                  </td>

                  {/* Category */}
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 px-2 py-1 rounded-md">
                        {user.colorCode}
                      </span>
                    </div>
                  </td>

                  {/* status  */}
                <td className="p-4">
                    <Status
                     type={"color"}
                      value={user.status}
                      id={user._id}
                      feild={"status"}
                    />
                  </td>
                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3">
                      <DeleteBtn id={user._id} type={"color"} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
