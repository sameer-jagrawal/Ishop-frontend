import CategoryStatusDropdown from "@/app/components/admin components/CategoryStatusDropdown";
import { Pencil, Plus } from "lucide-react";
import React from "react";
import { getCategories } from "@/api_call/api";
import Link from "next/link";
import DeleteBtn from "@/app/components/admin components/DeleteBtn";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function UserManagementTable() {
  
  const data  = await getCategories();
  // console.log(data)
  // return
  const categories = data?.data;
  const meta = data?.meta;
  // console.log(meta)
  return (
    <div className="p-2 md:p-4 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div>
          <h1 className="text-xl md:text-3xl font-semibold text-gray-800">
            Product Categories
          </h1>
          <p className="text-xs md:text-sm text-gray-500 mt-1">
            Manage your product categories
          </p>
        </div>

        <Link href={"category/addCategory"}>
          <button className="flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-orange-500 text-white rounded-xl shadow hover:shadow-md hover:scale-105 transition text-sm">
            <Plus size={16} />
            <span className="hidden sm:inline">Add Category</span>
            <span className="sm:hidden">Add</span>
          </button>
        </Link>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            {/* Table Head */}
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-2 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Image
                </th>
                <th className="px-2 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Category Name
                </th>
                <th className="px-2 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Slug
                </th>
                <th className="px-2 py-4  text-center text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Status
                </th>
                <th className="px-2 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Actions
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {categories?.map((user, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  {/* Image */}
                  <td className="px-2 py-4">
                    <img
                      src={`https://ishop-backend-2mld.onrender.com/category/${user?.image}`}
                      alt={user.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  </td>

                  {/* Name */}
                  <td className="px-2 py-4 font-medium text-gray-800">
                    {user.name}
                  </td>

                  {/* Slug */}
                  <td className="px-2 py-4 text-gray-500">
                    {user.slug}
                  </td>

                  <td className="px-2 py-4">
                    <CategoryStatusDropdown category={user} />
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 hover:text-blue-800 transition">
                        <Link href={`/admin/category/edit/${user.slug}`}>
                        <Pencil size={18} />
                        </Link>
                      </button>

                      <DeleteBtn id={user._id} type={"category"} />
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
