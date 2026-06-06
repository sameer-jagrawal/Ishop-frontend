import { getSingleOrder } from "@/api_call/api";
import Link from "next/link";

const money = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function formatDate(dateValue) {
  if (!dateValue) return "Not available";

  return new Date(dateValue).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function DetailRow({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="mt-1 text-sm text-gray-800">{value || "Not available"}</p>
    </div>
  );
}

export default async function OrderViewPage({ params }) {
  const { id } = await params;
  const orderRes = await getSingleOrder(id);
  const order = orderRes?.data?.order;
  const address = order?.shippingAddress;

  if (!order) {
    return (
      <div className="border border-gray-200 bg-white p-6">
        <h1 className="text-xl font-medium text-gray-900">Order not found</h1>
        <Link href="/admin" className="mt-4 inline-block text-sm text-[#01A49E] hover:underline">
          Back to dashboard
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-gray-50 p-2">
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-medium text-gray-900">Order Details</h1>
          <p className="mt-1 break-all text-sm text-gray-500">Order ID: {order._id}</p>
        </div>
        <Link href="/admin" className="w-fit border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          Back
        </Link>
      </div>

      <section className="grid grid-cols-1 gap-3 md:grid-cols-4">
        <div className="border border-gray-200 bg-white p-4">
          <p className="text-sm text-gray-500">Order Date</p>
          <p className="mt-2 text-lg font-medium text-gray-900">{formatDate(order.createdAt)}</p>
        </div>
        <div className="border border-gray-200 bg-white p-4">
          <p className="text-sm text-gray-500">Payment Method</p>
          <p className="mt-2 text-lg font-medium capitalize text-gray-900">{order.paymentMethod}</p>
        </div>
        <div className="border border-gray-200 bg-white p-4">
          <p className="text-sm text-gray-500">Payment Status</p>
          <p className="mt-2 text-lg font-medium capitalize text-gray-900">{order.paymentStatus}</p>
        </div>
        <div className="border border-gray-200 bg-white p-4">
          <p className="text-sm text-gray-500">Order Status</p>
          <p className="mt-2 text-lg font-medium capitalize text-gray-900">
            {order.orderStatus?.replaceAll("_", " ")}
          </p>
        </div>
      </section>

      <section className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[1fr_340px]">
        <div className="border border-gray-200 bg-white p-4">
          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-900">Products</h2>
            <p className="text-sm text-gray-500">Items included in this order</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px]">
              <thead>
                <tr className="border-b border-gray-200 text-left text-sm text-gray-500">
                  <th className="py-3 font-medium">Thumbnail</th>
                  <th className="px-3 py-3 font-medium">Product</th>
                  <th className="px-3 py-3 font-medium">Qty</th>
                  <th className="px-3 py-3 font-medium">Price</th>
                  <th className="px-3 py-3 text-right font-medium">Total</th>
                </tr>
              </thead>
              <tbody>
                {order.items?.map((item, index) => {
                  const product = item?.product_id;
                  const thumbnail = product?.thumbnail;

                  return (
                    <tr key={`${product?._id || "deleted"}-${index}`} className="border-b border-gray-100 text-sm text-gray-700">
                      <td className="py-3">
                        <div className="h-16 w-16 overflow-hidden border border-gray-200 bg-gray-50">
                          {thumbnail ? (
                            <img
                              src={thumbnail}
                              alt={product?.name || "Product thumbnail"}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="grid h-full w-full place-items-center text-xs text-gray-400">
                              No image
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-3 py-3">
                        <p className="text-gray-900">{product?.name || "Deleted product"}</p>
                        <p className="mt-1 text-xs text-gray-500">{product?._id || "Product no longer exists"}</p>
                      </td>
                      <td className="px-3 py-3">{item.qty}</td>
                      <td className="px-3 py-3">{money.format(item.price || 0)}</td>
                      <td className="px-3 py-3 text-right">{money.format(item.total || 0)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="border border-gray-200 bg-white p-4">
            <h2 className="text-lg font-medium text-gray-900">Customer</h2>
            <div className="mt-4 space-y-4">
              <DetailRow label="Name" value={order.user?.name} />
              <DetailRow label="Email" value={order.user?.email} />
              <DetailRow label="Phone" value={address?.phone} />
            </div>
          </div>

          <div className="border border-gray-200 bg-white p-4">
            <h2 className="text-lg font-medium text-gray-900">Shipping Address</h2>
            <div className="mt-4 space-y-4">
              <DetailRow label="Full Name" value={address?.fullName} />
              <DetailRow label="Address" value={[address?.addressLine1, address?.addressLine2].filter(Boolean).join(", ")} />
              <DetailRow label="City" value={[address?.city, address?.state, address?.country].filter(Boolean).join(", ")} />
              <DetailRow label="Postal Code" value={address?.postalCode} />
            </div>
          </div>

          <div className="border border-gray-200 bg-white p-4">
            <h2 className="text-lg font-medium text-gray-900">Payment Summary</h2>
            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
              <span className="text-sm text-gray-600">Total Amount</span>
              <span className="text-lg font-medium text-gray-900">{money.format(order.totalAmount || 0)}</span>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
