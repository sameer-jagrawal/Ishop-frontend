import { getDashboardData } from "@/api_call/api";
import { PieChart } from "@/app/components/admin components/AdminCharts";
import {
  Boxes,
  CreditCard,
  PackageCheck,
  ShoppingBag,
  Users,
  WalletCards,
} from "lucide-react";

const money = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function formatDate(dateValue) {
  return new Date(dateValue).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
  });
}

function StatCard({ icon: Icon, label, value, note }) {
  return (
    <div className="border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="mt-2 text-xl font-medium text-gray-900">{value}</p>
        </div>
        <span className="grid h-9 w-9 place-items-center rounded-md bg-gray-50 text-gray-600">
          <Icon size={18} />
        </span>
      </div>
      <p className="mt-3 text-xs text-gray-500">{note}</p>
    </div>
  );
}

function MiniBars({ data }) {
  const values = data.map((item) => Number(item.revenue || 0));
  const max = Math.max(...values, 1);

  return (
    <div className="mt-5 flex h-40 items-end gap-2 border-t border-gray-100 pt-4">
      {data.map((item) => {
        const height = Math.max((Number(item.revenue || 0) / max) * 100, 8);

        return (
          <div key={item._id} className="flex min-w-0 flex-1 flex-col items-center gap-2">
            <div className="flex h-28 w-full items-end rounded-sm bg-gray-50">
              <div className="w-full rounded-sm bg-[#01A49E]" style={{ height: `${height}%` }} />
            </div>
            <span className="max-w-full truncate text-[11px] text-gray-500">
              {formatDate(item._id)}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function Breakdown({ title, items }) {
  const total = items.reduce((sum, item) => sum + Number(item.count || 0), 0);

  return (
    <div className="border border-gray-200 bg-white p-4">
      <h2 className="text-base font-medium text-gray-900">{title}</h2>
      <div className="mt-4 space-y-3">
        {items.length ? items.map((item) => {
          const count = Number(item.count || 0);
          const percent = total ? Math.round((count / total) * 100) : 0;

          return (
            <div key={item._id || "none"}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="capitalize text-gray-600">{String(item._id || "none").replaceAll("_", " ")}</span>
                <span className="text-gray-500">{count}</span>
              </div>
              <div className="h-2 rounded-full bg-gray-100">
                <div className="h-2 rounded-full bg-[#01A49E]" style={{ width: `${percent}%` }} />
              </div>
            </div>
          );
        }) : (
          <p className="text-sm text-gray-500">No data available</p>
        )}
      </div>
    </div>
  );
}

export default async function AdminDashboardStats() {
  const dashboardRes = await getDashboardData();
  const dashboard = dashboardRes?.data || {};
  const stats = dashboard.stats || {};
  const charts = dashboard.charts || {};

  return (
    <section className="w-full bg-gray-50 p-2">
      <div className="mb-5">
        <h1 className="text-2xl font-medium text-gray-900">Admin Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Live store summary and recent activity</p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={WalletCards}
          label="Revenue"
          value={money.format(stats.totalRevenue || 0)}
          note={`${stats.paidOrdersCount || 0} paid orders`}
        />
        <StatCard
          icon={ShoppingBag}
          label="Orders"
          value={stats.totalOrders || 0}
          note={`${stats.pendingPaymentCount || 0} pending payments`}
        />
        <StatCard
          icon={Boxes}
          label="Products"
          value={stats.totalProducts || 0}
          note={`${stats.activeProducts || 0} active in stock`}
        />
        <StatCard
          icon={Users}
          label="Customers"
          value={stats.totalCustomers || 0}
          note={`${stats.totalCategories || 0} categories, ${stats.totalBrands || 0} brands`}
        />
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-3">
        <div className="border border-gray-200 bg-white p-4 xl:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-medium text-gray-900">Revenue Trend</h2>
              <p className="text-xs text-gray-500">Last 7 days based on placed orders</p>
            </div>
            <PackageCheck className="text-gray-500" size={18} />
          </div>
          <MiniBars data={charts.revenueByDay?.length ? charts.revenueByDay : [{ _id: new Date().toISOString(), revenue: 0 }]} />
        </div>

        <div className="grid gap-4">
          <Breakdown title="Order Status" items={charts.statusBreakdown || []} />
          <div className="border border-gray-200 bg-white p-4">
            <h2 className="text-base font-medium text-gray-900">Payment Method</h2>
            <p className="mb-4 mt-1 text-sm text-gray-500">COD vs online orders</p>
            <PieChart data={charts.paymentBreakdown || []} />
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <StatCard
          icon={CreditCard}
          label="Average Order"
          value={money.format(stats.averageOrderValue || 0)}
          note="Average customer order value"
        />
        <StatCard
          icon={PackageCheck}
          label="Delivered"
          value={stats.deliveredOrdersCount || 0}
          note="Completed deliveries"
        />
        <StatCard
          icon={Boxes}
          label="Active Catalog"
          value={stats.activeProducts || 0}
          note="Visible and in-stock products"
        />
      </div>
    </section>
  );
}
