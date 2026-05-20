import { Pencil, Plus } from "lucide-react";
import React from "react";
import { getProduct } from "@/api_call/api";
import Link from "next/link";
import DeleteBtn from "@/app/components/admin components/DeleteBtn";
import ProductStatusDropdown from "@/app/components/admin components/ProductStatusDropdown";
import { FaEye } from "react-icons/fa";

export default async function UserManagementTable() {
  const data = await getProduct();
  const Brands = data?.data || [];
  // console.log("console", Brands[0].brandId);
  // console.log(Brands.thumbnail)
  // const meta = data.meta;
  // console.log(meta)
  return (
    <div className="p-2 md:p-4 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <div>
          <h1 className="text-xl md:text-3xl font-semibold text-gray-800">Products</h1>
          <p className="text-xs md:text-sm text-gray-500 mt-1">Manage Products</p>
        </div>

        <Link href={"product/add"}>
          <button className="flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 bg-orange-500 text-white rounded-xl shadow hover:shadow-md hover:scale-105 transition text-sm">
            <Plus size={16} />
            <span className="hidden sm:inline">Add Product</span>
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
                  Image
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Brand
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
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
                  {/* Image */}
                  <td className="px-6 py-4">
                    <img
                      src={`https://ishop-backend-2mld.onrender.com/product/${user?.thumbnail}`}
                      alt={user.name}
                      className="w-12 h-12 rounded-xl object-cover border"
                    />
                  </td>

                  {/* Name */}
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 px-1 py-1  text-xs rounded-md">
                        {user?.name}
                      </span>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-1 py-1 text-xs font-medium bg-indigo-100 text-indigo-700 rounded-full">
                        {user.categoryId?.name}
                      </span>
                    </div>
                  </td>
                  {/* Brand */}
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      <span className=" px-1 py-1 text-xs font-medium bg-indigo-100 text-indigo-700 rounded-full">
                        {user.brandId?.name}
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <ProductStatusDropdown product={user} />
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3">
                      <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 hover:text-blue-800 transition">
                        <Link href={`/admin/product/edit/${user?.slug}`}>
                          <Pencil size={18} />
                        </Link>
                      </button>
                      <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 hover:text-blue-800 transition">
                        <Link href={`/admin/product/view/${user?._id}`}>
                          <FaEye  size={18} />
                        </Link>
                      </button>

                      <DeleteBtn id={user?._id} type={"product"} />
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
