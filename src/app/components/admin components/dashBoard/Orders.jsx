import { getDashboardData } from "@/api_call/api";
import Link from "next/link";

const money = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function formatDate(dateValue) {
  return new Date(dateValue).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default async function RecentOrdersTable() {
  const dashboardRes = await getDashboardData();
  const orders = dashboardRes?.data?.recentOrders || [];

  return (
    <div className="mt-4 overflow-x-auto border border-gray-200 bg-white p-4">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-medium text-gray-900">Recent Orders</h2>
          <p className="mt-1 text-sm text-gray-500">Latest customer purchases</p>
        </div>
      </div>

      <div className="space-y-3 md:hidden">
        {orders.map((order) => (
          <div key={order?._id} className="border border-gray-200 p-3">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-gray-800">{order?._id}</p>
                <p className="mt-1 text-sm text-gray-500">{order?.user?.name || "Customer"}</p>
              </div>
              <Link href={`/admin/order/${order?._id}`} className="border border-gray-200 px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50">
                View
              </Link>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-600">
              <p>{money.format(order?.totalAmount || 0)}</p>
              <p className="capitalize">{order?.paymentMethod}</p>
              <p className="capitalize">{order?.orderStatus?.replaceAll("_", " ")}</p>
              <p>{formatDate(order?.createdAt)}</p>
            </div>
          </div>
        ))}
      </div>

      <table className="hidden w-full min-w-[760px] md:table">
        <thead>
          <tr className="border-b border-gray-200 text-left text-sm text-gray-500">
            <th className="py-3 font-medium">Order</th>
            <th className="px-3 py-3 font-medium">Customer</th>
            <th className="px-3 py-3 font-medium">Amount</th>
            <th className="px-3 py-3 font-medium">Payment</th>
            <th className="px-3 py-3 font-medium">Status</th>
            <th className="px-3 py-3 font-medium">Date</th>
            <th className="px-3 py-3 text-right font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order?._id} className="border-b border-gray-100 text-sm text-gray-700 hover:bg-gray-50">
              <td className="max-w-[210px] truncate py-3 text-gray-900">{order?._id}</td>
              <td className="px-3 py-3">{order?.user?.name || "Customer"}</td>
              <td className="px-3 py-3">{money.format(order?.totalAmount || 0)}</td>
              <td className="px-3 py-3 capitalize">{order?.paymentMethod}</td>
              <td className="px-3 py-3 capitalize">{order?.orderStatus?.replaceAll("_", " ")}</td>
              <td className="px-3 py-3">{formatDate(order?.createdAt)}</td>
              <td className="px-3 py-3 text-right">
                <Link href={`/admin/order/${order?._id}`} className="border border-gray-200 px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {!orders.length && (
        <div className="py-10 text-center text-sm text-gray-500">
          No orders found.
        </div>
      )}
    </div>
  );
}
