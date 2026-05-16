import { getAllOrders } from "@/api_call/api";
import Link from "next/link";
export default async function RecentOrdersTable() {
  const ordersRes = await getAllOrders();
  console.log(ordersRes);
  const orders = ordersRes?.data?.orders;

  const statusStyles = {
    Delivered: "bg-emerald-50 text-emerald-600 border border-emerald-200",
    Pending: "bg-yellow-50 text-yellow-600 border border-yellow-200",
    Shipped: "bg-blue-50 text-blue-600 border border-blue-200",
    Cancelled: "bg-red-50 text-red-600 border border-red-200",
    Processing: "bg-orange-50 text-orange-500 border border-orange-200",
  };

  return (
    <div className="bg-white rounded-3xl border border-orange-100 shadow-sm p-6 mt-8 overflow-x-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Recent Orders</h2>

          <p className="text-sm text-gray-500 mt-1">
            Latest customer purchases
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-orange-400 text-white text-sm font-medium hover:bg-orange-500 transition">
          View All
        </button>
      </div>

      {/* Mobile card view */}
      <div className="md:hidden space-y-4">
        {orders.map((order, index) => (
          <div key={index} className="border border-orange-100 rounded-2xl p-4 hover:bg-orange-50/40 transition">
            <div className="flex items-start justify-between gap-2 mb-3">
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Order ID</p>
                <p className="text-xs font-semibold text-gray-800 break-all">{order?._id}</p>
              </div>
              <Link href={`/admin/order/${order?._id}`}>
                <button className="px-3 py-1.5 rounded-xl border border-orange-200 text-orange-500 text-xs font-medium hover:bg-orange-50 transition flex-shrink-0">
                  View
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-xs text-gray-500">Customer</p>
                <p className="font-medium text-gray-700">{order?.user?.name}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Amount</p>
                <p className="font-medium text-gray-800">${order?.totalAmount}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Payment</p>
                <p className="font-medium text-gray-700">{order?.paymentMethod}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Date</p>
                <p className="text-gray-500 text-xs">
                  {new Date(order.createdAt).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table */}
      <table className="hidden md:table w-full min-w-[700px]">
        <thead>
          <tr className="border-b border-orange-100 text-left">
            <th className="py-4  text-sm font-semibold text-gray-600">
              Order ID
            </th>

            <th className="py-4 px-3 text-sm font-semibold text-gray-600">
              Customer
            </th>

            <th className="py-4 px-3 text-sm font-semibold text-gray-600">
              Amount
            </th>

            {/* <th className="py-4 px-3 text-sm font-semibold text-gray-600">
                Status
              </th> */}

            <th className="py-4 px-3 text-sm font-semibold text-gray-600">
              Payment
            </th>

            <th className="py-4 px-3 text-sm font-semibold text-gray-600">
              Date
            </th>

            <th className="py-4 px-3 text-sm font-semibold text-gray-600 text-center">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order, index) => (
            <tr
              key={index}
              className="border-b border-orange-50 hover:bg-orange-50/40 transition"
            >
              <td className="py-4  font-semibold text-gray-800">
                {order?._id}
              </td>

              <td className="py-4 px-3 text-gray-700">{order?.user?.name}</td>

              <td className="py-4 px-3 font-medium text-gray-800">
                ${order?.totalAmount}24234
              </td>

              {/* <td className="py-4 px-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td> */}

              <td className="py-4 px-3 text-gray-700 font-medium">
                {order?.paymentMethod}
              </td>

              <td className="py-4 px-3 text-gray-500 text-sm">
                {new Date(order.createdAt).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </td>

              <td className="py-4 px-3 text-center">
                <Link href={`/admin/order/${order?._id}`}>
                <button className="px-4 py-2 rounded-xl border border-orange-200 text-orange-500 text-sm font-medium hover:bg-orange-50 transition">
                  View
                </button>
                </Link>
               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
