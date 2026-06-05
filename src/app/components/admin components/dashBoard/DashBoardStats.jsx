import { getAllOrders, getProduct } from "@/api_call/api";
import {
  Activity,
  Boxes,
  CreditCard,
  PackageCheck,
  PieChart,
  ShoppingBag,
  TrendingUp,
  WalletCards,
} from "lucide-react";

const money = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function byDayLabel(dateValue) {
  return new Date(dateValue).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
  });
}

function percent(value, total) {
  if (!total) return 0;
  return Math.round((value / total) * 100);
}

function summarizeOrders(orders) {
  const totalRevenue = orders.reduce((sum, order) => sum + Number(order?.totalAmount || 0), 0);
  const paidOrders = orders.filter((order) => order?.paymentStatus === "paid");
  const pendingPayments = orders.filter((order) => order?.paymentStatus === "pending");
  const codOrders = orders.filter((order) => order?.paymentMethod === "cod");
  const onlineOrders = orders.filter((order) => order?.paymentMethod === "online");

  const revenueByDay = orders.reduce((acc, order) => {
    const label = byDayLabel(order?.createdAt);
    acc[label] = (acc[label] || 0) + Number(order?.totalAmount || 0);
    return acc;
  }, {});

  const statusBreakdown = orders.reduce((acc, order) => {
    const status = order?.orderStatus || "placed";
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  return {
    totalRevenue,
    paidOrders,
    pendingPayments,
    codOrders,
    onlineOrders,
    revenueSeries: Object.entries(revenueByDay).slice(0, 7),
    statusSeries: Object.entries(statusBreakdown),
  };
}

function StatCard({ icon: Icon, label, value, detail }) {
  return (
    <div className="border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase text-gray-500">{label}</p>
          <h3 className="mt-2 text-xl font-bold text-gray-950">{value}</h3>
        </div>
        <span className="grid h-9 w-9 place-items-center border border-gray-200 bg-gray-50 text-gray-700">
          <Icon size={18} />
        </span>
      </div>
      <p className="mt-3 text-xs text-gray-500">{detail}</p>
    </div>
  );
}

function BarChart({ data }) {
  const max = Math.max(...data.map(([, value]) => value), 1);

  return (
    <div className="flex h-44 items-end gap-2 border-t border-gray-100 pt-4">
      {data.map(([label, value]) => (
        <div key={label} className="flex min-w-0 flex-1 flex-col items-center gap-2">
          <div className="flex h-32 w-full items-end bg-gray-50">
            <div
              className="w-full bg-[#01A49E]"
              style={{ height: `${Math.max((value / max) * 100, 8)}%` }}
              title={`${label}: ${money.format(value)}`}
            />
          </div>
          <span className="max-w-full truncate text-[11px] text-gray-500">{label}</span>
        </div>
      ))}
    </div>
  );
}

function DonutChart({ codCount, onlineCount }) {
  const total = codCount + onlineCount;
  const codPercent = percent(codCount, total);
  const onlinePercent = 100 - codPercent;

  return (
    <div className="flex items-center gap-5">
      <div
        className="grid h-32 w-32 place-items-center rounded-full"
        style={{
          background: `conic-gradient(#01A49E 0 ${codPercent}%, #6366f1 ${codPercent}% 100%)`,
        }}
      >
        <div className="grid h-20 w-20 place-items-center rounded-full bg-white text-center">
          <span className="text-xl font-bold text-gray-950">{total}</span>
        </div>
      </div>
      <div className="space-y-3 text-sm">
        <p className="flex items-center gap-2 text-gray-700">
          <span className="h-3 w-3 bg-[#01A49E]" />
          COD {codPercent}%
        </p>
        <p className="flex items-center gap-2 text-gray-700">
          <span className="h-3 w-3 bg-indigo-500" />
          Online {onlinePercent}%
        </p>
      </div>
    </div>
  );
}

function StatusPie({ data }) {
  const total = data.reduce((sum, [, value]) => sum + value, 0);
  const colors = ["#01A49E", "#f59e0b", "#6366f1", "#ef4444", "#64748b", "#10b981"];
  const stops = data.reduce((segments, [, value], index) => {
    const cursor = segments.cursor;
    const size = percent(value, total);
    const stop = `${colors[index % colors.length]} ${cursor}% ${cursor + size}%`;
    return {
      cursor: cursor + size,
      values: [...segments.values, stop],
    };
  }, { cursor: 0, values: [] }).values;

  return (
    <div className="flex items-center gap-5">
      <div
        className="h-32 w-32 rounded-full border border-gray-100"
        style={{ background: `conic-gradient(${stops.join(", ") || "#e5e7eb 0 100%"})` }}
      />
      <div className="grid gap-2 text-xs text-gray-600">
        {data.map(([label, value], index) => (
          <p key={label} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5" style={{ backgroundColor: colors[index % colors.length] }} />
            {label.replaceAll("_", " ")}: {value}
          </p>
        ))}
      </div>
    </div>
  );
}

export default async function AdminDashboardStats() {
  const [ordersRes, productsRes] = await Promise.all([
    getAllOrders(),
    getProduct({ limit: 1000 }),
  ]);
  const orders = ordersRes?.data?.orders || [];
  const products = productsRes?.data || [];
  const summary = summarizeOrders(orders);
  const avgOrder = orders.length ? summary.totalRevenue / orders.length : 0;
  const inStock = products.filter((product) => product?.stock).length;

  return (
    <section className="w-full bg-gray-50 p-2">
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-gray-950">Admin Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Sales, order and catalog analysis</p>
      </div>

      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        <StatCard icon={WalletCards} label="Revenue" value={money.format(summary.totalRevenue)} detail={`${orders.length} total orders`} />
        <StatCard icon={ShoppingBag} label="Orders" value={orders.length} detail={`${summary.pendingPayments.length} pending payments`} />
        <StatCard icon={Boxes} label="Products" value={products.length} detail={`${inStock} available products`} />
        <StatCard icon={TrendingUp} label="Avg Order" value={money.format(avgOrder)} detail={`${summary.paidOrders.length} paid orders`} />
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-3">
        <div className="border border-gray-200 bg-white p-4 shadow-sm xl:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-gray-950">Revenue Trend</h2>
              <p className="text-xs text-gray-500">Recent order value by day</p>
            </div>
            <Activity className="text-gray-500" size={19} />
          </div>
          <BarChart data={summary.revenueSeries.length ? summary.revenueSeries : [["No orders", 0]]} />
        </div>

        <div className="border border-gray-200 bg-white p-4 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-gray-950">Payment Mix</h2>
              <p className="text-xs text-gray-500">COD vs online payments</p>
            </div>
            <CreditCard className="text-gray-500" size={19} />
          </div>
          <DonutChart codCount={summary.codOrders.length} onlineCount={summary.onlineOrders.length} />
        </div>

        <div className="border border-gray-200 bg-white p-4 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-gray-950">Order Status</h2>
              <p className="text-xs text-gray-500">Fulfillment distribution</p>
            </div>
            <PieChart className="text-gray-500" size={19} />
          </div>
          <StatusPie data={summary.statusSeries.length ? summary.statusSeries : [["none", 0]]} />
        </div>

        <div className="border border-gray-200 bg-white p-4 shadow-sm xl:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-gray-950">Catalog Signals</h2>
              <p className="text-xs text-gray-500">Product flags used on storefront sections</p>
            </div>
            <PackageCheck className="text-gray-500" size={19} />
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ["Home", products.filter((product) => product?.is_home).length],
              ["Top", products.filter((product) => product?.is_top).length],
              ["Best", products.filter((product) => product?.is_best).length],
              ["Hot", products.filter((product) => product?.is_hot).length],
            ].map(([label, value]) => (
              <div key={label} className="border border-gray-200 bg-gray-50 p-3">
                <p className="text-xs font-semibold uppercase text-gray-500">{label}</p>
                <p className="mt-2 text-xl font-bold text-gray-950">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
